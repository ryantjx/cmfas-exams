# CMFAS Exams — study site

A static study site for the Singapore capital markets exams — **RES 12B**,
**FMRP** and **CM-SIP** — built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build), deployed to GitHub Pages.

**Live site:** <https://ryantjx.github.io/cmfas-exams/>

## What is here

| | |
| --- | --- |
| **Study guides** | One page per chapter, split automatically from the repo's `*_AI.md` teaching guides. |
| **Chapter quiz** | Every question in a chosen chapter, untimed, answers revealed on submit. |
| **Daily quiz** | 30 questions drawn at random from the whole bank, re-rolled on every load. |
| **Mock exam** | The real paper's length, timing and pass mark: strict timer, auto-submit, no feedback until the end, question navigator, flag-for-review, shuffled questions and options, and a score report with a per-chapter breakdown. |

Nothing is persisted — no accounts, no cookies, no `localStorage`. Progress lives
only in the open page.

## Source of truth

The markdown in each exam folder is **never modified** by the build:

```
cmsip/   CMSIP.md   CMSIP_AI.md   CMSIP_QUESTIONS.md
fmrp/    FMRP.md    FMRP_AI.md    FMRP_QUESTIONS.md
res12b/  RES12B.md  RES12B_AI.md  RES12B_QUESTIONS.md
121026_EXAMS.md
```

Everything under `src/content/docs/`, `src/data/banks/`, `public/banks/` and
`public/downloads/` is **generated** and gitignored. Edit the markdown above, not
the generated output.

## Commands

```bash
npm install
npm run dev        # generate + dev server (regenerates content first)
npm run gen        # parse banks and regenerate the content tree
npm run test:parser  # assert bank invariants (counts, answer keys, chapters)
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
scripts/build-content.mjs   markdown → Starlight pages + PDF copies
src/components/             QuizRunner (the quiz engine) and QuizLauncher
src/lib/quiz.ts             sampling, shuffling, scoring, timers
src/styles/custom.css       quiz UI
```

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
