# Subject mapping: Canvas moduler -> quiz decks

**Oppdatert:** 2026-08-22 (ferdig kjøring)  
**Kildekatalog:** `OsloMet_Hosten2026\Emner\`

Legende: **OK** = kort finnes | **DEL** = delvis | **GAP** = needs Canvas crawl

---

## ACIT4050 - Applied Computer and Network Security

**Deck:** `acit4050` (86 kort)  
**Canvas:** course 34599  
**Lokal pensum:** `Emner/_pensum_illustrasjoner/ACIT4050/` (canvas_folder_catalog tom per aug 2026)

| Canvas / pensum område | Deck-dekning | Notater |
|------------------------|--------------|---------|
| Terminal (pwd, ls, cd, pipe, chmod) | **OK** | Terminal tutorial + quiz |
| CIA triad, confidentiality, integrity, availability | **OK** | Lecture 1 + expand_quiz_decks.py |
| Lecture 1 intro (malware, kill chain, NIST CSF) | **OK** | apply-4050-intro-cards.js |
| Firewalls, NAT, VPN, crypto protocols | **DEL** | Noen kort; flere fra forelesninger |
| Penetration testing / cyber defence | **DEL** | Syllabus-kort; Lecture 2+ needs crawl |
| New Quizzes (Intro Lecture, senere uker) | **GAP** | LTI - `4050-new-quizzes-lti` meta; spørsmål needs CDP crawl |
| DNS, curl, dig, bind, zonefile | **OK** i fellesjam | `fellesjam-general` (generell grunnmur) |
| NIST CSF 2.0 + Kill Chain | **OK** | `framework-practice.js` (practice-fane, ikke flashcards) |
| Kali + Ubuntu lab setup | **DEL** | Guider lokalt; få quiz-kort |

---

## ACIT4280 - Privacy by Design / GDPR

**Deck:** `acit4280` (165 kort)  
**Canvas:** course 34604  
**Scrape:** `Emner/ACIT4280/modules/_scripts/_all_modules_scrape.json`

| Canvas modul (pos) | Innhold | Deck-dekning |
|--------------------|---------|--------------|
| 1 Overview | Course structure, schedule, exam | **DEL** (meta-kort) |
| 2 Introduction | Intro PDF, privacy concepts | **OK** |
| 3-8 L1-L6 lectures | GDPR principles, lawfulness, rights, PETs, TETs | **OK** (hovedbulk) |
| Assignments 1A Webbkoll | Praktisk analyse | **DEL** (`4280-webbkoll`; case-detaljer) |
| Assignment 2A TETs | Praktisk analyse | **GAP** (needs rapport + Canvas) |
| Mobile Computing & Smart Metering | Supplement slides + readings | **DEL** (`4280-supplement-smart-meter*`) |
| Casestudy-fitness-apps.pdf | PbD case PDF | **DEL** (meta-kort; PDF ikke tekst-scrapet) |
| YouTube supplement slides | Sektorlover, smart meters, osv. | **DEL** (quiz-sider skipped i scrape) |

**Illustrasjoner:** `_pensum_illustrasjoner/ACIT4280/curated/` wired into quiz.

---

## ACIT4100 - Understanding and Communicating Research

**Deck:** `acit4100` (110 kort)  
**Canvas:** (course id verifiseres)

| Canvas / pensum område | Deck-dekning | Notater |
|------------------------|--------------|---------|
| Essay rubric (stjerner *, **, ***) | **OK** | Mange vurderingskort |
| APA7 / Overleaf / locators | **OK** | |
| IMRaD, Toulmin, peer review | **OK** | |
| Usable security (Spine A reading pack) | **OK** | 8 kort fra `Topics/Usable_security/reading_list.md` |
| Mandatory information quiz | **GAP** | Meta-kort; ikke alle quiz-spørsmål |
| Assignment 1 taxonomy / Assignment 2 presentation | **DEL** | Offisielle navn/deadlines; ikke oppgavetekst |
| Optional source list (Writing, Freytag, osv.) | **DEL** | Merket optional-sources |

---

## computer-basics

**Deck:** `computer-basics` (28 kort)  
**Kilde:** Egen PC-grunnmur (ikke Canvas-emne)

| Tema | Deck-dekning |
|------|--------------|
| Explorer, paths, Task Manager | **OK** |
| Win shortcuts (Win+E, Win+I) | **OK** |
| Snap side-by-side | **DEL** | Også `fj-win-snap` i fellesjam-general |

---

## fellesjam-general

**Deck:** `fellesjam-general` (26 kort)  
**Kilde:** Karinas eksplisitte grunnmur-liste (aug 2026) - **ikke** Canvas-spørsmål

| Tema | Kort-ID prefix | Canvas? |
|------|----------------|---------|
| curl, dig, nslookup, man, bash, apt | `fj-*` | Generell / lab |
| DNS, FQDN, A/MX, zonefile, bind | `fj-*` | Generell / lab |
| CDN, TCP port, whois, IPv4/IPv6 | `fj-*` | Generell |
| Crypto/TLS (OpenSSL, TLS 1.2/1.3, SSL) | `fj-*` | Generell + 4050 overlap senere |
| Encryption vs hash vs auth | `fj-*` | Generell |
| Windows snap | `fj-win-snap` | PC overlap |
| Own DNS server (free tier) | `fj-own-dns-free` | **needs-canvas** (lab steps) |
| Mastodon server | `fj-mastodon-server` | **OK** (avklart = fediverse instance) |

---

## fellesjam (virtuell merge)

**Kilder ved kjøring:**

1. `acit4050` (86)
2. `acit4280` (165)
3. `acit4100` (110)
4. `computer-basics` (28)
5. `fellesjam-general` (26)

**Pool:** 415 kort (unike id-er)

**Bekreftet:** Inkluderer computer-basics + alle fag-decks + general foundation.

**Senere:** filter/tag-modus (kun "due this week", kun DNS-tag, osv.)
