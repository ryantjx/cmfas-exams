/**
 * Ticker-drill helpers — framework-agnostic logic shared by the ticker quiz island.
 *
 * Card shape (see data/tickers.json, validated by scripts/build-tickers.mjs):
 *   { ticker, yahooSymbol, name, shortName, exchange, country, sector, industry, accept }
 *
 * `accept` is pre-normalised on the data side: lowercase, punctuation flattened to
 * spaces, legal suffixes dropped. `normalizeAnswer()` must stay in step with it,
 * because a typed answer is compared through the same normalisation.
 */

import { shuffle, type Rng } from './quiz';

export type TickerCard = {
  /** Display ticker in exchange-suffix form, e.g. `9984 JT`. */
  ticker: string;
  /** Yahoo Finance symbol used to verify the row, e.g. `9984.T`. */
  yahooSymbol: string;
  /** Verified registered name, e.g. `SoftBank Group Corp.`. */
  name: string;
  /** Short name the quiz shows and asks for, e.g. `SoftBank Group`. */
  shortName: string;
  exchange: string;
  country: string;
  sector: string | null;
  industry: string | null;
  /** Normalised answers accepted in typed mode. */
  accept: string[];
};

export type TickerPayload = {
  version: number;
  generated: string;
  source: string;
  note: string;
  tickers: TickerCard[];
};

export type TickerQuestion = {
  card: TickerCard;
  /** The answer plus three distractors, already shuffled. */
  options: TickerCard[];
};

/**
 * Legal forms that carry no identifying information. The same set is stripped when
 * the data file is built, so `DBS Group Holdings Ltd` and `DBS` both match `dbs`.
 */
const LEGAL_TOKENS = new Set<string>([
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

/** Lowercase, flatten punctuation, drop legal suffixes: `SoftBank Group Corp.` → `softbank group`. */
export function normalizeAnswer(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((token) => token.length > 0 && !LEGAL_TOKENS.has(token))
    .join(' ');
}

/** Every string that counts as a correct typed answer for this card. */
export function acceptedAnswers(card: TickerCard): Set<string> {
  const keys = new Set<string>(card.accept.map(normalizeAnswer));
  keys.add(normalizeAnswer(card.shortName));
  keys.add(normalizeAnswer(card.name));
  keys.delete('');
  return keys;
}

/** Does the typed answer name this company? */
export function isTypedAnswerCorrect(card: TickerCard, input: string): boolean {
  const key = normalizeAnswer(input);
  if (!key) return false;
  return acceptedAnswers(card).has(key);
}

/**
 * Build the four options for one card: the answer, two companies from the same
 * market, and one from elsewhere. Same-market distractors stop the exchange label
 * from giving the answer away.
 */
export function buildOptions(
  card: TickerCard,
  pool: readonly TickerCard[],
  rng: Rng = Math.random,
  count = 4,
): TickerCard[] {
  const sameMarket = shuffle(
    pool.filter((entry) => entry.ticker !== card.ticker && entry.exchange === card.exchange),
    rng,
  );
  const otherMarket = shuffle(
    pool.filter((entry) => entry.ticker !== card.ticker && entry.exchange !== card.exchange),
    rng,
  );

  const distractors = sameMarket.slice(0, 2);
  for (const entry of otherMarket) {
    if (distractors.length >= count - 1) break;
    distractors.push(entry);
  }
  for (const entry of sameMarket.slice(2)) {
    if (distractors.length >= count - 1) break;
    distractors.push(entry);
  }

  return shuffle([card, ...distractors], rng);
}

/** One round: `size` distinct cards, each with its own option set. */
export function buildRound(
  cards: readonly TickerCard[],
  size: number,
  rng: Rng = Math.random,
): TickerQuestion[] {
  const total = Math.max(1, Math.min(size, cards.length));
  return shuffle(cards, rng)
    .slice(0, total)
    .map((card) => ({ card, options: buildOptions(card, cards, rng) }));
}
