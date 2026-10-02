# CDCE Website — Handover

Working notes for continuing this project in a new session or on another machine.

## Stack

- React 18.3.1 + react-router-dom 6.28 (BrowserRouter), Vite 5.4.11, plain JS/JSX — **no TypeScript**
- **Hand-written CSS with custom-property design tokens.** No Tailwind, no CSS modules,
  no component library. `src/styles/tokens.css` is the single source of design truth.
- **Zero animation libraries.** `IntersectionObserver` via `src/hooks/useReveal.js` +
  CSS variant classes in `global.css`.
- No backend. Content is static in `src/data/content.js`. Contact form is `mailto:`.
  Search is an in-memory index (`searchIndex` in content.js).

```bash
npm install && npm run dev      # http://localhost:5173
npm run build                   # -> dist/
```

## Deploy

Live: **https://cdce-5aq.pages.dev** (Cloudflare Pages, free tier)

```bash
npm run build && npx wrangler pages deploy dist --project-name cdce
```

- Wrangler project name is **`cdce`**, NOT `cdce-5aq`. The `-5aq` is just the assigned
  subdomain (`cdce.pages.dev` was taken). Passing `cdce-5aq` makes wrangler offer to
  create a second empty project.
- **Deploy is manual.** Committing is not publishing. Once the repo is on GitHub,
  connect it in the Cloudflare Pages dashboard to get auto-build on push and delete
  this chore.
- `public/_redirects` (`/* /index.html 200`) must keep existing — BrowserRouter deep
  links 404 on static hosting without it.

## Decisions that must not be "cleaned up"

These look arbitrary and will break things if simplified. Each was arrived at by
measurement, not preference.

1. **`rootMargin: "0px 0px -120px 0px"` in `useReveal.js`** — the NEGATIVE bottom
   margin is load-bearing. It delays the reveal until the element is ~120px into view,
   matching eng.pdn.ac.lk. A positive value plays ~36% of the motion off-screen.

2. **The observer does NOT disconnect after firing.** It sets
   `setVisible(entry.isIntersecting)` live, so reveals replay on scroll-up. An earlier
   one-shot version was the cause of "animations sometimes work, sometimes not".

3. **All stagger rules are scoped under `.reveal`** (`.reveal .stagger > *`) purely to
   reach specificity 0,2,0. Card classes (`.quick-card`, `.study-card`, `.prog-card`)
   declare their own `transition` shorthand at 0,1,0 but LATER in source order — an
   unscoped `.stagger > *` loses the `transition` property to them and the cards snap
   instead of animating. That rule must therefore also carry the hover/interaction
   transitions, or the hover lift snaps.

4. **Reveals use the standalone `translate` / `scale` / `rotate` properties, not
   `transform`.** This is so they compose with the hover-lift `transform` on cards
   instead of fighting it. `.stagger-flip` puts `perspective` on the *container* for
   the same reason — on the card it would need `transform`, and `.reveal-visible`
   (0,3,0) would then outrank `:hover` (0,2,0) and kill the lift permanently.

5. **`html { overflow-x: clip }` must be on the root element, not `body`.** The
   horizontal reveal variants park elements ±110px outside the layout; the viewport
   scrollbar is driven by the root, so body-only clipping still scrolls sideways.
   `clip` not `hidden`, or the sticky header breaks.

6. **Never use the `padding` shorthand on an element that also has `.wrap`.** It resets
   `.wrap`'s horizontal gutter to 0 and the content goes flush to the screen edge on
   mobile. Use `padding-top`/`padding-bottom`. This bug shipped twice (`.hero-grid`,
   then `.foot-grid` + `.foot-bottom`). Only `.site-head` declares `padding` on a
   `.wrap` element, and it correctly restates `var(--gutter)`.

7. **`--gold-ink: #886b1b` exists because `--gold` fails WCAG AA as text** on cream
   (2.45:1). Use `--gold` for fills and hairlines only; `--gold-ink` for gold text
   (4.76:1). Same reason `--terracotta` was darkened to `#955318`.

8. **Desktop gutter is pinned to 25px** via `@media (min-width: 1025px)` at the end of
   `tokens.css`, matching eng.pdn.ac.lk. It is desktop-only on purpose — applying 25px
   everywhere widens mobile (16px) and narrows tablet (31px).

## Design references

- **https://distance-edu-hub.preview.emergentagent.com** — director-approved. Source of
  the palette (read from its own CSS variables) and the 0.15s /
  `cubic-bezier(0.4,0,0.2,1)` interaction easing. Note: it has **no scroll animation
  at all**.
- **https://eng.pdn.ac.lk** — source of animation behaviour only (reveal trigger point,
  flipUp entrance, header slideDown, 25px gutter).

## Integration with the live CDCE systems — findings

Surveyed 2026-10-02 from the public internet.

**Current site (https://cdce.pdn.ac.lk/)**
- Apache 2.4.54 on FreeBSD, **PHP 7.4.30 — end-of-life since Nov 2022, unpatched**
- Hand-rolled PHP. Bootstrap 3-era, jQuery from CDN, fancybox, dataTables.
  `<meta name="author" content="root">`. No CMS → **no REST API to pull from.**
- It IS database-backed: `gallery.php?gid=54`, `downloads-for-staff.php?sub=Circulars`,
  `results.php` POSTs to `baresults.php`. Content lives in MySQL, not in the PHP files.
- Uploads at `dload/uploads/<COURSE>/<unixtime>_<Name>.pdf` — classic PHP `time()`
  prefix pattern; the DB almost certainly stores these filenames.
- Site links to itself over `http://` in several places (mixed content).

**Moodle — there are TWO instances, and no publicly-linked MIS**
- `cdcelms2.pdn.ac.lk` — "LMS for Diploma and Certificates"
- `cdcebba1.pdn.ac.lk` — "CDCE BBA"
- Both confirmed Moodle. Use Moodle's REST web services + a token-scoped service
  account. **Do not query Moodle's database directly** — it breaks on upgrade.

**Architecture constraint**
Cloudflare Pages runs in the visitor's browser on the public internet. MIS/MySQL sit on
a private university subnet. A browser can never reach a private IP, so something must
run *inside* the network and reach outward.

- **Path A — scheduled content sync (do first).** Cron inside the network reads MySQL,
  writes JSON, pushes out. No inbound firewall rule, nothing for IT to open. Covers
  everything public and slow-changing: programmes, notices, news, events, downloads,
  FAQs, board of management — i.e. essentially all of `content.js`.
- **Path B — Cloudflare Tunnel (only if per-student data is needed).** `cloudflared`
  on an always-on box inside the subnet, outbound-only, no public IP. Fronted by a
  small Node API that exposes named endpoints with specific fields, plus Cloudflare
  Access. Needed only for results / enrolment / fee status.

**Never:** expose MySQL 3306 through the tunnel; put DB credentials in the React
bundle (it's `view-source` public); tunnel the MIS database wholesale; move student
records to the public internet without IT and data-protection sign-off.

## Open questions

Design (surfaced, never answered):
1. Header brand hierarchy vs. the approved reference
2. Hero background photography — needs a supplied photo
3. Single-row header?
4. Animation intensity — is the current level final?
5. Scroll replay / parallax scope

Integration:
6. Does anything need to be **per-student**, or is it all public content? If all
   public, Path B never gets built.
7. Who edits content going forward — a script, or CDCE staff needing an admin UI?
   "Staff edit it" is a much larger piece of work.
8. What and where is the **MIS**? It is not linked from the public site.
