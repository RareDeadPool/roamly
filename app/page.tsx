import React from "react";
import Hero from "../components/home/Hero";
import TravelStyles from "../components/home/TravelStyles";
import FeaturedItineraries from "../components/home/FeaturedItineraries";
import HowItWorks from "../components/home/HowItWorks";
import RemixShowcase from "../components/home/RemixShowcase";
import RealityCheckPreview from "../components/home/RealityCheckPreview";
import RegretMissingPreview from "../components/home/RegretMissingPreview";
import CommunityReviews from "../components/home/CommunityReviews";
import CTASection from "../components/home/CTASection";

export const metadata = {
  title: "Roamly — Real Travel Itineraries, Honest Budgets & Hidden Gems",
  description:
    "Discover real day-wise travel itineraries from Indian travelers. Find hidden gems, avoid tourist traps, remix plans for your budget, and share what actually happened.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero — mountain lake, floating card, animated badges */}
      <Hero />

      {/* 2. Positioning — "Not a booking app" clay comparison */}
      <TravelStyles />

      {/* 3. Featured Indian Itineraries — clay cards */}
      <FeaturedItineraries />

      {/* 4. How Roamly Works — 4 step clay cards */}
      <HowItWorks />

      {/* 5. Remix Showcase — before/after clay tablets */}
      <RemixShowcase />

      {/* 6. Reality Checks — dark pine section */}
      <RealityCheckPreview />

      {/* 7. Regret Map — places people wish they visited */}
      <RegretMissingPreview />

      {/* 8. Community Reviews — honest traveler cards */}
      <CommunityReviews />

      {/* 9. Final CTA — emotional lake-inspired panel */}
      <CTASection />
    </div>
  );
}
