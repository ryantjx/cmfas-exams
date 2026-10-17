import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  formatClock,
  isCorrect,
  sampleByChapter,
  sampleQuestions,
  scoreByChapter,
  prepareQuestion,
  shuffle,
  type QuizAnswers,
  type QuizQuestion,
} from '../lib/quiz';

/* -------------------------------------------------------------------- types */

export type { QuizQuestion };

type QuizBank = {
  examId: string;
  name: string;
  title: string;
  dailySize: number;
  realExam: { questions: number; minutes: number; passPct: number; note: string };
  chapters: { id: string; title: string; questionCount: number }[];
  questions: QuizQuestion[];
};

export type QuizMode = 'daily' | 'chapter' | 'mock';

export type QuizRunnerProps = {
  bankUrl: string;
  mode: QuizMode;
  /** Number of questions to draw (daily size, or the real exam length for a mock). */
  size?: number;
  /** Required for `chapter` mode. */
  chapterId?: string;
  /** When present the quiz is timed and auto-submits at zero (mock). */
  timeLimitSec?: number;
  /** Pass mark percentage used to grade a mock. */
  passPct?: number;
};

type Answers = QuizAnswers;

/* ------------------------------------------------------------------ helpers */

const MODE_LABEL: Record<QuizMode, string> = {
  daily: 'Daily quiz',
  chapter: 'Chapter quiz',
  mock: 'Mock exam',
};

function letterFor(index: number) {
  return String.fromCharCode(65 + index);
}

/* --------------------------------------------------------------- component */

export default function QuizRunner({
  bankUrl,
  mode,
  size,
  chapterId,
  timeLimitSec,
  passPct,
}: QuizRunnerProps) {
  const [bank, setBank] = useState<QuizBank | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(timeLimitSec ?? null);
  const [showNav, setShowNav] = useState(mode === 'mock');
  const topRef = useRef<HTMLDivElement | null>(null);

  const timed = typeof timeLimitSec === 'number' && timeLimitSec > 0;

  /* ---- load bank ---- */
  useEffect(() => {
    let cancelled = false;
    fetch(bankUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load question bank (${response.status}).`);
        return response.json() as Promise<QuizBank>;
      })
      .then((data) => {
        if (!cancelled) setBank(data);
      })
      .catch((cause: unknown) => {
        if (!cancelled) setError(cause instanceof Error ? cause.message : String(cause));
      });
    return () => {
      cancelled = true;
    };
  }, [bankUrl]);

  /* ---- build the question set whenever the bank or seed changes ---- */
  useEffect(() => {
    if (!bank) return;

    const shuffleAnswers = mode === 'mock';
    let chosen: QuizQuestion[];

    if (mode === 'chapter') {
      const inChapter = bank.questions.filter((q) => q.chapterId === chapterId);
      chosen =
        size && size < inChapter.length
          ? sampleQuestions(inChapter, size, { shuffleQuestions: true })
          : shuffle(inChapter);
    } else if (mode === 'daily') {
      chosen = sampleByChapter(bank.questions, size ?? bank.dailySize);
    } else {
      chosen = sampleQuestions(bank.questions, size ?? bank.realExam.questions);
    }

    setQuestions(chosen.map((q) => prepareQuestion(q, { shuffleAnswers })));
    setAnswers({});
    setFlags({});
    setCurrent(0);
    setSubmitted(false);
    setRemaining(timed ? timeLimitSec! : null);
  }, [bank, seed, mode, chapterId, size, timed, timeLimitSec]);

  /* ---- countdown for the mock ---- */
  useEffect(() => {
    if (!timed || submitted || remaining === null) return;
    if (remaining <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = window.setTimeout(() => setRemaining((value) => (value === null ? null : value - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [timed, submitted, remaining]);

  /* ---- scroll to top on submit ---- */
  useEffect(() => {
    if (submitted) topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [submitted]);

  const question = questions[current];
  const answeredCount = useMemo(
    () => questions.filter((q) => (answers[q.id]?.length ?? 0) > 0).length,
    [questions, answers],
  );

  const select = useCallback(
    (optionKey: string) => {
      if (!question || submitted) return;
      setAnswers((previous) => {
        const existing = previous[question.id] ?? [];
        if (question.isMulti) {
          const next = existing.includes(optionKey)
            ? existing.filter((key) => key !== optionKey)
            : [...existing, optionKey].sort();
          return { ...previous, [question.id]: next };
        }
        return { ...previous, [question.id]: [optionKey] };
      });
    },
    [question, submitted],
  );

  const toggleFlag = useCallback(() => {
    if (!question) return;
    setFlags((previous) => ({ ...previous, [question.id]: !previous[question.id] }));
  }, [question]);

  const submit = useCallback(() => setSubmitted(true), []);
  const restart = useCallback(() => setSeed((value) => value + 1), []);

  /* ---- load / error states ---- */
  if (error) {
    return (
      <div className="quiz-shell" role="alert">
        <p>
          <strong>Could not load this quiz.</strong> {error}
        </p>
      </div>
    );
  }
  if (!bank || questions.length === 0) {
    return (
      <div className="quiz-shell" aria-busy="true">
        <p>Loading questions…</p>
      </div>
    );
  }

  /* ---- review screen ---- */
  if (submitted) {
    return (
      <ReviewScreen
        bank={bank}
        mode={mode}
        questions={questions}
        answers={answers}
        passPct={passPct}
        timed={timed}
        timeLimitSec={timeLimitSec}
        onRestart={restart}
        topRef={topRef}
      />
    );
  }

  /* ---- answering screen ---- */
  const selected = answers[question.id] ?? [];
  const isFlagged = Boolean(flags[question.id]);
  const progress = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="quiz-shell" ref={topRef}>
      <div className="quiz-layout">
        <div>
          <header className="quiz-header">
            <div>
              <p className="quiz-eyebrow">
                {bank.name} · {MODE_LABEL[mode]}
                {mode === 'chapter' && question.chapterTitle ? ` · ${question.chapterTitle}` : ''}
              </p>
              <p className="quiz-progress-text">
                Question {current + 1} of {questions.length} · {answeredCount} answered
              </p>
            </div>
            {timed && (
              <div className={`quiz-timer${remaining !== null && remaining <= 60 ? ' is-critical' : ''}`}>
                <span className="quiz-timer-label">Time left</span>
                <span className="quiz-timer-value">{formatClock(remaining ?? 0)}</span>
              </div>
            )}
          </header>

          <div
            className="quiz-progress-bar"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span style={{ width: `${progress}%` }} />
          </div>

          <article className="quiz-question" aria-live="polite">
            <p className="quiz-meta">
              <span className="quiz-badge">{question.type ?? 'Question'}</span>
              {question.sourceRef && <span className="quiz-source">{question.sourceRef}</span>}
              {question.isMulti && <span className="quiz-hint">Select all that apply</span>}
            </p>

            <h2 className="quiz-stem">
              <span className="quiz-number">{question.number}.</span> {question.stem}
            </h2>

            {question.statements.length > 0 && (
              <ul className="quiz-statements">
                {question.statements.map((statement) => (
                  <li key={statement.key}>
                    <strong>({statement.key})</strong> {statement.text}
                  </li>
                ))}
              </ul>
            )}

            <fieldset className="quiz-options">
              <legend className="quiz-visually-hidden">Choose an answer</legend>
              {question.options.map((option, index) => {
                const checked = selected.includes(option.key);
                return (
                  <label key={option.key} className={`quiz-option${checked ? ' is-selected' : ''}`}>
                    <input
                      type={question.isMulti ? 'checkbox' : 'radio'}
                      name={`q-${question.id}`}
                      value={option.key}
                      checked={checked}
                      onChange={() => select(option.key)}
                    />
                    <span className="quiz-option-letter">{letterFor(index)}</span>
                    <span className="quiz-option-text">{option.text}</span>
                  </label>
                );
              })}
            </fieldset>
          </article>

          <nav className="quiz-controls" aria-label="Question navigation">
            <button
              type="button"
              className="quiz-button"
              onClick={() => setCurrent((index) => Math.max(0, index - 1))}
              disabled={current === 0}
            >
              ← Previous
            </button>
            <button
              type="button"
              className={`quiz-button quiz-flag${isFlagged ? ' is-on' : ''}`}
              onClick={toggleFlag}
              aria-pressed={isFlagged}
            >
              {isFlagged ? '★ Flagged' : '☆ Flag for review'}
            </button>
            {current < questions.length - 1 ? (
              <button
                type="button"
                className="quiz-button quiz-button-primary"
                onClick={() => setCurrent((index) => Math.min(questions.length - 1, index + 1))}
              >
                Next →
              </button>
            ) : (
              <button type="button" className="quiz-button quiz-button-primary" onClick={submit}>
                Finish &amp; review
              </button>
            )}
          </nav>

          {mode !== 'mock' && (
            <p className="quiz-submit-row">
              <button type="button" className="quiz-button" onClick={submit}>
                Submit this set for review
              </button>
            </p>
          )}

          <p className="quiz-note">
            No answers are stored — reloading this page discards the set and draws a new one.
          </p>
        </div>

        <aside className={`quiz-sidebar${showNav ? '' : ' is-hidden'}`} aria-label="Question navigator">
          <div className="quiz-nav-head">
            <h3>Questions</h3>
            <button type="button" className="quiz-link" onClick={() => setShowNav((value) => !value)}>
              {showNav ? 'Hide' : 'Show'}
            </button>
          </div>
          <ol className="quiz-nav-grid">
            {questions.map((item, index) => {
              const state = flags[item.id]
                ? 'flagged'
                : (answers[item.id]?.length ?? 0) > 0
                  ? 'answered'
                  : 'unanswered';
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`quiz-nav-cell is-${state}${index === current ? ' is-current' : ''}`}
                    onClick={() => setCurrent(index)}
                    aria-label={`Question ${index + 1}, ${state}`}
                  >
                    {index + 1}
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="quiz-legend">
            <span className="quiz-nav-cell is-answered">1</span> answered
            <span className="quiz-nav-cell is-flagged">2</span> flagged
            <span className="quiz-nav-cell is-unanswered">3</span> unseen
          </p>
          <button type="button" className="quiz-button quiz-button-primary quiz-submit-wide" onClick={submit}>
            Submit
          </button>
        </aside>
      </div>

      {!showNav && (
        <p className="quiz-submit-row">
          <button type="button" className="quiz-link" onClick={() => setShowNav(true)}>
            Show question navigator
          </button>
        </p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------- review screen */

type ReviewProps = {
  bank: QuizBank;
  mode: QuizMode;
  questions: QuizQuestion[];
  answers: Answers;
  passPct?: number;
  timed: boolean;
  timeLimitSec?: number;
  onRestart: () => void;
  topRef: React.RefObject<HTMLDivElement | null>;
};

function ReviewScreen({
  bank,
  mode,
  questions,
  answers,
  passPct,
  timed,
  timeLimitSec,
  onRestart,
  topRef,
}: ReviewProps) {
  const correctCount = questions.filter((q) => isCorrect(q, answers[q.id])).length;
  const percent = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
  const pass = typeof passPct === 'number' ? percent >= passPct : null;
  const breakdown = scoreByChapter(questions, answers);
  const unanswered = questions.filter((q) => (answers[q.id]?.length ?? 0) === 0).length;

  return (
    <div className="quiz-shell" ref={topRef}>
      <section className={`quiz-score${pass === null ? '' : pass ? ' is-pass' : ' is-fail'}`}>
        <p className="quiz-eyebrow">
          {bank.name} · {MODE_LABEL[mode]} · result
        </p>
        <h2 className="quiz-score-value">
          {correctCount}/{questions.length}
          <span className="quiz-score-percent">{percent}%</span>
        </h2>
        {pass !== null && (
          <p className="quiz-score-verdict">
            {pass ? 'Pass' : 'Below the pass mark'} — pass mark {passPct}%
          </p>
        )}
        <p className="quiz-score-meta">
          {unanswered > 0 && <span>{unanswered} left unanswered · </span>}
          {timed && timeLimitSec ? <span>Timed: {formatClock(timeLimitSec)} · </span> : null}
          {mode === 'mock' ? 'Mock exam' : 'Practice set'}
        </p>
      </section>

      <section className="quiz-breakdown">
        <h3>By chapter</h3>
        <table>
          <thead>
            <tr>
              <th scope="col">Chapter</th>
              <th scope="col">Correct</th>
              <th scope="col">Of</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {breakdown.map((row) => {
              const rowPercent = row.total ? Math.round((row.correct / row.total) * 100) : 0;
              return (
                <tr key={row.chapterId}>
                  <td>{row.chapterTitle}</td>
                  <td>{row.correct}</td>
                  <td>{row.total}</td>
                  <td className={rowPercent >= 70 ? 'is-good' : 'is-weak'}>{rowPercent}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="quiz-review">
        <h3>Answer review</h3>
        {questions.map((question, index) => {
          const selected = answers[question.id] ?? [];
          const right = isCorrect(question, selected);
          return (
            <article key={question.id} className={`quiz-review-item ${right ? 'is-right' : 'is-wrong'}`}>
              <p className="quiz-meta">
                <span className={`quiz-badge ${right ? 'is-good' : 'is-bad'}`}>
                  {right ? 'Correct' : selected.length === 0 ? 'Not answered' : 'Incorrect'}
                </span>
                <span className="quiz-source">Q{index + 1}</span>
                {question.type && <span className="quiz-source">{question.type}</span>}
                {question.sourceRef && <span className="quiz-source">{question.sourceRef}</span>}
                {question.chapterTitle && <span className="quiz-source">{question.chapterTitle}</span>}
              </p>

              <p className="quiz-review-stem">
                <strong>{question.number}.</strong> {question.stem}
              </p>

              {question.statements.length > 0 && (
                <ul className="quiz-statements">
                  {question.statements.map((statement) => (
                    <li key={statement.key}>
                      <strong>({statement.key})</strong> {statement.text}
                    </li>
                  ))}
                </ul>
              )}

              <ul className="quiz-review-options">
                {question.options.map((option, optionIndex) => {
                  const isAnswer = question.answerKeys.includes(option.key);
                  const chose = selected.includes(option.key);
                  return (
                    <li
                      key={option.key}
                      className={`${isAnswer ? 'is-answer' : ''}${chose ? ' is-chosen' : ''}`}
                    >
                      <span className="quiz-option-letter">{letterFor(optionIndex)}</span>
                      <span>{option.text}</span>
                      {isAnswer && <span className="quiz-tick">✓ correct</span>}
                      {chose && !isAnswer && <span className="quiz-cross">✗ your answer</span>}
                    </li>
                  );
                })}
              </ul>

              {question.rationale && (
                <p className="quiz-rationale">
                  <strong>Why:</strong> {question.rationale}
                </p>
              )}
            </article>
          );
        })}
      </section>

      <p className="quiz-submit-row">
        <button type="button" className="quiz-button quiz-button-primary" onClick={onRestart}>
          Start a new set
        </button>
      </p>
    </div>
  );
}
