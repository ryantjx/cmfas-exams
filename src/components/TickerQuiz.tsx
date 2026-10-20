import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  buildRound,
  isTypedAnswerCorrect,
  type TickerCard,
  type TickerPayload,
  type TickerQuestion,
} from '../lib/ticker';

/* -------------------------------------------------------------------- types */

export type TickerQuizProps = {
  /** `import.meta.env.BASE_URL`, used for the ticker-list fetch. */
  base: string;
  /** Tickers per round. Default 10. */
  size?: number;
};

type Mode = 'mcq' | 'typed';

const MODE_LABEL: Record<Mode, string> = {
  mcq: 'Multiple choice',
  typed: 'Type the company',
};

function letterFor(index: number) {
  return String.fromCharCode(65 + index);
}

/* --------------------------------------------------------------- component */

/**
 * Ticker drill: given a ticker such as `9984 JT`, name the company behind it.
 *
 * Two answering modes share one card: multiple choice (four company names, two of
 * them from the same market) and typed (free text, matched against the card's
 * accepted names). The answer and the company's sector show as soon as the reader
 * answers, in both modes.
 */
export default function TickerQuiz({ base, size = 10 }: TickerQuizProps) {
  const [cards, setCards] = useState<TickerCard[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [mode, setMode] = useState<Mode>('mcq');
  const [draw, setDraw] = useState(0);
  const [round, setRound] = useState<TickerQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<Record<string, string>>({});
  const [typed, setTyped] = useState<Record<string, string>>({});
  const [verdict, setVerdict] = useState<Record<string, boolean>>({});
  const [draft, setDraft] = useState('');
  const [finished, setFinished] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);

  /* ---- load the ticker list ---- */
  useEffect(() => {
    let cancelled = false;
    fetch(`${base}tickers.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load the ticker list (${response.status}).`);
        return response.json() as Promise<TickerPayload>;
      })
      .then((payload) => {
        if (!cancelled) setCards(payload.tickers);
      })
      .catch((cause: unknown) => {
        if (!cancelled) setError(cause instanceof Error ? cause.message : String(cause));
      });
    return () => {
      cancelled = true;
    };
  }, [base]);

  /* ---- build a round whenever the list, the size or the draw changes ---- */
  useEffect(() => {
    if (!cards) return;
    setRound(buildRound(cards, size));
    setIndex(0);
    setPicked({});
    setTyped({});
    setVerdict({});
    setDraft('');
    setFinished(false);
  }, [cards, size, draw]);

  const question = round[index];
  const answeredCount = useMemo(() => Object.keys(verdict).length, [verdict]);
  const correctCount = useMemo(
    () => Object.values(verdict).filter(Boolean).length,
    [verdict],
  );
  const progress = round.length ? Math.round((answeredCount / round.length) * 100) : 0;

  const choose = useCallback((card: TickerCard, option: TickerCard) => {
    // Ignore a second click once the card is answered, so the feedback matches the
    // first choice.
    setPicked((previous) =>
      previous[card.ticker] !== undefined ? previous : { ...previous, [card.ticker]: option.shortName },
    );
    setVerdict((previous) =>
      previous[card.ticker] !== undefined
        ? previous
        : { ...previous, [card.ticker]: option.shortName === card.shortName },
    );
  }, []);

  const submitTyped = useCallback(
    () => {
      if (!question) return;
      const value = draft.trim();
      if (!value || verdict[question.card.ticker] !== undefined) return;
      setTyped((previous) => ({ ...previous, [question.card.ticker]: value }));
      setVerdict((previous) => ({
        ...previous,
        [question.card.ticker]: isTypedAnswerCorrect(question.card, value),
      }));
      setDraft('');
    },
    [draft, question, verdict],
  );

  const giveUp = useCallback(() => {
    if (!question) return;
    setVerdict((previous) => ({ ...previous, [question.card.ticker]: false }));
    setDraft('');
  }, [question]);

  const next = useCallback(() => {
    if (index + 1 >= round.length) setFinished(true);
    else setIndex((value) => value + 1);
  }, [index, round.length]);

  const changeMode = useCallback(
    (nextMode: Mode) => {
      if (nextMode === mode) return;
      setMode(nextMode);
      setDraw((value) => value + 1);
    },
    [mode],
  );

  const playAgain = useCallback(() => setDraw((value) => value + 1), []);

  /* ---- load / error states ---- */
  if (error) {
    return (
      <div className="quiz-shell" role="alert">
        <p>
          <strong>Could not load the ticker list.</strong> {error}
        </p>
      </div>
    );
  }
  if (!cards || !question) {
    return (
      <div className="quiz-shell" aria-busy="true">
        <p>Loading tickers…</p>
      </div>
    );
  }

  /* ---- result screen ---- */
  if (finished) {
    const percent = round.length ? Math.round((correctCount / round.length) * 100) : 0;
    return (
      <div className="quiz-shell" ref={topRef}>
        <section className="quiz-score">
          <p className="quiz-eyebrow">Ticker drill · result</p>
          <h2 className="quiz-score-value">
            {correctCount}/{round.length}
            <span className="quiz-score-percent">{percent}%</span>
          </h2>
          <p className="quiz-score-meta">
            {MODE_LABEL[mode]} · {cards.length} tickers in the bank
          </p>
        </section>

        <section className="quiz-review">
          <h3>Answers</h3>
          <ul className="ticker-review-list">
            {round.map(({ card }) => {
              const right = verdict[card.ticker] === true;
              return (
                <li key={card.ticker} className={right ? 'is-right' : 'is-wrong'}>
                  <span className="ticker-review-symbol">{card.ticker}</span>
                  <span className="ticker-review-name">{card.shortName}</span>
                  <span className="ticker-review-mark">{right ? '✓' : '✗'}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <p className="quiz-submit-row">
          <button type="button" className="quiz-button quiz-button-primary" onClick={playAgain}>
            Play again
          </button>
        </p>
      </div>
    );
  }

  /* ---- question screen ---- */
  const revealed = verdict[question.card.ticker] !== undefined;
  const isRight = verdict[question.card.ticker] === true;
  const pick = picked[question.card.ticker];

  return (
    <div className="quiz-shell" ref={topRef}>
      <header className="quiz-header">
        <div>
          <p className="quiz-eyebrow">Ticker drill · {MODE_LABEL[mode]}</p>
          <p className="quiz-progress-text">
            Ticker {index + 1} of {round.length} · {correctCount} correct
          </p>
        </div>
        <div className="ticker-modes" role="group" aria-label="Answer mode">
          {(Object.keys(MODE_LABEL) as Mode[]).map((entry) => (
            <button
              key={entry}
              type="button"
              className={`ticker-mode-button${entry === mode ? ' is-active' : ''}`}
              aria-pressed={entry === mode}
              onClick={() => changeMode(entry)}
            >
              {MODE_LABEL[entry]}
            </button>
          ))}
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
          <span className="quiz-badge">{question.card.exchange}</span>
          <span className="quiz-source">{question.card.country}</span>
        </p>

        <p className="ticker-symbol">{question.card.ticker.replace(' ', '\u2009')}</p>
        <h2 className="quiz-stem">Which company trades under this ticker?</h2>

        {mode === 'mcq' ? (
          <div className="quiz-options">
            {question.options.map((option, optionIndex) => {
              const isAnswer = revealed && option.shortName === question.card.shortName;
              const isPick = revealed && pick === option.shortName;
              const isWrongPick = isPick && !isAnswer;
              const classes = [
                'quiz-option',
                'ticker-option',
                isPick ? 'is-selected' : '',
                isAnswer ? 'is-answer' : '',
                isWrongPick ? 'is-wrong-answer' : '',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <button
                  key={option.ticker}
                  type="button"
                  className={classes}
                  onClick={() => choose(question.card, option)}
                  disabled={revealed}
                  aria-pressed={isPick}
                >
                  <span className="quiz-option-letter">{letterFor(optionIndex)}</span>
                  <span className="quiz-option-text">{option.shortName}</span>
                  {isAnswer && <span className="quiz-tick">✓ correct answer</span>}
                  {isWrongPick && <span className="quiz-cross">✗ your answer</span>}
                </button>
              );
            })}
          </div>
        ) : (
          <form
            className="ticker-answer-form"
            onSubmit={(event) => {
              event.preventDefault();
              submitTyped();
            }}
          >
            <label className="quiz-visually-hidden" htmlFor={`ticker-answer-${question.card.ticker}`}>
              Company name
            </label>
            <input
              id={`ticker-answer-${question.card.ticker}`}
              className="ticker-input"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Company name, then Enter"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              disabled={revealed}
            />
            <button
              type="submit"
              className="quiz-button quiz-button-primary"
              disabled={revealed || draft.trim().length === 0}
            >
              Check
            </button>
          </form>
        )}

        {revealed && (
          <div className={`quiz-feedback ${isRight ? 'is-right' : 'is-wrong'}`}>
            <p className="quiz-feedback-verdict">{isRight ? '✓ Correct' : '✗ Not this one'}</p>
            <p className="quiz-feedback-answer">
              <strong>{question.card.shortName}</strong> — {question.card.name}
            </p>
            <p className="quiz-feedback-why">
              {[question.card.sector, question.card.exchange, question.card.country]
                .filter(Boolean)
                .join(' · ')}
            </p>
            {mode === 'typed' && typed[question.card.ticker] && (
              <p className="quiz-note">You typed “{typed[question.card.ticker]}”.</p>
            )}
          </div>
        )}
      </article>

      <nav className="quiz-controls" aria-label="Drill navigation">
        {mode === 'typed' && !revealed && (
          <button type="button" className="quiz-button" onClick={giveUp}>
            Show the answer
          </button>
        )}
        <button
          type="button"
          className="quiz-button quiz-button-primary"
          onClick={next}
          disabled={!revealed}
        >
          {index + 1 < round.length ? 'Next →' : 'See results'}
        </button>
      </nav>

      <p className="quiz-note">
        {mode === 'mcq'
          ? 'Two distractors come from the same exchange, so the market label does not give the answer away.'
          : 'Legal suffixes are ignored: “DBS”, “DBS Group” and “DBS Group Holdings Ltd” all match.'}{' '}
        Nothing is stored.
      </p>
    </div>
  );
}
