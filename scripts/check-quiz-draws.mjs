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
 *
 * The CM-EIP mock check below also mirrors `sampleByBlueprint` and
 * `sampleMockBySections` from the same module, for the same reason: the
 * sectioned mock (81 standalone questions, then 3 case-study triples) is
 * assembled in the browser, so the mirrors are the only guard that the split
 * holds on every draw.
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

/** Mirror of `sampleByBlueprint` in src/lib/quiz.ts. */
function sampleByBlueprint(questions, quotas, size, random) {
  const byChapter = new Map();
  for (const question of questions) {
    const key = question.chapterId ?? 'unknown';
    const bucket = byChapter.get(key);
    if (bucket) bucket.push(question);
    else byChapter.set(key, [question]);
  }
  for (const [key, bucket] of byChapter) byChapter.set(key, shuffleWith(bucket, random));

  const picked = [];
  const used = new Map();
  for (const [chapterId, quota] of Object.entries(quotas)) {
    const bucket = byChapter.get(chapterId);
    if (!bucket || quota <= 0) continue;
    const take = Math.min(quota, bucket.length);
    picked.push(...bucket.slice(0, take));
    used.set(chapterId, take);
  }
  if (picked.length < size) {
    const leftovers = [];
    for (const [chapterId, bucket] of byChapter) {
      const start = used.get(chapterId) ?? 0;
      leftovers.push(...bucket.slice(start));
    }
    picked.push(...shuffleWith(leftovers, random).slice(0, size - picked.length));
  }
  const capped = picked.slice(0, size);
  return capped.length >= Math.min(size, questions.length)
    ? shuffleWith(capped, random)
    : sampleQuestions(questions, size, random);
}

/** Mirror of the grouped-section draw in `sampleMockBySections`. */
function sampleGroupedSection(questions, section, random) {
  const groupSize = section.groupSize ?? 3;
  const pool = questions.filter((q) => q.chapterId === section.chapterId);
  const groups = new Map();
  for (const question of pool) {
    const key = question.sectionRef ?? 'unknown';
    const bucket = groups.get(key);
    if (bucket) bucket.push(question);
    else groups.set(key, [question]);
  }
  const whole = [...groups.values()].filter((group) => group.length === groupSize);
  const needed = Math.floor(section.questions / groupSize);
  const picked = shuffleWith(whole, random).slice(0, needed).flat();
  if (picked.length < section.questions) {
    const pickedIds = new Set(picked.map((q) => q.id));
    picked.push(
      ...shuffleWith(
        pool.filter((q) => !pickedIds.has(q.id)),
        random,
      ).slice(0, section.questions - picked.length),
    );
  }
  return picked;
}

/** Mirror of `sampleMockBySections` in src/lib/quiz.ts. */
function sampleMockBySections(questions, sections, random) {
  const out = [];
  for (const section of sections) {
    if (section.groupBy) {
      out.push(...sampleGroupedSection(questions, section, random));
    } else {
      const pool = questions.filter(
        (q) => section.quotas[q.chapterId ?? 'unknown'] !== undefined,
      );
      out.push(...sampleByBlueprint(pool, section.quotas, section.questions, random));
    }
  }
  return out;
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

/* ---- 3: the CM-EIP mock is split 81 + 9, case studies whole ---- */
console.log('\n3. CM-EIP sectioned mock');
const cmeipBank = JSON.parse(readFileSync('src/data/banks/cmeip.json', 'utf8'));
const cmeipQuestions = cmeipBank.questions;
const cmeipSections = cmeipBank.mock?.sections ?? [];
console.log(
  `CM-EIP: ${cmeipQuestions.length} questions, ` +
    `sections ${cmeipSections.map((s) => `${s.name} ${s.questions}`).join(' + ')}\n`,
);
check('payload carries the two sections (81 Questions, 9 Case studies)',
  cmeipSections.length === 2
    && cmeipSections[0].questions === 81 && cmeipSections[0].name === 'Questions'
    && cmeipSections[1].questions === 9 && cmeipSections[1].name === 'Case studies');
const mockDraws = [];
for (let seed = 1; seed <= 20; seed += 1) {
  mockDraws.push(sampleMockBySections(cmeipQuestions, cmeipSections, seededRandom(seed)));
}
const sectionOne = (d) => d.slice(0, 81);
const sectionTwo = (d) => d.slice(81);
check('every draw is exactly 90 questions (81 + 9)',
  mockDraws.every((d) => d.length === 90));
check('Section 1 holds only chapters 1–11',
  mockDraws.every((d) => sectionOne(d).every((q) =>
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].includes(q.chapterId))));
check('Section 1 spans all 11 chapters on every draw',
  mockDraws.every((d) =>
    new Set(sectionOne(d).map((q) => q.chapterId)).size === 11));
check('Section 2 holds only Chapter 12',
  mockDraws.every((d) => sectionTwo(d).every((q) => q.chapterId === '12')));
check('Section 2 is exactly 3 complete §12.x triples',
  mockDraws.every((d) => {
    const bySection = new Map();
    for (const q of sectionTwo(d)) {
      const bucket = bySection.get(q.sectionRef);
      if (bucket) bucket.push(q);
      else bySection.set(q.sectionRef, [q]);
    }
    if (bySection.size !== 3) return false;
    return [...bySection.values()].every((group) => {
      if (group.length !== 3) return false;
      const numbers = group.map((q) => q.number).sort((a, b) => a - b);
      return numbers[1] - numbers[0] === 1 && numbers[2] - numbers[1] === 1;
    });
  }));
check('no draw holds duplicate questions',
  mockDraws.every((d) => new Set(d.map((q) => q.number)).size === d.length));
check('no draw repeats another draw',
  new Set(mockDraws.map(key)).size === mockDraws.length);
check('the case-study triples vary across draws',
  new Set(mockDraws.map((d) =>
    [...new Set(sectionTwo(d).map((q) => q.sectionRef))].sort().join(','))).size > 1);

console.log(failed === 0
  ? '\nPASS — the daily subset, the full-bank draw and the CM-EIP sectioned mock behave.'
  : `\nFAIL — ${failed} check(s) failed.`);
process.exitCode = failed === 0 ? 0 : 1;
