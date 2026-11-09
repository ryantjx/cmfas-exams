import type { QuizQuestion } from './quiz';

/**
 * Central flag reporting.
 *
 * The site is static and has no backend, so the flag queue is the repository's
 * issue tracker: a report opens a pre-filled GitHub issue carrying the whole
 * question, and the owner resolves it there. Nothing is stored per user.
 */
export const QUIZ_REPO = 'https://github.com/ryantjx/cmfas-exams';
export const FLAG_LABEL = 'question-flag';

/** GitHub rejects very long prefill URLs; keep the body well clear of 8 KB. */
const MAX_BODY = 6000;

export type FlagContext = {
  examId: string;
  examName: string;
  mode: string;
  /** Absolute URL of the page the report came from. */
  pageUrl?: string;
};

function clip(text: string, max: number) {
  const t = text.trim();
  return t.length <= max ? t : `${t.slice(0, max - 1).trimEnd()}…`;
}

const letterLabel = (key: string) => key.toUpperCase();

/** Where the question is edited: the markdown bank, not the generated JSON. */
function bankSourceUrl(examId: string) {
  return `${QUIZ_REPO}/blob/main/notes/${examId}/${examId.toUpperCase()}_QUESTIONS.md`;
}

export function buildFlagTitle(question: QuizQuestion, ctx: FlagContext) {
  return `[flag] ${ctx.examName} #${question.number} — ${clip(question.stem, 90)}`;
}

export function buildFlagBody(question: QuizQuestion, ctx: FlagContext) {
  const lines: string[] = [];

  lines.push('## What is wrong?');
  lines.push('');
  lines.push('<!-- Delete the lines that do not apply, then add a note. -->');
  lines.push('- [ ] the keyed answer is wrong');
  lines.push('- [ ] an option repeats another option');
  lines.push('- [ ] an option does not belong to this question');
  lines.push('- [ ] the answer does not answer the question');
  lines.push('- [ ] the wording is ambiguous');
  lines.push('');
  lines.push('Note:');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(`**Question id:** \`${question.id}\``);
  lines.push(`**Exam:** ${ctx.examName} (\`${ctx.examId}\`)`);
  lines.push(`**Chapter:** ${question.chapterTitle ?? question.chapterId ?? '—'}`);
  lines.push(`**Number:** ${question.number}`);
  lines.push(`**Type:** ${question.type ?? '—'}${question.isMulti ? ' · multiple response' : ''}`);
  lines.push(`**Mode when flagged:** ${ctx.mode}`);
  if (question.sourceRef) lines.push(`**Source:** ${question.sourceRef}`);
  lines.push('');
  lines.push('### Stem');
  lines.push('');
  lines.push(`> ${question.stem}`);
  lines.push('');

  if (question.statements.length) {
    lines.push('### Statements');
    lines.push('');
    for (const s of question.statements) lines.push(`- **(${s.key})** ${s.text}`);
    lines.push('');
  }

  lines.push('### Options');
  lines.push('');
  for (const o of question.options) {
    const keyed = question.answerKeys.includes(o.key);
    lines.push(`- **${letterLabel(o.key)}.** ${o.text}${keyed ? '  ← keyed correct' : ''}`);
  }
  lines.push('');
  lines.push(`**Keyed answer:** ${question.answerKeys.map(letterLabel).join(', ') || '—'}`);
  lines.push('');

  if (question.rationale) {
    lines.push('### Rationale as shown');
    lines.push('');
    lines.push(`> ${question.rationale.replace(/\n+/g, ' ')}`);
    lines.push('');
  }

  if (ctx.pageUrl) {
    lines.push(`**Page:** ${ctx.pageUrl}`);
    lines.push('');
  }
  lines.push(`**Edit at:** ${bankSourceUrl(ctx.examId)}`);

  return clip(lines.join('\n'), MAX_BODY);
}

export function buildFlagUrl(question: QuizQuestion, ctx: FlagContext) {
  const params = new URLSearchParams({
    labels: FLAG_LABEL,
    title: buildFlagTitle(question, ctx),
    body: buildFlagBody(question, ctx),
  });
  return `${QUIZ_REPO}/issues/new?${params.toString()}`;
}
