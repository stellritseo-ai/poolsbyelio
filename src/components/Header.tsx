"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Waves,
  Droplets,
  Cpu,
  Building2,
  Sparkles,
  Wine,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SocialMediaBar } from "./SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    pathname === "/about"
      ? "About Us"
      : pathname === "/contact"
      ? "Contact"
      : pathname === "/areas-we-serve"
      ? "Areas We Serve"
      : pathname === "/pools-and-spas" || pathname === "/water-features" || pathname === "/technology" || pathname === "/state-of-the-art-technology" || pathname === "/water-parks" || pathname === "/fountains" || pathname.startsWith("/services")
      ? "Services"
      : "Home"
  );
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setIsScrolled((prev) => (prev ? y > 12 : y > 48));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subServices = [
    {
      label: "Pools & Spas",
      href: "/pools-and-spas",
      tagline: "Custom gunite pools, lap pools, vanishing edges & heated spas",
      badge: "Custom Inground",
      icon: Waves,
    },
    {
      label: "Water Features",
      href: "/water-features",
      tagline: "Natural stone waterfalls, rain curtains, grottos & scuppers",
      badge: "Sight & Sound",
      icon: Droplets,
    },
    {
      label: "State of the Art Technology",
      href: "/technology",
      tagline: "Smartphone automation, variable speed pumps & smart heating",
      badge: "Smart Pool Tech",
      icon: Cpu,
    },
    {
      label: "Water Parks",
      href: "/water-parks",
      tagline: "Commercial lazy rivers, splash pads & Gaylord Opryland pedigree",
      badge: "Commercial Scale",
      icon: Building2,
    },
    {
      label: "Fountains",
      href: "/fountains",
      tagline: "Architectural estate fountains, lake aeration & wall water features",
      badge: "Timeless Beauty",
      icon: Sparkles,
    },
    {
      label: "Backyard Concepts",
      href: "/backyard-concepts",
      tagline: "Pool houses, Nashville swim-up bars, stone fire pits & kitchens",
      badge: "Complete Living",
      icon: Wine,
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "/#services",
      hasDropdown: true,
      dropdownItems: subServices,
    },
    { label: "Before After", href: "/before-after" },
    { label: "Areas We Serve", href: "/areas-we-serve" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "pt-0 px-0 pb-0 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(2,24,56,0.1)]"
          : "pt-[6px] px-[10px] pb-[6px] bg-transparent"
      }`}
    >
      <div
        className={`w-full bg-white/95 backdrop-blur-md relative transition-all duration-300 ${
          isScrolled
            ? "rounded-none border-b border-slate-200/80 shadow-none"
            : "rounded-[5px] border border-slate-200/80 shadow-md"
        }`}
      >
        {/* 1. TOP BLUE BAR - Collapses smoothly when sticky/scrolled */}
        <div
          className={`w-full bg-[#0555a0] text-white text-[11px] sm:text-xs font-normal px-3 sm:px-6 lg:px-8 transition-all duration-300 overflow-hidden ${
            isScrolled
              ? "max-h-0 py-0 opacity-0 border-b-0"
              : "max-h-12 py-1.5 opacity-100 border-b border-blue-400/20 shadow-xs rounded-t-[5px]"
          }`}
        >
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2">
            {/* Left items: Mail & Address */}
            <div className="flex items-center space-x-4 sm:space-x-6 min-w-0">
              <a
                href="mailto:eliocustompools@live.com"
                className="flex items-center space-x-1.5 text-white/95 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 stroke-[2.2]" />
                <span className="tracking-wide truncate">eliocustompools@live.com</span>
              </a>

              <div className="hidden md:flex items-center space-x-1.5 text-white/95 shrink-0">
                <MapPin className="w-3.5 h-3.5 shrink-0 fill-white/20 stroke-[2.2]" />
                <span className="tracking-wide">
                  412 Ezell pike Nashville TN 37217
                </span>
              </div>
            </div>

            {/* Center / Right: Social Media & Fountains Announcement */}
            <div className="flex items-center space-x-3 sm:space-x-5 text-right text-[11px] sm:text-xs shrink-0">
              <div className="hidden lg:flex items-center">
                <SocialMediaBar variant="header" />
              </div>

              <a
                href="http://thehouseoffountains.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/95 hover:text-white transition-colors tracking-wide"
              >
                <span className="hidden sm:inline">We also design fountains for pools &amp; homes. </span>
                <span className="sm:hidden">Fountains: </span>
                <span className="underline underline-offset-2 font-medium hover:text-cyan-200">
                  Click here.
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVBAR - Compact & pixel-perfect */}
        <nav
          className={`w-full bg-white px-3 sm:px-6 lg:px-8 relative transition-all duration-300 ${
            isScrolled
              ? "py-1.5 rounded-none"
              : "py-1.5 sm:py-2 rounded-b-[5px]"
          }`}
        >
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2">
            
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <div
                className={`relative transition-all duration-300 hover:scale-[1.02] ${
                  isScrolled
                    ? "h-9 w-28 sm:h-10 sm:w-32 md:h-11 md:w-36 lg:h-[46px] lg:w-[125px]"
                    : "h-11 w-32 sm:h-12 sm:w-36 md:h-14 md:w-44 lg:h-[56px] lg:w-[148px]"
                }`}
              >
                <Image
                  src="/assets/logo.png"
                  alt="Pools By Elio - Nashville's Premier Custom Pool Company"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden xl:flex items-center space-x-3 2xl:space-x-7 text-[14px] 2xl:text-[15px] font-medium text-slate-800">
              {navLinks.map((item) => {
                const isPageActive =
                  (item.label === "About Us" && pathname === "/about") ||
                  (item.label === "Contact" && pathname === "/contact") ||
                  (item.label === "Areas We Serve" && pathname === "/areas-we-serve") ||
                  (item.label === "Before After" && (pathname === "/before-after" || pathname === "/before-and-after" || pathname === "/portfolio")) ||
                  (item.label === "Reviews" && (pathname === "/reviews" || pathname === "/testimonials")) ||
                  (item.label === "Services" && (pathname === "/pools-and-spas" || pathname === "/water-features" || pathname === "/technology" || pathname === "/state-of-the-art-technology" || pathname === "/water-parks" || pathname === "/fountains" || pathname === "/backyard-concepts" || pathname.startsWith("/services"))) ||
                  (item.label === "Home" && pathname === "/");
                const isActive = isPageActive || activeTab === item.label;

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group py-1"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
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
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${servicesDropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
                      </button>

                      {/* Dropdown Menu - Ultra-premium 2-column mega menu card */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full -left-20 xl:-left-28 mt-2 w-[580px] xl:w-[620px] bg-white rounded-2xl shadow-[0_25px_65px_rgba(2,24,56,0.18)] border border-slate-200/90 p-3.5 z-[100] animate-in fade-in slide-in-from-top-2 duration-200 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                          {/* Header Strip */}
                          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 px-1">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#0055a5] animate-pulse" />
                              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0055a5]">
                                Pools By Elio Craftsmanship
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              <span>100% In-House Builds</span>
                            </div>
                          </div>

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {subServices.map((drop) => {
                              const isDropActive = pathname === drop.href;
                              const IconComponent = drop.icon;
                              return (
                                <Link
                                  key={drop.label}
                                  href={drop.href}
                                  onClick={() => {
                                    setActiveTab("Services");
                                    setServicesDropdownOpen(false);
                                  }}
                                  className={`group/item flex items-start gap-2.5 p-2.5 rounded-xl border transition-all duration-200 ${
                                    isDropActive
                                      ? "bg-blue-50/90 border-[#0055a5]/40 shadow-xs"
                                      : "border-transparent hover:border-blue-100 hover:bg-slate-50/90"
                                  }`}
                                >
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                                      isDropActive
                                        ? "bg-[#0055a5] text-white shadow-sm"
                                        : "bg-blue-50 text-[#0055a5] group-hover/item:bg-[#0055a5] group-hover/item:text-white"
                                    }`}
                                  >
                                    <IconComponent className="w-4 h-4" />
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span
                                        className={`text-[13.5px] font-bold truncate transition-colors ${
                                          isDropActive
                                            ? "text-[#0055a5]"
                                            : "text-slate-900 group-hover/item:text-[#0055a5]"
                                        }`}
                                      >
                                        {drop.label}
                                      </span>
                                      <ArrowRight
                                        className={`w-3.5 h-3.5 text-slate-300 transition-all duration-200 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#0055a5] group-hover/item:translate-x-0.5 shrink-0 ${
                                          isDropActive ? "opacity-100 text-[#0055a5]" : ""
                                        }`}
                                      />
                                    </div>
                                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug mt-0.5 font-normal">
                                      {drop.tagline}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Dropdown Bottom Banner */}
                          <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between px-2 text-[11.5px]">
                            <span className="text-slate-500 font-medium">
                              Ready for your custom backyard retreat?
                            </span>
                            <Link
                              href="/quote"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="inline-flex items-center gap-1 font-bold text-[#0055a5] hover:text-[#003870] hover:underline"
                            >
                              <span>Free 3D Estimator</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (isPageActive) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveTab(item.label)}
                      className="bg-[#071684] text-white px-5 py-1.5 rounded-full font-semibold shadow-sm transition-all hover:bg-[#051166]"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <Link
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
                  </Link>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-2.5 shrink-0">
              {/* Phone Button - Exact match: Deep Navy #071684 with white phone icon */}
              <a
                href="tel:6155683154"
                className={`inline-flex items-center gap-2 rounded-full text-white bg-[#071684] hover:bg-[#051166] font-semibold shadow-sm hover:shadow-md transition-all duration-200 ${
                  isScrolled
                    ? "px-4 py-1.5 text-xs"
                    : "px-4 sm:px-5 py-2 text-xs sm:text-[13px]"
                }`}
              >
                <Phone className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                <span className="tracking-wide">(615) 568-3154</span>
              </a>

              {/* Get a Quote Button - Exact match: Royal Blue #0047a0 / #0555a0 */}
              <Link
                href="/quote"
                className={`inline-flex items-center justify-center rounded-full text-white bg-[#0047a0] hover:bg-[#003870] font-semibold shadow-sm hover:shadow-md transition-all duration-200 ${
                  isScrolled
                    ? "px-4 sm:px-5 py-1.5 text-xs"
                    : "px-5 sm:px-6 py-2 text-xs sm:text-[13px]"
                }`}
              >
                <span>Get a Quote</span>
              </Link>
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
            <div className="xl:hidden bg-white border-t border-slate-100 px-4 sm:px-6 py-5 rounded-b-[5px] shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100dvh-110px)] overflow-y-auto overscroll-contain">
              <div className="flex flex-col space-y-2.5">
                {navLinks.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.label} className="flex flex-col">
                        <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50">
                          <Link
                            href={item.href}
                            onClick={() => {
                              setActiveTab(item.label);
                              setMobileMenuOpen(false);
                            }}
                            className={`text-base font-medium transition-colors ${
                              activeTab === item.label
                                ? "text-[#071684] font-bold"
                                : "text-slate-800 hover:text-[#0555a0]"
                            }`}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                            className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
                            aria-label="Toggle Services submenu"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                servicesDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {servicesDropdownOpen && (
                          <div className="pl-2.5 pr-2 py-2 space-y-1.5 bg-blue-50/70 rounded-xl mt-1.5 mb-2 border-l-2 border-[#0055a5]">
                            {subServices.map((drop) => {
                              const isDropActive = pathname === drop.href;
                              const IconComponent = drop.icon;
                              return (
                                <Link
                                  key={drop.label}
                                  href={drop.href}
                                  onClick={() => {
                                    setActiveTab("Services");
                                    setMobileMenuOpen(false);
                                    setServicesDropdownOpen(false);
                                  }}
                                  className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-sm font-semibold transition-colors min-w-0 ${
                                    isDropActive
                                      ? "bg-[#0055a5] text-white shadow-xs"
                                      : "text-slate-700 hover:text-[#0555a0] hover:bg-white/90"
                                  }`}
                                >
                                  <IconComponent
                                    className={`w-4 h-4 shrink-0 ${
                                      isDropActive ? "text-white" : "text-[#0055a5]"
                                    }`}
                                  />
                                  <span className="truncate min-w-0">{drop.label}</span>
                                  <span
                                    className={`hidden sm:inline-block shrink-0 text-[10px] uppercase font-bold ml-auto px-2 py-0.5 rounded-full ${
                                      isDropActive
                                        ? "bg-white/20 text-white"
                                        : "bg-white text-slate-500 border border-slate-200"
                                    }`}
                                  >
                                    {drop.badge}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setActiveTab(item.label);
                        setMobileMenuOpen(false);
                      }}
                      className={`py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                        (item.label === "About Us" && pathname === "/about") ||
                        (item.label === "Contact" && pathname === "/contact") ||
                        (item.label === "Areas We Serve" && pathname === "/areas-we-serve") ||
                        (item.label === "Home" && pathname === "/") ||
                        activeTab === item.label
                          ? "bg-blue-50 text-[#071684] font-bold"
                          : "text-slate-800 hover:bg-slate-50 hover:text-[#0555a0]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="tel:6155683154"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-white bg-[#071684] font-semibold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call (615) 568-3154</span>
                  </a>
                  <Link
                    href="/quote"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center rounded-full text-white bg-[#0047a0] font-semibold text-sm shadow-md"
                  >
                    Get a Quote
                  </Link>

                  <a
                    href="http://thehouseoffountains.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 px-3 rounded-xl bg-blue-50 text-[#0055a5] text-xs font-semibold hover:bg-blue-100 border border-blue-200/80 transition-colors"
                  >
                    <span>We also design fountains for pools &amp; homes. </span>
                    <span className="underline font-bold text-[#071684]">Click here.</span>
                  </a>

                  <div className="pt-2 flex flex-col items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Connect With Pools By Elio
                    </span>
                    <SocialMediaBar variant="compact" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
