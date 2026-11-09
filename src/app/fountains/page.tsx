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
  Waves,
  Building2,
  Droplet,
  Quote,
  Lightbulb,
  ExternalLink,
  Layers,
  Award,
  Compass,
  Check,
  Sparkle,
} from "lucide-react";

export default function FountainsPage() {
  const [activeFountain, setActiveFountain] = useState<number>(0);

  const fountainCategories = [
    {
      title: "Residential Garden & Patio Fountains",
      badge: "Private Sanctuaries",
      subtitle: "Elegance for Courtyards, Gardens & Patios",
      desc: "Add a touch of elegance to your garden, courtyard, or patio. We design and install residential fountains that complement your landscaping and provide a peaceful retreat right outside your door.",
      image: "/assets/service5.png",
      styles: [
        "Tiered fountains (classic Italian or Spanish design)",
        "Urn & pedestal fountains for formal landscaping",
        "Wall-mounted fountains (perfect for compact spaces)",
        "Pond fountains (floating or edge-mounted)",
        "Self-contained recirculating fountains (low maintenance)",
      ],
    },
    {
      title: "Pond & Lake Aeration Fountains",
      badge: "Ecological Health & Beauty",
      subtitle: "Beautiful Ponds. Healthier Water.",
      desc: "A pond fountain does more than look beautiful — it aerates the water, reducing algae, improving water clarity, and supporting fish and plant life. We design floating and fixed-position pond fountains for residential ponds, golf courses, and commercial lakes.",
      image: "/assets/banner3.png",
      styles: [
        "Increases oxygen levels for fish and aquatic flora",
        "Dramatically reduces mosquito breeding and stagnant algae",
        "Spectacular high-output spray patterns reaching 25+ feet",
        "Submersible LED lighting package for evening displays",
      ],
    },
    {
      title: "Floating Fountains for Lakes & HOAs",
      badge: "High-Volume Display",
      subtitle: "Drama on the Water",
      desc: "Floating fountains are perfect for large ponds, lakes, and retention basins. They sit on the water’s surface and spray water high into the air — creating a dramatic visual effect visible from a distance.",
      image: "/assets/banner1.png",
      styles: [
        "Spray heights engineered from 10 to 40+ feet into the air",
        "Interchangeable spray patterns (geyser, tiered blossom, fan)",
        "Color-changing multi-hue LED underwater light rings",
        "Automated timer control panels and anemometer wind sensors",
      ],
    },
    {
      title: "Architectural Wall Fountains",
      badge: "Compact Luxury",
      subtitle: "Elegance on Any Wall",
      desc: "Perfect for small courtyards, entryways, patios, or interior atriums. Wall fountains mount directly to an exterior or interior wall, saving space while adding the calming sound of falling water.",
      image: "/assets/gallery/20.webp",
      styles: [
        "Natural carved stone, stacked slate, or hammered copper finishes",
        "Single or multiple cascading sheet spillways",
        "Concealed LED backlighting highlighting rippling water",
        "Self-contained recirculating systems requiring no direct plumbing line",
      ],
    },
    {
      title: "Classic Tiered Estate Fountains",
      badge: "Timeless Grandeur",
      subtitle: "Centerpieces for Formal Estates & Plazas",
      desc: "Tiered fountains are the classic centerpiece of formal gardens, hotel entryways, and public plazas. Water cascades from one level to the next, creating a layered, elegant display.",
      image: "/assets/banner5.jpg",
      styles: [
        "2 to 5+ tiered stone bowls cascading continuously",
        "Quarry stone, imported Italian marble, or heavy cast stone",
        "Custom radius ground basins with underwater illumination",
        "Engineered for both estate driveways and public civic rotundas",
      ],
    },
    {
      title: "Contemporary & Modern Geometric Fountains",
      badge: "Sleek & Minimal",
      subtitle: "Sleek. Minimal. Dramatic.",
      desc: "For modern homes and contemporary commercial spaces, we design fountains with clean lines, geometric shapes, and dramatic water effects — including sheet waterfalls, vanishing edges, and blade spillways.",
      image: "/assets/gallery/24.webp",
      styles: [
        "Linear slit fountains creating ultra-clean sheets of water",
        "Polished stainless steel and granite sphere & orb fountains",
        "Core-drilled natural basalt column water features",
        "Vanishing edge weir fountains and perimeter overflow reflecting pools",
      ],
    },
    {
      title: "Commercial & Public Plaza Fountains",
      badge: "Civic Landmark Scale",
      subtitle: "Fountains That Define Destinations",
      desc: "Pools by Elio has built commercial fountains for downtown Nashville bars, hotels, corporate campuses, and public plazas. We understand the demands of public spaces: durability, safety, accessibility, and low maintenance.",
      image: "/assets/gallery/21.webp",
      styles: [
        "Grand hotel arrival portico water displays",
        "Corporate campus gathering plazas and reflecting ponds",
        "Shopping center and downtown entertainment district fountains",
        "Museums, cultural centers, and luxury casino fountains",
      ],
    },
    {
      title: "Interactive Splash Fountains & Play Grounds",
      badge: "Zero-Depth Fun",
      subtitle: "Fountains You Can Play In",
      desc: "Interactive fountains (also called splash pads or spray grounds) are zero-depth water play areas perfect for families, children’s museums, and public parks. Water shoots from ground-level nozzles in patterns that kids can run through safely.",
      image: "/assets/gallery/22.webp",
      styles: [
        "Proximity motion sensors and programmable sequencing controllers",
        "Interactive pop-jet ground nozzles that dance to musical schedules",
        "Sub-surface high-speed water choreographies with LED sync",
        "Fully ADA accessible zero-depth construction with non-slip flooring",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / MORE THAN A FOUNTAIN – A STATEMENT
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
              src="/assets/banner3.png"
              alt="Pools By Elio Custom Fountains"
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
                    Fountains
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  More Than a Fountain – A Statement
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  The Sound of Moving Water. The Sight of Timeless Beauty.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  A fountain adds something no other feature can: the gentle sound of moving water, the sparkle of light
                  dancing on ripples, and a timeless focal point that elevates any property.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  At Pools by Elio, we design and build custom fountains of all sizes — from small garden water features
                  to large-scale commercial fountain displays. With over 25 years of experience and projects ranging from
                  downtown Nashville bars to the lazy river at Gaylord Opryland’s Sound Waves, we bring commercial-grade
                  craftsmanship and artistic vision to every fountain project.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  Jonathan Elio Rodriguez is hands-on with every installation. Everything is done in-house — no subcontractors.
                  That means flawless execution, durable materials, and a fountain that performs beautifully for years.
                </p>

                {/* Highlight Quote */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 text-white shadow-md">
                  <p className="text-sm sm:text-[15.5px] font-semibold italic text-cyan-200 leading-relaxed">
                    “We set the standards. From backyard garden fountains to corporate plaza centerpieces — we build fountains that inspire.”
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

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/service5.png"
                      alt="Custom Fountains by Pools By Elio"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02122c]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#021430]/90 border border-white/15 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                          Architectural Statement
                        </div>
                        <div className="text-sm font-extrabold text-white">
                          Carved Stone &amp; Floating Aerators
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#0055a5] text-white text-xs font-bold">
                        100% In-House
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: FOUNTAIN STYLES & ARCHITECTURAL DISCIPLINES (8 CATEGORIES)
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
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#002d72] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                <Waves className="w-3.5 h-3.5 text-cyan-300" />
                <span>ARCHITECTURAL FOUNTAIN STYLES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Fountains Designed for Any Landscape or Venue
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                From intimate courtyard trickles to 40-foot illuminated lake displays — explore our master portfolio of fountain disciplines.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Selector List (5 Cols) */}
              <div className="lg:col-span-5 space-y-2.5">
                {fountainCategories.map((item, idx) => {
                  const isSelected = activeFountain === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveFountain(idx)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 ${
                        isSelected
                          ? "bg-[#002d72] text-white border-[#002d72] shadow-lg scale-[1.01]"
                          : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isSelected ? "bg-cyan-400 text-slate-900" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {item.badge}
                        </span>
                        <span className={`text-xs ${isSelected ? "text-cyan-200" : "text-slate-400"}`}>
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-base sm:text-lg mt-0.5">{item.title}</h3>
                      <p className={`text-xs ${isSelected ? "text-blue-100" : "text-slate-500"} line-clamp-1`}>
                        {item.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Featured Showcase Card (7 Cols) */}
              <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col group">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={fountainCategories[activeFountain].image}
                    alt={fountainCategories[activeFountain].title}
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002d72]/90 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    {fountainCategories[activeFountain].badge}
                  </div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {fountainCategories[activeFountain].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-300 font-semibold mt-1">
                      {fountainCategories[activeFountain].subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {fountainCategories[activeFountain].desc}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Design &amp; Plumbing Specifications:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {fountainCategories[activeFountain].styles.map((styleItem, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0055a5] shrink-0 mt-0.5" />
                          <span>{styleItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-[#0055a5]">
                      100% In-House Nozzle &amp; Basin Hydraulics
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#002d72] hover:bg-[#004488] shadow-md transition-colors"
                    >
                      <span>Consult on This Style</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: MAKE YOUR FOUNTAIN UNFORGETTABLE (NIGHTTIME ILLUMINATION)
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Visual Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[500px] rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-2xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/gallery/24.webp"
                      alt="Nighttime Illuminated Fountains by Pools by Elio"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 border border-white/20 text-xs">
                      <span className="font-bold text-cyan-300 block uppercase tracking-wider">
                        Synchronized Night Spectacle
                      </span>
                      <span className="text-blue-100">
                        Submersible RGB LED fixtures cast brilliant hues up through rising water plumes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                  <Lightbulb className="w-3.5 h-3.5 text-cyan-300" />
                  <span>NIGHTTIME CHOREOGRAPHY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Make Your Fountain Unforgettable
                </h2>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  Underwater LED lights, uplighting, and color-changing systems turn your fountain into a nighttime spectacle.
                  Program light shows for special events, holidays, or evening entertaining with smartphone integration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1">
                    <Sparkles className="w-5 h-5 text-cyan-300" />
                    <div className="text-xs font-bold uppercase text-white mt-2">Millions of Colors</div>
                    <p className="text-[11.5px] text-blue-100/80">From pure warm candlelight whites to saturated holiday colors.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1">
                    <Droplet className="w-5 h-5 text-cyan-300" />
                    <div className="text-xs font-bold uppercase text-white mt-2">Plume Uplighting</div>
                    <p className="text-[11.5px] text-blue-100/80">High-lumen LED rings mounted directly around water nozzles.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1">
                    <Clock className="w-5 h-5 text-cyan-300" />
                    <div className="text-xs font-bold uppercase text-white mt-2">Automated Timers</div>
                    <p className="text-[11.5px] text-blue-100/80">Astronomical timers that ignite your fountain automatically at dusk.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: PARTNERSHIP & DEDICATED SHOWCASE (THE HOUSE OF FOUNTAINS)
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-[#00285c] via-[#00387a] to-[#00285c] text-white shadow-xl"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] border border-cyan-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>DEDICATED FOUNTAIN SHOWCASE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Looking to Browse Pre-Crafted Fountain Collections?
                </h3>
                <p className="text-sm text-blue-100 max-w-2xl leading-relaxed">
                  Explore our dedicated fountain repository at The House of Fountains to view specialized tiered, urn, and
                  pedestal models ready for architectural integration.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <a
                  href="http://thehouseoffountains.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-[#00285c] bg-white hover:bg-cyan-50 shadow-md transition-all"
                >
                  <span>Check Our Fountains</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#0055a5] hover:bg-[#004488] border border-white/30 shadow-md transition-all"
                >
                  <span>Custom Build Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: ADD THE SOUND OF WATER TO YOUR PROPERTY (BOTTOM CTA)
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
              <span>SCHEDULE A FOUNTAIN CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Add the Sound of Water to Your Property
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
              Whether you want a small garden fountain, a dramatic pond fountain, or a commercial centerpiece for your
              business — Pools by Elio can design and build it. Contact us today for a free consultation.
            </p>

            <div className="max-w-2xl mx-auto p-4 rounded-xl bg-white/[0.08] border border-white/15 text-xs sm:text-sm text-cyan-200 space-y-1">
              <div>
                <strong>Pools by Elio</strong> – Nashville, Tennessee
              </div>
              <div className="text-blue-200">
                Hours: Mon-Fri 9am-5pm | Sat by appointment | Sun Closed
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-[#001433] bg-white hover:bg-cyan-50 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
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

