#!/usr/bin/env node
/**
 * audit-source-answers.mjs
 *
 * Guards the answer keys of bank questions that were derived from a study-guide
 * review-question appendix and carry an explicit `source Q<n>` reference.
 *
 * The defect this catches: a source question with ONE correct option is
 * re-typed as "Multiple response" and gains a second correct option that the
 * source does not support. Letter-count checks cannot see it, because a
 * multiple-response question with two keys is internally valid. Only the
 * source answer can refute it.
 *
 * Method: tokenise every option, map each bank option onto the source option
 * it reproduces (containment first, then Jaccard), then assert that the union
 * of the mapped source options behind the bank's answer keys equals the source
 * answer set. Questions whose options were too heavily paraphrased to map are
 * reported as skipped, not passed.
 *
 * Scope: RES 12B only. It is the only exam whose bank carries source references.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const SOURCES = [
  {
    label: '1B Appendix G',
    ref: /RES 1B Appendix G, source Q(\d+)/,
    path: 'notes/res12b/guide/1b-90-appendix-g-review-questions.md',
  },
  {
    label: '2B Appendix F',
    ref: /RES 2B Appendix F, source Q(\d+)/,
    path: 'notes/res12b/guide/2b-90-appendix-f-review-questions.md',
  },
];

const BANK_JSON = 'public/banks/res12b.json';

const STOP = new Set(
  'a an the of to in on for and or is are be as at by with from that this it its which following'.split(' ')
);

function toks(text) {
  const words = String(text).toLowerCase().match(/[a-z0-9]+/g) || [];
  // Keep bare digits: "5 years" and "3 years" must not collapse to the same token set.
  return new Set(words.filter((w) => (w.length > 1 || /^\d$/.test(w)) && !STOP.has(w)));
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
}

const subset = (a, b) => a.size > 0 && [...a].every((x) => b.has(x));

/** Parse a review-question appendix into { n: { stem, opts:{a..d}, ans:[..] } }. */
function parseSource(relPath) {
  const lines = readFileSync(join(ROOT, relPath), 'utf8').split('\n');
  const out = new Map();
  let cur = null;
  for (const line of lines) {
    const q = line.match(/^\*\*(\d+)\.\*\*\s*(.+)$/);
    if (q) {
      cur = { n: Number(q[1]), stem: q[2], opts: {}, ans: null };
      out.set(cur.n, cur);
      continue;
    }
    if (!cur) continue;
    // "- **a.** text"  or  "- a. text"
    const opt = line.match(/^-\s+\*{0,2}([a-d])\.\*{0,2}\s+(.+)$/);
    if (opt) {
      cur.opts[opt[1]] = opt[2].replace(/\*\*/g, '').replace(/\.\s*$/, '').trim();
      continue;
    }
    const ans = line.match(/^\*\*Answer:\s*(.+)$/);
    if (ans) {
      const raw = ans[1].replace(/\*\*/g, '').replace(/\.\s*$/, '');
      // Prefer parenthesised letters: "(b), (c) and (d)". Otherwise take a
      // single leading letter: "a. NPV discounts...". Never scan the whole
      // string for [a-d], because the word "and" contains both a and d.
      const paren = [...raw.matchAll(/\(([a-d])\)/g)].map((m) => m[1]);
      const lead = raw.match(/^\s*([a-d])\b/);
      const keys = paren.length ? paren : lead ? [lead[1]] : [];
      const uniq = [...new Set(keys)].sort();
      if (uniq.length) cur.ans = uniq;
    }
  }
  return out;
}

/** Map bank option key -> Set of source option keys. */
function mapOptions(bankOpts, srcOpts) {
  const src = {};
  for (const [k, v] of Object.entries(srcOpts)) src[k] = toks(v);
  const map = {};
  for (const [k, v] of Object.entries(bankOpts)) {
    const B = toks(v);
    const hit = new Set();
    for (const [sk, A] of Object.entries(src)) {
      if (!A.size || !B.size) continue;
      if (subset(A, B) || jaccard(A, B) >= 0.6) hit.add(sk);
    }
    map[k] = hit;
  }
  return map;
}

const eq = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

let failures = 0;
let verified = 0;
let skipped = 0;
let sources = 0;

const bank = JSON.parse(readFileSync(join(ROOT, BANK_JSON), 'utf8'));

for (const spec of SOURCES) {
  let parsed;
  try {
    parsed = parseSource(spec.path);
  } catch {
    console.log(`[SKIP] ${spec.label}: source appendix not found at ${spec.path}`);
    continue;
  }
  if (!parsed.size) {
    const dangling = bank.questions.filter((q) => spec.ref.test(q.sourceRef || '')).length;
    console.log(
      `[SKIP] ${spec.label}: 0 questions parsed from ${spec.path}` +
        (dangling ? ` — ${dangling} bank questions cite it as a source, so those references are dangling` : '')
    );
    continue;
  }
  sources += parsed.size;

  const linked = bank.questions.filter((q) => spec.ref.test(q.sourceRef || ''));
  if (!linked.length) {
    console.log(`[WARN] ${spec.label}: ${parsed.size} source questions, 0 linked bank questions`);
    continue;
  }

  for (const q of linked) {
    const n = Number(q.sourceRef.match(spec.ref)[1]);
    const src = parsed.get(n);
    if (!src || !src.ans || Object.keys(src.opts).length < 4) {
      console.log(`[SKIP] bank #${q.number} -> ${spec.label} Q${n}: source question unparseable`);
      skipped += 1;
      continue;
    }
    const bankOpts = Object.fromEntries(q.options.map((o) => [o.key, o.text]));
    const map = mapOptions(bankOpts, src.opts);

    // Only the answer options are mapped. Distractors in a paraphrased question
    // often come from elsewhere, so requiring all four to map would skip every
    // question that needs checking.
    const mappedAns = new Set();
    let unmapped = 0;
    for (const k of q.answerKeys) {
      if (!map[k] || map[k].size === 0) {
        unmapped += 1;
        continue;
      }
      for (const s of map[k]) mappedAns.add(s);
    }
    if (unmapped > 0 || mappedAns.size === 0) {
      skipped += 1;
      continue;
    }
    const got = [...mappedAns].sort();

    if (!eq(got, src.ans)) {
      failures += 1;
      const extra = got.filter((k) => !src.ans.includes(k));
      const missing = src.ans.filter((k) => !got.includes(k));
      console.log(
        `[FAIL] bank #${q.number} (${spec.label} Q${n}): bank answer ${q.answerKeys.join(',')} ` +
          `= source {${got.join(',')}} but source says {${src.ans.join(',')}}` +
          (extra.length ? ` | keyed but not correct: ${extra.join(',')}` : '') +
          (missing.length ? ` | correct but unkeyed: ${missing.join(',')}` : '')
      );
      console.log(`       ${q.stem}`);
      console.log(`       source: ${src.stem}`);
      for (const k of q.answerKeys) {
        console.log(`       keyed ${k}: ${bankOpts[k]}`);
        console.log(`          -> source ${[...map[k]].join(',') || '?'}: ${[...map[k]].map((s) => src.opts[s]).join(' / ') || '?'}`);
      }
      continue;
    }
    verified += 1;
  }
}

console.log('');
console.log(`source questions: ${sources}   verified: ${verified}   skipped: ${skipped}   failures: ${failures}`);
if (failures) {
  console.log('\nAnswer keys contradict their cited source question. Fix the bank, not this guard.');
  process.exit(1);
}
if (verified === 0) {
  console.log('\nNothing was verified. The source references or parsers may have drifted.');
  process.exit(1);
}
console.log('All cited bank answers match their source question.');
