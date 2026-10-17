import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
);

/** Read a repo-relative file into an array of lines. */
export function readLines(relPath) {
  return readFileSync(path.join(REPO_ROOT, relPath), 'utf8').split(/\r?\n/);
}

export function readText(relPath) {
  return readFileSync(path.join(REPO_ROOT, relPath), 'utf8');
}

/** URL-safe slug. Handles em/en dashes, curly quotes and the like. */
export function slugify(input) {
  return String(input)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

/** Escape a value for a single-quoted YAML scalar. */
export function yamlString(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

/**
 * Drop a leading H1 so the generated page has exactly one H1 (supplied via
 * frontmatter) and does not duplicate the sidebar title.
 */
export function stripLeadingTitleLine(lines) {
  const out = [...lines];
  while (out.length && out[0].trim() === '') out.shift();
  if (out.length && /^#\s+/.test(out[0])) out.shift();
  while (out.length && out[0].trim() === '') out.shift();
  return out;
}

/** The lines before the first heading matching `pattern` (or all of them). */
export function takeUntilHeading(lines, pattern) {
  const index = lines.findIndex((line) => pattern.test(line.trim()));
  return index === -1 ? [...lines] : lines.slice(0, index);
}

/**
 * Sidebar/nav label for a guide chapter. Chapters carry their syllabus number so
 * the navigation reads like the syllabus — "2 Futures, Forwards and Swaps" — and
 * RES 12B chapters are part-qualified ("1B.3 Market conduct", "2B.4 OTC
 * derivatives") because its two parts share chapter numbers.
 *
 * Only the label changes; `slug` is untouched, so URLs stay stable.
 */
export function chapterLabel(chapter) {
  const { kind, num, partId, title } = chapter;
  if (kind === 'chapter' && num !== undefined && num !== null) {
    return `${partId ? `${partId}.${num}` : num} ${title}`;
  }
  return title;
}

export function countWords(lines) {
  return lines.join(' ').split(/\s+/).filter(Boolean).length;
}
