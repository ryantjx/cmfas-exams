#!/usr/bin/env node
/**
 * Rebalance the answer-key spread in the CM-EIP question *source* module.
 *
 * `scripts/rebalance-answers.mjs` operates on the rendered Markdown banks. The
 * CM-EIP bank is authored in `scripts/lib/questions-cmeip.mjs` and rendered from
 * there, so the rotation has to be applied to the source or it is lost on the
 * next build.
 *
 * The bank was written answer-first, so 68% of single-answer questions had the
 * correct option at `b`. The quiz shuffles options at runtime, but the bank is
 * also printed to PDF, so the printed order should be fair too.
 *
 * Strategy: for each single-answer question, rotate the four options so the
 * correct one lands on a target letter that cycles a, b, c, d. Rotation (rather
 * than a random permutation) keeps the relative order of the distractors, so a
 * question whose options run from "least" to "most" still runs in one direction.
 *
 * Numeric-only option sets that are already in ascending order are skipped:
 * those are conventionally sorted, and rotating them would produce a visibly
 * untidy bank for no fairness gain.
 *
 * Usage:
 *   node scripts/rebalance-cmeip-source.mjs            # dry run
 *   node scripts/rebalance-cmeip-source.mjs --write    # apply
 */

import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'scripts/lib/questions-cmeip.mjs';
const WRITE = process.argv.includes('--write');
const LETTERS = ['a', 'b', 'c', 'd'];

const source = readFileSync(FILE, 'utf8');

/** Split the file into question blocks, keeping the surrounding text intact. */
const blocks = source.split(/(?=^  \{\n    c: ')/m);

/** True when every option is a plain number and the list is already ascending. */
function isSortedNumeric(options) {
  const nums = options.map((o) => {
    const cleaned = o.replace(/[$,%x\s]/g, '').replace(/[−–]/g, '-');
    return /^-?\d+(\.\d+)?$/.test(cleaned) ? Number(cleaned) : NaN;
  });
  if (nums.some(Number.isNaN)) return false;
  return nums.every((n, i) => i === 0 || nums[i - 1] <= n);
}

let rotated = 0;
let skippedNumeric = 0;
let skippedMulti = 0;
let counter = 0;

const out = blocks.map((block) => {
  const optMatch = block.match(/^    o: \[(.*)\],$/m);
  const ansMatch = block.match(/^    a: '([a-d])',$/m);
  if (!optMatch || !ansMatch) {
    if (/^    a: '[a-d],[a-d]/m.test(block)) skippedMulti += 1;
    return block;
  }

  // Parse the option list. Options are single-quoted and may contain escaped
  // quotes, so split on `', '` boundaries rather than a naive comma split.
  const raw = optMatch[1];
  const options = [];
  let current = '';
  let inString = false;
  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];
    if (ch === '\\') {
      current += ch + raw[i + 1];
      i += 1;
      continue;
    }
    if (ch === "'") {
      inString = !inString;
      continue;
    }
    if (!inString && ch === ',') {
      options.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  options.push(current.trim());

  if (options.length !== 4) return block;
  if (isSortedNumeric(options)) {
    skippedNumeric += 1;
    return block;
  }

  const correctIndex = LETTERS.indexOf(ansMatch[1]);
  const targetIndex = counter % 4;
  counter += 1;
  const shift = (targetIndex - correctIndex + 4) % 4;
  if (shift === 0) return block;

  const rotatedOptions = options.map((_, j) => options[(j - shift + 4) % 4]);
  const newLetter = LETTERS[targetIndex];
  rotated += 1;

  return block
    .replace(
      /^    o: \[.*\],$/m,
      `    o: [${rotatedOptions.map((o) => `'${o}'`).join(', ')}],`,
    )
    .replace(/^    a: '[a-d]',$/m, `    a: '${newLetter}',`);
});

console.log(`rotated: ${rotated}`);
console.log(`skipped (sorted numeric): ${skippedNumeric}`);
console.log(`skipped (multiple response): ${skippedMulti}`);

if (WRITE) {
  writeFileSync(FILE, out.join(''), 'utf8');
  console.log(`written: ${FILE}`);
} else {
  console.log('dry run — pass --write to apply');
}
