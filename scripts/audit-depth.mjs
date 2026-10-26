#!/usr/bin/env node
/**
 * Depth audit: how much of the official study guide does the teaching guide
 * actually carry?
 *
 * `npm run audit` answers "is every official *section* represented by a heading?".
 * This answers a different and harder question: "how much of the official *prose*
 * is present?" A section can be fully headed and still be a two-line summary, which
 * is exactly how the first draft failed.
 *
 * Method
 *   source words  every word of `.cache/pdf/<exam>/full.txt` after removing the
 *                  running header/footer block that repeats on each page, the page
 *                  numbers and the table-of-contents dot leaders.
 *   guide words   every word of `notes/<exam>/guide/*.md`, excluding frontmatter.
 *
 * The ratio is the compression factor. The repo's target is roughly 3:1 for the
 * exam-facing chapters (the guides are a study aid, not a reprint), so anything
 * above about 4:1 marks a chapter that needs another pass. Appendix material is
 * reported separately because it is inherently list-like.
 *
 * Reads only; prints a report and exits non-zero under --strict if any chapter is
 * thinner than the threshold.
 */

import { readdirSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { readLines } from './lib/util.mjs';

const strict = process.argv.includes('--strict');

/** Compression above this is treated as under-written. */
const MAX_RATIO = 4.0;

/** Fractions of a source page that are running header/footer, not content. */
const BOILERPLATE = [
  /Capital Markets and Financial Advisory Services Examination/i,
  /Capital Markets - Specified Investment Products - Derivatives and Collective Investment Schemes/i,
  /Capital Markets\s*[-–]\s*Excluded Investment Products/i,
  /Collective Investment Schemes \(EIP\) and Foreign Exchange/i,
  /Financial Markets Regulatory Practices \(FMRP\) Examination/i,
  /RES 1B\s*[–-]\s*Rules, Ethics and Skills for Securities Dealers of Non-Exchange Members/i,
  /RES 2B\s*[-–]\s*Rules, Ethics and Skills for Derivatives Dealers for Non-Exchange Members/i,
  /^\s*Restricted\s*$/i,
  /^\s*\d+\s*\|\s*(Chapter|Table of Contents|Preface|Acknowledgement|Appendix)/i,
  /^\s*(Chapter|Appendix)\s+\S+\s*$/i,
  /^\s*[ivxlcdm]+\s*\|\s*/i,
];

/** Lines that are page furniture rather than content. */
function isFurniture(line) {
  const t = line.trim();
  if (!t) return true;
  // Bare page numbers.
  if (/^\d{1,3}$/.test(t)) return true;
  // Table-of-contents dot leaders.
  if (/\.{5,}/.test(t)) return true;
  return BOILERPLATE.some((re) => re.test(t));
}

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Source word count, with page furniture stripped. */
function sourceWords(examId) {
  const rel = `.cache/pdf/${examId}/full.txt`;
  const lines = readLines(rel);
  const kept = lines.filter((line) => !isFurniture(line));
  return { words: countWords(kept.join(' ')), lines: kept.length };
}

/** Guide word count per file, excluding YAML frontmatter. */
function guideWords(examId) {
  const dir = path.join('notes', examId, 'guide');
  const files = readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .sort();

  const rows = [];
  for (const name of files) {
    const lines = readLines(path.join(dir, name));
    // Drop the leading frontmatter block.
    let start = 0;
    if (lines[0]?.trim() === '---') {
      const close = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
      if (close !== -1) start = close + 1;
    }
    const body = lines.slice(start).filter((line) => line.trim());
    const title = (lines.find((line) => /^title:/.test(line)) ?? '')
      .replace(/^title:\s*/, '')
      .replace(/^'|'$/g, '');
    rows.push({ file: name, title, words: countWords(body.join(' ')) });
  }
  return rows;
}

let failures = 0;

for (const exam of EXAMS) {
  const source = sourceWords(exam.id);
  const guide = guideWords(exam.id);
  const total = guide.reduce((sum, row) => sum + row.words, 0);
  const ratio = total ? source.words / total : Infinity;

  console.log(`\n${exam.name}`);
  console.log(
    `  source  ${source.words.toLocaleString().padStart(7)} words   ` +
      `guide ${total.toLocaleString().padStart(7)} words   ` +
      `compression ${ratio.toFixed(1)}:1`,
  );

  // Per-file ratios, using an even share of the source as a rough baseline. A
  // chapter's true source length varies, so this flags only *very* thin files
  // rather than pretending to a precise per-chapter comparison.
  const meanShare = source.words / guide.length;
  const thin = [];
  for (const row of guide) {
    if (row.words === 0) {
      thin.push({ ...row, note: 'empty' });
      continue;
    }
    const local = meanShare / row.words;
    if (local > MAX_RATIO * 1.6) thin.push({ ...row, note: `${local.toFixed(1)}:1` });
  }

  console.log(`  guide files: ${guide.length}`);
  if (thin.length) {
    failures += thin.length;
    console.log('  thin files (well below the mean share of source):');
    for (const row of thin) {
      console.log(`    ${row.file.padEnd(58)} ${String(row.words).padStart(6)} w  ${row.note}`);
    }
  } else {
    console.log('  no file is disproportionately thin');
  }
}

console.log(
  `\n${failures} thin file(s). Compression target is about 3:1; above ${MAX_RATIO}:1 suggests a chapter needs another pass.`,
);
if (strict && failures > 0) process.exit(1);
