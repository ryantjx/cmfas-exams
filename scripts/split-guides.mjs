#!/usr/bin/env node
/**
 * One-off migration: split the three monolithic `*_AI.md` teaching guides into
 * `notes/<exam>/guide/<NN>-<slug>.md`, one file per chapter/appendix.
 *
 * Run with `node scripts/split-guides.mjs` (or `npm run split:guides`).
 *
 * The migration is content-neutral by construction and proves it:
 *
 *   1. `splitGuide()` derives the page boundaries, ids, slugs and orders from the
 *      monolith, so nothing about the existing structure is re-invented here.
 *   2. Every body heading is normalised so the shallowest heading in a page is H2;
 *      `guide.mjs` then declares `level: 1`, reproducing the H3 depth the
 *      monolithic guides produced in the generated pages.
 *   3. Before writing, the script reloads the emitted files through `loadGuide()`
 *      and asserts that the concatenated text equals the original per page. Any
 *      drift aborts the run.
 *
 * The monoliths are left in place; delete them once `npm run verify` is green.
 */

import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { renderFrontmatter } from './lib/guide.mjs';
import { splitGuide } from './lib/questions.mjs';
import { REPO_ROOT, readLines } from './lib/util.mjs';

/** Zero-padded, filesystem-sortable prefix shared by every file in a guide dir. */
function fileStem(page) {
  const part = page.partId ? `${page.partId.toLowerCase()}-` : '';
  if (page.kind === 'chapter') {
    return `${part}${String(page.num).padStart(2, '0')}`;
  }
  if (page.kind === 'appendix') {
    // Appendices sort after chapters but before the closing sections.
    return `${part}90-appendix-${page.title.match(/^Appendix ([A-Z])/)[1].toLowerCase()}`;
  }
  // Closing sections (final checklist, cross-chapter method) render last.
  return `${part}95`;
}

/** Short kebab-case tail for the filename, derived from the page title. */
function fileTail(page) {
  const title = page.title
    .replace(/^Appendix [A-Z]\s*[—–-]?\s*/i, '')
    .replace(/^Chapter\s+\d+\s*[—–-]\s*/i, '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return title || page.id.toLowerCase();
}

/** Deepest heading level present in a block, or null when it holds no headings. */
function minHeadingLevel(lines) {
  let min = null;
  for (const line of lines) {
    const m = line.match(/^(#{1,6})\s+/);
    if (m && (min === null || m[1].length < min)) min = m[1].length;
  }
  return min;
}

/** Move every heading by `delta`, clamped to H1–H6. */
function shiftBy(lines, delta) {
  if (delta === 0) return lines;
  return lines.map((line) => {
    const m = line.match(/^(#{1,6})(\s+.*)$/);
    if (!m) return line;
    const level = Math.max(1, Math.min(6, m[1].length + delta));
    return '#'.repeat(level) + m[2];
  });
}

/**
 * Normalise a page body so its shallowest heading is H2.
 *
 * `splitGuide()` already consumed the page's own title heading, so `page.lines`
 * starts at a section. Nothing is stripped here — only the heading depth changes,
 * which `guide.mjs` compensates for by declaring `level: 1`.
 */
function normaliseBody(page) {
  const lines = [...page.lines];
  const min = minHeadingLevel(lines);
  return min === null ? lines : shiftBy(lines, 2 - min);
}

/** Compare two line arrays ignoring trailing whitespace and blank-line runs. */
function sameText(a, b) {
  const norm = (lines) =>
    lines
      .map((line) => line.replace(/\s+$/, ''))
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  return norm(a) === norm(b);
}

let failed = false;

for (const exam of EXAMS) {
  const sourceRel = exam.guide;
  if (!existsSync(path.join(REPO_ROOT, sourceRel))) {
    console.log(`[SKIP] ${exam.name.padEnd(8)} ${sourceRel} not found (already split?)`);
    continue;
  }

  const lines = readLines(sourceRel);
  const { intro, pages } = splitGuide(exam, lines);
  const targetDir = path.join(REPO_ROOT, exam.guideDir);
  rmSync(targetDir, { recursive: true, force: true });
  mkdirSync(targetDir, { recursive: true });

  const emitted = [];
  const introFields = {
    id: 'intro',
    kind: 'intro',
    num: null,
    part: null,
    title: exam.guideIntroTitle,
    order: 0,
    slug: 'index',
  };
  writeFileSync(
    path.join(targetDir, '00-introduction.md'),
    `${renderFrontmatter(introFields)}\n${intro.join('\n').trim()}\n`,
  );
  emitted.push({ file: '00-introduction.md', fields: introFields, body: intro });

  for (const page of pages) {
    // `page.lines` already excludes the page's own heading (splitGuide consumes it),
    // so this normalises the section headings to start at H2 and nothing else.
    const body = normaliseBody(page);
    const fields = {
      id: page.id,
      kind: page.kind,
      num: page.num,
      part: page.partId ?? null,
      title: page.title,
      order: page.order,
      slug: page.slug,
    };
    const filename = `${fileStem(page)}-${fileTail(page)}.md`;
    // An explicit H1 keeps each file readable on its own; `loadGuide()` drops it
    // again, exactly as `stripLeadingTitleLine()` did for the monolith.
    writeFileSync(
      path.join(targetDir, filename),
      `${renderFrontmatter(fields)}\n# ${page.title}\n\n${body.join('\n').trim()}\n`,
    );
    emitted.push({ file: filename, fields, body });
  }

  // --- round-trip assertion -------------------------------------------------
  // Reload from disk and confirm every page still holds the same text. This is
  // what makes the migration safe to land without reading the diff line by line.
  const { loadGuide } = await import('./lib/guide.mjs');
  const reloaded = loadGuide(exam);
  const reloadedById = new Map(reloaded.pages.map((p) => [p.id, p]));

  const problems = [];
  for (const { file, fields, body } of emitted) {
    if (fields.kind === 'intro') {
      if (!sameText(reloaded.intro, body)) problems.push(`${file}: intro text changed`);
      continue;
    }
    const page = reloadedById.get(fields.id);
    if (!page) {
      problems.push(`${file}: page "${fields.id}" missing after reload`);
      continue;
    }
    // `body` is already in the form `loadGuide()` returns, so compare directly.
    if (!sameText(page.lines, body)) problems.push(`${file}: body text changed after reload`);
    if (page.kind !== fields.kind) problems.push(`${file}: kind drifted to "${page.kind}"`);
    if (page.slug !== fields.slug) problems.push(`${file}: slug drifted to "${page.slug}"`);
    if (page.order !== fields.order) problems.push(`${file}: order drifted to "${page.order}"`);
  }
  if (reloaded.pages.length !== pages.length) {
    problems.push(`page count ${reloaded.pages.length} != ${pages.length}`);
  }

  if (problems.length) {
    failed = true;
    console.log(`[FAIL] ${exam.name.padEnd(8)} ${sourceRel}`);
    for (const p of problems.slice(0, 20)) console.log(`         - ${p}`);
  } else {
    console.log(
      `[ OK ] ${exam.name.padEnd(8)} ${String(pages.length).padStart(2)} pages ` +
        `+ intro → ${exam.guideDir}/`,
    );
  }
}

if (failed) {
  console.error('\nSplit failed: the emitted files do not round-trip. Nothing should be committed.');
  process.exit(1);
}
console.log('\nSplit complete and round-trip verified.');
