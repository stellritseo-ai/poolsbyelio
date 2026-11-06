"use client";

import React from "react";
import Image from "next/image";
import {
  PhoneCall,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Users,
  Trophy,
  HardHat,
} from "lucide-react";

export default function EmergencyStatsSection() {
  const stats = [
    {
      number: "100+",
      label: "Completed Projects",
      detail: "Bespoke residential gunite pools & luxury resort escapes",
      icon: Trophy,
    },
    {
      number: "900+",
      label: "Happy Clients",
      detail: "Families & commercial partners served across Middle TN",
      icon: Users,
    },
    {
      number: "10+",
      label: "Master In-House Crew",
      detail: "Dedicated artisans, hydraulic specialists & builders",
      icon: HardHat,
    },
    {
      number: "25+",
      label: "Years Of Experience",
      detail: "Continuous engineering excellence & hands-on oversight",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="emergency"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
      }}
      className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] border border-slate-200/80 shadow-sm"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Emergency Repair Hero Card */}
        <div className="relative rounded-[5px] overflow-hidden bg-gradient-to-br from-[#002244] via-[#003366] to-[#004b93] text-white shadow-xl border border-white/10 mb-8">
          {/* Ambient Lighting Spheres */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                  </span>
                  <span>RAPID RESPONSE DISPATCH</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Pool &amp; Spa Repairs — Call For Immediate Availability
                </h2>

                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Equipment failure? Leaking hydraulics? Spa heater not turning
                  on? We respond fast across Middle Tennessee with our licensed,
                  insured in-house crew. From smart automation systems and
                  variable-speed pumps to structural gunite crack repairs,
                  we&apos;ll restore your backyard sanctuary without delays.
                </p>

                {/* Common Emergency Repairs Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Variable Speed Pumps",
                    "Heaters & Heat Pumps",
                    "Hydraulic Leaks",
                    "Filter Replacements",
                    "Smart App Automation",
                    "Salt Chlorine Systems",
                  ].map((service, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-cyan-200 backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-300" />
                      <span>{service}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="tel:6158040314"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-lg shadow-rose-900/40 hover:shadow-rose-900/60 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-4 h-4 animate-bounce" />
                  <span>Call Emergency Line: (615) 804-0314</span>
                </a>

                <a
                  href="tel:6155683154"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-blue-100 bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <Wrench className="w-4 h-4 text-cyan-300" />
                  <span>Office: (615) 568-3154</span>
                </a>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden p-4 sm:p-6 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] rounded-[5px] overflow-hidden border border-white/20 shadow-2xl group">
                <Image
                  src="/images/services/emergency-repair.webp"
                  alt="Pool & Spa Repair and Maintenance Service"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Status Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md p-3 rounded-[4px] border border-white/20 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="font-bold">Master Certified Crew</div>
                      <div className="text-[11px] text-slate-300">
                        Diagnostics &amp; Repair Dispatch
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Priority Queue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Compact Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[5px] px-5 py-3.5 sm:py-4 border border-slate-200/90 hover:border-[#004b93]/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-3xl sm:text-[34px] font-black tracking-tight text-[#002b66] leading-none">
                    {stat.number}
                  </div>
                  <div className="w-8 h-8 rounded-[4px] bg-blue-50 text-[#004b93] flex items-center justify-center group-hover:bg-[#004b93] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </div>

                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5 leading-normal">
                    {stat.detail}
                  </p>
                </div>

                {/* Bottom specular accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#004b93] transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
