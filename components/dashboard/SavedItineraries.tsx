import React from "react";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import ItineraryCard from "../itinerary/ItineraryCard";
import EmptyState from "../shared/EmptyState";

export default function SavedItineraries() {
  // Simulate saved itineraries (filtering by non-user-1 creatorId)
  const savedTrips = DEMO_ITINERARIES.filter((t) => t.creatorId !== "user-1");

  if (savedTrips.length === 0) {
    return (
      <EmptyState
        title="No saved itineraries"
        description="Explore the feed and bookmark itineraries to save them to your profile."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {savedTrips.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}
