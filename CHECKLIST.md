# Ready for GitHub - do not push until the owner confirms

This folder (`acit-study-quiz`) is the **clean, publishable** study app.
**Do not** `git push` until the owner explicitly says it is OK.

## Privacy audit (latest pass)

| Check | Result |
|--------|--------|
| Name / email / phone / student ID | Not found |
| OneDrive / `C:\Users\...` / private paths | Not found |
| Personal links / mailto | Not found |
| CV / group files / timetable | Not in this folder |
| Progress / tracking data | Only browser `localStorage` (on-device) |
| API / login / analytics | None |

**Conclusion:** Publishable app files are free of sensitive personal data and suitable for public GitHub / GitHub Pages - after the owner's confirmation.

## Before push (owner)

- [ ] Open `index.html` locally (double-click / file:// - no server) and smoke-test
- [ ] Switch course tabs (Terminal / 4050 / 4280 / 4100)
- [ ] Quiz: flip -> rate 1-4 -> queue updates
- [ ] Reset progress works
- [ ] No personal notes in `quiz-decks.js` / `quiz-data/`
- [ ] Create GitHub repo and set Pages (see README)
- [ ] **Confirm push** - not before that

## Technical status

- Mobile: viewport-fit, safe-area, touch targets ~44px
- PWA: `manifest.webmanifest` + `sw.js` - offline after first HTTPS load
- `file://` and GitHub Pages: decks via `quiz-decks.js` (no JSON fetch at runtime)
