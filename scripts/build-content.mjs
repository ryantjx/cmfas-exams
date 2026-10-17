#!/usr/bin/env node
/**
 * Generate the Starlight content tree and copy downloadable assets.
 *
 * All output lands under `src/content/docs/`, `src/data/`, `public/banks/` and
 * `public/downloads/` — all of which are gitignored. The markdown under `notes/`
 * is the single source of truth and is never modified.
 *
 *   src/content/docs/index.mdx                       site home
 *   src/content/docs/study-plan.mdx                  from notes/121026_EXAMS.md
 *   src/content/docs/<exam>/overview.md              exam facts + syllabus
 *   src/content/docs/<exam>/guide/index.md           guide intro + TOC
 *   src/content/docs/<exam>/guide/<slug>.md          one per chapter/appendix
 *   src/content/docs/<exam>/practice/{daily,chapter,mock}.mdx
 *   src/content/docs/<exam>/downloads.md             PDF links
 *   src/data/sidebar.json                            explicit guide sub-trees
 *   public/downloads/<exam>/<file>.pdf               copied PDFs
 *   public/banks/*.json                              (written by build-banks.mjs)
 *
 * The sidebar lists every guide chapter explicitly (see `src/data/sidebar.json`,
 * consumed by astro.config.mjs) so chapters are navigable directly under
 * "Study guide" rather than being collected onto a single index page.
 */

import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS, HOME, STUDY_PLAN } from './lib/exams.mjs';
import { shiftHeadings, splitGuide } from './lib/questions.mjs';
import {
  REPO_ROOT,
  chapterLabel,
  readLines,
  readText,
  stripLeadingTitleLine,
  yamlString,
} from './lib/util.mjs';

const DOCS_DIR = path.join(REPO_ROOT, 'src', 'content', 'docs');
const DOWNLOADS_DIR = path.join(REPO_ROOT, 'public', 'downloads');
const BANKS_DIR = path.join(REPO_ROOT, 'public', 'banks');

// The generated tree is rebuilt from scratch each run so stale pages left by a
// renamed slug or a removed section cannot linger. `public/banks/` is owned by
// build-banks.mjs (which wipes and rewrites it); here we only add the catalogue
// index, so it is deliberately not wiped.
for (const dir of [DOCS_DIR, DOWNLOADS_DIR]) {
  rmSync(dir, { recursive: true, force: true });
}

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
    `  <LinkCard title="${exam.name} — chapter quiz" href="${link(`/practice/${exam.id}/?type=chapter`)}" description="One chapter at a time, with the answer and explanation as soon as you answer." />\n` +
    `  <LinkCard title="${exam.name} — daily quiz" href="${link(`/practice/${exam.id}/?type=daily`)}" description="30 mixed questions." />\n` +
    `  <LinkCard title="${exam.name} — mock exam" href="${link(`/practice/${exam.id}/?type=mock`)}" description="Full timed paper." />\n` +
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
    `| **${e.name}** | ${e.realExam.questions} | ${formatHours(e.realExam.minutes)} | ${e.realExam.passPct}% | ${e.expectedQuestions} | [Guide](${link(`/${e.id}/guide/`)}) | [Practise](${link(`/practice/${e.id}/`)}) |`,
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

/** Sidebar entries for each exam's guide, emitted once generation is done. */
const sidebarExams = [];
/** Practice metadata for every exam, used to build the /practice/ section. */
const practiceExams = [];

for (const exam of EXAMS) {
  const guideLines = readLines(exam.guide);
  const { intro, pages } = splitGuide(exam, guideLines);
  const guideChapters = pages.filter((p) => p.kind === 'chapter' || p.kind === 'appendix' || p.kind === 'appendix-group');

  // The bank (and its chapter rollup) is needed by both the overview count and
  // the practice catalogue, so read it before either is written.
  const bank = JSON.parse(readText(`src/data/banks/${exam.id}.json`));
  const bankChaptersWithQuestions = bank.chapters.filter((c) => c.questionCount > 0);

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

**Question bank:** ${bank.generated.questionCount} questions
across ${bankChaptersWithQuestions.length} chapters.

## Syllabus

${syllabus}

## Study guide

The [study guide](${link(`/${exam.id}/guide/`)}) mirrors the syllabus chapter by chapter —
one page per chapter, with worked examples, formula sheets and exam cues.

## Practise

- **[Chapter quiz](${link(`/practice/${exam.id}/?type=chapter`)})** — work through one
  chapter at a time, with the answer and explanation shown as soon as you answer.
- **[Daily quiz](${link(`/practice/${exam.id}/?type=daily`)})** — 30 mixed questions from
  across the whole bank.
- **[Mock exam](${link(`/practice/${exam.id}/?type=mock`)})** — ${exam.realExam.questions}
  questions, ${exam.realExam.minutes} minutes, ${exam.realExam.passPct}% to pass.

## Downloads

See [downloads](${link(`/${exam.id}/downloads/`)}) for the official study guide and
printable PDFs.
`,
  );

  // --- guide intro ----------------------------------------------------------
  const chapterList = guideChapters
    .map((c) => `- [${chapterLabel(c)}](${link(`/${exam.id}/guide/${c.slug}/`)})`)
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

Chapters that have questions end with a link to that chapter's quiz.
`,
  );

  // --- guide chapter/subsection pages --------------------------------------
  for (const page of guideChapters) {
    const body = shiftHeadings(stripLeadingTitleLine(page.lines), page.level).join('\n').trim();
    // Only link a chapter quiz when the bank actually holds questions for it,
    // otherwise the deep link opens a chapter with nothing to answer.
    const hasQuiz = bankChaptersWithQuestions.some((c) => c.id === page.id);
    const practiceLink =
      page.kind === 'chapter' && hasQuiz
        ? `\n---\n\n[Practise this chapter \u2192](${link(`/practice/${exam.id}/?type=chapter&chapter=${page.id}`)})\n`
        : '';
    write(
      `${exam.id}/guide/${page.slug}.md`,
      `${frontmatter({
        title: chapterLabel(page),
        description: `${exam.name} study guide — ${page.title}.`,
        sidebar: { label: chapterLabel(page), order: page.order },
      })}
${body || '_This section is a summary of the shared material in another chapter._'}
${practiceLink}`,
    );
  }

  // --- practice catalogue ---------------------------------------------------
  // Practice lives in its own top-level section (see below); here we only
  // collect what the picker needs.
  practiceExams.push({
    id: exam.id,
    name: exam.name,
    subtitle: exam.subtitle,
    questions: bank.questions.length,
    dailySize: bank.dailySize,
    realExam: exam.realExam,
    chapters: bankChaptersWithQuestions.map((c) => ({
      id: c.id,
      title: c.title,
      count: c.questionCount,
    })),
  });

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

  // --- sidebar entries ------------------------------------------------------
  // Every chapter/appendix is listed explicitly so it is reachable directly
  // under "Study guide" in the sidebar.
  sidebarExams.push({
    label: exam.name,
    items: [
      { label: 'Overview', link: `/${exam.id}/overview/` },
      {
        label: 'Study guide',
        items: [
          // Labelled "Guide contents" rather than "Introduction" because FMRP's
          // chapter 1 is itself titled Introduction.
          { label: 'Guide contents', link: `/${exam.id}/guide/` },
          ...guideChapters.map((page) => ({
            label: chapterLabel(page),
            link: `/${exam.id}/guide/${page.slug}/`,
          })),
        ],
      },
      { label: 'Downloads', link: `/${exam.id}/downloads/` },
    ],
  });
}

/* ---------------------------------------------------------------- practice */

// One catalogue the picker fetches, so the exam and quiz-type choices are driven
// by data rather than duplicated into every page.
mkdirSync(BANKS_DIR, { recursive: true });
writeFileSync(
  path.join(BANKS_DIR, 'index.json'),
  `${JSON.stringify(practiceExams, null, 2)}\n`,
);

write(
  'practice/index.mdx',
  `${frontmatter({
    title: 'Practice',
    description: 'Chapter quizzes, daily quizzes and mock exams for RES 12B, FMRP and CM-SIP.',
  })}import PracticePicker from '@components/PracticePicker.tsx';

# Practice

Pick an exam, then pick how you want to practise. Nothing is stored.

<PracticePicker client:only="react" base={import.meta.env.BASE_URL} />

## The three modes

| Mode | What it does |
| --- | --- |
| **Chapter quiz** | Every question in one chapter, with the answer and explanation shown as soon as you answer. |
| **Daily quiz** | 30 questions drawn from the whole bank — a fresh set on every visit. |
| **Mock exam** | The real paper's length, timing and pass mark. Results at the end only. |

Use the sidebar to jump straight to an exam and a mode.
`,
);

for (const entry of practiceExams) {
  write(
    `practice/${entry.id}/index.mdx`,
    `${frontmatter({
      title: `${entry.name} — practice`,
      description: `Chapter quiz, daily quiz and mock exam for ${entry.name}.`,
    })}import PracticePicker from '@components/PracticePicker.tsx';

# ${entry.name} — practice

Pick how you want to practise ${entry.name}. Nothing is stored.

<PracticePicker client:only="react" base={import.meta.env.BASE_URL} examId="${entry.id}" />
`,
  );
}

/* ---------------------------------------------------------------- sidebar */

// Consumed by astro.config.mjs so the sidebar and the generated content tree can
// never drift apart. Practice is a single top-level section, not a per-exam one.
const sidebar = [
  { label: 'Home', link: '/' },
  { label: 'Study plan', link: '/study-plan/' },
  {
    label: 'Practice',
    items: [
      { label: 'Start practising', link: '/practice/' },
      ...practiceExams.map((entry) => ({
        label: entry.name,
        items: [
          { label: 'Chapter quiz', link: `/practice/${entry.id}/?type=chapter` },
          { label: 'Daily quiz', link: `/practice/${entry.id}/?type=daily` },
          { label: 'Mock exam', link: `/practice/${entry.id}/?type=mock` },
        ],
      })),
    ],
  },
  ...sidebarExams,
];

writeFileSync(
  path.join(REPO_ROOT, 'src', 'data', 'sidebar.json'),
  `${JSON.stringify(sidebar, null, 2)}\n`,
);
written.push('src/data/sidebar.json');

/* ------------------------------------------------------------------- done */

console.log(`Content generation complete — ${written.length} pages written.`);

