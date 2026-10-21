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

/** Fisher–Yates shuffle on a copy. */
export function shuffle<T>(list: readonly T[]): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * A small deterministic PRNG (mulberry32).
 *
 * The daily quiz should present the *same* set all day and a *different* set
 * tomorrow, which `Math.random` cannot do: it re-rolls on every render. Seeding from
 * the calendar date gives that property without storing anything, and keeps the
 * "nothing is persisted" promise intact.
 */
export function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Turn a date into a stable integer seed, e.g. 2026-10-20 → 20261020. */
export function seedFromDate(date = new Date()): number {
  return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
}

/** Fisher–Yates shuffle driven by an explicit random source. */
export function shuffleWith<T>(list: readonly T[], random: () => number): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Shuffle a question's options while preserving which keys are correct.
 * Option labels stay a/b/c/d in presentation order — only the text moves — so
 * the answer key is remapped to the new position.
 */
export function shuffleOptions(question: QuizQuestion): QuizQuestion {
  const correct = new Set(question.answerKeys);
  const options = shuffle(question.options).map((option, index) => ({
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
  { shuffleAnswers = false }: { shuffleAnswers?: boolean } = {},
): QuizQuestion {
  if (shuffleAnswers) return shuffleOptions(question);
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
  { shuffleQuestions = true }: { shuffleQuestions?: boolean } = {},
): QuizQuestion[] {
  const pool = shuffleQuestions ? shuffle(questions) : [...questions];
  if (size >= pool.length) return shuffle(pool);
  return shuffle(pool).slice(0, size);
}

/**
 * Sample `size` questions spread across the available chapters, so a daily quiz
 * is not dominated by whichever chapter happens to hold the most questions.
 *
 * Pass a `random` source to make the result reproducible. The daily quiz seeds it
 * from the calendar date so the same set is served all day and a different one
 * tomorrow, without persisting anything.
 */
export function sampleByChapter(
  questions: readonly QuizQuestion[],
  size: number,
  random: () => number = Math.random,
): QuizQuestion[] {
  const byChapter = new Map<string, QuizQuestion[]>();
  for (const question of questions) {
    const key = question.chapterId ?? 'unknown';
    const bucket = byChapter.get(key);
    if (bucket) bucket.push(question);
    else byChapter.set(key, [question]);
  }

  const buckets = shuffleWith(
    [...byChapter.values()].map((list) => shuffleWith(list, random)),
    random,
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

  return picked.length >= size
    ? shuffleWith(picked, random)
    : sampleQuestions(questions, size, { shuffleQuestions: true });
}

/** Is the given selection correct for the question? */
export function isCorrect(question: QuizQuestion, selected: readonly string[] | undefined): boolean {
  const chosen = new Set(selected ?? []);
  const answer = new Set(question.answerKeys);
  if (chosen.size !== answer.size) return false;
  for (const key of answer) if (!chosen.has(key)) return false;
  return true;
}

/**
 * Sample a mock exam to a blueprint rather than uniformly.
 *
 * A uniform draw does not resemble the real paper: CM-SIP's paper is 80 questions
 * of which 18 are case-study questions, but the bank is only 6% case studies, so a
 * random draw produces about five. RES 12B is a combined paper, and a random draw
 * gives no guarantee that both constituent parts are represented.
 *
 * `quotas` maps `chapterId` to a target count. Each chapter is drawn up to its
 * quota and no further; if a chapter cannot fill its quota the shortfall is
 * reallocated across the chapters that still have unused questions, so the set is
 * never short of `size`. The ordering of the result is shuffled, as with any other
 * sample.
 *
 * Chapter ids missing from `quotas` are still eligible for the top-up, which
 * covers appendices and the `mixed` group.
 */
export function sampleByBlueprint(
  questions: readonly QuizQuestion[],
  quotas: Readonly<Record<string, number>>,
  size: number,
  random: () => number = Math.random,
): QuizQuestion[] {
  const byChapter = new Map<string, QuizQuestion[]>();
  for (const question of questions) {
    const key = question.chapterId ?? 'unknown';
    const bucket = byChapter.get(key);
    if (bucket) bucket.push(question);
    else byChapter.set(key, [question]);
  }
  // Shuffle each bucket once so repeated draws within a chapter vary.
  for (const [key, bucket] of byChapter) byChapter.set(key, shuffleWith(bucket, random));

  const picked: QuizQuestion[] = [];
  const used = new Map<string, number>();

  // 1. Honour each chapter's quota, capped at what the chapter actually holds.
  for (const [chapterId, quota] of Object.entries(quotas)) {
    const bucket = byChapter.get(chapterId);
    if (!bucket || quota <= 0) continue;
    const take = Math.min(quota, bucket.length);
    picked.push(...bucket.slice(0, take));
    used.set(chapterId, take);
  }

  // 2. Top up any shortfall across all remaining questions, preferring chapters
  //    that were under-represented relative to their quota, then any other
  //    chapter. Without this a thin chapter would shrink the whole paper.
  if (picked.length < size) {
    const leftovers: QuizQuestion[] = [];
    for (const [chapterId, bucket] of byChapter) {
      const start = used.get(chapterId) ?? 0;
      leftovers.push(...bucket.slice(start));
    }
    const ordered = shuffleWith(leftovers, random);
    picked.push(...ordered.slice(0, size - picked.length));
  }

  // 3. Never exceed the requested size, even if quotas were generous.
  const capped = picked.slice(0, size);
  return capped.length >= Math.min(size, questions.length)
    ? shuffleWith(capped, random)
    : sampleQuestions(questions, size, { shuffleQuestions: true });
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
