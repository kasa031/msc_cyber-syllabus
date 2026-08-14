# MSc Cybersecurity Practise Syllabus 1st Year

Simple **offline** study app: terminal tutorial (ACIT4050) + spaced-repetition quiz for ACIT4050 / ACIT4280 / ACIT4100.

UI language: **English**. App name spelling: **Practise** (as requested).

> **Ready for GitHub - do not push until the owner confirms.**  
> See [CHECKLIST.md](./CHECKLIST.md) for the privacy audit and smoke test before publishing.

## Privacy

This folder is intended for **public** GitHub / GitHub Pages.

- No names, email, phone, student ID, or private paths
- Progress is stored only in the browser's `localStorage` on your device
- No login, no API, no tracking code

Do not add CVs, group files, private disk paths, or personal notes here.

## Open the HTML file directly - no server needed

1. Double-click `index.html`, **or**
2. Double-click `Open-Study-App.bat` (same thing - no Python / no http.server)

Everything works over `file://`. Quiz cards live in `quiz-decks.js` (no fetch). Fonts are in `fonts/`.

Optional later: host on GitHub Pages (HTTPS). Then the service worker can cache the app after the first visit for offline on phone.

## Mobile / "app" (PWA)

When the page is hosted on **HTTPS** (e.g. GitHub Pages):

1. Open the page in Safari (iPhone) or Chrome (Android)
2. **iOS:** Share -> *Add to Home Screen*
3. **Android:** Menu -> *Install app* / *Add to Home screen*

Home-screen short name: **MSc Cyber Y1**.

## Publish to GitHub Pages

**First:** Confirm the checklist in CHECKLIST.md. Then create the repo and enable Pages. **Do not push until you confirm.**

## Files

| File | Role |
|------|------|
| `index.html` | Tutorial + quiz UI (English) |
| `quiz-decks.js` | Quiz cards (runtime) |
| `quiz-data/*.json` | Same cards as JSON (maintenance; not loaded at runtime) |
| `fonts/` | Self-hosted Space Grotesk + JetBrains Mono (offline) |
| `Open-Study-App.bat` | Double-click launcher (no server) |
| `manifest.webmanifest` + `sw.js` | PWA / home screen (http/https only) |
| `icons/` | App icons |
| `CHECKLIST.md` | Ready-for-GitHub + privacy |

## Updating the quiz

Edit `quiz-decks.js` and the matching file under `quiz-data/`. Keep the same card `id` to preserve spaced-repetition progress. Bump the cache name in `sw.js` after larger changes.
