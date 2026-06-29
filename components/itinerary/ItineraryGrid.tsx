import React from "react";
import { Itinerary } from "../../types/itinerary";
import ItineraryCard from "./ItineraryCard";
import EmptyState from "../shared/EmptyState";

interface ItineraryGridProps {
  itineraries: Itinerary[];
}

export default function ItineraryGrid({ itineraries }: ItineraryGridProps) {
  if (itineraries.length === 0) {
    return (
      <EmptyState
        title="No itineraries found"
        description="Try adjusting your keywords or filters to find other travel plans."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {itineraries.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  );
}
