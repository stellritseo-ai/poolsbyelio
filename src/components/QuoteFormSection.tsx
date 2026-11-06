"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

export default function QuoteFormSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const services = [
    "Select Service",
    "Custom Luxury Pool & Spa",
    "Water Features & Waterfalls",
    "Commercial Aquatic Park / Resort Pool",
    "Architectural Fountains",
    "Backyard Concepts (Cabana, Fire Pit, Bar)",
    "Luxury Pool Renovation & Remodel",
    "Equipment & Automation Upgrade",
    "Emergency Pool & Spa Repair",
  ];

  return (
    <section
      id="quote-form"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
      }}
      className="relative mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-[#00285c] py-[50px] px-3 sm:px-6 lg:px-8"
    >
      {/* Inner Card Container matching reference image */}
      <div className="max-w-[1100px] mx-auto rounded-[12px] sm:rounded-[14px] bg-[#00509e] p-6 sm:p-10 md:p-12 shadow-2xl text-white">
        {/* Top Pill Badge */}
        <div className="text-center mb-3">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[#006cb8] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">
            REQUEST A QUOTE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white text-center tracking-tight leading-tight mb-3">
          Ready to start? Let&apos;s talk about your project.
        </h2>

        {/* Description Text */}
        <p className="text-center text-white/90 text-xs sm:text-[14px] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
          Have a question about our services? Want to see if your particular
          project is one we can help with? We&apos;d love to hear from you! To get
          a free quote, or if you have questions or special requests, just drop
          us a line. We look forward to serving you! Our pools start at
          $140,000.00+.
        </p>

        {/* Form */}
        {submitted ? (
          <div className="text-center py-10 space-y-3 bg-white/10 rounded-[8px] p-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Thank You! Your Request Has Been Sent.
            </h3>
            <p className="text-blue-100 max-w-md mx-auto text-sm leading-relaxed">
              Jonathan Elio and our master build team will review your project
              details and reach out promptly to schedule your consultation.
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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                aria-label="Your Name"
                placeholder="Jonathan Elio"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />

              <input
                type="email"
                required
                aria-label="Email Address"
                placeholder="eliocustompools@live.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            {/* Row 2: Phone & Select Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                required
                aria-label="Phone Number"
                placeholder="(615) 568-3154"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />

              <div className="relative">
                <select
                  required
                  aria-label="Select Service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 appearance-none cursor-pointer pr-10"
                >
                  {services.map((svc, idx) => (
                    <option
                      key={idx}
                      value={idx === 0 ? "" : svc}
                      disabled={idx === 0}
                    >
                      {svc}
                    </option>
                  ))}
                </select>

                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Row 3: Project Address */}
            <div>
              <input
                type="text"
                aria-label="Project Address"
                placeholder="Project Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>

            {/* Row 4: Message */}
            <div>
              <textarea
                rows={4}
                aria-label="Message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[5px] bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-y"
              />
            </div>

            {/* Row 5: Send Now Full-Width Dark Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-[5px] bg-[#001433] hover:bg-[#000e26] text-white font-bold text-sm sm:text-base tracking-wide transition-colors duration-200 disabled:opacity-75 shadow-md"
              >
                {loading ? "Sending..." : "Send Now"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
