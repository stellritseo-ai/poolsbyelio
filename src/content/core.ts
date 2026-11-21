import type { ContentPageData } from "./types";
import { pick } from "./links";
import { ALT } from "./images";

const HOME = { name: "Home", path: "/" };

export const corePages: ContentPageData[] = [
  /* ---------------------------------------------------------------- FAQ */
  {
    slug: "faq",
    path: "/faq",
    kind: "core",
    metaTitle: "Pool Construction FAQ | Nashville, TN",
    metaDescription:
      "Answers to common questions about custom pool cost, timing, gunite vs fiberglass, infinity edges, automation and choosing a pool builder in Tennessee.",
    keywords: [
      "how much does a custom pool cost in Nashville",
      "how long does pool construction take",
      "how to choose a pool contractor in Tennessee",
    ],
    eyebrow: "Frequently Asked Questions",
    h1: "Pool Construction Questions, Answered",
    intro:
      "Straight answers from Pools By Elio, a family-owned Nashville builder, on cost, timing, materials, technology and how to choose a pool contractor.",
    heroImage: { src: "/assets/banner2.png", alt: ALT.lakePool },
    breadcrumbs: [HOME, { name: "FAQ", path: "/faq" }],
    keyFacts: [
      { label: "Custom gunite pools start at", value: "$140,000+" },
      { label: "Phone", value: "(615) 568-3154" },
      { label: "Service area", value: "Nashville, Franklin, Brentwood & Middle Tennessee" },
    ],
    sections: [
      {
        id: "about",
        heading: "About these answers",
        paragraphs: [
          "These answers reflect how Pools By Elio works and general industry practice. Costs and schedules for your property are always confirmed in a written proposal after an on-site consultation. If your question is not here, call (615) 568-3154.",
        ],
      },
    ],
    faqs: [
      { q: "Who actually runs and builds the projects?", a: "Co-founder Jonathan Elio Rodriguez directs the work on site, from excavation and steel through plumbing, gunite and finishing." },
      { q: "Do you use subcontractors?", a: "No. The work is done by our own full-time crew, which keeps scheduling and quality in one team's hands." },
      { q: "What is the largest project you have completed?", a: "Among our major commercial projects is the lazy river at Sound Waves inside Gaylord Opryland Resort in Nashville. We have also built pools, swim-up bars and water features for hospitality venues in downtown Nashville." },
      { q: "Do you serve both residential and commercial clients?", a: "Yes. We build custom residential pools, spas and backyard retreats, as well as commercial pools and aquatic attractions for hotels, resorts and similar facilities." },
      { q: "How much does a custom pool cost in Nashville?", a: "Our custom gunite pools start at $140,000+. The final cost depends on size, site conditions, features, materials and any outdoor living additions. See our cost guide for the factors involved." },
      { q: "How long does it take to build a custom pool?", a: "The build moves through design and approvals, excavation, steel and plumbing, gunite and curing, tile, coping and decking, and interior finishing. Total time depends on the design, the site, approvals and weather, and your proposal confirms the schedule. See our timeline guide for the phases." },
      { q: "What is the difference between gunite and fiberglass pools?", a: "A gunite pool is a reinforced-concrete shell formed on site, so shape, size and features are fully custom. A fiberglass pool is a factory-made shell set into an excavation, which limits shape and size but can be quicker to install. We build custom gunite pools." },
      { q: "What is an infinity edge pool?", a: "An infinity edge, or vanishing edge, pool has one or more sides where the water spills over a lower wall into a catch basin, so the water appears to run out to the horizon. See our infinity edge page for details." },
      { q: "How does pool automation work?", a: "An automation system connects equipment such as pumps, heaters, lighting and spa controls to a central controller, which you operate from a panel or a smartphone. It lets you schedule and adjust the pool without going to the equipment pad. See our technology page." },
      { q: "How do I choose a pool contractor in Tennessee?", a: "Verify the contractor's license with the Tennessee Board for Licensing Contractors, ask for proof of insurance, see completed work and speak with past customers, ask who actually does the work, and get scope, price and schedule in writing. Our guide walks through each step." },
      { q: "Is Pools By Elio licensed and insured?", a: "Please ask us for our current license and insurance information at any time, and verify any contractor's license independently with the Tennessee Board for Licensing Contractors." },
      { q: "What areas do you serve?", a: "We serve Nashville, Brentwood, Franklin, Belle Meade, Green Hills, Forest Hills, Oak Hill, Hendersonville, Mount Juliet, Murfreesboro and other communities within roughly 50 miles of our Nashville headquarters." },
      { q: "Do you offer weekend or evening consultations?", a: "Yes. Saturday and evening property walkthroughs are available by appointment." },
      { q: "Can you remodel or repair an existing pool?", a: "Yes. We handle resurfacing, tile and coping, equipment upgrades, added features and repairs. See our pool remodeling page." },
      { q: "Do you build water features, fountains and outdoor living spaces?", a: "Yes. We build waterfalls and other water features, fountains, pool houses, swim-up bars, outdoor kitchens and fire features." },
    ],
    related: pick("guideCost", "guideTimeline", "guideGunite", "guideContractor", "process", "quote"),
    cta: {
      heading: "Still have a question?",
      body: "Call (615) 568-3154 or send us a message. We are happy to talk through your project.",
      primaryLabel: "Contact Us",
      primaryHref: "/contact",
    },
    sitemapPriority: 0.8,
  },

  /* ------------------------------------------------------------- PROCESS */
  {
    slug: "process",
    path: "/process",
    kind: "core",
    metaTitle: "Our Pool Building Process",
    metaDescription:
      "How a Pools By Elio project runs, from on-site consultation and 3D design through in-house construction, start-up and system orientation.",
    keywords: ["custom pool building process", "how custom pools are built Nashville"],
    eyebrow: "Our Process",
    h1: "From Consultation to First Swim",
    intro:
      "Every Pools By Elio project follows the same four stages. Knowing what happens at each one makes a large project easier to plan.",
    heroImage: { src: "/assets/gallery/20.webp", alt: ALT.crewFinishing },
    breadcrumbs: [HOME, { name: "Our Process", path: "/process" }],
    keyFacts: [
      { label: "Stages", value: "Consultation, Design, Construction, Completion" },
      { label: "Construction", value: "In-house crew" },
    ],
    sections: [
      {
        id: "stages",
        heading: "The four stages",
        steps: [
          { title: "Consultation", body: "We visit your property to evaluate topography, sun orientation and property lines, and to understand how your family wants to use the outdoor space. You leave with a clear picture of what is feasible." },
          { title: "Design", body: "We develop 3D renderings of the pool so you can see it before ground is broken, and review materials such as tile, coping and decking. The design is refined until it fits the site and your goals." },
          { title: "Construction", body: "Our in-house crew handles excavation, the reinforcing steel, plumbing and electrical rough-ins, pneumatic gunite application, tile, coping, decking and finishing. Co-founder Jonathan Elio Rodriguez directs the work on site." },
          { title: "Completion", body: "We fill the pool, balance the water chemistry, start the equipment and walk you through the controls, including any smartphone automation, so you are comfortable operating the pool." },
        ],
      },
      {
        id: "from-you",
        heading: "What helps us from you",
        bullets: [
          "Your goals: how you swim, entertain and relax, and who will use the space",
          "A rough budget range and the timing you have in mind",
          "Any HOA or neighborhood requirements you already know about",
          "Photos or plans of the property, if you have them",
        ],
      },
      {
        id: "afterwards",
        heading: "Alongside the build",
        paragraphs: [
          "Many projects include more than the pool itself: water features, a pool house, a kitchen or bar, fire features or fountains. Planning these together from the beginning keeps the design coherent and the schedule coordinated. See our guides for more on gunite construction, cost and the build timeline.",
        ],
      },
    ],
    faqs: [
      { q: "How long does each stage take?", a: "It varies with the design, the site, approvals and weather. Your written proposal confirms the schedule for your project." },
      { q: "Will I see the design before construction starts?", a: "Yes. We develop 3D renderings during the design stage so you can review the pool before ground is broken." },
      { q: "Who does the construction work?", a: "Our own full-time crew, directed on site by Jonathan Elio Rodriguez. We do not use subcontractors." },
    ],
    related: pick("gunite", "guideTimeline", "guideCost", "pools", "faq", "quote"),
    cta: {
      heading: "Start with a consultation",
      body: "We will visit the property, talk through your goals and explain what the process looks like for your project.",
      primaryLabel: "Request a Consultation",
      primaryHref: "/quote",
    },
    sitemapPriority: 0.75,
  },

  /* ------------------------------------------------------------ PROJECTS */
  {
    slug: "projects",
    path: "/projects",
    kind: "core",
    metaTitle: "Our Projects | Commercial & Residential Pools",
    metaDescription:
      "Pools By Elio's commercial and residential work, including the Sound Waves lazy river at Gaylord Opryland and pool bars in downtown Nashville.",
    keywords: ["pool builder portfolio Nashville", "Sound Waves Gaylord Opryland lazy river builder"],
    eyebrow: "Projects",
    h1: "Pool Projects by Pools By Elio",
    intro:
      "A look at the commercial and residential work we can document. We publish details we can stand behind and add detail as projects are documented.",
    heroImage: { src: "/assets/banner1.png", alt: ALT.nightPool },
    breadcrumbs: [HOME, { name: "Projects", path: "/projects" }],
    keyFacts: [
      { label: "Commercial", value: "Sound Waves lazy river; downtown Nashville pool bars" },
      { label: "Residential", value: "See the Before & After gallery" },
    ],
    sections: [
      {
        id: "commercial",
        heading: "Commercial projects",
        steps: [
          { title: "Sound Waves at Gaylord Opryland Resort", body: "We built the lazy river at Sound Waves, inside Gaylord Opryland Resort in Nashville. Read the project page for what we can share." },
          { title: "Downtown Nashville hospitality venues", body: "We have built pools, swim-up bars and waterfall features for hospitality and entertainment venues in downtown Nashville. Read the project page for what we can share." },
        ],
        paragraphs: [
          "Project pages: Sound Waves at Gaylord Opryland Resort and downtown Nashville pool bars are linked below.",
        ],
      },
      {
        id: "residential",
        heading: "Residential projects",
        paragraphs: [
          "Our Before & After page shows residential transformations with interactive sliders and project photography, and our reviews page collects comments from homeowners and estate managers about working with us. Detailed project-by-project residential pages will be added as each project is documented with the homeowner's permission.",
        ],
      },
      {
        id: "approach",
        heading: "How we publish projects",
        paragraphs: [
          "We only publish details we can verify, and we ask for permission before sharing a client's property or photography. That means some pages are brief rather than padded. If you want to know more about a project, call us and ask.",
        ],
      },
    ],
    related: [
      { label: "Sound Waves at Gaylord Opryland", href: "/projects/sound-waves-gaylord-opryland", blurb: "The lazy river we built at one of Tennessee's best-known resorts." },
      { label: "Downtown Nashville Pool Bars", href: "/projects/downtown-nashville-pool-bars", blurb: "Pools, swim-up bars and water features for hospitality venues." },
      ...pick("beforeAfter", "reviews", "commercial", "lazyRiver"),
    ],
    cta: {
      heading: "Discuss your project",
      body: "Residential or commercial, tell us what you are planning and we will talk through the next steps.",
      primaryLabel: "Request a Consultation",
      primaryHref: "/quote",
    },
    sitemapPriority: 0.8,
  },

  {
    slug: "projects/sound-waves-gaylord-opryland",
    path: "/projects/sound-waves-gaylord-opryland",
    kind: "core",
    metaTitle: "Sound Waves at Gaylord Opryland | Lazy River",
    metaDescription:
      "Pools By Elio built the lazy river at Sound Waves inside Gaylord Opryland Resort in Nashville, Tennessee. Project overview and what lazy river work involves.",
    keywords: ["Sound Waves Gaylord Opryland lazy river", "Gaylord Opryland pool builder"],
    eyebrow: "Commercial Project",
    h1: "Sound Waves at Gaylord Opryland Resort",
    intro:
      "Pools By Elio built the lazy river at Sound Waves inside Gaylord Opryland Resort in Nashville, Tennessee, one of the state's best-known water attractions.",
    heroImage: { src: "/assets/service4.png", alt: ALT.slides },
    breadcrumbs: [HOME, { name: "Projects", path: "/projects" }, { name: "Sound Waves at Gaylord Opryland", path: "/projects/sound-waves-gaylord-opryland" }],
    keyFacts: [
      { label: "Location", value: "Gaylord Opryland Resort, Nashville, TN" },
      { label: "Category", value: "Commercial / resort aquatics" },
      { label: "Scope", value: "Lazy river" },
    ],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "Sound Waves is the water attraction at Gaylord Opryland Resort in Nashville. Pools By Elio built its lazy river, a continuous channel that guests float around on tubes.",
          "The photograph on this page is an illustrative image of water park attractions and is not a photograph of this project. Project photography for client properties is shared only with the owner's permission.",
        ],
      },
      {
        id: "involves",
        heading: "What lazy river work involves",
        paragraphs: [
          "A lazy river brings together channel layout, current generation, entry and exit points, landscaping, tube storage and water treatment. We describe these elements in more detail on our lazy river page.",
        ],
      },
      {
        id: "more",
        heading: "More about this project",
        paragraphs: [
          "We have limited what we publish here to what we can document. If you are planning a similar attraction for a resort, hotel or community facility, call (615) 568-3154 and ask us about our experience.",
        ],
      },
    ],
    related: pick("lazyRiver", "commercial", "waterParks", "projects", "quote"),
    cta: {
      heading: "Planning a lazy river or aquatic attraction?",
      body: "Tell us about your facility and goals, and we will talk through scope and next steps.",
      primaryLabel: "Discuss a Commercial Project",
      primaryHref: "/contact",
    },
    sitemapPriority: 0.6,
  },

  {
    slug: "projects/downtown-nashville-pool-bars",
    path: "/projects/downtown-nashville-pool-bars",
    kind: "core",
    metaTitle: "Downtown Nashville Pool Bars & Venues",
    metaDescription:
      "Pools By Elio has built pools, swim-up bars and waterfall features for hospitality and entertainment venues in downtown Nashville, Tennessee.",
    keywords: ["downtown Nashville pool bar builder", "swim-up bar construction Nashville"],
    eyebrow: "Commercial Projects",
    h1: "Pool Bars & Hospitality Venues in Downtown Nashville",
    intro:
      "We have built pools, swim-up bars and waterfall features for hospitality and entertainment venues in downtown Nashville.",
    heroImage: { src: "/assets/banner3.png", alt: ALT.resortPool },
    breadcrumbs: [HOME, { name: "Projects", path: "/projects" }, { name: "Downtown Nashville Pool Bars", path: "/projects/downtown-nashville-pool-bars" }],
    keyFacts: [
      { label: "Location", value: "Downtown Nashville, TN" },
      { label: "Category", value: "Commercial / hospitality" },
      { label: "Scope", value: "Pools, swim-up bars, waterfalls" },
    ],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [
          "Hospitality venues use water as part of the experience: a pool as a centerpiece, a swim-up bar as a gathering point, a waterfall as a backdrop. Pools By Elio has built these features for venues in downtown Nashville.",
          "The photograph on this page is an illustrative image of a resort pool and is not a photograph of these projects. Venue names and photography are shared only with the owner's permission.",
        ],
      },
      {
        id: "considerations",
        heading: "What hospitality pool projects call for",
        bullets: [
          "Heavy daily use, so finishes and equipment must be durable",
          "Careful coordination of bar structures, plumbing and electrical work",
          "Public-facility requirements for safety, accessibility and water treatment",
          "Schedules planned around the venue's operations",
        ],
      },
      {
        id: "more",
        heading: "Talk to us about your venue",
        paragraphs: [
          "If you are planning a pool or pool bar for a hotel, resort or entertainment venue, see our commercial pool construction page or call (615) 568-3154.",
        ],
      },
    ],
    related: pick("commercial", "backyard", "projects", "lazyRiver", "nashville"),
    cta: {
      heading: "Planning a venue pool or pool bar?",
      body: "Tell us about the venue and your goals, and we will talk through scope and next steps.",
      primaryLabel: "Discuss a Commercial Project",
      primaryHref: "/contact",
    },
    sitemapPriority: 0.6,
  },
];

