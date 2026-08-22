# TODO: Quiz-oppdatering cyber1

Sist oppdatert: 2026-08-22 (ferdig kjøring)

---

## Fase 1 - Plan og scaffold

- [x] Identifiser app (`acit-study-quiz` / `msc_cyber-syllabus`)
- [x] Dokumenter dataformat og sync-flyt (`PLAN_quiz_oppdatering.md`)
- [x] Canvas -> deck mapping (`SUBJECT_MAPPING.md`)
- [x] Opprett `quiz-data/fellesjam-general.json` (26 kort)
- [x] Legg `fellesjam-general` i `quiz-decks.js`
- [x] Fellesjam merge i `index.html` + ny fane
- [x] Oppdater `sw.js` precache for ny JSON
- [x] Synk kopi til `OsloMet_Hosten2026\Guider\` (`expand_quiz_decks.py` + index.html)
- [x] Smoke test lokalt (`index.html` + fellesjam-fane)
- [x] Avklart "Mastodontserver" = Mastodon server (`fj-mastodon-server`)

---

## Fase 2 - ACIT4050 Canvas crawl (BLOCKERT uten Feide)

- [ ] Hent ACIT4050 modules API (som 4280 `_fetch_canvas_modules.py`)
- [ ] CDP: start New Quizzes forsøk, eksporter spørsmål per assignment
- [ ] Map Lecture 2+ -> nye `4050-*` kort (Lecture 1 allerede i deck)
- [ ] DNS/lab-spørsmål fra pensum PDF -> kort (verifiser mot forelesning)
- [ ] Oppdater `fj-own-dns-free` med offisiell lab-prosedyre

**Steg for New Quizzes (4050):**

1. Logg inn Canvas (Feide) i Edge/Chrome med CDP port åpen.
2. Gå til `https://oslomet.instructure.com/courses/34599/assignments/123562` (Introduction Lecture).
3. Klikk **Begin** (bruker 1 av 5 forsøk) - eksporter spørsmål + svar fra DOM.
4. Gjenta per assignment i moduler (Lecture 2 Phishing, osv.).
5. Legg kuraterte kort i `quiz-data/acit4050.json` med tag `Canvas-quiz`.
6. Kjør `_tools/expand_quiz_decks.py` og bump `sw.js` lock.

**Lokal metadata allerede lagret:** `Emner/ACIT4050/Assignment_Introduction_Lecture_New_Quizzes.md`  
**Meta-kort i deck:** `4050-new-quizzes-lti` (needs-canvas)

---

## Fase 3 - ACIT4280 utvidelse

- [x] Gå gjennom `_all_modules_scrape.json` modul for modul vs deck tags (hovedbulk OK)
- [x] Supplement-kort: smart metering + fitness-apps PDF meta (`4280-supplement-*`)
- [ ] Assignment 1A/2A: case-kort (Webbkoll finnes; TETs case-detaljer trenger PDF/rapport)
- [ ] YouTube supplement PDFs: manglende temaer (quiz-sider skipped i scrape)
- [x] Tell opp forventet kortantall; bump EXPECTED (165)

---

## Fase 4 - ACIT4100 utvidelse

- [x] Usable security Spine A (`reading_list.md` + `problemstilling.md`) -> 8 kort
- [ ] Mandatory information quiz (crawl - needs Canvas)
- [ ] Assignment 1/2 detaljerte krav fra Canvas (delvis i deck)

---

## Fase 5 - Publisering

- [x] Bump cache lock i `sw.js` (`msc-cyber-lock34`) + `quiz-decks.js?v=lock34`
- [x] Oppdater `CHECKLIST.md` deck counts
- [ ] Git commit + push (kun etter Karina godkjenner)
- [ ] Phone smoke test på GitHub Pages

---

## Fase 6 - Nice-to-have

- [ ] Fellesjam filter (tags: dns, tls, gdpr, ...)
- [ ] "This week" deck basert på timeplan
- [ ] Krasjkurs-emner hvis relevant
