import type { ContentPageData } from "./types";
import { pick } from "./links";
import { ALT } from "./images";

const HOME = { name: "Home", path: "/" };

const localCta = {
  primaryLabel: "Request a Consultation",
  primaryHref: "/quote",
};

export const localPages: ContentPageData[] = [
  {
    slug: "pool-builders-nashville-tn",
    path: "/pool-builders-nashville-tn",
    kind: "local",
    metaTitle: "Pool Builders in Nashville, TN",
    metaDescription:
      "Family-owned custom pool builder based in Nashville, TN. Residential gunite pools and outdoor living, plus commercial aquatics for hospitality venues.",
    keywords: [
      "pool builders Nashville TN",
      "custom inground pools Nashville TN",
      "swimming pool contractors Nashville",
    ],
    eyebrow: "Nashville, Tennessee",
    h1: "Custom Pool Builders in Nashville, Tennessee",
    intro:
      "Pools By Elio is based at 412 Ezell Pike in Nashville. We design and build custom pools, spas and outdoor living spaces for Nashville homeowners, and commercial pools and pool bars for hospitality venues in the city.",
    heroImage: { src: "/assets/banner1.png", alt: ALT.nightPool },
    breadcrumbs: [HOME, { name: "Nashville", path: "/pool-builders-nashville-tn" }],
    keyFacts: [
      { label: "Headquarters", value: "412 Ezell Pike, Nashville, TN 37217" },
      { label: "Phone", value: "(615) 568-3154" },
      { label: "Hours", value: "Mon–Fri 8:00 AM–6:00 PM; Saturday and evenings by appointment" },
      { label: "Custom gunite pools start at", value: "$140,000+" },
    ],
    sections: [
      {
        id: "homes",
        heading: "Pools for Nashville homes",
        paragraphs: [
          "We build for homeowners across Nashville, including Belle Meade, Green Hills, Forest Hills and Oak Hill. Properties in these neighborhoods vary a great deal, from established lots with mature trees to larger estates, so each design starts with the site and the way your family uses the yard.",
        ],
        bullets: [
          "Custom gunite swimming pools and spas",
          "Waterfalls, grottos and other water features",
          "Pool houses, outdoor kitchens, swim-up bars and fire features",
          "Pool automation and equipment upgrades",
          "Remodeling, resurfacing and repair of existing pools",
        ],
      },
      {
        id: "established",
        heading: "Building in an established city",
        paragraphs: [
          "In older Nashville neighborhoods, the practical questions often come first: how equipment will reach the backyard, how to protect mature trees, where utilities run, and what setbacks and neighborhood covenants apply. Permit and zoning processes are handled at the Metro Nashville and Davidson County level, and requirements depend on your property. During your consultation we talk through which approvals are likely to apply so they are part of the plan from the start.",
        ],
      },
      {
        id: "commercial",
        heading: "Commercial and hospitality work in Nashville",
        paragraphs: [
          "Our Nashville work is not only residential. We built the lazy river at Sound Waves inside Gaylord Opryland Resort and have built pools, swim-up bars and water features for hospitality venues in downtown Nashville. See our projects page for what we can document.",
        ],
      },
      {
        id: "visit",
        heading: "Visit or call",
        paragraphs: [
          "You can reach us at (615) 568-3154 or eliocustompools@live.com, or request a consultation online. We are at 412 Ezell Pike, Nashville, TN 37217.",
        ],
      },
    ],
    faqs: [
      { q: "Where is Pools By Elio located?", a: "Our headquarters is at 412 Ezell Pike, Nashville, TN 37217." },
      { q: "Do you build pools in Belle Meade and Green Hills?", a: "Yes. Belle Meade, Green Hills, Forest Hills and Oak Hill are all part of our service area." },
      { q: "Do you build commercial pools in downtown Nashville?", a: "Yes. We have built pools, swim-up bars and water features for hospitality venues in downtown Nashville, as well as the lazy river at Sound Waves inside Gaylord Opryland Resort." },
      { q: "What does a custom pool cost in Nashville?", a: "Our custom gunite pools start at $140,000+. The final figure depends on size, site conditions, features and materials, and is confirmed in a written proposal." },
      { q: "How do I get started?", a: "Call (615) 568-3154 or request a consultation. We visit the property, discuss your goals and walk you through the process." },
    ],
    related: pick("pools", "backyard", "commercial", "projects", "franklin", "brentwood"),
    cta: {
      heading: "Start your Nashville pool project",
      body: "Call (615) 568-3154 or request a consultation. We will visit the property and talk through your goals.",
      ...localCta,
    },
    serviceSchema: {
      name: "Custom Pool Construction in Nashville, TN",
      description:
        "Custom gunite pool, spa and outdoor living construction, plus commercial aquatic work, in Nashville, Tennessee.",
    },
    sitemapPriority: 0.9,
  },

  {
    slug: "pool-builders-franklin-tn",
    path: "/pool-builders-franklin-tn",
    kind: "local",
    metaTitle: "Pool Builders in Franklin, TN",
    metaDescription:
      "Custom pool builder serving Franklin and Williamson County, TN. Gunite pools designed around larger lots, sloped terrain and Middle Tennessee conditions.",
    keywords: [
      "pool builders Franklin TN",
      "gunite pool builders Franklin Tennessee",
      "custom pools Williamson County TN",
    ],
    eyebrow: "Franklin & Williamson County",
    h1: "Custom Pool Builders in Franklin, Tennessee",
    intro:
      "We build custom pools for Franklin and Williamson County properties from our Nashville base. Larger lots and rolling terrain give these properties room for designs that work with the land.",
    heroImage: { src: "/assets/banner2.png", alt: ALT.lakePool },
    breadcrumbs: [HOME, { name: "Franklin", path: "/pool-builders-franklin-tn" }],
    keyFacts: [
      { label: "County", value: "Williamson County (Franklin is the county seat)" },
      { label: "From our Nashville headquarters", value: "About 20 minutes" },
      { label: "Nearby communities served", value: "Leiper's Fork, Thompson's Station, Spring Hill, Nolensville" },
      { label: "Custom gunite pools start at", value: "$140,000+" },
    ],
    sections: [
      {
        id: "properties",
        heading: "Pools for Franklin-area properties",
        paragraphs: [
          "Many Franklin-area properties sit on larger lots with gentle slopes, wooded edges and open views. That suits designs that make use of the land: terraced layouts, vanishing edges, natural stone and water features, and outdoor living areas that extend from the house.",
        ],
        bullets: [
          "Custom gunite pools and spillover spas",
          "Vanishing-edge designs where the terrain and views support them",
          "Natural stone waterfalls and grottos",
          "Pool houses, kitchens and fire features for entertaining",
        ],
      },
      {
        id: "site",
        heading: "Site conditions to expect",
        paragraphs: [
          "Limestone bedrock and clay soils are common in Williamson County, and slopes need to be handled with attention to drainage and retaining. These factors can affect excavation and cost, so we review the property in person before the design and proposal are finalized.",
        ],
      },
      {
        id: "approvals",
        heading: "Approvals and neighborhood rules",
        paragraphs: [
          "Whether a property falls inside the City of Franklin or in unincorporated Williamson County affects who reviews the work, and newer communities often have their own HOA architectural review. We discuss the approvals that apply to your parcel during the consultation.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby communities we serve",
        paragraphs: [
          "In addition to Franklin, we serve Leiper's Fork, Thompson's Station, Spring Hill and Nolensville, along with Brentwood and the rest of Middle Tennessee.",
        ],
      },
    ],
    faqs: [
      { q: "Do you build pools in Franklin, TN?", a: "Yes. Franklin and Williamson County are part of our regular service area." },
      { q: "How far is Franklin from your headquarters?", a: "About 20 minutes from our Nashville headquarters, according to our service-area guide." },
      { q: "Can you build a pool on a sloped Franklin lot?", a: "Often, yes. Slopes call for careful drainage, retaining and structural design, and each property is assessed on site." },
      { q: "Do you also serve Leiper's Fork, Thompson's Station and Spring Hill?", a: "Yes. These communities are within our service area." },
    ],
    related: pick("gunite", "infinity", "waterFeatures", "nashville", "brentwood", "areas"),
    cta: {
      heading: "Plan a pool for your Franklin property",
      body: "Call (615) 568-3154 or request a consultation, and we will visit the property to talk through the design.",
      ...localCta,
    },
    serviceSchema: {
      name: "Custom Pool Construction in Franklin, TN",
      description:
        "Custom gunite pool, spa and outdoor living construction for Franklin and Williamson County, Tennessee.",
    },
    sitemapPriority: 0.85,
  },

  {
    slug: "pool-builders-brentwood-tn",
    path: "/pool-builders-brentwood-tn",
    kind: "local",
    metaTitle: "Pool Builders in Brentwood, TN",
    metaDescription:
      "Custom pools and outdoor living for Brentwood, TN homes. Gunite pools, pool houses, kitchens and fire features built by a family-owned Nashville crew.",
    keywords: [
      "pool builders Brentwood TN",
      "custom pools Brentwood Tennessee",
      "luxury outdoor living Brentwood TN",
    ],
    eyebrow: "Brentwood, Tennessee",
    h1: "Custom Pool Builders in Brentwood, Tennessee",
    intro:
      "Brentwood homeowners often want the pool and the backyard designed as one space. We build custom gunite pools together with pool houses, kitchens, fire features and stonework, so the whole project comes from one crew.",
    heroImage: { src: "/assets/banner1.png", alt: ALT.nightPool },
    breadcrumbs: [HOME, { name: "Brentwood", path: "/pool-builders-brentwood-tn" }],
    keyFacts: [
      { label: "County", value: "Williamson County" },
      { label: "From our Nashville headquarters", value: "About 15 minutes" },
      { label: "Nearby communities served", value: "Oak Hill, Forest Hills, Nolensville" },
      { label: "Custom gunite pools start at", value: "$140,000+" },
    ],
    sections: [
      {
        id: "outdoor-living",
        heading: "The pool and the backyard, designed together",
        paragraphs: [
          "Designing the pool and the surrounding spaces at the same time avoids conflicts between structures, utilities and sight lines, and lets the materials and style match throughout. For Brentwood properties, that often means combining a custom pool with outdoor living features.",
        ],
        bullets: [
          "Custom gunite pools and spas",
          "Pool houses and cabanas",
          "Outdoor kitchens, bars and swim-up bars",
          "Fire pits, fireplaces and natural stone work",
          "Waterfalls, fountains and lighting",
        ],
      },
      {
        id: "neighborhoods",
        heading: "Neighborhood review and approvals",
        paragraphs: [
          "Many Brentwood neighborhoods have homeowner associations with architectural review, and the city has its own requirements for work on private property. We talk through the approvals likely to apply to your lot during the consultation, so you know what to expect before the design is finalized.",
        ],
      },
      {
        id: "process",
        heading: "How a Brentwood project runs",
        paragraphs: [
          "We start with an on-site consultation, develop the design with 3D renderings, and then build with our own crew. Jonathan Elio Rodriguez directs the work on site. You can read the full sequence on our process page.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby communities we serve",
        paragraphs: [
          "Alongside Brentwood we serve Oak Hill, Forest Hills and Nolensville, as well as Franklin, Nashville and the rest of Middle Tennessee.",
        ],
      },
    ],
    faqs: [
      { q: "Do you build pools in Brentwood, TN?", a: "Yes. Brentwood is part of our regular service area, about 15 minutes from our Nashville headquarters." },
      { q: "Can you build a pool house or outdoor kitchen along with the pool?", a: "Yes. We build pool houses, kitchens, swim-up bars, fire features and stonework alongside our pools, so the project can come from one crew." },
      { q: "Do I need HOA approval for a pool in Brentwood?", a: "Many Brentwood neighborhoods have HOA architectural review. Whether it applies depends on your neighborhood, and we discuss it during your consultation." },
      { q: "What does a custom pool in Brentwood cost?", a: "Our custom gunite pools start at $140,000+. Outdoor living additions are scoped separately and confirmed in a written proposal." },
    ],
    related: pick("backyard", "pools", "waterFeatures", "process", "nashville", "franklin"),
    cta: {
      heading: "Plan your Brentwood backyard",
      body: "Call (615) 568-3154 or request a consultation. We will look at the property and talk through the whole project.",
      ...localCta,
    },
    serviceSchema: {
      name: "Custom Pool and Outdoor Living Construction in Brentwood, TN",
      description:
        "Custom gunite pools, pool houses, kitchens and outdoor living construction for Brentwood, Tennessee.",
    },
    sitemapPriority: 0.85,
  },
];

