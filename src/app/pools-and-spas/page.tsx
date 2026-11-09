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
  Flame,
  Award,
  Cpu,
  Layers,
  Building2,
  Sun,
  Wine,
  ShieldAlert,
  Droplet,
  Quote,
  Lightbulb,
  FileCheck2,
  Check,
  Sparkle,
} from "lucide-react";

export default function PoolsAndSpasPage() {
  const [activePoolStyle, setActivePoolStyle] = useState<number>(0);

  const poolStyles = [
    {
      title: "Custom Inground Pools",
      tag: "Permanent Gunite",
      desc: "Architecturally engineered monolithic shotcrete basins sculpted specifically to fit the exact contours, elevation, and limestone foundation of your property.",
      image: "/assets/banner1.png",
      features: [
        "100% in-house pneumatic gunite application",
        "Lifetime structural shell durability",
        "Endless interior aggregate and pebble finishes",
      ],
    },
    {
      title: "Lap Pools",
      tag: "Athletic & Elegant",
      desc: "Extended, streamlined swimming corridors designed for low-impact exercise, training, and narrow estate setbacks without sacrificing luxury.",
      image: "/assets/gallery/21.webp",
      features: [
        "Precision lane markings and integrated flip-turn steps",
        "Clean modern lines fitting contemporary backyards",
        "Dual-speed swim jet resistance options available",
      ],
    },
    {
      title: "Freeform & Lagoon Pools",
      tag: "Natural Sanctuary",
      desc: "Meandering organic curves inspired by tropical lagoons and Tennessee mountain streams, accented by natural boulders, grottos, and flagstone coping.",
      image: "/assets/gallery/20.webp",
      features: [
        "Hand-laid Tennessee fieldstone & flagstone coping",
        "Natural beach walk-in entries & sun ledges",
        "Integrated cascade grottos and rock slides",
      ],
    },
    {
      title: "Geometric & Modern Pools",
      tag: "Crisp Architecture",
      desc: "Bold rectangular lines, sharp 90-degree corners, and symmetrical reflecting designs that seamlessly extend modern luxury home architecture into the outdoors.",
      image: "/assets/service1.png",
      features: [
        "Slot perimeter overflows & knife-edge waterlines",
        "Large-format porcelain and travertine deck pavers",
        "Flush zero-edge coping for ultra-clean aesthetics",
      ],
    },
    {
      title: "Vanishing Edge (Infinity) Pools",
      tag: "Panoramic Drama",
      desc: "An architectural optical illusion where the water surface appears to merge seamlessly into the horizon, rolling hills, or lake views of Middle Tennessee.",
      image: "/assets/banner2.png",
      features: [
        "Engineered structural cantilever and catch basin systems",
        "Dramatic negative edge spillways with acoustic waterfalls",
        "Designed for sloping Williamson County hillside lots",
      ],
    },
    {
      title: "Indoor Pools",
      tag: "Year-Round Climate",
      desc: "Four-season luxury swimming environments built within dedicated climate-controlled pavilions, pool houses, or enclosed estate wings.",
      image: "/assets/gallery/22.webp",
      features: [
        "Commercial-grade dehumidification & air quality control",
        "Zero-vapor barrier construction & acoustic dampening",
        "Year-round swimming in total privacy and comfort",
      ],
    },
    {
      title: "Commercial & Apartment Pools",
      tag: "Hospitality Grade",
      desc: "High-capacity commercial aquatic facilities, multi-family resort clubhouses, and downtown Nashville entertainment venue pools built to rigorous health codes.",
      image: "/assets/service4.png",
      features: [
        "Commercial-grade Pentair/Hayward commercial hydraulics",
        "Full ADA accessibility compliance & commercial permits",
        "Sound Waves Gaylord Opryland & downtown Nashville pedigree",
      ],
    },
  ];

  const spaOptions = [
    {
      title: "Custom Inground Spas",
      tag: "Seamless Decking",
      desc: "Built flush with your pool patio or lawn for a discreet, elegant look that provides easy walk-in access and year-round hydrotherapy.",
      image: "/assets/gallery/23.webp",
    },
    {
      title: "Raised Spas with Spillover into Pool",
      tag: "Cascading Waterfall",
      desc: "Elevated 12 to 24 inches above the main pool basin, creating a dramatic architectural focal point with water overflowing across stone ledges.",
      image: "/assets/gallery/20.webp",
    },
    {
      title: "Standalone Hot Tubs",
      tag: "Private Sanctuaries",
      desc: "Independent, fully dedicated hot tubs built adjacent to fire pits, private master bedroom patios, or secluded garden alcoves.",
      image: "/assets/service2.png",
    },
    {
      title: "Hydrotherapy Spas",
      tag: "Wellness & Recovery",
      desc: "Customizable jet clusters scientifically targeted for lumbar decompression, neck relief, muscle recovery, and total bodily rejuvenation.",
      image: "/assets/gallery/24.webp",
    },
    {
      title: "Commercial Spas for Hotels & Gyms",
      tag: "High-Traffic Certified",
      desc: "Engineered for continuous commercial operation with rapid heating recovery, automated chemical dosing, and heavy bather load durability.",
      image: "/assets/service4.png",
    },
  ];

  const luxuryUpgrades = [
    {
      icon: Cpu,
      title: "State-of-the-art automation",
      desc: "Control pool and spa temperatures, LED scenes, pumps, and water features right from your smartphone anywhere in the world.",
    },
    {
      icon: Droplet,
      title: "Energy-efficient pumps & heaters",
      desc: "Variable-speed Hayward and Pentair commercial pumps with high-efficiency heat exchangers for up to 60% lower utility bills.",
    },
    {
      icon: Lightbulb,
      title: "LED color-changing lighting",
      desc: "Transform your evening with vibrant, synchronized underwater LED light shows and soft warm white perimeter deck glows.",
    },
    {
      icon: Waves,
      title: "Custom water features",
      desc: "Sheer descent waterfalls, natural rock cascades, rain curtains, deck scuppers, and illuminated laminar water jets.",
    },
    {
      icon: Flame,
      title: "Adjacent fire features",
      desc: "Automated gas fire bowls perched on stone pilasters, sunken fire lounges, and linear fireplace walls for year-round warmth.",
    },
    {
      icon: Sun,
      title: "Tanning ledges (Baja shelves)",
      desc: "A wide 6 to 10-inch shallow water shelf designed for in-pool lounge chairs, sun umbrellas, and safe splash areas for children.",
    },
    {
      icon: Wine,
      title: "Swim-up bars with submerged stools",
      desc: "Because every pool party needs a bar! Permanent in-pool shotcrete bar stools with sunken service counter integration.",
    },
    {
      icon: ShieldAlert,
      title: "Automated all-season pool covers",
      desc: "Motorized concealed covers that provide unmatched child safety, lock in heat, reduce evaporation, and keep leaves out.",
    },
  ];

  const trustPillars = [
    { title: "25+ years of industry experience", desc: "Decades of master gunite pools crafted across Tennessee." },
    { title: "Hands-on owner involvement", desc: "Founder Jonathan Elio Rodriguez is on every job site, every day." },
    { title: "Everything done in-house", desc: "Zero subcontractors. Our own experienced team runs the build from day one." },
    { title: "Licensed, insured, and bonded", desc: "Comprehensive general contractor protection for your home and investment." },
    { title: "Residential, commercial, industrial", desc: "Versatility from private backyard pools to major commercial resorts." },
    { title: "Commercial pedigree", desc: "We’ve built for Gaylord Opryland (Sound Waves) and downtown Nashville bars." },
    { title: "No job too big or too small", desc: "From compact urban plunge spas to multi-million dollar water parks." },
    { title: "We set the standards", desc: "We don’t just follow industry standards — we define them with craftsmanship." },
  ];

  const buildSteps = [
    {
      step: "01",
      title: "Consultation & Feasibility",
      desc: "We listen to your vision, inspect your property elevation and soil, and provide realistic recommendations tailored to your budget.",
    },
    {
      step: "02",
      title: "Photorealistic 3D Design",
      desc: "We create a custom 3D architectural model so you can virtually walk around and experience your pool or spa before breaking ground.",
    },
    {
      step: "03",
      title: "Turnkey Permitting",
      desc: "We handle 100% of the permits, engineering stamps, setback variances, and HOA architectural committee submissions.",
    },
    {
      step: "04",
      title: "Master Construction",
      desc: "Jonathan directly supervises every phase — excavation, steel rebar grid, plumbing, and high-PSI monolithic shotcrete gunite.",
    },
    {
      step: "05",
      title: "Finishing Touches & Artistry",
      desc: "Hand-laid waterline tile, stone coping, pebble interior plaster, automated controls, and water feature balancing.",
    },
    {
      step: "06",
      title: "Enjoyment & Lifetime Support",
      desc: "We conduct an extensive equipment orientation, walk you through easy maintenance, and remain just one phone call away.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / CUSTOM SWIMMING POOLS & SPAS
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
              src="/assets/banner1.png"
              alt="Pools By Elio Custom Swimming Pools and Spas"
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
                {/* Eyebrow Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    Pools and Spas
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Custom Swimming Pools for Every Backyard
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  Your Dream Pool. Your Personal Spa. Built Right.
                </p>

                {/* Body Copy */}
                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  At Pools by Elio, we don’t build cookie-cutter pools. Every design is tailored to your property, your
                  lifestyle, and your vision. Whether you want a sleek lap pool, a freeform lagoon, or a family-friendly
                  play pool with tanning ledges — we bring it to life. <strong className="text-white font-semibold">Jonathan Elio Rodriguez</strong> is
                  hands-on with every pool build, from initial design to final tile. With everything done in-house (no
                  subcontractors), we control the quality, timeline, and result. You get a pool that’s not just beautiful —
                  but built to last.
                </p>

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
                    <FileCheck2 className="w-4 h-4 text-cyan-300" />
                    <span>Get Free 3D Estimate</span>
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
                      src="/assets/gallery/20.webp"
                      alt="Custom Swimming Pool and Spa by Pools By Elio"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02122c]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#021430]/90 border border-white/15 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                          Monolithic Gunite Shell
                        </div>
                        <div className="text-sm font-extrabold text-white">
                          Pool &amp; Raised Spillover Spa
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
            SECTION 2: POOL STYLES WE OFFER (7 POOL STYLES)
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
                <span>TAILORED ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Pool Styles We Offer
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                From sleek modern geometric lanes to organic freeform lagoons, every pool is engineered specifically for your property and soil.
              </p>
            </div>

            {/* Grid of 7 Pool Styles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {poolStyles.map((style, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group ${
                    idx === poolStyles.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#002d72]/90 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                      {style.tag}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-extrabold text-white leading-tight">
                        {style.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {style.desc}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {style.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0055a5] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Custom Gunite Build</span>
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#002d72] hover:text-[#0055a5]"
                      >
                        <span>Estimate {style.title}</span>
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
            SECTION 3: LUXURY SPAS & HOT TUBS
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#006cb8] text-white text-xs font-bold tracking-widest uppercase">
                  <span>YEAR-ROUND HYDROTHERAPY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Luxury Spas &amp; Hot Tubs
                </h2>

                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl">
                  A spa turns your backyard into a year-round retreat. Whether you want a standalone hot tub or a spa
                  integrated seamlessly into your pool design, Pools by Elio delivers commercial-grade quality with
                  residential comfort. We install energy-efficient, high-performance spas with state-of-the-art controls,
                  customizable jet systems, LED lighting, and waterfall features. Perfect for relaxation, hydrotherapy,
                  or entertaining.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all"
                >
                  <span>Schedule Spa Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 5 Spa Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {spaOptions.map((spa, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/[0.08] hover:bg-white/[0.13] border border-white/15 p-4 transition-all duration-300 flex flex-col justify-between space-y-3 group"
                >
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-900 mb-1">
                    <Image
                      src={spa.image}
                      alt={spa.title}
                      fill
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-cyan-200 uppercase tracking-wider px-2 py-0.5 rounded bg-black/60">
                      {spa.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-white leading-snug">
                      {spa.title}
                    </h3>
                    <p className="text-xs text-blue-100/80 mt-1.5 leading-relaxed">
                      {spa.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 text-[11px] font-semibold text-cyan-300 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>In-House Built</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: THE BEST OF BOTH WORLDS – POOL & SPA COMBOS
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
                <div className="relative w-full max-w-[520px] rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-2xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/gallery/24.webp"
                      alt="Pool & Spa Combo Built by Pools by Elio"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 border border-white/20 text-xs">
                      <span className="font-bold text-cyan-300 block uppercase tracking-wider">
                        Integrated Spillover System
                      </span>
                      <span className="text-blue-100">Elevated spa with cascading weir and automated hydrotherapy controls.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Highlight Quote */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                  <span>UNIFIED ENTERTAINING</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  The Best of Both Worlds – Pool &amp; Spa Combos
                </h2>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  Why choose between a pool and a spa when you can have both? We specialize in seamless pool-spa
                  combinations — connected, stacked, or separated. Imagine a raised spa overflowing into your custom
                  pool, with fire features, LED lighting, and automation at your fingertips.
                </p>

                {/* Highlight Quote Box */}
                <blockquote className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#002d72] via-[#003d99] to-[#004b93] text-white shadow-xl border border-blue-700/60 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                  <Quote className="w-8 h-8 text-cyan-300/30 absolute top-4 right-5 pointer-events-none" />
                  <p className="relative z-10 text-[16px] sm:text-[18px] font-semibold italic leading-relaxed text-white">
                    “We set the standards. From downtown Nashville bars to Gaylord Opryland, we bring commercial
                    expertise to your backyard.”
                  </p>
                </blockquote>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#003882] hover:bg-[#002a66] border-2 border-white shadow-lg transition-all"
                  >
                    <span>Design Your Combo Oasis</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: TAKE YOUR POOL & SPA TO THE NEXT LEVEL (AMENITIES)
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
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>SIGNATURE LUXURY AMENITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Take Your Pool &amp; Spa to the Next Level
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Elevate your backyard into a five-star private resort with our curated architectural upgrades and smart technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {luxuryUpgrades.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-3 group hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0055a5] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055a5] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-extrabold text-[#0f172a] group-hover:text-[#0055a5] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center text-xs font-bold text-[#0055a5] gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Custom Built-In</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: WHY NASHVILLE TRUSTS US FOR POOLS & SPAS
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
                <span>UNMATCHED REPUTATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Nashville Trusts Us for Pools &amp; Spas
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Discover why homeowners, resort operators, and developers choose Pools by Elio for lifetime gunite construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {trustPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.08] hover:bg-white/[0.13] border border-white/15 transition-all duration-200 flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-blue-100/80 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7: OUR PROCESS – HOW WE BUILD YOUR POOL OR SPA
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
                <span>OUR BUILD ROADMAP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                How We Build Your Pool or Spa
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                A streamlined 6-stage construction process directed personally by Jonathan Rodriguez from groundbreaking to first swim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#0055a5] tracking-tight">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0055a5] border border-blue-100">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#0f172a] group-hover:text-[#0055a5] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-600 gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>In-House Execution</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 8: READY TO DIVE IN? (BOTTOM CTA BANNER)
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
              <span>LET&apos;S BUILD YOUR PARADISE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Ready to Dive In?
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
              Whether you want a custom pool, a luxury spa, or both — Pools by Elio is ready to build your backyard oasis.
              Contact us today for a free consultation.
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

