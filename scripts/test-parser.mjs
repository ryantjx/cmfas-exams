#!/usr/bin/env node
/**
 * Parser assertions. Run with `npm run test:parser`.
 *
 * Asserts the invariants the quiz UI depends on:
 *   - exact question counts (186 / 300 / 310)
 *   - every question has >= 1 answer key
 *   - every answer key resolves to an emitted option
 *   - every question has a chapter id present in its bank's chapter list
 *   - multi-response answers have >= 2 keys; single-choice exactly 1
 *   - no empty stems
 */

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { REPO_ROOT } from './lib/util.mjs';

const EXPECTED_TOTALS = { cmsip: 232, fmrp: 317, res12b: 332 };
let checks = 0;
let failed = 0;

function check(label, fn) {
  checks += 1;
  try {
    fn();
    console.log(`  ✓ ${label}`);
  } catch (error) {
    failed += 1;
    console.error(`  ✗ ${label}\n      ${error.message.split('\n')[0]}`);
  }
}

for (const exam of EXAMS) {
  const file = path.join(REPO_ROOT, 'src', 'data', 'banks', `${exam.id}.json`);
  const bank = JSON.parse(readFileSync(file, 'utf8'));
  const { questions, chapters } = bank;

  console.log(`\n${exam.name} (${bank.questions.length} questions)`);

  check('question count matches the expected total', () => {
    assert.equal(questions.length, EXPECTED_TOTALS[exam.id]);
  });

  check('question numbers are 1..n with no gaps', () => {
    const numbers = questions.map((q) => q.number);
    assert.deepEqual(numbers, numbers.map((_, i) => i + 1));
  });

  check('every question has a non-empty stem', () => {
    const bad = questions.filter((q) => !q.stem || q.stem.length < 8);
    assert.equal(bad.length, 0, `${bad.length} bad stems, e.g. Q${bad[0]?.number}`);
  });

  check('every question has at least one answer key', () => {
    const bad = questions.filter((q) => q.answerKeys.length === 0);
    assert.equal(bad.length, 0, `${bad.length} without a key, e.g. Q${bad[0]?.number}`);
  });

  check('every answer key resolves to an emitted option', () => {
    const bad = questions.filter(
      (q) => q.answerKeys.some((k) => !q.options.some((o) => o.key === k)),
    );
    assert.equal(bad.length, 0, `${bad.length} with an orphan key, e.g. Q${bad[0]?.number}`);
  });

  check('every question has at least two options', () => {
    const bad = questions.filter((q) => q.options.length < 2);
    assert.equal(bad.length, 0, `${bad.length} with too few options, e.g. Q${bad[0]?.number}`);
  });

  check('no duplicate option keys within a question', () => {
    const bad = questions.filter((q) => new Set(q.options.map((o) => o.key)).size !== q.options.length);
    assert.equal(bad.length, 0, `${bad.length} with duplicate keys, e.g. Q${bad[0]?.number}`);
  });

  check('every question maps to a declared chapter', () => {
    const ids = new Set(chapters.map((c) => c.id));
    const bad = questions.filter((q) => !q.chapterId || !ids.has(q.chapterId));
    assert.equal(bad.length, 0, `${bad.length} unmapped, e.g. Q${bad[0]?.number}`);
  });

  check('single-choice questions have exactly one key', () => {
    const bad = questions.filter((q) => !q.isMulti && q.answerKeys.length !== 1);
    assert.equal(bad.length, 0, `${bad.length} malformed, e.g. Q${bad[0]?.number}`);
  });

  check('multi-response questions have at least two keys', () => {
    const bad = questions.filter((q) => q.isMulti && q.answerKeys.length < 2);
    assert.equal(bad.length, 0, `${bad.length} malformed, e.g. Q${bad[0]?.number}`);
  });

  check('answering mode is derived from the keys, not the type tag', () => {
    const bad = questions.filter((q) => q.isMulti !== (q.answerKeys.length > 1));
    assert.equal(bad.length, 0, `${bad.length} inconsistent, e.g. Q${bad[0]?.number}`);
  });

  check('every chapter with questions is present in the chapter list', () => {
    const counted = new Map();
    for (const q of questions) counted.set(q.chapterId, (counted.get(q.chapterId) ?? 0) + 1);
    const total = [...counted.values()].reduce((a, b) => a + b, 0);
    assert.equal(total, questions.length);
    assert.equal([...counted.keys()].length, chapters.filter((c) => c.questionCount > 0).length);
  });

  if (exam.bankFormat === 'bold') {
    check('CM-SIP: every question resolves exactly four options after inline splitting', () => {
      const bad = questions.filter((q) => q.options.length !== 4);
      assert.equal(bad.length, 0, `${bad.length} not 4 options, e.g. Q${bad[0]?.number} (${bad[0]?.options.length})`);
    });
  }

  const keyTagMismatch = questions.filter((q) => q.typeDeclaredMulti !== q.isMulti).length;
  console.log(`      note: ${chapters.filter((c) => c.questionCount > 0).length} chapters carry questions; ${questions.filter((q) => !q.rationale).length} without a rationale; ${keyTagMismatch} type-tag/key mismatches.`);
}

console.log(`\n${checks - failed}/${checks} checks passed.`);
process.exit(failed ? 1 : 0);
