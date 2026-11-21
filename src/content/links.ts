import type { RelatedLink } from "./types";

export const LINKS: Record<string, RelatedLink> = {
  pools: {
    label: "Custom Pools & Spas",
    href: "/pools-and-spas",
    blurb: "Custom inground pools, lap pools, freeform designs and spas, built by our in-house crew.",
  },
  gunite: {
    label: "Gunite Pool Construction",
    href: "/gunite-pool-construction",
    blurb: "How custom gunite pools are built, and what affects cost and schedule.",
  },
  infinity: {
    label: "Infinity Edge Pools",
    href: "/infinity-edge-pools",
    blurb: "How vanishing-edge pools work and what they require from the site and structure.",
  },
  remodel: {
    label: "Pool Remodeling & Repair",
    href: "/pool-remodeling",
    blurb: "Resurfacing, tile and coping, equipment upgrades, added features and repairs.",
  },
  waterFeatures: {
    label: "Water Features",
    href: "/water-features",
    blurb: "Waterfalls, grottos, sheer descents, scuppers and deck jets.",
  },
  technology: {
    label: "Pool Technology",
    href: "/technology",
    blurb: "Smartphone automation, variable-speed pumps and modern sanitation.",
  },
  backyard: {
    label: "Backyard Concepts",
    href: "/backyard-concepts",
    blurb: "Pool houses, swim-up bars, outdoor kitchens, fire pits and fireplaces.",
  },
  fountains: {
    label: "Fountains",
    href: "/fountains",
    blurb: "Residential and commercial fountains for estates, lakes and plazas.",
  },
  waterParks: {
    label: "Commercial Water Parks",
    href: "/water-parks",
    blurb: "Lazy rivers, splash pads, wave pools and resort aquatic attractions.",
  },
  lazyRiver: {
    label: "Lazy River Construction",
    href: "/lazy-river-construction",
    blurb: "What goes into planning and building a lazy river.",
  },
  commercial: {
    label: "Commercial Pool Construction",
    href: "/commercial-pool-construction",
    blurb: "Hotel, resort, club and municipal pools built to commercial requirements.",
  },
  about: {
    label: "About Pools By Elio",
    href: "/about",
    blurb: "Meet co-founders Jonathan and David Elio Rodriguez and our in-house Nashville crew.",
  },
  process: {
    label: "Our Process",
    href: "/process",
    blurb: "From consultation and 3D design to construction and start-up.",
  },
  faq: {
    label: "Pool Construction FAQ",
    href: "/faq",
    blurb: "Straight answers on cost, timing, materials and choosing a builder.",
  },
  projects: {
    label: "Our Projects",
    href: "/projects",
    blurb: "Commercial and residential work, with project details as they are documented.",
  },
  beforeAfter: {
    label: "Before & After Gallery",
    href: "/before-after",
    blurb: "Interactive transformations and project photography.",
  },
  reviews: {
    label: "Customer Reviews",
    href: "/reviews",
    blurb: "What homeowners and estate managers say about working with us.",
  },
  areas: {
    label: "Areas We Serve",
    href: "/areas-we-serve",
    blurb: "Nashville, Franklin, Brentwood and communities across Middle Tennessee.",
  },
  nashville: {
    label: "Pool Builders in Nashville, TN",
    href: "/pool-builders-nashville-tn",
    blurb: "Our home base: residential and commercial pools in Nashville.",
  },
  franklin: {
    label: "Pool Builders in Franklin, TN",
    href: "/pool-builders-franklin-tn",
    blurb: "Custom pools for Franklin and Williamson County properties.",
  },
  brentwood: {
    label: "Pool Builders in Brentwood, TN",
    href: "/pool-builders-brentwood-tn",
    blurb: "Custom pools and outdoor living for Brentwood neighborhoods.",
  },
  quote: {
    label: "Request a Quote",
    href: "/quote",
    blurb: "Tell us about your project and request a consultation.",
  },
  guideGunite: {
    label: "Gunite vs. Fiberglass Pools",
    href: "/resources/gunite-vs-fiberglass-pools",
    blurb: "A plain-language comparison of the main inground pool types.",
  },
  guideCost: {
    label: "Custom Pool Cost in Nashville",
    href: "/resources/custom-pool-cost-nashville",
    blurb: "What drives the price of a custom pool and how to compare proposals.",
  },
  guideTimeline: {
    label: "Pool Construction Timeline",
    href: "/resources/pool-construction-timeline",
    blurb: "The phases of a build, in order, and what can change the schedule.",
  },
  guideContractor: {
    label: "How to Choose a Pool Contractor",
    href: "/resources/how-to-choose-a-pool-contractor-tennessee",
    blurb: "A checklist for vetting a pool builder in Tennessee.",
  },
  resources: {
    label: "Pool Guides & Resources",
    href: "/resources",
    blurb: "Practical guides on gunite pools, cost, timelines and choosing a builder.",
  },
};

export const pick = (...keys: string[]): RelatedLink[] => keys.map((k) => LINKS[k]);

