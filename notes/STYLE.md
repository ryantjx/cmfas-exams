# Study-guide house style

Applies to the three teaching guides — `cmsip/CMSIP_AI.md`, `fmrp/FMRP_AI.md`,
`res12b/RES12B_AI.md` — split by `scripts/lib/questions.mjs` into one page per
chapter. Each is a **full but condensed** version of the official study guide:
the same coverage, the official guide's instructional voice, without the flat
word-dump, meta-commentary and repeated caveats.

## Voice

- Write as the guide, not about it. Never "the source states", "the guide
  explains", "this package does not…".
- Direct and instructional: "MAS requires…", "Best execution means…".
- British spelling throughout (recognised, behaviour, normalisation).
- Match verbs to evidence: *is*, *requires*, *must* — not *may perhaps suggest*.
- State one caveat once, in front matter, not on every chapter. Per-chapter
  "as at <date>; verify current" notes are noise; delete them.

## Chapter shape

```
## Chapter N — Title

One- to three-line orientation: what the chapter governs and why it is tested.

### Learning objectives        (optional — include where it adds value)
- Three to five bullets, each a testable capability.

### N.1 Section title
… prose, then bullets or a table …

### Exam cues
- What is tested, the distinction or number that decides it, and the trap.
```

- **Exam cues** (or a chapter-closing **Summary** carrying the same job) ends
  every chapter: what is tested, the deciding distinction, numbers to memorise,
  and the common trap. This is the block that makes the guide examinable rather
  than descriptive. It is required on every chapter.
- **Learning objectives** are optional; the chapter orientation line may carry
  the same job more concisely. Use a heading for them only where the chapter
  covers several distinct capabilities.
- Section numbering follows the official syllabus. Do not merge ranges into one
  heading (`1.4.7–1.4.8`); give each section its own heading.

## Density

- Prose ≤4 sentences per section. Prefer bullets for enumerations and a table
  for any list of two or more comparable items.
- Convert distinctions the exam tests (exchange vs OTC, AI/II/EI, CAR vs CKA,
  agent vs principal, EIP vs SIP) into tables.
- Formulas: show the formula, define every symbol, then a worked example with
  the arithmetic shown step by step. The current guides bury calculations in a
  sentence; unpack them.

## Build contract (do not break)

The splitter keys off exact heading patterns. Numbering may change to match the
syllabus; these shapes may not:

- `#`/`## Chapter N — Title` (em dash, en dash or hyphen all accepted).
- `# Part I — RES 1B` / `# Part II — RES 2B` before RES 12B's chapters.
- `### Appendix X` as children under `## RES 1B appendices` (each becomes a page).
- `## RES 2B appendices` as a single heading with bullets beneath (one page).
- Chapter question-bank ids are derived from these headings — see
  `scripts/lib/questions.mjs` and `scripts/lib/exams.mjs`.

Run `npm run lint:notes` after editing; `npm run verify` must pass.
