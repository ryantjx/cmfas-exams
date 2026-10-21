#!/usr/bin/env node
/**
 * Regenerate the checked-in printable artefacts under `notes/<exam>/output/`.
 *
 * Run with `npm run pdf`. Requires pandoc and XeLaTeX on PATH; CI does not have
 * them, so this is a local-only step and the generated files are committed.
 *
 * For each exam this writes:
 *   output/html/<EXAM>_AI.html          the whole guide, concatenated in reading order
 *   output/html/<EXAM>_QUESTIONS.html   the question bank
 *   output/pdf/<EXAM>_AI.pdf            same, via XeLaTeX
 *   output/pdf/<EXAM>_QUESTIONS.pdf
 *
 * The guide is assembled from the per-chapter files in `notes/<exam>/guide/`, which
 * is why the guide is no longer one monolith: the PDF has to read the same source the
 * site does. `$$…$$` maths is converted by pandoc's own TeX handling, matching the
 * site's KaTeX output closely enough to be usable offline.
 *
 * The question bank keeps its `<details>` answer blocks in HTML; for the PDF they are
 * opened up so the answers are visible in print.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { listGuideFiles, readGuideFile } from './lib/guide.mjs';
import { REPO_ROOT } from './lib/util.mjs';

function have(cmd) {
  try {
    execFileSync('which', [cmd], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

if (!have('pandoc')) {
  console.error('pandoc not found on PATH — install it, or skip `npm run pdf`.');
  process.exit(1);
}
const canPdf = have('xelatex');
if (!canPdf) {
  console.warn('! xelatex not found — HTML will be rebuilt, PDFs will be skipped.');
}

const CSS = `
body { max-width: 46em; margin: 0 auto; padding: 2em 1em; font: 16px/1.6 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1a1a1a; }
h1 { font-size: 1.9em; border-bottom: 2px solid #1a1a1a; padding-bottom: .3em; margin-top: 2.2em; page-break-before: always; }
h1:first-of-type { page-break-before: auto; margin-top: 0; }
h2 { font-size: 1.35em; margin-top: 1.8em; }
h3 { font-size: 1.12em; margin-top: 1.5em; }
table { border-collapse: collapse; width: 100%; margin: 1em 0; font-size: .93em; }
th, td { border: 1px solid #bbb; padding: .35em .5em; text-align: left; vertical-align: top; }
th { background: #f2f2f2; }
code { background: #f4f4f4; padding: .1em .3em; border-radius: 3px; font-size: .9em; }
details { margin: .8em 0; padding: .5em .8em; background: #f8f8f8; border-left: 3px solid #888; }
summary { cursor: pointer; font-weight: 600; }
blockquote { margin: 1em 0; padding-left: 1em; border-left: 3px solid #ddd; color: #555; }
`;

/** Reading order for the guide, intro first. */
function guideMarkdown(exam) {
  const files = listGuideFiles(exam);
  const parts = [];

  for (const name of files) {
    const { fields, lines } = readGuideFile(exam, name);
    const body = lines.join('\n').trim();
    if (fields.kind === 'intro') {
      // The intro already opens with its own H1.
      parts.push(body);
      continue;
    }
    // Each page file starts with an H1 title, which is exactly what the PDF wants.
    parts.push(body);
  }

  return parts.join('\n\n');
}

/** Question bank markdown with the answer blocks opened for print. */
function bankMarkdown(exam) {
  let text = readFileSync(path.join(REPO_ROOT, exam.bank), 'utf8');

  // `<details><summary>Show answer</summary>` becomes a visible heading so the
  // printable copy carries its answers rather than hiding them behind a widget.
  text = text
    .replace(/<details>\s*\n?/gi, '')
    .replace(/<\/details>/gi, '')
    .replace(/<summary>\s*Show answer\s*<\/summary>/gi, '**Answer and explanation**\n');

  return text;
}

const written = [];
let failures = 0;

/** Run pandoc, reporting rather than throwing so one bad exam cannot stop the rest. */
function pandoc({ input, out, to, extra = [], label }) {
  const args = [input, '-f', 'gfm', '-t', to, '-o', out, '--standalone', ...extra];
  try {
    execFileSync('pandoc', args, { stdio: ['ignore', 'pipe', 'pipe'] });
    const bytes = readFileSync(out).length;
    console.log(`  ✓ ${label}  ${(bytes / 1024).toFixed(0)} KB`);
    written.push(out);
    return true;
  } catch (error) {
    const detail = (error.stderr ?? '').toString().split('\n').slice(0, 4).join(' ') || error.message;
    console.error(`  ✗ ${label}  ${detail}`);
    failures += 1;
    return false;
  }
}

for (const exam of EXAMS) {
  const outDir = path.join(REPO_ROOT, 'notes', exam.id, 'output');
  const htmlDir = path.join(outDir, 'html');
  const pdfDir = path.join(outDir, 'pdf');
  mkdirSync(htmlDir, { recursive: true });
  mkdirSync(pdfDir, { recursive: true });

  const name = exam.id.toUpperCase();
  console.log(`\n${exam.name}`);

  // Assemble the two documents into a scratch directory next to the output so
  // relative links in the bank still resolve.
  const tmp = path.join(outDir, '.build');
  rmSync(tmp, { recursive: true, force: true });
  mkdirSync(tmp, { recursive: true });

  const guideSrc = path.join(tmp, 'guide.md');
  const bankSrc = path.join(tmp, 'questions.md');
  writeFileSync(guideSrc, guideMarkdown(exam));
  writeFileSync(bankSrc, bankMarkdown(exam));

  const title = `${exam.name} — Study Guide`;
  const bankTitle = `${exam.name} — Question Bank`;

  const css = path.join(tmp, 'print.css');
  writeFileSync(css, CSS);

  const htmlBase = [
    '--metadata',
    `title=${title}`,
    '--css',
    css,
    '--embed-resources',
    // `$$…$$` is the guides' maths delimiter, which pandoc reads as display maths
    // by default. `--mathml` renders it in the HTML artefact instead of leaving
    // the raw delimiters visible; the PDF path already handles it via XeLaTeX.
    '--mathml',
  ];

  pandoc({
    input: guideSrc,
    out: path.join(htmlDir, `${name}_AI.html`),
    to: 'html5',
    extra: htmlBase,
    label: `${name}_AI.html`,
  });
  pandoc({
    input: bankSrc,
    out: path.join(htmlDir, `${name}_QUESTIONS.html`),
    to: 'html5',
    extra: ['--metadata', `title=${bankTitle}`, '--css', css, '--embed-resources', '--mathml'],
    label: `${name}_QUESTIONS.html`,
  });

  if (canPdf) {
    const pdfBase = [
      '--pdf-engine=xelatex',
      '-V',
      'geometry:a4paper,margin=2.2cm',
      '-V',
      'fontsize=10pt',
      '-V',
      'colorlinks=true',
      '--toc',
      '--toc-depth=2',
    ];
    pandoc({
      input: guideSrc,
      out: path.join(pdfDir, `${name}_AI.pdf`),
      to: 'pdf',
      extra: [...pdfBase, '--metadata', `title=${title}`],
      label: `${name}_AI.pdf`,
    });
    pandoc({
      input: bankSrc,
      out: path.join(pdfDir, `${name}_QUESTIONS.pdf`),
      to: 'pdf',
      extra: [...pdfBase, '--metadata', `title=${bankTitle}`],
      label: `${name}_QUESTIONS.pdf`,
    });
  }

  rmSync(tmp, { recursive: true, force: true });
}

// The study-plan PDF is generated from its own markdown if present.
const planSrc = path.join(REPO_ROOT, 'notes', '121026_EXAMS.md');
if (canPdf && existsSync(planSrc)) {
  console.log('\nStudy plan');
  pandoc({
    input: planSrc,
    out: path.join(REPO_ROOT, 'notes', '121026_EXAMS.pdf'),
    to: 'pdf',
    extra: ['--pdf-engine=xelatex', '-V', 'geometry:a4paper,margin=2.2cm'],
    label: '121026_EXAMS.pdf',
  });
}

console.log(`\n${written.length} artefact(s) written${failures ? `, ${failures} failure(s)` : ''}.`);
if (failures) process.exit(1);
