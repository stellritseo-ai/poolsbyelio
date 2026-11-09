"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Palette,
  HardHat,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Consultation",
      desc: "On-site discovery, lifestyle interview, and feasibility review.",
      details:
        "We visit your property to evaluate topography, sun orientation, property lines, and understand your family's outdoor lifestyle vision.",
      deliverable: "Site Assessment & Lifestyle Brief",
    },
    {
      num: "02",
      icon: Palette,
      title: "Design",
      desc: "3D renderings, material curation, and engineering sign-off.",
      details:
        "Experience photorealistic 3D visuals of your pool before breaking ground, curated with premium tile, coping, and decking samples.",
      deliverable: "3D Photorealistic Renderings",
    },
    {
      num: "03",
      icon: HardHat,
      title: "Construction",
      desc: "Excavation, steel, plumbing, gunite, tile, and decking by our crew.",
      details:
        "Our skilled in-house crew handles heavy excavation, reinforced rebar cages, high-spec hydraulic plumbing, and pneumatic gunite application.",
      deliverable: "100% In-House Master Build",
    },
    {
      num: "04",
      icon: Sparkles,
      title: "Completion",
      desc: "Start-up, system orientation, and lifetime aftercare program.",
      details:
        "We fill, balance pool chemistry, walk you through the automated smartphone control systems, and enroll you in our long-term support program.",
      deliverable: "Pool School & Lifetime Warranty",
    },
  ];

  return (
    <section
      id="process"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
      className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-r from-sky-50/70 via-white to-sky-50/70 shadow-sm border border-slate-100"
    >
      {/* Soft Ambient Ethereal Glows */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Top Pill with Cyan-to-Blue Gradient */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#0052a3] to-[#00a3cc] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase shadow-sm">
            <span>OUR PROCESS</span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(1.65rem, 3vw + 0.5rem, 2.5rem)",
            }}
            className="font-extrabold text-[#002b66] tracking-tight mt-3 sm:mt-4 mb-2 leading-tight"
          >
            From Concept To Completion
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] font-medium mx-auto leading-relaxed max-w-3xl">
            A seamless, transparent four-stage journey to bringing your custom backyard paradise into reality.
          </p>
        </div>

        {/* 4 Interactive Process Milestone Cards with Desktop Beam */}
        <div className="relative">
          {/* Connecting Progressive Gradient Beam on Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 hover:border-blue-400/60 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,35,90,0.05)] hover:shadow-[0_16px_40px_rgba(0,45,120,0.12)] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Subtle Top Specular Sheen */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Giant Watermark Step Number */}
                  <span className="absolute -right-2 -top-2 text-7xl font-black text-slate-100 select-none group-hover:text-blue-50 transition-colors pointer-events-none">
                    {step.num}
                  </span>

                  {/* Floating Circular Icon Node */}
                  <div className="relative mb-6 self-start">
                    <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-2xl bg-gradient-to-br from-[#004ba3] to-[#009bb8] text-white flex items-center justify-center shadow-lg shadow-blue-900/20 ring-4 ring-white group-hover:scale-105 group-hover:shadow-cyan-500/25 transition-all duration-300">
                      <IconComp className="w-8 h-8 text-white stroke-[2]" />
                    </div>
                    {/* Badge */}
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-white border border-blue-200 text-[#003882] text-xs font-black shadow-sm">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-[#002b66] tracking-tight mb-1.5 group-hover:text-[#0052a3] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">
                    {step.desc}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5 flex-grow">
                    {step.details}
                  </p>

                  {/* Deliverable Badge */}
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-0.5">
              <div className="text-sm font-bold text-[#002b66]">
                Ready to begin your backyard transformation?
              </div>
              <div className="text-xs text-slate-600">
                Schedule your free on-site consultation to reserve a build slot.
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#004ba3] to-[#009bb8] hover:opacity-95 shadow-sm transition-all duration-300 transform hover:scale-[1.02] shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
