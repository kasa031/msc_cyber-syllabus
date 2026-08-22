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
| Progress / tracking data | Only browser `localStorage` (on-device) |
| API / login / analytics | None |

**Conclusion:** Publishable app files are free of sensitive personal data.

## Smoke test (owner)

- [ ] Open live site on phone (Safari/Chrome)
- [ ] Switch course tabs (Terminal / 4050 / 4280 / 4100 / PC)
- [ ] Quiz: Flashcards mode (flip) or Quiz SRS (rate 1-4)
- [ ] If cards missing: tap **Reload quiz data** once while online
- [ ] Add to Home Screen / Install app
- [ ] Open from home screen offline after first online visit

## Technical status (lock35)

- Mobile: viewport-fit, safe-area, touch targets ~44px, skip link, hash deep-links (`#4050`, `#practice`, `#nist`, `#killchain`, `#4280`, `#4100`, `#pc`, `#fellesjam`)
- PWA: absolute `start_url` / `scope` under `/msc_cyber-syllabus/`
- `file://` and GitHub Pages: decks via `quiz-decks.js` (JSON fallback if needed)
- SW: network-first quiz payloads + body validation; cache name `msc-cyber-lock35`
- Study modes per course tab: **Flashcards** (flip/browse) or **Quiz (SRS)** with SM-2 spaced repetition
- Practice: NIST CSF 2.0 wheel + Lockheed Martin Kill Chain drag exercises (`framework-practice.js`)
- Tutorial Show answer: stays on step until Continue (no auto-advance flash)
- Quiz grades: Easy is outline turquoise (distinct from filled Good)
- Deck counts: ACIT4050=89, ACIT4280=173, ACIT4100=114, computer-basics=28, fellesjam-general=26 (Fellesjam pool=430)
