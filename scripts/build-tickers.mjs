#!/usr/bin/env node
/**
 * Validate the hand-curated ticker list and publish it for the ticker-drill island.
 *
 *   data/tickers.json    source of truth (curated, verified against Yahoo Finance)
 *   src/data/tickers.json  build-time copy (read by build-content.mjs)
 *   public/tickers.json    runtime copy (fetched by src/components/TickerQuiz.tsx)
 *
 * Fails loudly (non-zero exit) on a duplicate ticker, an unmapped exchange suffix,
 * or an `accept` entry that is not already normalised. `npm run verify` gates the
 * deploy on this, so a bad row cannot reach the site.
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { REPO_ROOT } from './lib/util.mjs';

const SOURCE = path.join(REPO_ROOT, 'data', 'tickers.json');
const DATA_OUT = path.join(REPO_ROOT, 'src', 'data', 'tickers.json');
const PUBLIC_OUT = path.join(REPO_ROOT, 'public', 'tickers.json');

/** Exchange suffix → exchange name. The suffix is what the quiz displays. */
const SUFFIX_EXCHANGE = {
  SI: 'Singapore Exchange',
  HK: 'Hong Kong Stock Exchange',
  JT: 'Tokyo Stock Exchange',
  US: 'NASDAQ',
  LN: 'London Stock Exchange',
};

/** US tickers list on either NYSE or NASDAQ, so both are valid for `US`. */
const EXCHANGES = {
  'Singapore Exchange': true,
  'Hong Kong Stock Exchange': true,
  'Tokyo Stock Exchange': true,
  NASDAQ: true,
  NYSE: true,
  'London Stock Exchange': true,
};

const LEGAL_TOKENS = new Set([
  'incorporated',
  'inc',
  'corp',
  'corporation',
  'company',
  'co',
  'ltd',
  'limited',
  'plc',
  'holdings',
  'holding',
  'sa',
  'nv',
  'ag',
  'kk',
]);

/** Must match `normalizeAnswer()` in src/lib/ticker.ts. */
function normalizeAnswer(text) {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((token) => token.length > 0 && !LEGAL_TOKENS.has(token))
    .join(' ');
}

const payload = JSON.parse(readFileSync(SOURCE, 'utf8'));
const tickers = payload.tickers ?? [];
const problems = [];

if (payload.version !== 1) problems.push(`version is ${payload.version}, expected 1`);
if (!Array.isArray(tickers)) problems.push('tickers is not an array');

const seenTicker = new Set();
const seenShortName = new Set();
const seenSymbol = new Set();

for (const entry of tickers) {
  const label = entry?.ticker ?? '(missing ticker)';

  for (const field of ['ticker', 'yahooSymbol', 'name', 'shortName', 'exchange', 'country']) {
    if (typeof entry?.[field] !== 'string' || entry[field].trim().length === 0) {
      problems.push(`${label}: empty or missing ${field}`);
    }
  }
  if (!Array.isArray(entry?.accept) || entry.accept.length === 0) {
    problems.push(`${label}: accept must be a non-empty array`);
    continue;
  }

  if (!/^[A-Z0-9.]{1,6} (SI|HK|JT|US|LN)$/.test(entry.ticker)) {
    problems.push(`${label}: ticker is not in exchange-suffix form (e.g. "9984 JT")`);
  } else {
    const suffix = entry.ticker.split(' ').pop();
    const expected = SUFFIX_EXCHANGE[suffix];
    if (suffix === 'US' ? !EXCHANGES[entry.exchange] : expected !== entry.exchange) {
      problems.push(`${label}: exchange ${entry.exchange} does not match suffix ${suffix}`);
    }
  }
  if (!EXCHANGES[entry.exchange]) problems.push(`${label}: unknown exchange ${entry.exchange}`);

  if (seenTicker.has(entry.ticker)) problems.push(`${label}: duplicate ticker`);
  seenTicker.add(entry.ticker);
  if (seenShortName.has(entry.shortName)) problems.push(`${label}: duplicate shortName ${entry.shortName}`);
  seenShortName.add(entry.shortName);
  if (seenSymbol.has(entry.yahooSymbol)) problems.push(`${label}: duplicate yahooSymbol`);
  seenSymbol.add(entry.yahooSymbol);

  const accepted = new Set();
  for (const value of entry.accept) {
    if (typeof value !== 'string' || value.length === 0) {
      problems.push(`${label}: accept contains an empty value`);
      continue;
    }
    if (value !== normalizeAnswer(value)) {
      problems.push(`${label}: accept value ${JSON.stringify(value)} is not normalised`);
    }
    if (accepted.has(value)) problems.push(`${label}: duplicate accept value ${JSON.stringify(value)}`);
    accepted.add(value);
  }
  if (!accepted.has(normalizeAnswer(entry.shortName))) {
    problems.push(`${label}: accept does not include its own shortName`);
  }

  if (entry.sector !== null && typeof entry.sector !== 'string') {
    problems.push(`${label}: sector must be a string or null`);
  }
}

const sectors = new Set(tickers.map((entry) => entry?.sector).filter(Boolean));
const exchanges = new Set(tickers.map((entry) => entry?.exchange).filter(Boolean));
if (tickers.length < 20) problems.push(`only ${tickers.length} tickers; at least 20 are needed for a drill`);
if (sectors.size < 4) problems.push(`only ${sectors.size} sectors; distractors need at least 4`);
if (exchanges.size < 3) problems.push(`only ${exchanges.size} exchanges; distractors need at least 3`);

const status = problems.length === 0 ? 'PASS' : 'FAIL';
console.log(
  `[${status}] tickers  ${String(tickers.length).padStart(3)} cards  ` +
    `| exchanges ${exchanges.size}  | sectors ${sectors.size}  ` +
    `| accepted answers ${tickers.reduce((total, entry) => total + (entry.accept?.length ?? 0), 0)}`,
);

if (problems.length) {
  for (const problem of problems.slice(0, 25)) console.log(`         - ${problem}`);
  if (problems.length > 25) console.log(`         … ${problems.length - 25} more`);
  console.error('\nTicker generation failed — fix data/tickers.json.');
  process.exit(1);
}

const json = `${JSON.stringify(payload, null, 2)}\n`;
mkdirSync(path.dirname(DATA_OUT), { recursive: true });
mkdirSync(path.dirname(PUBLIC_OUT), { recursive: true });
writeFileSync(DATA_OUT, json);
writeFileSync(PUBLIC_OUT, json);
console.log('Ticker list published.');
