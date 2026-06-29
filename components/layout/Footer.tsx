import React from "react";
import Link from "next/link";
import { Compass, Globe, Share2, Heart } from "lucide-react";
import { siteConfig } from "../../config/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full border-t border-sand-300 bg-sand-200/50 py-12 text-deep-navy-800">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-deep-navy-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange-500 text-white shadow shadow-brand-orange-500/10">
                <Compass className="h-5 w-5" />
              </span>
              <span>
                Roam<span className="text-brand-orange-600">ly</span>
              </span>
            </Link>
            <p className="text-sm text-deep-navy-500 leading-relaxed">
              Roamly is a travel itinerary sharing platform. Discover real, unfiltered day-wise trips, budgets, reality checks, and places people regret skipping.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-deep-navy-500">Platform</h3>
            <ul className="flex flex-col gap-2 text-sm text-deep-navy-600">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-orange-600 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curated Trips */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-deep-navy-500">Explore</h3>
            <ul className="flex flex-col gap-2 text-sm text-deep-navy-600">
              {siteConfig.footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-orange-600 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / About */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-deep-navy-500">Community</h3>
            <p className="text-sm text-deep-navy-500 leading-relaxed">
              Built by travelers, for travelers. Follow along and share your real journey.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="text-deep-navy-500 hover:text-brand-orange-600 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-deep-navy-500 hover:text-brand-orange-600 transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 border-t border-sand-300 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-deep-navy-400">
          <div>
            &copy; {new Date().getFullYear()} Roamly Inc. All rights reserved. Not a booking platform.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-brand-orange-500 fill-brand-orange-500" /> by travel enthusiasts.
          </div>
        </div>
      </Container>
    </footer>
  );
}
