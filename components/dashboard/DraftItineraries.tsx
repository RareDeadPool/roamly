import React from "react";
import EmptyState from "../shared/EmptyState";
import { PenTool } from "lucide-react";

export default function DraftItineraries() {
  return (
    <EmptyState
      icon={<PenTool className="h-10 w-10 text-deep-navy-300" />}
      title="No draft itineraries"
      description="Start creating a new itinerary and save it as a draft if you want to complete it later."
    />
  );
}
