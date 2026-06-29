import React from "react";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import ItineraryCard from "../itinerary/ItineraryCard";
import EmptyState from "../shared/EmptyState";

export default function MyItineraries() {
  // Simulate my itineraries (filtering by user-1 creatorId)
  const myTrips = DEMO_ITINERARIES.filter((t) => t.creatorId === "user-1");

  if (myTrips.length === 0) {
    return (
      <EmptyState
        title="No itineraries published"
        description="You have not shared any travel itineraries yet. Start sharing to help other travelers!"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {myTrips.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}
