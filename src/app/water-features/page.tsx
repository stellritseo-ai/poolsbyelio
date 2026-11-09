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
  Smartphone,
  Quote,
  Lightbulb,
  Check,
  Volume2,
  Sliders,
  Layers,
  Award,
  ChevronDown,
} from "lucide-react";

export default function WaterFeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const featureCategories = [
    {
      title: "Natural Stone & Modern Waterfalls",
      badge: "Living Rock & Sheer Art",
      subtitle: "Find Your Perfect Water Feature",
      desc: "From rugged rock waterfalls that look like nature made them to sleek, contemporary sheer descent walls — we design waterfalls for every style. Add the sight and sound of falling water to your pool, spa, or garden.",
      image: "/assets/service5.png",
      bulletPoints: [
        "Hand-selected Tennessee fieldstone & mountain boulders",
        "Custom hidden grottos, cave recesses & integrated slides",
        "Engineered acoustics: from whisper cascades to roaring falls",
        "Zero-leak monolithic hydraulic plumbing with dedicated booster pumps",
      ],
    },
    {
      title: "Elegant Fountains for Any Space",
      badge: "Architectural Landscaping",
      subtitle: "Residential Entries & Commercial Plazas",
      desc: "Floating fountains, tiered fountains, pond fountains, and wall-mounted fountains. Perfect for residential entryways, commercial plazas, golf courses, and industrial campuses. We handle everything from design to plumbing to lighting.",
      image: "/assets/banner3.png",
      bulletPoints: [
        "Estate driveway circular fountains & courtyard focal points",
        "Commercial plaza tiered cascading fountain monuments",
        "Large-scale pond and lake aeration fountains with lighting",
        "Heavy-duty brass and bronze nozzles with custom spray geometry",
      ],
    },
    {
      title: "Sheer Descent & Scuppers",
      badge: "Clean, Modern, Dramatic",
      subtitle: "Glass-Like Water Sheets & Copper Scuppers",
      desc: "Sheer descent waterfalls create a clear, glass-like sheet of water that plunges gracefully into your pool or spa. Scuppers offer a wider, more dramatic flow. Both options are sleek, quiet, and stunning — especially when paired with LED lighting.",
      image: "/assets/gallery/20.webp",
      bulletPoints: [
        "Glass-smooth continuous water sheet dropping into pool",
        "Solid hammered copper and oil-rubbed bronze scuppers",
        "Recessed into raised stone bond beams or privacy walls",
        "Color-changing fiber-optic and LED underwater backlight integration",
      ],
    },
    {
      title: "Deck Jets & Laminar Flow",
      badge: "Arching Water & Crystal Streams",
      subtitle: "Choreographed Arcs & Night Illumination",
      desc: "Deck jets shoot water in perfect arcs from your deck into the pool. Laminar flow fountains create clear, glass-like streams that appear frozen in mid-air — often lit with color-changing LEDs for night shows.",
      image: "/assets/gallery/24.webp",
      bulletPoints: [
        "Crystal-clear glass tubular streams with zero turbulence or mist",
        "Built-in internal LED color illuminators glowing through the water arc",
        "Recessed flush deck canisters with removable winterized caps",
        "Choreographed sequencing for dramatic entertainment modes",
      ],
    },
    {
      title: "Bubblers & Foam Jets",
      badge: "Baja Shelves & Splash Zones",
      subtitle: "Fun for Tanning Ledges & Kids' Areas",
      desc: "Bubblers create gentle bubbling water on tanning ledges (baja shelves). Perfect for lounging or safe play for young children. Also great for splash pads and zero-entry pools.",
      image: "/assets/gallery/22.webp",
      bulletPoints: [
        "Shallow water fountain geysers for sunshelves and splash decks",
        "Safe, soft aeration streams ideal for toddlers and lounging",
        "Integrated synchronized LED glow rings for evening ambiance",
        "Adjustable flow valves to modify plume height on the fly",
      ],
    },
  ];

  const commercialProjects = [
    {
      title: "Hotel & Resort Fountains",
      desc: "High-visibility arrival water monuments, reflective courtyard pools, and luxury poolside water walls.",
    },
    {
      title: "Corporate Campus Water Features",
      desc: "Acoustically soothing outdoor workspaces, reflecting basins, and monolithic branded waterfall entries.",
    },
    {
      title: "Shopping Center Fountains",
      desc: "Public gathering plazas, interactive musical water features, and architectural fountains engineered for high foot traffic.",
    },
    {
      title: "Golf Course Waterfalls & Ponds",
      desc: "Grand cascading fairway waterfalls, retention pond aerators, and naturalized boulder stream corridors.",
    },
    {
      title: "Public Splash Pads & Spray Grounds",
      desc: "Commercial zero-depth aquatic play parks with timed jets, dumping buckets, and non-slip safety surfacing.",
    },
    {
      title: "Restaurant & Bar Water Features",
      desc: "Downtown Nashville hospitality venue pool bars, indoor rain walls, fire-and-water features, and patio fountains.",
    },
    {
      title: "Apartment Complex Amenities",
      desc: "Resort-style pool cabanas with sheer descents, bubbling sunshelves, and statement perimeter overflow spas.",
    },
  ];

  const trustPoints = [
    "25+ years of industry experience",
    "Hands-on owner – Jonathan oversees every installation",
    "Everything in-house – No subcontractors, no quality gaps",
    "Licensed, insured, and bonded",
    "Commercial & residential expertise",
    "We’ve built for Gaylord Opryland & downtown Nashville bars",
    "Seamless integration with existing pools, spas, or landscapes",
    "State-of-the-art automation – control water flow, patterns, and lighting from your phone",
    "No job too big or too small",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / THE ART OF WATER
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
              alt="Pools By Elio Custom Water Features"
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
              {/* Left Column: Narrative & Eyebrows */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    Water Features
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.12]">
                  The Art of Water
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  Turn Your Property into a Masterpiece with Water
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  Water has the power to transform any space. It soothes. It entertains. It impresses. At Pools by Elio,
                  we don’t just add water features — we create experiences. Whether you want a quiet backyard retreat with
                  a trickling fountain or a dramatic waterfall feature for a hotel lobby or corporate campus, we deliver
                  commercial-grade craftsmanship with artistic vision.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  With over 25 years of experience and projects ranging from downtown Nashville bars to the lazy river at
                  Gaylord Opryland’s Sound Waves, we understand how to design water features that perform beautifully year
                  after year. Jonathan Elio Rodriguez is hands-on with every feature. Everything is done in-house — no
                  subcontractors. That means flawless execution, seamless integration with existing pools or landscapes,
                  and a final result that exceeds expectations.
                </p>

                {/* Highlight Quote */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 text-white shadow-md">
                  <p className="text-sm sm:text-[15.5px] font-semibold italic text-cyan-200 leading-relaxed">
                    “We set the standards. From backyard waterfalls to commercial fountains — we build water features that wow.”
                  </p>
                </blockquote>

                {/* CTAs */}
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
                    <span>(615) 568-3154</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/service5.png"
                      alt="Water Features by Pools By Elio"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02122c]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#021430]/90 border border-white/15 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                          Architectural Hydraulics
                        </div>
                        <div className="text-sm font-extrabold text-white">
                          Natural Cascades &amp; Fountains
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#0055a5] text-white text-xs font-bold">
                        25+ Yrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: TYPES OF WATER FEATURES (5 DETAILED CATEGORIES)
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
                <span>SIGNATURE WATER DESIGNS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Water Features Tailored to Your Architecture
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Explore our full spectrum of hydraulic artistry — from rugged mountain waterfalls to crystal-smooth laminar stream shows.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Selector List (5 Cols) */}
              <div className="lg:col-span-5 space-y-3">
                {featureCategories.map((item, idx) => {
                  const isSelected = activeCategory === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveCategory(idx)}
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
                    src={featureCategories[activeCategory].image}
                    alt={featureCategories[activeCategory].title}
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002d72]/90 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    {featureCategories[activeCategory].badge}
                  </div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {featureCategories[activeCategory].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-300 font-semibold mt-1">
                      {featureCategories[activeCategory].subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {featureCategories[activeCategory].desc}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Engineering &amp; Design Specifications:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {featureCategories[activeCategory].bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0055a5] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-[#0055a5]">
                      100% In-House Hydraulic Engineering
                    </span>
                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#002d72] hover:bg-[#004488] shadow-md transition-colors"
                    >
                      <span>Inquire About This Feature</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: COMMERCIAL & HOSPITALITY ("WATER FEATURES THAT DRAW CROWDS")
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#006cb8] text-white text-xs font-bold tracking-widest uppercase">
                  <span>COMMERCIAL WATER ENGINEERING</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Water Features That Draw Crowds
                </h2>

                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl">
                  Pools by Elio has built water features for downtown Nashville bars, Gaylord Opryland, and commercial
                  properties across Tennessee. We understand the demands of public spaces — durability, safety, and
                  year-round performance.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all"
                >
                  <span>Commercial Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {commercialProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl bg-white/[0.08] hover:bg-white/[0.13] border border-white/15 p-5 transition-all duration-300 flex flex-col justify-between space-y-3 ${
                    idx === commercialProjects.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-extrabold text-white leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 text-[11px] font-semibold text-cyan-300 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Commercial Grade Quality</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: SMART WATER FEATURES – CONTROL AT YOUR FINGERTIPS
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
              {/* Left Column: Visual Composition */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[500px] rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-2xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/service3.png"
                      alt="Smart Pool Automation by Pools by Elio"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 border border-white/20 text-xs">
                      <span className="font-bold text-cyan-300 block uppercase tracking-wider">
                        Smartphone Water Orchestration
                      </span>
                      <span className="text-blue-100">Adjust waterfall speed, laminar LED arcs, and bubbler heights via app.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-300" />
                  <span>SMART WATER AUTOMATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Smart Water Features – Control at Your Fingertips
                </h2>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  All of our water features can be integrated with state-of-the-art automation systems. Adjust flow,
                  lighting patterns, and schedules from your smartphone or tablet. Create custom “shows” for parties —
                  or simply set a quiet trickle for everyday relaxation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1">
                    <Sliders className="w-5 h-5 text-cyan-300" />
                    <div className="text-xs font-bold uppercase text-white mt-2">Adjustable Flow</div>
                    <p className="text-[11.5px] text-blue-100/80">From meditative gentle ripples to high-volume party cascades.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1">
                    <Lightbulb className="w-5 h-5 text-cyan-300" />
                    <div className="text-xs font-bold uppercase text-white mt-2">Synchronized LEDs</div>
                    <p className="text-[11.5px] text-blue-100/80">Color schemes programmed to match evening entertaining.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1">
                    <Clock className="w-5 h-5 text-cyan-300" />
                    <div className="text-xs font-bold uppercase text-white mt-2">Scheduled Timers</div>
                    <p className="text-[11.5px] text-blue-100/80">Automated run schedules that conserve electricity during off hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: WHY TRUST US WITH YOUR WATER FEATURE?
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-[#00285c] via-[#00387a] to-[#00285c] text-white shadow-xl"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                <Award className="w-3.5 h-3.5 text-cyan-300" />
                <span>UNRIVALED CRAFTSMANSHIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Trust Us With Your Water Feature?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Building water features that never leak, whistle, or fail requires master hydraulic engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {trustPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.08] hover:bg-white/[0.13] border border-white/15 transition-all duration-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-white leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: BRING THE SOUND OF WATER TO YOUR PROPERTY (BOTTOM CTA)
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
              <span>SCHEDULE A WATER FEATURE CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Bring the Sound of Water to Your Property
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
              Whether you want a peaceful garden fountain, a dramatic waterfall, or a commercial feature that wows your
              customers — Pools by Elio is ready to build. Contact us today for a free consultation.
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

