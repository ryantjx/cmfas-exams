/**
 * One-off integrity check: for every single-answer question, does the quoted
 * answer text still match the option its key points at?
 *
 * The rebalance script rotates options and rewrites the answer line, so a bug in
 * that rewrite shows up here as an answer that quotes the wrong option. Run it
 * after any rebalance.
 */
import { readFileSync } from 'node:fs';

let total = 0;
for (const id of ['cmsip', 'fmrp', 'res12b']) {
  const bank = JSON.parse(readFileSync(`src/data/banks/${id}.json`, 'utf8'));
  let bad = 0;
  let example = null;

  for (const q of bank.questions) {
    const keys = q.answerKeys.map((k) => k.toLowerCase());
    const chosen = q.options
      .filter((o) => keys.includes(o.key.toLowerCase()))
      .map((o) => o.text.trim());
    const quoted = q.answerRaw.replace(/^[A-Da-d][.,)]\s*/, '').trim();

    // Only single-answer questions quote their option text; combination answers
    // quote a list such as "(a), (b) and (d)" which never equals one option.
    if (chosen.length !== 1 || quoted.length <= 25) continue;
    if (chosen[0].slice(0, 40).toLowerCase() !== quoted.slice(0, 40).toLowerCase()) {
      bad += 1;
      if (!example) {
        example = `Q${q.number}\n      option: ${chosen[0].slice(0, 70)}\n      answer: ${quoted.slice(0, 70)}`;
      }
    }
  }

  total += bad;
  console.log(`${id}: ${bad} mismatch(es)${example ? `\n    e.g. ${example}` : ''}`);
}

console.log(total === 0 ? '\nAll quoted answers match their keyed option.' : `\n${total} mismatch(es) — check the rebalance rewrite.`);
process.exitCode = total === 0 ? 0 : 1;
