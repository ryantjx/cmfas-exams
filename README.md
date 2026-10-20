# CMFAS Exams — study site

A static study site for the Singapore capital markets exams — **RES 12B**,
**FMRP** and **CM-SIP** — built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build), deployed to GitHub Pages.

**Live site:** <https://ryantjx.github.io/cmfas-exams/>

## What is here

| | |
| --- | --- |
| **Study guides** | One page per chapter, split automatically from the repo's `*_AI.md` teaching guides. |
| **Chapter quiz** | Every question in a chosen chapter, untimed, with the answer and explanation revealed as you answer. |
| **Daily quiz** | 30 questions from the whole bank. The set is seeded from the calendar day, so it is the same all day and changes at local midnight; the answer is revealed as you answer. |
| **Mock exam** | The real paper's length, timing and pass mark: strict timer, auto-submit, no feedback until the end, question navigator, flag-for-review, shuffled questions and options, and a score report with a per-chapter breakdown. |

Nothing is persisted — no accounts, no cookies, no `localStorage`. Progress lives
only in the open page.

## Source of truth

The markdown under `notes/` is **never modified** by the build:

```
notes/
  121026_EXAMS.md            study plan
  cmsip/    CMSIP.md   CMSIP_AI.md   CMSIP_QUESTIONS.md
  fmrp/     FMRP.md    FMRP_AI.md    FMRP_QUESTIONS.md
  res12b/   RES12B.md  RES12B_AI.md  RES12B_QUESTIONS.md
```

Each exam folder also holds the official provider PDF, the pre-generated
`output/html` and `output/pdf` artefacts, and the `*_AI.md` teaching guide that
the site splits into one page per chapter.

Everything under `src/content/docs/`, `src/data/`, `public/banks/` and
`public/downloads/` is **generated** and gitignored. Edit the markdown above, not
the generated output.

## Commands

```bash
npm install
npm run dev        # generate + dev server (regenerates content first)
npm run gen        # parse banks and regenerate the content tree
npm run test:parser  # assert bank invariants (counts, answer keys, chapters)
npm run lint:notes   # audit the three teaching guides (advisory; --strict to fail)
npm run check      # Astro/TypeScript diagnostics
npm run build      # generate + static build into dist/
npm run verify     # test:parser + check + build
npm run preview    # serve dist/ locally
```

Locally the site is served under the base path:
<http://localhost:4321/cmfas-exams/>

## Layout

```
scripts/lib/exams.mjs       exam config, real-exam facts, PDF sources
scripts/lib/questions.mjs   the three question-bank parsers + guide splitter
scripts/lib/util.mjs        filesystem and slug helpers
scripts/build-banks.mjs     markdown → normalised question JSON
scripts/build-content.mjs   markdown → Starlight pages, sidebar and PDF copies
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
