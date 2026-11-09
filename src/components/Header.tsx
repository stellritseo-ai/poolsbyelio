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
  ChevronRight,
  Waves,
  Droplets,
  Cpu,
  Building2,
  Sparkles,
  Wine,
  ArrowRight,
  ShieldCheck,
  Home,
  Award,
  Layers,
  Images,
  Compass,
  Star,
  MessageSquare,
  ExternalLink,
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
    {
      label: "Home",
      href: "/",
      subtitle: "Nashville's Custom Pool & Spa Builder",
      icon: Home,
    },
    {
      label: "About Us",
      href: "/about",
      subtitle: "25+ Years of Family-Owned Craftsmanship",
      icon: Award,
    },
    {
      label: "Services",
      href: "/services",
      subtitle: "6 Master Aquatic & Outdoor Living Divisions",
      icon: Layers,
      hasDropdown: true,
      dropdownItems: subServices,
    },
    {
      label: "Before After",
      href: "/before-after",
      subtitle: "Interactive Sliders & 45+ Project Gallery",
      icon: Images,
    },
    {
      label: "Areas We Serve",
      href: "/areas-we-serve",
      subtitle: "50-Mile Middle Tennessee Service Radius",
      icon: Compass,
    },
    {
      label: "Reviews",
      href: "/reviews",
      subtitle: "5.0★ Verified Homeowner Testimonials",
      icon: Star,
    },
    {
      label: "Contact",
      href: "/contact",
      subtitle: "Direct Builder Dispatch & Showroom HQ",
      icon: MessageSquare,
    },
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
                    : "h-13 w-40 sm:h-15 sm:w-44 md:h-16 md:w-52 lg:h-[74px] lg:w-[172px] xl:h-[80px] xl:w-[185px]"
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
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveTab(item.label);
                          setServicesDropdownOpen(false);
                        }}
                        className={`flex items-center gap-1 transition-all ${
                          isPageActive
                            ? "bg-[#071684] text-white px-5 py-1.5 rounded-full font-semibold shadow-sm hover:bg-[#051166]"
                            : isActive
                              ? "text-[#071684] font-semibold py-1.5 px-2 rounded-lg"
                              : "text-slate-800 hover:text-[#0555a0] py-1.5 px-2 rounded-lg"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isPageActive ? "text-white/90" : "text-slate-500"
                          } ${servicesDropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`}
                        />
                      </Link>

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
                            <Link
                              href="/services"
                              onClick={() => {
                                setActiveTab("Services");
                                setServicesDropdownOpen(false);
                              }}
                              className="inline-flex items-center gap-1 font-extrabold text-slate-700 hover:text-[#0055a5] transition-colors"
                            >
                              <span>View All Services Hub</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
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

            {/* Mobile Action & Animated 3-Line Hamburger Trigger */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href="tel:6155683154"
                className="inline-flex sm:hidden items-center justify-center w-10 h-10 rounded-xl bg-[#071684] hover:bg-[#051166] text-white shadow-sm active:scale-95 transition-all"
                aria-label="Call (615) 568-3154"
              >
                <Phone className="w-4 h-4 fill-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className={`group inline-flex items-center gap-2.5 h-10 px-3.5 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  mobileMenuOpen
                    ? "bg-[#00285c] text-white border-[#00285c] shadow-md"
                    : "bg-slate-50/90 text-[#00285c] border-slate-200/90 hover:bg-blue-50/80 hover:border-blue-200 shadow-2xs"
                }`}
              >
                <span className="hidden xs:inline text-[11px] font-extrabold tracking-widest">
                  {mobileMenuOpen ? "Close" : "Menu"}
                </span>
                {/* Precision Animated 3-Line Architectural Icon */}
                <span className="relative w-5 h-3.5 flex flex-col justify-between items-end">
                  <span
                    className={`h-[2px] rounded-full transition-all duration-300 origin-center ${
                      mobileMenuOpen
                        ? "w-5 bg-cyan-300 translate-y-[6px] rotate-45"
                        : "w-5 bg-[#00285c] group-hover:bg-[#0055a5]"
                    }`}
                  />
                  <span
                    className={`h-[2px] rounded-full transition-all duration-300 ${
                      mobileMenuOpen
                        ? "w-0 opacity-0 bg-cyan-300"
                        : "w-3.5 bg-[#0055a5] group-hover:w-5"
                    }`}
                  />
                  <span
                    className={`h-[2px] rounded-full transition-all duration-300 origin-center ${
                      mobileMenuOpen
                        ? "w-5 bg-cyan-300 -translate-y-[6px] -rotate-45"
                        : "w-4 bg-[#00285c] group-hover:w-5 group-hover:bg-[#0055a5]"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Backdrop Scrim */}
          {mobileMenuOpen && (
            <div
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
              className="xl:hidden fixed inset-x-0 bottom-0 top-[72px] bg-slate-950/45 backdrop-blur-[2px] z-40 animate-in fade-in duration-200"
            />
          )}

          {/* Ultra-Premium Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="xl:hidden absolute left-0 right-0 top-full mt-1.5 mx-1 sm:mx-2 bg-white rounded-2xl border border-slate-200/90 shadow-[0_28px_70px_rgba(0,20,55,0.28)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100dvh-88px)] flex flex-col">
              {/* Top Authority Strip */}
              <div className="bg-gradient-to-r from-[#001a40] via-[#00285c] to-[#0047a0] px-4 py-2.5 text-white flex items-center justify-between gap-2 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse shrink-0" />
                  <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-widest text-cyan-200 truncate">
                    Pools By Elio • Master Aquatic Builder
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-300/30 text-emerald-200 text-[10px] font-bold shrink-0">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" />
                  <span>In-House Crew</span>
                </span>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="p-3 sm:p-4 overflow-y-auto overscroll-contain space-y-2 flex-1">
                {navLinks.map((item) => {
                  const ItemIcon = item.icon;
                  const isPageActive =
                    (item.label === "About Us" && pathname === "/about") ||
                    (item.label === "Contact" && pathname === "/contact") ||
                    (item.label === "Areas We Serve" && pathname === "/areas-we-serve") ||
                    (item.label === "Before After" &&
                      (pathname === "/before-after" ||
                        pathname === "/before-and-after" ||
                        pathname === "/portfolio")) ||
                    (item.label === "Reviews" &&
                      (pathname === "/reviews" || pathname === "/testimonials")) ||
                    (item.label === "Services" &&
                      (pathname === "/pools-and-spas" ||
                        pathname === "/water-features" ||
                        pathname === "/technology" ||
                        pathname === "/state-of-the-art-technology" ||
                        pathname === "/water-parks" ||
                        pathname === "/fountains" ||
                        pathname === "/backyard-concepts" ||
                        pathname.startsWith("/services"))) ||
                    (item.label === "Home" && pathname === "/");

                  if (item.hasDropdown) {
                    return (
                      <div
                        key={item.label}
                        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                          servicesDropdownOpen || isPageActive
                            ? "border-[#0055a5]/35 bg-blue-50/35 shadow-2xs"
                            : "border-slate-200/80 bg-white hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-center justify-between p-2.5 sm:p-3 gap-2">
                          <Link
                            href={item.href}
                            onClick={() => {
                              setActiveTab(item.label);
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-3 min-w-0 flex-1 group/nav"
                          >
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isPageActive
                                  ? "bg-[#00285c] text-cyan-300 shadow-xs"
                                  : "bg-blue-50 text-[#00509e] group-hover/nav:bg-[#00509e] group-hover/nav:text-white"
                              }`}
                            >
                              <ItemIcon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-sm sm:text-[15px] font-extrabold truncate ${
                                    isPageActive ? "text-[#00285c]" : "text-slate-900"
                                  }`}
                                >
                                  {item.label}
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-[#00509e]/10 text-[#00509e] text-[10px] font-extrabold uppercase tracking-wider">
                                  6 Divisions
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                          </Link>

                          <button
                            type="button"
                            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                            className={`px-2.5 py-2 rounded-lg border text-xs font-bold flex items-center gap-1 transition-all shrink-0 cursor-pointer ${
                              servicesDropdownOpen
                                ? "bg-[#00285c] text-white border-[#00285c]"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-[#00509e]"
                            }`}
                            aria-label="Toggle Services submenu"
                          >
                            <span className="text-[10.5px] font-extrabold uppercase">
                              {servicesDropdownOpen ? "Hide" : "Explore"}
                            </span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                servicesDropdownOpen ? "rotate-180 text-cyan-300" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {servicesDropdownOpen && (
                          <div className="px-2.5 pb-3 pt-1 border-t border-blue-100/80 bg-white/90 space-y-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
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
                                    className={`flex items-start gap-2.5 p-2.5 rounded-xl border transition-all min-w-0 ${
                                      isDropActive
                                        ? "bg-[#00285c] text-white border-[#00285c] shadow-sm"
                                        : "bg-slate-50/80 hover:bg-blue-50/80 text-slate-800 border-slate-200/70"
                                    }`}
                                  >
                                    <div
                                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                                        isDropActive
                                          ? "bg-white/15 text-cyan-300"
                                          : "bg-white text-[#00509e] shadow-2xs border border-blue-100"
                                      }`}
                                    >
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-xs sm:text-[13px] font-extrabold truncate">
                                          {drop.label}
                                        </span>
                                        <ChevronRight
                                          className={`w-3.5 h-3.5 shrink-0 ${
                                            isDropActive ? "text-cyan-300" : "text-slate-400"
                                          }`}
                                        />
                                      </div>
                                      <p
                                        className={`text-[10.5px] line-clamp-1 mt-0.5 ${
                                          isDropActive ? "text-blue-100" : "text-slate-500"
                                        }`}
                                      >
                                        {drop.tagline}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            <Link
                              href="/services"
                              onClick={() => {
                                setActiveTab("Services");
                                setMobileMenuOpen(false);
                                setServicesDropdownOpen(false);
                              }}
                              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#003870] text-xs font-extrabold transition-colors"
                            >
                              <span>View Complete Services Hub Page</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
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
                      className={`group/nav flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all duration-200 ${
                        isPageActive
                          ? "bg-gradient-to-r from-[#00285c] to-[#00509e] text-white border-[#00285c] shadow-md"
                          : "bg-white hover:bg-slate-50/90 text-slate-900 border-slate-200/80 hover:border-blue-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isPageActive
                              ? "bg-white/15 text-cyan-300"
                              : "bg-blue-50 text-[#00509e] group-hover/nav:bg-[#00509e] group-hover/nav:text-white"
                          }`}
                        >
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm sm:text-[15px] font-extrabold truncate">
                            {item.label}
                          </div>
                          <div
                            className={`text-[11px] truncate mt-0.5 ${
                              isPageActive ? "text-blue-100" : "text-slate-500"
                            }`}
                          >
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform group-hover/nav:translate-x-0.5 ${
                          isPageActive ? "text-cyan-300" : "text-slate-400"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Anchored Bottom Conversion & Contact Dock */}
              <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200/90 space-y-3 shrink-0">
                {/* Dual Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href="tel:6155683154"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-[#071684] hover:bg-[#051166] font-extrabold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4 fill-white shrink-0" />
                    <span>(615) 568-3154</span>
                  </a>
                  <Link
                    href="/quote"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-gradient-to-r from-[#00509e] to-[#0077cc] hover:from-[#003870] hover:to-[#00509e] font-extrabold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <span>Get Free 3D Quote</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>

                {/* Fountains Sister-Brand Card */}
                <a
                  href="http://thehouseoffountains.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 py-2.5 px-3.5 rounded-xl bg-blue-50/90 hover:bg-blue-100/90 text-[#003870] border border-blue-200/80 text-xs font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Sparkles className="w-4 h-4 text-[#0055a5] shrink-0" />
                    <span className="truncate">
                      We also design fountains for pools &amp; homes.{" "}
                      <strong className="underline text-[#071684]">Click here</strong>
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0055a5] shrink-0" />
                </a>

                {/* HQ Address & Social Row */}
                <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#00509e] shrink-0" />
                    <span>412 Ezell pike Nashville TN 37217</span>
                  </div>
                  <SocialMediaBar variant="compact" />
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
