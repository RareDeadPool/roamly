"use client";

import Link from "next/link";
import { Compass, Camera, MessageCircle, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = {
  Explore: [
    { label: "Discover", href: "/discover" },
    { label: "Create", href: "/create" },
    { label: "Remix", href: "/discover?tab=remix" },
    { label: "Reviews", href: "/explore?tab=reviews" },
    { label: "Hidden Gems", href: "/explore?tab=gems" },
  ],
  Community: [
    { label: "Reality Checks", href: "/explore?tab=reality-checks" },
    { label: "Regret Map", href: "/explore?tab=regrets" },
    { label: "Budget Plans", href: "/discover?filter=budget" },
    { label: "Saved Trips", href: "/saved" },
    { label: "Your Profile", href: "/profile" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

const SOCIAL = [
  { icon: <Camera className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <MessageCircle className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <PlayCircle className="w-4 h-4" />, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#203A32" }}
    >
      {/* Top divider with gradient */}
      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(84,191,203,0.30), transparent)" }}
      />

      {/* Subtle blob */}
      <div
        className="absolute top-0 right-1/3 w-80 h-80 blob-1 pointer-events-none opacity-20"
        style={{ background: "rgba(84,191,203,0.15)", filter: "blur(60px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full group-hover:scale-110 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #54BFCB, #0F6F78)",
                  boxShadow: "4px 4px 12px rgba(15,111,120,0.30), -2px -2px 8px rgba(255,255,255,0.08)",
                }}
              >
                <Compass className="h-5 w-5 text-white" />
              </span>
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F8F6" }}
              >
                Roam
                <span
                  style={{
                    background: "linear-gradient(135deg, #8ED5DE, #54BFCB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ly
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "rgba(207,229,232,0.60)" }}>
              A real travel itinerary community. No hotels, no flights — just
              real trips, honest budgets, hidden gems, and traveler reviews.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(84,191,203,0.12)",
                    border: "1px solid rgba(84,191,203,0.20)",
                    color: "#8ED5DE",
                    boxShadow: "3px 3px 10px rgba(0,0,0,0.25), -2px -2px 8px rgba(255,255,255,0.04)",
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(NAV_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-xs font-extrabold uppercase tracking-widest mb-4"
                style={{ color: "rgba(207,229,232,0.45)" }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors duration-200 hover:text-[#8ED5DE]"
                      style={{ color: "rgba(207,229,232,0.60)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(84,191,203,0.12)" }}
        >
          <p className="text-xs font-medium" style={{ color: "rgba(207,229,232,0.35)" }}>
            © 2025 Roamly. Not a booking platform. A travel community.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Sitemap"].map((t) => (
              <Link
                key={t}
                href={`/${t.toLowerCase()}`}
                className="text-xs font-medium transition-colors hover:text-[#8ED5DE]"
                style={{ color: "rgba(207,229,232,0.35)" }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
