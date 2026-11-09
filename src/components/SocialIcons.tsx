import React from "react";

// 1. Facebook Official Icon
export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// 2. Instagram Official Icon
export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// 3. Google Official Multi-Color Icon
export function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

// 4. Yelp Official Burst Icon
export function YelpIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.16 12.73a.87.87 0 0 0-.74-.84l-4.7-.82 1.9-4.34a.87.87 0 0 0-.39-1.07l-2.02-1.12a.86.86 0 0 0-1.13.33l-2.3 4.14-2.3-4.14a.86.86 0 0 0-1.13-.33L5.33 5.66a.87.87 0 0 0-.39 1.07l1.9 4.34-4.7.82a.87.87 0 0 0-.74.84l.02 2.31a.87.87 0 0 0 .7.85l4.66 1.01-2.12 4.24a.87.87 0 0 0 .34 1.09l1.98 1.18a.86.86 0 0 0 1.14-.29l2.48-4.04 2.48 4.04a.86.86 0 0 0 1.14.29l1.98-1.18a.87.87 0 0 0 .34-1.09l-2.12-4.24 4.66-1.01a.87.87 0 0 0 .7-.85l.02-2.31z" />
    </svg>
  );
}

// 5. Better Business Bureau (BBB Accredited) Icon
export function BBBIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2 3h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 3.5v11h3.3c1.3 0 2.2-.4 2.8-1.1.5-.6.7-1.3.7-2.1 0-.9-.3-1.6-.9-2.1.8-.4 1.2-1.1 1.2-2 0-.8-.3-1.5-.8-2-.6-.6-1.5-.8-2.6-.8H5zm2 2h1.2c.6 0 1 .1 1.3.4.3.2.4.6.4 1s-.1.8-.4 1c-.3.3-.7.4-1.3.4H7v-2.8zm0 4.6h1.4c.7 0 1.2.1 1.5.4.3.3.5.7.5 1.2s-.2 1-.5 1.3c-.3.3-.8.4-1.5.4H7v-3.3zm7.5-6.6v11h3.3c1.3 0 2.2-.4 2.8-1.1.5-.6.7-1.3.7-2.1 0-.9-.3-1.6-.9-2.1.8-.4 1.2-1.1 1.2-2 0-.8-.3-1.5-.8-2-.6-.6-1.5-.8-2.6-.8h-3.7zm2 2h1.2c.6 0 1 .1 1.3.4.3.2.4.6.4 1s-.1.8-.4 1c-.3.3-.7.4-1.3.4h-1.2v-2.8zm0 4.6h1.4c.7 0 1.2.1 1.5.4.3.3.5.7.5 1.2s-.2 1-.5 1.3c-.3.3-.8.4-1.5.4h-1.4v-3.3z" />
    </svg>
  );
}

// Central Social Media Link Definitions
export interface SocialLinkItem {
  id: string;
  name: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  brandColorHover: string;
  badgeText: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: "facebook",
    name: "Facebook",
    label: "Follow Pools By Elio on Facebook",
    href: "https://www.facebook.com/poolsbyelio/",
    icon: FacebookIcon,
    brandColorHover: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    badgeText: "Follow on Facebook",
  },
  {
    id: "instagram",
    name: "Instagram",
    label: "Follow Pools By Elio on Instagram (@poolbyelio)",
    href: "https://www.instagram.com/poolbyelio/",
    icon: InstagramIcon,
    brandColorHover: "hover:bg-[#E4405F] hover:border-[#E4405F]",
    badgeText: "@poolbyelio",
  },
  {
    id: "google",
    name: "Google Business",
    label: "View Pools By Elio on Google Maps & Reviews",
    href: "https://www.google.com/searchviewer/10?svid=CCYSESoPCg0vZy8xMW5ucXFwX2YwGAo",
    icon: GoogleIcon,
    brandColorHover: "hover:bg-white hover:border-slate-300",
    badgeText: "5.0 ★ Google Verified",
  },
  {
    id: "yelp",
    name: "Yelp",
    label: "View Pools By Elio on Yelp Nashville",
    href: "https://www.yelp.com/biz/pools-by-elio-nashville-2",
    icon: YelpIcon,
    brandColorHover: "hover:bg-[#D32323] hover:border-[#D32323]",
    badgeText: "Yelp Nashville",
  },
  {
    id: "bbb",
    name: "BBB",
    label: "Better Business Bureau Accredited Business Profile",
    href: "https://www.bbb.org/us/tn/nashville/profile/pool-contractors/pools-by-elio-0573-37378278",
    icon: BBBIcon,
    brandColorHover: "hover:bg-[#005A70] hover:border-[#005A70]",
    badgeText: "BBB Accredited",
  },
];

// Reusable Social Links Bar for Header, Footer, and Contact cards
export function SocialMediaBar({
  variant = "footer",
  className = "",
}: {
  variant?: "header" | "footer" | "contact" | "compact";
  className?: string;
}) {
  if (variant === "header") {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.name}
              className="w-6 h-6 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0555a0] flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-sm"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center space-x-1.5 ${className}`}>
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.name}
              className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#0055a5] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-2.5 ${className}`}>
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold truncate">{link.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  // Default: Footer variant
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.name}
            className={`w-9 h-9 rounded-full bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-200 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm ${link.brandColorHover}`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}
