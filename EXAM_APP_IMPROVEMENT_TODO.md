# Exam app - forbedrings-TODO (4050 + 4280)

**Mål (fra 4. nov):** Interaktiv repetisjonsapp for skriftlig eksamen - fokus **ACIT4050** og **ACIT4280**, ikke essay/4100 i denne løypa.

**Live:** [exam-rep](https://kasa031.github.io/msc_cyber-syllabus/exam-rep.html) · [practice app](https://kasa031.github.io/msc_cyber-syllabus/index.html) · **[roadmap HTML](https://kasa031.github.io/msc_cyber-syllabus/exam-app-todo.html)** (les denne i nettleseren)

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
| `ux-week-focus` | **This week (45)**-kort på exam-rep (lock183) |
| `ux-weak-spots` | Weakest topics 4050/4280 + filter-lenker (lock183) |
| `ux-session-recap` | Lenke til exam-rep etter session og timed test (lock183) |
| `ui-keyboard-map` | Hjelp-modal **?** + Settings + quiz home (lock183) |
| `ui-exam-focus-teal` | Teal feedback i exam focus mode (lock183) |
| `reward-exam-trophies` | Trofeer: 4050/4280 dry run + mixed 5+5 (lock183) |
| `link-todo-everywhere` | `exam-app-todo.html` + banner på exam-rep (lock184) |
| `exam-app-default` | Exam prep er standard (exam-app), ikke valgbar modus (lock184) |

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
| `ux-week-focus` | **partial** | Uke 45 manuell tekst; auto fra crawl senere |
| `ux-weak-spots` | **done lock183** | Weakest topics på exam-rep |
| `ux-session-recap` | **done lock183** | Exam dashboard-lenke etter test/session |
| `reward-more-milestones` | **partial** | Exam trophies + streak toast; flere badges valgfritt |
| `checklist-canvas` | open | Auto-tick L-11 fra Canvas crawl (ikke bare manuell knapp) |

---

## P2 - design og layout (eksamensfølelse)

| ID | Status | Oppgave |
|----|--------|---------|
| `ui-exam-rep-polish` | partial | Teal tokens (lock174+); færre lilla rester i `index.html` inline |
| `ui-ab03a9-purge` | open | Erstatt `#AB03A9` med `--signal` / tokens i quiz-feedback |
| `ui-reduced-motion` | partial | Daily ring; utvid til fx-layer og streak-animasjoner |
| `ui-mobile-modes` | open | Practice modes: én kolonne, større touch targets på mobil |
| `ui-keyboard-map` | **partial lock183** | Modal + ? ; utvide med test MCQ-taster senere |
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
