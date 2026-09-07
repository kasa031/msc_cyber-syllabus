# Study app - omfattende TODO (audit 07.09.2026)

Live: https://kasa031.github.io/msc_cyber-syllabus/  
Canonical app: `Guider/index.html` (lock142)  
Publish repo: `C:\Users\Karina\Dev\acit-study-quiz`

**Status na:** 4050=207, 4280=209, 4100=328, PC=28, fellesjam-general=26, Mixed ~798 unike kort.

Prioritet: **P0** denne uken | **P1** 1-2 uker | **P2** nar tid | **P3** nice-to-have | **INSP** fra læringsapper (research 07.09)  
Effort: **S** <1t | **M** 1-3t | **L** halv dag+

**Ferdig siden audit:** lock111-117, lock122 CSS dock, lock123 recap modals, lock124 unit progress + streak calendar.

---

## INSP CSS - moderne layout (research 07.09.2026)

Grunnlag: [@layer cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer), [Every Layout](https://every-layout.dev/) (stack/cluster), [Material Design tokens](https://m3.material.io/foundations/design-tokens/overview), [Apple HIG touch targets](https://developer.apple.com/design/human-interface-guidelines/accessibility), [GOV.UK focus styles](https://design-system.service.gov.uk/styles/accessibility/).

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `css-tokens-layers` | ~~Design tokens + @layer reset/tokens/base/components/utilities~~ | M | index.html | **DONE lock122** |
| `css-stack-utilities` | ~~`.stack`, `.cluster`, `.text-measure` layout helpers~~ | S | index.html | **DONE lock122** |
| `css-quiz-action-dock` | ~~Mobil sticky dock: reveal + grade + flash nav (thumb zone)~~ | M | index.html | **DONE lock122** `#quiz-action-dock`, `syncQuizSessionUi()` |
| `css-container-queries` | ~~Container queries pa quiz-kort (font skalerer i smale embeds)~~ | M | index.html | **DONE lock124** @container quiz-active |
| `css-prefers-contrast` | ~~`prefers-contrast: more` variant pa grade-knapper~~ | S | index.html | **DONE lock123** |

---

## INSP - Beste læringsapper (research 07.09.2026)

Grundig gjennomgang av Duolingo, Anki, Khan Academy, Brilliant, Quizlet, Memrise + edtech-onboarding-forskning.  
Mål: ta det beste som passer **offline MSc study app** (ingen konto, ingen tracking, Canvas-synk).

### Hva appen allerede har (sterkt)

| Mønster | Kilde | Hos oss |
|---------|-------|---------|
| Spaced repetition (SM-2) | Anki | Quiz SRS, Again/Hard/Good/Easy, due queue |
| Interaktiv tutorial | Duolingo, Brilliant | Terminal + PC tutorial (type commands) |
| Gamification | Duolingo, Memrise | Points, streak, 14 trophies, sound |
| Flere studiemoder | Quizlet | Browse (flip) + Quiz SRS + framework drag |
| Deck/filter | Anki, Quizlet tags | Per-emne tabs, tag-chips, search |
| Offline PWA | - | sw.js, install, file:// |
| Lokal profil | - | Profiles, optional class ranking code |

### Gap vs toppapper (prioritert)

| Gap | Beste referanse | Hvorfor det hjelper Karina |
|-----|-----------------|----------------------------|
| Ingen first-run onboarding | Duolingo, Memrise | Nye brukere vet ikke Browse vs SRS vs Terminal |
| Ingen daglig mal | Duolingo, Memrise | "5 min / 20 kort" driver vaner uten streak-angst |
| Ingen review heatmap | Anki | Ser om du faktisk øver før eksamen |
| Ingen uke/mastery-kart | Khan Academy | "Uke 3 literature 60% drilled" matcher semester |
| Kun flip-kort i Browse | Quizlet Learn | MCQ/skriv-svar tester aktiv recall bedre |
| Ingen "problem first" | Brilliant | Terminal er bra; quiz er fortsatt passive cards |
| Svak post-session oppsummering | Khan, Quizlet | Etter session: hva gikk opp/ned, hva na |
| Ingen exam/test-modus | Quizlet Test | Simuler Canvas multiple-answer for 4050 |
| Notifications mangler | Duolingo | PWA kan minne "Due now: 12 cards" (opt-in) |
| Ingen unified solvable-flow | Brilliant | Hint/reveal/continue bør vaere identisk overalt |

---

### INSP Duolingo - onboarding, vaner, enkel CTA

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `insp-duo-first-win` | ~~First-run: 3-korts win + course pick~~ | M | index.html | **DONE lock112** first-win modal |
| `insp-duo-loop-onboard` | ~~Loop onboarding Browse then Quiz home~~ | M | index.html | **DONE lock112** step 2 flip 3 |
| `insp-duo-single-cta` | ~~Primary CTA Continue due on quiz home~~ | S | index.html | **DONE lock112** |
| `insp-duo-daily-goal` | ~~Daily goal 5/10/20 + progress bar~~ | M | index.html | **DONE lock112** uses todayReviews |
| `insp-memrise-review-home` | ~~Review due home panel before session~~ | M | index.html | **DONE lock112** |
| `insp-duo-streak-calendar` | ~~Streak-kalender (7/30 dager) ved siden av streak-tall~~ | M | index.html | **DONE lock124** HUD 7d + Settings 30d |
| `insp-duo-notif-optin` | ~~PWA notification opt-in nar streak>2 (ikke ved first visit)~~ | M | sw.js, index | **DONE lock142** Settings checkbox + streak nudge + SW ping |
| `insp-duo-micro-failure` | ~~Again-feedback: mild, ikke straffende (Duolingo "mistakes OK")~~ | S | index.html | **DONE lock123** reveal copy |
| `insp-duo-path-personalize` | ~~Onboarding spør: hvilket emne denne uken? -> apne riktig tab+filter~~ | S | index.html | **DONE lock141** weekCourse + STUDY_FOCUS auto-filter |

### INSP Anki - SRS, statistikk, deck-kontroll

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `insp-anki-heatmap` | ~~Review heatmap (90 dager) i Settings~~ | L | index.html | **DONE lock115** tap day for count |
| `insp-anki-deck-stats` | ~~Per-deck new/learning/review/mature counts~~ | M | index.html | **DONE lock115** under deck title |
| `insp-anki-retention` | "True retention" / again-rate per tag (Lecture3, week3) | M | index.html | Svake tags synlig uten a apne Browse |
| `insp-anki-bury-suspend` | Bury card til i morgen / suspend tag midlertidig | M | index.html | For eksamen: skjul irrelevant uke |
| `insp-anki-custom-study` | Custom study: "Due only" / "All new" / "Tagged week3" | M | index.html | Filter + SRS i ett klikk |
| `insp-anki-leech` | ~~Leech-deteksjon: kort med 8+ Again -> flag + drill suggestion~~ | S | index.html | **DONE lock141** banner + drill leeches |
| `insp-anki-empty-queue` | ~~Tom kø: "Congratulations" + forslag (custom study / annet emne)~~ | S | index.html | **DONE lock123** congrats empty + browse/weak |

### INSP Khan Academy - mastery, struktur, progresjon

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `insp-khan-mastery-dots` | ~~Mastery dots per uke/modul (Attempted-Familiar-Proficient-Mastered)~~ | L | index.html | **DONE lock116** 4-dot row per unit |
| `insp-khan-course-map` | ~~Visuelt course map per emne~~ | L | index.html | **DONE lock116** L1-L6 / W2-W4 / L4 Soon |
| `insp-khan-next-skill` | ~~"Next best to practice" CTA + focus banner~~ | M | index.html | **DONE lock113** |
| `insp-khan-unit-progress` | ~~Unit progress bar: "12/28 Lecture3 cards at Good+"~~ | M | index.html | **DONE lock124** under course map |
| `insp-khan-post-session` | ~~Etter session: skill level changes (opp/ned/stabil liste)~~ | M | index.html | **DONE lock123** session recap modal |
| `insp-khan-deadline-aware` | ~~SRS prioriter tags med Canvas due date~~ | M | index.html | **DONE lock113** STUDY_FOCUS + queue sort |

### INSP Brilliant - problem first, interaktivitet, konsistent flow

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `insp-brilliant-problem-first` | Quiz: vis mini-scenario forst, deretter kort (4050 case cards) | M | quiz JSON, index | Q som "You see X in tcpdump..." |
| `insp-brilliant-unified-flow` | ~~Unified reveal-flow: miss/hint/reveal/continue~~ | M | index.html, framework-practice.js | **DONE lock117** SolvableFlow |
| `insp-brilliant-lesson-path` | ~~Lesson path UI for terminal tutorial~~ | M | index.html | **DONE lock117** command nodes under bar |
| `insp-brilliant-multi-try` | MCQ/drag: flere forsok for XP (som Brilliant multi-try) | M | index.html, framework-practice | Delvis poeng ved andre forsok |
| `insp-brilliant-start-over` | "Start over" pa interaktive ovelser (framework + terminal step) | S | index.html, framework-practice.js | Reset state uten refresh |
| `insp-brilliant-thumb-zone` | ~~Mobil: primær CTA i thumb zone (nedre 40% skjerm)~~ | S | index.html | **DONE lock122** quiz-action-dock |

### INSP Quizlet - modi, adaptivitet, eksamen

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `insp-quizlet-learn-mode` | Learn mode: blande flip, MCQ, skriv-svar fra samme deck | L | index.html | Velg i mode-tabs: Learn / Flashcards / Test |
| `insp-quizlet-written` | ~~Written answer: type kort svar, fuzzy match~~ | L | index.html | **DONE lock114** Test mode written Q |
| `insp-quizlet-test-mode` | ~~Test mode: timed, mixed Q types, score pa slutten~~ | L | index.html | **DONE lock114** 10 Q, MCQ + written, tag filter |
| `insp-quizlet-match` | Match mode (valgfritt): term/def par pa tid | M | index.html | Gamification for Fellesjam |
| `insp-quizlet-assignment-tags` | Tag study sets etter assignment ("Networks", "taxonomy") | S | quiz JSON, chips | Allerede delvis - utvid til "assign1" chip |
| `insp-quizlet-progress-track` | ~~Progress % per set synlig pa course tab (Quizlet-style)~~ | M | index.html | **DONE lock124** quiz-deck-pct under title |

### INSP Memrise - daglig rytme, review, variasjon

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `insp-memrise-review-home` | Home panel: "Review due" som forste element (Memrise flower) | M | index.html | Due count stor + CTA for quiz |
| `insp-memrise-goal-picker` | Onboarding goal picker: Casual / Regular / Intense (kort/dag) | S | index.html | 3 store knapper, lagres lokalt |
| `insp-memrise-session-cap` | ~~Session cap nar daglig mal natt: gratulerer, stopp eller fortsett~~ | S | index.html | **DONE lock123** i session recap |
| `insp-memrise-difficult-words` | "Difficult cards" drill queue (Memrise Difficult Words) | M | index.html | Utvid "Drill weak cards" med egen liste |
| `insp-memrise-speed-review` | Speed review: 60s, sa mange kort som mulig (Browse only) | M | index.html | Valgfri lek for Fellesjam |

### INSP EdTech-forskning - onboarding i to deler, gamification med mening

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `insp-edu-two-part-onboard` | ~~To-dels onboarding: (1) procedural tutorial (2) "pick this week's course"~~ | M | index.html | **DONE lock118** persona + course + first win |
| `insp-edu-checklist-orient` | ~~Orientation checklist med progress bar (5 steg)~~ | M | index.html | **DONE lock118** Settings + quiz nudge |
| `insp-edu-role-branch` | ~~Persona: "Exams soon" vs "New semester" -> ulik default tab/mal~~ | S | index.html | **DONE lock118** Exams soon / Steady / Browse |
| `insp-edu-meaningful-badges` | Trophies knyttet til læringsmilepæler (W3 done, 50 reviews) | M | index.html | APAR: achievements = stage goals, ikke bare poeng |
| `insp-edu-weekly-recap` | ~~Ukentlig recap modal (søndag): reviews, streak, weak tags~~ | M | index.html | **DONE lock123** sondag, 7-dag stats |

---

## INSP - Anbefalt rekkefolge (hoy ROI for Karina)

1. `insp-duo-first-win` + `insp-duo-single-cta` + `insp-memrise-review-home` (raskere "hva gor jeg na")
2. `insp-khan-next-skill` + `insp-khan-deadline-aware` (koble Ukeplan/Canvas)
3. `insp-quizlet-test-mode` + `insp-quizlet-written` (4050/4100 eksamen)
4. `insp-anki-heatmap` + `insp-anki-deck-stats` (motivasjon + innsikt)
5. `insp-khan-course-map` + `insp-brilliant-lesson-path` (semesteroversikt)
6. Resten nar tid

**Bevisst IKKE kopiere:** Duolingo paywall, ads, hearts/lives, social leaderboards med fremmede, mascot guilt-trips, 38-screen onboarding, cloud-konto.

---


## P0 - Gjor forst (denne uken)

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `deploy-lock111-verify` | Verifiser lock111 live (328 4100, embed, chips) | S | Live URL | Ctrl+F5 viser lock111 |
| `school-ukeplan-index` | ~~Ukeplan: bytt quiz-dock til index.html~~ | S | `Oversikt/Ukeplan.html` | **DONE lock110** |
| `ux-embed-mode` | ~~`?embed=1` i index.html~~ | M | `Guider/index.html` | **DONE lock110** |
| `sync-terminal-oving` | ~~TERMINAL_OVING redirect~~ | M | `TERMINAL_OVING_ACIT4050.html` | **DONE lock110** |
| `docs-checklist-lock111` | ~~CHECKLIST lock111~~ | S | `Guider/CHECKLIST.md` | **DONE** - hold synket |
| `4100-week3-literature` | ~~ACIT4100 uke 3 kort~~ | L | quiz JSON | **DONE lock111** (11 week3) |
| `4100-week4-philosophy` | ~~ACIT4100 uke 4 kort~~ | L | quiz JSON | **DONE lock111** (8 week4) |
| `notes-4100-w3-w4` | ~~class-notes W3/W4~~ | M | class-notes.html | **DONE lock111** |
| `ux-filter-all-decks` | ~~Filter-chips 4100/4280~~ | M | index.html | **DONE lock111** |
| `4050-lecture4-ids` | ACIT4050 Lecture 4 IDS: slides + quiz-kort | L | crawl, quiz JSON, class-notes | 15-25 kort nar slides finnes |
| `4050-new-quizzes-cdp` | CDP-eksporter Intro + Networks New Quizzes | L | Emner/ACIT4050, quiz JSON | Tag `Canvas-quiz` |
| `notes-4050-l4-ids` | class-notes: Lecture 4 IDS seksjon | M | class-notes.html | Klar for slides tir 08.09 |

---

## P1 - Innhold og UX (1-2 uker)

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `4050-l2-filter-chips` | ~~Filter-chips for Lecture1, Lecture2, phishing (4050)~~ | S | `Guider/index.html` | **DONE lock141** L1/L2/phishing chips |
| `ux-filter-all-decks` | ~~Per-deck filter-chips for 4100/4280~~ | M | index.html | **DONE lock111** |
| `4280-module-quiz-drill` | Gjor 4280 module-quiz-kort om til ekte drill (PIA, controls, PETs) | L | `quiz-data/acit4280.json` | Kort har faktiske sporsmal, ikke bare scope-tekst |
| `4050-lecture5-firewalls` | Forbered L5 Firewalls nar modul apnes (15.09) | L | quiz JSON, class-notes | Tag `Lecture5` |
| `notes-4050-l2-phishing` | Dedikert L2 phishing-seksjon i class-notes | M | `class-notes.html` | Gophish, tracking pixels, Apache kit |
| `notes-4280-ch5` | class-notes: Ch5 Privacy Management + smart car case | M | `class-notes.html` | Lenke til Lecture5-filter |
| `tut-network-commands` | Interaktive nettverkssteg i terminal-tutorial (ping, ip) | M | `Guider/index.html` | Steg matcher L3 Networks-kort |
| `tut-kali-dns-lab` | DNS-lab steg (nslookup/dig) i tutorial eller ovelser | M | index, fellesjam JSON | Matcher `fj-nslookup` kort |
| `practice-mitre-attack` | MITRE ATT&CK drag-ovelse (tredje practice-blokk) | L | `framework-practice.js`, index | Visuell stotte til 4050 MITRE-kort |
| `sync-dev-uncommitted` | Commit/push utstaende Dev-endringer (CHECKLIST, 4280 JSON) | S | Dev repo | git status clean; Guider/Dev identisk |
| `docs-subject-mapping` | Oppdater SUBJECT_MAPPING.md med sep 2026-tall | S | `Guider/SUBJECT_MAPPING.md` | 207/209/309, ikke 86/165 |
| `docs-todo-quiz-sync` | Synk TODO_quiz_oppdatering.md (L3 done, lock109) | S | `Guider/TODO_quiz_oppdatering.md` | Faser og lock matcher virkelighet |
| `deploy-phone-pwa` | PWA smoke test pa telefon (live URL) | S | CHECKLIST avkryssing | Install + offline etter ett besok |
| `ux-phone-smoke` | Full telefon-smoke (tabs, SRS, Browse, trophies) | S | CHECKLIST | Alle unchecked smoke-punkter testet |
| `sw-offline-checklist` | Kor full offline-test med lock109 | S | CHECKLIST, DevTools | Alle 5 decks + figures offline |
| `school-ukas-app-links` | UKAS_LESNING: klikkbare lenker til study app + filter | S | `Guider/UKAS_LESNING.html` | Networks-todo peker til index.html#4050 |
| `school-ukeplan-live-link` | Ukeplan: lenke til GitHub Pages for mobil | S | `Oversikt/Ukeplan.html` | Synlig live-URL ved siden av lokal Guider |
| `school-ukeplan-deck-counts` | Ukeplan quiz-dock notater: 207/209/309 | S | `Oversikt/Ukeplan.html` | notes.acit4050 nevner L3 chips |

---

## P2 - Design, docs, kvalitet

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `palette-privacy-policy` | ~~privacy-policy palett~~ | S | privacy-policy.html | **DONE lock110** |
| `palette-terminal-oving` | ~~TERMINAL_OVING redirect~~ | S | TERMINAL_OVING | **DONE lock110** |
| `school-ukeplan-live-link` | ~~Ukeplan live link~~ | S | Ukeplan.html | **DONE lock110** |
| `school-ukeplan-deck-counts` | ~~Ukeplan deck counts~~ | S | Ukeplan.html | **DONE lock111** |
| `palette-figures-pdca-trio` | Migrer pdca/hoepman-8/linddun SVG til palett | M | `Guider/figures/*.svg` | Ingen navy/teal i disse tre |
| `palette-figures-terminal` | Terminal mockup SVG-er: #35A29F -> #00B7CD | M | `figures/real/term-*.svg` | Konsistent turquoise i terminal-figurer |
| `palette-figures-quiz` | Ovrige quiz-SVG-er (zotero, transfers, thesis-outline) | M | `Guider/figures/` | Batch-erstatt gamle hex |
| `palette-icons` | App-ikoner (favicon.svg, icon.svg) til palett | S | `Guider/icons/` | Rod/turkis, ikke sea-teal |
| `class-notes-lock109` | Oppdater lock108-tekst i class-notes L3-seksjon | S | `class-notes.html` | Sier lock109 |
| `ux-sw-refresh-polish` | SW-oppdatering: toast ELLER confirm, ikke begge | S | `index.html` | Mykere UX midt i quiz |
| `ux-class-notes-csp` | CSP meta pa class-notes og toulmin-recap | S | class-notes, 4100-week2 | Matcher index CSP |
| `ux-fellesjam-tag-filter` | ~~Fellesjam: filter pa tags (dns, gdpr, tls)~~ | M | `index.html` | **DONE lock141** Mixed deck tag chips |
| `4100-w2p5-verify` | Verifiser usikre W2P5-kort mot Canvas | S | `quiz-data/acit4100.json` | Fjern "inferred" der svar er bekreftet |
| `4280-fitness-apps-pdf` | Kort fra Casestudy-fitness-apps.pdf | M | quiz JSON, Emner | Fjern needs-canvas pa supplement-kort |
| `4280-2a-tets-case` | 4280 Assignment 2A TETs case-kort (17.09) | M | quiz JSON | Tag `2A`/`TETs` |
| `sw-gen-assets-script` | Lag `_tools/gen_sw_assets.mjs` for ASSETS-liste | M | `_tools/`, sw.js | Bump lock = ett script-kall |
| `pwa-icons-onedrive` | Sikre PNG-ikoner lokalt i Guider/icons | S | `Guider/icons/` | file:// PWA fungerer |
| `docs-plan-slutstatus` | Oppdater PLAN_quiz_oppdatering sluttabell | S | `PLAN_quiz_oppdatering.md` | lock109, riktige tall |
| `docs-readme-quiz` | README_QUIZ: index.html er canonical | S | `README_QUIZ.md` | TERMINAL_OVING merket legacy |
| `sync-expand-script-docs` | Dokumenter Dev->Guider sync-workflow | S | CHECKLIST eller README | Ett steg: edit -> rebuild -> copy -> bump lock |
| `sec-headers-verify` | Verifiser security headers pa live URL | S | Dev/_headers | Dokumenter hva som faktisk serveres |
| `a11y-quiz-contrast` | WCAG-kontrast pa cream quiz-kort | S | index.html | Labels lesbare pa #FFF1D1 |
| `deploy-no-school-files` | Audit publish-repo: ingen skole-filer | S | Dev repo | Ingen Ukeplan/Emner/UKAS i git |

---

## P3 - Performance og hardening (senere)

| ID | Oppgave | Effort | Filer | Ferdig nar |
|----|---------|--------|-------|------------|
| `perf-lazy-deck-load` | Lazy-load per-deck JSON (ikke 384 KB bundle ved start) | L | index, sw, quiz-decks | Forste paint raskere; offline OK |
| `perf-fellesjam-defer` | Bygg Mixed-deck on-demand | M | index.html | Merge 779 kort kun nar Mixed apnes |
| `perf-figure-prefetch` | Prefetch kun figures for aktiv deck | M | sw.js, index | Mindre install-cache |
| `sec-csp-unsafe-inline` | Reduser CSP unsafe-inline | L | index.html | Scripts i egne filer der mulig |
| `a11y-sw-toast-polite` | SW-toast aria-live polite, ikke avbryt quiz | S | index.html | Skjermleser-vennlig oppdatering |
| `a11y-quiz-card-role` | Quiz-tags som buttons med aria-labels | M | index.html | Bedre tastatur/skjermleser |
| `practice-killchain-mobile` | Kill Chain drag pa touch | S | framework-practice.js | Fungerer pa mobil |

---

## Crawl-rutine (kjores ved nye slides / hver uke)

| ID | Oppgave | Trigger |
|----|---------|---------|
| `crawl-morning` | Canvas crawl -> Ukeplan + UKAS_LESNING | Morgen / bruker ber om det |
| `crawl-download-slides` | `_download_canvas_slides_cdp.py` for manglende PDF | Etter crawl |
| `crawl-quiz-from-slides` | Nye kort i quiz-data fra slide-PDF | Nye forelesningsslides |
| `crawl-publish` | Copy Guider -> Dev, commit, push, Ctrl+F5 | Etter quiz-endring |

---

## Kjente apne issues (logg)

- Networks assignment: levert 07.09, score pending i Canvas API
- Lecture 4 IDS slides: forventet pa Canvas tir 08.09
- `privacy-policy.html`: fortsatt gammel teal i CSS (etter partial patch)
- Dev `CHECKLIST.md`: lock54 (ikke pushet med lock109-endringer)
- `figures/pensum/`: mange PNG i sw.js; stor cache ved forste install

---

## Anbefalt rekkefolge nar vi starter

1. P0 deploy + Ukeplan/index embed (rask synlig gevinst)
2. P0 docs sync (CHECKLIST, SUBJECT_MAPPING)
3. P0 innhold: 4100 W3/W4 + 4050 L4 nar slides er crawlet
4. P1 filter-chips alle decks + class-notes
5. P2 palett i SVG-er og privacy-policy
6. P3 performance nar appen folles tung
