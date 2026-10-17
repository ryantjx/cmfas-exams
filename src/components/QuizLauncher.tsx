import { useEffect, useState } from 'react';

import QuizRunner, { type QuizMode } from './QuizRunner';

type ChapterSummary = { id: string; title: string; count: number };

export type QuizLauncherProps = {
  examId: string;
  mode: QuizMode;
  bankUrl: string;
  size?: number;
  timeLimitSec?: number;
  passPct?: number;
  chapters?: ChapterSummary[];
};

/**
 * Entry point for a practice page.
 *
 * - `mock`   : renders the runner straight away (timed, deferred feedback).
 * - `daily`  : renders the runner straight away (a new set each load).
 * - `chapter`: renders a chapter picker first, honouring a `?chapter=` query
 *              parameter so guide pages can deep-link into a chapter's quiz.
 */
export default function QuizLauncher({ examId, mode, bankUrl, size, timeLimitSec, passPct, chapters }: QuizLauncherProps) {
  const [chapterId, setChapterId] = useState<string | null>(null);

  useEffect(() => {
    if (mode !== 'chapter') return;
    const requested = new URLSearchParams(window.location.search).get('chapter');
    if (requested && chapters?.some((chapter) => chapter.id === requested)) {
      setChapterId(requested);
    }
  }, [mode, chapters]);

  if (mode !== 'chapter') {
    return (
      <QuizRunner bankUrl={bankUrl} mode={mode} size={size} timeLimitSec={timeLimitSec} passPct={passPct} />
    );
  }

  if (chapterId) {
    return (
      <div>
        <p className="quiz-picker-bar">
          <button type="button" className="quiz-link" onClick={() => setChapterId(null)}>
            ← Choose a different chapter
          </button>
        </p>
        <QuizRunner bankUrl={bankUrl} mode="chapter" chapterId={chapterId} />
      </div>
    );
  }

  const ordered = [...(chapters ?? [])].sort((a, b) =>
    a.title.localeCompare(b.title, 'en', { numeric: true }),
  );

  return (
    <div className="quiz-shell">
      <p>
        Pick a chapter. Every question in that chapter is included, and the answers are revealed
        when you submit.
      </p>
      <ul className="quiz-chapter-list">
        {ordered.map((chapter) => (
          <li key={chapter.id}>
            <button type="button" className="quiz-chapter-button" onClick={() => setChapterId(chapter.id)}>
              <span className="quiz-chapter-title">{chapter.title}</span>
              <span className="quiz-chapter-count">
                {chapter.count} question{chapter.count === 1 ? '' : 's'}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="quiz-note">
        {examId.toUpperCase()} chapter quizzes have no time limit. For exam conditions, use the mock
        exam.
      </p>
    </div>
  );
}
