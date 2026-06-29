import React from "react";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import ItineraryCard from "../itinerary/ItineraryCard";
import EmptyState from "../shared/EmptyState";
import { Shuffle } from "lucide-react";

export default function RemixedItineraries() {
  // Simulate remixed trips
  const remixedTrips = DEMO_ITINERARIES.filter((t) => t.remixedFromId);

  if (remixedTrips.length === 0) {
    return (
      <EmptyState
        icon={<Shuffle className="h-10 w-10 text-deep-navy-300" />}
        title="No remixed itineraries"
        description="Remixing allows you to copy someone else's trip and edit it for your own travel needs."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {remixedTrips.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}
