/* NIST CSF 2.0 wheel + Lockheed Martin Kill Chain + MITRE ATT&CK drag practice (pointer + tap). */
(function (global) {
  "use strict";

  /* Karina palette - flat solids only */
  var NIST_SLOTS = [
    { id: "govern", label: "GOVERN", color: "#5003C0", text: "#FFF9E6" },
    { id: "identify", label: "IDENTIFY", color: "#AB03A9", text: "#FFF9E6" },
    { id: "protect", label: "PROTECT", color: "#FF467A", text: "#FFF9E6" },
    { id: "detect", label: "DETECT", color: "#FFD51E", text: "#5003C0" },
    { id: "respond", label: "RESPOND", color: "#5003C0", text: "#FFF9E6" },
    { id: "recover", label: "RECOVER", color: "#AB03A9", text: "#FFF9E6" }
  ];

  var KILL_SLOTS = [
    { id: "recon", label: "Recon" },
    { id: "weaponise", label: "Weaponise" },
    { id: "deliver", label: "Deliver" },
    { id: "exploit", label: "Exploit" },
    { id: "install", label: "Install" },
    { id: "c2", label: "C2" },
    { id: "action", label: "Action" }
  ];

  /* Eight enterprise tactics in attack lifecycle order (study subset of MITRE ATT&CK). */
  var MITRE_SLOTS = [
    { id: "recon", label: "Reconnaissance" },
    { id: "initial", label: "Initial access" },
    { id: "execution", label: "Execution" },
    { id: "persistence", label: "Persistence" },
    { id: "privesc", label: "Priv esc" },
    { id: "evasion", label: "Defense evasion" },
    { id: "c2", label: "Command and control" },
    { id: "impact", label: "Impact" }
  ];

  var KILL_COLORS = ["#5003C0", "#AB03A9", "#FF467A", "#FFD51E"];
  var KILL_BLUE = KILL_COLORS[0];

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function fpFlowStatus(el, kind, text) {
    if (!el) return;
    var SF = global.SolvableFlow;
    if (kind === "idle") {
      el.className = "fp-status";
      el.textContent = text || "";
      return;
    }
    if (SF) {
      if (kind === "ok") SF.correct(el, text);
      else if (kind === "soft") SF.miss(el, text);
      else SF.show(el, kind, String(text || ""));
      return;
    }
    el.className = "fp-status" + (kind === "ok" ? " ok" : kind === "soft" ? " soft" : "");
    el.textContent = text || "";
  }

  function polar(cx, cy, r, deg) {
    var rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function annularSector(cx, cy, r0, r1, a0, a1) {
    var large = a1 - a0 > 180 ? 1 : 0;
    var p0 = polar(cx, cy, r1, a0);
    var p1 = polar(cx, cy, r1, a1);
    var p2 = polar(cx, cy, r0, a1);
    var p3 = polar(cx, cy, r0, a0);
    return [
      "M", p0.x, p0.y,
      "A", r1, r1, 0, large, 1, p1.x, p1.y,
      "L", p2.x, p2.y,
      "A", r0, r0, 0, large, 0, p3.x, p3.y,
      "Z"
    ].join(" ");
  }

  /* Full donut (Govern ring) with evenodd hole */
  function fullRing(cx, cy, r0, r1) {
    return [
      "M", cx - r1, cy,
      "A", r1, r1, 0, 1, 1, cx + r1, cy,
      "A", r1, r1, 0, 1, 1, cx - r1, cy,
      "M", cx - r0, cy,
      "A", r0, r0, 0, 1, 0, cx + r0, cy,
      "A", r0, r0, 0, 1, 0, cx - r0, cy,
      "Z"
    ].join(" ");
  }

  function midAngle(a0, a1) {
    return (a0 + a1) / 2;
  }

  function createDragController(opts) {
    var root = opts.root;
    var tray = opts.tray;
    var getSlotEl = opts.getSlotEl;
    var onCorrect = opts.onCorrect;
    var onWrong = opts.onWrong;
    var onComplete = opts.onComplete;
    var selectedId = null;
    var dragId = null;
    var ghost = null;
    var pointerId = null;
    var startX = 0;
    var startY = 0;
    var dragging = false;
    var placed = Object.create(null);

    function chipEl(id) {
      return tray.querySelector('.fp-chip[data-id="' + id + '"]');
    }

    function clearSelection() {
      selectedId = null;
      tray.querySelectorAll(".fp-chip").forEach(function (c) {
        c.classList.remove("is-selected");
      });
      root.querySelectorAll(".fp-slot.is-target").forEach(function (s) {
        s.classList.remove("is-target");
      });
    }

    function setSelection(id) {
      clearSelection();
      selectedId = id;
      var chip = chipEl(id);
      if (chip) chip.classList.add("is-selected");
      root.querySelectorAll(".fp-slot:not(.is-filled)").forEach(function (s) {
        s.classList.add("is-target");
      });
    }

    function removeGhost() {
      if (ghost && ghost.parentNode) ghost.parentNode.removeChild(ghost);
      ghost = null;
    }

    function placeCorrect(slotId, labelId) {
      placed[slotId] = labelId;
      var chip = chipEl(labelId);
      if (chip) {
        chip.classList.add("is-placed");
        chip.setAttribute("aria-disabled", "true");
        chip.draggable = false;
      }
      var slot = getSlotEl(slotId);
      if (slot) {
        slot.classList.add("is-filled", "is-correct");
        slot.classList.remove("is-empty", "is-target", "is-shake");
        slot.setAttribute("data-filled", labelId);
        var labelNode = slot.querySelector(".fp-slot-label");
        if (labelNode) labelNode.textContent = opts.labelFor(labelId);
        onCorrect(slotId, labelId, slot);
      }
      clearSelection();
      var need = opts.slotIds.length;
      var have = Object.keys(placed).length;
      if (have >= need) onComplete();
    }

    function reject(slotEl) {
      if (slotEl) {
        slotEl.classList.remove("is-shake");
        void slotEl.offsetWidth;
        slotEl.classList.add("is-shake");
        window.setTimeout(function () {
          slotEl.classList.remove("is-shake");
        }, 420);
      }
      onWrong();
    }

    function tryPlace(slotId, labelId) {
      if (!slotId || !labelId || placed[slotId]) return;
      if (slotId === labelId) {
        placeCorrect(slotId, labelId);
      } else {
        reject(getSlotEl(slotId));
        clearSelection();
      }
    }

    function slotFromPoint(x, y) {
      var el = document.elementFromPoint(x, y);
      if (!el) return null;
      var slot = el.closest ? el.closest(".fp-slot") : null;
      if (slot && root.contains(slot)) return slot.getAttribute("data-slot");
      return null;
    }

    function onChipPointerDown(e) {
      var chip = e.currentTarget;
      if (chip.classList.contains("is-placed")) return;
      var id = chip.getAttribute("data-id");
      if (!id) return;
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        e.preventDefault();
      }
      pointerId = e.pointerId;
      dragId = id;
      startX = e.clientX;
      startY = e.clientY;
      dragging = false;
      try {
        chip.setPointerCapture(e.pointerId);
      } catch (err) { /* ignore */ }
    }

    function onChipPointerMove(e) {
      if (pointerId !== e.pointerId || !dragId) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      if (!dragging && dx * dx + dy * dy > 36) {
        dragging = true;
        clearSelection();
        removeGhost();
        ghost = document.createElement("div");
        ghost.className = "fp-ghost";
        ghost.textContent = opts.labelFor(dragId);
        document.body.appendChild(ghost);
      }
      if (dragging && ghost) {
        ghost.style.transform =
          "translate(" + (e.clientX - ghost.offsetWidth / 2) + "px," + (e.clientY - ghost.offsetHeight / 2) + "px)";
      }
    }

    function onChipPointerUp(e) {
      if (pointerId !== e.pointerId || !dragId) return;
      var id = dragId;
      var wasDrag = dragging;
      dragId = null;
      pointerId = null;
      dragging = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) { /* ignore */ }
      if (wasDrag) {
        var slotId = slotFromPoint(e.clientX, e.clientY);
        removeGhost();
        if (slotId) tryPlace(slotId, id);
        return;
      }
      removeGhost();
      if (selectedId === id) clearSelection();
      else setSelection(id);
    }

    function onSlotActivate(e) {
      var slot = e.currentTarget;
      if (slot.classList.contains("is-filled")) return;
      var slotId = slot.getAttribute("data-slot");
      if (!slotId) return;
      if (selectedId) {
        tryPlace(slotId, selectedId);
      }
    }

    function bind() {
      tray.querySelectorAll(".fp-chip").forEach(function (chip) {
        chip.addEventListener("pointerdown", onChipPointerDown);
        chip.addEventListener("pointermove", onChipPointerMove);
        chip.addEventListener("pointerup", onChipPointerUp);
        chip.addEventListener("pointercancel", onChipPointerUp);
      });
      opts.slotIds.forEach(function (sid) {
        var el = getSlotEl(sid);
        if (el) {
          el.addEventListener("click", onSlotActivate);
          el.addEventListener("keydown", function (ev) {
            if (ev.key === "Enter" || ev.key === " ") {
              ev.preventDefault();
              onSlotActivate(ev);
            }
          });
        }
      });
    }

    function resetPlaced() {
      placed = Object.create(null);
      clearSelection();
      removeGhost();
    }

    return { bind: bind, resetPlaced: resetPlaced, placed: function () { return placed; } };
  }

  function buildNistSvg(host) {
    var cx = 200;
    var cy = 200;
    var rHub = 58;
    var rGov0 = 58;
    var rGov1 = 98;
    var rOut0 = 98;
    var rOut1 = 168;
    /* Clockwise from top (-90deg): Identify → Protect → Detect → Respond → Recover */
    var start = -90;
    var step = 72;
    var outer = [
      { id: "identify", a0: start, a1: start + step },
      { id: "protect", a0: start + step, a1: start + 2 * step },
      { id: "detect", a0: start + 2 * step, a1: start + 3 * step },
      { id: "respond", a0: start + 3 * step, a1: start + 4 * step },
      { id: "recover", a0: start + 4 * step, a1: start + 5 * step }
    ];
    var colorMap = Object.create(null);
    NIST_SLOTS.forEach(function (s) { colorMap[s.id] = s.color; });

    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 400 400");
    svg.setAttribute("class", "nist-wheel-svg");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "NIST Cybersecurity Framework 2.0 wheel with drop zones");

    function pathSlot(id, d, fill, textFill, label, lx, ly) {
      var g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "fp-slot nist-slot is-empty");
      g.setAttribute("data-slot", id);
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");
      g.setAttribute("aria-label", "Drop zone for " + label);

      var p = document.createElementNS(svgNS, "path");
      p.setAttribute("d", d);
      p.setAttribute("fill", fill);
      p.setAttribute("stroke", "#fff");
      p.setAttribute("stroke-width", "2.5");
      p.setAttribute("class", "nist-slot-path");
      g.appendChild(p);

      var t = document.createElementNS(svgNS, "text");
      t.setAttribute("x", String(lx));
      t.setAttribute("y", String(ly));
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("dominant-baseline", "middle");
      t.setAttribute("class", "fp-slot-label nist-slot-text");
      t.style.fill = textFill;
      t.textContent = "?";
      g.appendChild(t);
      svg.appendChild(g);
    }

    var govG = document.createElementNS(svgNS, "g");
    govG.setAttribute("class", "fp-slot nist-slot is-empty");
    govG.setAttribute("data-slot", "govern");
    govG.setAttribute("tabindex", "0");
    govG.setAttribute("role", "button");
    govG.setAttribute("aria-label", "Drop zone for GOVERN");
    var govP = document.createElementNS(svgNS, "path");
    govP.setAttribute("d", fullRing(cx, cy, rGov0, rGov1));
    govP.setAttribute("fill", colorMap.govern);
    govP.setAttribute("fill-rule", "evenodd");
    govP.setAttribute("stroke", "#fff");
    govP.setAttribute("stroke-width", "2.5");
    govP.setAttribute("class", "nist-slot-path");
    govG.appendChild(govP);
    var govT = document.createElementNS(svgNS, "text");
    govT.setAttribute("x", String(cx));
    govT.setAttribute("y", String(cy - (rGov0 + rGov1) / 2));
    govT.setAttribute("text-anchor", "middle");
    govT.setAttribute("dominant-baseline", "middle");
    govT.setAttribute("class", "fp-slot-label nist-slot-text");
    govT.style.fill = NIST_SLOTS[0].text;
    govT.textContent = "?";
    govG.appendChild(govT);
    svg.appendChild(govG);

    outer.forEach(function (seg) {
      var mid = midAngle(seg.a0, seg.a1);
      var pt = polar(cx, cy, (rOut0 + rOut1) / 2, mid);
      var meta = NIST_SLOTS.filter(function (s) { return s.id === seg.id; })[0];
      pathSlot(
        seg.id,
        annularSector(cx, cy, rOut0, rOut1, seg.a0, seg.a1),
        meta.color,
        meta.text,
        meta.label,
        pt.x,
        pt.y
      );
    });

    var hub = document.createElementNS(svgNS, "circle");
    hub.setAttribute("cx", String(cx));
    hub.setAttribute("cy", String(cy));
    hub.setAttribute("r", String(rHub));
    hub.setAttribute("fill", "#FFF9E6");
    hub.setAttribute("stroke", "#fff");
    hub.setAttribute("stroke-width", "2");
    svg.appendChild(hub);

    var hubT1 = document.createElementNS(svgNS, "text");
    hubT1.setAttribute("x", String(cx));
    hubT1.setAttribute("y", String(cy - 10));
    hubT1.setAttribute("text-anchor", "middle");
    hubT1.setAttribute("class", "nist-hub-title");
    hubT1.textContent = "NIST";
    svg.appendChild(hubT1);

    var hubT2 = document.createElementNS(svgNS, "text");
    hubT2.setAttribute("x", String(cx));
    hubT2.setAttribute("y", String(cy + 8));
    hubT2.setAttribute("text-anchor", "middle");
    hubT2.setAttribute("class", "nist-hub-sub");
    hubT2.textContent = "Cybersecurity";
    svg.appendChild(hubT2);

    var hubT3 = document.createElementNS(svgNS, "text");
    hubT3.setAttribute("x", String(cx));
    hubT3.setAttribute("y", String(cy + 24));
    hubT3.setAttribute("text-anchor", "middle");
    hubT3.setAttribute("class", "nist-hub-sub");
    hubT3.textContent = "Framework";
    svg.appendChild(hubT3);

    host.innerHTML = "";
    host.appendChild(svg);
  }

  function buildKillChain(host) {
    host.innerHTML = "";
    var row = document.createElement("div");
    row.className = "kill-row";
    row.setAttribute("role", "list");
    KILL_SLOTS.forEach(function (s, i) {
      var slot = document.createElement("div");
      slot.className = "fp-slot kill-chevron is-empty";
      slot.setAttribute("data-slot", s.id);
      slot.setAttribute("tabindex", "0");
      slot.setAttribute("role", "button");
      slot.setAttribute("aria-label", "Kill Chain slot " + (i + 1));
      slot.style.setProperty("--kill-blue", KILL_COLORS[i % KILL_COLORS.length]);
      var label = document.createElement("span");
      label.className = "fp-slot-label";
      label.textContent = (i + 1) + "";
      slot.appendChild(label);
      row.appendChild(slot);
    });
    host.appendChild(row);
  }

  function buildMitreChain(host) {
    host.innerHTML = "";
    var row = document.createElement("div");
    row.className = "kill-row mitre-row";
    row.setAttribute("role", "list");
    MITRE_SLOTS.forEach(function (s, i) {
      var slot = document.createElement("div");
      slot.className = "fp-slot kill-chevron is-empty";
      slot.setAttribute("data-slot", s.id);
      slot.setAttribute("tabindex", "0");
      slot.setAttribute("role", "button");
      slot.setAttribute("aria-label", "MITRE ATT&CK slot " + (i + 1));
      slot.style.setProperty("--kill-blue", KILL_COLORS[i % KILL_COLORS.length]);
      var label = document.createElement("span");
      label.className = "fp-slot-label";
      label.textContent = (i + 1) + "";
      slot.appendChild(label);
      row.appendChild(slot);
    });
    host.appendChild(row);
  }

  function fillTray(tray, items) {
    tray.innerHTML = "";
    shuffle(items).forEach(function (item) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "fp-chip";
      chip.setAttribute("data-id", item.id);
      chip.textContent = item.label;
      tray.appendChild(chip);
    });
  }

  function initNist(root) {
    var wheel = root.querySelector("#nist-wheel");
    var tray = root.querySelector("#nist-tray");
    var status = root.querySelector("#nist-status");
    var resetBtn = root.querySelector("#nist-reset");
    if (!wheel || !tray) return;

    function labelFor(id) {
      for (var i = 0; i < NIST_SLOTS.length; i++) {
        if (NIST_SLOTS[i].id === id) return NIST_SLOTS[i].label;
      }
      return id;
    }

    function paintSlot(slotEl, id) {
      var path = slotEl.querySelector(".nist-slot-path");
      var meta = NIST_SLOTS.filter(function (s) { return s.id === id; })[0];
      if (path && meta) {
        path.setAttribute("fill", meta.color);
        path.style.opacity = "1";
      }
      var text = slotEl.querySelector(".fp-slot-label");
      if (text) {
        text.textContent = meta ? meta.label : id;
        if (meta) text.style.fill = meta.text;
        text.classList.add("is-set");
      }
    }

    function dimEmpty() {
      root.querySelectorAll("#nist-wheel .fp-slot").forEach(function (s) {
        if (!s.classList.contains("is-filled")) {
          var path = s.querySelector(".nist-slot-path");
          if (path) path.style.opacity = "0.35";
          var text = s.querySelector(".fp-slot-label");
          if (text && !text.classList.contains("is-set")) text.textContent = "?";
        }
      });
    }

    var ctrl;
    var nextBtn = root.querySelector("#nist-next");

    function setup() {
      buildNistSvg(wheel);
      fillTray(tray, NIST_SLOTS);
      dimEmpty();
      root.classList.remove("fp-complete");
      if (nextBtn) nextBtn.hidden = true;
      if (status) {
        fpFlowStatus(status, "idle", "Drag a function onto the wheel, or tap a chip then a slot.");
      }
      ctrl = createDragController({
        root: root,
        tray: tray,
        slotIds: NIST_SLOTS.map(function (s) { return s.id; }),
        getSlotEl: function (id) {
          return root.querySelector('#nist-wheel .fp-slot[data-slot="' + id + '"]');
        },
        labelFor: labelFor,
        onCorrect: function (slotId, labelId, slotEl) {
          paintSlot(slotEl, labelId);
          if (status) {
            fpFlowStatus(status, "ok", labelFor(labelId) + " placed.");
          }
        },
        onWrong: function () {
          if (status) {
            fpFlowStatus(status, "soft", "Not that slot - try again.");
          }
        },
        onComplete: function () {
          root.classList.add("fp-complete");
          if (nextBtn) nextBtn.hidden = false;
          if (status) {
            fpFlowStatus(status, "ok", "Complete - NIST CSF 2.0 wheel matches the slide. Next: Kill Chain.");
          }
          if (typeof window.studyMarkFlag === "function") window.studyMarkFlag("nistDone");
        }
      });
      ctrl.bind();
    }

    if (resetBtn) resetBtn.addEventListener("click", setup);
    setup();
  }

  function initKill(root) {
    var board = root.querySelector("#kill-board");
    var tray = root.querySelector("#kill-tray");
    var status = root.querySelector("#kill-status");
    var resetBtn = root.querySelector("#kill-reset");
    if (!board || !tray) return;

    function labelFor(id) {
      for (var i = 0; i < KILL_SLOTS.length; i++) {
        if (KILL_SLOTS[i].id === id) return KILL_SLOTS[i].label;
      }
      return id;
    }

    var ctrl;
    var nextBtn = root.querySelector("#kill-next");

    function setup() {
      buildKillChain(board);
      fillTray(tray, KILL_SLOTS);
      root.classList.remove("fp-complete");
      if (nextBtn) nextBtn.hidden = true;
      if (status) {
        fpFlowStatus(status, "idle", "Drag stages left to right, or tap a chip then a chevron.");
      }
      ctrl = createDragController({
        root: root,
        tray: tray,
        slotIds: KILL_SLOTS.map(function (s) { return s.id; }),
        getSlotEl: function (id) {
          return root.querySelector('#kill-board .fp-slot[data-slot="' + id + '"]');
        },
        labelFor: labelFor,
        onCorrect: function (slotId, labelId, slotEl) {
          var idx = 0;
          for (var ki = 0; ki < KILL_SLOTS.length; ki++) {
            if (KILL_SLOTS[ki].id === slotId) { idx = ki; break; }
          }
          var bg = KILL_COLORS[idx % KILL_COLORS.length];
          slotEl.style.background = bg;
          slotEl.style.color = bg === "#FFD51E" ? "#5003C0" : "#FFF9E6";
          if (status) {
            fpFlowStatus(status, "ok", labelFor(labelId) + " locked in.");
          }
        },
        onWrong: function () {
          if (status) {
            fpFlowStatus(status, "soft", "Wrong stage for that step - try again.");
          }
        },
        onComplete: function () {
          root.classList.add("fp-complete");
          if (nextBtn) nextBtn.hidden = false;
          if (status) {
            fpFlowStatus(status, "ok", "Complete - Lockheed Martin Kill Chain in order.");
          }
          if (typeof window.studyMarkFlag === "function") window.studyMarkFlag("killDone");
        }
      });
      ctrl.bind();
    }

    if (resetBtn) resetBtn.addEventListener("click", setup);
    setup();
  }

  function initMitre(root) {
    var board = root.querySelector("#mitre-board");
    var tray = root.querySelector("#mitre-tray");
    var status = root.querySelector("#mitre-status");
    var resetBtn = root.querySelector("#mitre-reset");
    if (!board || !tray) return;

    function labelFor(id) {
      for (var i = 0; i < MITRE_SLOTS.length; i++) {
        if (MITRE_SLOTS[i].id === id) return MITRE_SLOTS[i].label;
      }
      return id;
    }

    var ctrl;
    var nextBtn = root.querySelector("#mitre-next");

    function setup() {
      buildMitreChain(board);
      fillTray(tray, MITRE_SLOTS);
      root.classList.remove("fp-complete");
      if (nextBtn) nextBtn.hidden = true;
      if (status) {
        fpFlowStatus(status, "idle", "Drag tactics left to right in attack order, or tap a chip then a chevron.");
      }
      ctrl = createDragController({
        root: root,
        tray: tray,
        slotIds: MITRE_SLOTS.map(function (s) { return s.id; }),
        getSlotEl: function (id) {
          return root.querySelector('#mitre-board .fp-slot[data-slot="' + id + '"]');
        },
        labelFor: labelFor,
        onCorrect: function (slotId, labelId, slotEl) {
          var idx = 0;
          for (var mi = 0; mi < MITRE_SLOTS.length; mi++) {
            if (MITRE_SLOTS[mi].id === slotId) { idx = mi; break; }
          }
          var bg = KILL_COLORS[idx % KILL_COLORS.length];
          slotEl.style.background = bg;
          slotEl.style.color = bg === "#FFD51E" ? "#5003C0" : "#FFF9E6";
          if (status) {
            fpFlowStatus(status, "ok", labelFor(labelId) + " locked in.");
          }
        },
        onWrong: function () {
          if (status) {
            fpFlowStatus(status, "soft", "Wrong tactic for that step - try again.");
          }
        },
        onComplete: function () {
          root.classList.add("fp-complete");
          if (nextBtn) nextBtn.hidden = false;
          if (status) {
            fpFlowStatus(status, "ok", "Complete - MITRE ATT&CK tactics in lifecycle order.");
          }
          if (typeof window.studyMarkFlag === "function") window.studyMarkFlag("mitreDone");
        }
      });
      ctrl.bind();
    }

    if (resetBtn) resetBtn.addEventListener("click", setup);
    setup();
  }

  function normalizePracticeSection(which) {
    if (which === "killchain" || which === "kill") return "kill";
    if (which === "mitre" || which === "attack") return "mitre";
    return "nist";
  }

  function showPracticeSection(which) {
    var section = normalizePracticeSection(which);
    var nist = document.getElementById("practice-nist");
    var kill = document.getElementById("practice-kill");
    var mitre = document.getElementById("practice-mitre");
    var tabN = document.getElementById("tab-practice-nist");
    var tabK = document.getElementById("tab-practice-kill");
    var tabM = document.getElementById("tab-practice-mitre");
    if (!nist || !kill || !mitre) return;
    nist.hidden = section !== "nist";
    kill.hidden = section !== "kill";
    mitre.hidden = section !== "mitre";
    nist.classList.toggle("active", section === "nist");
    kill.classList.toggle("active", section === "kill");
    mitre.classList.toggle("active", section === "mitre");
    if (tabN) {
      tabN.classList.toggle("active", section === "nist");
      tabN.setAttribute("aria-selected", section === "nist" ? "true" : "false");
      tabN.tabIndex = section === "nist" ? 0 : -1;
    }
    if (tabK) {
      tabK.classList.toggle("active", section === "kill");
      tabK.setAttribute("aria-selected", section === "kill" ? "true" : "false");
      tabK.tabIndex = section === "kill" ? 0 : -1;
    }
    if (tabM) {
      tabM.classList.toggle("active", section === "mitre");
      tabM.setAttribute("aria-selected", section === "mitre" ? "true" : "false");
      tabM.tabIndex = section === "mitre" ? 0 : -1;
    }
  }

  function init() {
    var nistRoot = document.getElementById("practice-nist");
    var killRoot = document.getElementById("practice-kill");
    var mitreRoot = document.getElementById("practice-mitre");
    if (nistRoot) initNist(nistRoot);
    if (killRoot) initKill(killRoot);
    if (mitreRoot) initMitre(mitreRoot);
    var tabN = document.getElementById("tab-practice-nist");
    var tabK = document.getElementById("tab-practice-kill");
    var tabM = document.getElementById("tab-practice-mitre");
    if (tabN) tabN.addEventListener("click", function () { showPracticeSection("nist"); });
    if (tabK) tabK.addEventListener("click", function () { showPracticeSection("killchain"); });
    if (tabM) tabM.addEventListener("click", function () { showPracticeSection("mitre"); });
    var nistNext = document.getElementById("nist-next");
    if (nistNext) {
      nistNext.addEventListener("click", function () { showPracticeSection("killchain"); });
    }
    var killNext = document.getElementById("kill-next");
    if (killNext) {
      killNext.addEventListener("click", function () { showPracticeSection("mitre"); });
    }
    var mitreNext = document.getElementById("mitre-next");
    if (mitreNext) {
      mitreNext.addEventListener("click", function () {
        var mainTab = document.getElementById("tab-course-4050-main");
        var quizTab = document.getElementById("tab-section-quiz");
        if (mainTab) mainTab.click();
        if (quizTab) quizTab.click();
      });
    }
    showPracticeSection("nist");
  }

  global.FrameworkPractice = {
    init: init,
    showSection: showPracticeSection
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(typeof window !== "undefined" ? window : this);
