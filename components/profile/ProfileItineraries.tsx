import React from "react";
import { Itinerary } from "../../types/itinerary";
import ItineraryCard from "../itinerary/ItineraryCard";
import EmptyState from "../shared/EmptyState";

interface ProfileItinerariesProps {
  itineraries: Itinerary[];
  userName: string;
}

export default function ProfileItineraries({ itineraries, userName }: ProfileItinerariesProps) {
  if (itineraries.length === 0) {
    return (
      <EmptyState
        title="No itineraries published"
        description={`${userName} has not published any itineraries yet.`}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {itineraries.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}
