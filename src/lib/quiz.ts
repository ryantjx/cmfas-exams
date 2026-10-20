/**
 * Quiz logic — framework-agnostic helpers shared by the quiz islands.
 *
 * Question shape (see scripts/lib/questions.mjs):
 *   { id, number, chapterId, chapterTitle, type, sourceRef, stem, statements,
 *     options: [{ key, text }], answerKeys: string[], isMulti, rationale }
 *
 * `answerKeys` is authoritative: it is derived from the stated answer, so a
 * question tagged `[Multiple response]` in the source but carrying one answer
 * behaves as single-choice.
 */

export type QuizOption = {
  key: string;
  text: string;
  /** Set by `prepareQuestion` so the UI can mark the answer without the keys. */
  correct?: boolean;
};

export type QuizQuestion = {
  id: string;
  number: number;
  chapterId: string | null;
  chapterTitle: string | null;
  type: string | null;
  sourceRef: string | null;
  stem: string;
  statements: { key: string; text: string }[];
  options: QuizOption[];
  answerKeys: string[];
  isMulti: boolean;
  rationale: string | null;
};

export type QuizAnswers = Record<string, string[]>;

export type ChapterScoreRow = {
  chapterId: string;
  chapterTitle: string;
  correct: number;
  total: number;
};

/** A pseudo-random source: returns a float in [0, 1). */
export type Rng = () => number;

/**
 * 32-bit FNV-1a hash, used only to turn a date string into a PRNG seed.
 * Stable across reloads and browsers, which is what makes the daily set fixed.
 */
function hashSeed(text: string): number {
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/** Mulberry32 PRNG — small, fast, and good enough to shuffle a question bank. */
export function createRng(seed: number): Rng {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

/** Local calendar day as `YYYY-MM-DD`. The daily set rolls at local midnight. */
export function dayKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Seed for one exam's daily set. Same exam and same day → same questions in the
 * same order; a new day → a new set. Every visitor sees the same set that day.
 */
export function dailySeed(examId: string, date: Date = new Date()): number {
  return hashSeed(`${examId}:${dayKey(date)}`);
}

/** Fisher–Yates shuffle on a copy, optionally driven by a seeded PRNG. */
export function shuffle<T>(list: readonly T[], rng: Rng = Math.random): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Shuffle a question's options while preserving which keys are correct.
 * Option labels stay a/b/c/d in presentation order — only the text moves — so
 * the answer key is remapped to the new position.
 */
export function shuffleOptions(question: QuizQuestion, rng: Rng = Math.random): QuizQuestion {
  const correct = new Set(question.answerKeys);
  const options = shuffle(question.options, rng).map((option, index) => ({
    key: 'abcd'[index],
    text: option.text,
    correct: correct.has(option.key),
  }));
  return {
    ...question,
    options,
    answerKeys: options.filter((option) => option.correct).map((option) => option.key),
  };
}

/** Prepare a question for display: annotate the answer, optionally shuffle. */
export function prepareQuestion(
  question: QuizQuestion,
  { shuffleAnswers = false, rng = Math.random }: { shuffleAnswers?: boolean; rng?: Rng } = {},
): QuizQuestion {
  if (shuffleAnswers) return shuffleOptions(question, rng);
  return {
    ...question,
    options: question.options.map((option) => ({
      ...option,
      correct: question.answerKeys.includes(option.key),
    })),
  };
}

/** Sample `size` questions from the pool. */
export function sampleQuestions(
  questions: readonly QuizQuestion[],
  size: number,
  { shuffleQuestions = true, rng = Math.random }: { shuffleQuestions?: boolean; rng?: Rng } = {},
): QuizQuestion[] {
  const pool = shuffleQuestions ? shuffle(questions, rng) : [...questions];
  if (size >= pool.length) return shuffle(pool, rng);
  return shuffle(pool, rng).slice(0, size);
}

/**
 * Sample `size` questions spread across the available chapters, so a daily quiz
 * is not dominated by whichever chapter happens to hold the most questions.
 */
export function sampleByChapter(
  questions: readonly QuizQuestion[],
  size: number,
  rng: Rng = Math.random,
): QuizQuestion[] {
  const byChapter = new Map<string, QuizQuestion[]>();
  for (const question of questions) {
    const key = question.chapterId ?? 'unknown';
    const bucket = byChapter.get(key);
    if (bucket) bucket.push(question);
    else byChapter.set(key, [question]);
  }

  const buckets = shuffle(
    [...byChapter.values()].map((list) => shuffle(list, rng)),
    rng,
  );
  const picked: QuizQuestion[] = [];
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

  return picked.length >= size ? shuffle(picked, rng) : sampleQuestions(questions, size, { rng });
}

/** Is the given selection correct for the question? */
export function isCorrect(question: QuizQuestion, selected: readonly string[] | undefined): boolean {
  const chosen = new Set(selected ?? []);
  const answer = new Set(question.answerKeys);
  if (chosen.size !== answer.size) return false;
  for (const key of answer) if (!chosen.has(key)) return false;
  return true;
}

export function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/** Per-chapter score breakdown for the review screen. */
export function scoreByChapter(
  questions: readonly QuizQuestion[],
  answers: QuizAnswers,
): ChapterScoreRow[] {
  const rows = new Map<string, ChapterScoreRow>();
  for (const question of questions) {
    const key = question.chapterId ?? 'unknown';
    let row = rows.get(key);
    if (!row) {
      row = { chapterId: key, chapterTitle: question.chapterTitle ?? key, correct: 0, total: 0 };
      rows.set(key, row);
    }
    row.total += 1;
    if (isCorrect(question, answers[question.id])) row.correct += 1;
  }
  return [...rows.values()].sort((a, b) =>
    a.chapterTitle.localeCompare(b.chapterTitle, 'en', { numeric: true }),
  );
}
