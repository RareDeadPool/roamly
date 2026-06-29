import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import ItineraryGrid from "../itinerary/ItineraryGrid";

export default function FeaturedItineraries() {
  return (
    <section className="py-20 relative section-glass">
      {/* Subtle top glow */}
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="tag-pill mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Journeys
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Real Plans by{" "}
              <span className="gradient-text">Real Travelers</span>
            </h2>
            <p className="text-white/45 text-sm mt-2 max-w-md">
              Verified itineraries detailing true travel expenses and local tips.
            </p>
          </div>
          <Link
            href="/explore"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors glass px-4 py-2 rounded-xl"
          >
            Explore all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ItineraryGrid itineraries={DEMO_ITINERARIES} />
      </div>
    </section>
  );
}
