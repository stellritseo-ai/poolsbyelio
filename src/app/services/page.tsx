"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Waves,
  Droplets,
  Cpu,
  Building2,
  Wine,
  Layers,
  Award,
  Clock,
  Wrench,
  Compass,
  ChevronDown,
  HelpCircle,
  Check,
  MapPin,
  Flame,
} from "lucide-react";

type ServiceCategory = "All" | "Residential" | "Commercial" | "Features & Tech";

export default function ServicesHubPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>("All");
  const [selectedComparisonIdx, setSelectedComparisonIdx] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const coreServices = [
    {
      id: "pools-and-spas",
      title: "Custom Pools & Spas",
      subtitle: "Architectural Gunite Basins & Hydrotherapy Sanctuaries",
      category: "Residential" as ServiceCategory,
      badge: "Signature Division",
      investment: "Starting at $140,000+",
      timeline: "10–16 Weeks",
      href: "/pools-and-spas",
      image: "/assets/service1.png",
      secondaryImage: "/assets/gallery/20.webp",
      icon: Waves,
      description:
        "We engineer permanent, monolithic shotcrete/gunite swimming pools and custom elevated spillover spas tailored to the exact topography and limestone bedrock of your Middle Tennessee estate.",
      highlights: [
        "Vanishing edge (infinity), geometric modern, freeform lagoon & lap pools",
        "100% in-house steel rebar framing and pneumatic gunite application",
        "Custom heated hydrotherapy spas with ergonomic therapeutic jet arrays",
        "Baja tanning ledges, integrated bubble shelves & beach walk-in entries",
        "Artisanal glass waterline tile, Pebble/Quartz finishes & travertine coping",
      ],
      deliverables: [
        "3D CAD Blueprints",
        "Lifetime Structural Shell",
        "Turnkey Permitting",
      ],
    },
    {
      id: "water-features",
      title: "Custom Water Features",
      subtitle: "Natural Stone Waterfalls, Grottos, Rain Curtains & Scuppers",
      category: "Features & Tech" as ServiceCategory,
      badge: "Sight & Sound",
      investment: "Custom Integrated or Standalone",
      timeline: "3–8 Weeks",
      href: "/water-features",
      image: "/assets/service2.png",
      secondaryImage: "/assets/gallery/341640127040.jpg",
      icon: Droplets,
      description:
        "Transform your poolscape into an acoustic sensory sanctuary with hand-carved Tennessee boulder waterfalls, walk-in swim-under grottos, sheer descent water walls, and illuminated deck laminar jets.",
      highlights: [
        "Multi-tiered natural Tennessee fieldstone & stacked boulder waterfalls",
        "Custom rock caves, swim-in grottos & integrated stone water slides",
        "Precision brass, copper & brushed stainless architectural scuppers",
        "Sheer descent rain curtains & LED-lit laminar deck arc jets",
        "Dedicated whisper-quiet variable-speed booster pump hydraulics",
      ],
      deliverables: [
        "Acoustic Tuning",
        "Dedicated Hydraulics",
        "LED Night Illumination",
      ],
    },
    {
      id: "technology",
      title: "State-of-the-Art Pool Technology",
      subtitle: "Smartphone Automation, Variable-Speed Hydraulics & Salt/UV",
      category: "Features & Tech" as ServiceCategory,
      badge: "Smart Pool Tech",
      investment: "Included in New Builds & Retrofits",
      timeline: "1–3 Weeks (Retrofits)",
      href: "/technology",
      image: "/assets/service3.png",
      secondaryImage: "/assets/gallery/21.webp",
      icon: Cpu,
      description:
        "Command every aspect of your aquatic retreat from your iPhone, iPad, or voice assistant. We integrate industry-leading Pentair, Hayward, and Jandy automation with ultra-efficient variable-speed pumps.",
      highlights: [
        "One-touch iOS/Android control for spa heat, jets, lighting & waterfalls",
        "ENERGY STAR variable-speed pumps cutting electrical consumption up to 70%",
        "Advanced salt chlorine generation, UV-C & ozone mineral sanitization",
        "Hybrid heat pumps & high-efficiency gas heaters for 4-season comfort",
        "Synchronized RGBW LED color-changing underwater and landscape lighting",
      ],
      deliverables: [
        "Mobile App Setup",
        "Automated Chemistry",
        "Energy Optimization",
      ],
    },
    {
      id: "water-parks",
      title: "Commercial Water Parks & Resorts",
      subtitle: "Lazy Rivers, Multi-Story Slides, Splash Pads & Hotel Pools",
      category: "Commercial" as ServiceCategory,
      badge: "Commercial Scale",
      investment: "Commercial Bid & Engineering",
      timeline: "Custom Phased Schedule",
      href: "/water-parks",
      image: "/assets/service4.png",
      secondaryImage: "/assets/gallery/341762942040.jpg",
      icon: Building2,
      description:
        "Backed by proven commercial pedigree—including contributions to Sound Waves at Gaylord Opryland and premier downtown Nashville hospitality venues—we build high-capacity municipal and resort aquatic attractions.",
      highlights: [
        "Continuous-flow commercial lazy rivers & high-volume wave/activity pools",
        "Zero-depth interactive municipal splash pads, spraygrounds & tipping buckets",
        "Multi-family luxury apartment, HOA clubhouse & boutique hotel resort pools",
        "Full Tennessee Department of Health commercial code & ADA compliance",
        "Heavy-duty commercial surge tanks, high-rate sand/regenerative filtration",
      ],
      deliverables: [
        "Health Dept. Compliance",
        "Commercial Hydraulics",
        "ADA Certified",
      ],
    },
    {
      id: "fountains",
      title: "Architectural Fountains",
      subtitle: "Estate Motorcourt Fountains, Lake Aeration & Commercial Plazas",
      category: "Features & Tech" as ServiceCategory,
      badge: "The House of Fountains",
      investment: "Bespoke Design & Fabrication",
      timeline: "3–10 Weeks",
      href: "/fountains",
      image: "/assets/service5.png",
      secondaryImage: "/assets/gallery/24.webp",
      icon: Sparkles,
      description:
        "In partnership with our specialty division (The House of Fountains), we design and engineer grand courtyard fountains, tiered European limestone centerpieces, and commercial pond/lake fountains.",
      highlights: [
        "Grand circular estate driveway & motorcourt architectural fountains",
        "Custom zero-edge reflection basins and formal courtyard water walls",
        "Floating commercial lake & retention pond aerating display fountains",
        "Wind-compensating anemometer controls & auto-fill water leveling",
        "Submersible bronze/stainless nozzle choreography & warm/RGBW lighting",
      ],
      deliverables: [
        "Custom Nozzle Arrays",
        "Auto-Leveling Basin",
        "Freeze Protection",
      ],
    },
    {
      id: "backyard-concepts",
      title: "Luxury Backyard Concepts",
      subtitle: "Swim-Up Bars, Custom Pool Houses, Outdoor Kitchens & Fire",
      category: "Residential" as ServiceCategory,
      badge: "Complete Outdoor Living",
      investment: "Turnkey Master-Planned Estates",
      timeline: "8–16 Weeks",
      href: "/backyard-concepts",
      image: "/assets/service6.png",
      secondaryImage: "/assets/gallery/22.webp",
      icon: Wine,
      description:
        "Famous across Nashville as the 'Swim-Up Bar Kings,' we design cohesive outdoor living environments that unite your pool with sunken wet bars, gourmet kitchens, cedar cabanas, and fire bowls.",
      highlights: [
        "Signature in-pool gunite bar stools & sunken dry-side bartender stations",
        "Custom timber-frame pavilions, pool houses & climate-controlled cabanas",
        "Commercial-grade stainless outdoor kitchens, pizza ovens & kegerators",
        "Poolside gas fire pits, outdoor stone fireplaces & water-and-fire bowls",
        "Travertine, bluestone & porcelain paver decks with integrated drainage",
      ],
      deliverables: [
        "Unified 3D Master Plan",
        "Gas & Electrical Hookups",
        "Turnkey Hardscaping",
      ],
    },
  ];

  const filteredServices =
    activeFilter === "All"
      ? coreServices
      : coreServices.filter((s) => s.category === activeFilter);

  const comparisonMatrix = [
    {
      title: "Custom Estate Pool & Spa",
      subtitle: "Residential Flagship Build",
      startingPrice: "$140,000 – $250,000+",
      typicalTimeline: "10 – 16 Weeks",
      shellEngineering: "Monolithic 4,000+ PSI Pneumatic Shotcrete / Gunite with #4/#5 Steel Rebar Grid",
      idealFor: "Homeowners in Nashville, Brentwood, Franklin, Belle Meade & Middle TN seeking a permanent backyard resort",
      includedItems: [
        "3D CAD architectural rendering & topographical laser survey",
        "Full HOA architectural packet & municipal building permit management",
        "Custom gunite pool shell, tanning ledge & optional spillover spa",
        "Variable-speed pump, sanitization, LED lighting & smartphone automation",
        "Premium waterline tile, interior aggregate finish & stone/paver coping",
      ],
      ctaHref: "/pools-and-spas",
      ctaLabel: "Explore Pools & Spas",
    },
    {
      title: "Complete Backyard Resort & Swim-Up Bar",
      subtitle: "Pool + Outdoor Living Master Plan",
      startingPrice: "$200,000 – $400,000+",
      typicalTimeline: "12 – 20 Weeks",
      shellEngineering: "Integrated Gunite Pool, Sunken Bartender Pit, Structural Footings & Utility Trenches",
      idealFor: "Entertainers wanting a cohesive pool, swim-up bar, outdoor kitchen, pavilion & fire feature built by one team",
      includedItems: [
        "Custom in-ground gunite pool & spa with submerged bar seating",
        "Sunken outdoor kitchen with grill, refrigeration, sink & granite counters",
        "Custom pool house, cabana or pergola structure with ceiling fans & TV",
        "Integrated gas fire bowls, stone fireplace & low-voltage landscape lighting",
        "Expansive travertine or porcelain paver decking with channel drainage",
      ],
      ctaHref: "/backyard-concepts",
      ctaLabel: "Explore Backyard Concepts",
    },
    {
      title: "Commercial Water Park & Hospitality",
      subtitle: "Resorts, Municipalities & Developments",
      startingPrice: "Custom Commercial Bid",
      typicalTimeline: "Phased Commercial Schedule",
      shellEngineering: "Heavy-Duty Commercial Gunite, Surge Tanks, High-Rate Filtration & ADA Access",
      idealFor: "Hotels, resorts, luxury multi-family apartments, HOA clubhouses, water parks & municipal splash pads",
      includedItems: [
        "Full coordination with architects, civil engineers & TN Health Department",
        "Lazy rivers, zero-depth splash pads, commercial slides & resort pools",
        "Automated commercial chemical controllers (ORP/pH) & UV sanitization",
        "ADA compliant lifts, zero-entry ramps, anti-entrapment VGB main drains",
        "Turnkey commercial warranty & operator commissioning training",
      ],
      ctaHref: "/water-parks",
      ctaLabel: "Explore Commercial Water Parks",
    },
    {
      title: "Complete Gunite Renovation & Modernization",
      subtitle: "Structural Restoration & Tech Upgrades",
      startingPrice: "Custom Scope Assessment",
      typicalTimeline: "3 – 8 Weeks",
      shellEngineering: "Hydro-Blasting, Structural Crack Injection, Bond Coating & Hydraulic Re-Plumbing",
      idealFor: "Aging gunite/concrete pools needing modern pebble finishes, new tile/coping, tanning ledges, or smart automation",
      includedItems: [
        "Complete chip-out/hydro-blasting and quartz or pebble interior resurfacing",
        "Replacement of frost-proof waterline tile and natural stone/travertine coping",
        "Structural additions: adding a Baja sun shelf, spillover spa, or swim-up bar",
        "Upgrading old single-speed pumps to smart Pentair/Hayward app automation",
        "Pressure testing, underground leak repair & salt/heater modernization",
      ],
      ctaHref: "/before-after",
      ctaLabel: "See Before & After Transformations",
    },
  ];

  const buildSteps = [
    {
      step: "01",
      title: "On-Site Survey & 3D Architectural Design",
      desc: "Jonathan & David Elio visit your property to inspect elevations, soil/limestone depth, and drainage before crafting a photorealistic 3D CAD walkthrough.",
    },
    {
      step: "02",
      title: "Turnkey Permitting & HOA Approval",
      desc: "We prepare all stamped structural engineering drawings, setback plot plans, and HOA submission packages across Davidson, Williamson, and surrounding counties.",
    },
    {
      step: "03",
      title: "Precision Excavation & Steel Rebar Cage",
      desc: "Our in-house crew excavates your basin, installs gravel sub-drainage, and hand-ties a heavy-gauge steel rebar skeleton on tight structural centers.",
    },
    {
      step: "04",
      title: "Monolithic Pneumatic Gunite Application",
      desc: "High-velocity structural gunite is pneumatically shot and hand-sculpted by master craftsmen to form steps, benches, sun shelves, and bar stools.",
    },
    {
      step: "05",
      title: "Masonry, Waterline Tile, Coping & Decking",
      desc: "Artisanal installation of frost-proof glass or porcelain tile, natural stone or travertine coping, waterfalls, outdoor kitchens, and expansive decking.",
    },
    {
      step: "06",
      title: "Interior Finish, Smart Tech & Orientation",
      desc: "We apply your quartz or pebble interior finish, fill and balance the water chemistry, configure your smartphone app, and walk you through every control.",
    },
  ];

  const faqs = [
    {
      q: "Do you handle the entire pool and backyard project in-house, or do you subcontract?",
      a: "Unlike pool brokers who sub out every stage to third-party crews, Pools By Elio executes design, excavation, steel rebar, plumbing, gunite, masonry, waterfalls, and outdoor living structures in-house under the direct supervision of founders Jonathan and David Elio Rodriguez.",
    },
    {
      q: "What is the starting cost for a custom in-ground gunite pool in Nashville?",
      a: "Our custom in-ground gunite swimming pools start at $140,000.00+. Final investment depends on pool dimensions, site topography/rock excavation, integrated spillover spas, water features, decking square footage, and outdoor living structures.",
    },
    {
      q: "Can we combine multiple services—like a pool, waterfall, swim-up bar, and outdoor kitchen—into one build?",
      a: "Yes! That is our specialty. Designing and building your pool, water features, automation, swim-up bar, pavilion, and hardscaping simultaneously under one master blueprint saves significant time, prevents utility conflicts, and guarantees architectural harmony.",
    },
    {
      q: "Do you also renovate existing concrete/gunite pools or upgrade older pool equipment?",
      a: "Absolutely. We perform complete structural gunite renovations—including pebble/quartz resurfacing, new tile and travertine coping, adding tanning ledges or spas to existing pools, and retrofitting modern smartphone automation, salt systems, and variable-speed pumps.",
    },
    {
      q: "What areas of Middle Tennessee do you serve for residential and commercial projects?",
      a: "We serve a 50-mile radius around our Nashville headquarters (412 Ezell pike Nashville TN 37217), including Belle Meade, Green Hills, Forest Hills, Brentwood, Franklin, Leiper's Fork, Nolensville, Hendersonville, Gallatin, Mount Juliet, Murfreesboro, and Spring Hill. For commercial water parks and resorts, we serve all of Tennessee and surrounding states.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header />

      <main className="flex-1">
        {/* =====================================================================
            1. HERO SECTION — 10px Framed Royal Navy Architectural Hub
        ===================================================================== */}
        <section className="relative mx-[10px] mb-[10px] rounded-[5px] overflow-hidden bg-[#001a40] text-white shadow-2xl">
          {/* Background Image + Multi-layered Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/banner1.png"
              alt="Pools By Elio Master Aquatic Construction Services in Nashville TN"
              fill
              priority
              unoptimized
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001535]/95 via-[#00285c]/88 to-[#00285c]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00122e] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
            {/* Breadcrumb + Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-cyan-300/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-cyan-200">
                  6 Master Aquatic Divisions • 100% In-House Engineering
                </span>
              </div>

              <nav
                aria-label="Breadcrumb"
                className="text-xs text-blue-200 flex items-center gap-2"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-cyan-300 font-bold">Services</span>
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left 7 Columns: Headline & Value Proposition */}
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-[clamp(1.85rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.08] text-white">
                  Master-Engineered{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                    Aquatic &amp; Outdoor Living
                  </span>{" "}
                  Services in Nashville, TN
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
                  From custom vanishing-edge gunite estate pools and natural Tennessee boulder waterfalls to commercial water parks, architectural fountains, and signature swim-up bars—every division is engineered and built in-house with 25+ years of master craftsmanship.
                </p>

                {/* Primary Hero CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#00285c] hover:bg-cyan-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Configure 3D Quote &amp; Estimate</span>
                    <ArrowRight className="w-4 h-4 text-[#00509e]" />
                  </Link>

                  <a
                    href="tel:6155683154"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0047a0]/90 hover:bg-[#0055c4] text-white border border-white/25 font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>(615) 568-3154</span>
                  </a>
                </div>
              </div>

              {/* Right 5 Columns: Quick Service Directory Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-300 block">
                        Direct Service Jump
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-white">
                        Select a Specialty Division
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold uppercase">
                      Licensed GC
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {coreServices.map((service) => {
                      const IconComp = service.icon;
                      return (
                        <Link
                          key={service.id}
                          href={service.href}
                          className="group flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.07] hover:bg-white text-white hover:text-[#00285c] border border-white/15 transition-all duration-200"
                        >
                          <div className="w-8 h-8 rounded-lg bg-cyan-400/20 group-hover:bg-[#00509e] text-cyan-300 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-extrabold truncate">
                              {service.title}
                            </div>
                            <div className="text-[10px] text-blue-200 group-hover:text-slate-500 truncate">
                              {service.badge}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-blue-100">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                      <span>412 Ezell pike Nashville TN 37217</span>
                    </span>
                    <Link
                      href="/areas-we-serve"
                      className="text-cyan-300 hover:underline font-bold"
                    >
                      Service Map &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Key Metric Strip */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  value: "25+ Years",
                  label: "Master Gunite & Aquatic Engineering",
                },
                {
                  value: "100% In-House",
                  label: "Zero Broker Subcontracting Markup",
                },
                {
                  value: "$140,000+",
                  label: "Custom Gunite Pools Starting Tier",
                },
                {
                  value: "50-Mile Radius",
                  label: "Serving Greater Nashville & Middle TN",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/[0.06] border border-white/10"
                >
                  <div className="text-lg sm:text-2xl font-extrabold text-cyan-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-100/85 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. ALL 6 CORE SERVICE DIVISIONS — Filterable Deep-Dive Showcase
        ===================================================================== */}
        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-slate-50 border border-slate-200/80 py-12 sm:py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header + Category Filter Pills */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#004b93] text-xs font-extrabold uppercase tracking-wider mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Complete Aquatic Capabilities</span>
                </span>
                <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold text-slate-900 tracking-tight leading-tight">
                  Explore Our 6 Specialized Construction Divisions
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                  Every division operates under direct founder supervision, combining structural shotcrete engineering with resort-grade luxury finishes.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {(
                  [
                    "All",
                    "Residential",
                    "Commercial",
                    "Features & Tech",
                  ] as ServiceCategory[]
                ).map((category) => {
                  const isActive = activeFilter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#00285c] text-white shadow-md"
                          : "bg-white text-slate-700 hover:bg-blue-50 border border-slate-200"
                      }`}
                    >
                      {category === "All"
                        ? "All 6 Divisions"
                        : category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service Cards List */}
            <div className="space-y-8">
              {filteredServices.map((service, index) => {
                const IconComp = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={service.id}
                    className="rounded-2xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
                  >
                    {/* Image Column (5 Cols) */}
                    <div
                      className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden group ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} - Pools By Elio Nashville`}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001838]/90 via-[#001838]/25 to-transparent" />

                      {/* Top Badges on Image */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00285c]/90 backdrop-blur-md text-cyan-300 border border-cyan-300/30 text-[11px] font-extrabold uppercase tracking-wider">
                          {service.badge}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/95 text-[#00285c] text-[11px] font-extrabold shadow-sm">
                          {service.category}
                        </span>
                      </div>

                      {/* Bottom Overlay Specs on Image */}
                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#001838]/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold">
                            Investment Tier
                          </div>
                          <div className="text-xs sm:text-sm font-extrabold">
                            {service.investment}
                          </div>
                        </div>
                        <div className="text-right border-l border-white/20 pl-3">
                          <div className="text-[10px] uppercase tracking-wider text-blue-200 font-bold">
                            Typical Build Window
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-cyan-200">
                            {service.timeline}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Column (7 Cols) */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-[#00509e] text-white flex items-center justify-center shrink-0 shadow-md">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#00509e]">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {service.description}
                        </p>

                        {/* 5 Engineering Highlights */}
                        <div className="pt-1">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                            Key Engineering &amp; Design Specifications:
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.highlights.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs sm:text-[13.5px] text-slate-700 leading-snug"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#00509e] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Deliverables Pills + Action Buttons */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {service.deliverables.map((deliv, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-blue-50 text-[#003870] border border-blue-200/60 text-[11px] font-bold"
                            >
                              {deliv}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00285c] hover:bg-[#0047a0] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                          >
                            <span>Explore {service.title}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>

                          <Link
                            href="/quote"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors"
                          >
                            <span>Get Quote</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. INTERACTIVE PROJECT SCOPE & INVESTMENT COMPARISON MATRIX
        ===================================================================== */}
        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-gradient-to-br from-[#001838] via-[#00285c] to-[#003b80] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-12 shadow-xl">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/10 border border-cyan-300/30 text-cyan-200 text-xs font-extrabold uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-cyan-300" />
                <span>Interactive Scope &amp; Investment Matrix</span>
              </span>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold tracking-tight">
                Compare Project Tiers &amp; Engineering Specifications
              </h2>
              <p className="text-blue-100/85 text-sm sm:text-base">
                Select a project profile below to inspect typical timelines, structural engineering standards, and included deliverables.
              </p>
            </div>

            {/* Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {comparisonMatrix.map((tier, idx) => {
                const isSelected = selectedComparisonIdx === idx;
                return (
                  <button
                    key={tier.title}
                    type="button"
                    onClick={() => setSelectedComparisonIdx(idx)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white text-[#00285c] border-white shadow-xl scale-[1.01]"
                        : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                    }`}
                  >
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-300 mb-1">
                      <span className={isSelected ? "text-[#00509e]" : "text-cyan-300"}>
                        Tier 0{idx + 1}
                      </span>
                    </div>
                    <div className="font-extrabold text-sm sm:text-base leading-snug">
                      {tier.title}
                    </div>
                    <div
                      className={`text-xs mt-1 font-semibold ${
                        isSelected ? "text-slate-600" : "text-blue-200"
                      }`}
                    >
                      {tier.startingPrice}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Comparison Detail Card */}
            {(() => {
              const activeTier = comparisonMatrix[selectedComparisonIdx];
              return (
                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-5">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                        {activeTier.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {activeTier.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#001433]/80 border border-white/15">
                        <div className="text-[10px] uppercase tracking-wider text-blue-200 font-bold">
                          Target Investment
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-cyan-300 mt-0.5">
                          {activeTier.startingPrice}
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#001433]/80 border border-white/15">
                        <div className="text-[10px] uppercase tracking-wider text-blue-200 font-bold">
                          Typical Build Window
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                          {activeTier.typicalTimeline}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.07] border border-white/15 space-y-1.5">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                        Structural Engineering Standard
                      </div>
                      <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                        {activeTier.shellEngineering}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.07] border border-white/15 space-y-1.5">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                        Ideal Property &amp; Client Fit
                      </div>
                      <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                        {activeTier.idealFor}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 text-slate-900 shadow-xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00509e]">
                          Turnkey Deliverables
                        </span>
                        <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          What Is Included In This Scope
                        </h4>
                      </div>
                      <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                    </div>

                    <ul className="space-y-3">
                      {activeTier.includedItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <Link
                        href={activeTier.ctaHref}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00285c] hover:bg-[#0047a0] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                      >
                        <span>{activeTier.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 hover:bg-blue-100 text-[#00285c] text-xs sm:text-sm font-extrabold transition-colors"
                      >
                        <span>Configure Custom 3D Quote &rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* =====================================================================
            4. 6-STAGE IN-HOUSE BUILD PROCESS
        ===================================================================== */}
        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-white border border-slate-200/80 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 shadow-sm">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#00509e] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>The Elio Engineering Standard</span>
              </span>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold text-slate-900 tracking-tight">
                How We Take Your Project From 3D Concept to First Swim
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Every stage is managed and executed by our family-owned Nashville construction crew for uncompromised quality control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {buildSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00509e]/40 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-[#00285c] text-cyan-300 font-black text-xs tracking-wider">
                        PHASE {item.step}
                      </span>
                      <Clock className="w-4 h-4 text-slate-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Founder-Supervised Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. RENOVATION, REMODEL & EMERGENCY REPAIR SPOTLIGHT
        ===================================================================== */}
        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-[#00285c] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-12 shadow-xl relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-400/20 border border-cyan-300/30 text-cyan-200 text-xs font-extrabold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5 text-cyan-300" />
                <span>Structural Remodeling &amp; Rapid Repair Dispatch</span>
              </div>

              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold tracking-tight leading-tight">
                Have an Existing Pool That Needs Structural Renovation or Equipment Repair?
              </h2>

              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                In addition to new construction, our master gunite and hydraulic technicians breathe new life into aging concrete pools across Middle Tennessee—from complete pebble resurfacing, travertine coping, and tile replacement to adding sun shelves, spillover spas, and smart automation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Complete Quartz & Pebble Interior Resurfacing",
                  "Waterline Tile & Travertine Coping Modernization",
                  "Adding Baja Sun Shelves, Spas & Swim-Up Bars",
                  "Pump, Heater, Salt & Smart Automation Retrofits",
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-bold"
                  >
                    <Flame className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/before-after"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#00285c] hover:bg-cyan-50 text-xs sm:text-sm font-extrabold shadow-lg transition-all"
                >
                  <span>View Before &amp; After Transformations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:6155683154"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs sm:text-sm font-bold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Dispatch: (615) 568-3154</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/assets/gallery/20.webp"
                  alt="Pools By Elio Luxury Pool Renovation and Remodeling in Nashville TN"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#001433]/90 backdrop-blur-md border border-white/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-extrabold text-cyan-300 uppercase">
                      45+ Verified Transformations
                    </div>
                    <div className="text-sm font-bold text-white">
                      Inspect Our Interactive Comparison Sliders
                    </div>
                  </div>
                  <Link
                    href="/before-after"
                    className="px-3.5 py-2 rounded-lg bg-[#00509e] hover:bg-[#0066cc] text-white text-xs font-bold shrink-0"
                  >
                    Open Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. SERVICES FAQ ACCORDION + FINAL CTA
        ===================================================================== */}
        <section className="mx-[10px] mb-[10px] rounded-[5px] bg-slate-50 border border-slate-200/80 py-12 sm:py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1100px] mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#004b93] text-xs font-extrabold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Services &amp; Engineering FAQ</span>
              </span>
              <h2 className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-extrabold text-slate-900">
                Frequently Asked Questions About Our Services
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-white border border-slate-200/90 shadow-xs overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                    >
                      <span className="font-extrabold text-sm sm:text-base text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#00509e] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-[#00285c] via-[#0047a0] to-[#00285c] text-white p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                  Ready To Start Your Project?
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Schedule Your On-Site Topography Survey &amp; 3D Design Consultation
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                  Speak directly with master builders Jonathan and David Elio Rodriguez at{" "}
                  <strong>(615) 568-3154</strong> or configure your project online.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#00285c] hover:bg-cyan-50 font-extrabold text-xs sm:text-sm shadow-lg transition-all"
                >
                  <span>Request 3D Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#001838]/70 hover:bg-[#001838] text-white border border-white/25 font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
