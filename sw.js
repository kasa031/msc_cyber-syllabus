/* Offline cache for MSc Cybersecurity Practise Syllabus 1st Year (GitHub Pages / HTTPS).
 * Bump CACHE on deploy so clients drop stale shells.
 * Same-origin only - never cache cross-origin responses.
 * Never reads or writes cookies; quiz progress lives in page localStorage only.
 */
const CACHE = "msc-cyber-lock17";
/* Shell + quiz payloads must install; figures may be skipped if missing. */
const CRITICAL = [
  "./",
  "./index.html",
  "./quiz-decks.js",
  "./quiz-data/acit4050.json",
  "./quiz-data/acit4280.json",
  "./quiz-data/acit4100.json",
  "./quiz-data/computer-basics.json",
  "./fonts/fonts.css",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];
const ASSETS = [
  "./",
  "./index.html",
  "./quiz-decks.js",
  "./quiz-data/acit4050.json",
  "./quiz-data/acit4280.json",
  "./quiz-data/acit4100.json",
  "./quiz-data/computer-basics.json",
  "./fonts/fonts.css",
  "./fonts/space-grotesk-400.woff2",
  "./fonts/space-grotesk-500.woff2",
  "./fonts/space-grotesk-600.woff2",
  "./fonts/space-grotesk-700.woff2",
  "./fonts/jetbrains-mono-400.woff2",
  "./fonts/jetbrains-mono-500.woff2",
  "./fonts/jetbrains-mono-600.woff2",
  "./manifest.webmanifest",
  "./icons/favicon.svg",
  "./icons/favicon-32.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./figures/ai-declare.svg",
  "./figures/anonymity-trilemma.svg",
  "./figures/apa-anatomy.svg",
  "./figures/art32-security.svg",
  "./figures/art5-principles.svg",
  "./figures/art6-bases.svg",
  "./figures/art9-special.svg",
  "./figures/assess-stars.svg",
  "./figures/attack-surface.svg",
  "./figures/authn-authz.svg",
  "./figures/breach-72h.svg",
  "./figures/chmod-bits.svg",
  "./figures/cia-triad.svg",
  "./figures/consent-valid.svg",
  "./figures/course-focus-4050.svg",
  "./figures/dpia-flow.svg",
  "./figures/dsr-rights-grid.svg",
  "./figures/edpb.svg",
  "./figures/eprivacy-gdpr-venn.svg",
  "./figures/ethics-essay.svg",
  "./figures/fine-tiers.svg",
  "./figures/fs-tree.svg",
  "./figures/function-creep.svg",
  "./figures/gdpr-roles.svg",
  "./figures/google-spain.svg",
  "./figures/hash-fingerprint.svg",
  "./figures/hoepman-8.svg",
  "./figures/household.svg",
  "./figures/imrad.svg",
  "./figures/incident-stages.svg",
  "./figures/k-anonymity.svg",
  "./figures/linddun.svg",
  "./figures/litsearch.svg",
  "./figures/network-packet.svg",
  "./figures/oecd-principles.svg",
  "./figures/one-stop.svg",
  "./figures/osi-layers.svg",
  "./figures/pacman-flow.svg",
  "./figures/pbd-7.svg",
  "./figures/pc-cloud-local.svg",
  "./figures/pc-explorer.svg",
  "./figures/pc-path.svg",
  "./figures/pc-task-manager.svg",
  "./figures/pdca.svg",
  "./figures/peer-review.svg",
  "./figures/personal-data.svg",
  "./figures/pet-concepts.svg",
  "./figures/pets-taxonomy.svg",
  "./figures/pia-flow.svg",
  "./figures/pipe-pipeline.svg",
  "./figures/plagiarism-vs-cite.svg",
  "./figures/portability.svg",
  "./figures/privacy-vs-dp.svg",
  "./figures/processing-ops.svg",
  "./figures/pwd-terminal.svg",
  "./figures/real/apa-cite-clear.svg",
  "./figures/real/encryption-padlock-clear.svg",
  "./figures/real/gdpr-roles-clear.svg",
  "./figures/real/onion-routing.svg",
  "./figures/real/osi-model.svg",
  "./figures/real/padlock.svg",
  "./figures/real/peer-review-clear.svg",
  "./figures/real/personal-data-clear.svg",
  "./figures/real/research-process-clear.svg",
  "./figures/real/term-cd.svg",
  "./figures/real/term-chmod.svg",
  "./figures/real/term-hash.svg",
  "./figures/real/term-ls.svg",
  "./figures/real/term-ls-ps.svg",
  "./figures/real/term-mkdir.svg",
  "./figures/real/term-pacman.svg",
  "./figures/real/term-ping.svg",
  "./figures/real/term-pipe.svg",
  "./figures/real/term-pwd.svg",
  "./figures/real/term-pwd-both.svg",
  "./figures/real/term-pwd-ps.svg",
  "./figures/real/term-redirect.svg",
  "./figures/real/tor-onion-clear.svg",
  "./figures/real/tor-onion-service.svg",
  "./figures/redirect-append.svg",
  "./figures/research-funnel.svg",
  "./figures/risk-matrix.svg",
  "./figures/rq-focus.svg",
  "./figures/territorial-scope.svg",
  "./figures/thesis-outline.svg",
  "./figures/toulmin.svg",
  "./figures/transfers.svg",
  "./figures/zotero.svg"
];

function cacheOk(request, response) {
  if (!response || !response.ok) return;
  if (request.method !== "GET") return;
  /* Never put opaque/cross-origin or non-basic responses in cache. */
  if (response.type && response.type !== "basic") return;
  const copy = response.clone();
  caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      /* Fail install if shell/quiz cannot cache - avoids empty offline shell. */
      await Promise.all(CRITICAL.map((url) => cache.add(url)));
      await Promise.all(
        ASSETS.filter((url) => !CRITICAL.includes(url)).map((url) =>
          cache.add(url).catch(() => {
            /* Optional figures/fonts - skip missing so install still succeeds. */
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data) return;
  if (data === "SKIP_WAITING" || data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }
  if (data.type === "PURGE_CACHES") {
    event.waitUntil(
      caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        .then(() => self.clients.claim())
    );
  }
});

function isQuizDecksPath(pathOnly) {
  return pathOnly.endsWith("/quiz-decks.js") || pathOnly.endsWith("quiz-decks.js");
}

function looksLikeQuizJs(response, pathOnly) {
  if (!response || !response.ok) return false;
  if (!isQuizDecksPath(pathOnly)) return true;
  const ct = (response.headers.get("content-type") || "").toLowerCase();
  /* Reject HTML error pages accidentally served as quiz-decks.js. */
  if (ct.includes("text/html")) return false;
  const len = response.headers.get("content-length");
  if (len && Number(len) > 0 && Number(len) < 1000) return false;
  return true;
}

function cacheQuizDecksCanonical(response) {
  if (!response || !response.ok) return;
  const copy = response.clone();
  caches.open(CACHE).then((cache) => {
    cache.put("./quiz-decks.js", copy).catch(() => {});
  }).catch(() => {});
}

async function validateQuizDecksBody(response) {
  try {
    const text = await response.clone().text();
    if (!text || text.length < 1000) return false;
    if (text.trimStart().startsWith("<!")) return false;
    return text.indexOf("QUIZ_DECKS") !== -1 && text.indexOf("__QUIZ_DECKS_LOAD_OK") !== -1;
  } catch (e) {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  /* Same-origin only - do not intercept or cache cross-origin. */
  if (url.origin !== self.location.origin) return;

  const isNav = event.request.mode === "navigate" ||
    (event.request.headers.get("accept") || "").includes("text/html");

  const pathOnly = url.pathname;
  const isQuizPayload =
    isQuizDecksPath(pathOnly) ||
    pathOnly.includes("/quiz-data/");

  if (isNav || isQuizPayload) {
    /* Network-first for HTML + quiz decks so card updates show when online. */
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (isQuizDecksPath(pathOnly)) {
            if (!looksLikeQuizJs(response, pathOnly)) {
              const cached = await caches.match("./quiz-decks.js");
              return cached || response;
            }
            const bodyOk = await validateQuizDecksBody(response);
            if (!bodyOk) {
              const cached = await caches.match("./quiz-decks.js");
              return cached || response;
            }
            cacheOk(event.request, response);
            cacheQuizDecksCanonical(response);
            return response;
          }
          if (looksLikeQuizJs(response, pathOnly)) cacheOk(event.request, response);
          return response;
        })
        .catch(() =>
          caches.match(event.request, { ignoreSearch: true }).then((cached) => {
            if (cached) return cached;
            if (isQuizPayload && isQuizDecksPath(pathOnly)) {
              return caches.match("./quiz-decks.js");
            }
            if (isNav) return caches.match("./index.html").then((h) => h || caches.match("./"));
            return undefined;
          })
        )
    );
    return;
  }

  /* Cache-first for static assets; refresh in background when online. */
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          cacheOk(event.request, response);
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
