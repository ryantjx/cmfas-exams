#!/usr/bin/env node
/**
 * Parse the three question banks into normalised JSON.
 *
 * Outputs:
 *   src/data/banks/<exam>.json   — consumed at build time by the practice pages
 *   public/banks/<exam>.json     — fetched at runtime by the quiz islands
 *
 * Fails loudly (non-zero exit) if a bank's question count differs from the
 * expected total or if any question has an unresolvable answer key.
 */

import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS, DAILY_QUIZ_SIZE } from './lib/exams.mjs';
import { extractGuideChapters, parseBank } from './lib/questions.mjs';
import { REPO_ROOT, chapterLabel, readLines } from './lib/util.mjs';

const DATA_DIR = path.join(REPO_ROOT, 'src', 'data', 'banks');
const PUBLIC_DIR = path.join(REPO_ROOT, 'public', 'banks');

// This script owns these two directories and rebuilds them from scratch, so a
// bank removed from the config cannot leave a stale file behind. (The catalogue
// index that build-content.mjs adds afterwards is written after this point.)
for (const dir of [DATA_DIR, PUBLIC_DIR]) {
  rmSync(dir, { recursive: true, force: true });
}

let failed = false;

for (const exam of EXAMS) {
  const bankLines = readLines(exam.bank);
  const guideLines = readLines(exam.guide);
  const guideChapters = extractGuideChapters(exam, guideLines);

  const { questions, issues, warnings } = parseBank(exam, bankLines, guideChapters);

  // --- validation -----------------------------------------------------------
  const missingAnswer = questions.filter((q) => q.answerKeys.length === 0);
  const missingChapter = questions.filter((q) => !q.chapterId);

  const problems = [...issues];
  if (questions.length !== exam.expectedQuestions) {
    problems.unshift(
      `count mismatch: parsed ${questions.length}, expected ${exam.expectedQuestions}`,
    );
  }

  const status = problems.length === 0 ? 'PASS' : 'FAIL';
  console.log(
    `[${status}] ${exam.name.padEnd(8)} ${String(questions.length).padStart(3)} questions  ` +
      `| chapters ${guideChapters.length}  | missing answers ${missingAnswer.length}  ` +
      `| missing chapters ${missingChapter.length}`,
  );

  if (problems.length) {
    failed = true;
    for (const p of problems.slice(0, 25)) console.log(`         - ${p}`);
    if (problems.length > 25) console.log(`         … ${problems.length - 25} more`);
    continue;
  }

  for (const w of warnings) console.log(`         ! ${w}`);

  // --- chapter rollup -------------------------------------------------------
  const chapters = guideChapters
    .map((c) => {
      const kind = c.isAppendix ? 'appendix' : 'chapter';
      return {
        id: c.id,
        num: c.num,
        kind,
        title: chapterLabel({ kind, num: c.num, partId: c.partId, title: c.title }),
        slug: c.slug,
        partId: c.partId ?? null,
        partTitle: c.partTitle ?? null,
        isAppendix: Boolean(c.isAppendix),
        order: c.order,
        questionCount: questions.filter((q) => q.chapterId === c.id).length,
      };
    })
    .sort((a, b) => a.order - b.order);

  const byChapter = new Map();
  for (const q of questions) {
    byChapter.set(q.chapterId, (byChapter.get(q.chapterId) ?? 0) + 1);
  }
  for (const [id, count] of byChapter) {
    if (!chapters.some((c) => c.id === id)) {
      chapters.push({
        id,
        num: null,
        kind: 'chapter',
        title: id === 'mixed' ? 'Rapid mixed review' : id,
        slug: `chapter-${id}`,
        partId: null,
        partTitle: null,
        isAppendix: false,
        order: 800,
        questionCount: count,
      });
    }
  }

  const payload = {
    examId: exam.id,
    name: exam.name,
    title: exam.title,
    dailySize: DAILY_QUIZ_SIZE,
    realExam: exam.realExam,
    chapters,
    questions,
    generated: {
      questionCount: questions.length,
      chapterCount: chapters.length,
      warnings: warnings.length,
    },
  };

  const json = JSON.stringify(payload, null, 2);
  mkdirSync(DATA_DIR, { recursive: true });
  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(path.join(DATA_DIR, `${exam.id}.json`), json);
  writeFileSync(path.join(PUBLIC_DIR, `${exam.id}.json`), json);

  const withQuestions = chapters.filter((c) => c.questionCount > 0);
  console.log(
    `         chapters with questions: ${withQuestions.length}/${chapters.length}` +
      `  | types: ${[...new Set(questions.map((q) => q.type))].join(', ')}`,
  );
}

if (failed) {
  console.error('\nBank generation failed — see issues above.');
  process.exit(1);
}
console.log('\nBank generation complete.');
