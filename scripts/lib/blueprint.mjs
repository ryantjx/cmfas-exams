/**
 * Coverage floors and mock-exam blueprints.
 *
 * Two separate questions live here, and they must agree on one definition of a
 * "coverage unit", so they are defined once:
 *
 *   COVERAGE  How many questions should each syllabus section carry? Used by
 *             `audit-coverage.mjs` and gated in `npm run verify`.
 *
 *   MOCK      What should a mock exam be made of? Used by the quiz island to
 *             sample a paper that resembles the real one instead of drawing
 *             uniformly at random.
 *
 * ---------------------------------------------------------------- unit choice
 *
 * `syllabus.mjs` prints 803 section rows, but they sit at three depths:
 *
 *   x.y        274 rows
 *   x.y.z      446 rows
 *   x.y.z.w     83 rows   (76 of them in CM-SIP §2.3/§4.10/§9.1)
 *
 * The coverage unit is depth <= 3, giving 720 units. A fourth-level row such as
 * "Gold and Other Precious Metal Futures" beside "Base Metal and Ferrous Metal
 * Futures" is a sub-clause of one paragraph, not a separately examinable topic;
 * demanding two questions each would manufacture near-duplicates. `isUnit()`
 * encodes that rule so the audit and the blueprint cannot drift apart.
 *
 * ------------------------------------------------------------------- floors
 *
 * There is one floor: MIN_PER_UNIT questions per coverage unit. There is
 * deliberately no per-chapter absolute minimum. A chapter is only as "thin" as its
 * weakest section, and an absolute floor would force questions on
 * "participants in the derivatives market" that duplicate the securities chapter
 * covering the same institutions.
 */

import { SYLLABUS } from './syllabus.mjs';

/** Questions each depth<=3 syllabus section should carry. */
export const MIN_PER_UNIT = 2;

/** Maximum depth that still counts as a coverage unit (`x.y.z` = 3). */
export const UNIT_MAX_DEPTH = 3;

/** Number of dots+1 in a section number, e.g. `4.7.1` -> 3. */
export function sectionDepth(number) {
  return String(number).split('.').length;
}

/** Is this syllabus row a coverage unit? Depth <= 3. */
export function isUnit(number) {
  return sectionDepth(number) <= UNIT_MAX_DEPTH;
}

/**
 * Pages exempt from the coverage floor, with the reason printed in the audit so
 * the exemption is visible rather than silent.
 */
export const COVERAGE_EXEMPT = {
  res12b: {
    '2B-appendices':
      'seven official appendices are summarised in 19 lines of prose; the guide needs expanding before its bank can be gated',
  },
};

/** Is this page exempt from the coverage floor? */
export function exemptionFor(examId, chapterId) {
  return COVERAGE_EXEMPT[examId]?.[chapterId] ?? null;
}

/**
 * The coverage units of one chapter: syllabus rows at depth <= 3.
 * `sharedWith` chapters carry no sections of their own and return [].
 */
export function chapterUnits(examId, chapterId) {
  const chapter = SYLLABUS[examId]?.chapters?.[chapterId];
  if (!chapter) return [];
  return (chapter.sections ?? [])
    .map(([number]) => number)
    .filter((number) => isUnit(number));
}

/** Every chapter's units for one exam, as `{ chapterId, units[] }`. */
export function examUnits(examId) {
  const chapters = SYLLABUS[examId]?.chapters ?? {};
  return Object.keys(chapters).map((chapterId) => ({
    chapterId,
    units: chapterUnits(examId, chapterId),
  }));
}

/**
 * Mock-exam blueprints.
 *
 * `parts` are sampled first and their sizes sum to the paper length; within a
 * part, `quota` entries allocate the remaining questions by chapter. A `null`
 * quota means "spread the remainder proportionally over this part's chapters by
 * coverage-unit count", which is the default because no official per-topic
 * weighting is published for any of these papers.
 *
 * Only two figures here come from stated exam facts rather than syllabus size:
 * CM-SIP's 18 case-study questions (6 case studies x 3, 22.5% of 80) and RES 12B's
 * 50/50 part split (failing either constituent part fails the paper).
 */
export const MOCK_BLUEPRINTS = {
  cmsip: {
    questions: 80,
    // 6 case studies x 3 questions; the bank's chapter 12 is the case-study chapter.
    fixed: [{ chapterId: '12', count: 18 }],
    // The remaining 62 spread over the taught chapters by coverage-unit count.
    proportional: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  },
  fmrp: {
    questions: 100,
    // No official weightings are published. One third-party site lists a split,
    // but it disclaims the figures as not official, so a proportional draw is used
    // rather than importing numbers that could be wrong.
    fixed: [],
    proportional: ['1', '2', '3', '4', '5', '6', '7', '8'],
  },
  res12b: {
    questions: 60,
    // RES 12B is a combined paper and failing either constituent fails the whole
    // paper, so each part must be represented in proportion to its syllabus.
    parts: [
      { name: '1B', chapters: ['1B-1', '1B-2', '1B-3', '1B-4', '1B-5', '1B-6', '1B-7'], share: 0.5 },
      { name: '2B', chapters: ['2B-1', '2B-2', '2B-3', '2B-4', '2B-5', '2B-6'], share: 0.5 },
    ],
    fixed: [],
    proportional: [],
  },
};

/**
 * Largest-remainder allocation: distribute `total` across `weights` so the parts
 * sum to exactly `total`, giving every entry at least `min` where possible.
 *
 * Largest remainder keeps the proportions honest without the drift that repeated
 * rounding produces (which would otherwise make an 80-question mock sum to 78).
 */
export function allocate(total, weights, min = 0) {
  const entries = Object.entries(weights);
  if (entries.length === 0) return {};

  const sum = entries.reduce((acc, [, w]) => acc + w, 0);
  if (sum <= 0) {
    // No weights to go on: split as evenly as possible.
    const base = Math.floor(total / entries.length);
    let remainder = total - base * entries.length;
    const even = {};
    for (const [key] of entries) {
      even[key] = base + (remainder > 0 ? 1 : 0);
      if (remainder > 0) remainder -= 1;
    }
    return even;
  }

  const exact = entries.map(([key, w]) => ({ key, value: (total * w) / sum }));
  const result = {};
  let assigned = 0;
  for (const e of exact) {
    result[e.key] = Math.max(min, Math.floor(e.value));
    assigned += result[e.key];
  }

  // Give the remaining questions to the entries with the largest fractional part.
  const byRemainder = [...exact].sort(
    (a, b) => (b.value % 1) - (a.value % 1) || a.key.localeCompare(b.key),
  );
  let index = 0;
  while (assigned < total) {
    const target = byRemainder[index % byRemainder.length];
    result[target.key] += 1;
    assigned += 1;
    index += 1;
  }
  // If the `min` floor overshot, trim from the largest allocations.
  while (assigned > total) {
    const largest = Object.entries(result).sort((a, b) => b[1] - a[1])[0];
    if (largest[1] <= 0) break;
    result[largest[0]] -= 1;
    assigned -= 1;
  }
  return result;
}

/**
 * Resolve a blueprint into concrete per-chapter quotas. Pure: it reads only the
 * syllabus, so it is identical on the server and in the browser bundle.
 */
export function resolveBlueprint(examId) {
  const blueprint = MOCK_BLUEPRINTS[examId];
  if (!blueprint) return null;

  const quotas = {};
  let remaining = blueprint.questions;

  for (const entry of blueprint.fixed ?? []) {
    quotas[entry.chapterId] = (quotas[entry.chapterId] ?? 0) + entry.count;
    remaining -= entry.count;
  }

  const weightsFor = (chapterIds) =>
    Object.fromEntries(
      chapterIds.map((chapterId) => {
        // Weight by coverage units, falling back to 1 for a chapter with no
        // numbered sections (a shared or appendix-style page).
        const units = chapterUnits(examId, chapterId).length;
        return [chapterId, Math.max(1, units)];
      }),
    );

  if (blueprint.parts?.length) {
    const partWeights = Object.fromEntries(
      blueprint.parts.map((part) => [part.name, part.share]),
    );
    const perPart = allocate(remaining, partWeights);
    for (const part of blueprint.parts) {
      const share = allocate(perPart[part.name], weightsFor(part.chapters));
      for (const [chapterId, count] of Object.entries(share)) {
        quotas[chapterId] = (quotas[chapterId] ?? 0) + count;
      }
    }
  } else if (blueprint.proportional?.length) {
    const share = allocate(remaining, weightsFor(blueprint.proportional));
    for (const [chapterId, count] of Object.entries(share)) {
      quotas[chapterId] = (quotas[chapterId] ?? 0) + count;
    }
  }

  return {
    examId,
    questions: blueprint.questions,
    quotas,
    // Chapters whose quota is a fixed requirement (e.g. the case studies).
    fixed: (blueprint.fixed ?? []).map((entry) => entry.chapterId),
  };
}
