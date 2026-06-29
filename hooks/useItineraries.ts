"use client";

import { useState, useEffect } from "react";
import { Itinerary } from "../types/itinerary";
import { DEMO_ITINERARIES } from "../data/demoItineraries";

export function useItineraries() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setItineraries(DEMO_ITINERARIES);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return {
    itineraries,
    loading,
  };
}
export default useItineraries;
