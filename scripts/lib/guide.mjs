/**
 * Teaching-guide loader for the per-chapter markdown files.
 *
 * Each exam's guide lives in `notes/<exam>/guide/` as one file per chapter,
 * appendix or appendix group, plus a single `kind: intro` file. Frontmatter is
 * the build contract now that the chapter headings no longer delimit pages:
 *
 *   ---
 *   id: '1B-3'                       # stable chapter id; the bank keys off this
 *   kind: 'chapter'                  # chapter | appendix | appendix-group | intro
 *   num: 3                           # syllabus chapter number, or null
 *   part: '1B'                       # '1B' | '2B' | null
 *   title: 'Market conduct'
 *   order: 1003                      # sidebar order; also the reading order
 *   slug: 'chapter-1b-3-market-conduct'   # URL slug, pinned so title edits are safe
 *   ---
 *   ## 3.1 Scope                       # body headings start at H2
 *
 * `id`, `slug` and `order` are pinned rather than derived from the title so that
 * correcting a chapter title to match the official syllabus cannot move a page's
 * URL or orphan its questions. Body headings start at `##`, which makes
 * `shiftHeadings()` a no-op for these files.
 *
 * The loader reproduces the `{ intro, pages }` shape that `splitGuide()` returned,
 * so `build-content.mjs` and `build-banks.mjs` only need their input changed.
 */

import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { REPO_ROOT } from './util.mjs';

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;

/** Frontmatter keys every guide file must declare, in emission order. */
export const GUIDE_FIELDS = ['id', 'kind', 'num', 'part', 'title', 'order', 'slug'];

const KIND_VALUES = new Set(['intro', 'chapter', 'appendix', 'appendix-group', 'section']);

/**
 * Parse `---`-delimited YAML frontmatter holding flat scalars only.
 * Unknown constructs are rejected rather than silently coerced, so a malformed
 * key cannot quietly drop a chapter from the sidebar.
 */
export function parseFrontmatter(text, where = 'guide file') {
  const match = text.match(FRONTMATTER);
  if (!match) throw new Error(`${where}: missing --- frontmatter block`);

  const data = {};
  for (const raw of match[1].split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;

    const colon = line.indexOf(':');
    if (colon === -1) throw new Error(`${where}: frontmatter line is not "key: value" — ${line}`);

    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();

    if (value === 'null' || value === '~' || value === '') {
      data[key] = null;
      continue;
    }
    if (/^'.*'$/.test(value)) {
      data[key] = value.slice(1, -1).replace(/''/g, "'");
      continue;
    }
    if (/^-?\d+$/.test(value)) {
      data[key] = Number(value);
      continue;
    }
    data[key] = value;
  }

  return { data, body: text.slice(match[0].length) };
}

/** Serialise frontmatter in a fixed key order, single-quoting all strings. */
export function renderFrontmatter(fields) {
  const quote = (value) => `'${String(value).replace(/'/g, "''")}'`;
  const lines = [`---`];
  for (const key of GUIDE_FIELDS) {
    if (!(key in fields)) continue;
    const value = fields[key];
    if (value === null || value === undefined) lines.push(`${key}: null`);
    else if (typeof value === 'number') lines.push(`${key}: ${value}`);
    else lines.push(`${key}: ${quote(value)}`);
  }
  lines.push('---');
  return `${lines.join('\n')}\n`;
}

/** Drop leading and trailing blank lines. */
function trimBlank(lines) {
  const out = [...lines];
  while (out.length && out[0].trim() === '') out.shift();
  while (out.length && out[out.length - 1].trim() === '') out.pop();
  return out;
}

/** Absolute path to an exam's guide directory. */
export function guideDirOf(exam) {
  return path.join(REPO_ROOT, exam.guideDir);
}

/** Markdown filenames in an exam's guide directory, sorted for determinism. */
export function listGuideFiles(exam) {
  return readdirSync(guideDirOf(exam))
    .filter((name) => name.endsWith('.md') && !name.startsWith('_'))
    .sort();
}

/**
 * Read one guide file into `{ file, fields, lines }`.
 * `lines` excludes the frontmatter but still includes any leading `#` title, so
 * the splitter can compare like with like against the monolithic guides.
 */
export function readGuideFile(exam, filename) {
  const rel = path.join(exam.guideDir, filename);
  const text = readFileSync(path.join(REPO_ROOT, rel), 'utf8');
  const { data, body } = parseFrontmatter(text, rel);
  return { file: rel, filename, fields: data, lines: body.split(/\r?\n/) };
}

/** Validate one file's frontmatter and return it normalised. */
function normaliseFields({ file, filename, fields }) {
  const where = file;

  for (const key of GUIDE_FIELDS) {
    if (!(key in fields)) throw new Error(`${where}: frontmatter needs "${key}"`);
  }
  if (!KIND_VALUES.has(fields.kind)) {
    throw new Error(`${where}: kind "${fields.kind}" must be one of ${[...KIND_VALUES].join(', ')}`);
  }
  if (typeof fields.order !== 'number' || !Number.isFinite(fields.order)) {
    throw new Error(`${where}: order must be a number`);
  }
  if (fields.kind === 'chapter' && typeof fields.num !== 'number') {
    throw new Error(`${where}: a chapter needs a numeric num`);
  }
  if (fields.kind !== 'chapter' && fields.num !== null) {
    throw new Error(`${where}: num must be null unless kind is "chapter"`);
  }
  if (filename.startsWith('00-') && fields.kind !== 'intro') {
    throw new Error(`${where}: "00-*" is reserved for the intro file`);
  }

  return {
    id: fields.id,
    kind: fields.kind,
    num: fields.num,
    title: fields.title,
    partId: fields.part,
    partTitle:
      fields.part === '1B' ? 'Part I — RES 1B' : fields.part === '2B' ? 'Part II — RES 2B' : null,
    order: fields.order,
    slug: fields.slug,
    // Each file carries its title as H1 and sections from H2. `level: 1` makes
    // `shiftHeadings()` push the sections to H3 in the generated page, which is
    // exactly what the monolithic guides produced (both used an H1 or H2 chapter
    // heading above H3 sections), so the rendered output is unchanged.
    level: 1,
  };
}

/**
 * Load an exam's guide as `{ intro, pages }`.
 *
 * `pages` is sorted by frontmatter `order`, then filename, so a duplicated order
 * is a deterministic error to find rather than a filesystem-dependent surprise.
 * Each page carries the same keys `splitGuide()` produced, plus `lines` holding the
 * body with the title line removed.
 */
export function loadGuide(exam) {
  const files = listGuideFiles(exam).map((name) => readGuideFile(exam, name));

  const seenId = new Map();
  const seenSlug = new Map();
  const seenOrder = new Map();
  const intro = [];
  const pages = [];

  for (const entry of files) {
    if (entry.fields.kind === 'intro') {
      intro.push(...trimBlank(entry.lines));
      continue;
    }

    const page = normaliseFields(entry);

    if (seenId.has(page.id)) {
      throw new Error(`${entry.file}: id "${page.id}" already used by ${seenId.get(page.id)}`);
    }
    if (seenSlug.has(page.slug)) {
      throw new Error(`${entry.file}: slug "${page.slug}" already used by ${seenSlug.get(page.slug)}`);
    }
    if (seenOrder.has(page.order)) {
      throw new Error(`${entry.file}: order ${page.order} already used by ${seenOrder.get(page.order)}`);
    }
    seenId.set(page.id, entry.file);
    seenSlug.set(page.slug, entry.file);
    seenOrder.set(page.order, entry.file);

    const lines = trimBlank(entry.lines);
    // A guide file repeats its title as an H2 for readability in the editor; drop
    // that single line so the generated page's H1 is not duplicated.
    if (lines.length && /^#{1,2}\s+/.test(lines[0])) lines.shift();

    pages.push({ ...page, lines: trimBlank(lines) });
  }

  pages.sort((a, b) => a.order - b.order);

  return { intro: trimBlank(intro), pages };
}

/** Chapter/appendix metadata for the sidebar and the bank rollup. */
export function extractGuideChaptersFromPages(pages) {
  return pages
    .filter(
      (p) =>
        p.kind === 'chapter' ||
        p.kind === 'appendix' ||
        p.kind === 'appendix-group' ||
        p.kind === 'section',
    )
    .map((p) => ({
      id: p.id,
      num: p.num,
      title: p.title,
      partId: p.partId,
      partTitle: p.partTitle,
      isAppendix: p.kind !== 'chapter',
      slug: p.slug,
      order: p.order,
    }))
    .sort((a, b) => a.order - b.order);
}

/** Convenience for consumers that only need chapter metadata. */
export function extractGuideChapters(exam) {
  return extractGuideChaptersFromPages(loadGuide(exam).pages);
}
