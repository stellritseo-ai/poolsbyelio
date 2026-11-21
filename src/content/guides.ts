import type { ContentPageData } from "./types";
import { pick } from "./links";
import { ALT } from "./images";

const HOME = { name: "Home", path: "/" };
const RESOURCES = { name: "Resources", path: "/resources" };
const PUBLISHED = "2026-11-20";

export const guidePages: ContentPageData[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: "gunite-vs-fiberglass-pools",
    path: "/resources/gunite-vs-fiberglass-pools",
    kind: "guide",
    metaTitle: "Gunite vs. Fiberglass Pools: Nashville Guide",
    metaDescription:
      "Plain-language comparison of gunite and fiberglass swimming pools: design freedom, site fit, durability, maintenance and cost factors for Middle Tennessee.",
    keywords: [
      "gunite vs fiberglass swimming pools",
      "gunite vs fiberglass Nashville TN",
      "best inground pool type Tennessee",
    ],
    eyebrow: "Pool Construction Guide",
    h1: "Gunite vs. Fiberglass Swimming Pools: What to Know Before You Build",
    intro:
      "Homeowners planning an inground pool usually compare gunite (sprayed concrete) and prefabricated fiberglass shells. Both have clear strengths and trade-offs. Here is an objective comparison focused on how each performs on Middle Tennessee properties.",
    heroImage: { src: "/assets/gallery/20.webp", alt: ALT.crewFinishing },
    breadcrumbs: [HOME, RESOURCES, { name: "Gunite vs. Fiberglass", path: "/resources/gunite-vs-fiberglass-pools" }],
    keyFacts: [
      { label: "Pools By Elio builds", value: "Custom gunite pools" },
      { label: "Main trade-off", value: "Custom design vs. factory shell limits" },
      { label: "Published", value: PUBLISHED },
    ],
    article: { datePublished: PUBLISHED, dateModified: PUBLISHED },
    sections: [
      {
        id: "summary",
        heading: "Side-by-side comparison",
        table: {
          headers: ["Factor", "Custom Gunite", "Prefabricated Fiberglass"],
          rows: [
            ["Shape & dimensions", "Fully custom to the yard, slope and architecture", "Limited to manufacturer molds and transport widths"],
            ["Integrated features", "Spas, swim-up bars, tanning ledges, vanishing edges, rock grottos built into the shell", "Features are mostly pre-molded or added separately"],
            ["Sloped or rocky lots", "Engineered directly to site contours and retaining needs", "Requires careful base preparation and crane access for the shell"],
            ["Surface care", "Periodic brushing and eventual resurfacing over decades", "Smooth gelcoat surface; color choices limited to factory finishes"],
            ["Construction schedule", "Longer on-site build because the shell is formed and cured on site", "Shell sets quickly once excavated, though decking and permits still take time"],
            ["Initial investment", "Higher upfront cost (our custom gunite builds start at $140,000+)", "Often lower entry cost for standard rectangular models"],
          ],
        },
      },
      {
        id: "when-gunite",
        heading: "When gunite is the stronger choice",
        bullets: [
          "You want the pool shaped around your house, mature trees, views or a sloped Middle Tennessee lot.",
          "You plan to integrate a spillover spa, swim-up bar, custom steps, sun shelf or vanishing edge into the structure.",
          "You want natural stone coping, waterline glass or porcelain tile, and a custom interior aggregate finish.",
          "You are designing a complete backyard space with a pool house, outdoor kitchen and water features.",
        ],
      },
      {
        id: "when-fiberglass",
        heading: "When fiberglass may fit better",
        paragraphs: [
          "If a standard shape and depth already fit a flat, accessible yard and keeping the entry budget lower is the primary goal, a prefabricated fiberglass shell can be a practical choice. It is worth inspecting the manufacturer's warranty terms, crane access requirements and local installer track record before deciding.",
        ],
      },
      {
        id: "middle-tn",
        heading: "Middle Tennessee soil and rock considerations",
        paragraphs: [
          "Parts of Nashville, Franklin and Brentwood sit over shallow limestone bedrock and expansive clay soils. Regardless of pool type, excavation in rock adds time and cost, and proper drainage around the shell matters. With custom gunite, the reinforcing steel and shell geometry can be engineered specifically for elevation changes and retaining conditions on the lot.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Pools By Elio install fiberglass or vinyl liner pools?",
        a: "No. Pools By Elio specializes in custom gunite swimming pools, spas, water features and commercial aquatic facilities.",
      },
      {
        q: "Can a gunite pool be updated later?",
        a: "Yes. Because the underlying shell is reinforced concrete, interior finishes, waterline tile, coping and equipment can be renewed or remodeled years later without replacing the structure.",
      },
      {
        q: "Which lasts longer: gunite or fiberglass?",
        a: "A properly engineered gunite shell is a permanent concrete structure that can be resurfaced over its life. Longevity for any pool depends heavily on structural engineering, drainage, installation quality and ongoing water chemistry care.",
      },
    ],
    related: pick("gunite", "guideCost", "guideTimeline", "guideContractor", "pools", "quote"),
    cta: {
      heading: "Exploring a custom gunite pool?",
      body: "Request a consultation with our Nashville team to review your property and see what a custom design makes possible.",
      primaryLabel: "Request a Consultation",
      primaryHref: "/quote",
    },
    sitemapPriority: 0.75,
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: "custom-pool-cost-nashville",
    path: "/resources/custom-pool-cost-nashville",
    kind: "guide",
    metaTitle: "Custom Pool Cost in Nashville, TN",
    metaDescription:
      "What drives the cost of a custom gunite pool in Nashville, Franklin and Brentwood, TN, and how to compare contractor proposals accurately.",
    keywords: [
      "how much does a custom pool cost in Nashville",
      "gunite pool cost Tennessee",
      "pool and spa combination cost Nashville",
    ],
    eyebrow: "Cost & Budgeting Guide",
    h1: "How Much Does a Custom Pool Cost in Nashville, Tennessee?",
    intro:
      "Every custom gunite pool is priced to the site and the design, so online calculators rarely match reality. At Pools By Elio, custom gunite swimming pools start at $140,000+. Here are the specific factors that move a proposal up from that starting point—and how to compare bids fairly.",
    heroImage: { src: "/assets/banner1.png", alt: ALT.nightPool },
    breadcrumbs: [HOME, RESOURCES, { name: "Custom Pool Cost in Nashville", path: "/resources/custom-pool-cost-nashville" }],
    keyFacts: [
      { label: "Pools By Elio starting tier", value: "$140,000+ for custom gunite pools" },
      { label: "Pricing method", value: "Itemized written proposal after site visit" },
      { label: "Published", value: PUBLISHED },
    ],
    article: { datePublished: PUBLISHED, dateModified: PUBLISHED },
    sections: [
      {
        id: "drivers",
        heading: "What drives the cost of a custom pool",
        table: {
          headers: ["Cost Factor", "Why It Changes the Price"],
          rows: [
            ["Pool size, depth & geometry", "More perimeter and surface area mean more excavation, rebar, gunite, tile, finish and plumbing."],
            ["Site access, slope & limestone", "Tight urban access in Nashville or sloped/rocky lots in Williamson County can require rock hammering, retaining walls or specialized hauling."],
            ["Integrated spa & features", "Adding a raised spillover spa, vanishing edge, natural stone waterfall, grotto or swim-up bar adds structure, hydraulics and masonry."],
            ["Decking & materials", "Travertine, natural stone or porcelain pavers and glass waterline tile cost more than standard finishes."],
            ["Equipment & automation", "Variable-speed pumps, heaters, saltwater or UV/ozone systems, LED lighting and smartphone control vary by package."],
            ["Outdoor living structures", "Pool houses, cabanas, outdoor kitchens, fire pits and fireplaces are scoped as part of the full backyard budget."],
          ],
        },
      },
      {
        id: "pool-and-spa",
        heading: "Adding a spa to a custom pool",
        paragraphs: [
          "Building an attached spillover spa at the same time as the pool is almost always more efficient than trying to add one later. Excavation, rebar, gunite, gas/electrical runs and automation are handled in one coordinated build, and the spa shares a single unified control panel and visual aesthetic with the pool.",
        ],
      },
      {
        id: "comparing-bids",
        heading: "How to compare pool proposals fairly",
        bullets: [
          "Check what is excluded: rock excavation allowances, utility relocations, electrical hookup, gas line runs, fencing and landscaping are often left out of low-looking quotes.",
          "Compare structural and equipment details, not just the bottom line: ask about steel layout, plumbing sizing, pump and heater brands, and interior finish type.",
          "Ask who does the work: confirm whether the builder uses its own crew or subcontracts each phase.",
          "Ask about permits, HOA review and drainage planning so surprise fees do not appear mid-build.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do custom gunite pools at Pools By Elio start at $140,000+?",
        a: "Custom gunite construction involves site-specific design, heavy excavation, steel reinforcement, pneumatic gunite, hydraulic plumbing, artisanal tile and finishes, and modern equipment—executed in-house by our experienced crew rather than cut-rate subcontractors.",
      },
      {
        q: "Does an initial quote include rock excavation?",
        a: "Because subsurface limestone cannot always be seen before digging, builders typically address rock excavation transparently in the contract terms after evaluating the property. Always ask how rock is handled before signing.",
      },
      {
        q: "Do you provide written estimates before I commit?",
        a: "Yes. After visiting your property and discussing your goals, we provide a clear written proposal covering scope and pricing.",
      },
    ],
    related: pick("gunite", "pools", "guideTimeline", "guideGunite", "guideContractor", "quote"),
    cta: {
      heading: "Get an accurate proposal for your property",
      body: "Request a consultation or call (615) 568-3154. We will walk the site and give you clear numbers based on your yard and goals.",
      primaryLabel: "Request a Quote",
      primaryHref: "/quote",
    },
    sitemapPriority: 0.8,
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: "pool-construction-timeline",
    path: "/resources/pool-construction-timeline",
    kind: "guide",
    metaTitle: "Pool Construction Timeline: Design to Swim",
    metaDescription:
      "Every phase of custom gunite pool construction in order—from site visit and approvals to gunite, decking and start-up—and what affects the schedule.",
    keywords: [
      "how long does pool construction take",
      "gunite pool construction phases",
      "when to start building a pool in Tennessee",
    ],
    eyebrow: "Planning & Schedule Guide",
    h1: "Pool Construction Timeline: From Design to First Swim",
    intro:
      "Understanding the order of construction makes it much easier to plan around a target swim season. While the exact calendar depends on your design, property conditions, approvals and weather, every custom gunite pool moves through the same core stages.",
    heroImage: { src: "/assets/banner2.png", alt: ALT.lakePool },
    breadcrumbs: [HOME, RESOURCES, { name: "Pool Construction Timeline", path: "/resources/pool-construction-timeline" }],
    keyFacts: [
      { label: "Best time to start planning", value: "Fall or winter for a spring/summer swim" },
      { label: "Schedule confirmation", value: "Provided in your written proposal" },
      { label: "Published", value: PUBLISHED },
    ],
    article: { datePublished: PUBLISHED, dateModified: PUBLISHED },
    sections: [
      {
        id: "phases",
        heading: "The build phases in order",
        steps: [
          { title: "1. Consultation & site evaluation", body: "We walk your property to review elevation, access, utilities, drainage and how you plan to use the space." },
          { title: "2. 3D design & material selection", body: "We create 3D renderings and work with you on pool shape, features, tile, coping, decking and equipment." },
          { title: "3. Permits & HOA review", body: "Municipal permits, zoning setbacks and neighborhood HOA architectural approvals are completed before excavation begins." },
          { title: "4. Excavation & layout", body: "The pool outline is marked and excavated. Subsurface rock or tight site access can add days at this stage." },
          { title: "5. Steel rebar & rough plumbing/electrical", body: "Our crew ties the steel reinforcement cage and runs main drains, returns, skimmers, lighting niches and equipment trenches." },
          { title: "6. Pneumatic gunite & curing", body: "The concrete shell is sprayed, hand-shaped and cured to build structural strength." },
          { title: "7. Tile, coping, masonry & decking", body: "Waterline tile, stone coping, water features, patios and any outdoor living structures are built." },
          { title: "8. Interior finish, fill & orientation", body: "The interior aggregate or plaster finish is applied, the pool is filled and balanced, and we walk you through the controls." },
        ],
      },
      {
        id: "delays",
        heading: "What most commonly affects the schedule",
        bullets: [
          "HOA and municipal permit review windows, which vary across Nashville, Franklin, Brentwood and county jurisdictions.",
          "Heavy rain, saturated clay soil or winter freezing temperatures during excavation, gunite or finishing.",
          "Mid-project design or material changes after construction has started.",
          "Added scope such as a pool house, outdoor kitchen, retaining walls or custom masonry.",
          "Crew coordination—builders relying on multiple external subcontractors often face gaps between trades, whereas an in-house crew keeps sequencing under one roof.",
        ],
      },
      {
        id: "season",
        heading: "When to start planning in Middle Tennessee",
        paragraphs: [
          "If your goal is to be swimming by late spring or early summer, starting design and permitting in the fall or winter gives you the best cushion for HOA review, material lead times and spring weather. Waiting until April to begin design usually pushes completion into late summer or fall.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can pool construction continue through winter in Nashville?",
        a: "Many stages—such as design, permitting, excavation, steel and rough plumbing—can move forward during mild Tennessee winter periods, while temperature-sensitive steps like gunite and interior finishing are scheduled around weather windows.",
      },
      {
        q: "How does using an in-house crew affect timing?",
        a: "Because Pools By Elio does not wait on outside subcontractor schedules for excavation, steel, plumbing, gunite and finishing, sequencing stays directly under Jonathan Elio Rodriguez's control.",
      },
      {
        q: "When will I receive a schedule for my project?",
        a: "We outline the expected build sequence and timeline in your written proposal once the design and site conditions are reviewed.",
      },
    ],
    related: pick("process", "gunite", "guideCost", "guideContractor", "faq", "quote"),
    cta: {
      heading: "Planning ahead for next swim season?",
      body: "Book an on-site consultation now so design and approvals are ready well ahead of your target date.",
      primaryLabel: "Schedule a Consultation",
      primaryHref: "/quote",
    },
    sitemapPriority: 0.75,
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: "how-to-choose-a-pool-contractor-tennessee",
    path: "/resources/how-to-choose-a-pool-contractor-tennessee",
    kind: "guide",
    metaTitle: "How to Choose a Pool Contractor in Tennessee",
    metaDescription:
      "A practical checklist for vetting custom pool builders in Tennessee: license verification, insurance, in-house crews vs subcontractors, contracts and past work.",
    keywords: [
      "how to choose a pool contractor in Tennessee",
      "vetting pool builders Nashville TN",
      "Tennessee pool contractor license check",
    ],
    eyebrow: "Homeowner Vetting Checklist",
    h1: "How to Choose a Pool Contractor in Tennessee",
    intro:
      "A custom inground pool is a major structural investment in your property. Asking the right questions before you sign protects your budget, your yard and your timeline. Use this practical checklist when evaluating any pool builder in Nashville or Middle Tennessee.",
    heroImage: { src: "/assets/banner3.png", alt: ALT.resortPool },
    breadcrumbs: [HOME, RESOURCES, { name: "Choose a Pool Contractor", path: "/resources/how-to-choose-a-pool-contractor-tennessee" }],
    keyFacts: [
      { label: "Verify license at", value: "Tennessee Board for Licensing Contractors" },
      { label: "Key question", value: "Who is actually on site every day?" },
      { label: "Published", value: PUBLISHED },
    ],
    article: { datePublished: PUBLISHED, dateModified: PUBLISHED },
    sections: [
      {
        id: "checklist",
        heading: "7 steps to vet a Tennessee pool builder",
        steps: [
          { title: "Verify state licensing independently", body: "In Tennessee, swimming pool construction above state monetary thresholds requires a valid contractor license. Ask for the license number and verify its active status and monetary limit directly through the Tennessee Department of Commerce & Insurance (Board for Licensing Contractors)." },
          { title: "Request certificates of insurance", body: "Ask for current general liability and workers' compensation certificates so you are protected if an accident or property damage occurs on site." },
          { title: "Ask who actually builds the pool", body: "Find out whether excavation, rebar, plumbing, gunite, tile and finishing are performed by the company's own crew or passed to rotating subcontractors, and who supervises the site day to day." },
          { title: "Inspect real completed projects and references", body: "Review photographs of actual completed builds and speak with recent homeowners—especially clients whose pools have been through a couple of seasons." },
          { title: "Demand a clear, itemized written scope", body: "Your contract should spell out pool dimensions, structural specs, equipment models, finish materials, permit responsibilities, rock excavation terms and payment milestones tied to real construction progress." },
          { title: "Evaluate local site knowledge", body: "Middle Tennessee limestone, clay soils, sloped yards and municipal/HOA rules vary widely from Belle Meade to Franklin and Brentwood. Look for hands-on experience in your area." },
          { title: "Confirm start-up, warranty and ongoing support", body: "Understand what warranty covers the structure versus manufacturer equipment warranties, and who you call if a pump, heater or finish needs attention later." },
        ],
      },
      {
        id: "red-flags",
        heading: "Common warning signs to watch for",
        bullets: [
          "Vague lump-sum bids that omit electrical, gas, rock excavation, drainage or permits.",
          "Demands for large upfront deposits far ahead of completed work milestones.",
          "Reluctance to provide license numbers, proof of insurance or local references.",
          "Sales-only companies that cannot tell you who will be physically managing your backyard each week.",
        ],
      },
    ],
    faqs: [
      {
        q: "How does Pools By Elio handle supervision and crews?",
        a: "Pools By Elio is a family-owned Nashville builder founded by brothers Jonathan and David Elio Rodriguez. Work is executed by our own in-house crew rather than subcontractors, with Jonathan directing projects on site.",
      },
      {
        q: "Should I get more than one proposal?",
        a: "Yes. Comparing two or three detailed proposals helps you see differences in structural approach, included items, equipment quality and communication style.",
      },
      {
        q: "Can I check a contractor's license online in Tennessee?",
        a: "Yes. The Tennessee Department of Commerce & Insurance maintains a public license lookup where any homeowner can confirm a contractor's license status and classification.",
      },
    ],
    related: pick("about", "process", "guideCost", "guideGunite", "reviews", "quote").filter(Boolean),
    cta: {
      heading: "Speak directly with the builder",
      body: "Have questions about licensing, scope or how we work? Call Jonathan and the Pools By Elio team at (615) 568-3154.",
      primaryLabel: "Contact Pools By Elio",
      primaryHref: "/contact",
    },
    sitemapPriority: 0.75,
  },
];

