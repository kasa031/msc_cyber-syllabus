# MSc Cybersecurity Practise Syllabus 1st Year

Simple **offline** study app: terminal tutorial (ACIT4050) + spaced-repetition quiz for ACIT4050 / ACIT4280 / ACIT4100.

UI language: **English**. App name spelling: **Practise** (as requested).

Live: https://kasa031.github.io/msc_cyber-syllabus/

See [CHECKLIST.md](./CHECKLIST.md) for the privacy audit and phone smoke test.

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

Deep links (same origin): `#terminal`, `#4050`, `#4280`, `#4100`, `#pc`.

## Publish to GitHub Pages

Repo: `kasa031/msc_cyber-syllabus` (master). Pages serves `/msc_cyber-syllabus/`.

After larger app changes, bump the cache name in `sw.js` (e.g. `msc-cyber-lock9`) and the `?v=` query on `quiz-decks.js` / icons so phones drop stale shells.

## Files

| File | Role |
|------|------|
| `index.html` | Tutorial + quiz UI (English) |
| `quiz-decks.js` | Quiz cards (runtime) |
| `quiz-data/*.json` | Same cards as JSON (fallback + maintenance) |
| `fonts/` | Self-hosted Space Grotesk + JetBrains Mono (offline) |
| `Open-Study-App.bat` | Double-click launcher (no server) |
| `manifest.webmanifest` + `sw.js` | PWA / home screen (http/https only) |
| `icons/` | App icons |
| `CHECKLIST.md` | Privacy + smoke test |

## Updating the quiz

Edit `quiz-decks.js` and the matching file under `quiz-data/`. Keep the same card `id` to preserve spaced-repetition progress. Bump the cache name in `sw.js` after larger changes.
