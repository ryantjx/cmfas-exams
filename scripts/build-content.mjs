#!/usr/bin/env node
/**
 * Generate the Starlight content tree and copy downloadable assets.
 *
 * All output lands under `src/content/docs/`, `public/banks/` and
 * `public/downloads/` — all of which are gitignored. The repo-root markdown is
 * never modified.
 *
 *   src/content/docs/index.mdx                       site home
 *   src/content/docs/study-plan.md                   from 121026_EXAMS.md
 *   src/content/docs/<exam>/overview.md              exam facts + syllabus
 *   src/content/docs/<exam>/guide/index.md           guide intro + TOC
 *   src/content/docs/<exam>/guide/<slug>.md          one per chapter/appendix
 *   src/content/docs/<exam>/practice/{daily,chapter,mock}.mdx
 *   src/content/docs/<exam>/downloads.md             PDF links
 *   public/downloads/<exam>/<file>.pdf               copied PDFs
 *   public/banks/*.json                              (written by build-banks.mjs)
 */

import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS, HOME, STUDY_PLAN } from './lib/exams.mjs';
import { extractGuideChapters, shiftHeadings, splitGuide } from './lib/questions.mjs';
import { REPO_ROOT, readLines, readText, stripLeadingTitleLine, yamlString } from './lib/util.mjs';

const DOCS_DIR = path.join(REPO_ROOT, 'src', 'content', 'docs');
const DOWNLOADS_DIR = path.join(REPO_ROOT, 'public', 'downloads');

/**
 * Site base path. Must match `base` in astro.config.mjs. Markdown/MDX links are
 * NOT rewritten by Astro, so every hand-written internal link must carry it.
 */
const BASE = '/cmfas-exams';

/** Build an internal link that includes the base path. */
function link(pathname) {
  return `${BASE}${pathname}`;
}

/** Render minutes as `2 h` / `1.5 h`. */
function formatHours(minutes) {
  const hours = minutes / 60;
  return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} h`;
}

const written = [];
function write(relPath, content) {
  const full = path.join(DOCS_DIR, relPath);
  mkdirSync(path.dirname(full), { recursive: true });
  writeFileSync(full, content.endsWith('\n') ? content : `${content}\n`);
  written.push(path.relative(REPO_ROOT, full));
}

/** Serialise a scalar for YAML (single-quoted, escaping embedded quotes). */
function yamlValue(value) {
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return yamlString(value);
}

/** Emit frontmatter, supporting one level of nesting (e.g. `sidebar`). */
function frontmatter(fields) {
  const lines = [];
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'object' && !Array.isArray(value)) {
      lines.push(`${key}:`);
      for (const [childKey, childValue] of Object.entries(value)) {
        if (childValue === undefined || childValue === null) continue;
        lines.push(`  ${childKey}: ${yamlValue(childValue)}`);
      }
    } else {
      lines.push(`${key}: ${yamlValue(value)}`);
    }
  }
  return `---\n${lines.join('\n')}\n---\n`;
}

/* -------------------------------------------------------------- downloads */

const downloadRecords = new Map(); // examId → [{ name, href, kind }]

for (const exam of EXAMS) {
  const records = [];
  for (const pdf of exam.pdfs) {
    const src = path.join(REPO_ROOT, pdf.src);
    if (!existsSync(src)) {
      console.warn(`  ! missing PDF: ${pdf.src}`);
      continue;
    }
    const filename = path.basename(pdf.src).replace(/\s+/g, '-');
    const destDir = path.join(DOWNLOADS_DIR, exam.id);
    mkdirSync(destDir, { recursive: true });
    copyFileSync(src, path.join(destDir, filename));
    records.push({ name: pdf.name, href: link(`/downloads/${exam.id}/${filename}`), kind: pdf.kind });
  }
  downloadRecords.set(exam.id, records);
}

if (STUDY_PLAN.pdf) {
  const src = path.join(REPO_ROOT, STUDY_PLAN.pdf.src);
  if (existsSync(src)) {
    mkdirSync(DOWNLOADS_DIR, { recursive: true });
    const filename = path.basename(STUDY_PLAN.pdf.src).replace(/\s+/g, '-');
    copyFileSync(src, path.join(DOWNLOADS_DIR, filename));
    STUDY_PLAN.pdf.href = link(`/downloads/${filename}`);
  }
}

/* ------------------------------------------------------------------- home */

const examCards = EXAMS.map(
  (exam) =>
    `<CardGrid>\n` +
    `  <LinkCard title="${exam.name}" href="${link(`/${exam.id}/overview/`)}" description="${exam.subtitle}" />\n` +
    `  <LinkCard title="${exam.name} — chapter quiz" href="${link(`/${exam.id}/practice/chapter/`)}" description="Practise one chapter at a time." />\n` +
    `  <LinkCard title="${exam.name} — daily quiz" href="${link(`/${exam.id}/practice/daily/`)}" description="30 mixed questions." />\n` +
    `  <LinkCard title="${exam.name} — mock exam" href="${link(`/${exam.id}/practice/mock/`)}" description="Full timed paper." />\n` +
    `</CardGrid>`,
).join('\n\n');

write(
  'index.mdx',
  `${frontmatter({
    title: HOME.title,
    description: HOME.description,
  })}import { Aside, CardGrid, LinkCard } from '@astrojs/starlight/components';

## Study for the Singapore capital markets exams

Three exams, three ways to practise each of them. The study guide is split one
page per chapter, and every question bank is available as a **chapter quiz**, a
**daily quiz** (30 mixed questions) and a full **mock exam** that mirrors the real
paper's length, timing and pass mark.

${examCards}

## Exam facts at a glance

| Exam | Questions | Time | Pass mark | Bank | Guide | Practise |
| --- | --- | --- | --- | --- | --- | --- |
${EXAMS.map(
  (e) =>
    `| **${e.name}** | ${e.realExam.questions} | ${formatHours(e.realExam.minutes)} | ${e.realExam.passPct}% | ${e.expectedQuestions} | [Guide](${link(`/${e.id}/guide/`)}) | [Practise](${link(`/${e.id}/practice/daily/`)}) |`,
).join('\n')}

<Aside type="note">
Nothing is stored between visits — progress, answers and mock results live only
in the current page. Reload to start a fresh set.
</Aside>

See the [study plan](${link('/study-plan/')}) for sequencing, booking windows and sitting
strategy across the three exams.
`,
);

/* --------------------------------------------------------------- study plan */

{
  const lines = stripLeadingTitleLine(readLines(STUDY_PLAN.src));
  const body = lines.join('\n');
  const aside = STUDY_PLAN.pdf?.href
    ? `<Aside type="tip">Download the [printable PDF](${STUDY_PLAN.pdf.href}).</Aside>\n`
    : '';
  write(
    'study-plan.mdx',
    `${frontmatter({
      title: STUDY_PLAN.title,
      description: STUDY_PLAN.description,
      sidebar: { label: 'Study plan', order: 200 },
    })}import { Aside } from '@astrojs/starlight/components';

${aside}
${body}
`,
  );
}

/* ------------------------------------------------------------------- exams */

for (const exam of EXAMS) {
  const guideLines = readLines(exam.guide);
  const { intro, pages } = splitGuide(exam, guideLines);
  const chapters = extractGuideChapters(exam, guideLines);
  const guideChapters = pages.filter((p) => p.kind === 'chapter' || p.kind === 'appendix' || p.kind === 'appendix-group');

  // --- overview -------------------------------------------------------------
  const stubLines = stripLeadingTitleLine(readLines(exam.stub));
  const syllabus = stubLines.join('\n').trim();
  write(
    `${exam.id}/overview.md`,
    `${frontmatter({
      title: `${exam.name} — overview`,
      description: exam.subtitle,
      sidebar: { label: 'Overview', order: 0 },
    })}
<Aside type="note">
**Real exam:** ${exam.realExam.note}
</Aside>

**Question bank:** ${JSON.parse(readText(`src/data/banks/${exam.id}.json`)).generated.questionCount} questions
across ${chapters.filter((c) => c.questionCount > 0).length} chapters.

## Syllabus

${syllabus}

## Study guide

The [study guide](${link(`/${exam.id}/guide/`)}) mirrors the syllabus chapter by chapter —
one page per chapter, with worked examples, formula sheets and exam cues.

## Practise

- **[Chapter quiz](${link(`/${exam.id}/practice/chapter/`)})** — pick one chapter and work
  through every question in it.
- **[Daily quiz](${link(`/${exam.id}/practice/daily/`)})** — 30 mixed questions from across
  the whole bank.
- **[Mock exam](${link(`/${exam.id}/practice/mock/`)})** — ${exam.realExam.questions} questions,
  ${exam.realExam.minutes} minutes, ${exam.realExam.passPct}% to pass.

## Downloads

See [downloads](${link(`/${exam.id}/downloads/`)}) for the official study guide and
printable PDFs.
`,
  );

  // --- guide intro ----------------------------------------------------------
  const chapterList = guideChapters
    .map((c) => `- [${c.title}](${link(`/${exam.id}/guide/${c.slug}/`)})`)
    .join('\n');

  const introBody = stripLeadingTitleLine(intro).join('\n').trim();
  write(
    `${exam.id}/guide/index.md`,
    `${frontmatter({
      title: `${exam.name} study guide`,
      description: `Chapter-by-chapter study guide for ${exam.name}.`,
      sidebar: { label: 'Introduction', order: 0 },
    })}
${introBody}

## Contents

${chapterList}

Each chapter page ends with a link to that chapter's quiz.
`,
  );

  // --- guide chapter/subsection pages --------------------------------------
  for (const page of guideChapters) {
    const body = shiftHeadings(stripLeadingTitleLine(page.lines), page.level).join('\n').trim();
    const practiceLink =
      page.kind === 'chapter'
        ? `\n---\n\n[Practise this chapter \u2192](${link(`/${exam.id}/practice/chapter/?chapter=${page.id}`)})\n`
        : '';
    write(
      `${exam.id}/guide/${page.slug}.md`,
      `${frontmatter({
        title: page.title,
        description: `${exam.name} study guide \u2014 ${page.title}.`,
        sidebar: { label: page.title, order: page.order },
      })}
${body || '_This section is a summary of the shared material in another chapter._'}
${practiceLink}`,
    );
  }

  // --- practice pages -------------------------------------------------------
  const bank = JSON.parse(readText(`src/data/banks/${exam.id}.json`));
  const quizChapters = bank.chapters.filter((c) => c.questionCount > 0);

  write(
    `${exam.id}/practice/daily.mdx`,
    `${frontmatter({
      title: `${exam.name} — daily quiz`,
      description: `30 mixed ${exam.name} questions, freshly drawn on every visit.`,
      sidebar: { label: 'Daily quiz', order: 2 },
    })}import QuizLauncher from '@components/QuizLauncher.tsx';

# ${exam.name} daily quiz

Thirty questions drawn at random from the full ${bank.questions.length}-question
bank, mixing chapters and question types. A new set is drawn each time you load
the page, and nothing is stored.

<QuizLauncher
  client:only="react"
  examId="${exam.id}"
  mode="daily"
  bankUrl={import.meta.env.BASE_URL + 'banks/${exam.id}.json'}
  size={${bank.dailySize}}
/>
`,
  );

  write(
    `${exam.id}/practice/chapter.mdx`,
    `${frontmatter({
      title: `${exam.name} — chapter quiz`,
      description: `Practise a single ${exam.name} chapter.`,
      sidebar: { label: 'Chapter quiz', order: 3 },
    })}import QuizLauncher from '@components/QuizLauncher.tsx';

# ${exam.name} chapter quiz

Choose a chapter to work through every question in that chapter. Nothing is
stored — reload to start again.

<QuizLauncher
  client:only="react"
  examId="${exam.id}"
  mode="chapter"
  bankUrl={import.meta.env.BASE_URL + 'banks/${exam.id}.json'}
  chapters={${JSON.stringify(
    quizChapters.map((c) => ({ id: c.id, title: c.title, count: c.questionCount })),
  )}}
/>
`,
  );

  write(
    `${exam.id}/practice/mock.mdx`,
    `${frontmatter({
      title: `${exam.name} — mock exam`,
      description: `Full-length timed ${exam.name} mock exam.`,
      sidebar: { label: 'Mock exam', order: 4 },
    })}import QuizLauncher from '@components/QuizLauncher.tsx';

# ${exam.name} mock exam

Mirrors the real paper: **${exam.realExam.questions} questions in
${exam.realExam.minutes} minutes**, pass mark **${exam.realExam.passPct}%**. The
timer starts when you begin and submits automatically at zero. Answers and
explanations are revealed only after you submit.

<QuizLauncher
  client:only="react"
  examId="${exam.id}"
  mode="mock"
  bankUrl={import.meta.env.BASE_URL + 'banks/${exam.id}.json'}
  size={${exam.realExam.questions}}
  timeLimitSec={${exam.realExam.minutes * 60}}
  passPct={${exam.realExam.passPct}}
/>
`,
  );

  // --- downloads ------------------------------------------------------------
  const records = downloadRecords.get(exam.id) ?? [];
  const official = records.filter((r) => r.kind === 'official');
  const generated = records.filter((r) => r.kind === 'generated');

  write(
    `${exam.id}/downloads.md`,
    `${frontmatter({
      title: `${exam.name} — downloads`,
      description: `Printable study guides and question banks for ${exam.name}.`,
      sidebar: { label: 'Downloads', order: 5 },
    })}
## Official study guide

${official.length ? official.map((r) => `- [${r.name}](${r.href})`).join('\n') : '_Not available._'}

## Printable PDFs

${generated.length ? generated.map((r) => `- [${r.name}](${r.href})`).join('\n') : '_Not available._'}

<Aside type="note">
PDFs open in the browser; use your browser's download button to save a copy.
</Aside>
`,
  );
}

/* ------------------------------------------------------------------- done */

console.log(`Content generation complete — ${written.length} pages written.`);
