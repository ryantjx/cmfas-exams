#!/usr/bin/env node
/**
 * Parameter-coverage audit: which *examinable numbers* in the official study guide
 * never reach the teaching guide?
 *
 * `audit-guides.mjs` proves every official section has a heading. It cannot see that
 * a headed section has lost the number the question turns on — "six transactions in
 * three years", "T+2", "0.01 index points", "5%". Those are what the papers test, so
 * a heading-complete guide can still be unanswerable.
 *
 * Comparing *every* digit would be useless noise: a worked example contains dozens of
 * intermediate results (`1,009,230.76`, `0.013919`) that a study aid must not reprint.
 * This audit therefore scores **parameters only** — numbers a candidate could be asked
 * to recall or apply:
 *
 *   percentage        5%, 0.25%, 70%
 *   rate / multiple   0.1bps, 3×, 5x
 *   settlement        T+2, T+1
 *   period            3 years, 5 business days, 12 months
 *   round amount      250,000 / 1,000,000 / 20,000,000  (money, ending in 00)
 *   year              1997, 2021, 2024
 *
 * Per-chapter bucketing comes from each page's running header (`21 | Chapter 3 – …`),
 * so the report names the chapter that dropped a parameter rather than the whole exam.
 *
 * Reads only. Advisory by default; `--strict` exits non-zero when any exam is below
 * `NUMERIC_MIN_COVERAGE` (default 0.85). `--verbose` prints every absent token.
 */

import { readdirSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { readLines, readText } from './lib/util.mjs';

const strict = process.argv.includes('--strict');
const verbose = process.argv.includes('--verbose');

/** Share of an exam's source parameters the guide must carry. */
const MIN_COVERAGE = Number(process.env.NUMERIC_MIN_COVERAGE ?? 0.85);

/** Running headers and other page furniture. */
const FURNITURE = [
  /Capital Markets and Financial Advisory Services Examination/i,
  /Capital Markets\s*[-–]\s*Specified Investment Products/i,
  /Financial Markets Regulatory Practices \(FMRP\) Examination/i,
  /RES [12]B\s*[-–]\s*Rules, Ethics and Skills/i,
  /^\s*Restricted\s*$/i,
  /^\s*(Chapter|Appendix)\s+\S+\s*$/i,
  /^\s*[ivxlcdm]+\s*\|\s*/i,
];

/**
 * A chapter running header, whichever way the source lays it out:
 *   `21 | Chapter 3 – Confidentiality and Information Sharing`   (verso, piped)
 *   `Chapter 3 – Confidentiality and Information Sharing | 22`   (recto, piped)
 *   `55  Chapter 3 - Market Conduct`                             (unpiped)
 * Table-of-contents lines are excluded by their dot leaders, checked below.
 */
const RUNNING_HEAD = /\bChapter\s+(\d+)\s*[–-]\s*[A-Z]/i;

/** RES 12B prints the part in the running header; other exams have a single part. */
const PART_HEAD = /\bRES\s+(1B|2B)\b/i;

function isFurniture(line) {
  const t = line.trim();
  if (!t) return true;
  if (/^\d{1,3}$/.test(t)) return true; // bare page number
  if (/\.{5,}/.test(t)) return true; // TOC dot leader
  return FURNITURE.some((re) => re.test(t));
}

/**
 * Parameters in a block of text, normalised so `1,000,000` and `1000000` compare
 * equal and `5 %` compares equal to `5%`.
 */
function parameters(text) {
  const found = new Set();
  const push = (value) => found.add(value.replace(/[\s,]/g, '').toLowerCase());

  // Percentages and basis points.
  for (const m of text.matchAll(/\b\d+(?:\.\d+)?\s*%/g)) push(m[0]);
  for (const m of text.matchAll(/\b\d+(?:\.\d+)?\s*bps?\b/gi)) push(m[0]);

  // Multiples written with a symbol or a trailing x ("5x", "3 ×").
  for (const m of text.matchAll(/\b\d+(?:\.\d+)?\s*(?:×|x)\b/g)) push(m[0]);

  // Settlement conventions: T+2, T+1, T+3.
  for (const m of text.matchAll(/\bT\s*\+\s*\d+\b/g)) push(m[0].replace(/\s/g, ''));

  // Periods, which the papers quote verbatim ("six transactions in three years").
  for (const m of text.matchAll(
    /\b\d+\s*(?:business|calendar)?\s*(?:day|days|week|weeks|month|months|year|years|hour|hours|minute|minutes)\b/gi,
  )) {
    push(m[0].replace(/\b(?:business|calendar)\b/gi, '').replace(/\s+/g, ''));
  }

  // Round money amounts: thousand-separated and ending in at least two zeros.
  for (const m of text.matchAll(/\b\d{1,3}(?:,\d{3})+(?:\.\d+)?\b/g)) {
    const whole = m[0].replace(/,/g, '').split('.')[0];
    if (/(00)$/.test(whole)) push(m[0]);
  }

  // Years are parameters ("since 1 July 2021", "the 1997–1998 crisis").
  for (const m of text.matchAll(/\b(?:19|20)\d{2}\b/g)) push(m[0]);

  return found;
}

/** Parameters per chapter, from the running header that repeats on each page. */
function sourceParameters(exam) {
  const dir = path.join('.cache', 'pdf', exam.id, 'pages');
  const files = readdirSync(dir).filter((name) => name.endsWith('.txt')).sort();

  const byChapter = new Map();
  let current = null;
  let part = null;

  for (const name of files) {
    const lines = readLines(path.join(dir, name));
    // The running header names the chapter this page belongs to. Pages before the
    // first header (cover, preface, TOC) are front matter and are not scored.
    let headerChapter = null;
    for (const line of lines) {
      const partMatch = line.match(PART_HEAD);
      if (partMatch) part = partMatch[1].toUpperCase();

      // A TOC line carries dot leaders; a running head does not.
      if (/\.{5,}/.test(line)) continue;
      const head = line.match(RUNNING_HEAD);
      if (head) {
        headerChapter = head[1];
        break;
      }
    }
    if (headerChapter) current = part ? `${part}-${headerChapter}` : headerChapter;
    if (!current) continue;

    const bucket = byChapter.get(current) ?? new Set();
    for (const token of parameters(lines.filter((line) => !isFurniture(line)).join(' '))) {
      bucket.add(token);
    }
    byChapter.set(current, bucket);
  }

  return { byChapter, pages: files.length };
}

/** Parameters per guide chapter, keyed by the chapter number in its headings. */
function guideParameters(exam) {
  const dir = path.join('notes', exam.id, 'guide');
  const files = readdirSync(dir).filter((name) => name.endsWith('.md')).sort();

  const byChapter = new Map();
  const loose = new Set();

  for (const name of files) {
    const full = readText(path.join(dir, name));
    const raw = full.replace(/^---[\s\S]*?\n---/, '');
    const tokens = parameters(raw);

    // The frontmatter `id` is authoritative and already part-qualified where the
    // exam has parts (`1B-3`, `2B-4`, `1B-appendix-B`). Deriving the key from
    // headings instead would be ambiguous, because RES 12B reuses chapter numbers
    // across its two parts and its H1s carry no number at all.
    const id = full.match(/^id:\s*'?([^'\n]+)'?/m)?.[1]?.trim() ?? null;
    const chapter = id && /^(?:[12]B-)?\d+$/.test(id) ? id : null;

    const bucket = chapter ? (byChapter.get(chapter) ?? new Set()) : loose;
    for (const token of tokens) bucket.add(token);
    if (chapter) byChapter.set(chapter, bucket);
  }

  return { byChapter, loose };
}

let failures = 0;
const summary = [];

for (const exam of EXAMS) {
  const source = sourceParameters(exam);
  const guide = guideParameters(exam);

  const allGuide = new Set(guide.loose);
  for (const set of guide.byChapter.values()) for (const token of set) allGuide.add(token);

  const allSource = new Set();
  for (const set of source.byChapter.values()) for (const token of set) allSource.add(token);

  const missing = [...allSource]
    .filter((token) => !allGuide.has(token))
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

  const coverage = allSource.size ? (allSource.size - missing.length) / allSource.size : 1;
  const pct = Math.round(coverage * 100);

  console.log(`\n${exam.name} — parameter coverage ${pct}%`);
  console.log(
    `  source ${source.pages} pages / ${source.byChapter.size} chapters, ` +
      `guide ${guide.byChapter.size} chapters`,
  );
  console.log(`  parameters in source ${allSource.size}, absent from guide ${missing.length}`);

  for (const [chapter, tokens] of [...source.byChapter.entries()].sort((a, b) => Number(a[0]) - Number(b[0]))) {
    if (!tokens.size) continue;
    const carried = [...tokens].filter((token) => allGuide.has(token)).length;
    const ratio = Math.round((carried / tokens.size) * 100);
    const flag = ratio >= MIN_COVERAGE * 100 ? ' ' : '!';
    console.log(
      `    ${flag} ch ${String(chapter).padStart(2)}  ${String(ratio).padStart(3)}%  ` +
        `(${carried}/${tokens.size})`,
    );
  }

  if (missing.length && (verbose || missing.length <= 30)) {
    const width = Math.max(...missing.map((token) => token.length));
    const perRow = Math.max(1, Math.floor(92 / (width + 2)));
    for (let i = 0; i < missing.length; i += perRow) {
      console.log(`    ${missing.slice(i, i + perRow).map((t) => t.padEnd(width)).join('  ')}`);
    }
  } else if (missing.length) {
    console.log('    (pass --verbose to list every absent parameter)');
  }

  summary.push({ exam: exam.name, pct, carried: allSource.size - missing.length, total: allSource.size });
  if (coverage < MIN_COVERAGE) failures += 1;
}

console.log('\nSummary');
for (const row of summary) {
  const flag = row.pct >= MIN_COVERAGE * 100 ? 'OK ' : 'LOW';
  console.log(`  ${flag} ${row.exam.padEnd(8)} ${String(row.pct).padStart(3)}%  (${row.carried}/${row.total})`);
}
console.log(
  `\nThreshold ${Math.round(MIN_COVERAGE * 100)}% of source parameters. ` +
    (failures ? `${failures} exam(s) below threshold.` : 'All exams above threshold.'),
);
if (strict && failures) process.exit(1);
