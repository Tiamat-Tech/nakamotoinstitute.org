# Production Bug Plan — 2026-07-09

Scope: keep the **existing** prod site stable until the archive rewrite replaces it. Only bugs with real production impact (crashes, wrong/corrupt content served, import data corruption, broken feeds/URLs). Everything refactor-grade is deferred (see bottom). Sources: BUG_AUDIT.md (client, 2026-07-07) + multi-agent server audit + adversarial fix-review of the uncommitted working-tree fixes (all 29 findings verified against the running app/DB; 0 refuted).

Mark items done with `[x]`.

## Phase 0 — commit verified working-tree fixes

Fix-review verdict: all 10 uncommitted fixes address real bugs at HEAD; 9 correct as written, 1 amended.

- [x] Commit the current working tree (B1–B10 fixes). Includes the B1 amendment already applied: `[locale]/error.tsx` wraps fallback in `<body>` (PageLayout owns `<body>` in this app; without it SSR'd errors emit invalid HTML + hydration mismatch), `global-error.tsx` `<html>` got `bg-cream text-dark font-serif`.
  - B2 authors en locale, B3 renderer escaping (verified: no double-escape; changes stored html_content → needs re-import, Phase 3), B4 translation canonical fallback, B5 feed hardening (404 on empty feed; client routes fail loud), B6 donate redirect removed, B7 Markdown className, B8 optional `locale` param + regenerated SDK, B9 orphaned locale keys pruned (all verified unreferenced), B10 node hasMath (verified AliasPath resolves; latent until a math book exists)

## Phase 1 — client P0s (open, from BUG_AUDIT)

- [x] **A1** Non-numeric/garbage satoshi IDs 500 on live prod; numeric-prefixed IDs render dup content. `satoshi/{posts,emails}/[source]/[satoshiId]/page.tsx:38`, both `threads/[threadId]/page.tsx:41`, `lib/api/helpers.ts:12` — validate `/^\d+$/` → `notFound()`; map 422→notFound in helper. **Pair with S1** (huge numeric IDs 500 server-side even after this).
- [x] **A2** Skeptics page 500s if CoinMetrics data missing/mismatched — catch sets `prices=[]` but `calculateDCA` still throws. `the-skeptics/page.tsx:46`, `SkepticListing.tsx:23`, `utils/prices.ts:7` — skip DCA when `prices.length<2` or idx===-1.
- [x] **A3** Build-time API blip silently 404s entire sections (`dynamicParams=false` + `generateStaticParams` swallowing errors into `[]`). `library/[slug]/page.tsx`, `[nodeSlug]`, `mempool/[slug]`, `mempool/series/[slug]`, `authors/[slug]` — throw in generateStaticParams on API error.
- [x] **A4** ko/pt-BR home renders literal escaped `<a>` markup in newsletter line (live on `/ko/`). `app/[locale]/page.tsx:306` — render `newsletter_signup` with Trans-style interpolation.
- [x] **A5** `/robots.txt` 404s on prod — proxy matcher rewrites it to `/en/robots.txt`. `proxy.ts:71` — add `robots\.txt` to matcher exclusion.

## Phase 2 — server P1s (new findings, all verified)

- [x] **S1** Out-of-int32 IDs → Postgres `integer out of range` → 500 instead of 404. Verified end-to-end: `/satoshi/emails/cryptography/99999999999` etc. all 500. `satoshi/emails/router.py:77,111`, `satoshi/posts/router.py:77,111` — `Path(ge=1, le=2_147_483_646)` on satoshi_id/thread_id (client maps 422→404 via A1).
- [x] **S2** Book import commits mid-run: a failing node file (renamed file, bad frontmatter) permanently leaves the book with zero/partial chapters AND re-runs see hash UNCHANGED and skip it silently. `content/markdown/handlers.py:439,481` — replace both `session.commit()` with `flush()`; `Importer.run` commit is the only transaction boundary.
- [x] **S3** Deleting any content file crashes the whole import with IntegrityError (missing delete cascades; child FKs NOT NULL) — content can never be removed via the pipeline, and the failure rolls back all other updates in the run. `handlers.py:131,357,169-173`; `models/library.py:81,123`, `models/mempool.py:60,140` — add `cascade="all, delete-orphan"` to canonical→translations and translation→nodes (or delete children explicitly in `handle_deleted`).
- [x] **S4** Editing `data/email_threads.json` or `data/forum_threads.json` silently wipes the entire quotes table (threads import deletes dependent Quote rows; quotes import skips because quotes.json hash unchanged). Prod runs incremental import on every container start. `content/update.py:29` — pass thread-updated flags into `import_quotes` force_conditions.
- [x] **S5** Mempool Atom feed emits invalid `<content type="CDATA">` (RFC 4287 violation; strict readers show escaped markup/empty body). `mempool/feed.py:63` — `type="html"` for atom, keep CDATA for RSS.
- [x] **S6** Feed self/website URLs point at 404 paths: `/podcast`, `/podcast/rss`, `/mempool/rss`, `/mempool/atom`. `podcasts/feed.py:11-16`, `mempool/feed.py:17-23` — use `/podcasts/{slug}`, `/podcasts/{slug}/feed.xml`, `/mempool/feed.xml`, `/mempool/atom.xml`.
- [x] **S7** `cdn sync` never re-uploads modified static files — compares local mtime vs local **ctime** (never true on Linux), so edited images/PDFs never reach the CDN; deploy reports success while users get stale assets. `cli/commands/cdn.py:73` — compare against remote LastModified/ETag or always upload existing keys (~700 objects).
- [x] **S8** Typographer `replacements` rule corrupts `(c)` enumeration markers to `©` in 6 spots across 5 live documents (bitcoin-is-time, a-measure-of-sacrifice, intrapolynomial-cryptography, formalizing-securing-relationships ×2, measuring-value). `content/markdown/renderer.py:122` — drop `"replacements"` from `.enable()` (keep smartquotes), re-import. (Authors already dodge this with `\(c)` in objective-versus-intersubjective-truth.)

## Phase 3 — redeploy/verify

Validated locally 2026-07-09 (fresh import into scratch Postgres + uvicorn + full `next build` against it, all green; feeds/S1/renderer output checked live). Remaining items are prod-deploy actions:

- [ ] Deploy; re-run content import with `--force` (B3/S8 change stored html_content); spot-check whitepaper math, code fences, the 5 S8 documents.
- [ ] One-time CDN re-sync after S7 fix (stale objects may exist in the bucket now).
- [ ] Validate `/mempool/feed.xml`, `/mempool/atom.xml`, podcast feed with W3C validator.
- [ ] Prod smoke: `/satoshi/emails/cryptography/99999999999` → 404; `/robots.txt` → 200; `/ko/` newsletter line; skeptics page.

## Deferred to rewrite (real but not worth fixing now)

Server (verified, triaged DEFER): episode slug lookup ignores podcast (collision only if two podcasts share an episode slug — only one podcast exists); en excerpt/external changes don't propagate to untouched translation files until they change; Atom `<updated>` = generation time; podcast enclosure `length=0`; `cdn sync` unpaginated list (683/1000 objects) and **mass-deletes bucket if run from wrong cwd** (careful until rewrite); no prod validation of BASE_URL/SITE_URL; `?api_key=` accepted in query; `JSONContent.file_content` snapshot stale on update; feed URLs from BASE_URL (prod-correct via env); naive-local `fromtimestamp`. (`en_translation` unbound: refuted/already fixed by B4.)

Client: all of BUG_AUDIT P2 (quirks: nav links, hardcoded English, metadata/hreflang gaps) and P3, plus B9 missing ko/pt-BR translations (Crowdin work). Whitepaper figure onerror fallbacks + skeptics.json `<em>` inversion: content edits, do opportunistically.
