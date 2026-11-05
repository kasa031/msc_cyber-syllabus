# Pensum audit (exam app) - 5 Nov 2026

Counts from `quiz-data/*.json` with same block tags as timed tests in `index.html`:

- Block tags: `needs-canvas`, `optional-sources`, `inferred`, `meta-only`, `off-pensum`

| Deck | Total cards | In exam pool | Blocked from tests |
|------|-------------|--------------|-------------------|
| acit4050 | 347 | 343 | 4 |
| acit4280 | 253 | 252 | 1 |

Blocked 4050 ids (keep until verified): `4050-new-quizzes-lti`, `4050-l11-canvas-q08`, `4050-l8-canvas-lab-meta`, `4050-l10-rest-meta`.

Blocked 4280: `4280-supplement-fitness-apps`.

MCQ distractors: other real answers from the same deck only (`testBuildMcqChoices`).

Next agent step: fill verified answers for blocked cards when Canvas/submission review allows, then remove `needs-canvas`.
