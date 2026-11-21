import type { ContentPageData } from "./types";
import { pick } from "./links";

const HOME = { name: "Home", path: "/" };
const SERVICES = { name: "Services", path: "/services" };

const STEEL_POOL_ALT =
  "Crew members finishing the interior surface of a freeform pool shell with built-in steps";
const NIGHT_POOL_ALT =
  "Backyard pool at dusk with a waterfall, in-water lounge chairs, fire bowls and a brick pool house";
const LAKE_POOL_ALT =
  "Rectangular backyard pool beside a lake with a pergola, deck water jets and swim-up stools";
const RESORT_POOL_ALT =
  "Resort-style swimming pool with lounge chairs, umbrellas and a garden pergola";
const SLIDE_ALT =
  "Water park slides and tube riders splashing into a landing pool";

export const servicePages: ContentPageData[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "gunite-pool-construction",
    path: "/gunite-pool-construction",
    kind: "service",
    metaTitle: "Gunite Pool Construction in Nashville, TN",
    metaDescription:
      "Custom gunite pool construction in Nashville and Middle Tennessee. See how gunite pools are built, what affects cost, and how our in-house crew works.",
    keywords: [
      "gunite pool builders Nashville TN",
      "gunite pool construction Tennessee",
      "custom gunite pools Middle Tennessee",
    ],
    eyebrow: "Custom Gunite Pools",
    h1: "Custom Gunite Pool Construction in Nashville, Tennessee",
    intro:
      "A gunite pool is a reinforced-concrete shell shaped on site to fit your property and your design. Pools By Elio is a family-owned Nashville builder that designs and constructs custom gunite pools with its own crew, from excavation through finishing.",
    heroImage: { src: "/assets/gallery/20.webp", alt: STEEL_POOL_ALT },
    breadcrumbs: [HOME, SERVICES, { name: "Gunite Pool Construction", path: "/gunite-pool-construction" }],
    keyFacts: [
      { label: "Custom gunite pools start at", value: "$140,000+" },
      { label: "Crew", value: "In-house; no subcontractors" },
      { label: "Experience", value: "25+ years" },
      { label: "Serving", value: "Nashville, Franklin, Brentwood & Middle Tennessee" },
    ],
    sections: [
      {
        id: "what-is-gunite",
        heading: "What is a gunite pool?",
        paragraphs: [
          "Gunite is a mix of cement and sand that is sprayed pneumatically over a grid of steel reinforcing bar. The result is a single, continuous structural shell rather than a prefabricated unit dropped into the ground. In everyday use, builders often use the words gunite and shotcrete interchangeably; strictly, gunite is applied as a dry mix that is hydrated at the nozzle, while shotcrete is applied as a wet mix.",
          "Because the shell is formed on site, almost nothing about the pool is fixed in advance. Shape, depth, steps, benches, tanning ledges, spas and swim-up bars are all shaped to the design rather than chosen from a catalog.",
        ],
      },
      {
        id: "how-built",
        heading: "How a custom gunite pool is built",
        paragraphs: [
          "Every project differs, but the sequence is consistent. Timing for each stage depends on the design, the site and the weather, and your written proposal confirms the schedule for your project.",
        ],
        steps: [
          { title: "Design and layout", body: "The pool is drawn to the property, with 3D renderings so you can review the design before ground is broken. The layout is marked on site." },
          { title: "Excavation", body: "The basin is excavated to the design depth. Access, soil and rock conditions on the property influence how this stage goes." },
          { title: "Steel reinforcement and plumbing", body: "A steel reinforcement grid is tied to the shape of the pool, and the main plumbing, drains and electrical rough-ins are installed." },
          { title: "Gunite application", body: "The gunite shell is sprayed over the steel and hand-finished to form the walls, floor, steps and benches. It is then allowed to cure." },
          { title: "Tile, coping and decking", body: "Waterline tile, coping stone and surrounding decking or hardscape are installed, along with any water features." },
          { title: "Interior finish and start-up", body: "The interior surface is applied, the pool is filled, equipment is started, and the water chemistry is balanced before you swim." },
        ],
      },
      {
        id: "why-gunite",
        heading: "Why choose gunite for a custom pool",
        bullets: [
          "Design freedom: freeform, geometric, lap and vanishing-edge shapes are all possible.",
          "Integrated features: spas, tanning ledges, steps, benches and swim-up bars can be built into the shell.",
          "Natural stone and water features: the shell is a solid base for waterfalls, grottos and stone coping.",
          "A wide range of finishes: interior surfaces and waterline tile can be chosen to suit the design, and the interior can be resurfaced later.",
        ],
      },
      {
        id: "middle-tennessee",
        heading: "Building on Middle Tennessee sites",
        paragraphs: [
          "Limestone bedrock and clay soils are common across Middle Tennessee, and many properties around Nashville, Franklin and Brentwood are sloped or wooded. Rock can affect excavation time and cost, and slopes call for attention to drainage and retaining. We evaluate these conditions during the on-site consultation so they are reflected in the design and the proposal rather than discovered mid-project.",
        ],
      },
      {
        id: "cost",
        heading: "What affects the cost of a gunite pool",
        paragraphs: [
          "Our custom gunite pools start at $140,000+. Where a project lands above that depends on a handful of factors:",
        ],
        bullets: [
          "Pool size, shape and depth, and whether a spa is attached",
          "Excavation conditions, access to the yard and any rock removal",
          "Water features, lighting and automation",
          "Tile, coping, interior finish and decking materials",
          "Outdoor living additions such as a pool house, kitchen or fire feature",
          "Permits and HOA or neighborhood review requirements",
        ],
        callout: {
          title: "Want a number for your property?",
          body: "A consultation lets us look at the site and your goals. Pricing is confirmed in a written proposal after that visit.",
        },
      },
      {
        id: "in-house",
        heading: "Why an in-house crew matters",
        paragraphs: [
          "Pools By Elio performs the work with its own full-time crew rather than handing stages to subcontractors, and co-founder Jonathan Elio Rodriguez directs the work on site. For a structure as demanding as a gunite pool, having one accountable team across excavation, steel, plumbing, gunite and finishing makes the build easier to coordinate and the result easier to stand behind.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between gunite and shotcrete?",
        a: "Both are concrete sprayed at high velocity onto steel reinforcement. Gunite is a dry mix that is hydrated at the nozzle; shotcrete is a wet mix. Builders and homeowners often use the terms interchangeably when talking about pool shells.",
      },
      {
        q: "How long does a gunite shell need to cure?",
        a: "Concrete keeps gaining strength for weeks after it is placed, so builders sequence tile, coping and interior finishing around a curing period. The exact schedule varies with the design and conditions, and we confirm it in your proposal.",
      },
      {
        q: "Can a gunite pool be built on a sloped lot?",
        a: "Often, yes. Slopes call for careful drainage, retaining and structural design, and each property needs to be assessed on site.",
      },
      {
        q: "How much does a custom gunite pool cost in Nashville?",
        a: "Our custom gunite pools start at $140,000+. The final figure depends on size, site conditions, features, materials and outdoor living additions, and is confirmed in a written proposal.",
      },
      {
        q: "Do you build gunite pools in Franklin and Brentwood?",
        a: "Yes. We serve Franklin, Brentwood, Nashville and communities across Middle Tennessee.",
      },
    ],
    related: pick("pools", "infinity", "remodel", "guideGunite", "process", "nashville"),
    cta: {
      heading: "Talk through a gunite pool for your property",
      body: "Call (615) 568-3154 or request a consultation. We will look at the site, discuss your goals and walk you through the process.",
      primaryLabel: "Request a Consultation",
      primaryHref: "/quote",
    },
    serviceSchema: {
      name: "Custom Gunite Pool Construction",
      description:
        "Design and construction of custom gunite swimming pools in Nashville and Middle Tennessee by a family-owned, in-house crew.",
    },
    sitemapPriority: 0.9,
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "infinity-edge-pools",
    path: "/infinity-edge-pools",
    kind: "service",
    metaTitle: "Infinity Edge Pools in Nashville, TN",
    metaDescription:
      "How infinity edge (vanishing edge) pools work, where they suit a property, and what the design requires. Custom builds in Nashville and Middle Tennessee.",
    keywords: [
      "infinity edge pool builder Nashville",
      "vanishing edge pool Tennessee",
      "what is an infinity edge pool",
    ],
    eyebrow: "Vanishing Edge Pools",
    h1: "Infinity Edge (Vanishing Edge) Pools in Nashville, TN",
    intro:
      "An infinity edge pool is designed so the water surface appears to run out to the horizon. It is one of the most striking pool designs and one of the most demanding to engineer. Here is how it works and what it asks of the site and the structure.",
    heroImage: { src: "/assets/banner2.png", alt: LAKE_POOL_ALT },
    breadcrumbs: [HOME, SERVICES, { name: "Infinity Edge Pools", path: "/infinity-edge-pools" }],
    keyFacts: [
      { label: "Also called", value: "Vanishing edge, negative edge" },
      { label: "Best suited to", value: "Sloped lots and open views" },
      { label: "Construction", value: "Custom gunite" },
    ],
    sections: [
      {
        id: "what-is",
        heading: "What is an infinity edge pool?",
        paragraphs: [
          "In an infinity edge pool, one or more sides of the pool are built so water flows over the top of the wall and out of sight. From the right angle, the water appears to continue into the landscape beyond. The terms vanishing edge and negative edge describe the same idea.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How the design works",
        paragraphs: [
          "The finished edge wall is built slightly lower than the water level, so water spills over it in a thin, even sheet. A catch basin, or trough, collects the overflow on the outside of the wall. Pumps return that water to the pool, so the system recirculates continuously.",
          "That recirculating loop is what separates this design from a conventional pool: the edge, the catch basin and the return plumbing all have to be built precisely, because a small error in height or level shows up as an uneven sheet of water.",
        ],
      },
      {
        id: "where-it-works",
        heading: "Where a vanishing edge makes sense",
        bullets: [
          "Sloped or terraced lots, where the drop beyond the edge makes the effect most dramatic",
          "Properties with a view of a lake, valley, tree line or skyline",
          "Designs that call for a clean, modern look with a spillway or wall on one side",
        ],
        paragraphs: [
          "Level lots can still carry the effect, usually by raising part of the pool above grade with a visible wall. We assess the property during the site visit and tell you plainly whether the design suits it.",
        ],
      },
      {
        id: "considerations",
        heading: "What to plan for",
        bullets: [
          "Structure: the edge wall and catch basin add engineering and construction to the shell.",
          "Plumbing and equipment: the return system and water-level control need careful design.",
          "Sight lines: the view from the pool and from the house toward the pool should be planned together.",
          "Finishes: stone or tile on the visible edge face are part of the design and the budget.",
          "Maintenance: the catch basin and water level need regular attention, so ask how the system will be maintained.",
        ],
        callout: {
          title: "Cost",
          body: "Vanishing-edge designs generally cost more than a comparable conventional pool because of the added structure and plumbing. Your proposal itemizes this for your property.",
        },
      },
    ],
    faqs: [
      {
        q: "Does an infinity pool need a sloped yard?",
        a: "A slope makes the effect easiest to achieve, but it is not the only option. On a level lot, part of the pool can be raised so the vanishing edge is visible. A site visit is the way to tell what suits your property.",
      },
      {
        q: "Are infinity pools harder to maintain?",
        a: "They add a catch basin and a water-level system that need regular attention, in addition to the usual pool care. A good design makes those parts accessible and straightforward to service.",
      },
      {
        q: "Can an infinity edge be added to an existing pool?",
        a: "Usually not as a simple retrofit, because the edge wall, catch basin and plumbing are part of the structure. It generally means a new build or a major remodel, and it needs to be assessed case by case.",
      },
      {
        q: "Why does an infinity edge pool cost more?",
        a: "The vanishing edge needs extra structural work, a catch basin and a return system, and the visible edge is usually finished in stone or tile. We itemize these in your proposal.",
      },
    ],
    related: pick("gunite", "pools", "waterFeatures", "guideCost", "process", "franklin"),
    cta: {
      heading: "See whether a vanishing edge suits your property",
      body: "We will review your lot, views and goals during an on-site consultation and give you an honest view of what is possible.",
      primaryLabel: "Request a Consultation",
      primaryHref: "/quote",
    },
    serviceSchema: {
      name: "Infinity Edge Pool Design and Construction",
      description:
        "Custom vanishing-edge (infinity edge) swimming pool design and construction in Nashville and Middle Tennessee.",
    },
    sitemapPriority: 0.85,
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "pool-remodeling",
    path: "/pool-remodeling",
    kind: "service",
    metaTitle: "Pool Remodeling & Repair in Nashville, TN",
    metaDescription:
      "Pool remodeling, resurfacing and repair in Nashville and Middle Tennessee: finishes, tile and coping, equipment upgrades and added features.",
    keywords: [
      "pool remodeling Nashville TN",
      "pool resurfacing Nashville",
      "pool renovation Middle Tennessee",
    ],
    eyebrow: "Renovation & Repair",
    h1: "Pool Remodeling, Resurfacing & Repair in Nashville, TN",
    intro:
      "An older pool can often be brought back without starting over. Pools By Elio remodels and repairs pools across Middle Tennessee, from resurfacing and tile to equipment upgrades, added features and structural repairs.",
    heroImage: { src: "/assets/gallery/20.webp", alt: STEEL_POOL_ALT },
    breadcrumbs: [HOME, SERVICES, { name: "Pool Remodeling", path: "/pool-remodeling" }],
    keyFacts: [
      { label: "Services", value: "Remodeling, resurfacing, repairs" },
      { label: "Crew", value: "In-house" },
      { label: "Gallery", value: "See transformations in our Before & After page" },
    ],
    sections: [
      {
        id: "signs",
        heading: "Signs your pool is ready for work",
        bullets: [
          "A rough, stained or worn interior surface",
          "Loose, cracked or faded waterline tile, or damaged coping",
          "Unexplained water loss or visible cracks",
          "Old, noisy or inefficient equipment",
          "A layout that no longer suits how your family uses the yard",
        ],
      },
      {
        id: "options",
        heading: "What a remodel can include",
        bullets: [
          "Resurfacing: a new interior finish to renew the surface.",
          "Tile and coping: new waterline tile and stone coping to refresh the look and fix worn edges.",
          "Equipment: pumps, heaters, sanitation and automation upgrades, including smartphone control.",
          "Added features: a spa, waterfall, tanning ledge, lighting or other additions, depending on the existing structure.",
          "Structural and leak repair: assessing and repairing cracks or leaks in the shell and plumbing.",
          "Surrounding space: new decking and outdoor living areas to match the updated pool.",
        ],
      },
      {
        id: "assessment",
        heading: "Why we assess the pool first",
        paragraphs: [
          "Cosmetic work only lasts if the structure underneath is sound. We start by looking at the condition of the shell, plumbing and equipment, then recommend the work that makes sense for the pool in front of us. In some cases that is resurfacing; in others it is repair first, or a larger redesign.",
        ],
      },
      {
        id: "what-to-expect",
        heading: "What to expect",
        steps: [
          { title: "Consultation and assessment", body: "We visit the property, inspect the pool and talk through what you want to change." },
          { title: "Scope and design", body: "We outline the recommended work, with renderings where the layout is changing." },
          { title: "Construction", body: "Our crew carries out the work, protecting the surrounding property as it goes." },
          { title: "Start-up and orientation", body: "We refill, balance the water and walk you through the equipment." },
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know whether to resurface or remodel?",
        a: "It depends on the pool's structural condition and what bothers you about it. A surface that is simply worn may only need resurfacing; a pool with leaks, cracks or an outdated layout may need repair or a larger remodel. We assess the pool before recommending anything.",
      },
      {
        q: "Can you add a spa or waterfall to an existing pool?",
        a: "Often it is possible, depending on the existing structure and the site. We assess what the shell and surrounding area can support before proposing it.",
      },
      {
        q: "Do you repair cracks and leaks?",
        a: "Yes. We assess and repair structural and plumbing issues in pools. Call (615) 568-3154 to describe what you are seeing and arrange an inspection.",
      },
      {
        q: "Can I see examples of finished work?",
        a: "Yes. Our Before & After gallery shows transformations and project photography, and our reviews page includes comments from homeowners about remodeling and repair work.",
      },
    ],
    related: pick("beforeAfter", "reviews", "technology", "gunite", "guideContractor", "brentwood"),
    cta: {
      heading: "Have us take a look at your pool",
      body: "Describe what you are seeing and we will arrange an on-site assessment and talk through the options.",
      primaryLabel: "Request an Assessment",
      primaryHref: "/contact",
    },
    serviceSchema: {
      name: "Pool Remodeling, Resurfacing and Repair",
      description:
        "Pool remodeling, resurfacing, equipment upgrades and repair for residential pools in Nashville and Middle Tennessee.",
    },
    sitemapPriority: 0.85,
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "lazy-river-construction",
    path: "/lazy-river-construction",
    kind: "service",
    metaTitle: "Lazy River Design & Construction in Tennessee",
    metaDescription:
      "What goes into planning and building a lazy river for a resort, hotel or community. Pools By Elio built the lazy river at Sound Waves, Gaylord Opryland.",
    keywords: [
      "lazy river construction contractors",
      "lazy river builders Tennessee",
      "hotel resort lazy river construction",
    ],
    eyebrow: "Commercial Aquatics",
    h1: "Lazy River Design & Construction in Tennessee",
    intro:
      "A lazy river looks simple from the tube: a gentle, continuous current. Behind it is hydraulic design, structure, safety and guest flow that all have to work together. Pools By Elio built the lazy river at Sound Waves inside Gaylord Opryland Resort in Nashville.",
    heroImage: { src: "/assets/service4.png", alt: SLIDE_ALT },
    breadcrumbs: [HOME, SERVICES, { name: "Lazy River Construction", path: "/lazy-river-construction" }],
    keyFacts: [
      { label: "Verified project", value: "Sound Waves, Gaylord Opryland Resort" },
      { label: "Client types", value: "Resorts, hotels, clubs, municipal & community" },
      { label: "Base", value: "Nashville, Tennessee" },
    ],
    sections: [
      {
        id: "what-is",
        heading: "What a lazy river is",
        paragraphs: [
          "A lazy river is a continuous channel of shallow water that guests float along, usually on tubes, in a loop. A current moves guests around the channel, and the loop passes entries, exits and often scenery such as rockwork, landscaping or bridges. It is a feature found at resorts, hotels, water parks and larger community facilities.",
        ],
      },
      {
        id: "elements",
        heading: "The main elements to design",
        bullets: [
          "Channel layout: length, width, depth and curves that keep guests moving without bunching up.",
          "Current generation: pumps and jets that create a steady flow around the loop.",
          "Entry and exit points: safe, accessible places to get in and out, with stairs, ramps or zero-depth entries as the design calls for.",
          "Landscaping and themed elements: rockwork, planting, bridges and shade that give the ride its character.",
          "Tube storage and guest circulation: where tubes are kept and how guests reach the ride.",
          "Water treatment: filtration and sanitation sized for the bather load.",
          "Safety and accessibility: sight lines for lifeguards, signage, surfaces and accessible entry.",
        ],
      },
      {
        id: "planning",
        heading: "How a lazy river project is planned",
        steps: [
          { title: "Goals and feasibility", body: "Define the guest capacity, site, budget and how the ride fits with the rest of the facility." },
          { title: "Concept and engineering", body: "Develop the channel geometry, hydraulics, structure and water treatment with the design team." },
          { title: "Approvals", body: "Commercial and public pools are generally regulated by state and local health departments, and plans are typically reviewed before construction. Your design team confirms the requirements for your location." },
          { title: "Construction", body: "Excavation, structure, plumbing, finishes, landscaping and equipment are built and coordinated." },
          { title: "Commissioning", body: "Systems are started and tested, and operators are oriented before guests arrive." },
        ],
      },
      {
        id: "our-experience",
        heading: "Our experience",
        paragraphs: [
          "Pools By Elio built the lazy river at Sound Waves inside Gaylord Opryland Resort, one of Tennessee's best-known water attractions. Read what we can document about that work on our project page, and see our commercial water park page for the other attractions we build.",
        ],
      },
      {
        id: "questions",
        heading: "Questions to ask any lazy river contractor",
        bullets: [
          "Which comparable lazy rivers has the company built, and can you speak with someone about them?",
          "Who will be on site, and does the company use its own crew or subcontractors?",
          "How will the current be designed and tested?",
          "Who is responsible for coordinating approvals with the health department?",
          "What does commissioning and operator training include?",
        ],
      },
    ],
    faqs: [
      {
        q: "What does it cost to build a lazy river?",
        a: "There is no single figure. Cost depends on the length and width of the channel, the strength of the current, themed elements, water treatment and the site. We scope a project after learning your goals and visiting the property.",
      },
      {
        q: "Who can build a lazy river?",
        a: "Resorts, hotels, clubs and community or municipal facilities commonly build them. Contact us to discuss your facility.",
      },
      {
        q: "What approvals does a lazy river need?",
        a: "Commercial and public pools are generally regulated by state and local health departments, and plans are typically reviewed before work begins. Requirements vary by location, so your design team should confirm them early.",
      },
      {
        q: "Which lazy river has Pools By Elio built?",
        a: "We built the lazy river at Sound Waves inside Gaylord Opryland Resort in Nashville.",
      },
    ],
    related: pick("projects", "waterParks", "commercial", "process", "nashville", "quote"),
    cta: {
      heading: "Planning a lazy river or aquatic attraction?",
      body: "Tell us about the facility, the site and your goals. We will talk through scope, approach and next steps.",
      primaryLabel: "Discuss a Commercial Project",
      primaryHref: "/contact",
    },
    serviceSchema: {
      name: "Lazy River Design and Construction",
      description:
        "Design and construction of lazy rivers for resorts, hotels and community facilities in Tennessee.",
    },
    sitemapPriority: 0.85,
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "commercial-pool-construction",
    path: "/commercial-pool-construction",
    kind: "service",
    metaTitle: "Commercial Pool Construction in Nashville, TN",
    metaDescription:
      "Commercial swimming pool construction for hotels, resorts, clubs and municipal facilities in Tennessee. In-house crew and Nashville hospitality experience.",
    keywords: [
      "commercial swimming pool contractors Tennessee",
      "commercial pool construction Nashville",
      "hotel resort pool construction",
    ],
    eyebrow: "Commercial Aquatics",
    h1: "Commercial Swimming Pool Construction in Tennessee",
    intro:
      "Commercial pools carry more guests, more rules and more wear than a backyard pool. Pools By Elio builds hotel and resort pools, commercial pool bars, club pools and larger aquatic facilities, with the same in-house crew that builds our residential work.",
    heroImage: { src: "/assets/banner3.png", alt: RESORT_POOL_ALT },
    breadcrumbs: [HOME, SERVICES, { name: "Commercial Pool Construction", path: "/commercial-pool-construction" }],
    keyFacts: [
      { label: "Project types", value: "Hotels, resorts, clubs, municipal aquatics" },
      { label: "Verified projects", value: "Sound Waves lazy river; downtown Nashville pool bars" },
      { label: "Crew", value: "In-house" },
    ],
    sections: [
      {
        id: "who",
        heading: "Who we build for",
        bullets: [
          "Hotels and resorts",
          "Country clubs and private clubs",
          "Hospitality venues, including pool bars and entertainment spaces",
          "Municipal and community aquatic facilities",
          "Larger attractions such as lazy rivers and splash pads",
        ],
      },
      {
        id: "different",
        heading: "What makes a commercial pool different",
        paragraphs: [
          "A commercial pool is built to a different standard than a residential one. Public and commercial pools are generally regulated by state and local health departments, with plan review before construction. Accessibility requirements under the ADA apply to many facilities, and federal drain-safety rules for public pools shape how suction outlets are designed. Higher bather loads call for larger filtration and water-treatment systems, and finishes and equipment are chosen for constant use.",
          "These requirements vary by location and facility type, so the design team should confirm them early and build the schedule around the approvals.",
        ],
      },
      {
        id: "approach",
        heading: "How we approach commercial projects",
        bullets: [
          "One accountable crew handles excavation, structure, plumbing and finishing rather than passing stages to subcontractors.",
          "We start with the facility's goals, guest capacity, schedule and budget.",
          "We coordinate with your design team on the plans and approvals.",
          "We commission the systems and orient the people who will operate them.",
        ],
      },
      {
        id: "experience",
        heading: "Commercial experience",
        paragraphs: [
          "Our commercial work includes the lazy river at Sound Waves inside Gaylord Opryland Resort and pools, swim-up bars and water features for hospitality venues in downtown Nashville. See our projects page for what we can document, and our water park page for the attractions we build.",
        ],
      },
      {
        id: "prepare",
        heading: "What to have ready when you call",
        bullets: [
          "Facility type and location",
          "Expected bather load and how the pool will be used",
          "Target schedule and budget range",
          "Whether an architect or general contractor is already involved",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with architects and general contractors?",
        a: "Please call us to discuss how we would work with your project team. Commercial projects typically involve coordination between the pool builder, the architect and the general contractor.",
      },
      {
        q: "Where do you build commercial pools?",
        a: "Our home base is Nashville and our residential work centers on Middle Tennessee. Commercial work can reach further across Tennessee, so contact us about your location.",
      },
      {
        q: "What approvals does a commercial pool need?",
        a: "Commercial and public pools are generally regulated by state and local health departments, and plans are typically reviewed before construction. Requirements vary, and your design team confirms them for your project.",
      },
      {
        q: "Do you build more than swimming pools for commercial clients?",
        a: "Yes. Our commercial work includes lazy rivers, pool bars and water features, and we also build fountains and splash areas. See our water parks page for more.",
      },
    ],
    related: pick("lazyRiver", "waterParks", "projects", "process", "nashville", "quote"),
    cta: {
      heading: "Planning a hotel, resort or club pool?",
      body: "Tell us about the facility and we will talk through scope, approach and next steps.",
      primaryLabel: "Discuss a Commercial Project",
      primaryHref: "/contact",
    },
    serviceSchema: {
      name: "Commercial Swimming Pool Construction",
      description:
        "Construction of commercial swimming pools, pool bars and aquatic features for hotels, resorts, clubs and municipal facilities in Tennessee.",
    },
    sitemapPriority: 0.85,
  },
];

export const _imageAlts = { NIGHT_POOL_ALT };

