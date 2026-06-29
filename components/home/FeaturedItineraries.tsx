import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import SectionTitle from "../shared/SectionTitle";
import ItineraryGrid from "../itinerary/ItineraryGrid";

export default function FeaturedItineraries() {
  return (
    <section className="py-16 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            tag="Featured Journeys"
            title="Real Plans by Real Travelers"
            subtitle="Verified itineraries detailing true travel expenses and local tips."
            className="mb-0"
          />
          <Link
            href="/explore"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-brand-orange-600 hover:text-brand-orange-700 transition-colors"
          >
            Explore all itineraries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ItineraryGrid itineraries={DEMO_ITINERARIES} />
      </div>
    </section>
  );
}
