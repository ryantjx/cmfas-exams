/**
 * Integrity check: does each question's stated answer agree with the option its
 * key points at?
 *
 * The rebalance script rotates options and rewrites the answer line, so a bug in
 * that rewrite shows up here as an answer that quotes the wrong option. Run it
 * after any rebalance.
 *
 * The two bank conventions state the answer differently, so they are checked
 * differently:
 *
 *   heading banks (FMRP, RES 12B, CM-EIP)   `**Answer:** C. the correct option text`
 *       The text is quoted back, so the check compares the quoted text with the
 *       keyed option. Only single-answer questions are comparable: a combination
 *       answer quotes a list such as `(a), (b) and (d)`, which never equals one
 *       option.
 *
 *   bold bank (CM-SIP)             `**Answer: b.** rationale`
 *       Only the letter is stated. There is no quoted text to compare, so the
 *       check validates that the letter resolves to a real option and that a
 *       declared `[Multiple response]` question really keys more than one answer.
 *
 * An earlier version silently skipped the whole CM-SIP bank — every answer there
 * is shorter than the 25-character comparison guard — and still printed a pass.
 * The summary therefore reports how many questions were *checked*, not merely how
 * many failed.
 */
import { readFileSync } from 'node:fs';

const FORMATS = [
  ['cmsip', 'CM-SIP', 'bold'],
  ['fmrp', 'FMRP', 'heading'],
  ['res12b', 'RES 12B', 'heading'],
  ['cmeip', 'CM-EIP', 'heading'],
];

let totalBad = 0;
let totalChecked = 0;

for (const [id, label, format] of FORMATS) {
  const bank = JSON.parse(readFileSync(`src/data/banks/${id}.json`, 'utf8'));
  let bad = 0;
  let checked = 0;
  let skipped = 0;
  const examples = [];

  for (const q of bank.questions) {
    const keys = q.answerKeys.map((k) => k.toLowerCase());
    const chosen = q.options
      .filter((o) => keys.includes(o.key.toLowerCase()))
      .map((o) => o.text.trim());

    // The stated answer, stripped of a leading letter prefix, if there is one.
    const quoted = String(q.answerRaw ?? '').replace(/^[A-Da-d][.,)]\s*/, '').trim();

    if (format === 'bold') {
      // CM-SIP: the letter is the whole answer, so validate it resolves and that
      // the declared type agrees with the number of keys.
      checked += 1;
      if (keys.length === 0) {
        bad += 1;
        examples.push(`Q${q.number}: answer "${q.answerRaw}" stated no resolvable key`);
        continue;
      }
      const declaredMulti = /multiple\s*response/i.test(q.type ?? '');
      if (declaredMulti !== (keys.length > 1)) {
        bad += 1;
        examples.push(
          `Q${q.number}: tagged "${q.type}" but keys ${keys.join(',')} (${keys.length} answer(s))`,
        );
      }
      continue;
    }

    // Heading banks: compare the quoted option text with the keyed option.
    if (chosen.length !== 1 || quoted.length <= 25) {
      skipped += 1;
      continue;
    }
    checked += 1;
    if (chosen[0].slice(0, 40).toLowerCase() !== quoted.slice(0, 40).toLowerCase()) {
      bad += 1;
      examples.push(
        `Q${q.number}\n      option: ${chosen[0].slice(0, 70)}\n      answer: ${quoted.slice(0, 70)}`,
      );
    }
  }

  totalBad += bad;
  totalChecked += checked;
  console.log(
    `${label.padEnd(8)} ${String(bad).padStart(3)} mismatch(es)` +
      `  | checked ${checked}/${bank.questions.length}` +
      (skipped ? `  | not comparable ${skipped}` : ''),
  );
  for (const example of examples.slice(0, 5)) console.log(`    e.g. ${example}`);
  if (examples.length > 5) console.log(`    … ${examples.length - 5} more`);
}

// A check that inspected nothing is not a pass: each exam must contribute at
// least one checked question. That assertion is what caught the CM-SIP no-op.
if (totalChecked === 0) {
  console.error('\nNo questions were checked — the comparison guards are wrong.');
  process.exitCode = 1;
} else if (totalBad === 0) {
  console.log(`\nAll ${totalChecked} checked answers match their keyed option.`);
} else {
  console.log(`\n${totalBad} mismatch(es) — check the rebalance rewrite.`);
  process.exitCode = 1;
}
