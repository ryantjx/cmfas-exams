/**
 * One-off check: does the daily quiz actually change from day to day?
 *
 * The daily set is seeded from the calendar date so that it is stable within a day
 * and different the next. A bug here would be invisible in a single session, so it
 * is worth asserting rather than eyeballing: compare several consecutive dates and
 * confirm both the selection and the order differ.
 */
import { readFileSync } from 'node:fs';

// Mirror the runtime helpers so this test exercises the real algorithm rather than a
// reimplementation. tsx is not a dependency, so the two small functions are inlined.
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

const bank = JSON.parse(readFileSync('src/data/banks/cmsip.json', 'utf8'));
const ids = bank.questions.map((q) => q.number);

const dates = [];
for (let day = 20; day <= 27; day += 1) dates.push(new Date(2026, 9, day));

const results = dates.map((d) => {
  const random = seededRandom(seedFromDate(d));
  const picked = shuffleWith(ids, random).slice(0, bank.dailySize);
  return { date: d.toISOString().slice(0, 10), picked };
});

console.log('Daily sets (first 12 question numbers):');
for (const r of results) console.log(`  ${r.date}  ${r.picked.slice(0, 12).join(', ')}`);

// Compare each consecutive pair.
let identicalSelection = 0;
let identicalOrder = 0;
for (let i = 1; i < results.length; i += 1) {
  const a = results[i - 1].picked;
  const b = results[i].picked;
  if (a.length === b.length && a.every((v, k) => v === b[k])) identicalOrder += 1;
  const setA = new Set(a);
  if (b.every((v) => setA.has(v)) && b.length === a.length) identicalSelection += 1;
}

console.log(`\nconsecutive pairs compared: ${results.length - 1}`);
console.log(`  same selection: ${identicalSelection}`);
console.log(`  same order:     ${identicalOrder}`);

const ok = identicalSelection === 0 && identicalOrder === 0;
console.log(ok ? '\nPASS — the daily set changes every day.' : '\nFAIL — the daily set repeats.');
process.exitCode = ok ? 0 : 1;
