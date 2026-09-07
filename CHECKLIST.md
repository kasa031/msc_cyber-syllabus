# Ready for GitHub Pages (published)

This folder (`acit-study-quiz`) is the **clean, publishable** study app.
Live: https://kasa031.github.io/msc_cyber-syllabus/

## Privacy audit (latest pass)

| Check | Result |
|--------|--------|
| Name / email / phone / student ID | Not found |
| OneDrive / `C:\Users\...` / private paths | Not found |
| Personal links / mailto | Not found |
| CV / group files / timetable | Not in this folder |
| Progress / tracking data | Only browser `localStorage` (on-device, per profile) |
| API / login / analytics | None |

**Conclusion:** Publishable app files are free of sensitive personal data.

## Smoke test (owner)

- [x] Local: profile bar, Sound on/off, Trophies modal, rename + add profile
- [x] Local: Quiz HUD (Points, Streak, Due now, To drill, Trophies)
- [x] Local: course tabs + Browse / Quiz modes present
- [ ] Open live site on phone (Safari/Chrome) after next GitHub Pages deploy
- [ ] Switch course tabs (Terminal / 4050 / 4280 / 4100 / PC / Fellesjam)
- [ ] Quiz: Flashcards mode (flip) or Quiz SRS (rate 1-4) + hear point chime
- [ ] If cards missing: tap **Reload quiz data** once while online
- [ ] Add to Home Screen / Install app
- [ ] Open from home screen offline after first online visit
- [ ] Ukeplan iframe: course tab loads quiz via `index.html?embed=1#acit4050`
- [ ] Practice: NIST -> Kill Chain -> MITRE ATT&CK flow + **Start over all**

## Offline test (DevTools)

1. Open https://kasa031.github.io/msc_cyber-syllabus/ (or local `index.html` via `Open-Study-App.bat` for `file://`)
2. **HTTPS/PWA:** wait for service worker install (Application > Service Workers > `msc-cyber-lock147`)
3. Browse each course tab once while online (4050, 4280, 4100, PC, Fellesjam) so figures prefetch
4. Application > Service Workers > check **Offline**, or Network > **Offline**
5. Reload - all decks, flashcards, quiz SRS, and card figures should match online
6. Fellesjam pool = merged cards from all five source decks (~798 unique cards)
7. **file://:** no service worker; all content loads from disk (`quiz-decks.js`, `figures/pensum/` must exist beside `index.html`)

## Publish sync (OneDrive Guider -> GitHub)

1. Edit canonical files in `OsloMet_Hosten2026/Guider/` only.
2. Quiz JSON changed? Run `python Guider/_tools/expand_quiz_decks.py` or rebuild `quiz-decks.js`.
3. Figures/fonts changed? Run `node Guider/_tools/gen_sw_assets.mjs --lock=lockNNN --write` (updates ASSETS + CACHE).
4. Bump `sw.js` cache name (`msc-cyber-lockNNN`) if you skipped step 3.
5. Copy **app files only** to `C:\Users\Karina\Dev\acit-study-quiz\` (index, sw, quiz-decks.js, quiz-data, class-notes, framework-practice, icons, figures, fonts, privacy-policy, manifest).
6. Never copy: Ukeplan, UKAS_LESNING, Emner/, Excel, personal paths.
7. `git commit` + `git push` when Karina confirms. Live: Ctrl+F5.

## Technical status (lock147)

- Deck counts: ACIT4050=220, ACIT4280=218, ACIT4100=328, computer-basics=28, fellesjam-general=26 (Fellesjam pool ~798 unique)
- Canonical entry: `index.html` (`TERMINAL_OVING_ACIT4050.html` redirects here)
- Embed mode: `?embed=1#4050` (or `#acit4050`) for Ukeplan iframe - hides hero and course tabs
- Filter chips: 4050 (L1-L5, phishing, network, exam), 4100 (week3/week4/Toulmin), 4280 (L1-L6)
- Profiles: local `acit-profiles-v1` (rename, add classmate, switch). Progress keys are namespaced per profile; `p1` still reads legacy keys
- Sound: Web Audio chime on points, fanfare on new trophy; mute per profile
- Trophies: Framework trio (NIST + Kill Chain + MITRE), course badges, streak/review milestones
- Study modes per course tab: **Browse** (flip, no score) or **Quiz (SRS)** with SM-2, HUD, drill weak cards
- Practice: NIST CSF 2.0 wheel + Lockheed Martin Kill Chain + MITRE ATT&CK (`framework-practice.js`, Start over all)
- Mobile: viewport-fit, safe-area, touch targets ~44px, skip link, hash deep-links (`#4050`, `#practice`, `#nist`, `#killchain`, `#mitre`, `#4280`, `#4100`, `#pc`, `#fellesjam`)
- PWA: absolute `start_url` / `scope` under `/msc_cyber-syllabus/`
- `file://` and GitHub Pages: decks via `quiz-decks.js` (JSON fallback if bundle missing)
- SW precache: CRITICAL shell + quiz JSON; ASSETS = figures/fonts/icons scan (729 paths via `gen_sw_assets.mjs`)
- SW runtime: network-first for HTML + quiz payloads (updates when online); cache-first for static assets; offline falls back to precache
- Palette: `#5003C0` purple, `#AB03A9` magenta, `#FF467A` pink, `#FFD51E` yellow, `#FFF9E6` cream; active tabs magenta; primary CTA purple
