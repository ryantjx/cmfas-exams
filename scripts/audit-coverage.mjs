#!/usr/bin/env node
/**
 * Per-section question coverage.
 *
 * `audit-banks.mjs` answers "is the bank internally sound?"; this answers "does the
 * bank reach the syllabus?" It is the check the README promises — that every
 * syllabus section has enough practice to test understanding rather than recall —
 * and until now nothing enforced it.
 *
 * Coverage is measured against `syllabus.mjs`, using the coverage unit defined in
 * `blueprint.mjs`: syllabus rows at depth <= 2. That is the level every bank tags
 * questions at, so measuring deeper would report gaps that are really missing
 * metadata (see the comment in `blueprint.mjs`).
 *
 * Three reports are printed:
 *
 *   CHAPTER  questions per chapter against its unit count, so a chapter whose
 *            density is far below its neighbours is visible at a glance.
 *
 *   TAGGING  how many of a chapter's questions carry a section number. A chapter
 *            with a low share cannot be audited per section, so it is reported as
 *            needing tagging rather than as having gaps. This is what stops the
 *            audit from inventing hundreds of phantom gaps out of absent metadata.
 *
 *   GAPS     every coverage unit below the floor, but only for chapters whose
 *            tagging is good enough to substantiate the claim. This is the
 *            authoring list.
 *
 * Strictness follows the exam, not the run: RES 12B, CM-SIP and CM-EIP gate
 * `npm run verify`; FMRP is advisory because it is outside the study plan. Exempt
 * pages are printed with their reason so an exemption is a decision on the record.
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { MIN_ATTRIBUTION, MIN_PER_UNIT, chapterUnits, exemptionFor } from './lib/blueprint.mjs';
import { SYLLABUS, sectionRows } from './lib/syllabus.mjs';

const strict = process.argv.includes('--strict');
const showAll = process.argv.includes('--all');

/** Exams whose coverage gates the build. FMRP is audited but does not gate. */
const GATING = new Set(['cmsip', 'res12b', 'cmeip']);

/** Pages that hold no numbered sections of their own: appendices, shared, mixed. */
function isSectionedChapter(examId, chapterId) {
  return Boolean(SYLLABUS[examId]?.chapters?.[chapterId]?.sections?.length);
}

/**
 * Compare the generated bank with the manifest before auditing.
 *
 * `src/data/banks/*.json` is generated and gitignored. A stale file would report
 * coverage for content the markdown no longer contains, so the count is checked
 * against the one place the expected total lives.
 */
function loadBank(exam) {
  const file = path.join('src', 'data', 'banks', `${exam.id}.json`);
  const bank = JSON.parse(readFileSync(file, 'utf8'));
  if (bank.questions.length !== exam.expectedQuestions) {
    console.error(
      `\n${exam.name}: ${file} is stale — ${bank.questions.length} questions, ` +
        `${exam.expectedQuestions} expected.\nRun \`npm run gen\` before auditing.`,
    );
    process.exit(1);
  }
  return bank;
}

let totalGaps = 0;
let totalMissing = 0;
let totalUntaggedChapters = 0;
let gatingFailures = 0;

for (const exam of EXAMS) {
  const bank = loadBank(exam);
  const gating = GATING.has(exam.id) && strict;

  // --- index questions by chapter and by section ---------------------------
  const byChapter = new Map();
  const taggedByChapter = new Map();
  const bySection = new Map();
  let untagged = 0;

  for (const q of bank.questions) {
    if (q.chapterId) byChapter.set(q.chapterId, (byChapter.get(q.chapterId) ?? 0) + 1);
    if (q.sectionRef) {
      taggedByChapter.set(q.chapterId, (taggedByChapter.get(q.chapterId) ?? 0) + 1);
      // A section number repeats across parts (`1.1` exists in both RES 1B and
      // RES 2B), so the key has to be chapter-qualified.
      const key = `${q.chapterId ?? '?'}|${q.sectionRef}`;
      bySection.set(key, (bySection.get(key) ?? 0) + 1);
    } else {
      untagged += 1;
    }
  }

  console.log(`\n${exam.name} — ${bank.questions.length} questions${gating ? '' : '  (advisory)'}`);
  console.log(
    `  ${'chapter'.padEnd(10)} ${'Q'.padStart(4)} ${'units'.padStart(6)} ${'Q/unit'.padStart(7)} ` +
      `${'tagged'.padStart(7)}  verdict`,
  );

  const gaps = [];
  const missing = [];
  let chapterUntagged = 0;

  for (const [chapterId, chapter] of Object.entries(SYLLABUS[exam.id].chapters)) {
    const questionCount = byChapter.get(chapterId) ?? 0;
    const units = chapterUnits(exam.id, chapterId);
    const exemption = exemptionFor(exam.id, chapterId);

    // A `sharedWith` chapter carries no sections of its own; its questions belong
    // to the page that holds the material.
    if (!isSectionedChapter(exam.id, chapterId)) {
      console.log(
        `  ${chapterId.padEnd(10)} ${String(questionCount).padStart(4)} ${'—'.padStart(6)} ` +
          `${'—'.padStart(7)} ${'—'.padStart(7)}  shared`,
      );
      continue;
    }

    const tagged = taggedByChapter.get(chapterId) ?? 0;
    const attribution = questionCount ? tagged / questionCount : 0;
    const density = units.length ? questionCount / units.length : null;

    let verdict;
    if (exemption) verdict = 'EXEMPT';
    else if (density === 0) verdict = 'EMPTY';
    else if (attribution < MIN_ATTRIBUTION) verdict = 'TAG';
    else if (density < MIN_PER_UNIT) verdict = 'THIN';
    else verdict = 'ok';

    console.log(
      `  ${chapterId.padEnd(10)} ${String(questionCount).padStart(4)} ${String(units.length).padStart(6)} ` +
        `${(density ?? 0).toFixed(2).padStart(7)} ${`${Math.round(attribution * 100)}%`.padStart(7)}  ` +
        `${verdict}${exemption ? ` — ${exemption}` : ''}`,
    );

    if (exemption) continue;
    if (verdict === 'TAG') {
      chapterUntagged += 1;
      continue;
    }
    if (density === null || density >= MIN_PER_UNIT) continue;

    // Collect the specific units below the floor: this is the authoring list.
    for (const number of units) {
      const count = bySection.get(`${chapterId}|${number}`) ?? 0;
      if (count >= MIN_PER_UNIT) continue;
      const row = sectionRows(chapter).find((r) => r.number === number);
      const entry = { chapterId, number, title: row?.title ?? '', count };
      if (count === 0) missing.push(entry);
      else gaps.push(entry);
    }
  }

  // --- the authoring list --------------------------------------------------
  const report = showAll ? [...missing, ...gaps] : [...missing, ...gaps].slice(0, 24);
  if (report.length) {
    console.log(
      `  gaps below ${MIN_PER_UNIT} per unit: ${missing.length} with none, ${gaps.length} thin`,
    );
    for (const entry of report) {
      const label = entry.count === 0 ? 'none' : `${entry.count}`;
      console.log(
        `    ${entry.chapterId.padEnd(7)} §${entry.number.padEnd(7)} ${label.padStart(4)}  ` +
          `${entry.title.slice(0, 54)}`,
      );
    }
    if (report.length < missing.length + gaps.length) {
      const remaining = missing.length + gaps.length - report.length;
      console.log(`    … ${remaining} more (pass --all to list them)`);
    }
  } else {
    console.log('  no gaps: every auditable coverage unit meets the floor');
  }

  // Untagged questions are expected in the appendix and closing-section pages;
  // a *chapter* whose questions are largely untagged is reported as TAG above.
  if (untagged) {
    console.log(`  ${untagged} question(s) carry no section number (appendices, mixed review, untagged)`);
  }

  totalGaps += gaps.length;
  totalMissing += missing.length;
  totalUntaggedChapters += chapterUntagged;
  if (gating && missing.length + gaps.length > 0) gatingFailures += 1;
}

console.log(
  `\n${totalMissing} coverage unit(s) with no question, ${totalGaps} below the floor of ` +
    `${MIN_PER_UNIT} (units = syllabus rows at depth <= 2).`,
);
if (totalUntaggedChapters) {
  console.log(
    `${totalUntaggedChapters} chapter(s) reported TAG: too few questions carry a section ` +
      'number for their per-section gaps to be trusted. Tag them before judging coverage.',
  );
}
if (strict && gatingFailures) {
  console.log(`Coverage below the floor in ${gatingFailures} gating exam(s).`);
  process.exit(1);
}
if (strict) console.log('Coverage gate passed for gating exams (CM-SIP, RES 12B, CM-EIP).');
