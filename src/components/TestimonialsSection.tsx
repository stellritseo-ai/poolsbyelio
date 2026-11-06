"use client";

import React from "react";
import {
  Sparkles,
  Star,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// Official Google Multi-color SVG Icon
function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1A11.996 11.996 0 0012 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.32a7.18 7.18 0 010-4.64V6.58H1.25a11.996 11.996 0 000 10.84l4.03-3.1z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.39 0 3.39 2.65 1.25 6.58l4.03 3.1c.95-2.83 3.6-4.93 6.72-4.93z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface ReviewItem {
  id: number;
  author: string;
  initials: string;
  location: string;
  tag: string;
  timeAgo: string;
  stars: number;
  text: string;
}

const row1Reviews: ReviewItem[] = [
  {
    id: 1,
    author: "Kellye Brock",
    initials: "KB",
    location: "Nashville, TN",
    tag: "Custom Resort Gunite Pool",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "Our pool was built in 2019. The team and communication throughout the process was wonderful. They felt like part of the family. Our pool is beautiful and it transformed our yard into what now looks like a private luxury resort. Thanks Jonathan!",
  },
  {
    id: 2,
    author: "Marcus & Elena Vance",
    initials: "MV",
    location: "Belle Meade, TN",
    tag: "Negative-Edge Pool & Spa",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "Jonathan and his crew built our custom gunite pool with an integrated hot tub and natural rock waterfall. The structural gunite craftsmanship is breathtaking. Finished exactly on time and within budget!",
  },
  {
    id: 3,
    author: "JB",
    initials: "JB",
    location: "Franklin, TN",
    tag: "Custom Pool & Travertine Deck",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "I drew a custom pool and a new deck from scratch. Jonathan was able to convert this to a beautiful project that revitalized my backyard and substantially increased the market resale value of our home.",
  },
  {
    id: 4,
    author: "David Henderson",
    initials: "DH",
    location: "Green Hills, TN",
    tag: "Modern Geometric Pool",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "After interviewing 4 pool builders in Middle Tennessee, Jonathan stood out immediately. No pushy sales gimmicks—just true master engineering knowledge of gunite, soil mechanics, and hydraulics. 5 stars all the way!",
  },
  {
    id: 5,
    author: "Barb Groux",
    initials: "BG",
    location: "Brentwood, TN",
    tag: "Structural Renovation & Service",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "I have used Pools by Elio for several years. Jonathan did a major pool repair when our older shell cracked, and the job went flawlessly and has held up rock solid. I will always continue to recommend Jonathan.",
  },
  {
    id: 6,
    author: "Sarah & Todd Jenkins",
    initials: "SJ",
    location: "Hendersonville, TN",
    tag: "Freeform Family Oasis",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "The 3D photorealistic design phase blew us away, but the final build was even better. Our kids spend every single summer weekend in the pool. Pools by Elio is by far the premier pool company in Tennessee.",
  },
];

const row2Reviews: ReviewItem[] = [
  {
    id: 7,
    author: "Robert & Linda Miller",
    initials: "RM",
    location: "Oak Hill, TN",
    tag: "Estate Gunite Pool & Grotto",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "Outstanding experience from excavation to start-up. Jonathan personally inspected every stage of the rebar grid and pneumatic gunite application. Having the owner hands-on gave us total peace of mind.",
  },
  {
    id: 8,
    author: "Michael Thorne",
    initials: "MT",
    location: "Forest Hills, TN",
    tag: "Vanishing Edge Hillside Pool",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "We had a tricky sloping backyard with limestone rock ledge. Pools by Elio engineered a custom retaining structure and vanishing-edge pool that looks like something out of Architectural Digest. Master engineering.",
  },
  {
    id: 9,
    author: "Amanda Wright",
    initials: "AW",
    location: "Mount Juliet, TN",
    tag: "Smart Automation & Heated Spa",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "The smart automation system Jonathan installed lets us heat the spa and turn on the water features right from our smartphones before we even leave the office. Unbelievable luxury and attention to detail.",
  },
  {
    id: 10,
    author: "Chris & Patricia Hayes",
    initials: "CH",
    location: "Murfreesboro, TN",
    tag: "Travertine Patio & Plunge Pool",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "From the French travertine coping to the glass waterline tile, every joint and radius is flawless. Jonathan is honest, transparent, and genuinely treats your project as if it were his own family's backyard.",
  },
  {
    id: 11,
    author: "Thomas Sterling",
    initials: "TS",
    location: "Spring Hill, TN",
    tag: "Commercial Facility & Estate Pool",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "Jonathan engineered our commercial resort swimming facility and later built our private residential pool. His structural integrity, hydraulic filtration, and safety standards are unmatched in Nashville.",
  },
  {
    id: 12,
    author: "Rachel & Greg Campbell",
    initials: "RC",
    location: "Leiper's Fork, TN",
    tag: "Natural Boulder Waterfall Pool",
    timeAgo: "Verified Google Review",
    stars: 5,
    text: "Best investment we have ever made. If you want a luxury custom pool engineered properly the first time without contractor headaches, Jonathan at Pools by Elio is the only builder you should call.",
  },
];

function TestimonialCard({ review }: { review: ReviewItem }) {
  return (
    <div className="w-[360px] sm:w-[410px] shrink-0 bg-white/95 rounded-[5px] p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(66,133,244,0.12)] hover:border-[#4285F4]/60 transition-all duration-300 flex flex-col justify-between group relative select-none">
      <div>
        {/* Top Header: Google Branding, Stars, Verified Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <GoogleLogo className="w-5 h-5 shrink-0" />
            <div className="flex items-center space-x-0.5 text-amber-400">
              {[...Array(review.stars)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10.5px] font-bold text-[#1a73e8]">
            <CheckCircle2 className="w-3 h-3 text-[#1a73e8]" />
            <span>Verified by Google</span>
          </div>
        </div>

        {/* Project Tag */}
        <div className="text-[11px] font-semibold text-[#004b93] tracking-wide uppercase mb-2">
          {review.tag}
        </div>

        {/* Review Quote Text */}
        <p className="text-slate-700 text-[13.5px] sm:text-[14px] leading-relaxed italic mb-4 font-normal">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Author Bar */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#003870] to-[#0066cc] text-white font-extrabold text-xs flex items-center justify-center shadow-sm shrink-0">
            {review.initials}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-slate-900 text-sm truncate">
              {review.author}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {review.location}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span>Google Review</span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const row1 = [...row1Reviews, ...row1Reviews];
  const row2 = [...row2Reviews, ...row2Reviews];

  return (
    <section
      id="reviews"
      style={{
        marginRight: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        borderRadius: "5px",
      }}
      className="relative py-[50px] mr-[10px] mb-[10px] ml-[10px] rounded-[5px] overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-[#ffffff] border border-slate-200/80 shadow-sm"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      {/* Top Header Section */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center w-full max-w-none mx-auto space-y-3 mb-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004b93]/10 border border-[#004b93]/20 text-[#004b93] text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#004b93]" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#003870] tracking-tight text-center">
            Stories From The Backyard
          </h2>

          <p className="text-center w-full text-slate-600 text-base sm:text-[17px] font-medium max-w-none lg:whitespace-nowrap leading-relaxed">
            Real 5-star experiences from homeowners we&apos;ve had the honor to
            serve across Greater Nashville &amp; Middle Tennessee.
          </p>

          {/* Google Verified Master Trust Rating Bar */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2">
                <GoogleLogo className="w-5 h-5 shrink-0" />
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  5.0
                </span>
              </div>

              <div className="flex items-center space-x-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <span className="text-xs font-bold text-slate-700 border-l border-slate-200 pl-3">
                100% Verified By Google Reviews
              </span>

              <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
                • 50+ Five-Star Ratings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Sliding Two Rows of Testimonials */}
      <div className="relative mt-4 space-y-4 overflow-hidden">
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#ffffff] via-[#ffffff]/80 to-transparent z-20" />

        {/* Row 1: Slides Left smoothly */}
        <div className="overflow-hidden py-1">
          <div className="marquee-row-left gap-4 sm:gap-5 flex">
            {row1.map((rev, idx) => (
              <TestimonialCard key={`row1-${rev.id}-${idx}`} review={rev} />
            ))}
          </div>
        </div>

        {/* Row 2: Slides Right smoothly */}
        <div className="overflow-hidden py-1">
          <div className="marquee-row-right gap-4 sm:gap-5 flex">
            {row2.map((rev, idx) => (
              <TestimonialCard key={`row2-${rev.id}-${idx}`} review={rev} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA & Trust Action */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#004b93] hover:bg-[#003870] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Start Your Backyard Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://www.google.com/search?q=Pools+by+Elio+Nashville+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 shadow-sm transition-all"
          >
            <GoogleLogo className="w-4 h-4" />
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Keyframe animation for infinite smooth slide with hover pause */}
      <style>{`
        @keyframes slideRowLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes slideRowRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .marquee-row-left {
          display: flex;
          width: max-content;
          animation: slideRowLeft 40s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          contain: layout paint;
        }
        .marquee-row-right {
          display: flex;
          width: max-content;
          animation: slideRowRight 44s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          contain: layout paint;
        }
        .marquee-row-left:hover,
        .marquee-row-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
