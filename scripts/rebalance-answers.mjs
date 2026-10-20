#!/usr/bin/env node
/**
 * Rebalance the answer-key spread in the CM-SIP question bank.
 *
 * The bank was written answer-first, so 51% of single-answer questions have the
 * correct option at `a` and only 1% at `d`. A candidate who always picks `a`
 * scores about half. The quiz shuffles options at runtime, but the source bank
 * is also printed to PDF, so the printed order should be fair too.
 *
 * Strategy: for a deterministic subset of single-answer questions, apply a
 * rotation to the four options and rewrite the answer letter. Rotation (rather
 * than a random permutation) keeps the relative order of the distractors, so a
 * question whose options run from "least" to "most" still runs in one direction.
 *
 * Numeric-only option sets are skipped: those are conventionally sorted, and
 * rotating them would produce a visibly untidy bank for no fairness gain.
 *
 * Usage:
 *   node scripts/rebalance-answers.mjs          # dry run, prints the plan
 *   node scripts/rebalance-answers.mjs --write   # apply
 */

import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'notes/cmsip/CMSIP_QUESTIONS.md';
const WRITE = process.argv.includes('--write');

const ANSWER_LINE = /^\*\*Answer: ([a-d])\.\*\*/;
const OPTION_LINE = /^([a-d])\.\s+(.*)$/;
const QUESTION_START = /^\*\*(\d+)\.\s*\[/;

/** True when every option looks like a pure number, percentage or money amount. */
function isNumericSet(texts) {
  return texts.every((t) => {
    const stripped = t
      .replace(/[\s,$%.,]/g, '')
      .replace(/^(usd|sgd|s\$|us\$)/i, '')
      .replace(/m$|k$|x$/i, '');
    return /^\d+$/.test(stripped) && stripped.length > 0;
  });
}

const lines = readFileSync(FILE, 'utf8').split('\n');

// Group the file into question blocks: indices of each `**N. [...]` start.
const starts = [];
lines.forEach((line, i) => {
  if (QUESTION_START.test(line)) starts.push(i);
});

/** Parse one question block into { start, options: [{idx, letter, text}], answerIdx, answerLetter }. */
function parseBlock(start, end) {
  const options = [];
  let answerIdx = -1;
  let answerLetter = null;
  for (let i = start; i < end; i += 1) {
    const opt = lines[i].match(OPTION_LINE);
    if (opt) options.push({ idx: i, letter: opt[1], text: opt[2] });
    const ans = lines[i].match(ANSWER_LINE);
    if (ans) {
      answerIdx = i;
      answerLetter = ans[1];
      break;
    }
  }
  return { start, options, answerIdx, answerLetter };
}

const blocks = starts.map((s, i) => parseBlock(s, starts[i + 1] ?? lines.length));

// Only single-answer questions with exactly four options a-d in order.
const eligible = blocks.filter((b) => {
  if (b.answerLetter === null) return false;
  if (b.options.length !== 4) return false;
  if (b.options.some((o, i) => o.letter !== 'abcd'[i])) return false;
  return !isNumericSet(b.options.map((o) => o.text));
});

const spread = { a: 0, b: 0, c: 0, d: 0 };
for (const b of eligible) spread[b.answerLetter] += 1;

console.log(`single-answer questions with four ordered options: ${eligible.length}`);
console.log(`current spread: ${Object.entries(spread).map(([k, v]) => `${k} ${v}`).join('  ')}`);

// Target: cycle rotations so the answers land as evenly as possible.
// We walk the eligible blocks in file order and assign target letters a,b,c,d,a,b,c,d…
// The rotation needed to move the current answer letter to the target letter is
// shift = (current - target + 4) % 4, applied to the option *positions*.
const TARGET_CYCLE = ['a', 'b', 'c', 'd'];
let changed = 0;
const planned = { a: 0, b: 0, c: 0, d: 0 };

eligible.forEach((b, n) => {
  const target = TARGET_CYCLE[n % 4];
  const cur = b.answerLetter.charCodeAt(0) - 97;
  const want = target.charCodeAt(0) - 97;
  // Move the correct option from position `cur` to position `want`.
  // Rotating the option *texts* by `shift` moves the text at index i to index (i + shift) % 4.
  const shift = (want - cur + 4) % 4;

  if (shift !== 0) {
    const texts = b.options.map((o) => o.text);
    const rotated = [0, 1, 2, 3].map((i) => texts[(i - shift + 4) % 4]);
    b.options.forEach((o, i) => {
      lines[o.idx] = `${'abcd'[i]}. ${rotated[i]}`;
    });
    lines[b.answerIdx] = lines[b.answerIdx].replace(
      /^\*\*Answer: [a-d]\.\*\*/,
      `**Answer: ${target}.**`,
    );
    changed += 1;
  }
  planned[target] += 1;
});

console.log(`questions rotated: ${changed}`);
console.log(`projected spread: ${Object.entries(planned).map(([k, v]) => `${k} ${v}`).join('  ')}`);

if (WRITE) {
  writeFileSync(FILE, lines.join('\n'), 'utf8');
  console.log(`\nwritten: ${FILE}`);
} else {
  console.log('\ndry run — pass --write to apply');
}
