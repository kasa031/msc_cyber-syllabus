/**
 * Daily retrieval session UI + spaced-break nudge (habit framing, low cognitive load).
 */
(function () {
  "use strict";

  var TIPS = [
    "Spacing beats cramming: short sessions spread over days improve long-term retention (Nature Reviews Psychology, 2022).",
    "Try to recall before you peek - retrieval practice strengthens memory more than re-reading.",
    "Immediate feedback after a guess helps you fix errors while the question is still fresh.",
    "Mix topics occasionally (interleaving) - it feels harder but improves exam transfer.",
    "A small daily goal you can finish beats a huge backlog that feels like a chore."
  ];

  var BREAK_MS = 25 * 60 * 1000;
  var breakTimer = null;
  var breakEnds = 0;

  function $(id) {
    return document.getElementById(id);
  }

  function readGoal() {
    try {
      var n = parseInt(localStorage.getItem("acit-daily-goal-v1"), 10);
      return n > 0 ? n : 10;
    } catch (e) {
      return 10;
    }
  }

  function readTodayReviews() {
    try {
      var raw = localStorage.getItem("acit-study-xp-v1");
      if (!raw) return 0;
      var xp = JSON.parse(raw);
      return xp && xp.todayReviews ? xp.todayReviews : 0;
    } catch (e) {
      return 0;
    }
  }

  function syncRing() {
    var goal = readGoal();
    var today = readTodayReviews();
    var pct = goal ? Math.min(100, Math.round((today / goal) * 100)) : 0;
    var ring = $("research-daily-ring");
    var label = $("research-daily-label");
    var sub = $("research-session-sub");
    if (ring) ring.style.setProperty("--ring-pct", pct + "%");
    if (label) label.textContent = today + "/" + goal;
    if (sub) {
      sub.textContent =
        today >= goal
          ? "Daily retrieval goal done. Optional extra review still helps spacing."
          : "Today's session: " + Math.max(0, goal - today) + " more recall" + (goal - today === 1 ? "" : "s") + " to hit your pace.";
    }
  }

  function rotateTip() {
    var el = $("research-tip");
    if (!el) return;
    var i = Math.floor(Date.now() / 60000) % TIPS.length;
    el.textContent = TIPS[i];
  }

  function startBreak() {
    var btn = $("research-break-btn");
    breakEnds = Date.now() + BREAK_MS;
    if (breakTimer) clearInterval(breakTimer);
    if (btn) {
      btn.classList.add("research-break-active");
      btn.textContent = "Break: 25:00";
    }
    breakTimer = setInterval(function () {
      var left = breakEnds - Date.now();
      if (left <= 0) {
        clearInterval(breakTimer);
        breakTimer = null;
        if (btn) {
          btn.classList.remove("research-break-active");
          btn.textContent = "Focus break (25 min)";
        }
        if (window.Notification && Notification.permission === "granted") {
          new Notification("Break time", { body: "Step away for a few minutes, then resume retrieval practice." });
        }
        return;
      }
      var m = Math.floor(left / 60000);
      var s = Math.floor((left % 60000) / 1000);
      if (btn) btn.textContent = "Break: " + m + ":" + (s < 10 ? "0" : "") + s;
    }, 1000);
  }

  function init() {
    var bar = $("research-session-bar");
    if (!bar) return;
    rotateTip();
    syncRing();
    setInterval(rotateTip, 60000);
    window.addEventListener("storage", syncRing);
    document.addEventListener("acit-xp-updated", syncRing);
    var breakBtn = $("research-break-btn");
    if (breakBtn) breakBtn.addEventListener("click", startBreak);
    var startBtn = $("research-start-session");
    if (startBtn) {
      startBtn.addEventListener("click", function () {
        var quizSection = document.getElementById("tab-section-quiz");
        if (quizSection) quizSection.click();
        var homeStart = document.getElementById("quiz-home-start");
        if (homeStart) homeStart.click();
        else window.location.hash = "4050";
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.acitLearningSessionSync = syncRing;
})();
