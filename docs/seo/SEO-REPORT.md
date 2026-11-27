# Complete SEO, Technical SEO, Local SEO, Off-Page SEO & AI Search (GEO/AEO) Report
## Client: Pools By Elio (`https://www.poolsbyelio.net/`)

**Business:** Pools By Elio  
**Canonical Live Host:** `https://www.poolsbyelio.net` (Vercel primary host; `poolsbyelio.net` 308-redirects to `www.poolsbyelio.net`)  
**Headquarters:** 412 Ezell Pike, Nashville, TN 37217  
**Phone:** (615) 568-3154 | **Email:** `eliocustompools@live.com`  
**Primary Market:** Nashville, Tennessee  
**Secondary Markets:** Franklin, TN; Brentwood, TN; Greater Middle Tennessee (~50-mile radius); Commercial projects across Tennessee  
**Audit & Implementation Date:** November 28, 2026  

> **Integrity Notice:** No agency can guarantee first-page Google rankings or AI citations. Every fix, schema entity, backlink target, and content piece in this report is grounded in live production HTTP evidence, codebase inspection, and verified business information—with zero fabricated search volumes, rankings, reviews, or credentials.

---

## Deliverable 1 & 2: Complete Website Discovery & Technical SEO Audit

### Live Production Crawl Evidence (Before Fix — Nov 28, 2026)
- `http://poolsbyelio.net/` → `308` → `https://poolsbyelio.net/` → `308` → `https://www.poolsbyelio.net/`
- `http://www.poolsbyelio.net/` → `308` → `https://www.poolsbyelio.net/`
- `https://www.poolsbyelio.net/` → `HTTP/2 200` (`TTFB: 0.29s`, `X-Vercel-Cache: HIT`, `HSTS: max-age=63072000`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`)
- **CRITICAL DEFECT DISCOVERED LIVE:** Although `https://www.poolsbyelio.net/` is the live `200 OK` host, the live HTML emitted `<link rel="canonical" href="https://poolsbyelio.net"/>` and `/sitemap.xml` listed `https://poolsbyelio.net/...` (all 308 redirects!).

### Complete Technical & On-Page Issue Inventory

| Priority | Issue | Evidence | Impact | Solution Implemented | Status |
|---|---|---|---|---|---|
| **CRITICAL** | **Live Canonical & Sitemap Host Mismatch (`www` vs apex)** | Live `https://www.poolsbyelio.net/` emitted `canonical=https://poolsbyelio.net` (308 redirect) | Causes GSC *"Duplicate, Google chose different canonical"* & *"Page with redirect"* across all 32 URLs | Updated `SITE_CONFIG.url`, `.env.example`, `sitemap.xml`, `robots.txt`, JSON-LD, `llms.txt`, and `llms-full.txt` to `https://www.poolsbyelio.net` | **Fixed** |
| **CRITICAL** | **64 `<Image fill>` tags missing responsive `sizes=` + below-fold `priority` misuse** | 18 component/page files lacked `sizes=`; `Footer.tsx` & `WhyUsSection.tsx` preloaded below-fold images | Forces mobile phones to download 1920px images and delays Hero LCP | Added accurate `sizes=` to all 64 `<Image fill>` tags; removed `priority` from `Footer.tsx` and `WhyUsSection.tsx`; set `images.minimumCacheTTL: 2592000` | **Fixed** |
| **CRITICAL** | **Self-serving `AggregateRating` / `Review` JSON-LD & root inherited canonical** | Sitewide JSON-LD emitted unverified `5.0/52` rating; `layout.tsx` set canonical `/` | Policy risk for structured data manual actions and duplicate canonicals | Removed self-serving `AggregateRating`/`Review`; per-page canonicals via `createPageMetadata()` | **Fixed** |
| **CRITICAL** | **Contact API lacked spam/abuse protection** | `/api/contact` accepted unvalidated payloads | Spam risk & Zoho SMTP quota risk | Added hidden `website` honeypot, header-injection stripping, validation, and rate limiting across API + all 3 forms | **Fixed** |
| **HIGH** | **12 redundant duplicate alias `page.tsx` files** | `src/app/portfolio`, `areas`, `testimonials`, `services/*`, etc. duplicated canonical pages | Unnecessary static build output & potential duplicate routes | Deleted 12 redundant alias files while preserving all `308` permanent edge redirects in `next.config.ts` | **Fixed** |
| **HIGH** | **Missing dedicated high-intent service, local, FAQ, process, project & guide URLs** | Core keywords (`gunite`, `infinity edge`, `remodeling`, `Franklin`, `Brentwood`, `lazy river`, `pool cost`) lacked dedicated URLs | Weak topical relevance & missed AI/organic traffic | Created 15 server-rendered App Router pages (32 total canonical URLs) | **Fixed** |
| **HIGH** | **Unsubstantiated superlatives ("Award-Winning", "5.0★", "45+ Verified", "up to 70%")** | Found in `Hero.tsx`, `layout.tsx`, `services/page.tsx`, `Header.tsx`, `llms.txt` | Violates E-E-A-T trust & AI factual citation guidelines | Replaced with verified, factual statements across all files | **Fixed** |
| **HIGH** | **Footer keyword stuffing & mismatched policy links** | Footer ribbon listed raw comma/bullet keywords; Privacy linked to `/about` | Outdated SEO footprint & poor UX | Replaced with structured links to local pages, guides, `/faq`, `/resources`, `/contact` | **Fixed** |
| **MEDIUM** | **Homepage internal links to new local, FAQ & process pages** | `FaqMapSection` city badges were static `<div>`s; `ProcessSection` lacked `/process` link | Deeper crawl depth for local & informational hubs | Converted Nashville/Franklin/Brentwood badges into `<Link>` elements, pinned Contact/Home map embeds to `412 Ezell Pike`, linked `/faq` & `/process` | **Fixed** |
| **MEDIUM** | **WCAG Skip-to-Content accessibility & DNS prefetch header** | Missing keyboard skip link and `X-DNS-Prefetch-Control` | Accessibility & external resource latency | Added `sr-only focus:not-sr-only` skip link in `layout.tsx` + `id="main-content"` + `X-DNS-Prefetch-Control: on` | **Fixed** |
| **LOW** | **Next.js `16.4.2` security advisory & illustrative photos on commercial project pages** | `npm run build` advisory; `banner3.png`/`service4.png` illustrative | Security hygiene & E-E-A-T photographic authenticity | Flagged for owner approval (upgrade Next.js; supply approved Sound Waves & residential project photos) | **Pending Owner** |

---

## Deliverable 3: Page-by-Page On-Page SEO Inventory (All 32 Canonical URLs)

All 32 canonical pages are statically prerendered (`○ Static` / `◐ PPR`), emit a unique `<title>` (≤60 chars), unique `<meta name="description">` (120–158 chars), single `<h1>`, self-referencing `https://www.poolsbyelio.net/...` canonical, `1200×630` Open Graph image (`/assets/og-default.jpg`), and valid Schema.org JSON-LD:

| # | Canonical Path | Page Type | Primary Target Intent | Schema Emitted |
|---|---|---|---|---|
| 1 | `/` | Homepage | Custom pool builders Nashville TN | `HomeAndConstructionBusiness`, `GeneralContractor`, `WebSite` |
| 2 | `/services` | Service Hub | Pool construction services Nashville TN | `CollectionPage`, `BreadcrumbList`, `Service` |
| 3 | `/pools-and-spas` | Residential Service | Custom gunite pools & spas Nashville TN | `WebPage`, `BreadcrumbList`, `Service` |
| 4 | `/gunite-pool-construction` | Residential Service | Gunite pool construction Nashville TN | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 5 | `/infinity-edge-pools` | Residential Service | Infinity / vanishing edge pools Nashville | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 6 | `/pool-remodeling` | Residential Service | Pool remodeling, resurfacing & repair Nashville | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 7 | `/water-features` | Residential Service | Custom pool waterfalls & grottos Nashville | `WebPage`, `BreadcrumbList`, `Service` |
| 8 | `/technology` | Residential Service | Smart pool automation & variable speed pumps | `WebPage`, `BreadcrumbList`, `Service` |
| 9 | `/backyard-concepts` | Residential Service | Pool houses, swim-up bars & outdoor kitchens | `WebPage`, `BreadcrumbList`, `Service` |
| 10 | `/fountains` | Specialty Service | Residential & commercial fountains Nashville | `WebPage`, `BreadcrumbList`, `Service` |
| 11 | `/commercial-pool-construction` | Commercial Service | Commercial pool contractors Tennessee | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 12 | `/water-parks` | Commercial Service | Commercial water park builders Tennessee | `WebPage`, `BreadcrumbList`, `Service` |
| 13 | `/lazy-river-construction` | Commercial Service | Lazy river design & construction Tennessee | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 14 | `/pool-builders-nashville-tn` | Local Page | Pool builders in Nashville, TN | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 15 | `/pool-builders-franklin-tn` | Local Page | Pool builders in Franklin, TN | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 16 | `/pool-builders-brentwood-tn` | Local Page | Pool builders in Brentwood, TN | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| 17 | `/areas-we-serve` | Local Hub | Middle Tennessee 50-mile service coverage | `WebPage`, `BreadcrumbList` |
| 18 | `/projects` | Portfolio Hub | Pools By Elio commercial & residential work | `WebPage`, `BreadcrumbList` |
| 19 | `/projects/sound-waves-gaylord-opryland` | Project Case | Sound Waves Gaylord Opryland lazy river builder | `WebPage`, `BreadcrumbList` |
| 20 | `/projects/downtown-nashville-pool-bars` | Project Case | Downtown Nashville hospitality pool bars | `WebPage`, `BreadcrumbList` |
| 21 | `/before-after` | Visual Portfolio | Before & after pool transformations Nashville | `WebPage`, `BreadcrumbList` |
| 22 | `/reviews` | Social Proof | Pools By Elio homeowner & estate manager reviews | `WebPage`, `BreadcrumbList` |
| 23 | `/about` | E-E-A-T Core | Jonathan & David Elio Rodriguez / in-house crew | `AboutPage`, `BreadcrumbList` |
| 24 | `/process` | E-E-A-T Core | 4-stage custom pool building process | `WebPage`, `BreadcrumbList`, `FAQPage` |
| 25 | `/faq` | AEO / GEO Core | Pool construction FAQ (15 visible Q&As) | `FAQPage`, `BreadcrumbList` |
| 26 | `/contact` | Conversion Core | Nashville HQ, map, phone & direct inquiry form | `ContactPage`, `BreadcrumbList` |
| 27 | `/quote` | Conversion Core | Interactive 5-step custom pool quote builder | `WebPage`, `BreadcrumbList` |
| 28 | `/resources` | Content Hub | Homeowner & commercial planning guides | `CollectionPage`, `BreadcrumbList` |
| 29 | `/resources/gunite-vs-fiberglass-pools` | Pillar Guide | Gunite vs. fiberglass pools comparison | `Article`, `BreadcrumbList`, `FAQPage` |
| 30 | `/resources/custom-pool-cost-nashville` | Pillar Guide | Custom pool cost in Nashville, TN | `Article`, `BreadcrumbList`, `FAQPage` |
| 31 | `/resources/pool-construction-timeline` | Pillar Guide | Pool construction timeline & phases | `Article`, `BreadcrumbList`, `FAQPage` |
| 32 | `/resources/how-to-choose-a-pool-contractor-tennessee` | Pillar Guide | How to choose a pool contractor in Tennessee | `Article`, `BreadcrumbList`, `FAQPage` |

---

## Deliverable 4: Keyword Research & URL Mapping Matrix

*(Estimated search volume and keyword difficulty are marked `Verify in GSC / Keyword Planner` — never fabricated.)*

| Seed Keyword / Cluster | Intent | Target Location | Est. Vol / KD | Assigned Canonical URL | Priority |
|---|---|---|---|---|---|
| Custom pool builders Nashville TN / Luxury pool builders Nashville | Commercial | Nashville, TN | Verify in KWP | `/` | Critical |
| Pool builders Nashville TN / Swimming pool contractors Nashville | Local Commercial | Nashville, TN | Verify in KWP | `/pool-builders-nashville-tn` | High |
| Pool builders Franklin TN / Swimming pool contractors Franklin TN | Local Commercial | Franklin, TN | Verify in KWP | `/pool-builders-franklin-tn` | High |
| Custom pool builders Brentwood TN / Pool installation Brentwood TN | Local Commercial | Brentwood, TN | Verify in KWP | `/pool-builders-brentwood-tn` | High |
| Gunite pool builders Nashville TN / Gunite pool construction | Commercial | Middle TN | Verify in KWP | `/gunite-pool-construction` | High |
| Custom pool and spa design Nashville / Inground pool installation | Commercial | Middle TN | Verify in KWP | `/pools-and-spas` | High |
| Infinity pool builders Nashville / Vanishing edge pools | Commercial | Middle TN | Verify in KWP | `/infinity-edge-pools` | High |
| Pool remodeling Nashville / Luxury backyard renovation Nashville | Commercial | Middle TN | Verify in KWP | `/pool-remodeling` | High |
| Commercial pool contractors Tennessee / Hotel & resort pools | Commercial | Tennessee | Verify in KWP | `/commercial-pool-construction` | High |
| Commercial water park construction / Water park contractors TN | Commercial | Tennessee | Verify in KWP | `/water-parks` | High |
| Lazy river construction contractors / Lazy river builders | Commercial | Tennessee | Verify in KWP | `/lazy-river-construction` | High |
| Custom pool waterfalls Nashville / Pool water features installation | Commercial | Middle TN | Verify in KWP | `/water-features` | Medium |
| Commercial fountain contractors Nashville / Pool fountains TN | Commercial | Middle TN | Verify in KWP | `/fountains` | Medium |
| Custom pool houses Nashville TN / Outdoor kitchen & pool bars | Commercial | Middle TN | Verify in KWP | `/backyard-concepts` | High |
| Pool automation installation Nashville / Smart pool systems TN | Commercial | Middle TN | Verify in KWP | `/technology` | Medium |
| How much does a custom swimming pool cost in Nashville? | Informational | Nashville, TN | Verify in KWP | `/resources/custom-pool-cost-nashville` | High |
| Gunite vs fiberglass swimming pools | Informational | Middle TN | Verify in KWP | `/resources/gunite-vs-fiberglass-pools` | High |
| How long does swimming pool construction take? | Informational | Middle TN | Verify in KWP | `/resources/pool-construction-timeline` | Medium |
| How to choose a pool contractor in Tennessee | Informational | Tennessee | Verify in KWP | `/resources/how-to-choose-a-pool-contractor-tennessee` | Medium |

---

## Deliverable 5: Local SEO & Google Business Profile Plan

- **Verified NAP Standard (100% consistent across code, JSON-LD, footer, contact, and `llms.txt`):**
  - **Name:** `Pools By Elio`
  - **Address:** `412 Ezell Pike, Nashville, TN 37217`
  - **Phone:** `(615) 568-3154`
  - **Email:** `eliocustompools@live.com`
  - **Website:** `https://www.poolsbyelio.net/`
  - **Hours:** Mon–Fri 8:00 AM–6:00 PM; Saturday & evenings by appointment
- **Google Business Profile Optimization Actions:**
  1. Primary Category: `Swimming pool contractor`; Secondary: `General contractor`, `Landscape designer` (add only verified services).
  2. Update GBP Website URL to `https://www.poolsbyelio.net/` with UTM parameters (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) to separate GBP clicks in GA4.
  3. Populate GBP Services list matching our 11 service pages verbatim.
  4. Upload 5–10 original geotagged job-site photos/month (rebar, gunite, completed night lighting) and post bi-weekly seasonal planning updates.
  5. Implement a post-completion review request text/email linking directly to the GBP review link, and respond personally to every review within 48 hours.

---

## Deliverable 6: Top-10 Genuine Organic Competitors Analysis

| # | Competitor | Core Geography | Primary Focus | Key Strengths | Strategic Edge for Pools By Elio |
|---|---|---|---|---|---|
| 1 | **Waterscapes Backyard Resorts** | Nashville, Brentwood, Belle Meade, Forest Hills | Luxury estates & commercial | GENESIS design positioning, BBB A+, strong outdoor living pages | Stronger large-scale commercial water attraction pedigree (**Sound Waves lazy river**) |
| 2 | **McMillion Pool Company** | Greater Nashville, Belle Meade, Oak Hill | Luxury residential, remodels & weekly care | 17+ yr reputation, Houzz & Angi presence, strong service retention | Dedicated custom gunite focus (no vinyl dilution) + commercial hospitality portfolio |
| 3 | **D2 Pools** | Brentwood, Franklin, Williamson County | Custom gunite, fiberglass & fire/water | Brentwood HQ address, YouTube video presence | 100% in-house gunite crew + commercial scale |
| 4 | **Premier Pools & Spas (Nashville N/S)** | Greater Nashville & Williamson/Sumner | Franchise gunite & fiberglass | High root-domain authority, aggressive regional landing pages | Direct family-owned founder supervision (Jonathan Elio Rodriguez on site daily) vs. franchise |
| 5 | **Haven Outdoors** | Kingston Springs & Greater Nashville | Holistic outdoor living + pools | Interactive cost estimator, hardscape/architecture focus | Deeper specialized gunite & commercial aquatic engineering |
| 6 | **Basin Pool Designs** | Franklin, Brentwood, Governors Club | Ultra-luxury estate architecture | Strong Houzz portfolio & luxury neighborhood branding | Broader residential + commercial + fountain capabilities |
| 7 | **Cox Pools (Nashville)** | Nashville, Franklin, Brentwood | Concrete/gunite, fiberglass & commercial | PHTA & GENESIS affiliations, multi-state commercial history | Family-owned Nashville headquarters & personalized boutique execution |
| 8 | **Noble Custom Pools** | Davidson, Williamson & Sumner Counties | Custom pools & hardscapes | Best of Houzz service recognition, 3D design showcase | Commercial water park & hospitality pool bar credentials |
| 9 | **Parkside Pools** | Nashville, Brentwood, Franklin, Nolensville | Modern custom pools & spas | Modern hillside designs, strong Williamson County local SEO | 25+ years local tenure & dedicated remodeling/structural repair capability |
| 10 | **Allison Companies / Burleson Pool Co.** | Middle TN / Southeast Commercial | Commercial, HOA, municipal & water parks | Master Pools Guild (Burleson), developer/GC partnerships | Direct Nashville HQ + proven Gaylord Opryland & downtown Nashville hospitality track record |

---

## Deliverable 7 & 8: Backlink Profile Audit & Acquisition Playbook

### Observed Existing Brand Mentions & Citations (Verified via Web Search)
- **Better Business Bureau (BBB):** `https://www.bbb.org/us/tn/nashville/profile/pool-contractors/pools-by-elio-0573-37378278`
- **Yelp:** `https://www.yelp.com/biz/pools-by-elio-nashville-2`
- **Facebook:** `https://www.facebook.com/poolsbyelio/` | **Instagram:** `https://www.instagram.com/poolbyelio/`
- **Birdeye / Google Maps / County Advisory Board / TN Pool Builders (`tnpoolbuilders.com`)**
- **Missing High-Value Profiles:** **Houzz Pro** (competitors Basin, Noble, and McMillion dominate Houzz Nashville results), **PHTA Member Directory**, **Apple Business Connect**, **Bing Places**, and **Equipment Manufacturer Dealer Locators** (Pentair / Hayward / Jandy).

### Realistic White-Hat Backlink Acquisition Targets

| Target Website | URL | Relevance | Link Type | Application / Entry Path | Difficulty | Outreach Strategy |
|---|---|---|---|---|---|---|
| **Houzz Pro** | `https://www.houzz.com/` | Very High | Profile + Portfolio Citation | `https://www.houzz.com/professionals` | Easy | Claim profile, upload 20+ real projects tagged Nashville/Franklin/Brentwood, link to `https://www.poolsbyelio.net/` |
| **Pool & Hot Tub Alliance (PHTA)** | `https://www.phta.org/` | Very High | Industry Association Directory | `https://www.phta.org/membership/` | Medium | Join PHTA & list company in official consumer "Find a Pool Pro" directory |
| **Pentair / Hayward / Jandy Dealer Locators** | `https://www.pentair.com/` / `https://hayward.com/` | Very High | Manufacturer Partner Listing | Authorized Builder Portal via distributor rep | Easy–Med | Request official "Find a Dealer / Builder" listing through your Middle TN equipment rep |
| **Home Builders Association of Middle TN** | `https://www.hbamt.org/` | High | Local Trade Association | `https://www.hbamt.org/join` | Medium | Join as Associate / Specialty Contractor for local Nashville .org backlink & builder referrals |
| **Nashville Area Chamber of Commerce** | `https://www.nashvillechamber.com/` | High | Local Chamber Directory | `https://www.nashvillechamber.com/membership` | Medium | Member directory profile with verified Nashville HQ NAP |
| **Bing Places & Apple Business Connect** | `https://www.bingplaces.com/` / `https://businessconnect.apple.com/` | High | Search Engine Local Graph | Direct owner verification | Easy | Powers Bing Copilot, Siri, and Apple Maps entity discovery |
| **Nashville Lifestyles / StyleBlueprint / Williamson Scene** | `https://nashvillelifestyles.com/` / `https://styleblueprint.com/` | Very High | Local Editorial Feature | Editorial pitch / Home & Garden issue | High | Pitch a professionally photographed Belle Meade, Franklin, or Brentwood backyard transformation story |
| **Pool & Spa News / Aquatics International** | `https://www.poolspanews.com/` / `https://www.aquaticsintl.com/` | High | Industry Editorial / Case Study | Submit project photography & engineering story | High | Pitch commercial hospitality / lazy river engineering expertise |
| **The House of Fountains (Sister Brand)** | `http://thehouseoffountains.com/` | High | Partner Contextual Link | Direct owner control | Easy | Ensure clean contextual cross-link back to `https://www.poolsbyelio.net/fountains` |
| **Tennessee Contractor License / Local Home Tours** | Local Parade of Homes / Charity Sponsorships | Medium–High | Community Sponsorship | Event sponsor page | Medium | Sponsor a Williamson County or Nashville Parade of Homes / school fundraiser for hyper-local `.org` links |

---

## Deliverable 9: AI Search Visibility (GEO / AEO) Audit

- **Live Verification Win:** Live web-grounded AI search queries for *"best luxury custom pool builders Nashville Franklin Brentwood TN gunite"* and *"commercial pool contractors Tennessee water park builders Nashville"* **already cite `poolsbyelio.net`** as a top Nashville residential gunite and commercial lazy river contractor!
- **Implemented GEO/AEO Enhancements:**
  1. All 15 new high-intent pages render **100% crawlable server-side HTML** (including native `<details>` FAQs that require zero JavaScript execution).
  2. Synchronized [`public/llms.txt`](../../public/llms.txt) and [`public/llms-full.txt`](../../public/llms-full.txt) to canonical `https://www.poolsbyelio.net` with strictly factual, citation-ready summaries.
  3. Verified [`/robots.txt`](../../src/app/robots.ts) welcomes `Googlebot`, `Bingbot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, and `Applebot` without accidental blocking.

---

## Deliverable 10 & 11: E-E-A-T & Structured Data Report

- **E-E-A-T:** Highlighted co-founders **Jonathan Elio Rodriguez** and **David Elio Rodriguez**, 25+ years experience, 100% in-house execution, verified Nashville headquarters, and documented commercial work while removing all unsubstantiated superlatives.
- **Schema.org JSON-LD (`src/components/JsonLdSchema.tsx`):** Clean `@graph` connecting `HomeAndConstructionBusiness` + `GeneralContractor` → `Person` (founders) → `OfferCatalog` (10 services) → `WebSite` → page-specific `WebPage`/`AboutPage`/`ContactPage`/`CollectionPage`/`Service`/`Article`/`BreadcrumbList` and visible-only `FAQPage`. Zero duplicate entities, zero fabricated ratings.

---

## Deliverable 12: 6-Month Content Marketing Strategy (30-Article Roadmap)

*4 foundational pillar guides are already published under `/resources/`. The next 26 articles complete a 6-month topical authority calendar (approx. 1 high-quality, fact-checked article per week):*

- **Month 1 (Published + Core Residential):**
  1. *(Live)* Gunite vs. Fiberglass Swimming Pools (`/resources/gunite-vs-fiberglass-pools`)
  2. *(Live)* How Much Does a Custom Pool Cost in Nashville, TN? (`/resources/custom-pool-cost-nashville`)
  3. *(Live)* Pool Construction Timeline: From Design to First Swim (`/resources/pool-construction-timeline`)
  4. *(Live)* How to Choose a Pool Contractor in Tennessee (`/resources/how-to-choose-a-pool-contractor-tennessee`)
  5. Complete Guide to Building a Luxury Backyard Pool in Middle Tennessee
- **Month 2 (Design & Engineering):**
  6. Custom Pool Design Ideas for Tennessee Homes
  7. Luxury Pool and Spa Combination Design & Cost Factors
  8. Infinity Pools vs. Traditional Inground Pools on Sloped Lots
  9. Building a Custom Pool Over Middle Tennessee Limestone & Clay Soil
  10. Pool Setbacks, Zoning & HOA Approvals in Nashville, Franklin & Brentwood
- **Month 3 (Outdoor Living & Water Features):**
  11. Pool Houses, Cabanas & Outdoor Bars: Design Ideas for Entertaining
  12. How to Design a Cohesive Luxury Outdoor Living Space Around Your Pool
  13. Modern Pool Waterfall, Grotto & Scupper Ideas
  14. Residential & Estate Fountain Design for Tennessee Properties
  15. Best Pool Decking Materials for Tennessee Summers & Freeze-Thaw Winters
- **Month 4 (Commercial Aquatic Authority):**
  16. Commercial Pool Construction in Tennessee: Complete Owner's Guide
  17. How Commercial Water Parks Are Designed and Built
  18. Lazy River Hydraulics, Layout & Guest Flow Explained
  19. Hotel & Resort Swimming Pool Construction Best Practices
  20. Commercial Splash Pad Planning for Municipalities & Resorts
- **Month 5 (Pool Technology & Energy Efficiency):**
  21. Pool Automation: Smart Features Every Modern Pool Should Have
  22. Energy-Efficient Swimming Pool Pumps, Heaters & Hydraulics
  23. Saltwater vs. Traditional Chlorine & UV/Ozone Pool Sanitization
  24. Modern Underwater LED & Landscape Lighting Design for Pools
  25. Heating Your Pool in Tennessee: Gas Heaters vs. Heat Pumps
- **Month 6 (Remodeling, Longevity & Local Spotlights):**
  26. When to Resurface vs. Completely Remodel an Aging Concrete Pool
  27. Pebble, Quartz & Plaster Pool Interior Finishes Compared
  28. Designing a Custom Pool for Historic & Urban Nashville Lots (Belle Meade & Green Hills)
  29. Custom Estate Pools on Acreage Lots in Franklin & Leiper's Fork
  30. Seasonal Pool Care & Freeze Protection for Middle Tennessee Homeowners

---

## Deliverable 13, 14 & 15: Core Web Vitals, CRO, Analytics & 30/60/90-Day Roadmap

### Core Web Vitals Improvements Implemented
- Stripped `unoptimized` from all `<Image>` components across the project so Vercel Edge Image Optimizer delivers AVIF/WebP automatically.
- Added responsive `sizes=` to all 64 `<Image fill>` tags so mobile devices download appropriately sized assets instead of `100vw` desktop banners.
- Removed `priority` from below-the-fold images (`Footer.tsx`, `WhyUsSection.tsx`) so the primary Hero LCP banner gets uninterrupted preload priority.
- Configured `images.minimumCacheTTL: 2592000` (30 days) and immutable `/assets/:path*` caching headers.

### Conversion Rate Optimization & Analytics Status
- **Installed & Active:** `@vercel/analytics/next` (`<Analytics />`), Google Search Console verification meta tag (`Auu241hl33WysD9GSyHtq1Yg_dpQ00FRE7UlQqH9e98`), honeypot spam protection + validation + privacy notices on all 3 forms, and event hooks (`click_to_call`, `click_email`, `generate_lead`) ready for `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_CLARITY_ID`.
- **Analytics Access Required from Owner:** Connect Google Search Console (`https://www.poolsbyelio.net/`), Bing Webmaster Tools, GA4/GTM Measurement ID in Vercel Environment Variables, and Google Business Profile Insights to track real impressions, clicks, rankings, and conversion rate.

### 30 / 60 / 90-Day Action Plan
- **Days 1–30:** Deploy this commit to Vercel; verify `https://www.poolsbyelio.net/` in Google Search Console & Bing Webmaster Tools; submit `https://www.poolsbyelio.net/sitemap.xml`; add GA4/GTM ID in Vercel env vars; claim/optimize Houzz Pro, Bing Places, Apple Business Connect, and GBP.
- **Days 31–60:** Upload 3–5 owner-approved residential project case studies with original photos (Nashville, Franklin, Brentwood) and replace illustrative commercial images where permitted; join PHTA / HBAMT and request Pentair/Hayward/Jandy dealer listings; publish Month 2–3 content guides.
- **Days 61–90:** Review first 60 days of GSC query/impression data and GA4 lead attribution (`generate_lead` & `click_to_call`); expand winning service/local pages based on actual search queries; pitch 2 local Nashville home/design editorial features.
