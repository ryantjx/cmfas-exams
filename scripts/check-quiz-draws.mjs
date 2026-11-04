/**
 * Cheap check on how the quiz modes draw their sets.
 *
 * Neither the daily nor the random quiz is seeded any more: both are unseeded
 * draws, so a reload, a re-entry and "Start a new set" all produce new questions.
 * That removes the day-to-day rotation property this file used to assert, and
 * leaves two properties worth guarding instead:
 *
 *   1. the daily subset really is a subset — 30 questions, spread across chapters,
 *      different on every draw;
 *   2. the random mode really is the whole bank — every question exactly once.
 *
 * The runtime lives in a browser-only module, so `sampleByChapter` and its two
 * helpers are mirrored below from `src/lib/quiz.ts`. Keep them in step; this file
 * is the only automated guard on the draw.
 */
import { readFileSync } from 'node:fs';

/** mulberry32 — a deterministic stand-in for Math.random. */
function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWith(list, random) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function sampleQuestions(questions, size, random) {
  const pool = shuffleWith(questions, random);
  if (size >= pool.length) return shuffleWith(pool, random);
  return shuffleWith(pool, random).slice(0, size);
}

/** Mirror of `sampleByChapter` in src/lib/quiz.ts. */
function sampleByChapter(questions, size, random) {
  const byChapter = new Map();
  for (const question of questions) {
    const key = question.chapterId ?? 'unknown';
    const bucket = byChapter.get(key);
    if (bucket) bucket.push(question);
    else byChapter.set(key, [question]);
  }
  const buckets = shuffleWith(
    [...byChapter.values()].map((list) => shuffleWith(list, random)),
    random,
  );
  const picked = [];
  let exhausted = false;
  while (picked.length < size && !exhausted) {
    exhausted = true;
    for (const bucket of buckets) {
      if (picked.length >= size) break;
      const next = bucket.shift();
      if (next) {
        picked.push(next);
        exhausted = false;
      }
    }
  }
  return picked.length >= size
    ? shuffleWith(picked, random)
    : sampleQuestions(questions, size, random);
}

/* --------------------------------------------------------------------- checks */

const bank = JSON.parse(readFileSync('src/data/banks/cmsip.json', 'utf8'));
const questions = bank.questions;
const chapterCount = new Set(questions.map((q) => q.chapterId ?? 'unknown')).size;
const key = (list) => list.map((q) => q.number).join(',');

let failed = 0;
const check = (label, ok) => {
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label}`);
  if (!ok) failed += 1;
};

console.log(`CM-SIP: ${questions.length} questions, ${chapterCount} chapters, daily size ${bank.dailySize}\n`);

/* ---- 1: the daily draw is a 30-question subset, spread across chapters ---- */
console.log('1. daily subset');
const draws = [];
for (let seed = 1; seed <= 20; seed += 1) {
  draws.push(sampleByChapter(questions, bank.dailySize, seededRandom(seed)));
}
check(`every draw is exactly ${bank.dailySize} questions`,
  draws.every((d) => d.length === bank.dailySize));
check('no draw repeats another draw',
  new Set(draws.map(key)).size === draws.length);
check('no draw holds duplicate questions',
  draws.every((d) => new Set(d.map((q) => q.number)).size === d.length));
check(`every draw spans all ${Math.min(chapterCount, bank.dailySize)} reachable chapters`,
  draws.every((d) => new Set(d.map((q) => q.chapterId)).size === Math.min(chapterCount, bank.dailySize)));

/* ---- 2: the random mode is the whole bank ---- */
console.log('\n2. random mode = whole bank');
const full = sampleByChapter(questions, questions.length, seededRandom(7));
const full2 = sampleByChapter(questions, questions.length, seededRandom(8));
check(`returns every question (${full.length} of ${questions.length})`, full.length === questions.length);
check('holds each question exactly once', new Set(full.map((q) => q.number)).size === questions.length);
check('covers every chapter', new Set(full.map((q) => q.chapterId)).size === chapterCount);
check('order differs from another draw', key(full) !== key(full2));
check('starts on a different chapter than another draw',
  full.slice(0, 10).map((q) => q.chapterId).join() !== full2.slice(0, 10).map((q) => q.chapterId).join());

console.log(failed === 0
  ? '\nPASS — the daily subset and the full-bank draw behave.'
  : `\nFAIL — ${failed} check(s) failed.`);
process.exitCode = failed === 0 ? 0 : 1;
