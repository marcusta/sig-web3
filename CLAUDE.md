# CLAUDE.md

## Project Overview

Sweden Indoor Golf website (sig-web3) - A static-exported Next.js marketing site for an indoor golf facility in Linköping, Sweden. Deployed to `https://app.swedenindoorgolf.se/sig-web3/`.

## Tech Stack

- **Next.js 16** with static export (`output: 'export'`)
- **React 19** with TypeScript
- **Tailwind CSS v4** (utility-first styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Commands

```bash
npm run dev        # Development server on port 4001
npm run build      # Production build (outputs to /out/)
npm run lint       # ESLint
```

## Build for Production

```bash
export NEXT_PUBLIC_BASE_PATH=/sig-web3
npm run build
# Deploy contents of /out/ to server
```

## Project Structure

```
app/                    # Next.js App Router pages
  page.tsx              # Home page
  layout.tsx            # Root layout (Header/Footer)
  globals.css           # Tailwind config + custom theme
  [route]/page.tsx      # Other pages (prislista, om-oss, faq, etc.)

components/
  home/                 # Home page components (Hero, Features, Stats, Gallery, CTA, Contact)
  layout/               # Header, Footer
  ui/                   # Reusable components (PageHeader)

lib/
  utils.ts              # cn() helper for Tailwind class merging

public/                 # Static assets (images, logo)
```

## Code Conventions

### Components
- Use `'use client'` directive for interactive components
- TypeScript functional components with typed props
- Server components by default (no directive needed)

### Styling
- Dark theme: background `#020617` (slate-950), text `#f1f5f9` (slate-100)
- Primary color: `#eab308` (yellow-500)
- Mobile-first responsive design using Tailwind breakpoints (md:, lg:)

### Animations
- Framer Motion for all animations
- Use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- Spring physics: `type: 'spring'`

### Navigation
- Use Next.js `<Link>` for internal routes (handles basePath automatically)
- Use standard `<a>` tags for external links (MATCHi booking platform)

## Important Patterns

### Base Path Handling
- `NEXT_PUBLIC_BASE_PATH` environment variable controls subdirectory deployment
- Next.js `<Link>` and `<Image>` handle basePath automatically
- For CSS background images or static paths, manually prepend `process.env.NEXT_PUBLIC_BASE_PATH`

### Static Export Constraints
- No server-side features (API routes, SSR, ISR)
- Images must use `unoptimized: true` in next.config.ts
- All content is hard-coded (no database/CMS)

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

## Language

All content is in Swedish (lang="sv").
