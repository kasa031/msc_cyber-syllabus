# Plan: Quiz-oppdatering (cyber1 / msc_cyber-syllabus)

**Dato:** 2026-08-22  
**Status:** Ferdig (alle faser som ikke krever live Feide Canvas)  
**App:** `C:\Users\Karina\Dev\acit-study-quiz` (GitHub: [kasa031/msc_cyber-syllabus](https://github.com/kasa031/msc_cyber-syllabus))  
**Live:** https://kasa031.github.io/msc_cyber-syllabus/  
**Lokal kopi (OneDrive):** `OsloMet_Hosten2026\Guider\` (synket via `_tools/expand_quiz_decks.py`)

> **Merk om navn:** Det finnes ingen mappe som heter `cyber1`. Karinas "cyber1"-app er denne study-appen: **MSc Cybersecurity Practise Syllabus 1st Year** (`acit-study-quiz` / `msc_cyber-syllabus`).

---

## Sluttstatus (2026-08-22)

| Deck | Kort | Endring denne kjøringen |
|------|------|-------------------------|
| acit4050 | 86 | +1 (`4050-new-quizzes-lti` meta) |
| acit4280 | 165 | +3 supplement (smart metering, fitness PDF meta) |
| acit4100 | 110 | +8 usable security (Spine A reading pack) |
| computer-basics | 28 | uendret |
| fellesjam-general | 26 | Mastodon fix + nslookup; curl/FQDN polish |
| **Fellesjam pool** | **415** | merge av alle fem decks |

**Cache:** `sw.js` = `msc-cyber-lock34`, `quiz-decks.js?v=lock34`  
**Sync:** Dev -> OneDrive Guider (index.html, quiz-decks.js, sw.js, JSON, bat, manifest, framework-practice.js)

---

## 1. Mal og struktur

### Fag-decks (per emne)

| Deck-nøkkel | Emne | Tittel i app | Kilde | Status |
|-------------|------|--------------|-------|--------|
| `acit4050` | ACIT4050 | Terminal & lab | Canvas + lab + Lecture 1 | 86 kort |
| `acit4280` | ACIT4280 | Privacy / GDPR | Canvas moduler L1-L6 + supplement | 165 kort |
| `acit4100` | ACIT4100 | Research | Canvas sider + rubric + usable security | 110 kort |
| `computer-basics` | - | Computer for dummies | Egen grunnleggende PC | 28 kort |

### Fellesjam (blandet)

| Deck-nøkkel | Innhold |
|-------------|---------|
| `fellesjam-general` | Generell cyber-grunnmur (DNS, curl, TLS, CLI, Mastodon, osv.) |
| `fellesjam` (virtuell) | **Merge** av alle fag-decks + `fellesjam-general` + `computer-basics` |

---

## 2. Dataformat

```json
{
  "course": "ACIT4050",
  "title": "Terminal & lab",
  "cards": [
    {
      "id": "4050-pwd",
      "q": "Question",
      "a": "Answer",
      "tags": ["navigation", "terminal"],
      "figure": { "type": "img", "src": "figures/...", "alt": "...", "caption": "..." }
    }
  ]
}
```

**Regler:**

- Runtime: `quiz-decks.js` (file://-vennlig, ingen fetch)
- Vedlikehold: speil i `quiz-data/*.json`
- Behold `id` ved oppdateringer (spaced repetition)
- Ingen em dash / en dash i innhold (kun `-`)
- Fargepalett i HTML: `#071952`, `#0B666A`, `#97FEED`, `#35A29F`
- UI-språk: **engelsk** (eksisterende konvensjon)

---

## 3. Canvas sync-arbeidsflyt

```
Canvas (oslomet.instructure.com)
    |
    v
Lokal scrape (OneDrive Emner/)
    |
    v
Kuraterte kort (_tools/expand_quiz_decks.py)
    |
    v
quiz-data/*.json  +  quiz-decks.js
    |
    v
Synk Dev <-> OsloMet Guider
    |
    v
Git push msc_cyber-syllabus (kun etter godkjenning)
```

---

## 4. Faseplan (utført vs gjenstår)

| Fase | Scope | Status |
|------|-------|--------|
| **1** | Plan + mapping + fellesjam-general + merge-scaffold | **Ferdig** |
| **2** | Canvas crawl ACIT4050 New Quizzes | **BLOCKERT** (Feide + CDP Begin) |
| **3** | ACIT4280 supplement + scrape review | **Delvis ferdig** (165 kort; TETs case + quiz-sider gjenstår) |
| **4** | ACIT4100 usable security | **Ferdig** (110 kort; mandatory quiz crawl gjenstår) |
| **5** | UI, cache bump, smoke test, OneDrive sync | **Ferdig lokalt** (GitHub push venter Karina) |
| **6** | Krasjkurs / filter / this-week | Senere |

---

## 5. Blokkere (needs Canvas / Feide)

1. **ACIT4050 New Quizzes** - eksporter spørsmål via innlogget CDP + Begin forsøk (se `TODO_quiz_oppdatering.md` stegliste).
2. **4280 fitness-apps PDF** - meta-kort finnes; detaljkort trenger PDF-tekst.
3. **4280 Assignment 2A TETs** - case-spesifikke kort fra egen rapport.
4. **4100 mandatory information quiz** - crawl.

---

## 6. Avklaringer (Karina aug 2026)

1. **Mastodontserver** = Mastodon server (`fj-mastodon-server`) - ferdig.
2. **Fellesjam** inkluderer computer-basics + alle fag-decks + general - bekreftet, 415 kort pool.
3. **cyber1** = `acit-study-quiz` / `msc_cyber-syllabus` - bekreftet.

---

## 7. Relaterte filer

| Fil | Formål |
|-----|--------|
| `SUBJECT_MAPPING.md` | Canvas modul -> deck-kort mapping |
| `TODO_quiz_oppdatering.md` | Sjekkliste per fase + CDP-steg |
| `quiz-data/fellesjam-general.json` | Generell grunnmur |
| `_tools/expand_quiz_decks.py` | Merge nye kort + rebuild JS + Dev->OneDrive sync |
