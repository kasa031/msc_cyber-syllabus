/* Offline cache for MSc Cybersecurity Practise Syllabus 1st Year (GitHub Pages / HTTPS).
 * Bump CACHE on deploy so clients drop stale shells.
 * Same-origin only - never cache cross-origin responses.
 * Never reads or writes cookies; quiz progress lives in page localStorage only.
 */
const CACHE = "msc-cyber-lock5";
const ASSETS = [
  "./",
  "./index.html",
  "./quiz-decks.js",
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
    caches.open(CACHE).then((cache) =>
      Promise.all(
        ASSETS.map((url) =>
          cache.add(url).catch(() => {
            /* Skip missing assets so install still succeeds (subdir / Pages). */
          })
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  /* Same-origin only - do not intercept or cache cross-origin. */
  if (url.origin !== self.location.origin) return;

  const isNav = event.request.mode === "navigate" ||
    (event.request.headers.get("accept") || "").includes("text/html");

  if (isNav) {
    /* Network-first for HTML so updates show when online. */
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          cacheOk(event.request, response);
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((cached) =>
            cached || caches.match("./index.html") || caches.match("./")
          )
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
