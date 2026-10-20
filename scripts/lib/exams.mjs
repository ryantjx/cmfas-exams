/**
 * Exam configuration. The repo-root markdown is the single source of truth; the
 * generator reads these paths and never rewrites them.
 *
 * Real-exam facts come from 121026_EXAMS.md (verified against the IBF portal
 * references recorded there):
 *   - FMRP   : 100 MCQ / 2 h  / 75% pass (the FMRP.md stub prints 70% — a known
 *              discrepancy; the real mark is used for the mock's pass gate).
 *   - CM-SIP :  80 MCQ / 2.5 h / 70% pass (includes 6 case studies, 18 Q).
 *   - RES 12B:  60 MCQ / 1.5 h / 75% pass.
 *
 * `bankFormat` selects the question parser:
 *   - 'bold'    → `**1. [Type]** stem`            (CM-SIP)
 *   - 'heading' → `### 1. **[Type]** [REF] stem`  (FMRP, RES 12B)
 *
 * `chapterSource` selects how a question is assigned to a chapter:
 *   - 'heading'   → from the `## Chapter N` heading above the question.
 *   - 'sourceTag' → from the `[RES 1B §1.3]` tag in the question header.
 */

export const DAILY_QUIZ_SIZE = 30;

export const EXAMS = [
  {
    id: 'cmsip',
    name: 'CM-SIP',
    shortName: 'CM-SIP',
    title: 'CM-SIP — Derivatives and Collective Investment Schemes (SIP)',
    subtitle: 'Specified Investment Products: derivatives and structured products',
    bank: 'notes/cmsip/CMSIP_QUESTIONS.md',
    bankFormat: 'bold',
    chapterSource: 'heading',
    // The guide is one markdown file per chapter; `guide` is the legacy monolith
    // that `scripts/split-guides.mjs` splits from and that is deleted afterwards.
    guideDir: 'notes/cmsip/guide',
    guide: 'notes/cmsip/CMSIP_AI.md',
    stub: 'notes/cmsip/CMSIP.md',
    guideIntroTitle: 'Introduction and exam orientation',
    expectedQuestions: 232,
    realExam: {
      questions: 80,
      minutes: 150,
      passPct: 70,
      note: '80 MCQ including 6 case studies (18 questions), 2.5 hours, 70% pass.',
    },
    pdfs: [
      {
        src: 'notes/cmsip/CM-SIP Study Guide v1.1 - January 2026 (FINAL).pdf',
        name: 'CM-SIP Official Study Guide v1.1 (January 2026)',
        kind: 'official',
      },
      {
        src: 'notes/cmsip/output/pdf/CMSIP_AI.pdf',
        name: 'CM-SIP Study Guide (printable PDF)',
        kind: 'generated',
      },
      {
        src: 'notes/cmsip/output/pdf/CMSIP_QUESTIONS.pdf',
        name: 'CM-SIP Question Bank (printable PDF)',
        kind: 'generated',
      },
    ],
  },
  {
    id: 'fmrp',
    name: 'FMRP',
    shortName: 'FMRP',
    title: 'FMRP — Financial Markets Regulatory Practices',
    subtitle: 'Conduct, ethics and regulatory practice for financial markets',
    bank: 'notes/fmrp/FMRP_QUESTIONS.md',
    bankFormat: 'heading',
    chapterSource: 'heading',
    guideDir: 'notes/fmrp/guide',
    guide: 'notes/fmrp/FMRP_AI.md',
    stub: 'notes/fmrp/FMRP.md',
    guideIntroTitle: 'Introduction and core learning sequence',
    expectedQuestions: 317,
    realExam: {
      questions: 100,
      minutes: 120,
      passPct: 75,
      note: '100 MCQ, 2 hours, 75% pass. Note: the FMRP syllabus stub in this repo prints 70%, but the current IBF pass mark is 75% — the mock grades against 75%.',
    },
    pdfs: [
      {
        src: 'notes/fmrp/FMRP Study Guide v3.2.pdf',
        name: 'FMRP Official Study Guide v3.2',
        kind: 'official',
      },
      {
        src: 'notes/fmrp/output/pdf/FMRP_AI.pdf',
        name: 'FMRP Teaching Guide (printable PDF)',
        kind: 'generated',
      },
      {
        src: 'notes/fmrp/output/pdf/FMRP_QUESTIONS.pdf',
        name: 'FMRP Question Bank (printable PDF, questions only)',
        kind: 'generated',
      },
    ],
  },
  {
    id: 'res12b',
    name: 'RES 12B',
    shortName: 'RES 12B',
    title: 'RES 12B — Rules, Ethics and Skills for Securities and Derivatives Dealers',
    subtitle: 'Non-exchange members: RES 1B (securities) and RES 2B (derivatives)',
    bank: 'notes/res12b/RES12B_QUESTIONS.md',
    bankFormat: 'heading',
    chapterSource: 'sourceTag',
    guideDir: 'notes/res12b/guide',
    guide: 'notes/res12b/RES12B_AI.md',
    stub: 'notes/res12b/RES12B.md',
    guideIntroTitle: 'Introduction and coverage map',
    expectedQuestions: 332,
    realExam: {
      questions: 60,
      minutes: 90,
      passPct: 75,
      note: '60 MCQ, 1.5 hours, 75% pass. RES 12B is a combined paper (RES 1B + RES 2B); failing either part fails the whole paper.',
    },
    pdfs: [
      {
        src: 'notes/res12b/RES 12B Combined.pdf',
        name: 'RES 12B Official Study Guide (combined)',
        kind: 'official',
      },
      {
        src: 'notes/res12b/output/pdf/RES12B_AI.pdf',
        name: 'RES 12B Study Guide (printable PDF)',
        kind: 'generated',
      },
      {
        src: 'notes/res12b/output/pdf/RES12B_QUESTIONS.pdf',
        name: 'RES 12B Question Bank (printable PDF, questions only)',
        kind: 'generated',
      },
    ],
  },
];

export const STUDY_PLAN = {
  src: 'notes/121026_EXAMS.md',
  title: 'Study plan',
  description:
    'Exam sequencing, booking windows, study load and sitting strategy across RES 12B, FMRP and CM-SIP.',
  pdf: { src: 'notes/121026_EXAMS.pdf', name: 'Study plan (printable PDF)' },
};

export const HOME = {
  title: 'CMFAS / IBF Exam Study Site',
  description:
    'Study guides, chapter quizzes, daily quizzes and full mock exams for the Singapore capital markets exams: RES 12B, FMRP and CM-SIP.',
};

export function getExam(id) {
  const exam = EXAMS.find((e) => e.id === id);
  if (!exam) throw new Error(`Unknown exam id: ${id}`);
  return exam;
}
