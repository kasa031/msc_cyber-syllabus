# Exam app - forbedrings-TODO (4050 + 4280)

**Mål (fra 4. nov):** Interaktiv repetisjonsapp for skriftlig eksamen - fokus **ACIT4050** og **ACIT4280**, ikke essay/4100 i denne løypa.

**Live:** [exam-rep](https://kasa031.github.io/msc_cyber-syllabus/exam-rep.html) · [app ?exam=1](https://kasa031.github.io/msc_cyber-syllabus/index.html?exam=1)

**Relaterte filer:** `Guider/EXAM_REP_TODO.md` (agent backlog) · `Guider/STUDY_APP_TODO.md` (bredere app)

Agent oppdaterer denne listen etter hver runde. Kryss av manuelt når du er fornøyd.

---

## For deg denne uken

- [ ] 10 kort/dag i appen (Settings: daily goal)
- [ ] Én **timed test** per emne (4050 + 4280)
- [ ] **Mixed 5+5** minst én gang
- [ ] **L-11 rep:** `?tag=data-in-transit` eller knapp på exam-rep
- [ ] Les **official exam examples** (4050 phishing-side på Canvas)
- [ ] **InstantONS** én runde (4280)

---

## Ferdig (5. nov 2026)

| ID | Hva |
|----|-----|
| `rep-modes-grid` | Seksjon **Practice modes** på exam-rep (6 fliser) |
| `rep-today-strip` | Dagens kort + streak på exam-rep (leser localStorage XP) |
| `rep-l11-rep` | L-11 blokk omgjort til eksamensrep + filter-lenke |
| `rep-l11-checklist` | Knapp **Mark L-11 submitted** synker checklist |
| `reward-daily-celebrate` | Toast + ring-puls når daily goal nås (lock182) |
| `reward-streak-toast` | Toast ved streak 3 / 7 / 14 dager |
| `track-4050-4280` | Essay/4100-promotering fjernet (lock181) |

---

## P0 - innhold (pensum, ingen mock)

| ID | Status | Oppgave |
|----|--------|---------|
| `data-l11-grade` | open | Når Canvas viser score: fyll godkjente MCQ/essay-formuleringer i `quiz-data/acit4050.json` |
| `data-l10-atrest` | open | L-10 quiz 24333 når svar ikke er muted |
| `data-anatomy-lab` | open | L-8 lab-kort verified fra ditt forsøk |
| `data-4280-gaps` | open | Modulquizer som mangler kort (se `canvas-quiz-coverage.json`) |
| `data-exam-eight` | open | Alle **Examples of possible exam questions** som egne kort/tag |

---

## P1 - læring og motivasjon

| ID | Status | Oppgave |
|----|--------|---------|
| `ux-week-focus` | open | Exam-rep: «denne uken»-kort (auto fra Ukeplan-dato, manuell tekst til crawl) |
| `ux-weak-spots` | open | «Weakest topic»-knapp på exam-rep (gjenbruk app-logikk `studyWeakestMapTag`) |
| `ux-session-recap` | partial | Session recap finnes; kort lenke tilbake til exam-rep etter test |
| `reward-more-milestones` | partial | Streak toast; trophies finnes - flere eksamens-spesifikke badges? |
| `checklist-canvas` | open | Auto-tick L-11 fra Canvas crawl (ikke bare manuell knapp) |

---

## P2 - design og layout (eksamensfølelse)

| ID | Status | Oppgave |
|----|--------|---------|
| `ui-exam-rep-polish` | partial | Teal tokens (lock174+); færre lilla rester i `index.html` inline |
| `ui-ab03a9-purge` | open | Erstatt `#AB03A9` med `--signal` / tokens i quiz-feedback |
| `ui-reduced-motion` | partial | Daily ring; utvid til fx-layer og streak-animasjoner |
| `ui-mobile-modes` | open | Practice modes: én kolonne, større touch targets på mobil |
| `ui-keyboard-map` | open | Hjelp-modal: tastatur i quiz og timed test |
| `rep-hero-figure` | open | Enkel SVG (skjold / privacy) på exam-rep uten tung grafikk |
| `rep-offline-smoke` | open | Sjekkliste: ett besøk online → flymodus → exam-rep + mixed |

---

## P3 - teknikk

| ID | Status | Oppgave |
|----|--------|---------|
| `build-deck-sync` | open | Script json → `quiz-decks.js` (unngå drift) |
| `sec-no-secrets` | open | Ingen lab-passord i repo (kun generiske hints der pensum krever) |
| `perf-notes-embed` | open | Lettere class-notes på mobil |

---

## P4 - etter cyber-eksamen (des 2026)

| ID | Status | Oppgave |
|----|--------|---------|
| `rep-archive` | open | Exam-rep roligere; checklist arkivert |
| `4100-separate` | parked | Essay/4100 kun i full app eller egen landing - **ikke** exam-rep uten eksplisitt beskjed |

---

## Designprinsipper (hold linjen)

1. **English** i alt brukersynlig tekst (pensum er engelsk).
2. **Pensum-only:** slides, Canvas, dine attempts, official exam examples - aldri oppdiktede MCQ-distraktorer.
3. **Exam lane:** standard arbeid = 4050 + 4280; 4100 kun når Karina sier det.
4. **Publish:** endre `Guider/` → copy til `C:\Users\Karina\Dev\acit-study-quiz` → push → bump `sw.js` lock.

---

## Idéer (backlog, ikke prioritert)

- Eksamens-simulator: 3 t timer med pauser (kun struktur, ikke nytt innhold)
- «Last 7 days» heatmap på exam-rep
- Eksport av egne notater per tag (localStorage only)
- Lenke fra Ukeplan direkte til riktig `?tag=` per uke
