#!/usr/bin/env node
/**
 * Study-guide audit. Run with `npm run lint:notes` (advisory) or
 * `npm run lint:notes -- --strict` (non-zero exit on any finding).
 *
 * The four teaching guides are meant to read as a full-but-condensed version of
 * the official guide, not a flat word-dump. This checks the properties that
 * matter and that the chapter splitter depends on:
 *
 *   - no meta-commentary ("the source states", "this package does not…")
 *   - every chapter/appendix page carries an "Exam cues" block
 *   - merged range headings ("1.4.7–1.4.8") that hide structure
 *   - enough bullets/tables relative to prose to be scannable
 *
 * It only reads; nothing is written. Findings default to advisory so the guide
 * rewrite can land chapter by chapter. `--strict` flips the exit code.
 */

import { EXAMS } from './lib/exams.mjs';
import { listGuideFiles, readGuideFile } from './lib/guide.mjs';
import { countWords } from './lib/util.mjs';

const strict = process.argv.includes('--strict');

/** Phrases that narrate the source instead of teaching the material. */
const META_PHRASES = [
  /\bthe (?:source|guide|pdf|document)\s+(?:states|says|explains|notes|describes|discusses|distinguishes|lists|covers|reproduces|warns|recommends|points)\b/i,
  /\bthis (?:package|guide|section) (?:does|is designed|reorganises|reproduces)\b/i,
  /\bthe supplied\b/i,
  /\bas described in\b/i,
  /\bthe source['’]s\b/i,
];

/** A heading that fuses a range of syllabus numbers, e.g. `### 1.4.7–1.4.8 …`. */
const MERGED_RANGE = /^#{2,6}\s+\d+(?:\.\d+)+[–—-]\d/;

const HEADING = /^#{1,6}\s+/;
const BULLET = /^\s*(?:[-*]|\d+\.)\s+/;
const TABLE_ROW = /^\s*\|/;
const EXAM_CUES = /^#{2,6}[^\n]*\b(?:Exam cues|Summary)\b/im;

/** Count non-empty body lines that are bullets, numbering or table rows. */
function structureRatio(lines) {
  const body = lines.filter((line) => line.trim() && !HEADING.test(line));
  if (body.length === 0) return { ratio: 0, body: 0 };
  const structured = body.filter((line) => BULLET.test(line) || TABLE_ROW.test(line)).length;
  return { ratio: structured / body.length, body: body.length };
}

let totalFindings = 0;
let totalStrictFindings = 0;

for (const exam of EXAMS) {
  // Lint the files as authored: each page is its own file now, so the findings can
  // name a path instead of a line offset inside a 1,200-line monolith.
  const files = listGuideFiles(exam).map((name) => readGuideFile(exam, name));
  const lines = files.flatMap((f) => f.lines);
  const guidePages = files
    .filter((f) => f.fields.kind !== 'intro')
    .map((f) => ({ title: f.fields.title, kind: f.fields.kind, lines: f.lines }));

  const metaHits = [];
  lines.forEach((line, index) => {
    if (META_PHRASES.some((re) => re.test(line))) metaHits.push({ line: index + 1, text: line.trim() });
  });
  const merged = [];
  lines.forEach((line, index) => {
    if (MERGED_RANGE.test(line.trim())) merged.push({ line: index + 1, text: line.trim() });
  });
  // Exam cues are required on chapters; appendices summarise source material
  // (readings, formulae, review questions) and carry no cues of their own.
  const noCues = guidePages
    .filter((p) => p.kind === 'chapter' && !EXAM_CUES.test(p.lines.join('\n')))
    .map((p) => p.title);
  const thinPages = guidePages
    .map((p) => ({ title: p.title, ...structureRatio(p.lines) }))
    .filter((p) => p.body >= 6 && p.ratio < 0.35);

  const words = countWords(lines);
  const findings = metaHits.length + merged.length + noCues.length + thinPages.length;
  const blocking = metaHits.length + merged.length + noCues.length;
  totalFindings += findings;
  totalStrictFindings += blocking;

  const status = findings === 0 ? 'PASS' : 'WARN';
  console.log(
    `[${status}] ${exam.name.padEnd(8)} ${String(words).padStart(5)} words  ` +
      `| ${guidePages.length} pages  | meta ${metaHits.length}  | cues-missing ${noCues.length}  ` +
      `| merged-range ${merged.length}  | thin ${thinPages.length}`,
  );

  if (metaHits.length) {
    console.log('         meta-commentary (rewrite as direct instruction):');
    for (const hit of metaHits.slice(0, 8)) console.log(`           L${hit.line}: ${hit.text.slice(0, 88)}`);
    if (metaHits.length > 8) console.log(`           … ${metaHits.length - 8} more`);
  }
  if (noCues.length) {
    console.log(`         chapters without an "Exam cues" block: ${noCues.slice(0, 8).join('; ')}`);
    if (noCues.length > 8) console.log(`           … ${noCues.length - 8} more`);
  }
  if (merged.length) {
    console.log('         merged range headings (split per section):');
    for (const hit of merged.slice(0, 8)) console.log(`           L${hit.line}: ${hit.text.slice(0, 88)}`);
  }
  if (thinPages.length) {
    console.log('         low structure density (<35% bullets/tables):');
    for (const page of thinPages.slice(0, 8)) {
      console.log(`           ${page.title} — ${Math.round(page.ratio * 100)}% of ${page.body} body lines`);
    }
  }
}

// Structure density is a heuristic, not a defect: a formulae sheet is legitimately
// almost all formulas and no bullets, and a prose-heavy conduct chapter can still be
// correct. Only the three defect classes fail `--strict`; density stays advisory.
console.log(`\n${totalFindings} finding(s) across the four guides.`);
if (strict && totalStrictFindings > 0) process.exit(1);
