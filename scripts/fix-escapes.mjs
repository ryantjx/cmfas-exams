#!/usr/bin/env node
/**
 * One-off repair: convert literal `\n` escape sequences in the guide markdown into
 * real newlines.
 *
 * These crept in when a line was collapsed into a single string during authoring, so
 * tables and bullet lists arrived as one very long line. Only the two-character
 * sequence backslash-n is converted; `\\n` (an escaped backslash) and any occurrence
 * inside an inline code span or fenced block is left alone, so shell snippets and
 * regexes that legitimately contain the text are safe.
 *
 * Run with `node scripts/fix-escapes.mjs`; it reports every file it changes.
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { EXAMS } from './lib/exams.mjs';
import { REPO_ROOT } from './lib/util.mjs';

/** Convert literal `\n` to a newline outside inline code and fenced blocks. */
function repair(text) {
  const out = [];
  let inFence = false;
  for (const line of text.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    // Walk the line so `\n` inside backticks is preserved.
    let result = '';
    let inCode = false;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === '`') {
        inCode = !inCode;
        result += ch;
        continue;
      }
      if (!inCode && ch === '\\' && line[i + 1] === 'n') {
        result += '\n';
        i += 1;
        continue;
      }
      result += ch;
    }
    out.push(result);
  }
  return out.join('\n');
}

let changed = 0;
for (const exam of EXAMS) {
  const dir = path.join(REPO_ROOT, exam.guideDir);
  for (const name of readdirSync(dir).filter((n) => n.endsWith('.md')).sort()) {
    const file = path.join(dir, name);
    const before = readFileSync(file, 'utf8');
    if (!before.includes('\\n')) continue;
    const after = repair(before);
    if (after === before) continue;
    writeFileSync(file, after);
    const count = (before.match(/\\n/g) ?? []).length;
    console.log(`  ${path.relative(REPO_ROOT, file)} — ${count} escape(s) expanded`);
    changed += 1;
  }
}

console.log(changed ? `\n${changed} file(s) repaired.` : '\nNo literal escapes found.');
