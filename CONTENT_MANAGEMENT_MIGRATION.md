# Content Management Migration Guide

## Current State

- **Mode:** Static Export (`output: 'export'`)
- **Deployment:** Build locally → upload `/out/` to Ubuntu VPS
- **Server:** Node.js available, running via `npm start`
- **Content:** Hard-coded in components

## Planned Approach: Server Mode with JSON Files

### Why This Approach?

You have Node.js available on your VPS, which means you can leverage Next.js server features to read JSON files dynamically - just like JSP or ASP.NET pages.

**Benefits:**
- ✅ SEO-friendly (server-rendered HTML with content)
- ✅ No rebuild required for content changes
- ✅ Simple workflow: `git pull` → content updates
- ✅ Team can edit JSON files on GitHub web interface
- ✅ No external dependencies or services

**Trade-offs:**
- Requires Node.js server (you already have this)
- Slightly slower than pure static (but Next.js caches aggressively)

---

## Migration Steps

### 1. Update Next.js Configuration

**File:** `next.config.ts`

```typescript
// Remove or comment out this line:
// output: 'export',

// The config should look like:
const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true, // Can keep this or remove for better optimization
  },
  // output: 'export', // REMOVE THIS LINE
}
```

### 2. Create Content Directory Structure

```bash
mkdir -p content
```

Create JSON files for editable content:

```
content/
  pricing.json       # Pricing tiers and memberships
  faq.json          # FAQ items
  opening-hours.json # Opening hours
  contact.json      # Contact information
```

### 3. Example: Pricing JSON Structure

**File:** `content/pricing.json`

```json
{
  "membershipTiers": [
    {
      "id": "basic",
      "name": "Basic",
      "price": "1 500",
      "period": "kr/månad",
      "features": [
        "Obegränsad bokning",
        "Tillgång till alla simulatorer",
        "Medlemsrabatter"
      ],
      "highlighted": false
    },
    {
      "id": "premium",
      "name": "Premium",
      "price": "2 500",
      "period": "kr/månad",
      "features": [
        "Allt i Basic",
        "Gratis gästspel (2/månad)",
        "Prioriterad bokning",
        "10% rabatt i shop"
      ],
      "highlighted": true
    }
  ],
  "payPerPlay": {
    "price": "350",
    "period": "kr/timme",
    "description": "Betala per spel utan medlemskap"
  }
}
```

### 4. Example: FAQ JSON Structure

**File:** `content/faq.json`

```json
{
  "categories": [
    {
      "id": "booking",
      "name": "Bokning",
      "questions": [
        {
          "question": "Hur bokar jag en tid?",
          "answer": "Du kan boka via vår MATCHi-integration direkt på hemsidan eller i deras app."
        },
        {
          "question": "Kan jag avboka?",
          "answer": "Ja, avbokning kan göras upp till 24 timmar innan bokad tid utan kostnad."
        }
      ]
    },
    {
      "id": "membership",
      "name": "Medlemskap",
      "questions": [
        {
          "question": "Vad ingår i medlemskapet?",
          "answer": "Obegränsad tillgång till alla simulatorer, medlemsrabatter och prioriterad bokning."
        }
      ]
    }
  ]
}
```

### 5. Update Page to Read JSON (Server Component)

**Example:** `app/prislista/page.tsx`

```typescript
import { promises as fs } from 'fs'
import path from 'path'

// Define types
interface MembershipTier {
  id: string
  name: string
  price: string
  period: string
  features: string[]
  highlighted: boolean
}

interface PricingData {
  membershipTiers: MembershipTier[]
  payPerPlay: {
    price: string
    period: string
    description: string
  }
}

// This is a Server Component (default in App Router)
// It runs on the server on every request
export default async function PrislistaPage() {
  // Read JSON file from filesystem
  const filePath = path.join(process.cwd(), 'content', 'pricing.json')
  const fileContents = await fs.readFile(filePath, 'utf-8')
  const data: PricingData = JSON.parse(fileContents)

  return (
    <div>
      <PageHeader
        title="Prislista"
        description="Välj det medlemskap som passar dig bäst"
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {data.membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`p-6 md:p-8 rounded-lg ${
                  tier.highlighted
                    ? 'bg-primary/10 border-2 border-primary'
                    : 'bg-slate-900/50 border border-slate-800'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {tier.price}
                </div>
                <div className="text-slate-400 mb-6">{tier.period}</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pay Per Play */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Spela utan medlemskap</h3>
            <div className="text-3xl font-bold text-primary">
              {data.payPerPlay.price} {data.payPerPlay.period}
            </div>
            <p className="text-slate-400 mt-2">{data.payPerPlay.description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
```

### 6. Example: FAQ Page

**File:** `app/faq/page.tsx`

```typescript
import { promises as fs } from 'fs'
import path from 'path'

interface Question {
  question: string
  answer: string
}

interface Category {
  id: string
  name: string
  questions: Question[]
}

interface FAQData {
  categories: Category[]
}

export default async function FAQPage() {
  const filePath = path.join(process.cwd(), 'content', 'faq.json')
  const fileContents = await fs.readFile(filePath, 'utf-8')
  const data: FAQData = JSON.parse(fileContents)

  return (
    <div>
      <PageHeader
        title="Vanliga frågor"
        description="Svar på dina frågor om Sweden Indoor Golf"
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {data.categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {category.name}
              </h2>
              <div className="space-y-6">
                {category.questions.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold mb-2">
                      {item.question}
                    </h3>
                    <p className="text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

---

## Deployment Workflow

### Initial Deployment

1. **Build the application:**
   ```bash
   export NEXT_PUBLIC_BASE_PATH=/sig-web3
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   # Or use PM2 for production:
   pm2 start npm --name "sig-web3" -- start
   ```

3. **Configure server (if needed):**
   - Ensure Node.js server runs on correct port
   - Set up reverse proxy (nginx) if needed
   - Point to `/sig-web3` subdirectory

### Content Update Workflow

When team members edit JSON files on GitHub:

1. **On the server, pull latest changes:**
   ```bash
   cd /path/to/sig-web3
   git pull origin main
   ```

2. **That's it!** Next.js will automatically detect file changes and serve updated content on the next request.

**Note:** No restart or rebuild needed! Next.js watches files in development and production.

### Optional: Automate Git Pull

You can set up a simple webhook or cron job to automatically pull changes:

**Option A: Cron job (every 5 minutes)**
```bash
# Add to crontab (crontab -e)
*/5 * * * * cd /path/to/sig-web3 && git pull origin main
```

**Option B: GitHub webhook**
- Set up endpoint on server that receives webhook
- GitHub pings on push → server runs `git pull`
- More complex but instant updates

---

## Team Editing Guide

Create a simple guide for your team (non-technical friendly):

### How to Update Pricing

1. Go to: `https://github.com/yourorg/sig-web3/blob/main/content/pricing.json`
2. Click the **pencil icon** (Edit this file)
3. Make your changes (be careful with commas and quotes!)
4. Scroll down, add a description: "Updated Basic membership price"
5. Click **Commit changes**
6. Wait 5 minutes (or ping Marcus to pull changes)
7. Check the website!

### JSON Editing Tips

- Always keep the same structure (don't remove fields)
- Use double quotes `"` not single quotes `'`
- Don't forget commas between items
- Don't add comma after the last item in a list
- If you break it, click "History" and revert your commit

---

## Performance Considerations

### Caching Strategy (Optional Optimization)

If you want to avoid reading files on every request:

```typescript
import { cache } from 'react'
import { promises as fs } from 'fs'
import path from 'path'

// Cache the file read for the duration of the request
const getPricingData = cache(async () => {
  const filePath = path.join(process.cwd(), 'content', 'pricing.json')
  const fileContents = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContents)
})

export default async function PrislistaPage() {
  const data = await getPricingData()
  // ... rest of component
}
```

### Incremental Static Regeneration (ISR)

If you want the best of both worlds (static speed + dynamic updates):

```typescript
// Add this to generate static page at build time
export const dynamic = 'force-static'

// Revalidate every 60 seconds
export const revalidate = 60

export default async function PrislistaPage() {
  // Same code as before
  const data = await getPricingData()
  // ...
}
```

This will:
- Generate static HTML at build time
- Serve cached version for 60 seconds
- Rebuild page in background after cache expires
- Best performance + content updates without manual rebuild

---

## Rollback Plan

If you need to go back to static export:

1. Restore `output: 'export'` in `next.config.ts`
2. Move content back into components (hard-coded)
3. Run `npm run build`
4. Deploy `/out/` folder as before

---

## Next Steps (When Ready to Migrate)

1. [ ] Create content JSON files with current data
2. [ ] Update `next.config.ts` (remove `output: 'export'`)
3. [ ] Convert pricing page to read from JSON
4. [ ] Convert FAQ page to read from JSON
5. [ ] Test locally with `npm run dev`
6. [ ] Deploy to VPS with `npm run build && npm start`
7. [ ] Test content updates with `git pull`
8. [ ] Create editing guide for team
9. [ ] (Optional) Set up automated git pull

---

## Questions to Consider Before Migration

- Do you want to cache page output? (ISR)
- Should `git pull` be automated or manual?
- Who will be editing content? (affects JSON structure complexity)
- Do you want staging environment for testing changes?

---

**Date:** 2026-01-09
**Status:** Documented for future implementation
**Contact:** Ask Claude Code when ready to implement
