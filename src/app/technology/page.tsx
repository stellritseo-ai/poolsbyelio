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
  Cpu,
  Smartphone,
  Droplet,
  Zap,
  Lightbulb,
  ShieldAlert,
  Flame,
  Thermometer,
  Sliders,
  Sun,
  Activity,
  Check,
  Quote,
  Layers,
  Award,
  Radio,
  Wifi,
} from "lucide-react";

export default function TechnologyPage() {
  // Interactive Virtual Smart App Simulator state
  const [spaTemp, setSpaTemp] = useState<number>(102);
  const [waterfallActive, setWaterfallActive] = useState<boolean>(true);
  const [selectedScene, setSelectedScene] = useState<string>("Party Mode");
  const [lightColor, setLightColor] = useState<string>("Cyan Oasis");
  const [coverClosed, setCoverClosed] = useState<boolean>(false);

  const scenes = [
    { name: "Party Mode", desc: "All waterfalls on, color cycle lights, 3,450 RPM jet boost" },
    { name: "Morning Serenity", desc: "Gentle sheer trickle, quiet 1,200 RPM eco-filtration, 84°F water" },
    { name: "Evening Romance", desc: "102°F spa heated, magenta ambient glow, deck jets arcing" },
    { name: "Eco Safe Mode", desc: "Automated cover closed, minimum wattage filtration, standby heat" },
  ];

  const lightOptions = [
    { label: "Cyan Oasis", colorClass: "bg-cyan-400" },
    { label: "Royal Blue", colorClass: "bg-blue-600" },
    { label: "Sunset Gold", colorClass: "bg-amber-400" },
    { label: "Emerald Bay", colorClass: "bg-emerald-400" },
    { label: "Magenta Glow", colorClass: "bg-fuchsia-500" },
  ];

  const techModules = [
    {
      title: "Control from Anywhere",
      tag: "Mobile & Wi-Fi Automation",
      lead: "Adjust your pool or spa from across the house or across the country. Our automation systems connect to your home Wi-Fi and offer intuitive apps for iOS and Android.",
      icon: Smartphone,
      bullets: [
        "Pool & spa temperature adjustment",
        "Water feature on/off (waterfalls, fountains, deck jets)",
        "LED lighting colors & dynamic light shows",
        "Variable pump speeds & filtration schedules",
        "Automated pool cover open/close",
        "Real-time chemical monitoring & alerts",
      ],
    },
    {
      title: "Perfect Water Chemistry, Automatically",
      tag: "ORP & pH Digital Controllers",
      lead: "No more guessing with test strips. Our automated chemical controllers continuously monitor pH, chlorine, and ORP levels — and dispense the exact amount needed to keep your water balanced and safe.",
      icon: Activity,
      bullets: [
        "Consistent, crystal-clear, safe water quality 24/7",
        "Less manual testing and reduced handling of harsh chemicals",
        "Extended lifespan for plaster, heaters, and internal seals",
        "Commercial compliance peace of mind (hotels, HOAs, resorts)",
      ],
    },
    {
      title: "Lower Bills. Quieter Operation. Better Filtration.",
      tag: "Variable Speed Hydraulics",
      lead: "Variable speed pumps are the industry standard for energy efficiency. They adjust their speed based on demand — running slowly and quietly for routine filtration, and speeding up when you need more flow for water features or cleaning.",
      icon: Zap,
      bullets: [
        "Up to 80% energy savings compared to single-speed pumps",
        "Whisper-quiet operation you won’t hear from the patio",
        "Significantly longer pump motor lifespan",
        "Often eligible for local Middle Tennessee utility rebates",
      ],
    },
    {
      title: "Set the Mood with Color",
      tag: "Programmable LED & Fiber Optics",
      lead: "Transform your pool at night with programmable LED lighting. Choose from millions of colors, create synchronized light shows, and sync with music or special events.",
      icon: Lightbulb,
      bullets: [
        "High-lumen in-pool micro LED fixtures",
        "Fiber optic edge and step perimeter illumination",
        "Water feature lighting (waterfalls, fountains, sheer descents)",
        "Landscape, walkway & adjacent fire feature integration",
      ],
    },
    {
      title: "Safety, Savings, Cleanliness",
      tag: "Automated Motorized Covers",
      lead: "An automated pool cover retracts at the push of a button — and closes just as easily. It keeps debris out, reduces evaporation, retains heat, and provides an important safety barrier.",
      icon: ShieldAlert,
      bullets: [
        "Reduces chemical dissipation by 40% to 60%",
        "Cuts heating costs dramatically by halting overnight heat loss",
        "Prevents leaves, pine needles, and pollen from entering water",
        "Certified safety barrier for families with children or pets",
      ],
    },
    {
      title: "Orchestrate Your Water Features",
      tag: "Custom Water Scene Shows",
      lead: "Create custom water shows with the push of a button. Program your waterfalls, fountains, sheer descents, and deck jets to run at specific times — or trigger them from your phone during a party.",
      icon: Sliders,
      bullets: [
        "Morning fountain schedule to wake up to gentle cascades",
        "Evening waterfall and sheer descent illuminated light show",
        "Party mode triggering all features, laminar jets, and bubblers",
        "Quiet dining mode with subdued flow for peaceful meals",
      ],
    },
    {
      title: "Perfect Temperature, Perfect Efficiency",
      tag: "Smart Climate & Chillers",
      lead: "We integrate heat pumps, gas heaters, and solar heating systems into your automation platform. Set your desired temperature — the system handles the rest.",
      icon: Thermometer,
      bullets: [
        "Energy-efficient air-source heat pumps",
        "Fast-recovery gas heaters for instant winter spa warming",
        "Eco-friendly solar heating panel integration",
        "Reverse-cycle pool chillers to cool refreshing water during hot, humid Tennessee July & August afternoons",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / THE FUTURE OF POOL OWNERSHIP IS HERE
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
              src="/assets/service3.png"
              alt="Pools By Elio State of the Art Pool Technology"
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
                    <Cpu className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    State of the Art Technology
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.12]">
                  The Future of Pool Ownership is Here
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
                  Your Pool, Powered by Intelligence
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  A beautiful pool is just the beginning. At Pools by Elio, we integrate state-of-the-art technology into
                  every project — giving you total control over your pool, spa, water features, and lighting from anywhere
                  in the world. Whether you’re a homeowner who wants to warm your spa before you get home, or a hotel
                  manager who needs to monitor water chemistry remotely, we design and install automation systems that are
                  powerful, intuitive, and reliable.
                </p>

                <p className="text-blue-50/90 text-[15.5px] sm:text-[16.5px] leading-[1.8] font-normal">
                  With over 25 years of experience and projects ranging from downtown Nashville bars to the lazy river at
                  Gaylord Opryland’s Sound Waves, we understand commercial-grade automation. Jonathan Elio Rodriguez is
                  hands-on with every tech installation. Everything is done in-house — no subcontractors.
                </p>

                {/* Highlight Quote */}
                <blockquote className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 text-white shadow-md">
                  <p className="text-sm sm:text-[15.5px] font-semibold italic text-cyan-200 leading-relaxed">
                    “We set the standards. From smartphone controls to energy efficiency — we build pools that think for themselves.”
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
                    <Cpu className="w-4 h-4 text-cyan-300" />
                    <span>Free Technology Consultation</span>
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

              {/* Right Column: Interactive App Simulator */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-[#002d72] via-[#001f4f] to-[#001338] border-2 border-cyan-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.6)] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-cyan-200 uppercase tracking-wider">
                        Elio Smart Hub
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-blue-200">
                      <Wifi className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Online • 5G</span>
                    </div>
                  </div>

                  {/* Temperature Module */}
                  <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold">
                        Hydrotherapy Spa
                      </div>
                      <div className="text-2xl font-black text-white mt-0.5">
                        {spaTemp}°F <span className="text-xs font-normal text-emerald-400">Heating</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSpaTemp(Math.max(80, spaTemp - 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-black text-base flex items-center justify-center border border-white/20"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => setSpaTemp(Math.min(104, spaTemp + 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-black text-base flex items-center justify-center border border-white/20"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Lighting Selector */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                        LED Underwater Ambiance
                      </span>
                      <span className="text-cyan-300 font-semibold">{lightColor}</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {lightOptions.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setLightColor(opt.label)}
                          className={`h-8 rounded-lg border-2 transition-all flex items-center justify-center ${
                            lightColor === opt.label ? "border-white scale-105 shadow-md" : "border-transparent opacity-70"
                          } ${opt.colorClass}`}
                          title={opt.label}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quick Scene Buttons */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Orchestrated Scenes
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {scenes.map((scene) => (
                        <button
                          key={scene.name}
                          type="button"
                          onClick={() => setSelectedScene(scene.name)}
                          className={`p-2.5 rounded-lg text-left border text-xs transition-all ${
                            selectedScene === scene.name
                              ? "bg-white text-[#00285c] border-white shadow-md font-bold"
                              : "bg-white/10 text-white border-white/15 hover:bg-white/15"
                          }`}
                        >
                          <div className="truncate">{scene.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Controls Toggles */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setWaterfallActive(!waterfallActive)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                        waterfallActive
                          ? "bg-cyan-500/20 text-cyan-200 border-cyan-400"
                          : "bg-white/10 text-slate-400 border-white/15"
                      }`}
                    >
                      <span>Waterfalls</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black/40">
                        {waterfallActive ? "ON" : "OFF"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCoverClosed(!coverClosed)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                        coverClosed
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-400"
                          : "bg-white/10 text-cyan-200 border-white/15"
                      }`}
                    >
                      <span>Auto Cover</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black/40">
                        {coverClosed ? "CLOSED" : "OPEN"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: CORE TECH MODULES (7 DETAILED ARCHITECTURAL TILES)
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
                <Cpu className="w-3.5 h-3.5 text-cyan-300" />
                <span>INTELLIGENT HARDWARE ECOSYSTEM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                State-of-the-Art Pool Automation Modules
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Engineered for maximum reliability, whisper-quiet operation, and effortless fingertip control over every drop of water.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techModules.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group hover:-translate-y-1 ${
                      idx === techModules.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0055a5] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055a5] group-hover:text-white transition-colors">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#0f172a] group-hover:text-[#0055a5] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.lead}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#0055a5] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Commercial Standard</span>
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#002d72] hover:text-[#0055a5]"
                      >
                        <span>Include In Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: COMMERCIAL-GRADE AUTOMATION PEDIGREE
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
                      src="/assets/banner2.png"
                      alt="Commercial Pool Automation by Pools by Elio"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 border border-white/20 text-xs">
                      <span className="font-bold text-cyan-300 block uppercase tracking-wider">
                        Gaylord Opryland Pedigree
                      </span>
                      <span className="text-blue-100">
                        Commercial hydraulic telemetry adapted for luxury private estates.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                  <Award className="w-3.5 h-3.5 text-cyan-300" />
                  <span>THE ELIO TECH ADVANTAGE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Why Our Technology Outperforms Conventional Pools
                </h2>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  Most pool contractors view automation as an afterthought, subcontracting low-voltage wiring to third
                  parties. At Pools by Elio, Jonathan Rodriguez oversees every electronic panel, sensor calibration, and
                  smartphone sync in-house. That means flawless reliability, clean mechanical wiring, and zero finger-pointing.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      No Third-Party Subcontractors
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Our own trained master team installs all automation panels, variable-speed pumps, and chemical feeds.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Smart Home Ecosystem Sync
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Easily connects with Control4, Crestron, Lutron, Google Home, and Apple HomeKit for whole-home control.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Proactive Predictive Alerts
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Automated smartphone notifications warn you before filters clog, salt levels dip, or water levels drop.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Lifetime Owner Support
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      We guide you through the app setup in person and remain just one quick phone call away whenever needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: READY TO TAKE CONTROL OF YOUR POOL? (BOTTOM CTA)
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
              <span>SCHEDULE A TECHNOLOGY CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Ready to Take Control of Your Pool?
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
              Whether you want simple remote control or a fully automated smart pool ecosystem — Pools by Elio can design
              and install the right solution. Contact us today for a free technology consultation.
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

