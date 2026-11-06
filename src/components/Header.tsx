"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    {
      label: "Services",
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { label: "Pools & Spas", href: "#services" },
        { label: "Water Features", href: "#services" },
        { label: "State of the Art Technology", href: "#services" },
        { label: "Water Parks", href: "#services" },
        { label: "Fountains", href: "#services" },
        { label: "Backyard Concepts", href: "#services" },
      ],
    },
    { label: "Before After", href: "#portfolio" },
    { label: "Areas We Serve", href: "#contact" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative w-full z-30 pt-[10px] px-[10px] pb-[10px] bg-white">
      <div className="w-full rounded-[5px] overflow-hidden shadow-md border border-slate-200/80 bg-white">
        
        {/* 1. TOP BLUE BAR - Exact color: #0555a0 with 19px top rounded corners */}
        <div className="w-full bg-[#0555a0] text-white text-xs md:text-[13px] font-normal py-2 px-4 sm:px-6 lg:px-8 border-b border-blue-400/20 shadow-sm">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            {/* Left items: Mail & Address */}
            <div className="flex items-center space-x-6 sm:space-x-8">
              <a
                href="mailto:eliocustompools@live.com"
                className="flex items-center space-x-2 text-white/95 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 stroke-[2.2]" />
                <span className="tracking-wide">eliocustompools@live.com</span>
              </a>

              <div className="hidden sm:flex items-center space-x-2 text-white/95">
                <MapPin className="w-3.5 h-3.5 shrink-0 fill-white/20 stroke-[2.2]" />
                <span className="tracking-wide">
                  412 Ezell pike Nashville TN 37217
                </span>
              </div>
            </div>

            {/* Right item: "We also design fountains for pools & homes. Click here." */}
            <div className="text-right text-xs md:text-[13px]">
              <a
                href="#services"
                className="text-white/95 hover:text-white transition-colors tracking-wide"
              >
                <span>We also design fountains for pools &amp; homes. </span>
                <span className="underline underline-offset-2 font-medium hover:text-cyan-200">
                  Click here.
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVBAR - White Bar with 19px bottom rounded corners */}
        <nav className="w-full bg-white py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            
            {/* Left: Brand Logo */}
            <Link href="#hero" className="flex items-center shrink-0">
              <div className="relative h-12 w-36 sm:h-14 sm:w-44 md:h-16 md:w-52 transition-transform hover:scale-[1.02] duration-200">
                <Image
                  src="/images/logo.png"
                  alt="Pools By Elio - Nashville's Premier Custom Pool Company"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden xl:flex items-center space-x-4 lg:space-x-6 2xl:space-x-8 text-[14px] 2xl:text-[15px] font-medium text-slate-800">
              {navLinks.map((item) => {
                const isActive = activeTab === item.label;

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => {
                          setActiveTab(item.label);
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        }}
                        className={`flex items-center gap-1 transition-colors py-1.5 px-2 rounded-lg ${
                          isActive
                            ? "text-[#071684] font-semibold"
                            : "text-slate-800 hover:text-[#0555a0]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500 transition-transform group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          {item.dropdownItems?.map((drop) => (
                            <a
                              key={drop.label}
                              href={drop.href}
                              onClick={() => {
                                setActiveTab("Services");
                                setServicesDropdownOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0555a0] transition-colors"
                            >
                              {drop.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Home") {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveTab(item.label)}
                      className="bg-[#071684] text-white px-5 py-1.5 rounded-full font-semibold shadow-sm transition-all hover:bg-[#051166]"
                    >
                      Home
                    </a>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveTab(item.label)}
                    className={`transition-colors py-1.5 px-1 ${
                      isActive
                        ? "text-[#071684] font-bold"
                        : "text-slate-800 hover:text-[#0555a0]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3 shrink-0">
              {/* Phone Button - Exact match: Deep Navy #071684 with white phone icon */}
              <a
                href="tel:6155683154"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-[#071684] hover:bg-[#051166] text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                <span className="tracking-wide">(615) 568-3154</span>
              </a>

              {/* Get a Quote Button - Exact match: Royal Blue #0047a0 / #0555a0 */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full text-white bg-[#0047a0] hover:bg-[#003870] text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Get a Quote</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center space-x-2">
              <a
                href="tel:6155683154"
                className="p-2 rounded-full bg-[#071684] text-white sm:hidden"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 fill-white" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-800 hover:text-[#0555a0] hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="xl:hidden bg-white border-t border-slate-100 px-6 py-5 rounded-b-[5px] shadow-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                      activeTab === item.label
                        ? "bg-blue-50 text-[#071684] font-bold"
                        : "text-slate-800 hover:bg-slate-50 hover:text-[#0555a0]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="tel:6155683154"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-white bg-[#071684] font-semibold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call (615) 568-3154</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center rounded-full text-white bg-[#0047a0] font-semibold text-sm shadow-md"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
