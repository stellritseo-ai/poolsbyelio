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
  Award,
  Zap,
  Activity,
  Check,
  Quote,
  Shield,
  LifeBuoy,
  Anchor,
  Users,
  Compass,
  FileCheck2,
} from "lucide-react";

export default function WaterParksPage() {
  const [activeAttraction, setActiveAttraction] = useState<number>(0);

  const attractions = [
    {
      title: "Lazy Rivers",
      badge: "Gaylord Opryland Pedigree",
      subtitle: "Slow Rides, Big Smiles",
      desc: "We’ve built one of the most iconic lazy rivers in Tennessee at Gaylord Opryland’s Sound Waves. From current generation to landscaping, entry/exit points, and tube storage — we design lazy rivers that keep guests floating all day.",
      image: "/assets/service4.png",
      bullets: [
        "Continuous hydraulic propulsion & laminar current generators",
        "Themed rockwork, tropical landscaping & bridge overpasses",
        "Safe zero-depth beach entries & ADA transfer stations",
        "High-capacity commercial filtration & turnover systems",
      ],
    },
    {
      title: "Wave Pools",
      badge: "Resort Scale Drama",
      subtitle: "Ocean-Style Waves, Inland",
      desc: "From rolling ripples to deep-water swells — we design and build wave pools for hotels, water parks, and municipalities. Includes wave generation equipment, beach-style entry, and safety systems.",
      image: "/assets/banner1.png",
      bullets: [
        "Pneumatic & hydraulic caisson wave generation machinery",
        "Gradual zero-entry sloped beach entry mimicking natural ocean shores",
        "Integrated lifeguard towers, safety lines & perimeter fencing",
        "Reinforced monolithic shotcrete basins built for surge forces",
      ],
    },
    {
      title: "Splash Pads & Spray Grounds",
      badge: "Zero-Depth Family Fun",
      subtitle: "Interactive Water Play",
      desc: "Zero-depth entry pools, dumping buckets, water cannons, spray tunnels, and ground geysers. Perfect for family-friendly water parks, community centers, and hotel kid zones.",
      image: "/assets/gallery/22.webp",
      bullets: [
        "Zero-depth standing water eliminating drowning risks",
        "Non-slip certified safety surfacing with impact attenuation",
        "Choreographed sequencing controllers for interactive play",
        "Recirculating UV & chlorination sanitation skids",
      ],
    },
    {
      title: "Water Slides & Flow Structures",
      badge: "High-Adrenaline Thrills",
      subtitle: "Thrills for All Ages",
      desc: "Body slides, tube slides, bowl slides, and multi-lane racers. We partner with leading slide manufacturers and handle all site work, plumbing, landing pools, and safety certification.",
      image: "/assets/gallery/20.webp",
      bullets: [
        "High-flow booster pumping systems & run-out decelerator flumes",
        "Structural steel support towers & engineered concrete footings",
        "Deep plunge landing pools or dry deceleration lanes",
        "Full state safety code inspections and dynamic flow testing",
      ],
    },
    {
      title: "Surf Simulators",
      badge: "Action Sport Attraction",
      subtitle: "Endless Waves for Endless Fun",
      desc: "Stationary wave surf simulators are a massive draw for any water park. We handle installation, water circulation, filtration, and surrounding decking.",
      image: "/assets/banner2.png",
      bullets: [
        "Continuous high-volume sheet wave pumping equipment",
        "Heavy-duty padded recovery zones & safety netting",
        "Surrounding spectator viewing decks and stadium seating",
        "High-turnover dedicated filtration and water cooling",
      ],
    },
    {
      title: "Toddler & Kiddie Splash Zones",
      badge: "Safe Soft-Play",
      subtitle: "Safe Fun for Little Ones",
      desc: "Shallow kiddie pools with interactive spray features, mini slides, and soft-play surfaces. Designed with safety and visibility in mind.",
      image: "/assets/gallery/24.webp",
      bullets: [
        "6-inch to 12-inch shallow basins with unobstructed sightlines",
        "Soft-foam animal sprayers, bubbler pads, and gentle slides",
        "Separate low-pressure water loops for sensitive skin",
        "Surrounding shaded parent seating and cabanas",
      ],
    },
    {
      title: "Regulation Competition Pools",
      badge: "Aquatic Athletic Centers",
      subtitle: "For Swim Teams & Events",
      desc: "For municipalities, schools, and athletic clubs — we build regulation competition pools with lane lines, timing systems, and spectator seating.",
      image: "/assets/gallery/21.webp",
      bullets: [
        "25-meter and 50-meter Olympic regulation dimensions",
        "Integrated touch-pad timing systems & false start recalls",
        "Wave-quelling lane line anchors & deep water turnover gutters",
        "Elevated spectator grandstands and coaches' timing stations",
      ],
    },
  ];

  const commercialTrackRecord = [
    {
      name: "Gaylord Opryland (Sound Waves)",
      tag: "Iconic Resort Landmark",
      role: "Lazy River & Aquatic Features",
      detail:
        "Engineered and constructed the celebrated indoor/outdoor lazy river attractions at Sound Waves inside Gaylord Opryland Resort — one of Tennessee's most visited commercial water destinations.",
    },
    {
      name: "Downtown Nashville Bars",
      tag: "Hospitality & Entertainment",
      role: "Custom Pool Bars & Water Features",
      detail:
        "Built signature swimming pools, swim-up bars, and high-impact waterfall structures for premier entertainment venues and hospitality bars across downtown Nashville.",
    },
    {
      name: "Hotels & Luxury Resorts",
      tag: "High-Capacity Guest Facilities",
      role: "Swimming Pools, Spas & Play Areas",
      detail:
        "Turnkey resort pool complexes designed to handle heavy continuous guest traffic, featuring heated spas, zero-entry splash zones, and poolside cabana living.",
    },
    {
      name: "Municipalities & Public Parks",
      tag: "Civic Aquatic Centers",
      role: "Community Pools & Splash Pads",
      detail:
        "Civic-grade swimming complexes and public spray grounds engineered for durability, water conservation, universal ADA access, and low lifetime maintenance.",
    },
    {
      name: "Apartments & Master HOAs",
      tag: "Multi-Family Residential",
      role: "Resort-Style Amenity Pools",
      detail:
        "Architectural community pools with tanning ledges, fire features, and commercial pavilions that drive tenant leasing and property value.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / COMMERCIAL-GRADE WATER PARKS. BUILT IN-HOUSE.
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
              alt="Pools By Elio Commercial Water Parks"
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
              {/* Left Column: Heading & Executive Story */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Building2 className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    Water Parks &amp; Commercial
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Commercial-Grade Water Parks. Built In-House.
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  We Build the Water Parks That Tennessee Loves
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  You may have experienced our work without even knowing it. Pools by Elio built the famous lazy river at
                  Sound Waves inside Gaylord Opryland — one of Tennessee’s most visited water attractions. We’ve also built
                  bars in downtown Nashville and large-scale commercial aquatic facilities across the state.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  With over 25 years of industry experience, we understand what makes a commercial water park successful:
                  durability, safety, flow management, and guest experience. Jonathan Elio Rodriguez is hands-on with every
                  commercial project. Everything is done in-house — no subcontractors. That means faster timelines, better
                  quality control, and a single point of accountability.
                </p>

                {/* Highlight Quote */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 text-white shadow-md">
                  <p className="text-sm sm:text-[15.5px] font-semibold italic text-cyan-200 leading-relaxed">
                    “There is no job too big. From Gaylord Opryland to your commercial development — we build water parks that draw crowds.”
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
                    <FileCheck2 className="w-4 h-4 text-cyan-300" />
                    <span>Commercial Consultation</span>
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
                      src="/assets/service4.png"
                      alt="Commercial Water Parks by Pools By Elio"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02122c]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#021430]/90 border border-white/15 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                          Gaylord Opryland Pedigree
                        </div>
                        <div className="text-sm font-extrabold text-white">
                          Sound Waves Lazy River Builders
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#0055a5] text-white text-xs font-bold">
                        Commercial Grade
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: CORE WATER PARK ATTRACTIONS (7 ATTRACTIONS)
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
                <span>COMMERCIAL AQUATIC ATTRACTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Water Park Features That Thrill &amp; Perform
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Engineered for maximum guest throughput, zero-compromise patron safety, and commercial durability under continuous operation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Selector List (5 Cols) */}
              <div className="lg:col-span-5 space-y-2.5">
                {attractions.map((item, idx) => {
                  const isSelected = activeAttraction === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveAttraction(idx)}
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
                    src={attractions[activeAttraction].image}
                    alt={attractions[activeAttraction].title}
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002d72]/90 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    {attractions[activeAttraction].badge}
                  </div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {attractions[activeAttraction].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-300 font-semibold mt-1">
                      {attractions[activeAttraction].subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {attractions[activeAttraction].desc}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Commercial Engineering &amp; Operational Specs:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {attractions[activeAttraction].bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0055a5] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-[#0055a5]">
                      100% In-House Hydraulic &amp; Structural Execution
                    </span>
                    <Link
                      href="/contact"
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
            SECTION 3: PROVEN TRACK RECORD & COMMERCIAL EXPERTISE
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
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#006cb8] text-white text-xs font-bold tracking-widest uppercase">
                <Award className="w-3.5 h-3.5 text-cyan-300" />
                <span>TENNESSEE COMMERCIAL PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Proven Track Record. Unmatched Expertise.
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Pools by Elio has successfully delivered high-profile commercial water park, resort, and municipal aquatic projects across Tennessee:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialTrackRecord.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl bg-white/[0.08] hover:bg-white/[0.13] border border-white/15 p-6 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                    idx === commercialTrackRecord.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 px-2 py-0.5 rounded bg-black/40 inline-block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-extrabold text-white leading-snug">
                      {item.name}
                    </h3>
                    <div className="text-xs font-bold text-cyan-200">{item.role}</div>
                    <p className="text-xs text-blue-100/80 leading-relaxed pt-1">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Delivered On Time &amp; Code Compliant</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Insurance & Licensing Ribbon */}
            <div className="mt-10 p-5 rounded-2xl bg-white/[0.09] border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-white">
                    Licensed, Insured, Bonded &amp; Specialized Commercial Liability
                  </div>
                  <div className="text-xs text-blue-200">
                    We carry the multi-million dollar public commercial liability coverage required for municipal and resort aquatic venues.
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold text-[#00285c] bg-white hover:bg-cyan-50 shadow-md transition-all shrink-0"
              >
                <span>Request Commercial Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: READY TO BUILD A WATER PARK THAT DRAWS CROWDS? (BOTTOM CTA)
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
              <span>COMMERCIAL DEVELOPMENT INQUIRIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Ready to Build a Water Park That Draws Crowds?
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
              Whether you’re a hotel developer, a municipality, or an entertainment venue — Pools by Elio has the experience
              and in-house team to deliver. Contact us today to discuss your commercial water park project.
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
                <span>Contact Commercial Team</span>
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

