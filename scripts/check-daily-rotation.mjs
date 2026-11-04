/**
 * Cheap check: does the daily quiz actually change from day to day, and does
 * "Start a new set" actually draw a new set?
 *
 * The daily set is seeded from the calendar date plus an attempt counter, so it
 * is stable within a day and different the next. Both properties are invisible
 * in a single session, so they are asserted rather than eyeballed.
 *
 * The runtime lives in a React component and a browser-only module, so the two
 * helpers below mirror `src/lib/quiz.ts` and the seed formula in
 * `src/components/QuizRunner.tsx`. Keep them in step: this file is the only
 * automated guard on the formula.
 *
 * The sampler itself is not mirrored — the real one spreads the draw across
 * chapters (`sampleByChapter`). A flat shuffle is enough to show that different
 * seeds produce different sets.
 */
import { readFileSync } from 'node:fs';

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

function seedFromDate(d) {
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

/** Mirror of the daily seed in QuizRunner: date plus attempt × prime. */
const DAILY_STEP = 1_000_003;
function dailySeed(d, restart = 0) {
  return seedFromDate(d) + restart * DAILY_STEP;
}

const bank = JSON.parse(readFileSync('src/data/banks/cmsip.json', 'utf8'));
const ids = bank.questions.map((q) => q.number);
const draw = (d, restart = 0) =>
  shuffleWith(ids, seededRandom(dailySeed(d, restart))).slice(0, bank.dailySize);

let failed = 0;
const check = (label, ok) => {
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label}`);
  if (!ok) failed += 1;
};
const sameOrder = (a, b) => a.length === b.length && a.every((v, k) => v === b[k]);
const sameSelection = (a, b) => {
  const set = new Set(a);
  return b.length === a.length && b.every((v) => set.has(v));
};

/* ---- 1: the set rotates daily ---- */
const days = [];
for (let day = 20; day <= 27; day += 1) days.push(new Date(2026, 9, day));

console.log('Daily sets (first 12 question numbers):');
for (const d of days) {
  const picked = draw(d);
  console.log(`  ${d.toISOString().slice(0, 10)}  ${picked.slice(0, 12).join(', ')}`);
}

console.log('\n1. consecutive days differ');
let repeatedSelection = 0;
let repeatedOrder = 0;
for (let i = 1; i < days.length; i += 1) {
  const a = draw(days[i - 1]);
  const b = draw(days[i]);
  if (sameOrder(a, b)) repeatedOrder += 1;
  if (sameSelection(a, b)) repeatedSelection += 1;
}
check(`no day repeats the previous day's order (${repeatedOrder} repeats)`, repeatedOrder === 0);
check(`no day repeats the previous day's selection (${repeatedSelection} repeats)`, repeatedSelection === 0);

/* ---- 2: "Start a new set" draws a different set ---- */
console.log('\n2. "Start a new set" changes the set');
const today = new Date(2026, 10, 4);
const first = draw(today, 0);
const second = draw(today, 1);
const third = draw(today, 2);
check('restart 1 differs from restart 0 (order)', !sameOrder(first, second));
check('restart 1 differs from restart 0 (selection)', !sameSelection(first, second));
check('restart 2 differs from restart 1 (selection)', !sameSelection(second, third));
check('restarts 0 and 1 are not near-identical', sameOverlap(first, second) < 0.8);

function sameOverlap(a, b) {
  const set = new Set(b);
  return a.filter((v) => set.has(v)).length / a.length;
}

/* ---- 3: the attempt step cannot collide with a day boundary ---- */
console.log('\n3. no seed collisions across day boundaries or restarts');
const seeds = new Set();
let collisions = 0;
for (let day = 0; day < 60; day += 1) {
  const d = new Date(2026, 9, 20 + day);
  for (let restart = 0; restart < 6; restart += 1) {
    const seed = dailySeed(d, restart);
    if (seeds.has(seed)) collisions += 1;
    seeds.add(seed);
  }
}
check(`(day, restart) pairs are unique over 60 days × 6 restarts (${collisions} collisions)`, collisions === 0);

console.log(failed === 0 ? '\nPASS — daily rotation and restart behave.' : `\nFAIL — ${failed} check(s) failed.`);
process.exitCode = failed === 0 ? 0 : 1;
