# CMFAS Exams — study site

A static study site for the Singapore capital markets exams — **RES 12B**,
**FMRP** and **CM-SIP** — built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build), deployed to GitHub Pages.

**Live site:** <https://ryantjx.github.io/cmfas-exams/>

## What is here

| | |
| --- | --- |
| **Study guides** | One page per chapter and per appendix, split automatically from the repo's per-chapter teaching-guide markdown. |
| **Chapter quiz** | Every question in a chosen chapter, untimed, with the answer and explanation revealed as you answer. |
| **Daily quiz** | 30 questions drawn at random from the whole bank, re-rolled on every load. |
| **Mock exam** | The real paper's length, timing and pass mark: strict timer, auto-submit, no feedback until the end, question navigator, flag-for-review, shuffled questions and options, and a score report with a per-chapter breakdown. |

Nothing is persisted — no accounts, no cookies, no `localStorage`. Progress lives
only in the open page.

CMSIP: `notes/cmsip/CM-SIP Study Guide v1.1 - January 2026 (FINAL).pdf`
RES12B: `notes/res12b/RES 12B Combined.pdf`
FMRP: `notes/fmrp/FMRP Study Guide v3.2.pdf`


## Source of truth

The markdown under `notes/` is **never modified** by the build:

```
notes/
  121026_EXAMS.md            study plan
  cmsip/    CMSIP.md   CMSIP_QUESTIONS.md   guide/*.md
  fmrp/     FMRP.md    FMRP_QUESTIONS.md    guide/*.md
  res12b/   RES12B.md  RES12B_QUESTIONS.md  guide/*.md
```

Each exam's teaching guide is **one markdown file per chapter, appendix and
closing section** under `notes/<exam>/guide/`, with YAML frontmatter as the
build contract:

```yaml
---
id: '1B-3'                        # stable chapter id; the question bank keys off this
kind: 'chapter'                   # chapter | appendix | appendix-group | section | intro
num: 3                            # syllabus chapter number, or null
part: '1B'                        # '1B' | '2B' | null
title: 'Market Conduct'
order: 1003                       # reading order and sidebar position
slug: 'chapter-1b-3-market-conduct'
---
```

`id`, `slug` and `order` are **pinned rather than derived from the title**, so
correcting a chapter title to the official syllabus wording cannot move a URL or
orphan its questions. Splitting the guides this way is what lets a single chapter
be rewritten without touching a 1,200-line file; `scripts/split-guides.mjs`
performed the one-off migration and asserted that every page still rendered
identically afterwards.

Each exam folder also holds the official provider PDF and the pre-generated
`output/html` and `output/pdf` artefacts.

Everything under `src/content/docs/`, `src/data/`, `public/banks/` and
`public/downloads/` is **generated** and gitignored. Edit the markdown above, not
the generated output.

## Commands

```bash
npm install
npm run dev        # generate + dev server (regenerates content first)
npm run gen        # parse banks and regenerate the content tree
npm run audit      # syllabus coverage + markdown defect check (--strict to fail)
npm run test:parser  # assert bank invariants (counts, answer keys, chapters)
npm run lint:notes   # audit the three teaching guides (advisory; --strict to fail)
npm run check      # Astro/TypeScript diagnostics
npm run build      # generate + static build into dist/
npm run verify     # test:parser + check + build
npm run pdf        # regenerate the printable HTML/PDF artefacts (needs pandoc)
npm run preview    # serve dist/ locally
```

Locally the site is served under the base path:
<http://localhost:4321/cmfas-exams/>

## Layout

```
scripts/lib/exams.mjs       exam config, real-exam facts, PDF sources
scripts/lib/guide.mjs       per-chapter guide loader + frontmatter contract
scripts/lib/syllabus.mjs    canonical official section manifest (coverage baseline)
scripts/lib/questions.mjs   the three question-bank parsers
scripts/lib/util.mjs        filesystem and slug helpers
scripts/build-banks.mjs     markdown → normalised question JSON
scripts/build-content.mjs   markdown → Starlight pages, sidebar and PDF copies
scripts/audit-guides.mjs    coverage vs the syllabus manifest + defect scan
scripts/build-pdfs.mjs      pandoc/XeLaTeX build of the printable artefacts
src/components/             QuizRunner (the quiz engine), PracticePicker, ThemeToggle
src/lib/quiz.ts             sampling, shuffling, scoring, timers
src/styles/custom.css       quiz UI
```

Formulas in the guides are written as **LaTeX maths** (`$$…$$`) and rendered with
KaTeX, configured in `astro.config.mjs` (remark-math + rehype-katex on the
`unified` processor). Single-dollar `$…$` maths is deliberately disabled, so
currency amounts like `$1,305` stay literal. See `notes/STYLE.md` for the
authoring rules.

The **sidebar** is generated too: `scripts/build-content.mjs` writes
`src/data/sidebar.json`, which `astro.config.mjs` reads, so every guide chapter is
listed explicitly underneath *Study guide* — e.g. *CM-SIP → Study guide → 2 Futures,
Forwards and Swaps* — and the navigation can never drift from the content tree.
Chapter labels carry the syllabus number; the URL slugs do not, so links stay
stable.

The three question banks use **three different markdown conventions**
(`**1. [Type]**` for CM-SIP; `### 1. **[Type]** [REF]` for FMRP and RES 12B,
with `Choose one:` combination blocks and uppercase/lowercase answer styles).
`scripts/test-parser.mjs` guards all of it — `npm run verify` fails the build if a
bank stops parsing cleanly.

## Deployment

`.github/workflows/deploy.yml` deploys `main` to GitHub Pages on every push
(GitHub Actions flow, so only `dist/` is published and the raw markdown and PDFs
are not exposed as pages). It runs the parser tests and type check before
building, and enables Pages automatically on the first run.

If the repository is ever renamed or served from a custom domain, update `site`
and `base` in `astro.config.mjs` **and** `BASE` in `scripts/build-content.mjs`.
