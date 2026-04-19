# CLAUDE.md

## Project Overview

Sweden Indoor Golf website (sig-web3) - A static HTML/CSS/JS marketing site for an indoor golf facility in Linköping, Sweden. Built with Nunjucks templates, Tailwind CSS v4, and vanilla JavaScript. Deployed to one.com at `swedenindoorgolf.se`.

## Tech Stack

- **Nunjucks** templating engine (renders HTML from `.njk` templates)
- **Tailwind CSS v4** compiled via `@tailwindcss/cli`
- **Vanilla JavaScript** (IntersectionObserver for animations, DOM manipulation for interactivity)
- **Contact form** POSTs to `https://app.swedenindoorgolf.se/sig-status/contact` (service lives in separate `sig-status` repo)
- **Inline SVGs** for all icons (no icon library)

## Deployment

Static site hosted on one.com at `swedenindoorgolf.se`. Every push to `main` auto-deploys via `.github/workflows/deploy.yml` (builds + uploads `dist/` to `/www/` over SFTP). Manual/local deploys still work via `./deploy.sh`. See `DEPLOYMENT.md` for the hosting model, the `ONECOM_PASSWORD` secret, rotation, routing, rollback, and cleanup TODOs.

## Commands

```bash
npm run build          # Build with BASE_PATH=/sig-web3 (default)
npm run build:preview  # Build with BASE_PATH=/preview (side-by-side testing)
npm run build:prod     # Build with BASE_PATH= (root deployment)
```

Custom base path:
```bash
BASE_PATH=/custom-path node build.js
```

Output goes to `/dist/`.

## Project Structure

```
build.js                # Build script (Nunjucks render + Tailwind compile + asset copy)

src/
  templates/
    base.njk            # Root layout (head, header, footer, scripts)
    pages/              # One .njk file per page (index, prislista, faq, etc.)
    partials/
      header.njk        # Site header + mobile nav
      footer.njk        # Site footer
      contact-form.njk  # Reusable contact form
      page-header.njk   # Reusable page header with background image
      icons/            # ~54 inline SVG icon partials

  css/
    input.css           # Tailwind config + custom animations/transitions

  js/
    main.js             # All interactivity (scroll animations, accordions, mobile menu, form handler)

content/                # JSON data files (injected as Nunjucks globals)
  pricing.json          # Prices, memberships, terms
  faq.json              # FAQ categories and Q&A items
  contact.json          # Contact info, team, social links
  tournaments.json      # Tournament details
  golfshop.json         # Golf shop info
  hours.json            # Opening hours

api/
  contact.php           # Form submission handler (PHP mail())

public/                 # Static assets (images, logo) copied to dist/

dist/                   # Build output (not committed)
```

## Content Management

Page content is managed via JSON files in `content/`. These are loaded by `build.js` and injected as global variables into all Nunjucks templates. To update content (prices, FAQ items, hours, etc.), edit the JSON files and rebuild.

## Styling

- Dark theme: background `#020617` (slate-950), text `#f1f5f9` (slate-100)
- Primary color: `#eab308` (yellow-500)
- Mobile-first responsive design using Tailwind breakpoints (md:, lg:)
- Custom animations defined in `src/css/input.css`

## Animations

- CSS `@keyframes` and transitions for all animations
- `IntersectionObserver` in `main.js` triggers scroll-based entrance animations
- Classes: `.animate-on-scroll`, `.animate-scale`, `.animate-from-left`
- Stagger delays: `.delay-100` through `.delay-800`

## Navigation

- Use `<a href="{{ basePath }}/route/">` for internal links
- Use `<a href="https://...">` for external links (MATCHi booking, social media)
- `basePath` is a Nunjucks global set from `BASE_PATH` env var

## Base Path Handling

- `BASE_PATH` env var controls subdirectory deployment (defaults to `/sig-web3`)
- All templates use `{{ basePath }}` for internal links and asset references
- `main.js` detects basePath at runtime from the stylesheet `href` attribute
- Set `BASE_PATH=` (empty) for root deployment

## UI/Design Principles

### NO Nested Boxes (Anti-AI-Slop Design)

**1. Mobile: Zero nested boxes (< 768px)**
- Flatten ALL nested card structures to single level
- Use typography (font size, weight, color) for hierarchy
- Use whitespace for separation, not boxes
- Remove decorative containers

**2. Desktop: Maximum 1 level of nesting**
- Outer container for section grouping only
- Inner cards for distinct items if truly needed
- NEVER go deeper than 2 levels
- Question every box: "Would this be clear without it?"

**3. Boxes must be purposeful**
- Only use when grouping truly related content
- Not for decoration or "visual interest"
- Not to "make it look designed"
- Each box should serve a functional purpose

**4. Visual hierarchy without boxes**
- Use font scale: text-4xl (headers) → text-2xl (subheaders) → text-base (body)
- Use font weight: font-bold, font-semibold, font-medium
- Use color: white (primary), slate-400 (secondary), primary (accent)
- Use generous whitespace: mb-8, mb-12, mb-16 for section breaks

**5. Padding consistency**
```
Mobile cards:     p-4 sm:p-6     (16-24px)
Desktop cards:    p-6 md:p-8     (24-32px)
Mobile sections:  py-8 md:py-12  (32-48px)
Desktop sections: py-12 md:py-20 (48-80px)

IMPORTANT: When nesting on desktop, reduce child padding
Example: If parent has p-8, child should have p-4 or p-6
```

**6. Borders & backgrounds - use sparingly**
- Minimize borders - prefer spacing for separation
- Backgrounds only for emphasis or major groupings
- When used: subtle (border-slate-800, bg-slate-900/50)
- Avoid multiple border styles on same page

**7. Common violations to avoid**
- Card inside a card inside a section
- Borders on borders on borders
- Decorative containers that add no meaning
- Excessive padding creating "tunnel vision"
- Background colors nested 3+ levels deep

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home (hero, features, stats, gallery, CTA, contact) |
| `/prislista` | Pricing & memberships |
| `/om-oss` | About & contact info |
| `/oppettider` | Opening hours |
| `/faq` | FAQ |
| `/tavlingar` | Tournaments/events |
| `/support` | Support info |
| `/golfshop` | Golf shop |
| `/hjalp` | Help guides |
| `/integritetspolicy` | Privacy policy |
| `/kontakt` | Contact page |

## Language

All content is in Swedish (lang="sv").
