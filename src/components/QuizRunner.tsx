import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  isCorrect,
  sampleByBlueprint,
  sampleByChapter,
  sampleQuestions,
  scoreByChapter,
  prepareQuestion,
  shuffle,
  type QuizAnswers,
  type QuizQuestion,
} from '../lib/quiz';
import { buildFlagUrl, fetchFlaggedQuestions, type FlaggedIssue } from '../lib/flag';

/* -------------------------------------------------------------------- types */

export type { QuizQuestion };

type QuizBank = {
  examId: string;
  name: string;
  title: string;
  dailySize: number;
  realExam: { questions: number; minutes: number; passPct: number; note: string };
  /**
   * Mock composition resolved by `scripts/lib/blueprint.mjs` at build time.
   * Absent on an older bank payload, in which case the mock falls back to a
   * uniform sample.
   */
  mock?: { examId: string; questions: number; quotas: Record<string, number>; fixed: string[] } | null;
  /**
   * The learning-objective quiz set: question ids in LO order, resolved by
   * `scripts/build-banks.mjs` from `loQuiz` in `scripts/lib/exams.mjs`.
   * Null (or absent) on exams without one — the picker only offers the mode
   * when this is present.
   */
  loQuiz?: string[] | null;
  chapters: { id: string; title: string; questionCount: number }[];
  questions: QuizQuestion[];
};

export type QuizMode = 'daily' | 'chapter' | 'random' | 'mock' | 'lo';

export type QuizRunnerProps = {
  bankUrl: string;
  mode: QuizMode;
  /** Number of questions to draw (daily size, or the real exam length for a mock). */
  size?: number;
  /** Required for `chapter` mode. */
  chapterId?: string;
  /** Pass mark percentage used to grade a mock. */
  passPct?: number;
};

type Answers = QuizAnswers;

/* ------------------------------------------------------------------ helpers */

const MODE_LABEL: Record<QuizMode, string> = {
  daily: 'Daily quiz',
  chapter: 'Chapter quiz',
  random: 'Random quiz',
  mock: 'Mock exam',
  lo: 'Learning-objective quiz',
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
  passPct,
}: QuizRunnerProps) {
  const [bank, setBank] = useState<QuizBank | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  // Whether the set for the current bank has been built. Without this, the render
  // between "bank loaded" and "effect ran" shows `questions.length === 0` and
  // flashes the "No questions for this set" alert before the questions appear.
  const [built, setBuilt] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  /** Open `question-flag` issues, shared with every visitor (see flag.ts). */
  const [globalFlags, setGlobalFlags] = useState<Record<string, FlaggedIssue>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showNav, setShowNav] = useState(mode === 'mock' || mode === 'lo');
  const topRef = useRef<HTMLDivElement | null>(null);

  /* ---- load bank ---- */
  useEffect(() => {
    let cancelled = false;
    fetch(bankUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load question bank (${response.status}).`);
        return response.json() as Promise<QuizBank>;
      })
      .then((data) => {
        if (!cancelled) {
          // A new bank invalidates any set built from the previous one, so drop the
          // built flag here to go back through the loading state rather than
          // briefly rendering questions that belong to the old bank.
          setBuilt(false);
          setBank(data);
        }
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

    // Shuffle the option order in every mode. Presenting answers at their source
    // position lets repeat practice train position memory ("it's always B")
    // instead of the material, so chapter and daily sets shuffle too.
    const shuffleAnswers = true;
    let chosen: QuizQuestion[];

    if (mode === 'lo') {
      // The learning-objective quiz is a fixed set in LO order, not a draw:
      // the payload lists its question ids in that order (see `loQuiz` in
      // scripts/lib/exams.mjs). Question order is kept — the set follows the
      // learning objectives — while option order is still shuffled below.
      const byId = new Map(bank.questions.map((q) => [q.id, q]));
      chosen = (bank.loQuiz ?? [])
        .map((id) => byId.get(id))
        .filter((q): q is QuizQuestion => Boolean(q));
    } else if (mode === 'chapter') {
      const inChapter = bank.questions.filter((q) => q.chapterId === chapterId);
      chosen =
        size && size < inChapter.length
          ? sampleQuestions(inChapter, size, { shuffleQuestions: true })
          : shuffle(inChapter);
    } else if (mode === 'daily' || mode === 'random') {
      // Both are unseeded draws, so every start and every "Start a new set" gives a
      // new set. They differ only in size: the daily quiz is a 30-question subset,
      // the random quiz takes the whole bank for a full-coverage pass. Drawing with
      // sampleByChapter keeps the spread across chapters structural.
      const pool = mode === 'random' ? bank.questions.length : size ?? bank.dailySize;
      chosen = sampleByChapter(bank.questions, pool);
    } else if (bank.mock?.quotas) {
      // A mock is drawn to the paper's blueprint, not uniformly: the real papers
      // weight chapters unevenly (CM-SIP spends 18 of 80 questions on case
      // studies, RES 12B splits 50/50 across its two constituent parts), and a
      // uniform draw from a bank whose composition is itself uneven does not
      // resemble the paper being sat.
      chosen = sampleByBlueprint(
        bank.questions,
        bank.mock.quotas,
        size ?? bank.realExam.questions,
      );
    } else {
      chosen = sampleQuestions(bank.questions, size ?? bank.realExam.questions);
    }

    setQuestions(chosen.map((q) => prepareQuestion(q, { shuffleAnswers })));
    setAnswers({});
    setFlags({});
    setRevealed({});
    setCurrent(0);
    setSubmitted(false);
    setBuilt(true);
  }, [bank, seed, mode, chapterId, size]);

  /* ---- shared flags: open `question-flag` issues, visible to every visitor.
     A failed load (offline, or GitHub's unauthenticated rate limit) leaves the
     map empty — local flagging and reporting still work. ---- */
  useEffect(() => {
    if (!bank) return;
    let cancelled = false;
    fetchFlaggedQuestions()
      .then((shared) => {
        if (!cancelled) setGlobalFlags(shared);
      })
      .catch(() => {
        /* No global flags known; the quiz itself is unaffected. */
      });
    return () => {
      cancelled = true;
    };
  }, [bank]);

  /* ---- scroll to top on submit ---- */
  useEffect(() => {
    if (submitted) topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [submitted]);

  const question = questions[current];
  const answeredCount = useMemo(
    () => questions.filter((q) => (answers[q.id]?.length ?? 0) > 0).length,
    [questions, answers],
  );
  /** The open shared report for this question, if any — visible to everyone. */
  const globalFlag = question ? globalFlags[question.id] : undefined;

  const select = useCallback(
    (optionKey: string) => {
      if (!question || submitted) return;
      // A revealed answer is locked, so the explanation always matches a choice
      // the reader actually made.
      if (revealed[question.id]) return;
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
      // Single-choice questions reveal as soon as they are answered ("show the
      // answer and explanation after each answer"). Multi-response needs an
      // explicit check, because several options have to be selected first.
      if (!question.isMulti) {
        setRevealed((previous) => ({ ...previous, [question.id]: true }));
      }
    },
    [question, submitted, revealed],
  );

  /**
   * Flag for review — now global. It still marks the question to revisit in
   * this session, and it files the question in the shared issue queue so every
   * visitor can see it. If it is already reported, open that issue instead of
   * filing a duplicate.
   */
  const toggleFlag = useCallback(() => {
    if (!question || !bank) return;
    setFlags((previous) => ({ ...previous, [question.id]: !previous[question.id] }));
    const existing = globalFlags[question.id];
    if (existing) {
      window.open(existing.url, '_blank', 'noopener,noreferrer');
      return;
    }
    const canonical = bank.questions.find((q) => q.id === question.id) ?? question;
    window.open(
      buildFlagUrl(canonical, {
        examId: bank.examId,
        examName: bank.name,
        mode: MODE_LABEL[mode],
        pageUrl: typeof window === 'undefined' ? undefined : window.location.href,
      }),
      '_blank',
      'noopener,noreferrer',
    );
  }, [question, bank, mode, globalFlags]);

  /** Open a pre-filled GitHub issue so the flag reaches the owner's queue. */
  const reportQuestion = useCallback(() => {
    if (!question || !bank) return;
    // Already reported: take the reader to the shared issue, not a duplicate.
    const existing = globalFlags[question.id];
    if (existing) {
      window.open(existing.url, '_blank', 'noopener,noreferrer');
      return;
    }
    // Report the bank's own option order, not the shuffled presentation, so the
    // letters in the issue match the letters in the markdown.
    const canonical = bank.questions.find((q) => q.id === question.id) ?? question;
    const url = buildFlagUrl(canonical, {
      examId: bank.examId,
      examName: bank.name,
      mode: MODE_LABEL[mode],
      pageUrl: typeof window === 'undefined' ? undefined : window.location.href,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [question, bank, mode, globalFlags]);

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
  if (!bank || !built) {
    return (
      <div className="quiz-shell" aria-busy="true">
        <p>Loading questions…</p>
      </div>
    );
  }

  // A set can legitimately come back empty — most often a guide chapter with no
  // questions mapped to its id. Show a clear message instead of a spinner that
  // would never resolve.
  if (questions.length === 0) {
    return (
      <div className="quiz-shell" ref={topRef}>
        <div role="alert">
          <p>
            <strong>No questions for this set.</strong>
          </p>
          <p>
            {mode === 'chapter'
              ? 'This chapter has no questions mapped to it. Pick another chapter, or try the daily quiz.'
              : 'The bank returned no questions. Try the daily quiz or the mock exam.'}
          </p>
        </div>
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
        onRestart={restart}
        topRef={topRef}
      />
    );
  }

  /* ---- answering screen ---- */
  const selected = answers[question.id] ?? [];
  const isFlagged = Boolean(flags[question.id]);
  const progress = Math.round((answeredCount / questions.length) * 100);
  const isRevealed = Boolean(revealed[question.id]);
  const isAnswerCorrect = isRevealed && isCorrect(question, selected);

  return (
    <div className="quiz-shell" ref={topRef}>
      <div className="quiz-layout">
        <div>
          <header className="quiz-header">
            <div>
              <p className="quiz-eyebrow">
                {bank.name} · {MODE_LABEL[mode]}
                {(mode === 'chapter' || mode === 'random') && question.chapterTitle ? ` · ${question.chapterTitle}` : ''}
              </p>
              <p className="quiz-progress-text">
                Question {current + 1} of {questions.length} · {answeredCount} answered
              </p>
            </div>
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
              {globalFlag && (
                <a
                  className="quiz-badge is-flagged"
                  href={globalFlag.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  ⚠ Flagged for review — issue #{globalFlag.number}
                </a>
              )}
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
                const isAnswer = isRevealed && question.answerKeys.includes(option.key);
                const isWrongPick = isRevealed && checked && !isAnswer;
                const classes = [
                  'quiz-option',
                  checked ? 'is-selected' : '',
                  isAnswer ? 'is-answer' : '',
                  isWrongPick ? 'is-wrong-answer' : '',
                ]
                  .filter(Boolean)
                  .join(' ');
                return (
                  <label key={option.key} className={classes}>
                    <input
                      type={question.isMulti ? 'checkbox' : 'radio'}
                      name={`q-${question.id}`}
                      value={option.key}
                      checked={checked}
                      disabled={isRevealed}
                      onChange={() => select(option.key)}
                    />
                    <span className="quiz-option-letter">{letterFor(index)}</span>
                    <span className="quiz-option-text">{option.text}</span>
                    {isAnswer && <span className="quiz-tick">✓ correct</span>}
                    {isWrongPick && <span className="quiz-cross">✗ your answer</span>}
                    {isRevealed && checked && isAnswer && question.isMulti && (
                      <span className="quiz-pick">your answer</span>
                    )}
                  </label>
                );
              })}
            </fieldset>

            {isRevealed && (
              <div className={`quiz-feedback ${isAnswerCorrect ? 'is-right' : 'is-wrong'}`}>
                <p className="quiz-feedback-verdict">
                  {isAnswerCorrect ? '\u2713 Correct' : '\u2717 Incorrect'}
                </p>
                {!isAnswerCorrect && (
                  <p className="quiz-feedback-answer">
                    Correct answer:{' '}
                    {question.options
                      .map((option, index) =>
                        question.answerKeys.includes(option.key) ? letterFor(index) : null,
                      )
                      .filter(Boolean)
                      .join(', ')}
                  </p>
                )}
                {question.rationale && (
                  <p className="quiz-feedback-why">
                    <strong>Why:</strong> {question.rationale}
                  </p>
                )}
                {question.sourceRef && <p className="quiz-source">{question.sourceRef}</p>}
              </div>
            )}
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

            {!isRevealed && question.isMulti && (
              <button
                type="button"
                className="quiz-button quiz-button-primary"
                onClick={() => setRevealed((previous) => ({ ...previous, [question.id]: true }))}
                disabled={selected.length === 0}
              >
                Check answer
              </button>
            )}

            <button
              type="button"
              className={`quiz-button quiz-flag${isFlagged || globalFlag ? ' is-on' : ''}`}
              onClick={toggleFlag}
              aria-pressed={isFlagged}
              title={
                globalFlag
                  ? `Already reported — opens shared issue #${globalFlag.number}`
                  : 'Flag for review — files a shared GitHub issue every visitor can see'
              }
            >
              {isFlagged || globalFlag ? '★ Flagged' : '☆ Flag for review'}
            </button>

            <button
              type="button"
              className="quiz-button quiz-report"
              onClick={reportQuestion}
              title={
                globalFlag
                  ? `Already reported — opens shared issue #${globalFlag.number}`
                  : 'Open a pre-filled GitHub issue. The repository owner resolves it there.'
              }
            >
              {globalFlag ? `⚠ Reported — issue #${globalFlag.number}` : '⚠ Report question'}
            </button>

            {current < questions.length - 1 ? (
              <button
                type="button"
                className="quiz-button quiz-button-primary"
                onClick={() => setCurrent((index) => Math.min(questions.length - 1, index + 1))}
                disabled={!isRevealed}
              >
                Next →
              </button>
            ) : (
              <button
                type="button"
                className="quiz-button quiz-button-primary"
                onClick={submit}
                disabled={!isRevealed}
              >
                Finish
              </button>
            )}
          </nav>

          <p className="quiz-note">
            The answer and explanation appear as soon as you answer
            {question.isMulti ? ' and check.' : '.'}
          </p>

          <p className="quiz-note">
            {mode === 'mock'
              ? 'Learning mode: this set is not timed, and the score report at the end keeps the real pass mark. No answers are stored — every start and every "Start a new set" draws a fresh set.'
              : mode === 'lo'
                ? `Learning mode: this set is not timed, and the score report at the end keeps the real pass mark. No answers are stored — every start serves the same ${questions.length} questions in learning-objective order, with the options shuffled.`
                : 'No answers are stored — every start and every "Start a new set" draws a fresh set.'}
          </p>
        </div>

        <aside
          className={`quiz-sidebar${showNav ? '' : ' is-hidden'}`}
          aria-label="Question navigator"
        >
          <div className="quiz-nav-head">
            <h3>Questions</h3>
            <button type="button" className="quiz-link" onClick={() => setShowNav((value) => !value)}>
              {showNav ? 'Hide' : 'Show'}
            </button>
          </div>
          <ol className="quiz-nav-grid">
            {questions.map((item, index) => {
              const state =
                flags[item.id] || globalFlags[item.id]
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
            Finish &amp; see score
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
  onRestart: () => void;
  topRef: React.RefObject<HTMLDivElement | null>;
};

function ReviewScreen({
  bank,
  mode,
  questions,
  answers,
  passPct,
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
          {mode === 'mock' || mode === 'lo' ? 'Mock exam' : 'Practice set'}
        </p>
      </section>

      {/* A one-chapter set has a single breakdown row, which adds nothing — the
          score above already reports it. Show the table for multi-chapter sets. */}
      {breakdown.length > 1 && (
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
      )}

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
