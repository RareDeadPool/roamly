import React from "react";
import Link from "next/link";
import { Compass, Globe, Share2, Heart } from "lucide-react";
import { siteConfig } from "../../config/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full glass-dark py-14 text-white border-t border-white/8">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                <Compass className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white font-[Outfit]">
                Roam<span className="gradient-text-orange">ly</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              Roamly is a travel itinerary sharing platform. Discover real, unfiltered day-wise trips, budgets, reality checks, and places people regret skipping.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">Platform</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/55">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-orange-400 transition-colors duration-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">Explore</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/55">
              {siteConfig.footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-orange-400 transition-colors duration-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">Community</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Built by travelers, for travelers. Follow along and share your real journey.
            </p>
            <div className="flex gap-4 mt-1">
              <a href="#" className="text-white/35 hover:text-orange-400 transition-colors" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/35 hover:text-orange-400 transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <div>
            &copy; {new Date().getFullYear()} Roamly Inc. All rights reserved. Not a booking platform.
          </div>
          <div className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> by travel enthusiasts.
          </div>
        </div>
      </Container>
    </footer>
  );
}
