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
  ChevronDown,
  Sparkles,
  ArrowRight,
  Building2,
  Home as HomeIcon,
  Factory,
  ExternalLink,
  Send,
  AlertCircle,
  Award,
  HelpCircle,
  FileCheck,
} from "lucide-react";
import { SocialMediaBar } from "@/components/SocialIcons";

export default function ContactPage() {
  // Form State
  const [projectType, setProjectType] = useState<"Residential" | "Commercial" | "Industrial">("Residential");
  const [budgetRange, setBudgetRange] = useState<string>("$50,000–100,000");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // FAQ Accordion State (open first item by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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
          formSource: "Contact Us Page - Direct Inquiry Form",
          projectType,
          budgetRange,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Unable to send your inquiry. Please try again."
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

  const projectTypes = [
    { label: "Residential", icon: HomeIcon, desc: "Backyard Pools & Spas" },
    { label: "Commercial", icon: Building2, desc: "Resorts, Bars & Parks" },
    { label: "Industrial", icon: Factory, desc: "Large Scale Facilities" },
  ] as const;

  const budgetOptions = [
    "$10,000–25,000",
    "$25,000–50,000",
    "$50,000–100,000",
    "$100,000+",
  ];

  const serviceOptions = [
    "Select Service",
    "Custom In-Ground Pools & Spas",
    "Commercial Water Parks & Facilities",
    "Industrial Aquatic Construction",
    "State-of-the-Art Pool Technology",
    "Custom Water Features & Fountains",
    "Backyard Concepts (Cabanas, Bars, Fire Pits)",
    "Complete Renovation & Remodel",
    "Emergency Repair & Inspection",
  ];

  const whyChoosePoints = [
    {
      title: "25+ years of industry experience",
      desc: "Proven track record delivering custom swimming pools, spas, and aquatic landmarks across Tennessee.",
    },
    {
      title: "Licensed, insured, and bonded",
      desc: "Full general contracting coverage protecting your property, investment, and peace of mind.",
    },
    {
      title: "Hands-on owner – Jonathan on every job",
      desc: "Founder Jonathan Elio Rodriguez inspects and directs every installation personally on-site.",
    },
    {
      title: "Everything done in-house – no subcontractors",
      desc: "Our own experienced team handles excavation, plumbing, steel, shotcrete, tile, and coping.",
    },
    {
      title: "Built Gaylord Opryland’s lazy river & downtown Nashville bars",
      desc: "From complex commercial masterworks to tranquil private backyard sanctuaries.",
    },
    {
      title: "Residential, commercial, industrial specialization",
      desc: "Versatility and structural engineering capable of tackling any project scale or terrain.",
    },
    {
      title: "Free estimates and consultations",
      desc: "Transparent discussions, on-site feasibility evaluations, and tailored custom proposals.",
    },
  ];

  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes. Contact us to schedule a free consultation and estimate. Jonathan personally reviews your property layout, elevation, and design preferences to give you a thorough, realistic assessment.",
    },
    {
      question: "How quickly will you respond?",
      answer:
        "We typically respond within 24 business hours. If you have an urgent inquiry or repair requirement, please call our office directly at (615) 568-3154.",
    },
    {
      question: "Do you service areas outside Nashville/Franklin/Brentwood?",
      answer:
        "Yes! While Nashville, Franklin, and Brentwood represent our core residential corridor, we routinely travel across Middle Tennessee and beyond for larger residential estates, commercial water parks, and industrial installations.",
    },
    {
      question: "Can I schedule a Saturday appointment?",
      answer:
        "Yes. Saturday appointments are available by advance reservation for on-site property visits, design consultations, and client project walk-throughs.",
    },
    {
      question: "Do you work with homeowners, businesses, or both?",
      answer:
        "Both! We work directly with homeowners building custom backyard oases, commercial developers creating resort water parks and downtown venue bars, as well as industrial facility managers.",
    },
    {
      question: "What information should I have ready when I call?",
      answer:
        "Having your property address, ideal timeline, approximate budget range, and any inspiration photos or architectural surveys is helpful, but not mandatory. We will guide you step-by-step from raw concept to finished pool.",
    },
  ];

  const serviceAreas = [
    { name: "Nashville, TN", desc: "Commercial & Luxury Residential Hub" },
    { name: "Franklin, TN", desc: "Private Estates & Acreage Sanctuaries" },
    { name: "Brentwood, TN", desc: "Architectural Pools & Outdoor Living" },
    { name: "And surrounding middle Tennessee areas", desc: "Belle Meade, Green Hills, Mt. Juliet & More" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-blue-950">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* =====================================================================
            SECTION 1: HERO / READY TO TRANSFORM YOUR PROPERTY?
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
          {/* Background Luxury Pool Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/banner2.png"
              alt="Contact Pools By Elio"
              fill
              priority
              unoptimized
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02122c]/95 via-[#03204c]/90 to-[#042d6b]/80" />
          </div>

          {/* Specular Top Rim Reflection */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent pointer-events-none z-10" />

          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading & Executive Narrative */}
              <div className="lg:col-span-8 space-y-5">
                {/* Eyebrows */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055a5] border border-cyan-300/40 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    Pools By Elio
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-200 text-xs font-bold tracking-widest uppercase">
                    Contact Us
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Ready to Transform Your Property?
                </h1>

                {/* Body Paragraphs */}
                <p className="text-blue-50/90 text-[16px] sm:text-[18px] leading-[1.75] font-normal max-w-3xl">
                  We’d love to hear about your project. Whether you’re a homeowner, a commercial developer, or an
                  industrial facility manager — Pools by Elio has the experience and in-house team to make it happen.
                </p>

                {/* Direct Owner Highlight */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.08] border border-cyan-400/30 backdrop-blur-sm max-w-3xl">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#0055a5] border border-cyan-300/40 flex items-center justify-center shrink-0 shadow-md">
                      <Award className="w-5 h-5 text-cyan-200" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider">
                        Direct Builder Access
                      </div>
                      <p className="text-sm sm:text-[15px] text-white font-medium mt-0.5 leading-relaxed">
                        Jonathan Elio Rodriguez is hands-on with every project. When you contact us, you’re talking
                        directly to the team that will build your dream.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Phone Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:6155683154"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4 fill-white text-white" />
                    <span>Call (615) 568-3154</span>
                  </a>

                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-200"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </a>
                </div>
              </div>

              {/* Right Column: Fast Dispatch Bento Tile */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl p-6 bg-gradient-to-b from-[#003882] via-[#002b66] to-[#001f4d] border border-white/20 shadow-2xl space-y-4 text-white">
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                      Quick Dispatch
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-400/30">
                      Fast Response
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-blue-200">Official Business Phone</div>
                        <a href="tel:6155683154" className="font-bold hover:text-cyan-300 transition-colors">
                          (615) 568-3154
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-blue-200">Official Email</div>
                        <a href="mailto:eliocustompools@live.com" className="font-medium hover:text-cyan-300 transition-colors truncate block">
                          eliocustompools@live.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-blue-200">Business Hours</div>
                        <div className="text-xs text-white">Mon-Fri: 9am – 5pm</div>
                        <div className="text-xs text-cyan-200">Sat: By appointment | Sun: Closed</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/15">
                    <div className="inline-flex items-center gap-2 text-xs text-cyan-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>TN Licensed, Bonded &amp; Insured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: GET IN TOUCH (INTERACTIVE FORM + CONTACT CARDS)
           ===================================================================== */}
        <section
          id="contact-form"
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
              {/* Left Column: Interactive Consultation & Quote Form (7 Cols) */}
              <div className="lg:col-span-7 rounded-[14px] bg-[#00509e] p-6 sm:p-9 shadow-2xl border border-white/15">
                {/* Form Eyebrow & Title */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#006cb8] text-white text-[11px] font-bold tracking-widest uppercase mb-2">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Start Your Project Consultation
                  </h2>
                  <p className="text-white/85 text-sm mt-1">
                    Fill out the form below and Jonathan will personally review your project specifications.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-10 space-y-4 bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Thank You! Your Inquiry Has Been Received.
                    </h3>
                    <p className="text-blue-100 max-w-md mx-auto text-sm leading-relaxed">
                      Jonathan Elio Rodriguez and our master build team will review your project details and reach out
                      promptly. You can also call us directly at <strong>(615) 568-3154</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          address: "",
                          message: "",
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full bg-white text-[#00509e] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* 1. Project Type Selector */}
                    <div>
                      <label className="block text-xs font-bold text-cyan-200 uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {projectTypes.map((type) => {
                          const IconComp = type.icon;
                          const isSelected = projectType === type.label;
                          return (
                            <button
                              key={type.label}
                              type="button"
                              onClick={() => setProjectType(type.label)}
                              className={`p-3 rounded-lg border text-left transition-all duration-200 flex flex-col items-start gap-1.5 ${
                                isSelected
                                  ? "bg-white text-[#00285c] border-white shadow-md font-bold"
                                  : "bg-white/10 text-white border-white/20 hover:bg-white/20 font-medium"
                              }`}
                            >
                              <IconComp className={`w-4 h-4 ${isSelected ? "text-[#00509e]" : "text-cyan-300"}`} />
                              <span className="text-xs sm:text-sm">{type.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Target Investment / Budget Range */}
                    <div>
                      <label className="block text-xs font-bold text-cyan-200 uppercase tracking-wider mb-2">
                        Target Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetOptions.map((budget) => {
                          const isSelected = budgetRange === budget;
                          return (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setBudgetRange(budget)}
                              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                                isSelected
                                  ? "bg-white text-[#00285c] border-white shadow-md"
                                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                              }`}
                            >
                              {budget}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          aria-label="Your Name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </div>
                      <div>
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
                    </div>

                    {/* 4. Phone & Service Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          required
                          aria-label="Phone Number"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </div>

                      <div className="relative">
                        <select
                          required
                          aria-label="Select Service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 appearance-none cursor-pointer pr-10"
                        >
                          {serviceOptions.map((svc, idx) => (
                            <option key={idx} value={idx === 0 ? "" : svc} disabled={idx === 0}>
                              {svc}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* 5. Address */}
                    <div>
                      <input
                        type="text"
                        required
                        aria-label="Project Address"
                        placeholder="Project Address / City (e.g. Franklin, TN) *"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>

                    {/* 6. Message */}
                    <div>
                      <textarea
                        rows={4}
                        aria-label="Message"
                        placeholder="Tell us about your project, ideas, or timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-[5px] bg-rose-600/90 border border-rose-300 text-white text-xs sm:text-sm font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-[5px] bg-[#001433] hover:bg-[#000d24] text-white font-bold text-sm tracking-wide transition-all duration-200 border border-white/20 shadow-lg flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      <span>{loading ? "Sending..." : "Send Now"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Direct Contact Headquarters & Hours (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Card 1: Phone & Direct Builder */}
                <div className="rounded-xl bg-white/[0.08] border border-white/15 p-5 sm:p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0055a5] border border-cyan-300/40 flex items-center justify-center text-cyan-200">
                    <Phone className="w-5 h-5 fill-white text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Telephone &amp; Dispatch
                    </h3>
                    <div className="mt-2">
                      <a
                        href="tel:6155683154"
                        className="text-lg sm:text-xl font-extrabold text-white hover:text-cyan-300 transition-colors block"
                      >
                        (615) 568-3154
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 2: Email */}
                <div className="rounded-xl bg-white/[0.08] border border-white/15 p-5 sm:p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0055a5] border border-cyan-300/40 flex items-center justify-center text-cyan-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Email Address
                    </h3>
                    <a
                      href="mailto:eliocustompools@live.com"
                      className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors block mt-1"
                    >
                      eliocustompools@live.com
                    </a>
                    <p className="text-xs text-blue-200 mt-0.5">
                      Send plans, site drawings, and project briefs anytime.
                    </p>
                  </div>
                </div>

                {/* Card 3: Location */}
                <div className="rounded-xl bg-white/[0.08] border border-white/15 p-5 sm:p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0055a5] border border-cyan-300/40 flex items-center justify-center text-cyan-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Physical Office
                    </h3>
                    <p className="text-base font-bold text-white mt-1">
                      412 Ezell pike Nashville TN 37217
                    </p>
                    <a
                      href="https://maps.google.com/?q=412+Ezell+Pike,+Nashville,+TN+37217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:underline mt-1 font-semibold"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Card 4: Office Hours */}
                <div className="rounded-xl bg-white/[0.08] border border-white/15 p-5 sm:p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0055a5] border border-cyan-300/40 flex items-center justify-center text-cyan-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Office Hours
                    </h3>
                    <div className="mt-2 text-sm space-y-1 text-white">
                      <div className="flex justify-between border-b border-white/10 pb-1">
                        <span className="text-blue-200">Monday – Friday</span>
                        <span className="font-semibold">9:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 py-1">
                        <span className="text-blue-200">Saturday</span>
                        <span className="font-semibold text-cyan-300">By Appointment</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-blue-200">Sunday</span>
                        <span className="font-semibold text-red-300">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5: Connect & Verify Us Online */}
                <div className="rounded-xl bg-white/[0.08] border border-white/15 p-5 sm:p-6 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Connect &amp; Verify Us Online
                  </h3>
                  <p className="text-xs text-blue-200">
                    Follow our latest pool construction projects, check verified reviews, and view our BBB accreditation:
                  </p>
                  <div className="pt-1">
                    <SocialMediaBar variant="contact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: WE PROUDLY SERVE MIDDLE TENNESSEE & INTERACTIVE MAP
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Serving Middle Tennessee Text & Cities */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#002d72] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                  <span>REGIONAL COVERAGE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                  We Proudly Serve Middle Tennessee
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Pools by Elio is based in Nashville, TN and serves residential, commercial, and industrial clients across:
                </p>

                {/* Cities List */}
                <div className="space-y-2.5">
                  {serviceAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0055a5] flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{area.name}</div>
                          <div className="text-xs text-slate-500">{area.desc}</div>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Travel Callout */}
                <div className="p-4 rounded-xl bg-[#002d72] text-white shadow-md border border-blue-900">
                  <p className="text-xs sm:text-sm leading-relaxed text-blue-100 font-medium">
                    <strong className="text-white">Don’t see your city?</strong> Contact us anyway — we travel for larger
                    commercial and industrial projects.
                  </p>
                </div>
              </div>

              {/* Right Column: Google Maps Interactive Embed */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 relative">
                  <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold tracking-wide">Nashville Headquarters &amp; Service Radius</span>
                    </div>
                    <span className="text-[11px] text-slate-300">412 Ezell Pike, Nashville, TN</span>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412182.3223460992!2d-86.78514695!3d36.186640350000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2snp!4v1793924341147!5m2!1sen!2snp"
                    width="100%"
                    height="420"
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
            SECTION 4: WHY CHOOSE POOLS BY ELIO? (QUICK RECAP)
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
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/80 bg-white/10 text-white text-xs font-bold tracking-wider uppercase">
                <span>OUR COMMITMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Choose Pools by Elio?
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Everything you need to know about our reputation, standards, and unmatched builder accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {whyChoosePoints.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl bg-white/[0.09] hover:bg-white/[0.14] border border-white/15 hover:border-cyan-300/40 transition-all duration-200 flex items-start gap-4 ${
                    idx === whyChoosePoints.length - 1 ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center shrink-0 text-cyan-300 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100/85 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: FREQUENTLY ASKED QUESTIONS BEFORE YOU CALL
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
                <span>HELPDESK &amp; CLARIFICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Frequently Asked Questions Before You Call
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Have questions before reaching out? Here are the most common things clients ask our team.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-[#0f172a]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0055a5] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-700 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: EXISTING CLIENT? NEED URGENT HELP?
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-[#001c40] via-[#002f6c] to-[#001c40] text-white shadow-xl border border-blue-900"
        >
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-2xl bg-white/[0.08] border border-cyan-400/30 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Priority Client Support
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Existing Client? Need Urgent Help?
                  </h3>
                  <p className="text-sm text-blue-100 max-w-2xl leading-relaxed">
                    If you are an existing client with an urgent pool, spa, or fountain issue during business hours, call us
                    directly at <strong className="text-white">(615) 568-3154</strong>. For after-hours emergencies for
                    commercial clients, please use the emergency contact information provided in your service agreement.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="tel:6155683154"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0055a5] hover:bg-[#004488] border border-white/30 shadow-md transition-all text-center"
                >
                  <Phone className="w-4 h-4 fill-white text-white" />
                  <span>Call (615) 568-3154</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7: READY TO BUILD? (BOTTOM CTA BANNER)
           ===================================================================== */}
        <section
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
          className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#001433] text-white shadow-2xl border border-blue-950"
        >
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Build?
            </h2>

            <div className="max-w-2xl mx-auto space-y-1 text-sm sm:text-base text-blue-100 font-medium">
              <div>
                <strong>Pools by Elio</strong> – Nashville, Tennessee
              </div>
              <div className="text-xs sm:text-sm text-blue-200">
                Hours: Mon-Fri 9am-5pm | Sat by appointment | Sun Closed
              </div>
              <div className="text-xs sm:text-sm text-cyan-200 pt-1">
                Email: <a href="mailto:eliocustompools@live.com" className="hover:underline">eliocustompools@live.com</a> | Phone: <a href="tel:6155683154" className="hover:underline">(615) 568-3154</a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:6155683154"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0055a5] hover:bg-[#004488] border-2 border-white shadow-xl transition-all"
              >
                <Phone className="w-4 h-4 fill-white text-white" />
                <span>Call (615) 568-3154</span>
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#001433] bg-white hover:bg-cyan-50 shadow-xl transition-all"
              >
                <FileCheck className="w-4 h-4" />
                <span>Request Free Proposal</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <FloatingContact />
    </div>
  );
}

