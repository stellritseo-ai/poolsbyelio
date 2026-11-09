"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
  ChevronDown,
  Building2,
  Layers,
  Award,
  Waves,
  Hammer,
  HelpCircle,
  ExternalLink,
  Flame,
  Check,
} from "lucide-react";

export default function AreasWeServePage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filterTabs = [
    "All",
    "Nashville / Davidson",
    "Franklin & Brentwood",
    "Lake & Surrounding",
    "Commercial Statewide",
  ];

  const communities = [
    {
      city: "Nashville, TN",
      county: "Davidson County",
      category: "Nashville / Davidson",
      image: "/assets/banner1.png",
      tag: "Metro Headquarters",
      lead: "From private urban sanctuaries in Belle Meade to commercial rooftop pool bars in downtown Nashville.",
      neighborhoods: [
        "Belle Meade",
        "Green Hills",
        "Forest Hills",
        "Oak Hill",
        "Downtown Nashville",
        "The Gulch",
        "East Nashville",
        "West End",
      ],
      specialties: [
        "Commercial venue pool bars & hospitality water features",
        "Gaylord Opryland Sound Waves lazy river commercial pedigree",
        "Compact urban plunge pools & modern geometric layouts",
        "Historic zoning compliance & Metro Nashville codes navigation",
      ],
    },
    {
      city: "Franklin, TN",
      county: "Williamson County",
      category: "Franklin & Brentwood",
      image: "/assets/gallery/20.webp",
      tag: "Luxury Acreage Estates",
      lead: "Sprawling private compounds, infinity edges spilling into rolling hills, and complete outdoor living retreats.",
      neighborhoods: [
        "Historic Downtown Franklin",
        "Leiper’s Fork",
        "Westhaven",
        "Berry Farms",
        "Laurelbrooke",
        "McKay’s Mill",
        "Fieldstone Farms",
      ],
      specialties: [
        "Multi-acre luxury estate pools with integrated spillover spas",
        "Custom swim-up bars, sunken fire lounges & cabanas",
        "Limestone bedrock excavation & hillside retaining structures",
        "Williamson County building codes & strict HOA approvals",
      ],
    },
    {
      city: "Brentwood, TN",
      county: "Williamson County",
      category: "Franklin & Brentwood",
      image: "/assets/gallery/22.webp",
      tag: "Premier Gated Enclaves",
      lead: "Architectural showpieces, perimeter overflows, automated fire bowls, and computerized smart water technology.",
      neighborhoods: [
        "Governors Club",
        "Annandale",
        "Windstone",
        "Hampton Reserve",
        "Brenthaven",
        "McGavock Farms",
        "Tuscany Hills",
      ],
      specialties: [
        "Vanishing infinity edge pools & perimeter overflow spas",
        "Automated all-season safety covers & saltwater purification",
        "Submerged in-pool bar seating & Baja tanning ledges",
        "City of Brentwood planning & tree conservation compliance",
      ],
    },
    {
      city: "Belle Meade & Forest Hills, TN",
      county: "Davidson County",
      category: "Nashville / Davidson",
      image: "/assets/gallery/23.webp",
      tag: "Historic & Classical",
      lead: "High-elegance architectural gunite pools crafted to mirror classical estate architecture and private gardens.",
      neighborhoods: [
        "Belle Meade Boulevard Corridor",
        "Page Road Estates",
        "Forest Hills Ridge",
        "Percy Warner Enclave",
      ],
      specialties: [
        "Hand-carved natural stone coping & custom fountains",
        "Deep garden reflection pools & secluded hydrotherapy spas",
        "Engineered drainage systems for heavy clay soil",
        "Discreet, rapid in-house construction management",
      ],
    },
    {
      city: "Hendersonville & Gallatin, TN",
      county: "Sumner County",
      category: "Lake & Surrounding",
      image: "/assets/gallery/24.webp",
      tag: "Lakefront & Scenic Bluffs",
      lead: "Spectacular tiered swimming pools positioned on bluffs overlooking Old Hickory Lake.",
      neighborhoods: [
        "Old Hickory Lakefront",
        "Bluegrass Downs",
        "Indian Lake Peninsula",
        "Fairvue Plantation (Gallatin)",
      ],
      specialties: [
        "Bluff and slope cantilever structural engineering",
        "Multi-level natural stone waterfalls & grottos",
        "Lakeside entertainment terraces & fire features",
        "Corps of Engineers shoreline setback compliance",
      ],
    },
    {
      city: "Mount Juliet & Lebanon, TN",
      county: "Wilson County",
      category: "Lake & Surrounding",
      image: "/assets/service1.png",
      tag: "Rapid Growth & Resort Living",
      lead: "Expansive family oasis pools with walk-in beach entries, slide grottos, and outdoor summer kitchens.",
      neighborhoods: [
        "Providence",
        "Belinda City",
        "Old Hickory Lake Bluffs",
        "Five Oaks (Lebanon)",
      ],
      specialties: [
        "Resort-style beach entry sunshelves with bubbler jets",
        "Custom poolside pergolas, fire pits & outdoor BBQ bars",
        "Energy-efficient Hayward variable-speed pump systems",
        "Turnkey permitting in Wilson County",
      ],
    },
    {
      city: "Murfreesboro & Smyrna, TN",
      county: "Rutherford County",
      category: "Lake & Surrounding",
      image: "/assets/service4.png",
      tag: "Residential & Community Builds",
      lead: "Custom residential gunite installations, neighborhood resort clubhouses, and full pool renovations.",
      neighborhoods: [
        "The Avenue Corridor",
        "Blackman",
        "Siegel",
        "Smyrna Lake Bluffs",
      ],
      specialties: [
        "Complete structural pool restorations & replastering",
        "Commercial subdivision aquatic centers",
        "Smart LED lighting packages & automated pool sanitizers",
        "Rutherford County code compliance",
      ],
    },
    {
      city: "Commercial & Industrial Projects",
      county: "Statewide Tennessee & Regional",
      category: "Commercial Statewide",
      image: "/assets/gallery/21.webp",
      tag: "Commercial & Resort Scale",
      lead: "We travel across Tennessee and the Southeast for large-scale commercial water parks, hotels, and municipal attractions.",
      neighborhoods: [
        "Downtown Nashville Hospitality Venues",
        "Gaylord Opryland Sound Waves Lazy River",
        "Hotel & Resort Pool Decks Statewide",
        "Municipal & Industrial Water Facilities",
      ],
      specialties: [
        "High-capacity commercial hydraulic & chemical systems",
        "Monolithic shotcrete water park engineering",
        "Full ADA accessibility compliance & zero-entry ramps",
        "Heavy industrial structural concrete construction",
      ],
    },
  ];

  const filteredCommunities =
    activeFilter === "All"
      ? communities
      : communities.filter((c) => c.category === activeFilter);

  const geoStandards = [
    {
      icon: Hammer,
      title: "Limestone Bedrock Excavation",
      desc: "Middle Tennessee is defined by dense subsurface limestone. Our in-house heavy machinery and precision hydraulic breakers excavate bedrock smoothly without jarring your home's foundation.",
    },
    {
      icon: ShieldCheck,
      title: "Monolithic Freeze-Thaw Gunite",
      desc: "Tennessee weather swings from humid 95°F summers to sub-freezing winters. Our pneumatically applied shotcrete shell with dense steel rebar grids flexes without hairline cracking.",
    },
    {
      icon: Layers,
      title: "Hillside & Ridge Retaining Engineering",
      desc: "Williamson and Davidson County topography often features steep grade drops. We engineer structural shotcrete retaining walls and bedrock piers that turn challenging slopes into dramatic infinity vistas.",
    },
    {
      icon: Waves,
      title: "Hydrostatic Groundwater Protection",
      desc: "Heavy spring rains create underground hydrostatic pressure in clay soils. We install gravel sub-floors and dual hydrostatic relief valves to prevent pool pop-up and structural fatigue.",
    },
  ];

  const faqs = [
    {
      q: "Do you service rural acreage properties in Williamson, Maury, or Wilson County?",
      a: "Yes! A significant portion of our work consists of multi-acre private estates in Franklin, Leiper's Fork, College Grove, and Mount Juliet. We have our own heavy transport equipment to access remote or gated private acreage.",
    },
    {
      q: "What happens if your team encounters solid limestone rock during excavation?",
      a: "As Middle Tennessee natives with over 25 years of experience, we expect limestone bedrock. Unlike other builders who stall and subcontract expensive outside blasting, we own and operate our own heavy hydraulic breakers and handle bedrock in-house at fair, transparent pricing.",
    },
    {
      q: "Do you handle HOA architectural approvals and city building permits?",
      a: "Yes, 100%. We handle the entire permitting lifecycle with the Metropolitan Government of Nashville, Williamson County, and the City of Brentwood. We also compile comprehensive HOA Architectural Review Committee (ARC) submission binders complete with 3D color site renderings and engineered stamped plans.",
    },
    {
      q: "Can you build an infinity pool on a steep hillside or lakefront bluff?",
      a: "Absolutely. Sloping lots are where our engineering truly shines. We design cantilevered shotcrete shells, grade-level retaining walls, and vanishing edges that make your pool appear suspended over Tennessee's hills or Old Hickory Lake.",
    },
    {
      q: "How quickly can Jonathan Elio Rodriguez visit my property for an on-site survey?",
      a: "We typically schedule on-site laser topography surveys within 24 to 48 hours of initial contact. Jonathan personally walks your yard, measures grade elevations, checks sun exposure, and discusses design concepts directly with you.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / AREAS WE SERVE
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#021838] text-white shadow-2xl"
        >
          {/* Background Visual */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/banner2.png"
              alt="Pools By Elio Middle Tennessee Service Area"
              fill
              priority
              unoptimized
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02122c]/95 via-[#03204c]/90 to-[#042d6b]/85" />
          </div>

          {/* Top Specular Rim Reflection */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent pointer-events-none z-10" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading & Narrative */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    Regional Service Corridor
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Where We Build Masterpieces
                </h1>

                <p className="text-cyan-300 text-base sm:text-xl font-bold tracking-tight">
                  Nashville • Franklin • Brentwood • And Surrounding Middle Tennessee
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[17px] leading-[1.8] font-normal max-w-3xl">
                  Based in Nashville, Tennessee, Pools by Elio brings over 25 years of master gunite pool craftsmanship
                  to premier residential estates, private compounds, and commercial landmarks. From the rolling hills of
                  Williamson County to the downtown Nashville skyline, our 100% in-house team engineers luxury aquatic
                  retreats tailored to Tennessee&apos;s unique topography and limestone bedrock.
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100 bg-white/[0.08] p-3 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>TN Licensed General Contractor • Insured &amp; Bonded</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100 bg-white/[0.08] p-3 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% In-House Builders (Zero Subcontractors)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100 bg-white/[0.08] p-3 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>On-Site Daily Direction by Jonathan Rodriguez</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100 bg-white/[0.08] p-3 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Turnkey Permitting &amp; HOA Approvals Managed</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Request On-Site Site Survey</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:6155683154"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 text-cyan-300" />
                    <span>(615) 568-3154</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch Bento */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl p-6 bg-gradient-to-b from-[#003882] via-[#002b66] to-[#001f4d] border border-white/20 shadow-2xl space-y-4 text-white">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                      Regional Dispatch Hub
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-400/30">
                      Active In Middle TN
                    </span>
                  </div>

                  <div className="space-y-3.5 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-blue-200">Headquarters</div>
                        <div className="font-bold text-white">412 Ezell Pike, Nashville, TN 37217</div>
                        <div className="text-xs text-cyan-200 mt-0.5">Serving Davidson, Williamson &amp; surrounding</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Compass className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-blue-200">Residential Coverage Radius</div>
                        <div className="font-bold text-white">60+ Mile Immediate Service Radius</div>
                        <div className="text-xs text-cyan-200 mt-0.5">Statewide for Commercial &amp; Industrial</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-blue-200">On-Site Survey Turnaround</div>
                        <div className="font-bold text-white">24 – 48 Hours for Site Visits</div>
                        <div className="text-xs text-cyan-200 mt-0.5">Saturday Appointments Available</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/15">
                    <div className="text-xs text-blue-100/90 leading-relaxed">
                      &quot;Don&apos;t see your municipality? Contact us anyway — we travel throughout Tennessee for quality projects.&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: COMMUNITY SHOWCASES & FILTERABLE COVERAGE GRID
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/60 border border-slate-200/80 shadow-sm"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#002d72] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                <span>LOCAL COMMUNITIES WE CRAFT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Middle Tennessee Cities &amp; Neighborhoods
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Discover how our in-house master team builds custom luxury pools tailored to the architecture and terrain of your specific community.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 pt-3">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeFilter === tab
                        ? "bg-[#002d72] text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Communities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCommunities.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Image Header */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={`Pools by Elio in ${item.city}`}
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#002d72]/90 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-4 right-4">
                      <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                        {item.county}
                      </div>
                      <h3 className="text-2xl font-extrabold text-white leading-tight">
                        {item.city}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-4">
                      <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                        {item.lead}
                      </p>

                      {/* Neighborhoods */}
                      <div>
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#0055a5]" />
                          <span>Key Neighborhoods &amp; Enclaves:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.neighborhoods.map((n, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                            >
                              {n}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specialties */}
                      <div>
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#0055a5]" />
                          <span>Local Construction Specialties:</span>
                        </div>
                        <ul className="space-y-1.5">
                          {item.specialties.map((spec, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA Strip */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0055a5]">
                        100% In-House Master Crews
                      </span>
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#002d72] hover:text-[#0055a5] transition-colors"
                      >
                        <span>Request {item.city} Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: INTERACTIVE GOOGLE MAP & DISPATCH CENTER
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#00285c] text-white shadow-2xl"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Dispatch Hub */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#006cb8] text-white text-xs font-bold tracking-widest uppercase">
                  <span>CENTRAL DISPATCH</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Based in Nashville. Building Across Tennessee.
                </h2>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  Our central facilities on Ezell Pike in Nashville house our heavy excavation machinery, concrete trucks,
                  and gunite rigs. Having our equipment and crews based locally means zero third-party mobilization delays.
                </p>

                <div className="space-y-3.5 text-sm">
                  <div className="p-4 rounded-xl bg-white/[0.08] border border-white/15 space-y-1">
                    <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold">
                      Main Office &amp; Operations
                    </div>
                    <div className="font-bold text-white text-base">
                      412 Ezell Pike, Nashville, TN 37217
                    </div>
                    <a
                      href="https://maps.google.com/?q=412+Ezell+Pike,+Nashville,+TN+37217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:underline pt-1"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.08] border border-white/15 space-y-1">
                    <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold">
                      Direct Builder Contact
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <a href="tel:6155683154" className="font-extrabold text-white hover:text-cyan-300">
                        (615) 568-3154 <span className="text-xs font-normal text-blue-200">(Office &amp; Dispatch)</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-lg transition-all"
                  >
                    <span>Contact Our Dispatch Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Google Maps Embed */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 relative">
                  <div className="p-3.5 bg-slate-950 text-white flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold tracking-wide">
                        Nashville Metropolitan Coverage Corridor
                      </span>
                    </div>
                    <span className="text-[11px] text-cyan-300 font-semibold">Live Service Area</span>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412182.3223460992!2d-86.78514695!3d36.186640350000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2snp!4v1793924341147!5m2!1sen!2snp"
                    width="100%"
                    height="440"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Pools by Elio Middle Tennessee Service Area"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: TENNESSEE GEOTECHNICAL & TOPOGRAPHY MASTERY
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
            backgroundImage: "url('/assets/whybg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden text-white shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#003da5]/92 via-[#002674]/88 to-[#0a113a]/92 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent pointer-events-none" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                <span>GEOTECHNICAL MASTERY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Built For Tennessee Limestone &amp; Terrain
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Building a luxury pool in Middle Tennessee requires specialized engineering. Here is how we ensure your pool lasts over 50 years without shifting or cracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {geoStandards.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.09] hover:bg-white/[0.14] border border-white/15 hover:border-cyan-300/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-300/40 text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/15 text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>100% In-House Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: LOCAL PERMITTING & HOA LEADERSHIP
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-[#002b66] via-[#003d82] to-[#002b66] text-white shadow-xl"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Turnkey Regulatory Navigation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Zero Headaches With Metro Permits &amp; HOA Boards
                </h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  We handle every structural engineering review, plot survey, setback variance, and HOA architectural binder
                  across Davidson and Williamson Counties. Our turnkey process ensures your project moves forward smoothly without delays.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#002b66] bg-white hover:bg-cyan-50 shadow-xl transition-all"
                >
                  <span>Start Your Permitted Build</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: FREQUENTLY ASKED QUESTIONS
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/60 border border-slate-200/80 shadow-sm"
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#002d72] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-300" />
                <span>LOCAL HOMEOWNER QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Frequently Asked Questions for Middle Tennessee
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Everything you need to know about our regional service corridor, lot surveys, and limestone excavation.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-[#0f172a]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0055a5] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-700 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7: BOTTOM CTA BANNER
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#001433] text-white shadow-2xl border border-blue-950"
        >
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase">
              <span>SCHEDULE WITH JONATHAN RODRIGUEZ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Ready to Build Your Middle Tennessee Oasis?
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
              Contact Pools by Elio today. Jonathan Rodriguez personally reviews your property elevation and prepares your customized 3D design proposal.
            </p>

            <div className="max-w-2xl mx-auto p-4 rounded-xl bg-white/[0.08] border border-white/15 text-xs sm:text-sm text-cyan-200 space-y-1">
              <div>
                <strong>Pools by Elio</strong> – Nashville, Tennessee
              </div>
              <div className="text-blue-200">
                412 Ezell Pike, Nashville, TN 37217 • Hours: Mon-Fri 9am-5pm | Sat by appointment | Sun Closed
              </div>
              <div>
                Email: <a href="mailto:eliocustompools@live.com" className="underline">eliocustompools@live.com</a> | Phone: <a href="tel:6155683154" className="underline">(615) 568-3154</a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:6155683154"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base sm:text-lg font-extrabold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-white text-white" />
                <span>Call (615) 568-3154</span>
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-[#001433] bg-white hover:bg-cyan-50 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request Free 3D Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Contact */}
      <FloatingContact />
    </div>
  );
}

