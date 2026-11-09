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
  Flame,
  Layers,
  Award,
  Check,
  Compass,
  FileSpreadsheet,
  ChevronDown,
  HelpCircle,
  Calendar,
  Send,
  Star,
  Zap,
} from "lucide-react";

export default function QuotePage() {
  // Configurator state
  const [projectScope, setProjectScope] = useState<string>("Residential Estate Pool");
  const [poolStyle, setPoolStyle] = useState<string>("Modern Geometric / Clean Lines");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "Integrated Hot Tub / Spa",
    "Baja Tanning Shelf with Loungers",
    "Automated LED Lighting System",
  ]);
  const [budgetTier, setBudgetTier] = useState<string>("$150,000 – $225,000");
  const [timeline, setTimeline] = useState<string>("Within 1–3 Months");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formSource: "Interactive 3D Quote & Blueprint Configurator",
          projectScope,
          poolStyle,
          selectedFeatures,
          budgetTier,
          timeline,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Unable to send your quote request. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call us directly at (615) 568-3154."
      );
    } finally {
      setLoading(false);
    }
  };

  const projectScopes = [
    {
      id: "Residential Estate Pool",
      title: "Residential Estate Pool",
      tag: "Most Popular",
      desc: "Custom in-ground gunite pools, infinity edges, and private backyard sanctuaries.",
      icon: Waves,
    },
    {
      id: "Commercial & Hospitality",
      title: "Commercial & Hospitality",
      tag: "Resort Scale",
      desc: "Water parks, hotel facilities, lazy rivers, and downtown rooftop/patio bars.",
      icon: Building2,
    },
    {
      id: "Swim-Up Bar & Backyard Living",
      title: "Swim-Up Bar & Living",
      tag: "Signature Elio",
      desc: "In-pool bar stools, outdoor kitchens, custom pool houses, and fire features.",
      icon: Flame,
    },
    {
      id: "Complete Gunite Renovation",
      title: "Complete Renovation",
      tag: "Restoration",
      desc: "Full structural transformation, replastering, coping, tile, and smart tech retrofits.",
      icon: Layers,
    },
  ];

  const poolStyles = [
    {
      name: "Modern Geometric / Clean Lines",
      desc: "Sleek rectangular or angular designs with crisp coping and perimeter overflows.",
      badge: "Contemporary",
    },
    {
      name: "Freeform Lagoon & Natural Rock",
      desc: "Organic curves, boulder coping, hidden grottos, and natural stone cascades.",
      badge: "Natural Oasis",
    },
    {
      name: "Infinity / Vanishing Edge",
      desc: "Dramatic optical illusion spilling into Middle Tennessee hilltops and green vistas.",
      badge: "Estate Luxury",
    },
    {
      name: "Architectural Lap & Plunge Pool",
      desc: "Space-efficient athletic lanes or boutique courtyard cooling pools with hydro-jets.",
      badge: "Urban & Compact",
    },
  ];

  const luxuryFeatures = [
    { name: "Integrated Hot Tub / Spa", category: "Hydrotherapy" },
    { name: "Baja Tanning Shelf with Loungers", category: "Lounge" },
    { name: "Swim-Up Bar with Submerged Stools", category: "Hospitality" },
    { name: "Natural Stone Waterfall / Grotto", category: "Water Feature" },
    { name: "Automated LED Lighting System", category: "Technology" },
    { name: "Fire Bowls & Linear Fireplace Wall", category: "Fire Element" },
    { name: "Laminar Deck Jets & Fountains", category: "Water Feature" },
    { name: "Automated All-Season Safety Cover", category: "Safety & Efficiency" },
    { name: "Saltwater & UV/Ozone Purification", category: "Eco Pure Water" },
    { name: "Smartphone Automation Hub (Pentair/Hayward)", category: "Smart Control" },
  ];

  const budgetOptions = [
    {
      range: "$100,000 – $150,000",
      tier: "Custom Gunite Signature",
      detail: "Custom in-ground gunite pool, sunshelf, premium plaster finish, and smart filtration.",
    },
    {
      range: "$150,000 – $225,000",
      tier: "Luxury Estate & Spa",
      detail: "Expanded geometric or freeform pool + integrated spillover spa, LED system, and travertine decking.",
    },
    {
      range: "$225,000 – $350,000",
      tier: "Resort Oasis & Living",
      detail: "Full backyard transformation: swim-up bar, natural rock waterfall, fire elements & custom cabana.",
    },
    {
      range: "$350,000+",
      tier: "Commercial / Master Compound",
      detail: "Architectural showpiece: vanishing infinity edge, multi-tier water features, or commercial hospitality venue.",
    },
  ];

  const timelineOptions = [
    "Immediate (Ready to Break Ground)",
    "Within 1–3 Months",
    "Within 3–6 Months",
    "Planning / Budgeting Phase",
  ];

  const quotePerks = [
    {
      icon: Compass,
      title: "Photorealistic 3D Architectural Walkthrough",
      desc: "Experience your exact pool, coping, lighting, and backyard elevation in 4K 3D before a single shovel enters your yard.",
    },
    {
      icon: ShieldCheck,
      title: "Laser Topography & Soil Survey",
      desc: "Our engineers analyze Middle Tennessee limestone bedrock, grading, and drainage to eliminate ground-shifting surprises.",
    },
    {
      icon: FileSpreadsheet,
      title: "Line-Item Transparent Pricing",
      desc: "Zero vague lump sums. Every pound of steel, yard of shotcrete, tile sq-ft, and Hayward pump is clearly itemized.",
    },
    {
      icon: Award,
      title: "100% In-House Master Build Team",
      desc: "Jonathan Rodriguez is on-site directing every stage. Zero subcontracted handoffs means no delays, no excuses.",
    },
  ];

  const faqs = [
    {
      q: "How accurate is this online custom quote request?",
      a: "Our estimator provides an accurate baseline based on our 25+ years of real build data in Davidson and Williamson Counties. Once submitted, Jonathan Rodriguez evaluates your specific lot conditions to provide an exact, guaranteed proposal.",
    },
    {
      q: "Are there any hidden costs or surprise change orders?",
      a: "None. Unlike companies that subcontract out plumbing, gunite, or electrical, Pools by Elio handles 100% of the build in-house. We provide fixed-price turnkey contracts with zero surprise markups.",
    },
    {
      q: "What is your typical construction timeline from ground-break to swimming?",
      a: "Most residential estate projects are fully completed and swimming-ready in 8 to 14 weeks from excavation, weather permitting. Because we have our own in-house crews and equipment, we do not wait on third-party contractor schedules.",
    },
    {
      q: "Do you handle HOA submissions and city building permits?",
      a: "Yes. We manage the entire permitting and approval lifecycle across Nashville, Franklin, Brentwood, Belle Meade, and surrounding Middle Tennessee municipalities.",
    },
    {
      q: "Do you offer financing or milestone payment schedules?",
      a: "We structure transparent milestone draws aligned with verifiable build stages (Excavation, Steel & Plumbing, Shotcrete Shell, Tile & Decking, Plaster & Startup). We also partner with leading swimming pool financing lenders.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / ESTIMATOR HEADER
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
              alt="Pools By Elio Custom 3D Pool Quote"
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
            <div className="text-center max-w-4xl mx-auto space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  Pools By Elio
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                  Project Estimator &amp; 3D Design
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12]">
                Bring Your Dream Oasis to Life
              </h1>

              {/* Subheading */}
              <p className="text-cyan-300 text-lg sm:text-xl font-bold tracking-tight">
                Custom 3D Virtual Walkthrough • Transparent Line-Item Pricing • 100% In-House Builders
              </p>

              {/* Body */}
              <p className="text-blue-100/90 text-[15px] sm:text-[17px] leading-[1.75] max-w-3xl mx-auto font-normal">
                Whether you’re planning a tranquil private spa in Franklin, a modern infinity masterpiece in Brentwood,
                or a commercial aquatic attraction in downtown Nashville — build your personalized quote below and receive
                a direct proposal from founder Jonathan Elio Rodriguez.
              </p>

              {/* Direct Call Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Free On-Site Topography &amp; Feasibility Survey</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100">
                  <Award className="w-4 h-4 text-cyan-300" />
                  <span>Licensed, Insured &amp; Bonded in Tennessee</span>
                </div>
                <a
                  href="tel:6155683154"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0055a5] hover:bg-[#004488] text-white font-bold transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Speak Directly: (615) 568-3154</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: INTERACTIVE CUSTOM QUOTE CONFIGURATOR
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Multi-Step Interactive Configurator Form (8 Cols) */}
              <div className="lg:col-span-8 rounded-[14px] bg-[#00509e] p-6 sm:p-10 shadow-2xl border border-white/15 space-y-8">
                <div>
                  <span className="inline-block px-4 py-1 rounded-full bg-[#006cb8] text-white text-[11px] font-bold tracking-widest uppercase mb-2">
                    STEP-BY-STEP ESTIMATOR
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Customize Your Project Specifications
                  </h2>
                  <p className="text-white/85 text-xs sm:text-sm mt-1">
                    Select your project scope, preferred architectural style, and luxury amenities to generate your custom estimate.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4 bg-white/10 rounded-2xl p-8 border border-white/20">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Quote Request Received!
                    </h3>
                    <p className="text-blue-100 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name || "valued client"}</strong>. Jonathan Elio
                      Rodriguez and our design engineering team are reviewing your project specifications for{" "}
                      <strong className="text-cyan-200">{projectScope}</strong>. We will contact you within 24 business hours to
                      schedule your on-site topography survey and 3D architectural review.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            address: "",
                            notes: "",
                          });
                        }}
                        className="px-8 py-3 rounded-full bg-white text-[#00509e] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-lg"
                      >
                        Configure Another Estimate
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* STEP 1: Project Scope */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cyan-200 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-xs font-black">
                            1
                          </span>
                          <span>Select Project Scope</span>
                        </label>
                        <span className="text-xs text-blue-200">{projectScope}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {projectScopes.map((scope) => {
                          const IconComp = scope.icon;
                          const isSelected = projectScope === scope.id;
                          return (
                            <button
                              key={scope.id}
                              type="button"
                              onClick={() => setProjectScope(scope.id)}
                              className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                                isSelected
                                  ? "bg-white text-[#00285c] border-white shadow-xl scale-[1.01]"
                                  : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                              }`}
                            >
                              <div className="flex items-center justify-between w-full mb-2">
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                                    isSelected ? "bg-[#00509e] text-white" : "bg-white/10 text-cyan-300"
                                  }`}
                                >
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <span
                                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                                    isSelected
                                      ? "bg-[#00285c] text-white"
                                      : "bg-cyan-500/20 text-cyan-200 border border-cyan-300/30"
                                  }`}
                                >
                                  {scope.tag}
                                </span>
                              </div>
                              <div>
                                <h3 className="font-extrabold text-sm sm:text-base leading-snug">
                                  {scope.title}
                                </h3>
                                <p
                                  className={`text-xs mt-1 leading-relaxed ${
                                    isSelected ? "text-slate-600" : "text-blue-100/80"
                                  }`}
                                >
                                  {scope.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 2: Pool Architectural Style */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cyan-200 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-xs font-black">
                            2
                          </span>
                          <span>Pool Architectural Style</span>
                        </label>
                        <span className="text-xs text-blue-200">{poolStyle}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {poolStyles.map((style) => {
                          const isSelected = poolStyle === style.name;
                          return (
                            <button
                              key={style.name}
                              type="button"
                              onClick={() => setPoolStyle(style.name)}
                              className={`p-3.5 rounded-xl border text-left transition-all ${
                                isSelected
                                  ? "bg-white text-[#00285c] border-white shadow-lg"
                                  : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-extrabold text-xs sm:text-sm">{style.name}</h4>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                    isSelected ? "bg-blue-100 text-[#00285c]" : "bg-white/10 text-cyan-200"
                                  }`}
                                >
                                  {style.badge}
                                </span>
                              </div>
                              <p
                                className={`text-[11.5px] leading-relaxed ${
                                  isSelected ? "text-slate-600" : "text-blue-100/75"
                                }`}
                              >
                                {style.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 3: Luxury Amenities & Features (Multi-select) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cyan-200 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-xs font-black">
                            3
                          </span>
                          <span>Luxury Amenities &amp; Features ({selectedFeatures.length} selected)</span>
                        </label>
                        <span className="text-xs text-cyan-200">Click to toggle</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {luxuryFeatures.map((feat) => {
                          const isChecked = selectedFeatures.includes(feat.name);
                          return (
                            <button
                              key={feat.name}
                              type="button"
                              onClick={() => toggleFeature(feat.name)}
                              className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all flex items-center justify-between gap-2 ${
                                isChecked
                                  ? "bg-cyan-400/20 text-white border-cyan-300 shadow-sm"
                                  : "bg-white/10 text-white/90 border-white/20 hover:bg-white/15"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                                    isChecked
                                      ? "bg-cyan-400 text-slate-950 border-cyan-300"
                                      : "bg-transparent border-white/40"
                                  }`}
                                >
                                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </div>
                                <span className="truncate">{feat.name}</span>
                              </div>
                              <span className="text-[10px] text-cyan-200/80 uppercase tracking-wider shrink-0 hidden sm:inline">
                                {feat.category}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 4: Target Investment Budget Tier */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cyan-200 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-xs font-black">
                            4
                          </span>
                          <span>Target Investment Tier</span>
                        </label>
                        <span className="text-xs text-blue-200 font-bold">{budgetTier}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {budgetOptions.map((budget) => {
                          const isSelected = budgetTier === budget.range;
                          return (
                            <button
                              key={budget.range}
                              type="button"
                              onClick={() => setBudgetTier(budget.range)}
                              className={`p-4 rounded-xl border text-left transition-all ${
                                isSelected
                                  ? "bg-white text-[#00285c] border-white shadow-xl scale-[1.01]"
                                  : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-base font-extrabold tracking-tight">
                                  {budget.range}
                                </span>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                                    isSelected
                                      ? "bg-[#00285c] text-white"
                                      : "bg-cyan-400/20 text-cyan-200 border border-cyan-300/30"
                                  }`}
                                >
                                  {budget.tier}
                                </span>
                              </div>
                              <p
                                className={`text-xs leading-relaxed ${
                                  isSelected ? "text-slate-600" : "text-blue-100/80"
                                }`}
                              >
                                {budget.detail}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 5: Timeline & Contact Details */}
                    <div className="space-y-4 pt-2 border-t border-white/15">
                      <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-cyan-200 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-xs font-black">
                          5
                        </span>
                        <span>Timeline &amp; Property Information</span>
                      </label>

                      {/* Timeline pills */}
                      <div>
                        <div className="text-xs text-blue-100 mb-2 font-medium">Desired Start Window:</div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {timelineOptions.map((time) => {
                            const isSelected = timeline === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setTimeline(time)}
                                className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                                  isSelected
                                    ? "bg-white text-[#00285c] border-white shadow-md"
                                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <input
                          type="text"
                          required
                          aria-label="Full Name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />

                        <input
                          type="email"
                          required
                          aria-label="Email Address"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          required
                          aria-label="Phone Number"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />

                        <input
                          type="text"
                          required
                          aria-label="Property Address / City"
                          placeholder="Property Address / City (e.g. Nashville, TN) *"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </div>

                      <textarea
                        rows={3}
                        aria-label="Special requests or yard description"
                        placeholder="Tell us about your backyard elevation, yard access, or specific design ideas..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-lg bg-rose-600/90 border border-rose-300 text-white text-xs sm:text-sm font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-[6px] bg-[#001433] hover:bg-[#000d24] text-white font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 border-2 border-white shadow-2xl flex items-center justify-center gap-3 transform hover:-translate-y-0.5 disabled:opacity-75"
                    >
                      <Send className="w-5 h-5 text-cyan-300" />
                      <span>
                        {loading
                          ? "Sending Your 3D Quote Request..."
                          : "Submit For 3D Quote & Blueprint Consultation"}
                      </span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Live Estimate Summary & Builder Guarantee (4 Cols) */}
              <div className="lg:col-span-4 space-y-5">
                {/* Real-time Summary Card */}
                <div className="rounded-2xl p-6 bg-gradient-to-b from-[#003882] via-[#002b66] to-[#001f4d] border border-white/20 shadow-2xl space-y-5 text-white">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                      Configuration Summary
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 text-[10px] font-bold border border-cyan-300/30">
                      Live Preview
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <div className="text-blue-200 uppercase tracking-wider font-semibold">Scope:</div>
                      <div className="text-sm font-bold text-white mt-0.5">{projectScope}</div>
                    </div>

                    <div>
                      <div className="text-blue-200 uppercase tracking-wider font-semibold">Style:</div>
                      <div className="text-sm font-bold text-white mt-0.5">{poolStyle}</div>
                    </div>

                    <div>
                      <div className="text-blue-200 uppercase tracking-wider font-semibold">
                        Selected Features ({selectedFeatures.length}):
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {selectedFeatures.length > 0 ? (
                          selectedFeatures.map((f, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-white/10 text-cyan-200 border border-white/15 text-[11px]"
                            >
                              {f}
                            </span>
                          ))
                        ) : (
                          <span className="text-white/60 italic">Standard Base Pool</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-blue-200 uppercase tracking-wider font-semibold">Target Tier:</div>
                      <div className="text-base font-extrabold text-cyan-300 mt-0.5">{budgetTier}</div>
                    </div>

                    <div>
                      <div className="text-blue-200 uppercase tracking-wider font-semibold">Target Start:</div>
                      <div className="text-xs font-semibold text-white mt-0.5">{timeline}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 space-y-3">
                    <div className="flex items-start gap-2 text-xs text-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Includes complimentary 3D photorealistic pool rendering</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Guaranteed direct inspection by Jonathan Elio Rodriguez</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>100% in-house shotcrete construction (zero subcontractors)</span>
                    </div>
                  </div>
                </div>

                {/* Direct Call Quick Dispatch Box */}
                <div className="rounded-xl bg-white/[0.08] border border-white/15 p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0055a5] border border-cyan-300/40 flex items-center justify-center text-cyan-200">
                      <Phone className="w-5 h-5 fill-white text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold">
                        Prefer To Talk Directly?
                      </div>
                      <a
                        href="tel:6155683154"
                        className="text-base sm:text-lg font-extrabold text-white hover:text-cyan-300 transition-colors block"
                      >
                        (615) 568-3154
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-blue-200 leading-relaxed">
                    Speak directly with our office or schedule a same-week property walk-through in Davidson or Williamson County.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: WHAT'S INCLUDED IN YOUR FREE CUSTOM QUOTE
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[55px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-sky-100/70 via-white to-sky-100/70 border border-slate-200/80 shadow-sm"
        >
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#002d72] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>ARCHITECTURAL PROPOSAL PACKAGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                What’s Included in Your Free Custom Quote
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We don’t just hand you a vague quote sheet. Every proposal from Pools by Elio is a comprehensive design and engineering assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quotePerks.map((perk, idx) => {
                const IconComp = perk.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0055a5] flex items-center justify-center border border-blue-100 group-hover:bg-[#0055a5] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a] group-hover:text-[#0055a5] transition-colors leading-snug">
                        {perk.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-600 gap-1.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Included At No Charge</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: PRICING GUIDE & MONOLITHIC GUNITE STANDARDS
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
                <div className="relative w-full max-w-[520px] rounded-2xl p-2.5 bg-white/10 border border-white/20 shadow-2xl">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/assets/gallery/21.webp"
                      alt="Commercial Grade Pool Construction by Pools by Elio"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 border border-white/20 text-xs">
                      <span className="font-bold text-cyan-300 block uppercase tracking-wider">
                        50+ Year Monolithic Gunite
                      </span>
                      <span className="text-blue-100">Built to withstand Tennessee freeze-thaw cycles without shifting.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Transparent Pricing Standards */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                  <span>TRANSPARENT VALUE STANDARDS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Why Pools by Elio Costs Less in the Long Run
                </h2>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  A custom swimming pool is an architectural asset that increases property equity. Unlike modular vinyl
                  liners or pre-formed fiberglass shells that buckle under Tennessee soil pressure, our monolithic gunite
                  structures are permanent investments engineered for decades.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Zero Subcontractor Markups
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Most builders charge a 20–35% markup on third-party excavators and plumbers. We do everything in-house with our own machinery.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Commercial Hydraulic Standards
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      We apply Gaylord Opryland commercial filtration standards to residential builds for crystal clear water and 60% lower power bills.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Monolithic Shotcrete Shells
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Reinforced steel rebar cages shot with high-PSI pneumatically placed gunite creates a continuous crack-resistant basin.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.09] border border-white/15 space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      On-Site Founder Direction
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Jonathan Rodriguez is on the site every single day ensuring every inch meets our strict standards of excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: FREQUENTLY ASKED QUESTIONS ABOUT PRICING & QUOTES
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
                <span>FREQUENT INQUIRIES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Frequently Asked Questions About Quotes &amp; Pricing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Clear, honest answers about our estimating process, project timelines, and transparent contracts.
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
            SECTION 6: BOTTOM DISPATCH & CONSULTATION BANNER
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
              <span>SCHEDULE WITH THE FOUNDERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
              Ready to Start Your Pool Build?
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-[#001433] bg-white hover:bg-cyan-50 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Visit Contact Page</span>
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

