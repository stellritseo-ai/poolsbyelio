# Complete SEO & AI Search Visibility Report — Pools By Elio

**Business:** Pools By Elio  
**Domain:** `https://poolsbyelio.net` (configurable via `NEXT_PUBLIC_SITE_URL` to match Vercel primary domain)  
**Headquarters:** 412 Ezell Pike, Nashville, TN 37217  
**Phone:** (615) 568-3154 | **Email:** eliocustompools@live.com  
**Primary Markets:** Nashville, Franklin, Brentwood, and surrounding Middle Tennessee  
**Report Date:** November 20, 2026  

> **Editorial & SEO Principle:** Neither Google rankings nor AI search citations can be guaranteed. Every improvement implemented below prioritizes verifiable facts, technical crawlability, clear topical architecture, and trustworthy local authority.

---

## 1. Initial Website & Codebase SEO Audit (Phase 1)

| Priority | Audit Finding | Impact | Status |
|---|---|---|---|
| **Critical** | **Unverified / self-serving `AggregateRating` & `Review` JSON-LD** (`5.0` / `52` count) emitted sitewide on `LocalBusiness` | Risk of Google rich-result manual action / structured data policy violation | **Fixed** (`JsonLdSchema.tsx`) |
| **Critical** | **Root layout set a sitewide `alternates.canonical`** pointing to `/` | Any route without its own canonical inherited `/` as canonical | **Fixed** (`src/app/layout.tsx` + explicit canonicals on every page) |
| **Critical** | **70+ `<Image unoptimized>` usages** across pages & components serving multi-MB PNGs (`banner1–3.png` up to 2.1 MB, `first.png`/`second.png` up to 3.9 MB) | Degraded LCP and mobile Core Web Vitals | **Fixed** (removed `unoptimized` so Next.js/Vercel AVIF & WebP optimizer runs automatically; created 130 KB 1200×630 `og-default.jpg`) |
| **Critical** | **No spam protection or rate limiting** on `/api/contact` | Form abuse / SMTP quota exhaustion | **Fixed** (honeypot `website` field, input validation, header-injection stripping, rate limiting) |
| **High** | **Missing dedicated high-intent landing pages** for Gunite Construction, Infinity Edge Pools, Pool Remodeling, Lazy River Construction, Commercial Pool Construction, Nashville/Franklin/Brentwood local pages, Process, FAQ, Projects, and Resources | Major keyword and AI-answer gaps vs. Nashville competitors | **Fixed** (15 new server-rendered pages created) |
| **High** | **Client-only interactive accordions** hid FAQ content behind JS state and lacked page-scoped `FAQPage` JSON-LD matching visible Q&A | Reduced crawlability for Google and AI parsers | **Fixed** (`ContentPage.tsx` uses native HTML `<details>` with matching `FAQPage` JSON-LD) |
| **High** | **Unsubstantiated claims & superlatives** ("Award-Winning", "5.0★", "45+ Verified", "ENERGY STAR up to 70%", "4,000+ PSI", "Founded 2001") across metadata, `llms.txt`, and `/services` | Undermines E-E-A-T trust and AI citation reliability | **Fixed** (cleaned across `seo-config.ts`, `JsonLdSchema.tsx`, `layout.tsx`, `services/page.tsx`, `Header.tsx`, `llms.txt`, `llms-full.txt`) |
| **High** | **Keyword-stuffed ribbon in `Footer.tsx`** + misleading `Privacy Policy` → `/about` & `Terms` → `/contact` links | Outdated SEO footprint and poor UX | **Fixed** (replaced with real internal links to local pages, service pages, FAQ, and guides) |
| **High** | **Overlong SEO page titles (>75–95 chars)** in route `layout.tsx` files causing SERP truncation | Lower click-through rate in Google results | **Fixed** (all 13 existing route layouts tightened to ≤60 chars including brand template) |
| **Medium** | **Contact page Google Map embed** pointed to generic "Nashville, TN" instead of `412 Ezell Pike, Nashville, TN 37217` | Weaker local entity signal on Contact page | **Fixed** (`src/app/contact/page.tsx`) |
| **Medium** | **No analytics or conversion tracking** for GA4, GTM, Clarity, click-to-call, click-to-email, or lead form submissions | Blind to organic ROI and lead attribution | **Fixed** (`src/lib/analytics.ts`, `src/components/Analytics.tsx`, wired to all 3 forms) |
| **Medium** | **Domain `www` vs non-`www` enforcement** (`poolsbyelio.net` vs `www.poolsbyelio.net`) | Potential duplicate host indexing if both serve 200 OK | **Documented** (configure primary domain redirect in Vercel Domains + match `NEXT_PUBLIC_SITE_URL`) |
| **Low** | **Stock/illustrative images on commercial project pages** (`banner3.png`, `service4.png`) | Authentic original project photos convert and rank better | **Flagged for Owner** (labeled transparently as illustrative; replace with verified photos upon permission) |

---

## 2. Competitor SEO Analysis (Phase 2)

| Competitor | Market Focus | Key Strengths | Gaps & Pools By Elio Opportunities |
|---|---|---|---|
| **Waterscapes Backyard Resorts** | Luxury estates (Belle Meade, Forest Hills, Governors Club, Brentwood) | Strong luxury positioning, dedicated service pages (gunite, studio series, outdoor living, renovations, commercial), GENESIS design messaging, in-house crew emphasis | Less focus on large-scale commercial water parks and lazy rivers; Pools By Elio can differentiate with **Sound Waves (Gaylord Opryland)** lazy river pedigree + downtown Nashville hospitality pool bars |
| **McMillion Pool Company** | Greater Nashville residential luxury + weekly service/maintenance | Longstanding local presence, service-area coverage across Belle Meade/Brentwood/Franklin, strong renovation/repair/service recurring intent | Offers vinyl liners & maintenance focus rather than dedicated commercial aquatic attractions and custom architectural fountains |
| **D2 Pools** | Brentwood, Franklin, Williamson County residential | Dedicated gunite + fiberglass options, clear Brentwood address, fire & water feature showcase, YouTube project presence | Smaller commercial footprint; Pools By Elio owns the in-house gunite + commercial hospitality niche |
| **Premier Pools & Spas (Nashville North & South)** | Mass-to-luxury franchise network across Middle TN | Huge domain authority from national franchise root, aggressive local city landing pages, financing and online quote funnels | Franchise model vs. Pools By Elio's direct founder-led, family-owned, 100% in-house crew with Jonathan Elio Rodriguez on site daily |
| **Haven Outdoors** | Kingston Springs / Greater Nashville full outdoor living | Interactive cost estimator, strong holistic hardscape/pergola/kitchen messaging across fiberglass, gunite, and pre-cast | Broad multi-material focus; Pools By Elio wins high-budget custom gunite specificity and commercial engineering authority |
| **Additional Regional Competitors Observed** | **Palmingo Pools**, **Riverstone Pools** (Williamson County), **Pool & Spa Depot**, **Denali Pools & Outdoors** | Strong local targeting in Williamson County, 3D design visualization, dedicated gunite structural pages | Opportunity to capture informational searches (`custom pool cost Nashville`, `gunite vs fiberglass`, `pool construction timeline`, `how to choose a pool contractor Tennessee`) and commercial lazy river/water park intent |

---

## 3. Keyword Research Database & URL Mapping (Phase 3)

*(Note: Search volumes and difficulty scores are intentionally omitted rather than invented; verify exact monthly figures in Google Keyword Planner or Ahrefs/Semrush once connected.)*

| Keyword Cluster | Search Intent | Target Location | Role | Mapped Canonical URL | Priority | Action Taken |
|---|---|---|---|---|---|---|
| Custom pool builders Nashville TN / Luxury pool builders Nashville TN | Commercial | Nashville, TN | Primary | `/` | Critical | Optimized root title, H1, metadata, JSON-LD |
| Pool builders Nashville TN / Swimming pool contractors Nashville | Local Commercial | Nashville, TN | Primary | `/pool-builders-nashville-tn` | High | **Created** dedicated local page |
| Pool builders Franklin TN / Gunite pool builders Franklin TN | Local Commercial | Franklin, TN | Primary | `/pool-builders-franklin-tn` | High | **Created** dedicated local page |
| Pool builders Brentwood TN / Luxury outdoor living Brentwood TN | Local Commercial | Brentwood, TN | Primary | `/pool-builders-brentwood-tn` | High | **Created** dedicated local page |
| Custom gunite pool construction / Gunite pool builders Nashville TN | Commercial | Middle TN | Primary | `/gunite-pool-construction` | High | **Created** dedicated service page |
| Custom inground pools & spas / Pool and spa combinations | Commercial | Middle TN | Primary | `/pools-and-spas` | High | Optimized metadata & internal links |
| Infinity edge swimming pools / Vanishing edge pools Nashville | Commercial | Middle TN | Primary | `/infinity-edge-pools` | High | **Created** dedicated service page |
| Pool remodeling Nashville / Pool resurfacing & repair | Commercial | Middle TN | Primary | `/pool-remodeling` | High | **Created** dedicated service page |
| Custom pool waterfalls / Rock grottos / Water features | Commercial | Middle TN | Primary | `/water-features` | Medium | Optimized metadata & internal links |
| Smart pool automation / Variable speed pool pumps | Commercial / Info | Middle TN | Primary | `/technology` | Medium | Optimized metadata & removed unverified % claims |
| Custom pool houses Nashville / Outdoor pool bars / Fire pits | Commercial | Middle TN | Primary | `/backyard-concepts` | High | Optimized metadata & internal links |
| Commercial swimming pool contractors Tennessee / Hotel pools | Commercial | Tennessee | Primary | `/commercial-pool-construction` | High | **Created** dedicated commercial page |
| Water park construction companies / Splash pad / Wave pool | Commercial | Tennessee | Primary | `/water-parks` | High | Optimized metadata & linked from projects |
| Lazy river construction contractors / Lazy river builders | Commercial | Tennessee | Primary | `/lazy-river-construction` | High | **Created** dedicated commercial page |
| Commercial fountains & residential estate fountains | Commercial | Middle TN | Primary | `/fountains` | Medium | Optimized metadata & internal links |
| How much does a custom pool cost in Nashville? | Informational | Nashville, TN | Primary | `/resources/custom-pool-cost-nashville` | High | **Created** dedicated guide (`Article` schema) |
| Gunite vs fiberglass swimming pools | Informational | Middle TN | Primary | `/resources/gunite-vs-fiberglass-pools` | High | **Created** comparison guide (`Article` schema) |
| How long does pool construction take? / Pool build timeline | Informational | Middle TN | Primary | `/resources/pool-construction-timeline` | Medium | **Created** phase-by-phase guide (`Article` schema) |
| How to choose a pool contractor in Tennessee? | Informational | Tennessee | Primary | `/resources/how-to-choose-a-pool-contractor-tennessee` | Medium | **Created** 7-step vetting guide (`Article` schema) |
| Pool construction FAQ / Common questions | Informational | Middle TN | Primary | `/faq` | High | **Created** crawlable `<details>` FAQ + `FAQPage` schema |
| Custom pool building process | Informational | Middle TN | Secondary | `/process` | Medium | **Created** dedicated 4-stage process page |
| Pools By Elio projects / Sound Waves Gaylord Opryland builder | Navigational / Proof | Nashville, TN | Primary | `/projects`, `/projects/sound-waves-gaylord-opryland`, `/projects/downtown-nashville-pool-bars` | High | **Created** project hub & documented case pages |

---

## 4. Technical, On-Page, Local, Schema & AI Search Implementation (Phases 4–10)

### New Pages Created (15 Routes)
- **Residential & Commercial Service Pages:** `/gunite-pool-construction`, `/infinity-edge-pools`, `/pool-remodeling`, `/lazy-river-construction`, `/commercial-pool-construction`
- **Local Landing Pages:** `/pool-builders-nashville-tn`, `/pool-builders-franklin-tn`, `/pool-builders-brentwood-tn`
- **Core Trust & Architecture Pages:** `/faq`, `/process`, `/projects`, `/projects/sound-waves-gaylord-opryland`, `/projects/downtown-nashville-pool-bars`
- **Guides & Resources Hub:** `/resources`, `/resources/gunite-vs-fiberglass-pools`, `/resources/custom-pool-cost-nashville`, `/resources/pool-construction-timeline`, `/resources/how-to-choose-a-pool-contractor-tennessee`

### Structured Data (`src/components/JsonLdSchema.tsx`)
- Global `@graph`: `HomeAndConstructionBusiness` + `GeneralContractor` (linked founders, verified NAP, Mon–Fri hours, official `sameAs` profiles, `areaServed`, `knowsAbout`, `hasOfferCatalog`) + `WebSite`.
- Page-level `@graph`: `WebPage` / `AboutPage` / `ContactPage` / `CollectionPage` / `FAQPage`, `BreadcrumbList`, `Service`, `Article` (on guides), and `FAQPage` **only** on pages rendering the identical visible Q&A.
- Removed self-serving `AggregateRating`/`Review` JSON-LD to remain compliant with Google structured data policies.

### AI Search / GEO Readiness
- Server-rendered HTML for all new service, local, project, FAQ, and guide pages (zero JS dependency for crawlers).
- Updated [`public/llms.txt`](../../public/llms.txt) and [`public/llms-full.txt`](../../public/llms-full.txt) with purely factual, verifiable entity details and full route maps.
- Verified [`src/app/robots.ts`](../../src/app/robots.ts) permits `Googlebot`, `Bingbot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, and other search/AI agents while disallowing `/api/`.

---

## 5. Google Business Profile & Local Citation Checklist (Phase 7)

1. **Primary Category:** `Swimming pool contractor`
2. **Secondary Categories:** `Pool cleaning service` (only if actively offered), `Landscape designer`, `General contractor`, `Fountain contractor` (if available).
3. **NAP Exact Match:** `Pools By Elio` | `412 Ezell Pike, Nashville, TN 37217` | `(615) 568-3154` | `https://poolsbyelio.net`
4. **Service Areas:** Nashville, Franklin, Brentwood, Belle Meade, Green Hills, Forest Hills, Oak Hill, Hendersonville, Mount Juliet, Murfreesboro, Nolensville, Leiper's Fork, Spring Hill.
5. **Photos & Updates:** Upload original job-site photos (excavation, rebar, gunite, completed night lighting) monthly; post seasonal planning reminders in Fall/Winter.
6. **Review Acquisition & Response:** Send direct Google review link after pool start-up orientation; reply personally as Jonathan/Pools By Elio to every review within 48 hours mentioning the project type naturally.
7. **Core Citations to Keep Consistent:** Google Business Profile, Bing Places, Apple Business Connect, BBB, Yelp, Houzz, Nextdoor, Tennessee Chamber / local Nashville homebuilder directories.

---

## 6. 90-Day Content Marketing & Backlink Strategy (Phases 11–12)

### 90-Day Content Publishing Calendar (Building on the 4 Guides Published Today)
- **Days 1–30 (Luxury Residential & Site Engineering):**
  - *Designing a Resort-Style Backyard on Sloped Williamson County Lots*
  - *10 Custom Pool Features That Elevate Everyday Backyard Living*
  - *Documented Project Case Studies* (add 3–5 real residential Nashville/Franklin/Brentwood builds with homeowner-approved photos, dimensions, and materials)
- **Days 31–60 (Commercial Aquatics & Hospitality):**
  - *How to Plan a Commercial Water Park or Resort Pool in Tennessee*
  - *Hotel & Multi-Family Swimming Pool Construction: Compliance, Hydraulics & Durability*
  - *Commercial Splash Pad Planning for Municipalities and Resorts*
- **Days 61–90 (Pool Technology & Maintenance Longevity):**
  - *Smart Pool Automation Explained: Pumps, Heaters, Lighting & Sanitation*
  - *Saltwater vs. Traditional Chlorine & UV/Ozone Pool Systems*
  - *When to Resurface vs. Remodel a Concrete Pool in Tennessee*

### Ethical Digital Authority & Backlink Plan
1. **Equipment & Material Partners:** Request authorized builder listings from Pentair, Hayward, Jandy, pebble/quartz aggregate manufacturers, and stone suppliers.
2. **Trade Associations:** PHTA (Pool & Hot Tub Alliance), Home Builders Association of Middle Tennessee (HBAMT), Nashville Area Chamber of Commerce.
3. **Local Architectural & Design Features:** Pitch completed luxury residential and hospitality projects (with professional photography) to *Nashville Lifestyles*, *StyleBlueprint*, *Williamson Scene*, and *Houzz* editorial teams.
4. **Sister-Brand Cross-Linking:** Ensure clean contextual reciprocal links between `poolsbyelio.net` and `thehouseoffountains.com`.

---

## 7. Analytics & Verification Setup (Phase 14)

All tracking hooks are pre-installed in [`src/components/Analytics.tsx`](../../src/components/Analytics.tsx) and [`src/lib/analytics.ts`](../../src/lib/analytics.ts) and stay completely dormant until IDs are configured in Vercel Environment Variables (see [`.env.example`](../../.env.example)):

- `NEXT_PUBLIC_SITE_URL` — Set to match your exact primary domain in Vercel (`https://poolsbyelio.net` or `https://www.poolsbyelio.net`).
- `NEXT_PUBLIC_GA_ID` (GA4 Measurement ID) **or** `NEXT_PUBLIC_GTM_ID` (Google Tag Manager container ID — do not set both).
- `NEXT_PUBLIC_CLARITY_ID` (optional Microsoft Clarity project ID for UX heatmaps).
- `GOOGLE_SITE_VERIFICATION` & `BING_SITE_VERIFICATION` — Automatically injected into `<meta>` verification tags in `src/app/layout.tsx`.
- **Automatic Events Tracked:** `click_to_call` (every `tel:` tap), `click_email` (every `mailto:` tap), and `generate_lead` (all 3 quote/contact forms with `form_source`).

---

## 8. Remaining Owner-Side Action Items (Pending External Access)

1. **Vercel Domain Canonicalization:** In Vercel → Settings → Domains, confirm whether `poolsbyelio.net` or `www.poolsbyelio.net` is the primary domain (so the non-primary host 308-redirects cleanly) and set `NEXT_PUBLIC_SITE_URL` to match.
2. **Configure Analytics & Webmaster Verification:** Add GA4/GTM, Search Console, and Bing Webmaster Tools IDs in Vercel Environment Variables and submit `/sitemap.xml` in both Google Search Console and Bing Webmaster Tools.
3. **Replace Illustrative Photography:** Replace stock/illustrative photos on `/projects/sound-waves-gaylord-opryland` and `/projects/downtown-nashville-pool-bars` with owner-approved original photography, and document 3–5 verified residential builds with homeowner permission.
4. **Verify License Number Display:** If desired, provide your official Tennessee General Contractor license number to display on `/about`, `/contact`, and the footer for maximum homeowner trust.

