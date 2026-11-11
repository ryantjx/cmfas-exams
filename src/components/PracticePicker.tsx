import { useEffect, useMemo, useState } from 'react';

import QuizRunner, { type QuizMode } from './QuizRunner';

type ChapterSummary = { id: string; title: string; count: number };

type CatalogExam = {
  id: string;
  name: string;
  subtitle: string;
  questions: number;
  dailySize: number;
  /** Number of questions in the learning-objective quiz set, or 0 when the exam has none. */
  loQuizSize: number;
  realExam: { questions: number; minutes: number; passPct: number; note: string };
  chapters: ChapterSummary[];
};

export type PracticePickerProps = {
  /** `import.meta.env.BASE_URL`, used for the catalogue and bank fetches. */
  base: string;
  /** Deep-link target, e.g. when rendering `/practice/cmsip/`. */
  examId?: string;
};

const MODES: { mode: QuizMode; label: string; blurb: string; requiresLoQuiz?: boolean }[] = [
  {
    mode: 'chapter',
    label: 'Chapter quiz',
    blurb: 'One chapter at a time. The answer and explanation appear as soon as you answer.',
  },
  {
    mode: 'random',
    label: 'Random quiz',
    blurb:
      'Every question in the bank in random order — the long pass for full coverage. The answer appears as soon as you answer.',
  },
  {
    mode: 'daily',
    label: 'Daily quiz',
    blurb:
      '30 questions from across the whole bank, a fresh subset every time you start. The answer appears as soon as you answer.',
  },
  {
    mode: 'mock',
    label: 'Mock exam',
    blurb:
      'Full length on the real paper blueprint, untimed, with the answer and explanation after each question.',
  },
  {
    // Shown only for exams whose bank carries an loQuiz set (see the filter at
    // the type picker below) — other exams have none, so the tile must not
    // appear for them.
    mode: 'lo',
    label: 'Learning-objective quiz',
    blurb:
      'The learning-objective mock: one question per learning objective, in objective order, graded at the real pass mark.',
    requiresLoQuiz: true,
  },
];

/**
 * Coerce a `?type=` value to a quiz mode, or null.
 *
 * Starlight appends a trailing slash to sidebar links (`trailingSlash: 'always'`
 * in astro.config.mjs), so a sidebar entry written as `?type=daily` arrives as
 * `?type=daily/`. Without stripping it the deep link fails the mode match and
 * dumps the reader on the type picker instead of the quiz.
 */
const asMode = (value: string | null): QuizMode | null => {
  const mode = value === null ? null : value.replace(/\/+$/, '');
  return mode === 'chapter' || mode === 'random' || mode === 'daily' || mode === 'mock' || mode === 'lo'
    ? mode
    : null;
};

/**
 * Entry point for the practice section.
 *
 * Renders a two-step picker — exam, then quiz type — and launches the runner.
 * Deep links let guide pages and the sidebar jump straight into a quiz:
 *   /practice/cmsip/?type=chapter&chapter=3
 *   /practice/?exam=fmrp&type=mock
 */
export default function PracticePicker({ base, examId: deepLinkExamId }: PracticePickerProps) {
  const [catalog, setCatalog] = useState<CatalogExam[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [examId, setExamId] = useState<string | null>(deepLinkExamId ?? null);
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [chapterId, setChapterId] = useState<string | null>(null);

  /* ---- load the catalogue ---- */
  useEffect(() => {
    let cancelled = false;
    fetch(`${base}banks/index.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load the practice catalogue (${response.status}).`);
        }
        return response.json() as Promise<CatalogExam[]>;
      })
      .then((data) => {
        if (!cancelled) setCatalog(data);
      })
      .catch((cause: unknown) => {
        if (!cancelled) setError(cause instanceof Error ? cause.message : String(cause));
      });
    return () => {
      cancelled = true;
    };
  }, [base]);

  /* ---- honour deep links: ?exam=, ?type=, ?chapter= ---- */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedExam = params.get('exam');
    if (!deepLinkExamId && requestedExam) setExamId(requestedExam);

    const requestedMode = asMode(params.get('type'));
    if (requestedMode) setMode(requestedMode);

    const requestedChapter = params.get('chapter');
    if (requestedChapter) setChapterId(requestedChapter);
  }, [deepLinkExamId]);

  const exam = useMemo(
    () => catalog?.find((entry) => entry.id === examId) ?? null,
    [catalog, examId],
  );

  const backToTypes = () => {
    setMode(null);
    setChapterId(null);
  };

  // Keep ?chapter= in the URL so a chapter set is shareable and survives a reload.
  // The chapter list (no selection) clears it again.
  useEffect(() => {
    if (!examId || mode !== 'chapter') return;
    const url = new URL(window.location.href);
    if (chapterId) url.searchParams.set('chapter', chapterId);
    else url.searchParams.delete('chapter');
    window.history.replaceState(window.history.state, '', url);
  }, [examId, mode, chapterId]);

  /* ---- error / loading ---- */
  if (error) {
    return (
      <div className="quiz-shell" role="alert">
        <p>
          <strong>Could not start practice.</strong> {error}
        </p>
      </div>
    );
  }
  if (!catalog) {
    return (
      <div className="quiz-shell" aria-busy="true">
        <p>Loading…</p>
      </div>
    );
  }

  /* ---- a quiz is running ---- */
  if (exam && mode) {
    const bankUrl = `${base}banks/${exam.id}.json`;
    const nav = (
      <p className="quiz-picker-bar">
        <button type="button" className="quiz-link" onClick={backToTypes}>
          ← Change quiz type
        </button>
        <button
          type="button"
          className="quiz-link"
          onClick={() => {
            backToTypes();
            setExamId(null);
          }}
        >
          ← Change exam
        </button>
      </p>
    );

    if (mode === 'chapter') {
      const chapter = exam.chapters.find((entry) => entry.id === chapterId);
      if (chapter) {
        return (
          <div>
            {nav}
            <QuizRunner bankUrl={bankUrl} mode="chapter" chapterId={chapter.id} />
          </div>
        );
      }
      return (
        <div className="quiz-shell">
          {nav}
          <p>Pick a chapter. The answer and explanation appear as soon as you answer.</p>
          <ul className="quiz-chapter-list">
            {exam.chapters.map((entry) => (
              <li key={entry.id}>
                <button
                  type="button"
                  className="quiz-chapter-button"
                  onClick={() => setChapterId(entry.id)}
                >
                  <span className="quiz-chapter-title">{entry.title}</span>
                  <span className="quiz-chapter-count">
                    {entry.count} question{entry.count === 1 ? '' : 's'}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="quiz-note">
            Nothing is timed: every mode lets you stop and read the explanation.
          </p>
        </div>
      );
    }

    if (mode === 'random') {
      return (
        <div>
          {nav}
          {/* No size: the runner takes the whole bank for this mode. */}
          <QuizRunner bankUrl={bankUrl} mode="random" />
        </div>
      );
    }

    if (mode === 'daily') {
      return (
        <div>
          {nav}
          <QuizRunner bankUrl={bankUrl} mode="daily" size={exam.dailySize} />
        </div>
      );
    }

    if (mode === 'lo') {
      return (
        <div>
          {nav}
          {/* The learning-objective quiz is a fixed set, not a draw: the same
              questions in learning-objective order, graded at the real pass
              mark like a mock. `size` is the set's length from the catalogue;
              the runner serves the payload's loQuiz ids in order. */}
          <QuizRunner
            bankUrl={bankUrl}
            mode="lo"
            size={exam.loQuizSize}
            passPct={exam.realExam.passPct}
          />
        </div>
      );
    }

    return (
      <div>
        {nav}
        {/* Mock exams run in learning mode too: the answer and explanation appear
            after each question, and the timer is dropped so a learner can stop
            and read the rationale. The paper's length, blueprint and pass mark
            are still enforced, and the score report still grades the set. */}
        <QuizRunner
          bankUrl={bankUrl}
          mode="mock"
          size={exam.realExam.questions}
          passPct={exam.realExam.passPct}
        />
      </div>
    );
  }

  /* ---- step 1: pick an exam ---- */
  if (!exam) {
    return (
      <div className="quiz-shell">
        <ul className="quiz-tile-grid">
          {catalog.map((entry) => (
            <li key={entry.id}>
              <button
                type="button"
                className="quiz-tile"
                onClick={() => {
                  setExamId(entry.id);
                  backToTypes();
                }}
              >
                <span className="quiz-tile-title">{entry.name}</span>
                <span className="quiz-tile-blurb">
                  {entry.questions} questions · {entry.realExam.questions} in the real exam
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /* ---- step 2: pick a quiz type ---- */
  return (
    <div className="quiz-shell">
      <p className="quiz-picker-bar">
        <button type="button" className="quiz-link" onClick={() => setExamId(null)}>
          ← Change exam
        </button>
      </p>
      <ul className="quiz-tile-grid">
        {MODES.filter((entry) => !entry.requiresLoQuiz || (exam.loQuizSize ?? 0) > 0).map(
          (entry) => (
            <li key={entry.mode}>
              <button type="button" className="quiz-tile" onClick={() => setMode(entry.mode)}>
                <span className="quiz-tile-title">{entry.label}</span>
                <span className="quiz-tile-blurb">{entry.blurb}</span>
              </button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
