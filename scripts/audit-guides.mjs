#!/usr/bin/env node
/**
 * Study-guide coverage and defect audit.
 *
 * Run with `npm run audit` (advisory) or `npm run audit -- --strict` (non-zero exit
 * on any finding). Two independent jobs:
 *
 *   COVERAGE  Match every section in `scripts/lib/syllabus.mjs` against a heading in
 *             the per-chapter guide files, and report missing sections, headings that
 *             claim a section number the syllabus does not have, and per-chapter
 *             word counts. This is the measure of whether a rewrite is finished.
 *
 *   DEFECTS   Scan the raw markdown for things that render wrong or mislead:
 *             literal `\n` escapes, unbalanced `$$`, ragged table rows, duplicated
 *             headings, and leftover authoring notes.
 *
 * Only reads. Findings are advisory by default so a chapter rewrite can land before
 * the whole guide is green; `--strict` flips the exit code for CI.
 */

import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { listGuideFiles, readGuideFile } from './lib/guide.mjs';
import { SYLLABUS, sectionCount } from './lib/syllabus.mjs';
import { countWords } from './lib/util.mjs';

const strict = process.argv.includes('--strict');

/** A body heading carrying a section number: `## 3.4.2 Butterfly spread`. */
const NUMBERED_HEADING = /^#{2,6}\s+(\d+(?:\.\d+)*)\b/;

/** Authoring leftovers that should never reach a published page. */
const LEFTOVER_PHRASES = [
  { re: /—wait:|wait:|\bTBD\b|\bTODO\b|\bFIXME\b/i, label: 'authoring note' },
  { re: /\bthe (?:source|guide|pdf|document)\s+(?:states|says|explains|notes|describes)\b/i, label: 'meta-commentary' },
];

/** Split table rows into cells, ignoring escaped pipes. */
function tableCells(line) {
  const body = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  const cells = [];
  let current = '';
  for (let i = 0; i < body.length; i += 1) {
    const ch = body[i];
    if (ch === '\\' && body[i + 1] === '|') {
      current += '|';
      i += 1;
      continue;
    }
    if (ch === '|') {
      cells.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  cells.push(current.trim());
  return cells;
}

const isTableDelimiter = (line) => /^\s*\|?[\s:-]*-[\s:|-]*\|?\s*$/.test(line) && line.includes('-');

/** Count `$$` fences; an odd number means a formula will swallow the rest of the page. */
function unbalancedMath(lines) {
  let count = 0;
  for (const line of lines) {
    const matches = line.match(/\$\$/g);
    if (matches) count += matches.length;
  }
  return count % 2 !== 0;
}

/** Report rows whose cell count differs from the table header's. */
function raggedTables(lines) {
  const problems = [];
  for (let i = 0; i < lines.length - 1; i += 1) {
    const header = lines[i];
    if (!header.trim().startsWith('|')) continue;
    if (!isTableDelimiter(lines[i + 1])) continue;

    const expected = tableCells(header).length;
    for (let j = i + 2; j < lines.length; j += 1) {
      const row = lines[j];
      if (!row.trim().startsWith('|')) break;
      const actual = tableCells(row).length;
      if (actual !== expected) problems.push({ line: j + 1, expected, actual, text: row.trim() });
    }
  }
  return problems;
}

/** Repeated `##`-level heading text within one file. */
function duplicateHeadings(lines) {
  const seen = new Map();
  const duplicates = [];
  lines.forEach((line, index) => {
    const m = line.match(/^#{2,3}\s+(.*\S)\s*$/);
    if (!m) return;
    const text = m[1].trim();
    if (seen.has(text)) duplicates.push({ line: index + 1, text, first: seen.get(text) });
    else seen.set(text, index + 1);
  });
  return duplicates;
}

let totalFindings = 0;
let totalStrictFindings = 0;

for (const exam of EXAMS) {
  const manifest = SYLLABUS[exam.id];
  if (!manifest) throw new Error(`${exam.id}: no syllabus manifest`);

  const files = listGuideFiles(exam).map((name) => readGuideFile(exam, name));
  const contentFiles = files.filter((f) => f.fields.kind !== 'intro');

  // --- coverage -------------------------------------------------------------
  const foundByPage = new Map();
  for (const f of contentFiles) {
    const numbers = new Set();
    for (const line of f.lines) {
      const m = line.match(NUMBERED_HEADING);
      if (m) numbers.add(m[1]);
    }
    foundByPage.set(f.fields.id, numbers);
  }

  const missing = [];
  const chapterWords = [];
  for (const [pageId, chapter] of Object.entries(manifest.chapters)) {
    // A chapter the official guide repeats in both parts (`sharedWith`) is carried
    // once, on the page that owns it, so it needs no page or headings of its own.
    if (chapter.sharedWith) continue;

    const found = foundByPage.get(pageId);
    if (!found) {
      missing.push({ pageId, number: '—', title: `page "${pageId}" missing entirely` });
      continue;
    }
    const file = contentFiles.find((f) => f.fields.id === pageId);
    chapterWords.push({ pageId, title: file.fields.title, words: countWords(file.lines) });

    for (const [number, title] of chapter.sections) {
      if (!found.has(number)) missing.push({ pageId, number, title });
    }
  }

  // Headings that carry a section number the syllabus does not list. A heading is
  // accepted when its own number is declared, or when it sits directly below a
  // declared number (`1.1.1.1` under `1.1.1`) — the official numbering is sometimes
  // finer-grained than the section list, and that is not a defect.
  const declared = new Set();
  for (const [pageId, chapter] of Object.entries(manifest.chapters)) {
    if (chapter.sharedWith) continue;
    for (const [number] of chapter.sections) declared.add(`${pageId}|${number}`);
  }
  const isDeclared = (pageId, number) => {
    if (declared.has(`${pageId}|${number}`)) return true;
    const parts = number.split('.');
    for (let i = parts.length - 1; i >= 1; i -= 1) {
      if (declared.has(`${pageId}|${parts.slice(0, i).join('.')}`)) return true;
    }
    return false;
  };
  const unexpected = [];
  for (const f of contentFiles) {
    const pageId = f.fields.id;
    if (manifest.chapters[pageId]?.sharedWith) continue;
    for (const line of f.lines) {
      const m = line.match(NUMBERED_HEADING);
      if (!m) continue;
      if (!isDeclared(pageId, m[1])) {
        unexpected.push({ pageId, number: m[1], text: line.trim() });
      }
    }
  }

  // Appendix pages should exist even though they carry no numbered sections.
  const missingAppendices = Object.keys(manifest.appendices).filter(
    (id) => !files.some((f) => f.fields.id === id),
  );

  // --- defects --------------------------------------------------------------
  const defects = [];
  for (const f of files) {
    const where = path.basename(f.file);

    f.lines.forEach((line, index) => {
      for (const { re, label } of LEFTOVER_PHRASES) {
        if (re.test(line)) defects.push({ where, line: index + 1, label, text: line.trim().slice(0, 100) });
      }
      // A literal backslash-n in prose is an escape that never got interpreted.
      if (/\\n/.test(line) && !/^\s*`/.test(line)) {
        defects.push({ where, line: index + 1, label: 'literal \\n', text: line.trim().slice(0, 100) });
      }
    });

    if (unbalancedMath(f.lines)) {
      defects.push({ where, line: 0, label: 'unbalanced $$', text: 'odd number of $$ fences' });
    }
    for (const dup of duplicateHeadings(f.lines)) {
      defects.push({
        where,
        line: dup.line,
        label: 'duplicate heading',
        text: `"${dup.text}" (first at line ${dup.first})`,
      });
    }
    for (const row of raggedTables(f.lines)) {
      defects.push({
        where,
        line: row.line,
        label: `ragged table (${row.actual} cells, header has ${row.expected})`,
        text: row.text.slice(0, 100),
      });
    }
  }

  // --- report ---------------------------------------------------------------
  const expected = sectionCount(exam.id);
  const covered = expected - missing.filter((m) => m.number !== '—').length;
  const words = countWords(files.flatMap((f) => f.lines));
  const findings = missing.length + unexpected.length + missingAppendices.length + defects.length;
  totalFindings += findings;
  totalStrictFindings += missing.length + missingAppendices.length + defects.length;

  const pct = expected ? Math.round((covered / expected) * 100) : 0;
  const pctColor = pct >= 99 ? 'OK' : pct >= 70 ? 'PARTIAL' : 'LOW';
  console.log(
    `\n${exam.name} — ${words.toLocaleString()} words, ${contentFiles.length} pages\n` +
      `  coverage  ${covered}/${expected} sections (${pct}%)  [${pctColor}]\n` +
      `  missing   ${missing.length}   unexpected ${unexpected.length}   ` +
      `missing appendices ${missingAppendices.length}   defects ${defects.length}`,
  );

  if (chapterWords.length) {
    const widest = Math.max(...chapterWords.map((c) => c.words));
    console.log('  words per chapter:');
    for (const c of chapterWords) {
      const bar = '█'.repeat(Math.max(1, Math.round((c.words / widest) * 28)));
      console.log(`    ${String(c.pageId).padEnd(9)} ${String(c.words).padStart(6)}  ${bar} ${c.title.slice(0, 46)}`);
    }
  }

  if (missing.length) {
    console.log('  MISSING SECTIONS:');
    const byPage = new Map();
    for (const m of missing) {
      if (!byPage.has(m.pageId)) byPage.set(m.pageId, []);
      byPage.get(m.pageId).push(m);
    }
    for (const [pageId, rows] of byPage) {
      console.log(`    ${pageId}: ${rows.map((r) => r.number).join(', ')}`);
    }
  }
  if (unexpected.length) {
    console.log('  HEADINGS NOT IN SYLLABUS:');
    for (const u of unexpected.slice(0, 12)) console.log(`    ${u.pageId} ${u.number}: ${u.text.slice(0, 84)}`);
    if (unexpected.length > 12) console.log(`    … ${unexpected.length - 12} more`);
  }
  if (missingAppendices.length) {
    console.log(`  MISSING APPENDICES: ${missingAppendices.join(', ')}`);
  }
  if (defects.length) {
    console.log('  DEFECTS:');
    for (const d of defects.slice(0, 20)) {
      console.log(`    ${d.where}:${d.line}  [${d.label}]  ${d.text}`);
    }
    if (defects.length > 20) console.log(`    … ${defects.length - 20} more`);
  }
}

const expectedTotal = EXAMS.reduce((sum, e) => sum + sectionCount(e.id), 0);
console.log(`\n${expectedTotal} syllabus sections across the three guides.`);
console.log(`${totalFindings} finding(s); ${totalStrictFindings} blocking under --strict.`);
if (strict && totalStrictFindings > 0) process.exit(1);
