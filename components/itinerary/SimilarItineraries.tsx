import React from "react";
import { Itinerary } from "../../types/itinerary";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import { recommendItineraries } from "../../lib/smartMatch";
import ItineraryCard from "./ItineraryCard";

interface SimilarItinerariesProps {
  currentItinerary: Itinerary;
}

export default function SimilarItineraries({ currentItinerary }: SimilarItinerariesProps) {
  const recommendations = recommendItineraries(DEMO_ITINERARIES, currentItinerary, 3);

  if (recommendations.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-extrabold text-deep-navy-900 border-b border-sand-300 pb-3">
        Similar Trips You Might Like
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((itinerary) => (
          <ItineraryCard key={itinerary.id} itinerary={itinerary} />
        ))}
      </div>
    </div>
  );
}
