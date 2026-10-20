# Study-guide house style

Applies to the three teaching guides in `cmsip/guide/`, `fmrp/guide/` and
`res12b/guide/` — **one markdown file per chapter, appendix and closing
section**, assembled in `order` by `scripts/lib/guide.mjs`. Each guide is a
**full version** of the official study guide: the same coverage, the official
guide's instructional voice, without the flat word-dump, meta-commentary and
repeated caveats.

## Voice

- Write as the guide, not about it. Never "the source states", "the guide
  explains", "this package does not…". `npm run audit` flags these as
  meta-commentary defects.
- Direct and instructional: "MAS requires…", "Best execution means…".
- British spelling throughout (recognised, behaviour, normalisation).
- Match verbs to evidence: *is*, *requires*, *must* — not *may perhaps suggest*.
- State one caveat once, in front matter, not on every chapter. Per-chapter
  "as at <date>; verify current" notes are noise; delete them.
- Flag a genuine internal inconsistency in the official guide **inline**, as a
  direct instruction ("the two definitions differ sign; state your convention"),
  never as a remark about the source document.

## File frontmatter (build contract)

Every file under `notes/<exam>/guide/` carries:

```yaml
---
id: '1B-3'                        # stable; the question bank keys off this
kind: 'chapter'                   # chapter | appendix | appendix-group | section | intro
num: 3                            # required number for chapters, null otherwise
part: '1B'                        # '1B' | '2B' | null
title: 'Market Conduct'
order: 1003                       # reading order and sidebar position
slug: 'chapter-1b-3-market-conduct'
---
```

`id`, `slug` and `order` are **pinned, never derived from the title**: correcting
a title to the official wording must not move a URL or orphan questions. Filenames
are `<NN>-<slug>.md`, appendices `90-appendix-<letter>.md`, closing sections `95-*`,
and the intro `00-introduction.md`. A file's body opens with `# Title`; that line is
dropped on generation, so each page carries exactly one H1, taken from frontmatter.

## Chapter shape

```
# Chapter N — Title

One- to three-line orientation: what the chapter governs and why it is tested.

## Learning Objectives
- Three to five bullets, each a testable capability.

## N.1 Section title
… prose, then bullets or a table …

## Exam cues
- What is tested, the distinction or number that decides it, and the trap.
```

- **Exam cues** (or a chapter-closing **Summary** carrying the same job) ends
  every chapter: what is tested, the deciding distinction, numbers to memorise,
  and the common trap. This is the block that makes the guide examinable rather
  than descriptive. It is required on every chapter and `npm run lint:notes`
  enforces it.
- **Learning objectives** are optional in principle but the official guide has
  them in 12/12 CM-SIP chapters and throughout FMRP, so reproduce them.
- Section numbering follows the official syllabus exactly, including four-level
  numbers such as `1.2.2.1`. **Do not merge ranges into one heading**
  (`1.4.7–1.4.8`); give every official section its own heading. `npm run audit`
  compares the headings against `scripts/lib/syllabus.mjs` and reports both
  missing sections and headings that are not in the manifest.

## Density

- Prose ≤4 sentences per section. Prefer bullets for enumerations and a table
  for any list of two or more comparable items.
- Convert distinctions the exam tests (exchange vs OTC, AI/II/EI, CAR vs CKA,
  agent vs principal, EIP vs SIP) into tables.
- Formulas: show the formula, define every symbol, then a worked example with
  the arithmetic shown step by step.
- Restore every number, threshold, date and worked example the official guide
  contains. A threshold without its number, or a worked example reduced to a
  sentence, is a coverage gap even when the section heading exists.

## Mathematics

Write formulas as LaTeX, not inline code:

- Inline maths uses `$$…$$` (e.g. `$$n$$`, `$$\beta$$`). Display maths also uses
  `$$…$$`; put a blank line before and after so it renders as a centred block.
- **Single-dollar `$…$` math is disabled**, because the guides are full of
  currency amounts (`$1,305`, `S$200,000`) that must stay literal. Write money as
  plain text — escape a leading dollar in display maths as `\$` if needed.
- The website renders this with KaTeX; the printable PDFs render it with
  pandoc/xelatex (`pandoc … -f gfm` — no special flag needed, since single-dollar
  math is off by default there too).
- Keep prose descriptions of calculations as prose. Use maths only for the
  formula itself and for symbol definitions.

## Build contract (do not break)

- Frontmatter keys `id`, `kind`, `num`, `part`, `title`, `order`, `slug` must all
  be present and valid; `scripts/lib/guide.mjs` rejects a file that omits one or
  reuses an `id`, `slug` or `order`.
- **Never change a chapter's `num`, `id` or `slug`.** The question bank derives
  `chapterId` from the number (or from the `[RES 1B §x.y]` tag), so renaming is
  safe only for `title`.
- RES 12B keeps its part prefix: `part: '1B'` or `'2B'`, and the part-qualified
  ids `1B-3` / `2B-4`. Its `2B-7` is intentionally absent — the AML chapter is
  carried once, under `1B-7`, and the manifest marks it `sharedWith`.
- Run `npm run audit` (coverage must be complete for the chapter you touched)
  and `npm run lint:notes` after editing; `npm run verify` must pass.
