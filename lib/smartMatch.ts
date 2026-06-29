import { Itinerary } from "../types/itinerary";

/**
 * Smart matching algorithm to search and sort itineraries based on query similarity.
 */
export function smartMatchItineraries(itineraries: Itinerary[], query: string): Itinerary[] {
  if (!query || query.trim() === "") return itineraries;
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  
  return itineraries
    .map((itinerary) => {
      let score = 0;
      const titleLower = itinerary.title.toLowerCase();
      const descLower = itinerary.description.toLowerCase();
      const destLower = itinerary.destination.toLowerCase();
      const styleLower = itinerary.travelStyle.toLowerCase();
      
      searchTerms.forEach((term) => {
        // High priority: Destination matches
        if (destLower.includes(term)) {
          score += 10;
          if (destLower === term) score += 5; // Exact destination match
        }
        
        // High priority: Title matches
        if (titleLower.includes(term)) {
          score += 5;
        }
        
        // Medium priority: Travel style matches
        if (styleLower.includes(term)) {
          score += 3;
        }
        
        // Low priority: Description matches
        if (descLower.includes(term)) {
          score += 1;
        }
        
        // Check days & places
        itinerary.days.forEach((day) => {
          if (day.title.toLowerCase().includes(term)) score += 1;
          
          day.places.forEach((place) => {
            if (place.name.toLowerCase().includes(term)) score += 2;
            if (place.description?.toLowerCase().includes(term)) score += 0.5;
          });
        });
      });
      
      return { itinerary, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.itinerary);
}

/**
 * Recommend similar itineraries based on travel style and budget proximity.
 */
export function recommendItineraries(
  itineraries: Itinerary[], 
  currentItinerary: Itinerary, 
  limit: number = 3
): Itinerary[] {
  return itineraries
    .filter((it) => it.id !== currentItinerary.id)
    .map((it) => {
      let similarityScore = 0;
      
      // Travel style match
      if (it.travelStyle.toLowerCase() === currentItinerary.travelStyle.toLowerCase()) {
        similarityScore += 5;
      }
      
      // Destination overlap
      if (it.destination.toLowerCase() === currentItinerary.destination.toLowerCase()) {
        similarityScore += 8;
      }
      
      // Budget proximity (within 30%)
      const budgetDiff = Math.abs(it.budget - currentItinerary.budget);
      const budgetRatio = budgetDiff / currentItinerary.budget;
      if (budgetRatio < 0.1) similarityScore += 4;
      else if (budgetRatio < 0.3) similarityScore += 2;
      
      // Duration proximity
      const durationDiff = Math.abs(it.duration - currentItinerary.duration);
      if (durationDiff === 0) similarityScore += 3;
      else if (durationDiff <= 2) similarityScore += 1;

      return { itinerary: it, score: similarityScore };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.itinerary);
}
