/**
 * Exam prep hub (exam-rep.html) - no Canvas assignment deadlines.
 * Product goal: repeat highest-yield pensum in the shortest time (5-10 min sprints).
 */
(function () {
  var STORAGE_CHECKLIST = "acit-exam-prep-milestones-v1";
  var STORAGE_CHALLENGE = "acit-exam-challenge-v1";
  var PENSUM_BLOCK = ["needs-canvas", "optional-sources", "inferred", "meta-only", "off-pensum"];
  var EXAMS = {
    "4050": { el: "cd-4050", at: "2026-11-26T09:00:00+01:00", label: "4050 written exam", deckKey: "acit4050" },
    "4280": { el: "cd-4280", at: "2026-12-10T15:00:00+01:00", label: "4280 written exam", deckKey: "acit4280" }
  };
  var UNIT_MAP = {
    acit4050: [
      { tag: "exam", label: "Official exam-style questions" },
      { tag: "data-in-transit", label: "TLS and PKI (data in transit)" },
      { tag: "Lecture2", label: "Phishing and malware" },
      { tag: "Lecture3", label: "Networks and TCP/IP" }
    ],
    acit4280: [
      { tag: "Lecture1", label: "GDPR intro" },
      { tag: "Lecture2", label: "PETs" },
      { tag: "Lecture6", label: "Privacy patterns" },
      { tag: "PIA", label: "PIA and risk" }
    ]
  };
  var MILESTONES = [
    { id: "prep-daily", course: "both", text: "Hit your daily card goal once" },
    { id: "prep-4050-test", course: "4050", text: "Complete a 4050 timed test", href: "index.html?study=test#4050" },
    { id: "prep-4280-test", course: "4280", text: "Complete a 4280 timed test", href: "index.html?study=test#4280" },
    { id: "prep-mixed", course: "both", text: "Mixed dry run 5+5", href: "index.html?study=test&mixed=1" },
    { id: "prep-frameworks", course: "4050", text: "NIST + Kill Chain + MITRE drills", href: "index.html#practice" },
    { id: "prep-instantons", course: "4280", text: "InstantONS drill once", href: "index.html#instantons" },
    { id: "prep-exam-tag", course: "4050", text: "Practice exam-tag cards", href: "index.html?tag=exam&study=quiz#4050" },
    { id: "prep-streak", course: "both", text: "3-day study streak" }
  ];

  function todayKey() {
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Oslo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    } catch (e) {
      return new Date().toISOString().slice(0, 10);
    }
  }

  function loadSchedForDeck(deckKey) {
    var found = null;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!k) continue;
        if (k === "acit-quiz-sr-v1-" + deckKey || k === "acit-srs-v2-" + deckKey) {
          found = JSON.parse(localStorage.getItem(k) || "{}");
          break;
        }
        if (k.indexOf("acit-srs-v2-") === 0 && k.slice(-deckKey.length) === deckKey) {
          found = JSON.parse(localStorage.getItem(k) || "{}");
          break;
        }
      }
    } catch (e) { /* ignore */ }
    return found || {};
  }

  function cardBlocked(c) {
    var tags = c.tags || [];
    for (var t = 0; t < tags.length; t++) {
      if (PENSUM_BLOCK.indexOf(tags[t]) >= 0) return true;
    }
    return false;
  }

  function cardHasTag(c, tag) {
    return (c.tags || []).indexOf(tag) >= 0;
  }

  function schedWeak(s) {
    if (!s) return false;
    if (s.status === "relearning") return true;
    if ((s.lapses || 0) >= 1) return true;
    if (s.status === "learning" && ((s.learningStep || 0) > 0 || (s.repetitions || 0) > 0)) return true;
    return false;
  }

  function cardDue(sched, cardId) {
    var s = sched[cardId];
    if (!s) return true;
    return (typeof s.due === "number" ? s.due : 0) <= Date.now();
  }

  function fetchDeck(deckKey) {
    return fetch("quiz-data/" + deckKey + ".json").then(function (r) { return r.json(); });
  }

  function deckStats(deckKey) {
    return fetchDeck(deckKey).then(function (deck) {
      var sched = loadSchedForDeck(deckKey);
      var pensum = 0;
      var due = 0;
      var attempted = 0;
      (deck.cards || []).forEach(function (c) {
        if (!c || !c.id || !c.q || !c.a || cardBlocked(c)) return;
        pensum += 1;
        var s = sched[c.id];
        if (!s || (s.repetitions || 0) > 0 || s.status === "review") attempted += 1;
        if (cardDue(sched, c.id)) due += 1;
      });
      return { pensum: pensum, due: due, attempted: attempted };
    }).catch(function () { return { pensum: 0, due: 0, attempted: 0 }; });
  }

  function weakestUnit(deckKey) {
    var units = UNIT_MAP[deckKey] || [];
    return fetchDeck(deckKey).then(function (deck) {
      var sched = loadSchedForDeck(deckKey);
      var best = null;
      var bestWeak = 0;
      units.forEach(function (u) {
        var weak = 0;
        (deck.cards || []).forEach(function (c) {
          if (!c || !c.id || cardBlocked(c) || !cardHasTag(c, u.tag)) return;
          if (schedWeak(sched[c.id])) weak += 1;
        });
        if (weak > bestWeak) {
          bestWeak = weak;
          best = u;
        }
      });
      if (best) return { deckKey: deckKey, tag: best.tag, label: best.label, weak: bestWeak };
      var fallback = units[0];
      if (!fallback) return null;
      return { deckKey: deckKey, tag: fallback.tag, label: fallback.label, weak: 0 };
    });
  }

  function daysUntil(isoDate) {
    try {
      var parts = String(isoDate).split("-");
      var target = Date.UTC(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      var tp = todayKey().split("-");
      var now = Date.UTC(Number(tp[0]), Number(tp[1]) - 1, Number(tp[2]));
      return Math.round((target - now) / 86400000);
    } catch (e) {
      return 99;
    }
  }

  function expressPlayUrl(deckKey, opts) {
    opts = opts || {};
    var hash = deckKey === "acit4280" ? "4280" : "4050";
    var parts = ["study=quiz"];
    if (opts.weak) {
      parts.push("weak=1", "limit=8");
    } else {
      parts.push("due=1", "limit=" + (opts.limit || 5));
    }
    if (opts.tag) parts.push("tag=" + encodeURIComponent(opts.tag));
    return "index.html?" + parts.join("&") + "#" + hash;
  }

  function buildDailyChallenge() {
    var day = todayKey();
    try {
      var raw = localStorage.getItem(STORAGE_CHALLENGE);
      if (raw) {
        var prev = JSON.parse(raw);
        if (prev && prev.day === day) return Promise.resolve(prev);
      }
    } catch (e) { /* ignore */ }

    var deckPick = daysUntil("2026-11-26") <= daysUntil("2026-12-10") ? "acit4050" : "acit4280";
    if (day.charCodeAt(day.length - 1) % 2 === 1) {
      deckPick = deckPick === "acit4050" ? "acit4280" : "acit4050";
    }
    var near4050 = daysUntil("2026-11-26") <= 21;
    if (near4050 && deckPick === "acit4050") {
      return Promise.resolve({
        day: day,
        deckKey: "acit4050",
        hash: "4050",
        tag: "exam",
        label: "Official exam-style questions",
        goal: 6
      }).then(function (ch) {
        try { localStorage.setItem(STORAGE_CHALLENGE, JSON.stringify(ch)); } catch (e2) { /* ignore */ }
        return ch;
      });
    }
    return weakestUnit(deckPick).then(function (w) {
      if (!w) w = { deckKey: "acit4050", tag: "exam", label: "Exam-style questions", weak: 0 };
      var hash = w.deckKey === "acit4280" ? "4280" : "4050";
      var ch = {
        day: day,
        deckKey: w.deckKey,
        hash: hash,
        tag: w.tag,
        label: w.label,
        goal: 6
      };
      try { localStorage.setItem(STORAGE_CHALLENGE, JSON.stringify(ch)); } catch (e2) { /* ignore */ }
      return ch;
    });
  }

  function challengePlayUrl(ch) {
    if (!ch) return "index.html?study=quiz#4050";
    return "index.html?study=quiz&tag=" + encodeURIComponent(ch.tag) + "#" + ch.hash;
  }

  function updateCountdowns() {
    var now = Date.now();
    Object.keys(EXAMS).forEach(function (k) {
      var cfg = EXAMS[k];
      var node = document.getElementById(cfg.el);
      if (!node) return;
      var t = new Date(cfg.at).getTime() - now;
      if (t <= 0) {
        node.textContent = cfg.label + ": date passed (check Studentweb).";
        return;
      }
      var days = Math.floor(t / 86400000);
      var hrs = Math.floor((t % 86400000) / 3600000);
      node.textContent = days + " days, " + hrs + " hours until " + cfg.label;
      node.classList.toggle("urgent", days < 14);
    });
  }

  function renderTodayStrip() {
    var reviewsEl = document.getElementById("today-reviews");
    var streakEl = document.getElementById("today-streak");
    var ring = document.getElementById("today-ring");
    var ringLabel = document.getElementById("today-ring-label");
    var goal = 10;
    try {
      var g = parseInt(localStorage.getItem("acit-daily-goal-v1"), 10);
      if (g > 0) goal = g;
    } catch (eG) { /* ignore */ }
    var today = 0;
    var streak = 0;
    try {
      var xp = JSON.parse(localStorage.getItem("acit-study-xp-v1") || "{}");
      today = xp.todayReviews || 0;
      streak = xp.streak || 0;
    } catch (eXp) { /* ignore */ }
    if (reviewsEl) reviewsEl.textContent = String(today);
    if (streakEl) streakEl.textContent = String(streak);
    var pct = goal ? Math.min(100, Math.round((today / goal) * 100)) : 0;
    if (ring) ring.style.setProperty("--ring-pct", pct + "%");
    if (ringLabel) ringLabel.textContent = today + "/" + goal;
  }

  function renderReadiness() {
    ["4050", "4280"].forEach(function (k) {
      var cfg = EXAMS[k];
      deckStats(cfg.deckKey).then(function (st) {
        var bar = document.getElementById("ready-bar-" + k);
        var label = document.getElementById("ready-label-" + k);
        var dueEl = document.getElementById("due-" + k);
        var pct = st.pensum ? Math.round((st.attempted / st.pensum) * 100) : 0;
        if (bar) bar.style.width = pct + "%";
        if (label) label.textContent = pct + "% touched (" + st.attempted + " / " + st.pensum + " syllabus cards)";
        if (dueEl) dueEl.textContent = st.due + " cards due in your queue now";
      });
    });
  }

  function renderWeakSpots() {
    weakestUnit("acit4050").then(function (res) {
      var text = document.getElementById("weak-4050-text");
      var go = document.getElementById("weak-4050-go");
      if (!text || !res) return;
      text.textContent = res.weak > 0
        ? res.label + ": " + res.weak + " missed or lapsed cards."
        : "Start with " + res.label + " - rate cards honestly so weak spots show up.";
      if (go) {
        go.hidden = false;
        go.href = "index.html?tag=" + encodeURIComponent(res.tag) + "&study=quiz#4050";
        go.textContent = "Play " + res.tag;
      }
    });
    weakestUnit("acit4280").then(function (res) {
      var text = document.getElementById("weak-4280-text");
      var go = document.getElementById("weak-4280-go");
      if (!text || !res) return;
      text.textContent = res.weak > 0
        ? res.label + ": " + res.weak + " missed or lapsed cards."
        : "Start with " + res.label + ".";
      if (go) {
        go.hidden = false;
        go.href = "index.html?tag=" + encodeURIComponent(res.tag) + "&study=quiz#4280";
        go.textContent = "Play " + res.tag;
      }
    });
  }

  function renderChallenge() {
    buildDailyChallenge().then(function (ch) {
      var title = document.getElementById("challenge-title");
      var body = document.getElementById("challenge-body");
      var meta = document.getElementById("challenge-meta");
      var go = document.getElementById("challenge-go");
      var hero = document.getElementById("hero-play-main");
      if (title) title.textContent = "Today's challenge";
      if (body) body.textContent = ch.label + " (" + (ch.deckKey === "acit4280" ? "4280" : "4050") + ")";
      if (meta) meta.textContent = "About 5-8 min: rate " + ch.goal + " cards. Syllabus-only; due and exam tags come first in the queue.";
      var url = challengePlayUrl(ch);
      if (go) go.href = url;
      if (hero) hero.href = url;
    });
  }

  function renderPensumTrust() {
    Promise.all([deckStats("acit4050"), deckStats("acit4280")]).then(function (pair) {
      var el = document.getElementById("pensum-trust-text");
      if (!el) return;
      el.textContent = "Syllabus pool: " + pair[0].pensum + " (4050) + " + pair[1].pensum + " (4280) cards from slides, Canvas quizzes, and official exam examples. Cards tagged needs-canvas stay out of timed tests until verified.";
    });
  }

  function loadMilestones() {
    try {
      var raw = localStorage.getItem(STORAGE_CHECKLIST);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return {};
  }

  function saveMilestones(state) {
    try { localStorage.setItem(STORAGE_CHECKLIST, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function syncMilestonesFromXp(state) {
    var changed = false;
    function tick(id, ok) {
      if (!ok || state[id]) return;
      state[id] = true;
      changed = true;
    }
    try {
      var xp = JSON.parse(localStorage.getItem("acit-study-xp-v1") || "{}");
      var goal = parseInt(localStorage.getItem("acit-daily-goal-v1"), 10) || 10;
      tick("prep-daily", (xp.todayReviews || 0) >= goal || (xp.maxTodayReviews || 0) >= goal);
      tick("prep-4050-test", (xp.test4050Done || 0) >= 1);
      tick("prep-4280-test", (xp.test4280Done || 0) >= 1);
      tick("prep-mixed", (xp.mixedTestDone || 0) >= 1);
      tick("prep-frameworks", (xp.nistDone || 0) >= 1 && (xp.killDone || 0) >= 1 && (xp.mitreDone || 0) >= 1);
      tick("prep-instantons", (xp.instantonsDone || 0) >= 1);
      tick("prep-streak", (xp.streak || 0) >= 3);
      tick("prep-exam-tag", (xp.examTag4050Done || 0) >= 1);
    } catch (e) { /* ignore */ }
    if (changed) saveMilestones(state);
    return state;
  }

  function renderMilestones() {
    var ul = document.getElementById("prep-milestones");
    if (!ul) return;
    var state = syncMilestonesFromXp(loadMilestones());
    ul.innerHTML = "";
    MILESTONES.forEach(function (item) {
      var li = document.createElement("li");
      var label = document.createElement("label");
      label.className = "check-item";
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!state[item.id];
      var span = document.createElement("span");
      span.className = "check-text" + (cb.checked ? " done" : "");
      span.innerHTML = "<span class=\"tag\" style=\"margin-right:0.35rem\">" + item.course + "</span>" + item.text;
      label.appendChild(cb);
      label.appendChild(span);
      if (item.href) {
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = "Go";
        a.style.marginLeft = "0.35rem";
        a.style.fontSize = "0.82rem";
        label.appendChild(a);
      }
      li.appendChild(label);
      ul.appendChild(li);
      cb.addEventListener("change", function () {
        state[item.id] = cb.checked;
        saveMilestones(state);
        span.classList.toggle("done", cb.checked);
        syncMilestoneBar(state);
      });
    });
    syncMilestoneBar(state);
  }

  function syncMilestoneBar(state) {
    var done = MILESTONES.filter(function (m) { return state[m.id]; }).length;
    var fill = document.getElementById("milestone-fill");
    var label = document.getElementById("milestone-done");
    if (label) label.textContent = String(done);
    if (fill) fill.style.width = (MILESTONES.length ? Math.round((done / MILESTONES.length) * 100) : 0) + "%";
  }

  function renderExpressGrid() {
    var grid = document.getElementById("express-grid");
    if (!grid) return;
    var items = [
      { label: "4050: 5 due", href: expressPlayUrl("acit4050", { limit: 5 }), primary: true },
      { label: "4280: 5 due", href: expressPlayUrl("acit4280", { limit: 5 }), primary: true },
      { label: "4050 exam examples", href: expressPlayUrl("acit4050", { tag: "exam", limit: 6 }), primary: false },
      { label: "Mixed test 5+5 (~10 min)", href: "index.html?study=test&mixed=1", primary: false }
    ];
    grid.innerHTML = "";
    items.forEach(function (it) {
      var a = document.createElement("a");
      a.href = it.href;
      a.className = it.primary ? "express-tile primary" : "express-tile";
      a.textContent = it.label;
      grid.appendChild(a);
    });
    Promise.all([weakestUnit("acit4050"), weakestUnit("acit4280")]).then(function (pair) {
      pair.forEach(function (res, i) {
        if (!res || res.weak < 1) return;
        var dk = i === 0 ? "acit4050" : "acit4280";
        var a = document.createElement("a");
        a.href = expressPlayUrl(dk, { weak: true });
        a.className = "express-tile warn";
        a.textContent = (i === 0 ? "4050" : "4280") + ": missed (" + res.weak + ")";
        grid.appendChild(a);
      });
    });
  }

  function init() {
    try { localStorage.setItem("acit-exam-focus-v1", "1"); } catch (e) { /* ignore */ }
    updateCountdowns();
    setInterval(updateCountdowns, 60000);
    renderTodayStrip();
    renderChallenge();
    renderExpressGrid();
    renderReadiness();
    renderWeakSpots();
    renderPensumTrust();
    renderMilestones();
    var reset = document.getElementById("milestone-reset");
    if (reset) {
      reset.addEventListener("click", function () {
        if (!confirm("Reset prep milestones on this device?")) return;
        saveMilestones({});
        renderMilestones();
      });
    }
    window.addEventListener("storage", function () {
      renderTodayStrip();
      renderMilestones();
    });
    document.addEventListener("acit-xp-updated", function () {
      renderTodayStrip();
      renderMilestones();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.examPrepBuildChallenge = buildDailyChallenge;
  window.examPrepChallengePlayUrl = challengePlayUrl;
})();
