#!/usr/bin/env node
/**
 * Question-bank quality audit.
 *
 * Three checks the parser tests do not make:
 *
 *   DUPLICATES  Two questions that ask the same thing with the same options. The
 *               banks grew incrementally, so near-duplicates are the likeliest
 *               defect. A question is a duplicate when its normalised stem matches
 *               another, or when its stem *and* correct answer both match.
 *
 *   NEAR-DUPES  Stems sharing a long opening run of words but not identical. These
 *               are reported for review rather than failed, because two questions
 *               can legitimately share a scenario and differ in what is asked.
 *
 *   BALANCE     Questions per chapter and per answer key, so an over-weighted
 *               chapter or a bank where the answer is usually "b" is visible.
 *
 *   POSITIONAL  Options whose meaning depends on where they sit ("all of the
 *               above", "both a and b"). The quiz re-letters every option at
 *               runtime (`shuffleOptions`), which silently invalidates them, so a
 *               bank containing one would show a wrong answer on screen.
 *
 * Reads only. `--strict` exits non-zero if a hard duplicate or a positional
 * option is found.
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';

const strict = process.argv.includes('--strict');

/**
 * Refuse to audit stale JSON.
 *
 * `src/data/banks/*.json` is generated and gitignored, so it survives across
 * checkouts and can describe content the markdown no longer contains. Auditing it
 * silently would report on the wrong bank and make `--strict` look like a pass. The
 * generated count is compared with the single source of truth (`expectedQuestions`).
 */
function assertFresh(exam) {
  const file = path.join('src', 'data', 'banks', `${exam.id}.json`);
  const bank = JSON.parse(readFileSync(file, 'utf8'));
  const actual = bank.questions.length;
  if (actual !== exam.expectedQuestions) {
    console.error(
      `\n${exam.name}: ${file} is stale — it holds ${actual} questions but ` +
        `${exam.expectedQuestions} are expected.\nRun \`npm run gen\` before auditing.`,
    );
    process.exit(1);
  }
  return bank;
}

/** Normalise a stem for comparison: case, punctuation, whitespace, numerals. */
function normalise(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[^a-z0-9 ]/g, '')
    .trim();
}

/** The first `n` words of a normalised stem, for near-duplicate detection. */
function opening(text, n = 9) {
  return normalise(text).split(' ').slice(0, n).join(' ');
}

let hardDuplicates = 0;
let positionalOptions = 0;

/**
 * Option text that only makes sense in its original position, matched against the
 * start of the option text. `shuffleOptions` re-letters options at runtime, so any
 * of these would become wrong rather than merely reordered.
 */
const POSITIONAL =
  /^\s*(all|none)\s+of\s+(the\s+)?(above|these|them)\b|^\s*(both|neither)\s+of\s+(the\s+)?(above|these)\b|^\s*[a-d]\s+and\s+[a-d]\s+only\b/i;

for (const exam of EXAMS) {
  const bank = assertFresh(exam);
  const { questions, chapters } = bank;

  console.log(`\n${exam.name} — ${questions.length} questions`);

  // --- exact stem duplicates -----------------------------------------------
  const byStem = new Map();
  for (const q of questions) {
    const key = normalise(q.stem);
    const bucket = byStem.get(key);
    if (bucket) bucket.push(q);
    else byStem.set(key, [q]);
  }
  const exact = [...byStem.values()].filter((list) => list.length > 1);

  // --- same stem and same answer, allowing different wording --------------
  const byStemAnswer = new Map();
  for (const q of questions) {
    const key = `${normalise(q.stem)}||${[...q.answerKeys].sort().join(',')}`;
    const bucket = byStemAnswer.get(key);
    if (bucket) bucket.push(q);
    else byStemAnswer.set(key, [q]);
  }
  const sameAnswer = [...byStemAnswer.values()].filter((list) => list.length > 1);

  // --- near duplicates by shared opening ----------------------------------
  const byOpening = new Map();
  for (const q of questions) {
    const key = opening(q.stem);
    if (key.split(' ').length < 6) continue;
    const bucket = byOpening.get(key);
    if (bucket) bucket.push(q);
    else byOpening.set(key, [q]);
  }
  const near = [...byOpening.values()].filter(
    (list) => list.length > 1 && !exact.some((group) => group[0] === list[0]),
  );

  const problems = exact.length;
  hardDuplicates += problems;

  if (exact.length) {
    console.log(`  DUPLICATES (identical stem): ${exact.length}`);
    for (const group of exact.slice(0, 12)) {
      console.log(`    Q${group.map((q) => q.number).join(', Q')}: ${group[0].stem.slice(0, 76)}`);
    }
    if (exact.length > 12) console.log(`    … ${exact.length - 12} more`);
  } else {
    console.log('  no identical stems');
  }

  if (sameAnswer.length) {
    console.log(`  same stem and same answer: ${sameAnswer.length}`);
    for (const group of sameAnswer.slice(0, 8)) {
      console.log(`    Q${group.map((q) => q.number).join(', Q')} → ${group[0].answerKeys.join(',')}`);
    }
  }

  if (near.length) {
    console.log(`  near-duplicate openings (review): ${near.length}`);
    for (const group of near.slice(0, 8)) {
      console.log(`    Q${group.map((q) => q.number).join(', Q')}: ${group[0].stem.slice(0, 68)}…`);
    }
    if (near.length > 8) console.log(`    … ${near.length - 8} more`);
  }

  // --- position-dependent options -----------------------------------------
  const positional = questions.filter((q) =>
    q.options.some((option) => POSITIONAL.test(option.text ?? '')),
  );
  positionalOptions += positional.length;
  if (positional.length) {
    console.log(`  POSITIONAL OPTIONS (break on shuffle): ${positional.length}`);
    for (const q of positional.slice(0, 8)) console.log(`    Q${q.number}: ${q.stem.slice(0, 66)}`);
    if (positional.length > 8) console.log(`    … ${positional.length - 8} more`);
  } else {
    console.log('  no position-dependent options');
  }

  // --- answer-key balance -------------------------------------------------
  const keyCount = new Map();
  for (const q of questions) {
    if (q.answerKeys.length !== 1) continue;
    const key = q.answerKeys[0];
    keyCount.set(key, (keyCount.get(key) ?? 0) + 1);
  }
  const singles = [...keyCount.values()].reduce((a, b) => a + b, 0);
  if (singles) {
    const parts = [...keyCount.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, count]) => `${key} ${Math.round((count / singles) * 100)}%`);
    console.log(`  single-answer key spread: ${parts.join('  ')}`);
  }

  // --- chapter balance ----------------------------------------------------
  const empties = chapters.filter((c) => c.questionCount === 0 && !c.isAppendix);
  const heaviest = [...chapters].sort((a, b) => b.questionCount - a.questionCount).slice(0, 3);
  console.log(
    `  chapters with questions: ${chapters.filter((c) => c.questionCount > 0).length}/${chapters.length}` +
      (empties.length ? `  | empty: ${empties.map((c) => c.id).join(', ')}` : ''),
  );
  console.log(
    `  heaviest: ${heaviest.map((c) => `${c.id}=${c.questionCount}`).join('  ')}`,
  );

  // --- per-chapter counts for the empties ---------------------------------
  if (empties.length) {
    for (const c of empties) {
      console.log(`    ! ${c.id} (${c.title}) has no questions`);
    }
  }
}

console.log(
  `\n${hardDuplicates} hard duplicate group(s), ${positionalOptions} position-dependent ` +
    `question(s) across the three banks.` +
    (strict && (hardDuplicates || positionalOptions) ? '\nFailing under --strict.' : ''),
);
if (strict && (hardDuplicates > 0 || positionalOptions > 0)) process.exit(1);
