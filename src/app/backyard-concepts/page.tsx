"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
  Home,
  Wine,
  Utensils,
  Sun,
  Layers,
  ChefHat,
  Tv,
  Speaker,
  Wind,
  Droplets,
  Calendar,
  Building2,
  Check,
  Star,
  Compass,
} from "lucide-react";

export default function BackyardConceptsPage() {
  const [activeConceptTab, setActiveConceptTab] = useState<number>(0);

  // 7 Core Backyard Living Disciplines
  const backyardConcepts = [
    {
      id: "pool-houses",
      title: "Custom Pool Houses",
      tagline: "Function Meets Architectural Style",
      categoryBadge: "Living & Retreat",
      icon: Home,
      image: "/assets/service6.png",
      description:
        "A pool house is more than a shed. It’s a changing room, a guest suite, a home gym, an art studio, or a private retreat. We design and build custom pool houses that match your home’s architecture and complement your pool seamlessly.",
      features: [
        {
          name: "Changing Rooms & Full Bathrooms",
          detail: "Keep wet feet and towels out of the main house with designer powder rooms, tiled showers, and laundry hooks.",
        },
        {
          name: "Outdoor Showers & Rinses",
          detail: "Post-swim open-air hot/cold rainfall showers built with Tennessee river rock, cedar slats, and solid brass fixtures.",
        },
        {
          name: "Kitchenettes & Wet Bars",
          detail: "Under-counter refrigerators, granite prep counters, wine coolers, and cocktail sinks for effortless hospitality.",
        },
        {
          name: "Guest Sleeping Quarters & Casitas",
          detail: "Comfortable overnight accommodations with Murphy beds or lofts for visiting relatives, teens, or weekend guests.",
        },
        {
          name: "Dedicated Pool Equipment & Toy Storage",
          detail: "Concealed, sound-insulated and ventilated utility rooms that keep pumps, cleaners, and floats organized and out of sight.",
        },
        {
          name: "Covered Patios & Shaded Pergolas",
          detail: "Architectural overhangs that bridge indoor living with pool deck lounging, shaded from midday Tennessee sun.",
        },
        {
          name: "Full HVAC for 365-Day Year-Round Use",
          detail: "Ductless mini-split heating and cooling systems ensuring comfortable temperatures whether it is July heat or January snow.",
        },
      ],
    },
    {
      id: "pool-bars",
      title: "Pool Bars",
      tagline: "Built by the Guys Who Built Downtown Nashville",
      categoryBadge: "Entertainment & Nightlife",
      icon: Wine,
      image: "/assets/whybg.png",
      description:
        "We’ve built bars in downtown Nashville — busy, high-volume, built to last. Now we bring that same commercial-quality craftsmanship to your backyard pool bar. Whether you want a simple swim-up bar, a tiki hut, or a full outdoor kitchen with seating, we design it, build it, and finish it.",
      features: [
        {
          name: "Swim-Up Bars (In-Pool Seating)",
          detail: "Submerged ergonomic bar stools crafted with quartz/tile finishes and a radiused bar top for cocktails without leaving the water.",
        },
        {
          name: "Walk-Up Poolside Bars",
          detail: "Dry-side elevated service counters with footrests, heavy stone facades, and bar-height stools overlooking the pool.",
        },
        {
          name: "Tiki Huts & Island Cabanas",
          detail: "Natural thatch or synthetic hurricane-rated roof structures offering authentic tropical resort ambience in Tennessee.",
        },
        {
          name: "Integrated Outdoor Kitchens with Seating",
          detail: "Wrap-around granite or concrete dining peninsulas that integrate chef prep zones with guest conversation spaces.",
        },
        {
          name: "Bar Seating with Counter Overhang",
          detail: "Cantilevered stone bar tops with warm under-counter LED light strips comfortably seating 6 to 12 guests.",
        },
        {
          name: "Built-In Coolers & Draft Kegerators",
          detail: "Commercial-grade 304 stainless steel draft beer taps, ice bins, beverage troughs, and lockable refrigerated coolers.",
        },
      ],
    },
    {
      id: "fire-pits",
      title: "Fire Pits",
      tagline: "Gather, Relax, Stay Warm",
      categoryBadge: "Warmth & Ambiance",
      icon: Flame,
      image: "/assets/gallery/23.webp",
      description:
        "A fire pit turns any evening into an event. From simple wood-burning pits to gas-powered fire tables and custom stone fire bowls — we build fire features that become the natural gathering spot for family and friends.",
      features: [
        {
          name: "Wood-Burning Fire Pits",
          detail: "Authentic campfire aromas, crackling hardwood warmth, and deep refractory firebrick basins built with Tennessee limestone.",
        },
        {
          name: "Gas Fire Pits (Propane or Natural Gas)",
          detail: "Instant push-button ignition with smartphone automation, zero smoke, and glowing lava rock or tempered reflective glass.",
        },
        {
          name: "Fire Tables (Dining & Lounge)",
          detail: "Replaces traditional patio tables with wide perimeter ledge for drinks and plates around a glowing central linear flame trench.",
        },
        {
          name: "Stone & Brick Custom Fire Bowls",
          detail: "Handcrafted round, square, or conical masonry bowls that elevate flames onto pool copings or raised deck tiers.",
        },
        {
          name: "Portable vs. Permanent Installations",
          detail: "Architectural monolithic hardscape fixtures plumbed into underground gas lines or flexible modular designs.",
        },
        {
          name: "Integrated Seating Walls",
          detail: "Curved stone retaining benches with bullnose coping matching the fire pit and pool coping, accommodating large groups.",
        },
      ],
    },
    {
      id: "fireplaces",
      title: "Outdoor Fireplaces",
      tagline: "Four Seasons of Comfort & Architectural Drama",
      categoryBadge: "Four-Season Luxury",
      icon: Flame,
      image: "/assets/banner4.jpg",
      description:
        "An outdoor fireplace adds drama, warmth, and structure to your backyard. Perfect for extending your pool season into cooler months. We build masonry fireplaces, stone fireplaces, and modern linear gas fireplaces — all designed to last.",
      features: [
        {
          name: "Traditional Masonry Fireplaces",
          detail: "Full-height brick and masonry block chimney structures with custom mantels, wood storage alcoves, and arched fireboxes.",
        },
        {
          name: "Stone & Flagstone Finishes",
          detail: "Authentic Tennessee fieldstone, stacked ledger stone, or dry-stacked limestone tailored to match your home's exterior.",
        },
        {
          name: "Modern Linear Gas Fireplaces",
          detail: "Contemporary horizontal flame spans from 48 to 96 inches with brushed stainless trim and programmable LED backlighting.",
        },
        {
          name: "Double-Sided Fireplaces",
          detail: "Shared between a covered patio lounge and the poolside deck, providing dual-facing warmth and visual transparency.",
        },
        {
          name: "Wood-Burning or Gas-Start Options",
          detail: "Enjoy the authentic wood fire experience with the effortless convenience of an electronic gas log starter line.",
        },
      ],
    },
    {
      id: "outdoor-kitchens",
      title: "Outdoor Kitchens",
      tagline: "Cook, Entertain, Impress",
      categoryBadge: "Culinary & Dining",
      icon: Utensils,
      image: "/assets/banner5.jpg",
      description:
        "Take your backyard entertaining to the next level with a fully equipped outdoor kitchen. We design layouts that flow naturally from pool to bar to grill to dining.",
      features: [
        {
          name: "Built-In Gas & Infrared Grills",
          detail: "Commercial-grade stainless steel multi-burner grills from Twin Eagles, Blaze, and Lynx with rotisserie and searing stations.",
        },
        {
          name: "Artisan Pizza Ovens",
          detail: "Wood-fired and dual-fuel refractory dome ovens reaching 900°F for authentic Neapolitan pizzas, roasted meats, and crusty breads.",
        },
        {
          name: "Power Side Burners & Flat-Top Griddles",
          detail: "High-BTU wok burners for low-country boils plus commercial flat-top griddles for breakfast, fajitas, and smashburgers.",
        },
        {
          name: "Outdoor Refrigerators & Ice Makers",
          detail: "UL-rated outdoor undercounter refrigerators, drop-in beverage chillers, and clear-cube commercial ice machines.",
        },
        {
          name: "Stainless Sinks with Running Water",
          detail: "Deep undermount prep sinks with hot/cold pull-down gooseneck faucets and integrated waste disposals.",
        },
        {
          name: "Bar Seating & Al-Fresco Dining Areas",
          detail: "Custom pergolas sheltering long dining tables, mood pendant lighting, and seamless transit between grill and table.",
        },
        {
          name: "Weatherproof Cabinetry & Countertops",
          detail: "Marine-grade polymer or welded stainless storage drawers paired with non-porous granite, quartz, or leathered quartzite counters.",
        },
      ],
    },
    {
      id: "cabanas-pergolas",
      title: "Cabanas & Pergolas",
      tagline: "Shade, Style, Comfort",
      categoryBadge: "Shade & Architecture",
      icon: Sun,
      image: "/assets/gallery/20.webp",
      description:
        "Cabanas and pergolas provide essential shade and structure. Whether you want a fabric-topped pergola for dappled light or a solid-roof cabana with ceiling fans and curtains — we build it.",
      features: [
        {
          name: "Freestanding Architectural Pergolas",
          detail: "Crafted from heavy Western Red Cedar, extruded powder-coated aluminum, or engineered low-maintenance composite.",
        },
        {
          name: "Solid-Roof Attached Pool Cabanas",
          detail: "Permanent shingled or standing-seam metal roofs that shield poolside seating from direct midday sun and passing rain showers.",
        },
        {
          name: "Ceiling Fans, Lighting & Speakers",
          detail: "Marine-grade outdoor ceiling fans, recessed LED downlights, and concealed Bluetooth sound systems engineered for outdoor acoustics.",
        },
        {
          name: "Motorized Retractable Shade Screens",
          detail: "Zipper-track sun and insect screens that deploy smoothly via wall switch or smartphone app to seal your cabana at dusk.",
        },
        {
          name: "Outdoor Privacy Curtains",
          detail: "Fade-resistant Sunbrella fabric drapes that slide easily to create intimate cabana privacy or block low-angle setting sun.",
        },
      ],
    },
    {
      id: "decks-patios",
      title: "Decks, Patios & Flow",
      tagline: "The Spaces Between – Connecting Your Entire Retreat",
      categoryBadge: "Hardscaping & Transit",
      icon: Layers,
      image: "/assets/banner1.png",
      description:
        "We don’t just build structures — we design the flow between them. Patios, decks, walkways, and lounge areas connect your pool, spa, pool house, bar, and fire pit into one seamless outdoor living space.",
      features: [
        {
          name: "Travertine, Flagstone & Pavers",
          detail: "Honed French-pattern Turkish travertine, Tennessee crab orchard flagstone, and interlocking permeable architectural pavers.",
        },
        {
          name: "Cool-Deck Specialized Finishes",
          detail: "Textured acrylic toppings and thermal-dissipating natural stone that remain comfortable and safe for bare feet in peak August heat.",
        },
        {
          name: "Natural Stone & Artisanal Brick Accents",
          detail: "Hand-chiseled coping, contrasting soldier course borders, and decorative mosaic inlays that outline living zones.",
        },
        {
          name: "Raised Decks & Multi-Level Terraces",
          detail: "Stepped outdoor rooms that follow your property’s natural hillside contours, establishing distinct dining, sunbathing, and fire zones.",
        },
        {
          name: "Integrated Subsurface Drainage Solutions",
          detail: "Concealed deck channel drains, french drains, and slope grading that prevent standing water and redirect storm runoff away from pools.",
        },
      ],
    },
  ];

  const currentConcept = backyardConcepts[activeConceptTab];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / MORE THAN A POOL – A LIFESTYLE
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[72px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#021838] text-white shadow-2xl"
        >
          {/* Background Visual Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/whybg.png"
              alt="Pools By Elio Custom Backyard Concepts, Pool Houses & Bars"
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
              {/* Left Column: Heading, Subtitle & Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    Backyard Concepts
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  More Than a Pool – A Lifestyle
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  Backyard Concepts – Pool Houses, Bars, Fire Pits & More
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  A swimming pool is the centerpiece. But the magic happens around it. At Pools by Elio, we design and build complete backyard environments — including pool houses, outdoor bars, fire pits, fireplaces, kitchens, and lounge areas.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  We take the same commercial-grade expertise we used to build bars in downtown Nashville and the lazy river at Gaylord Opryland’s Sound Waves and apply it to your residential backyard. Jonathan Elio Rodriguez is hands-on with every project. Everything is done in-house — no subcontractors. That means seamless integration between your pool, spa, water features, and backyard structures.
                </p>

                {/* Highlight Quote */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 text-white shadow-md">
                  <p className="text-sm sm:text-[16px] font-semibold italic text-cyan-200 leading-relaxed">
                    “We built bars in downtown Nashville. Now we can build one in your backyard.”
                  </p>
                </blockquote>

                {/* Action Row */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                    <span>Request Free 3D Estimate</span>
                  </Link>

                  <a
                    href="tel:6155683154"
                    className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-white font-semibold py-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call (615) 568-3154</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Feature Showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-400/30 bg-blue-950/60 p-3">
                  <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden">
                    <Image
                      src="/assets/service6.png"
                      alt="Luxury Backyard Concepts by Pools by Elio"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                      <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
                        <Wine className="w-3.5 h-3.5 text-amber-400" />
                        <span>Master Backyard Living Architecture</span>
                      </div>
                      <p className="text-xs sm:text-sm text-blue-100 font-medium">
                        Pool houses, swim-up bars, stone fire pits, outdoor chef kitchens & multi-level travertine patios built 100% in-house.
                      </p>
                    </div>
                  </div>

                  {/* 4 Feature Badges */}
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-semibold text-blue-100">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Zero Subcontractors</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Nashville Bar Craft</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Sound Waves Pedigree</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Jonathan Elio Hands-On</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: INTERACTIVE 7-PILLAR SELECTOR
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-slate-50 border border-slate-200 shadow-md"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
                Complete Outdoor Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore Our Complete Backyard Living Solutions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Click any discipline below to view options, custom architectural features, and craftsmanship standards.
              </p>
            </div>

            {/* Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {backyardConcepts.map((item, idx) => {
                const IconComponent = item.icon;
                const isSelected = activeConceptTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveConceptTab(idx)}
                    type="button"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                      isSelected
                        ? "bg-[#071684] text-white border-[#071684] shadow-lg scale-105"
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isSelected ? "text-cyan-300" : "text-[#0055a5]"}`} />
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Discipline Spotlight Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual */}
                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md border border-slate-100">
                    <Image
                      src={currentConcept.image}
                      alt={currentConcept.title}
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-[#071684] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {currentConcept.categoryBadge}
                    </div>
                  </div>
                </div>

                {/* Details & Feature List */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055a5] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{currentConcept.tagline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {currentConcept.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {currentConcept.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included Custom Engineering & Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentConcept.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0055a5] shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-slate-900">
                                {feat.name}
                              </p>
                              <p className="text-[11.5px] text-slate-500 mt-0.5 leading-snug">
                                {feat.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0055a5] hover:bg-[#004488] shadow transition-colors"
                    >
                      <span>Consult With Jonathan Elio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <span>Price in 3D Estimator</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: CUSTOM POOL HOUSES – FUNCTION MEETS STYLE
           ===================================================================== */}
        <section
          id="pool-houses"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-white shadow-md border border-slate-200/80"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block">
                  Dedicated Living Spaces
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Custom Pool Houses – Function Meets Style
                </h2>
                <p className="text-lg font-bold text-[#0055a5]">
                  A pool house is more than a shed. It’s a complete lifestyle sanctuary.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  A pool house is more than a shed. It’s a changing room, a guest suite, a home gym, an art studio, or a private retreat. We design and build custom pool houses that match your home’s architecture and complement your pool.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Every foundation, timber frame, roof line, and plumbing fixture is handled directly by our in-house team. No waiting on detached sub-crews. You receive a structure engineered to Tennessee building codes with commercial-grade durability.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/assets/service6.png"
                    alt="Custom Pool House by Pools By Elio"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-cyan-300 font-bold">In-House Build Standard</p>
                    <p className="text-sm font-semibold">Matched exterior brick, siding, roof pitch, and architectural trim.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7 Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[
                {
                  title: "Changing Rooms & Bathrooms",
                  desc: "Keep indoor floors dry with luxury full powder rooms, tiled showers, vanities, and towel warming racks.",
                  icon: Home,
                },
                {
                  title: "Outdoor Showers",
                  desc: "Rinse chlorine or sunblock in style with natural stone walled showers, rain shower heads, and warm water.",
                  icon: Droplets,
                },
                {
                  title: "Kitchenettes & Wet Bars",
                  desc: "Full wet bars with quartz counters, sinks, under-counter ice makers, wine chillers, and glass cabinetry.",
                  icon: Wine,
                },
                {
                  title: "Guest Sleeping Quarters",
                  desc: "Multi-functional suites with Murphy beds or lofts to host visiting family, friends, or poolside sleepovers.",
                  icon: Building2,
                },
                {
                  title: "Storage for Pool Equipment & Toys",
                  desc: "Dedicated concealed bays for filtration systems, automated pool cleaners, cushions, floats, and toys.",
                  icon: ShieldCheck,
                },
                {
                  title: "Covered Patios & Pergolas",
                  desc: "Integrated overhangs that extend covered seating out over the pool deck for cool afternoon shade.",
                  icon: Sun,
                },
                {
                  title: "HVAC for Year-Round Use",
                  desc: "Quiet ductless mini-split climate systems so you can enjoy your pool house all four seasons in comfort.",
                  icon: Wind,
                },
                {
                  title: "Home Gyms & Studios",
                  desc: "Transform your pool house into a tranquil yoga studio, strength gym, or creative art haven overlooking water.",
                  icon: Sparkles,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all duration-200 group shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 group-hover:bg-[#0055a5] flex items-center justify-center text-[#0055a5] group-hover:text-white transition-colors mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: POOL BARS – BUILT BY THE GUYS WHO BUILT DOWNTOWN NASHVILLE
           ===================================================================== */}
        <section
          id="pool-bars"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#001736] text-white shadow-2xl"
        >
          {/* Background image & gradient */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/assets/whybg.png"
              alt="Pool Bars by Pools By Elio"
              fill
              unoptimized
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#001736]/90" />
          </div>

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4 mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300 bg-cyan-900/50 border border-cyan-400/30 px-4 py-1.5 rounded-full inline-block">
                Commercial Pedigree
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Pool Bars – Built by the Guys Who Built Downtown Nashville
              </h2>
              <p className="text-lg font-bold text-cyan-300">
                Commercial-Quality Craftsmanship in Your Backyard
              </p>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                We’ve built bars in downtown Nashville — busy, high-volume, built to last. Now we bring that same commercial-quality craftsmanship to your backyard pool bar. Whether you want a simple swim-up bar, a tiki hut, or a full outdoor kitchen with seating, we design it, build it, and finish it.
              </p>
            </div>

            {/* 6 Pool Bar Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Swim-Up Bars (In-Pool Seating)",
                  desc: "Submerged ergonomic stools positioned inside the pool with a stone or quartz bar top flush with pool coping. Enjoy refreshments without stepping foot on dry land.",
                  badge: "Resort Favorite",
                  details: ["Submerged tiled or quartz barstools", "Flush coping-level beverage ledge", "In-pool underwater LED foot lighting"],
                },
                {
                  title: "Walk-Up Poolside Bars",
                  desc: "Raised service counter on the pool deck designed for seamless conversation between standing bar guests and bathers in the water.",
                  badge: "Deck Social",
                  details: ["Elevated service bar height (42 inches)", "Heavy granite or poured concrete slab tops", "Integrated brass or steel foot rails"],
                },
                {
                  title: "Tiki Huts & Cabana Bars",
                  desc: "Bring the Florida Keys and Caribbean resort vibe to Middle Tennessee with heavy timber posts, bamboo thatch, and island lighting.",
                  badge: "Tropical Escape",
                  details: ["Authentic or synthetic weather-sealed thatch", "Cypress and cedar architectural posts", "Hanging bamboo woven pendant lamps"],
                },
                {
                  title: "Outdoor Kitchens with Seating",
                  desc: "Full food and cocktail prep centers combining gas burners, griddles, refrigerators, and wrapped bar-height dining peninsulas.",
                  badge: "Culinary & Drinks",
                  details: ["Direct grill-to-plate counter design", "Under-counter trash and prep stations", "Ample seating for 6 to 10 guests"],
                },
                {
                  title: "Bar Seating with Counter Overhang",
                  desc: "Generous 14-to-18-inch stone cantilevers supported by welded steel brackets, giving guests ample legroom for relaxed dining and cocktail sipping.",
                  badge: "Ergonomic Comfort",
                  details: ["Reinforced cantilevered stone slabs", "Concealed LED strip illumination below overhang", "Accommodates standard 30” outdoor stools"],
                },
                {
                  title: "Built-In Coolers & Kegerators",
                  desc: "Keep local Nashville craft beer cold and on tap with insulated drop-in ice bins, dual draft towers, and outdoor marine kegerators.",
                  badge: "Cold On Tap",
                  details: ["Dual-faucet stainless draft beer towers", "Direct drain under-counter ice bins", "Lockable weather-sealed chillers"],
                },
              ].map((bar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white/[0.07] border border-cyan-400/20 hover:border-cyan-300/50 hover:bg-white/[0.12] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-400/30">
                        {bar.badge}
                      </span>
                      <Wine className="w-5 h-5 text-amber-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {bar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                      {bar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {bar.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-cyan-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pedigree Callout Banner */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 to-cyan-950/60 border border-cyan-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Commercial Grade 304 Stainless Steel & Outdoor Plumbing</h4>
                  <p className="text-xs text-blue-200">We use the exact commercial equipment, high-flow drains, and marine electrical systems that we install in downtown Nashville venues.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-cyan-300 hover:bg-cyan-200 transition-colors shrink-0"
              >
                <span>Plan Your Bar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: FIRE PITS – GATHER, RELAX, STAY WARM
           ===================================================================== */}
        <section
          id="fire-pits"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-white shadow-md border border-slate-200/80"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block">
                  Evening Warmth & S&apos;mores
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Fire Pits – Gather, Relax, Stay Warm
                </h2>
                <p className="text-lg font-bold text-[#0055a5]">
                  Turn Any Evening into an Event
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  A fire pit turns any evening into an event. From simple wood-burning pits to gas-powered fire tables and custom stone fire bowls — we build fire features that become the natural gathering spot for family and friends.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Whether located adjacent to your pool shallow end, perched above a waterfall grotto, or set in a private garden courtyard, our fire pits feature thick firebrick linings, safety shutoff valves, and Tennessee natural stone facing.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/assets/gallery/23.webp"
                    alt="Custom Poolside Fire Pit by Pools By Elio"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                      <Flame className="w-4 h-4" />
                      <span>Instant Ambience</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold">
                      Custom gas ignition and wood-burning masonry pits built right beside poolside water features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fire Pit Styles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Wood-Burning Fire Pits",
                  desc: "Classic timber warmth with authentic wood smoke, crackling sounds, and heavy-duty steel fire rings encased in natural Tennessee limestone.",
                  badge: "Traditional Campfire",
                },
                {
                  title: "Gas Fire Pits (Propane or Natural Gas)",
                  desc: "Clean-burning instant ignition connected to your home’s gas line or concealed tank. No soot, no sparks, and instant temperature control.",
                  badge: "Push-Button Convenience",
                },
                {
                  title: "Fire Tables (Dining & Lounge)",
                  desc: "A wide, functional stone or quartz tabletop perimeter allowing you to rest drinks and plates comfortably around a glowing central flame ribbon.",
                  badge: "Tabletop Entertaining",
                },
                {
                  title: "Stone & Brick Custom Fire Bowls",
                  desc: "Artisan sculpted round, square, or bowl features perched atop pool walls, creating a stunning visual contrast of fire directly beside falling water.",
                  badge: "Architectural Accents",
                },
                {
                  title: "Portable vs. Permanent Installations",
                  desc: "Choose between massive, permanent hardscape monuments built to last decades, or flexible installations designed for changing outdoor layouts.",
                  badge: "Flexible Engineering",
                },
                {
                  title: "Seating Walls Integrated with Fire Pits",
                  desc: "Continuous curved stone masonry retaining walls with smooth bullnose coping that provide abundant built-in seating for large gatherings.",
                  badge: "Social Capacity",
                },
              ].map((style, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-200 group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                        {style.badge}
                      </span>
                      <Flame className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {style.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {style.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: OUTDOOR FIREPLACES – FOUR SEASONS OF COMFORT
           ===================================================================== */}
        <section
          id="fireplaces"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-slate-900 text-white shadow-2xl"
        >
          {/* Background image & gradient */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/assets/banner4.jpg"
              alt="Outdoor Fireplace by Pools By Elio"
              fill
              unoptimized
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/95" />
          </div>

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4 mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-950/60 border border-amber-400/30 px-4 py-1.5 rounded-full inline-block">
                All-Season Architectural Warmth
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Outdoor Fireplaces – Four Seasons of Comfort
              </h2>
              <p className="text-lg font-bold text-amber-300">
                Drama, Warmth, and Structure for Your Outdoor Sanctuary
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                An outdoor fireplace adds drama, warmth, and structure to your backyard. Perfect for extending your pool season into cooler months. We build masonry fireplaces, stone fireplaces, and modern linear gas fireplaces — all designed to last.
              </p>
            </div>

            {/* 5 Fireplace Options Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {[
                {
                  title: "Traditional Masonry",
                  desc: "Handcrafted brick and heavy block construction featuring authentic arched fireboxes and structural chimneys that draw smoke cleanly upward.",
                  tag: "Timeless Craft",
                },
                {
                  title: "Stone & Flagstone",
                  desc: "Tennessee dry-stack limestone, Crab Orchard stone, and river boulder veneer that integrates naturally with pool rock features.",
                  tag: "Natural Quarry",
                },
                {
                  title: "Modern Linear Gas",
                  desc: "Sleek horizontal flames stretching up to 8 feet wide with tempered reflective glass, crushed crystals, and stainless steel trim.",
                  tag: "Contemporary",
                },
                {
                  title: "Double-Sided Fireplaces",
                  desc: "Positioned between a covered dining patio and open pool deck, delivering radiant warmth and visible flames to both spaces at once.",
                  tag: "Dual-Zone Heat",
                },
                {
                  title: "Wood-Burning or Gas-Start",
                  desc: "Get the best of both worlds: authentic hardwood flame logs with an automated gas burner pipe for instant 10-second lighting.",
                  tag: "Convenience",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.1] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-900/40 px-2.5 py-1 rounded-md inline-block mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Engineered for TN Winters</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Note */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                All fireplaces include proper flue sizing, spark arrestor caps, hearth extensions, and are fully compliant with local Tennessee fire codes.
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7: OUTDOOR KITCHENS – COOK, ENTERTAIN, IMPRESS
           ===================================================================== */}
        <section
          id="outdoor-kitchens"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-white shadow-md border border-slate-200/80"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block">
                  Al-Fresco Gourmet Dining
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Cook, Entertain, Impress
                </h2>
                <p className="text-lg font-bold text-[#0055a5]">
                  Full-Scale Outdoor Kitchens Built for Master Hospitality
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Take your backyard entertaining to the next level with a fully equipped outdoor kitchen. We design layouts that flow naturally from pool to bar to grill to dining.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  No running back and forth to your indoor kitchen for utensils, drinks, or spices. Everything is at the chef’s fingertips — shielded beneath covered structures with commercial ventilation and waterproof utility systems.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/assets/banner5.jpg"
                    alt="Outdoor Kitchen Built by Pools By Elio"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-cyan-300 font-bold">Ergonomic Workflow</p>
                    <p className="text-sm font-semibold">Cold storage, prep sink, searing burners, and guest bar seating in one seamless arc.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7 Outdoor Kitchen Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[
                {
                  title: "Built-In Gas Grills",
                  desc: "Commercial 304 stainless grills with cast brass burners, rotisserie spit, ceramic briquette trays, and halogen lights.",
                  icon: Utensils,
                },
                {
                  title: "Artisan Pizza Ovens",
                  desc: "Wood-fired stone dome ovens and gas hybrid ovens capable of baking crispy, bubbly gourmet pizzas in 90 seconds flat.",
                  icon: ChefHat,
                },
                {
                  title: "Side Burners & Griddles",
                  desc: "Heavy-duty power burners for frying or seafood boils, plus commercial teppanyaki and smashburger griddles.",
                  icon: Flame,
                },
                {
                  title: "Refrigerators & Ice Makers",
                  desc: "Outdoor-rated front-venting refrigerators, double beverage pull-out drawers, and 50 lb/day clear cube ice machines.",
                  icon: ShieldCheck,
                },
                {
                  title: "Sinks with Running Water",
                  desc: "Deep stainless under-mount wash sinks with hot/cold gooseneck spray faucets, built-in soap dispensers, and direct drainage.",
                  icon: Droplets,
                },
                {
                  title: "Bar Seating & Dining",
                  desc: "Integrated dining peninsulas and counter bars allowing guests to sip drinks and chat with the chef while food is prepared.",
                  icon: Wine,
                },
                {
                  title: "Weatherproof Cabinetry",
                  desc: "Marine-grade high-density polymer doors, fully sealed stainless utility drawers, pull-out trash cans, and dry pantry storage.",
                  icon: Layers,
                },
                {
                  title: "Countertops & Backsplashes",
                  desc: "Leathered granite, poured concrete, and non-porous engineered quartzite surfaces that resist UV heat, grease, and rain.",
                  icon: Sparkles,
                },
              ].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-200 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#0055a5] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 8: CABANAS & PERGOLAS – SHADE, STYLE, COMFORT
           ===================================================================== */}
        <section
          id="cabanas-pergolas"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-slate-50 border border-slate-200 shadow-md"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block">
                  Sun Protection & Elegance
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Shade, Style, Comfort
                </h2>
                <p className="text-lg font-bold text-[#0055a5]">
                  Custom Poolside Cabanas and Architectural Pergolas
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Cabanas and pergolas provide essential shade and structure. Whether you want a fabric-topped pergola for dappled light or a solid-roof cabana with ceiling fans and curtains — we build it.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Each structure is anchored into solid footings engineered to withstand Tennessee wind loads while complementing the lines of your pool and home exterior.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/assets/gallery/20.webp"
                    alt="Cabana and Pergola by Pools By Elio"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-cyan-300 font-bold">Engineered Shade</p>
                    <p className="text-sm font-semibold">Solid-roof and motorized louvered pergolas with integrated fans and audio.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Cabana & Pergola Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {[
                {
                  title: "Freestanding Pergolas",
                  desc: "Open-air cedar, Douglas fir, or powder-coated aluminum beam systems delivering dappled afternoon sun and classic garden elegance.",
                  icon: Sun,
                },
                {
                  title: "Attached Cabanas",
                  desc: "Structures physically integrated with your home’s roofline or pool house, providing covered outdoor living rooms with television mounts.",
                  icon: Home,
                },
                {
                  title: "Roof Fans, Lighting & Speakers",
                  desc: "Damp-rated quiet high-CFM ceiling fans, dimmable LED downlights, and marine bluetooth surround-sound speakers.",
                  icon: Speaker,
                },
                {
                  title: "Retractable Shade Screens",
                  desc: "Automated motorized drop-down mesh screens that block harsh low-angle sun rays and keep mosquitoes out with the push of a button.",
                  icon: Wind,
                },
                {
                  title: "Outdoor Privacy Curtains",
                  desc: "Resort-style flowy Sunbrella fabric curtains that slide effortlessly on stainless steel rods for private sunbathing or breezy shade.",
                  icon: Sparkles,
                },
              ].map((opt, idx) => {
                const Icon = opt.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0055a5] mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {opt.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 9: DECKS & PATIOS – THE SPACES BETWEEN
           ===================================================================== */}
        <section
          id="decks-patios"
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] lg:py-[70px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-white shadow-md border border-slate-200/80"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0055a5] bg-blue-100/70 px-4 py-1.5 rounded-full inline-block">
                  Master Landscape Connectivity
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  The Spaces Between
                </h2>
                <p className="text-lg font-bold text-[#0055a5]">
                  Patios, Decks, Walkways, and Seamless Transitions
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We don’t just build structures — we design the flow between them. Patios, decks, walkways, and lounge areas connect your pool, spa, pool house, bar, and fire pit into one seamless outdoor living space.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  By considering sightlines from indoor windows, natural footpaths, sun and shade orientation, and slope elevations, Jonathan Elio ensures your entire backyard feels like a cohesive private resort.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/assets/banner1.png"
                    alt="Custom Pool Decks and Patios by Pools By Elio"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-cyan-300 font-bold">Natural Stone & Concrete</p>
                    <p className="text-sm font-semibold">French pattern travertine, cool-deck coatings, and integrated sub-drainage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deck & Patio Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {[
                {
                  title: "Travertine, Flagstone & Pavers",
                  desc: "Premium natural stone tile in ashlar or Versailles patterns that naturally stay cool, look opulent, and resist freeze-thaw cycles.",
                  badge: "Natural Elegance",
                },
                {
                  title: "Cool-Deck Specialized Finishes",
                  desc: "Formulated coatings that reflect solar infrared heat, reducing surface temperatures by up to 30% for bare feet in summer.",
                  badge: "Barefoot Comfort",
                },
                {
                  title: "Natural Stone & Artisanal Brick",
                  desc: "Crab orchard flagstone, stacked stone coping, and decorative brick accents that harmonize with Tennessee architectural heritage.",
                  badge: "Local Masonry",
                },
                {
                  title: "Raised Decks & Multi-Level Patios",
                  desc: "Overcome hilly lots with terraced steps, cantilevered viewing decks, and distinct elevation levels for dining and lounging.",
                  badge: "Elevation Design",
                },
                {
                  title: "Integrated Drainage Solutions",
                  desc: "Concealed deck channel drains, french drains, and graded runoff basins that keep puddles away from pool basins and foundations.",
                  badge: "Engineering Guard",
                },
              ].map((deck, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0055a5] bg-blue-100 px-2.5 py-1 rounded-md inline-block mb-3">
                      {deck.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {deck.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {deck.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-[#0055a5] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>In-House Grading & Laying</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 10: THE POOLS BY ELIO IN-HOUSE ADVANTAGE
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#071684] text-white shadow-xl"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full inline-block">
                  Why In-House Matters
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  One Builder. Zero Subcontractors. Flawless Harmony.
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  When you hire different contractors for the pool, the pool house, the patio, and the outdoor kitchen, things fall through the cracks. At Pools by Elio, Jonathan Elio Rodriguez leads one unified in-house crew.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                  <ShieldCheck className="w-6 h-6 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Single Point of Accountability</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    No finger-pointing between separate builders. One team designs, excavates, frames, plumbs, and finishes everything.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                  <Compass className="w-6 h-6 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Cohesive 3D Master Plan</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Every elevation, gas line, underground electrical conduit, and drainage pipe is mapped before digging starts.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/10 border border-white/15">
                  <Star className="w-6 h-6 text-cyan-300 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Commercial Pedigree</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Over 25 years building busy bars in downtown Nashville and large aquatic facilities across Tennessee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 11: BOTTOM CTA CARD / LET'S BUILD YOUR BACKYARD RETREAT
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[60px] lg:py-[75px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-br from-[#021838] via-[#053166] to-[#0055a5] text-white shadow-2xl"
        >
          {/* Subtle water texture overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src="/assets/banner2.png"
              alt="Pools By Elio Custom Pools"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your Transformation</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Build Your Backyard Retreat
              </h2>

              <p className="text-base sm:text-xl text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
                Whether you want a simple fire pit or a complete backyard compound with pool house, bar, and outdoor kitchen — Pools by Elio can build it. Contact us today for a free consultation.
              </p>

              {/* Direct Office & Operating Details */}
              <div className="py-4 px-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-200 font-medium">Headquarters</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Pools by Elio – Nashville, Tennessee
                    </p>
                    <p className="text-[11px] text-blue-200">
                      412 Ezell Pike, Nashville TN 37217
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-200 font-medium">Operating Hours</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Mon-Fri 9am-5pm
                    </p>
                    <p className="text-[11px] text-blue-200">
                      Sat by appointment | Sun Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-blue-200 font-medium">Direct Email</p>
                    <a
                      href="mailto:eliocustompools@live.com"
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      eliocustompools@live.com
                    </a>
                    <p className="text-[11px] text-blue-200">
                      Direct Builder Response
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#021838] bg-cyan-300 hover:bg-cyan-200 transition-all duration-200 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-[#021838]" />
                  <span>Request Free 3D Estimate</span>
                </Link>

                <a
                  href="tel:6155683154"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-cyan-300" />
                  <span>Call (615) 568-3154</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Call & Quote Widget */}
      <FloatingContact />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

