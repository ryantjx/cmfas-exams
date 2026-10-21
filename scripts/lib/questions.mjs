/**
 * Markdown question-bank and teaching-guide parsers.
 *
 * The repo contains three hand-maintained question banks with three different
 * markup conventions. Nothing in the repo is rewritten by these parsers — they
 * only read.
 *
 *   CM-SIP  (bankFormat: 'bold')
 *     **1. [Single choice]** Which statement best defines a derivative?
 *     a. ...
 *     <details><summary>Show answer</summary>**Answer: b.** short note</details>
 *
 *   FMRP / RES 12B (bankFormat: 'heading')
 *     ### 1. **[Single choice]** [RES 1B §1.1] stem
 *     - a. ...            (FMRP originals / RES 12B plain options)
 *     - (a) ...           (FMRP source-reference statements)
 *     Choose one:         ← separates statements (context) from options
 *     - A. (a) and (b)    (combination options)
 *     <details><summary>Show answer</summary>**Answer:** A. ...</details>
 *
 * Answer payload shapes differ too: `**Answer: b.** why` (CM-SIP, rationale
 * inline) versus `**Answer:** A. choice` + `**Rationale:** why` (FMRP, RES 12B).
 *
 * NOTE on combination questions: statement keys (`a`) and option keys (`A`) both
 * lowercase to `a`, so the `Choose one:` marker is what distinguishes selectable
 * options from shared context. Statements are kept separately and rendered above
 * the options.
 */

import { slugify } from './util.mjs';

const BLANK = /^\s*$/;
const DETAILS_OPEN = /^\s*<details\b/i;
const DETAILS_CLOSE = /^\s*<\/details>/i;
const SUMMARY = /^\s*<summary\b/i;

const BOLD_Q = /^\*\*(\d+)\.\s*(?:\[\s*([^\]]+?)\s*\]\s*)?\*\*\s*(.*)$/;
const HEADING_Q = /^#{1,6}\s+(\d+)\.[ \t]*\*\*\[\s*([^\]]+?)\s*\]\*\*\s*(?:\[\s*([^\]]+?)\s*\]\s*)?(.*)$/;

const OPT_PLAIN = /^\s*([a-dA-D])\.\s+(.*\S)\s*$/; // `a. text`          (CM-SIP, RES 12B)
const OPT_DASH = /^\s*-\s+([a-dA-D])\.\s+(.*\S)\s*$/; // `- a. text`      (FMRP originals)
const STMT_DASH = /^\s*-\s+\(([a-dA-D])\)\s+(.*\S)\s*$/; // `- (a) text`     (FMRP source-ref)
const CHOOSE_ONE = /^\s*Choose one:\s*$/i;

const ANSWER_LINE = /^\*\*Answer:?\s*(.*)$/;
const RATIONALE_LINE = /^\*\*Rationale:?\*\*\s*(.*)$/;
const INLINE_SPLIT = /\s(?=[a-dA-D]\.\s)/;

/* ------------------------------------------------------------------ helpers */

/** Split `a. foo b. bar c. baz d. qux` onto separate options, or null. */
function expandInlineOptions(line) {
  const trimmed = line.trim();
  if (!/^[a-dA-D]\.\s/.test(trimmed)) return null;
  const pieces = trimmed.split(INLINE_SPLIT);
  if (pieces.length < 2) return null;
  const out = [];
  for (const piece of pieces) {
    const m = piece.trim().match(/^([a-dA-D])\.\s+(.*)$/);
    if (!m) return null;
    out.push({ key: m[1].toLowerCase(), text: m[2].trim() });
  }
  return out.length >= 2 ? out : null;
}

/** Parse a `**Answer...` line into its payload and any trailing text. */
function parseAnswerLine(line) {
  const m = line.match(ANSWER_LINE);
  if (!m) return null;
  const body = m[1];
  if (body.startsWith('**')) return { payload: body.slice(2).trim(), rest: '' };
  const close = body.indexOf('**');
  if (close === -1) return { payload: body.trim(), rest: '' };
  return { payload: body.slice(0, close).trim(), rest: body.slice(close + 2).trim() };
}

/**
 * Resolve an answer payload into option keys.
 *   'b.'                  → ['b']
 *   'a, b, c and d'       → ['a','b','c','d']
 *   'C. (b), (c) and (d)' → ['c']   (combination choice → option C)
 */
export function extractAnswerKeys(payload) {
  const cleaned = payload.replace(/[.\s]+$/, '').trim();
  if (!cleaned) return [];

  // Multi-response: begins with a letter followed by a separator (`a, b, c and
  // d` or the two-option `a and b`).
  if (/^[a-dA-D]\s*(?:,|and\b)/i.test(cleaned)) {
    const keys = [];
    const re = /([a-dA-D])(?=\s*(?:,|and\b|$))/gi;
    let m;
    while ((m = re.exec(cleaned)) !== null) keys.push(m[1].toLowerCase());
    const unique = [...new Set(keys)];
    return unique.length >= 2 ? unique : [];
  }

  const single = cleaned.match(/^([a-dA-D])\b/);
  return single ? [single[1].toLowerCase()] : [];
}

/** Pull answer + rationale out of the lines inside a `<details>` block. */
function parseAnswerBlock(lines) {
  let answerRaw = '';
  let rationale = '';
  let seenAnswer = false;
  for (const line of lines) {
    const t = line.trim();
    if (BLANK.test(t) || DETAILS_OPEN.test(t) || DETAILS_CLOSE.test(t) || SUMMARY.test(t)) continue;

    if (!seenAnswer) {
      const a = parseAnswerLine(t);
      if (a) {
        answerRaw = a.payload;
        if (a.rest) rationale = a.rest;
        seenAnswer = true;
        continue;
      }
    }

    const r = t.match(RATIONALE_LINE);
    if (r) {
      rationale = r[1].trim();
      continue;
    }
    if (seenAnswer && !rationale) rationale = t;
  }
  return { answerRaw, rationale };
}

/** Detect a question start line for the given bank format. */
function matchQuestionStart(format, line) {
  if (format === 'bold') {
    const m = line.match(BOLD_Q);
    if (!m) return null;
    const rest = m[3].trim();
    // A CMSIP question may carry `[Type]`; if it does not, the whole rest is stem.
    const typeMatch = rest.match(/^\[\s*([^\]]+?)\s*\]\s*(.*)$/);
    if (typeMatch && !m[2]) {
      return { number: Number(m[1]), type: typeMatch[1].trim(), sourceRef: null, stem: typeMatch[2].trim() };
    }
    return { number: Number(m[1]), type: m[2] ? m[2].trim() : null, sourceRef: null, stem: rest };
  }
  const m = line.match(HEADING_Q);
  if (!m) return null;
  return {
    number: Number(m[1]),
    type: m[2].trim(),
    sourceRef: m[3] ? m[3].trim() : null,
    stem: m[4].trim(),
  };
}

/** Strip an option prefix (`a.` or `- a.`), returning { key, text } or null. */
function matchOptionLike(line) {
  const dash = line.match(OPT_DASH);
  if (dash) return { key: dash[1].toLowerCase(), text: dash[2].trim() };
  const plain = line.match(OPT_PLAIN);
  if (plain) return { key: plain[1].toLowerCase(), text: plain[2].trim() };
  return null;
}

/* ---------------------------------------------------------------- bank scan */

/** Walk the bank collecting question blocks plus heading context. */
function scanBlocks(format, lines) {
  const blocks = [];
  let current = null;
  let inDetails = false;
  let context = { chapterNum: null, chapterTitle: null, groupId: null, groupTitle: null, part: null, setId: null };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');

    if (!inDetails) {
      // Questions are matched FIRST: in the 'heading' banks a question is itself
      // an H3, and would otherwise be swallowed by the generic heading branch.
      const start = matchQuestionStart(format, line);
      if (start) {
        current = { ...start, bodyLines: [], details: [], context: { ...context } };
        blocks.push(current);
        continue;
      }

      const heading = line.match(/^(#{1,6})\s+(.*\S)\s*$/);
      if (heading) {
        const level = heading[1].length;
        const text = heading[2].trim();

        const part = text.match(/^Part\s+(I|II)\s*[—–-]\s*(.+)$/);
        if (part && level === 1) {
          context = { ...context, part: text, chapterNum: null, chapterTitle: null };
          continue;
        }
        const chapter = text.match(/^Chapter\s+(\d+)\s*[—–-]\s*(.+)$/i);
        if (chapter && level >= 2) {
          context = {
            ...context,
            chapterNum: Number(chapter[1]),
            chapterTitle: chapter[2].trim(),
            groupId: null,
            groupTitle: null,
          };
          continue;
        }
        // `## Appendix A — Review Questions` maps to the guide's `appendix-A`.
        // Without this a bank cannot address appendix pages by name (CM-SIP has
        // no source tag to fall back on, so its appendix questions would be
        // unmappable).
        const appendix = text.match(/^Appendix\s+([A-Z])\b\s*(.*)$/);
        if (appendix && level >= 2) {
          context = {
            ...context,
            chapterNum: null,
            chapterTitle: text,
            groupId: `appendix-${appendix[1].toUpperCase()}`,
            groupTitle: text,
          };
          continue;
        }
        if (/^Source-reference questions\b/i.test(text) || /^Original questions\b/i.test(text)) {
          context = { ...context, setId: text };
          continue;
        }
        if (/mixed review/i.test(text)) {
          context = { ...context, chapterNum: null, chapterTitle: null, groupId: 'mixed', groupTitle: 'Rapid mixed review' };
          continue;
        }
        // Closing sections are guide pages of their own (`kind: section`). Without an
        // explicit rule they would inherit the previous chapter's context and their
        // questions would be attributed to the wrong page.
        if (/^Cross-chapter exam method\b/i.test(text)) {
          context = {
            ...context,
            chapterNum: null,
            chapterTitle: text,
            groupId: 'cross-chapter-exam-method',
            groupTitle: text,
          };
          continue;
        }
        if (/^Final revision checklist\b/i.test(text)) {
          context = {
            ...context,
            chapterNum: null,
            chapterTitle: text,
            groupId: 'final-revision-checklist',
            groupTitle: text,
          };
          continue;
        }
        if (/^(Coverage audit|How to use this bank)\b/i.test(text)) {
          context = { ...context, chapterNum: null, chapterTitle: null, groupId: null, groupTitle: null };
          continue;
        }
        continue;
      }
    }

    if (!current) continue;

    if (DETAILS_OPEN.test(line)) {
      inDetails = true;
      current.details = [];
      continue;
    }
    if (DETAILS_CLOSE.test(line)) {
      inDetails = false;
      continue;
    }
    if (inDetails) {
      current.details.push(line);
      continue;
    }
    current.bodyLines.push(line);
  }

  return blocks;
}

/**
 * Turn a block's body lines into statements (shared context) and options (the
 * selectable answers). The `Choose one:` marker separates the two; without a
 * marker, every option-like line is a selectable option.
 */
function resolveBody(block) {
  const markerIndex = block.bodyLines.findIndex((l) => CHOOSE_ONE.test(l));
  const hasMarker = markerIndex !== -1;

  const statementLines = hasMarker ? block.bodyLines.slice(0, markerIndex) : [];
  const optionLines = hasMarker ? block.bodyLines.slice(markerIndex + 1) : block.bodyLines;

  const statements = [];
  for (const line of statementLines) {
    if (BLANK.test(line)) continue;
    const dash = line.match(STMT_DASH);
    const stmt = dash
      ? { key: dash[1].toLowerCase(), text: dash[2].trim() }
      : matchOptionLike(line);
    if (stmt && !statements.some((s) => s.key === stmt.key)) statements.push(stmt);
  }

  const options = [];
  const push = (key, text) => {
    if (!options.some((o) => o.key === key)) options.push({ key, text });
  };

  const stemExtras = [];
  for (const line of optionLines) {
    if (BLANK.test(line) || CHOOSE_ONE.test(line)) continue;

    const inline = expandInlineOptions(line);
    if (inline) {
      for (const o of inline) push(o.key, o.text);
      continue;
    }
    const opt = matchOptionLike(line);
    if (opt) {
      push(opt.key, opt.text);
      continue;
    }
    const t = line.trim();
    if (t && !/^<\/?(details|summary)/i.test(t)) stemExtras.push(t);
  }

  return { statements, options, stemExtras };
}

/* ------------------------------------------------------- teaching guide split */

const PART_LABEL = /^Part\s+(I|II)\s*[—–-]\s*(.+)$/;
const PART_APPENDICES = /^RES\s+[12]B\s+appendices$/i;

function trimBlank(lines) {
  const out = [...lines];
  while (out.length && BLANK.test(out[0])) out.shift();
  while (out.length && BLANK.test(out[out.length - 1])) out.pop();
  return out;
}

/** Decide whether a guide heading starts a new page. */
function guidePageHeading(level, text) {
  const chapter = text.match(/^Chapter\s+(\d+)\s*[—–-]\s*(.+)$/i);
  if (chapter) return { kind: 'chapter', num: Number(chapter[1]), title: chapter[2].trim(), level };

  const appendix = text.match(/^Appendix\s+([A-Z])\b\s*[—–-]?\s*(.*)$/i);
  if (appendix && level <= 3) {
    const letter = appendix[1].toUpperCase();
    const rest = appendix[2].trim();
    return {
      kind: 'appendix',
      num: null,
      letter,
      title: `Appendix ${letter}${rest ? ` — ${rest}` : ''}`,
      level,
    };
  }

  if (/^Final revision checklist$/i.test(text)) {
    return { kind: 'section', num: null, title: 'Final revision checklist', level };
  }
  if (/^Cross-chapter exam method$/i.test(text)) {
    return { kind: 'section', num: null, title: 'Cross-chapter exam method', level };
  }
  return null;
}

/**
 * Split a teaching guide into pages: leading intro plus one page per chapter,
 * appendix and closing section. Each page's `lines` excludes its own heading.
 * `exam` is accepted for symmetry with `parseBank` and future format-specific
 * rules, but the current splits are format-independent.
 */
export function splitGuide(exam, lines) {
  void exam;
  const pages = [];
  const usedIds = new Set();
  const intro = [];
  let current = null;
  let part = { id: null, title: null };
  let partIndex = 0;

  const flush = () => {
    if (current) {
      current.lines = trimBlank(current.lines);
      pages.push(current);
      current = null;
    }
  };

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    const line = raw.replace(/\s+$/, '');
    const heading = line.match(/^(#{1,6})\s+(.*\S)\s*$/);

    if (heading) {
      const level = heading[1].length;
      const text = heading[2].trim();

      const partMatch = text.match(PART_LABEL);
      if (partMatch && level === 1) {
        flush();
        partIndex += 1;
        // Prefer the module code in the part title (`RES 1B`, `RES 2B`) so that
        // guide ids line up with the bank's `[RES 1B §x.y]` source tags.
        const code = partMatch[2].match(/\b([12]B)\b/);
        part = {
          id: code ? code[1] : partMatch[1],
          title: `Part ${partMatch[1]} — ${partMatch[2].trim()}`,
        };
        continue;
      }

      if (PART_APPENDICES.test(text)) {
        // RES 1B lists its appendices as child headings (each becomes a page);
        // RES 2B summarises theirs as bullets under this one heading, so the
        // group itself becomes a page.
        let hasChildAppendix = false;
        for (let j = i + 1; j < lines.length; j += 1) {
          const next = lines[j].match(/^(#{1,6})\s+(.*\S)\s*$/);
          if (!next) continue;
          if (next[1].length <= level) break;
          if (/^Appendix\s+[A-Z]\b/i.test(next[2].trim())) {
            hasChildAppendix = true;
            break;
          }
        }
        if (hasChildAppendix) continue;

        flush();
        const id = part.id ? `${part.id}-appendices` : 'appendices';
        current = {
          id,
          kind: 'appendix-group',
          num: null,
          title: `${part.id ?? 'RES'} appendices`,
          level,
          partId: part.id,
          partTitle: part.title,
          order: partIndex * 1000 + 90,
          slug: slugify(`${part.id ? `${part.id}-` : ''}appendices`),
          lines: [],
        };
        usedIds.add(id);
        continue;
      }

      const spec = guidePageHeading(level, text);
      if (spec) {
        flush();
        const baseId =
          spec.kind === 'chapter'
            ? part.id
              ? `${part.id}-${spec.num}`
              : String(spec.num)
            : spec.kind === 'appendix'
              ? part.id
                ? `${part.id}-appendix-${spec.letter}`
                : `appendix-${spec.letter}`
              : slugify(spec.title);
        let id = baseId;
        let suffix = 1;
        while (usedIds.has(id)) id = `${baseId}-${++suffix}`;
        usedIds.add(id);

        const order =
          spec.kind === 'chapter'
            ? partIndex * 1000 + spec.num
            : spec.kind === 'appendix'
              ? partIndex * 1000 + 100 + spec.letter.charCodeAt(0) - 64
              : 9000 + pages.length;

        const slugTail = spec.title.replace(/^Appendix [A-Z]\s*[—–-]?\s*/i, '');
        current = {
          id,
          kind: spec.kind,
          num: spec.num ?? null,
          title: spec.title,
          level,
          partId: part.id,
          partTitle: part.title,
          order,
          slug: slugify(
            spec.kind === 'chapter'
              ? `chapter-${part.id ? `${part.id}-` : ''}${spec.num}-${spec.title}`
              : spec.kind === 'appendix'
                ? `${part.id ? `${part.id}-` : ''}appendix-${spec.letter}-${slugTail}`
                : spec.title,
          ),
          lines: [],
        };
        continue;
      }
    }

    if (current) current.lines.push(line);
    else intro.push(line);
  }
  flush();

  return { intro: trimBlank(intro), pages };
}

/** Shift body headings so a page's former title level maps onto H2. */
export function shiftHeadings(lines, fromLevel) {
  const delta = 2 - fromLevel;
  if (delta === 0) return lines;
  return lines.map((line) => {
    const m = line.match(/^(#{1,6})(\s+.*)$/);
    if (!m) return line;
    const level = Math.max(2, Math.min(6, m[1].length + delta));
    return '#'.repeat(level) + m[2];
  });
}

/**
 * Extract chapter/appendix metadata from a guide. Used to label bank chapters
 * and to construct the sidebar. Note that RES 12B's chapter ids are
 * part-qualified (`1B-3`, `2B-4`) to match the bank's source tags.
 */
export function extractGuideChapters(exam, lines) {
  const { pages } = splitGuide(exam, lines);
  return pages
    .filter((p) => p.kind === 'chapter' || p.kind === 'appendix' || p.kind === 'appendix-group')
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

/* -------------------------------------------------------------- entry point */

/**
 * Parse a bank into normalised questions.
 * @param {object} exam  entry from scripts/lib/exams.mjs
 * @param {string[]} lines  bank markdown, split into lines
 * @param {object[]} guideChapters  from extractGuideChapters
 */
export function parseBank(exam, lines, guideChapters) {
  const issues = [];
  const warnings = [];
  const blocks = scanBlocks(exam.bankFormat, lines);
  const titleById = new Map(guideChapters.map((c) => [c.id, c]));

  const questions = blocks.map((block) => {
    const { options, statements, stemExtras } = resolveBody(block);
    const { answerRaw, rationale } = parseAnswerBlock(block.details ?? []);
    const stem = [block.stem, ...stemExtras].filter(Boolean).join(' ').trim();

    // --- chapter assignment -------------------------------------------------
    let chapterId = null;
    let chapterTitle = null;
    let partId = null;

    if (exam.chapterSource === 'sourceTag' && block.sourceRef) {
      // `[RES 1B §1.3]` → chapter 1B-1; `[RES 1B Appendix A]` → 1B-appendix-A.
      // RES 2B §7 is the chapter the guide states is shared with RES 1B, so it is
      // remapped. Both parts' appendices are now separate pages (A–G, A–H), so an
      // appendix tag always resolves to `<part>-appendix-<letter>`.
      // `[RES 12B Final revision checklist]` addresses the closing section, which
      // carries no part and no number.
      if (/RES\s*12B\s*Final revision checklist/i.test(block.sourceRef)) {
        chapterId = 'final-revision-checklist';
        partId = '2B';
      }
      const tag = chapterId
        ? null
        : block.sourceRef.match(/RES\s*(1B|2B)\s*(?:§\s*(\d+)|(?:Appendix|Appendices)\s+([A-Z]))/i);
      if (tag) {
        partId = tag[1].toUpperCase();
        if (tag[2]) {
          const num = Number(tag[2]);
          chapterId = partId === '2B' && num === 7 ? '1B-7' : `${partId}-${num}`;
        } else {
          chapterId = `${partId}-appendix-${tag[3].toUpperCase()}`;
        }
      }
    } else if (block.context.chapterNum != null) {
      partId = block.context.part ? (block.context.part.includes('2B') ? '2B' : '1B') : null;
      chapterId = block.context.part
        ? `${partId}-${block.context.chapterNum}`
        : String(block.context.chapterNum);
    } else if (block.context.groupId) {
      chapterId = block.context.groupId;
    }

    const known = chapterId ? titleById.get(chapterId) : null;
    if (known) {
      chapterTitle = known.title;
      partId = known.partId ?? partId;
    } else if (chapterId === 'mixed') {
      chapterTitle = 'Rapid mixed review';
    } else if (chapterId) {
      chapterTitle = block.context.chapterTitle ?? chapterId;
      issues.push(`Q${block.number}: chapter "${chapterId}" has no matching guide chapter.`);
    } else {
      issues.push(`Q${block.number}: no chapter could be derived.`);
    }

    // --- answer keys --------------------------------------------------------
    const answerKeys = extractAnswerKeys(answerRaw);
    if (answerKeys.length === 0) issues.push(`Q${block.number}: could not resolve an answer key from "${answerRaw}".`);

    const optionKeys = new Set(options.map((o) => o.key));
    for (const key of answerKeys) {
      if (!optionKeys.has(key)) {
        issues.push(`Q${block.number}: answer key "${key}" has no matching option (options: ${[...optionKeys].join(',') || 'none'}).`);
      }
    }
    if (options.length < 2) issues.push(`Q${block.number}: only ${options.length} option(s) parsed.`);

    // The answer keys are authoritative for how the UI must behave; the type tag
    // is informational. A few source questions disagree (for example, tagged
    // `[Multiple response]` but stating a single answer), so surface those as
    // warnings rather than hard failures.
    const isMulti = answerKeys.length > 1;
    const typeDeclaredMulti = /multiple\s*response/i.test(block.type ?? '');
    if (answerKeys.length > 0 && typeDeclaredMulti !== isMulti) {
      warnings.push(
        `Q${block.number}: tagged "${block.type}" but has ${answerKeys.length} answer key(s) — answering as ${isMulti ? 'multi' : 'single'} choice.`,
      );
    }

    return {
      id: `${exam.id}-q${block.number}`,
      number: block.number,
      examId: exam.id,
      partId: partId ?? null,
      setId: block.context.setId ?? null,
      chapterId: chapterId ?? null,
      chapterTitle: chapterTitle ?? null,
      type: block.type ?? null,
      sourceRef: block.sourceRef ?? null,
      stem,
      statements,
      options,
      answerKeys,
      answerRaw,
      isMulti,
      typeDeclaredMulti,
      rationale: rationale || null,
    };
  });

  return { questions, issues, warnings };
}
