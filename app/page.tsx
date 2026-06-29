import React from "react";
import Hero from "../components/home/Hero";
import PopularDestinations from "../components/home/PopularDestinations";
import FeaturedItineraries from "../components/home/FeaturedItineraries";
import TravelStyles from "../components/home/TravelStyles";
import RealityCheckPreview from "../components/home/RealityCheckPreview";
import RegretMissingPreview from "../components/home/RegretMissingPreview";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Intro */}
      <Hero />

      {/* Travel Styles Curated Grid */}
      <TravelStyles />

      {/* Featured Real User Itineraries */}
      <FeaturedItineraries />

      {/* Unfiltered Reality Checks */}
      <RealityCheckPreview />

      {/* Most Visited Destinations */}
      <PopularDestinations />

      {/* Travel Regret Warning Cards */}
      <RegretMissingPreview />
    </div>
  );
}
