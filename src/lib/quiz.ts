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
 */
export function sampleByChapter(
  questions: readonly QuizQuestion[],
  size: number,
): QuizQuestion[] {
  const byChapter = new Map<string, QuizQuestion[]>();
  for (const question of questions) {
    const key = question.chapterId ?? 'unknown';
    const bucket = byChapter.get(key);
    if (bucket) bucket.push(question);
    else byChapter.set(key, [question]);
  }

  const buckets = shuffle([...byChapter.values()].map((list) => shuffle(list)));
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

  return picked.length >= size ? shuffle(picked) : sampleQuestions(questions, size);
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
