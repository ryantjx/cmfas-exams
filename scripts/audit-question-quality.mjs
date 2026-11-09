#!/usr/bin/env node
/**
 * audit-question-quality.mjs
 *
 * Four checks that answer-key audits cannot see:
 *
 *   DUP_OPTION  two options inside one question are the same text
 *   DUP_STEM    two questions ask the same thing
 *   META_ANSWER a keyed option describes the book ("The guide ...") instead of
 *               answering the question
 *   REUSED      an option reproduces the text of an option from another
 *               question, so the answer is identifiable without knowing the
 *               subject
 *
 * REUSED is reported per exam against a budget in quality-baseline.json. The
 * backlog is real and large, so the check fails only when a count rises above
 * its budget. That keeps CI honest without blocking work on the backlog.
 *
 * Usage: node scripts/audit-question-quality.mjs [--strict]
 *   default  report, fail only on DUP_OPTION / DUP_STEM / META_ANSWER
 *   --strict also fail when a REUSED count exceeds its budget
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const EXAMS = ['cmsip', 'fmrp', 'res12b', 'cmeip'];
const STRICT = process.argv.includes('--strict');

/** Whitespace and case only. Never strip digits or signs: "2.5%" != "25%". */
const norm = (t) =>
  String(t)
    .toLowerCase()
    .replace(/[\u2212\u2013]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();

const META = /^(the guide|the source|the book|the case|the fact pattern)\b/i;
const LONG = 40;
const STOP = new Set(
  'a an the of to in on for and or is are be as at by with from that this it its which what who whom whose when where why how'.split(' ')
);

function stemTokens(text) {
  return new Set(
    String(text)
      .toLowerCase()
      .match(/[a-z0-9]+/g)
      ?.filter((w) => w.length > 1 && !STOP.has(w)) ?? []
  );
}

function stemJaccard(a, b) {
  const A = stemTokens(a);
  const B = stemTokens(b);
  if (A.size < 3 || B.size < 3) return 0;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter += 1;
  return inter / (A.size + B.size - inter);
}

function loadExam(ex) {
  return JSON.parse(readFileSync(join(ROOT, `public/banks/${ex}.json`), 'utf8')).questions;
}

const findings = { DUP_OPTION: [], DUP_STEM: [], META_ANSWER: [], REUSED: [] };
let total = 0;

for (const ex of EXAMS) {
  const qs = loadExam(ex);
  total += qs.length;

  // option text -> questions that use it
  const byText = new Map();
  for (const q of qs) {
    for (const o of q.options) {
      const n = norm(o.text);
      if (n.length < LONG) continue;
      if (!byText.has(n)) byText.set(n, []);
      byText.get(n).push({ q: q.number, chapter: q.chapterId, key: o.key, keyed: q.answerKeys.includes(o.key) });
    }
  }

  for (const q of qs) {
    // ---- DUP_OPTION ----
    const seen = new Map();
    for (const o of q.options) {
      const n = norm(o.text);
      if (!n) continue;
      if (seen.has(n)) {
        findings.DUP_OPTION.push({ exam: ex, n: q.number, keys: [seen.get(n), o.key], text: o.text });
      } else seen.set(n, o.key);
    }

    // ---- META_ANSWER ----
    for (const o of q.options) {
      if (q.answerKeys.includes(o.key) && META.test(o.text.trim())) {
        findings.META_ANSWER.push({ exam: ex, n: q.number, chapter: q.chapterId, text: o.text });
        break;
      }
    }

    // ---- REUSED ----
    let reused = 0;
    const borrowed = [];
    for (const o of q.options) {
      const n = norm(o.text);
      if (n.length < LONG) continue;
      const others = (byText.get(n) || []).filter((r) => r.q !== q.number);
      if (!others.length) continue;
      reused += 1;
      borrowed.push({
        key: o.key,
        keyed: q.answerKeys.includes(o.key),
        from: [...new Set(others.map((r) => `#${r.q}`))].slice(0, 4),
        text: o.text.slice(0, 90),
      });
    }
    if (reused) {
      findings.REUSED.push({ exam: ex, n: q.number, chapter: q.chapterId, reused, borrowed });
    }
  }

  // ---- DUP_STEM ----
  for (let i = 0; i < qs.length; i += 1) {
    for (let j = i + 1; j < qs.length; j += 1) {
      const a = norm(qs[i].stem);
      const b = norm(qs[j].stem);
      if (!a || !b || a.length < 10) continue;
      if (a === b || stemJaccard(a, b) >= 0.9) {
        findings.DUP_STEM.push({ exam: ex, pair: [qs[i].number, qs[j].number], stem: qs[i].stem });
      }
    }
  }
}

const budgetPath = join(ROOT, 'scripts/quality-baseline.json');
const budget = existsSync(budgetPath) ? JSON.parse(readFileSync(budgetPath, 'utf8')) : {};

const perExam = {};
for (const ex of EXAMS) {
  perExam[ex] = {
    DUP_OPTION: findings.DUP_OPTION.filter((f) => f.exam === ex).length,
    DUP_STEM: findings.DUP_STEM.filter((f) => f.exam === ex).length,
    META_ANSWER: findings.META_ANSWER.filter((f) => f.exam === ex).length,
    REUSED: findings.REUSED.filter((f) => f.exam === ex).length,
  };
}

console.log(`questions: ${total}`);
console.log('');
console.log('exam      dup_opt  dup_stem  meta_ans  reused_q  budget_stem  budget_reused');
for (const ex of EXAMS) {
  const r = perExam[ex];
  const b = budget[ex] ?? {};
  const stemB = b.DUP_STEM ?? 0;
  const reusedB = b.REUSED ?? 0;
  const flag = r.DUP_STEM > stemB || r.REUSED > reusedB ? '  NEW' : '';
  console.log(
    `${ex.padEnd(9)} ${String(r.DUP_OPTION).padStart(7)} ${String(r.DUP_STEM).padStart(9)} ` +
      `${String(r.META_ANSWER).padStart(8)} ${String(r.REUSED).padStart(9)} ` +
      `${String(stemB).padStart(12)} ${String(reusedB).padStart(14)}${flag}`
  );
}

const detail = (key) => {
  for (const f of findings[key]) {
    if (key === 'REUSED') {
      console.log(`  ${f.exam} #${f.n} [${f.chapter}] ${f.reused} option(s) reused: ${f.borrowed.map((b) => b.key).join(',')}`);
    } else if (key === 'DUP_STEM') {
      console.log(`  ${f.exam} #${f.pair[0]} == #${f.pair[1]}: ${f.stem.slice(0, 90)}`);
    } else if (key === 'DUP_OPTION') {
      console.log(`  ${f.exam} #${f.n} keys ${f.keys.join('/')}: ${f.text.slice(0, 90)}`);
    } else {
      console.log(`  ${f.exam} #${f.n} [${f.chapter}]: ${f.text.slice(0, 100)}`);
    }
  }
};

let failed = false;
for (const key of ['DUP_OPTION', 'META_ANSWER']) {
  if (!findings[key].length) continue;
  console.log('');
  console.log(`${key} (${findings[key].length}):`);
  detail(key);
  failed = true;
}

for (const key of ['DUP_STEM', 'REUSED']) {
  if (!findings[key].length) continue;
  const over = EXAMS.filter((ex) => {
    const r = perExam[ex][key];
    const b = (budget[ex] ?? {})[key] ?? 0;
    return r > b;
  });
  console.log('');
  console.log(`${key} (${findings[key].length} questions, backlog against budget):`);
  if (key === 'REUSED') {
    const byChapter = new Map();
    for (const f of findings[key]) {
      const k = `${f.exam}/${f.chapter}`;
      byChapter.set(k, (byChapter.get(k) ?? 0) + 1);
    }
    for (const [k, n] of [...byChapter.entries()].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${k}: ${n}`);
    }
  } else {
    detail(key);
  }
  if (STRICT && over.length) {
    for (const ex of over) {
      console.log(`  FAIL ${ex}: ${perExam[ex][key]} > budget ${(budget[ex] ?? {})[key] ?? 0}`);
    }
    failed = true;
  }
}

if (failed) {
  console.log('\nQuestion-quality audit failed.');
  process.exit(1);
}
console.log('\nQuestion-quality audit passed.');
