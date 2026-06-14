# Decisions

> **Parallel agents:** Globale beslissingen staan onder Algemeen. Pagina-specifieke keuzes alleen in die sectie toevoegen.

---

## Algemeen

### Payload CMS → verwijderd (jun 2026)
**Beslissing:** Payload volledig strippen. Puur Next.js voor marketing site.

**Waarom:** Geen blog/CMS nodig voor v1. Payload voegde admin panel, SQLite DB, blocks-systeem en honderden template-bestanden toe zonder winst.

**Status:** Uitgevoerd.

### Styling
**Beslissing:** CSS custom properties in `globals.css` als design tokens. Complexe Figma-layouts (vw positioning, clip-path) blijven inline styles — kleuren via `var(--ikr-*)`.

### Asset-structuur
- `ikr-website/public/images/` — live assets
- `design/` — Figma-referenties, nooit deployed

### Navbar
Eén component: `Navbar.tsx` (pill-bar). Niet per pagina nabouwen.

### Hosting
DaddyGo = shared hosting, geen Node.js. **Beslissing:** site op Vercel hosten, DaddyGo-domein via DNS wijzen. DaddyGo behouden voor e-mail. **Status:** Vercel live (Hobby, jun 2026). Custom domain nog niet gekoppeld.

### Mapnaam `ikr-website` (jun 2026)
**Beslissing:** Next.js app hernoemd van `IKR website` → `ikr-website`.

**Waarom:** Vercel weigert serverless function-paden met spaties.

**Status:** Uitgevoerd. Vercel Root Directory = `ikr-website`.

---

## Homepage (`/`)

_(geen pagina-specifieke beslissingen)_

---

## Aanpak (`/aanpak`)

_(geen pagina-specifieke beslissingen)_

---

## Pricing (`/pricing`)

**Beslissing (jun 2026):** Resend via `/api/pricing/request`. PDF statisch in `public/documents/`. From + notify = `contact@iknowright.be`. Creator/sollicitant → redirect contact, geen PDF-mail.

---

## Contact (`/contact`)

**Beslissing:** Contact v5 als design-bron (niet v1–v4).

**Beslissing (jun 2026):** Chat-UI met progressieve stappen. Submit via Resend (`/api/contact`) — één notificatiemail naar `contact@iknowright.be`, geen bevestigingsmail naar invuller. Zelfde Turnstile + GDPR + honeypot als pricing. Bedrijfsvraag alleen bij type `bedrijf`. Bericht = keuze uit 3 opties of "Anders" met vrij tekst.

---

## Cases (`/cases`)

Portfolio in **twee lagen** — geen fake case-pagina's.

**Laag 1 — Cases (`caseGridItems` + `caseDetails`):** volledige case studies met detailpagina. Nu: Tempus, Maison Slash, Anneke Govaerts. Criteria: doel, aanpak, cijfers, minstens één concreet resultaat. Nieuwe case = kopieer `caseDetailTemplate`, zet in `caseDetails` + `caseGridItems`.

**Laag 2 — Food werk (`foodWorkItems`):** influencer-opdrachten binnen food. Grid met video + views + highlight. **Geen detailpagina**, geen verzonnen verhaal. Tonen dat IKR food kent; geen retainer-case pretenderen.

**Later:** echte food cases (langdurige samenwerkingen) schuiven naar laag 1 wanneer content klaar is. Panos/O'Tacos/Aïki blijven in laag 2 tot er een volledig verhaal is.

**Niet doen:** `/cases/template` publiek linken. Wasbar/Ohma/MS zijn uit het grid.

**Beslissing (jun 2026):** Top TikTok-video's per kanaal lokaal in `public/videos/cases/`. Overview-thumbnail via `CASE_GRID_PREVIEW` — niet altijd hoogste views (Maison Slash: seksenquete uitgesloten). Galerij-klik opent TikTok-post. Views-badge = oog-icoon + "XK views".
