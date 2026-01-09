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

**7. Mobile-first simplification checklist**
- [ ] Remove all nested boxes
- [ ] Reduce all padding by 30-40%
- [ ] Remove decorative icons/elements
- [ ] Flatten card-within-card structures
- [ ] Use `hidden md:block` for desktop-only containers

**8. Common violations to avoid**
- ❌ Card inside a card inside a section
- ❌ Borders on borders on borders
- ❌ Decorative containers that add no meaning
- ❌ Excessive padding creating "tunnel vision"
- ❌ Background colors nested 3+ levels deep

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
