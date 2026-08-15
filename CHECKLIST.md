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
- [ ] Quiz: flip -> rate 1-4 -> queue updates
- [ ] If cards missing: tap **Reload quiz data** once while online
- [ ] Add to Home Screen / Install app
- [ ] Open from home screen offline after first online visit

## Technical status (lock24)

- Mobile: viewport-fit, safe-area, touch targets ~44px, skip link, hash deep-links (`#4050`, `#4280`, `#4100`, `#pc`)
- PWA: absolute `start_url` / `scope` under `/msc_cyber-syllabus/`
- `file://` and GitHub Pages: decks via `quiz-decks.js` (JSON fallback if needed)
- SW: network-first quiz payloads + body validation; cache name `msc-cyber-lock24`
- Tutorial Show answer: stays on step until Continue (no auto-advance flash)
- Quiz grades: Easy is outline turquoise (distinct from filled Good)
- Deck counts: ACIT4050=83, ACIT4280=118, ACIT4100=102, computer-basics=28
