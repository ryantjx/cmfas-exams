#!/usr/bin/env node
/**
 * Rebalance the answer-key spread in a question bank.
 *
 * The CM-SIP bank was written answer-first, so 51% of single-answer questions had
 * the correct option at `a` and only 1% at `d`. A candidate who always picks `a`
 * scores about half. The quiz shuffles options at runtime, but the source bank is
 * also printed to PDF, so the printed order should be fair too.
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
 *   node scripts/rebalance-answers.mjs              # dry run, CM-SIP
 *   node scripts/rebalance-answers.mjs --write      # apply, CM-SIP
 *   node scripts/rebalance-answers.mjs --exam res12b --write
 *
 * CM-EIP is not handled here: its bank is regenerated from
 * `scripts/lib/questions-cmeip.mjs`, so use `rebalance-cmeip-source.mjs`.
 */

import { readFileSync, writeFileSync } from 'node:fs';

const WRITE = process.argv.includes('--write');
const examArg = process.argv.indexOf('--exam');
const EXAM = examArg !== -1 ? process.argv[examArg + 1] : 'cmsip';

/** Per-bank markup differences. */
const FORMATS = {
  cmsip: {
    file: 'notes/cmsip/CMSIP_QUESTIONS.md',
    questionStart: /^\*\*(\d+)\.\s*\[/,
    option: /^([a-d])\.\s+(.*)$/,
    answer: /^\*\*Answer: ([a-d])\.\*\*/,
    rewriteAnswer: (letter) => `**Answer: ${letter}.**`,
    // CM-SIP options are `a. text` lines at column 0, and its answer line is
    // `**Answer: a.** rationale` — the letter alone, so no text needs carrying.
    buildOption: (letter, text) => `${letter}. ${text}`,
    answerCarriesText: false,
  },
  // FMRP and RES 12B use `### N. **[Type]**` headings and a two-part answer block
  // (`**Answer:** B. text` plus `**Rationale:**`). Their option lists are not
  // consistent across the two files — FMRP writes `- a. text` while RES 12B writes
  // bare `a. text` — so both prefixes are accepted and the dominant style is
  // preserved when rewriting.
  heading: {
    file: null,
    questionStart: /^###\s+(\d+)\.\s*\*\*/,
    option: /^(?:-\s+)?([a-dA-D])\.\s+(.*)$/,
    answer: /^\*\*Answer:\*\*\s*([a-dA-D])\./,
    rewriteAnswer: (letter, text) => `**Answer:** ${letter.toUpperCase()}. ${text}`,
    buildOption: (letter, text) => `- ${letter}. ${text}`,
    answerCarriesText: true,
  },
};

/** Per-bank file paths for the `heading` markup, keyed by exam id. */
const HEADING_FILES = {
  fmrp: 'notes/fmrp/FMRP_QUESTIONS.md',
  res12b: 'notes/res12b/RES12B_QUESTIONS.md',
};

if (HEADING_FILES[EXAM]) {
  FORMATS.heading.file = HEADING_FILES[EXAM];
}

// CM-EIP has no hand-written block: its whole bank is regenerated from
// `scripts/lib/questions-cmeip.mjs` on every `append-questions` run, so rotating
// the rendered markdown here would be silently discarded. Point at the script
// that edits the source instead of producing a change that cannot survive.
if (EXAM === 'cmeip') {
  console.error(
    'CM-EIP is generated from scripts/lib/questions-cmeip.mjs.\n' +
      'Use: node scripts/rebalance-cmeip-source.mjs --write',
  );
  process.exit(1);
}

const FMT = EXAM === 'cmsip' ? FORMATS.cmsip : FORMATS.heading;
const FILE = FMT.file;

/**
 * True when the options form a genuinely sortable numeric sequence.
 *
 * Numeric options are conventionally presented in ascending order, so rotating
 * them would look wrong for no fairness gain. But a numeric option set is only
 * "sorted" if it already is in order — a set of unrelated numbers in arbitrary
 * order carries no such convention and can be rotated freely. Requiring the
 * values to be monotonically increasing keeps the rule honest.
 */
function isNumericSet(texts) {
  const values = texts.map((t) => {
    const cleaned = t
      .replace(/[\s$,%]/g, '')
      .replace(/^(usd|sgd|s\$|us\$)/i, '')
      .replace(/[xk]$/i, '')
      .replace(/\u2212/g, '-');
    return Number(cleaned);
  });

  if (values.some((v) => !Number.isFinite(v))) return false;

  // Only treat as a convention-bound sequence when it is already ascending or
  // descending. An unsorted numeric set is fair game.
  const ascending = values.every((v, i) => i === 0 || values[i - 1] <= v);
  const descending = values.every((v, i) => i === 0 || values[i - 1] >= v);
  return ascending || descending;
}

const lines = readFileSync(FILE, 'utf8').split('\n');

// Group the file into question blocks: indices of each question start.
const starts = [];
lines.forEach((line, i) => {
  if (FMT.questionStart.test(line)) starts.push(i);
});

/** Parse one question block into { start, options: [{idx, letter, text, prefix}], answerIdx, answerLetter }. */
function parseBlock(start, end) {
  const options = [];
  let answerIdx = -1;
  let answerLetter = null;
  let inDetails = false;
  for (let i = start; i < end; i += 1) {
    // Options only appear above the disclosure block; matching inside it would pick
    // up the answer's own "B. text" payload as a spurious option.
    if (/^\s*<details\b/i.test(lines[i])) inDetails = true;
    if (inDetails) {
      const ans = lines[i].match(FMT.answer);
      if (ans && answerIdx === -1) {
        answerIdx = i;
        answerLetter = ans[1].toLowerCase();
      }
      continue;
    }
    const opt = lines[i].match(FMT.option);
    if (opt) {
      const prefix = /^-/.test(lines[i]) ? '- ' : '';
      options.push({ idx: i, letter: opt[1].toLowerCase(), text: opt[2], prefix });
    }
  }
  return { start, options, answerIdx, answerLetter };
}

const blocks = starts.map((s, i) => parseBlock(s, starts[i + 1] ?? lines.length));

/**
 * An option that refers to other options ("all of the above", "both (a) and (b)")
 * cannot be reordered at all: its text names positions rather than content. These
 * are left untouched and excluded from the balance count, because reordering them
 * would make the question nonsense.
 */
const REFERS_TO_POSITIONS =
  /\ball of the above\b|\bnone of the above\b|\bboth\s*\(?[a-d]\)?|\b(options?|choices?)\s*\(?[a-d]\)?/i;
const isPositionDependent = (b) => b.options.some((o) => REFERS_TO_POSITIONS.test(o.text));

// Only single-answer questions with exactly four options a-d in order.
const eligible = blocks.filter((b) => {
  if (b.answerLetter === null) return false;
  if (b.options.length !== 4) return false;
  if (b.options.some((o, i) => o.letter !== 'abcd'[i])) return false;
  return true;
});

const frozen = eligible.filter(isPositionDependent);
const movable = eligible.filter((b) => !isPositionDependent(b));

/**
 * A sortable numeric set cannot be rotated without looking untidy, but it can be
 * *reversed*, which stays sorted (descending instead of ascending). Reversing maps
 * answer `a` to `d`, and it happens to be all that is needed for these items.
 */
const numericBlocks = movable.filter((b) => isNumericSet(b.options.map((o) => o.text)));
const rotatable = movable.filter((b) => !isNumericSet(b.options.map((o) => o.text)));

const spread = { a: 0, b: 0, c: 0, d: 0 };
for (const b of eligible) spread[b.answerLetter] += 1;

console.log(`single-answer questions with four ordered options: ${eligible.length}`);
console.log(
  `  rotatable: ${rotatable.length}   sortable-numeric (reverse only): ${numericBlocks.length}   position-dependent (frozen): ${frozen.length}`,
);
console.log(`current spread: ${Object.entries(spread).map(([k, v]) => `${k} ${v}`).join('  ')}`);

let changed = 0;
const planned = { a: 0, b: 0, c: 0, d: 0 };

// Numeric sets: reverse alternate items. Reversal keeps the sequence sorted while
// breaking up runs of the same answer letter.
let reversed = 0;
numericBlocks.forEach((b, i) => {
  if (i % 2 === 0) {
    planned[b.answerLetter] += 1;
    return;
  }
  const texts = b.options.map((o) => o.text);
  const flipped = [3, 2, 1, 0].map((k) => texts[k]);
  b.options.forEach((o, k) => {
    lines[o.idx] = `${o.prefix}${'abcd'[k]}. ${flipped[k]}`;
  });
  const newLetter = 'abcd'[3 - (b.answerLetter.charCodeAt(0) - 97)];
  lines[b.answerIdx] = FMT.answerCarriesText
    ? FMT.rewriteAnswer(newLetter, flipped[newLetter.charCodeAt(0) - 97])
    : lines[b.answerIdx].replace(FMT.answer, FMT.rewriteAnswer(newLetter));
  planned[newLetter] += 1;
  reversed += 1;
});
if (reversed) console.log(`numeric sets reversed: ${reversed}`);

for (const b of frozen) planned[b.answerLetter] += 1;

/**
 * Greedy fill: for each remaining question, move its correct option to whichever
 * letter is currently least used among the items already placed. This is strictly
 * better than a fixed a,b,c,d cycle, because the frozen and numeric items have
 * already consumed part of the budget and the cycle would ignore that.
 *
 * Option *texts* are rotated rather than shuffled, so the relative order of the
 * distractors is preserved and a question whose options run least-to-most still
 * runs in one direction.
 */
rotatable.forEach((b) => {
  const target = ['a', 'b', 'c', 'd'].reduce((best, k) => (planned[k] < planned[best] ? k : best));

  const cur = b.answerLetter.charCodeAt(0) - 97;
  const want = target.charCodeAt(0) - 97;
  // Rotating the option texts by `shift` moves the text at index i to (i + shift) % 4.
  const shift = (want - cur + 4) % 4;

  if (shift !== 0) {
    const texts = b.options.map((o) => o.text);
    const rotated = [0, 1, 2, 3].map((i) => texts[(i - shift + 4) % 4]);
    b.options.forEach((o, i) => {
      lines[o.idx] = `${o.prefix}${'abcd'[i]}. ${rotated[i]}`;
    });
    // Replace the whole line: the heading-format answer quotes the option text, so
    // replacing only the matched prefix would leave the old text appended.
    lines[b.answerIdx] = FMT.answerCarriesText
      ? FMT.rewriteAnswer(target, rotated[want])
      : lines[b.answerIdx].replace(FMT.answer, FMT.rewriteAnswer(target));
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
