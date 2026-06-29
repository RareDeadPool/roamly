"use client";

import React, { useState, useMemo } from "react";
import Container from "../../components/layout/Container";
import PageHeader from "../../components/shared/PageHeader";
import SearchBar from "../../components/explore/SearchBar";
import FilterSidebar from "../../components/explore/FilterSidebar";
import MobileFilterDrawer from "../../components/explore/MobileFilterDrawer";
import SortDropdown from "../../components/explore/SortDropdown";
import ItineraryGrid from "../../components/itinerary/ItineraryGrid";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import { smartMatchItineraries } from "../../lib/smartMatch";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [maxBudget, setMaxBudget] = useState(5000);
  const [selectedPace, setSelectedPace] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Toggle Travel Style helper
  const handleToggleStyle = (styleId: string) => {
    setSelectedStyles((prev) =>
      prev.includes(styleId) ? prev.filter((id) => id !== styleId) : [...prev, styleId]
    );
  };

  const handleResetFilters = () => {
    setSelectedStyles([]);
    setMaxBudget(5000);
    setSelectedPace("all");
  };

  // Filter & Sort computation
  const filteredItineraries = useMemo(() => {
    // 1. First search via Smart Match
    let results = smartMatchItineraries(DEMO_ITINERARIES, searchQuery);

    // 2. Budget filter
    results = results.filter((it) => it.budget <= maxBudget);

    // 3. Travel Styles filter
    if (selectedStyles.length > 0) {
      results = results.filter((it) =>
        selectedStyles.some((style) => it.travelStyle.toLowerCase().includes(style.toLowerCase()))
      );
    }

    // 4. Pace filter
    if (selectedPace !== "all") {
      results = results.filter((it) => it.pace === selectedPace);
    }

    // 5. Sorting logic
    return results.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.likesCount - a.likesCount;
        case "budget-asc":
          return a.budget - b.budget;
        case "budget-desc":
          return b.budget - a.budget;
        case "duration-asc":
          return a.duration - b.duration;
        case "duration-desc":
          return b.duration - a.duration;
        case "recent":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }, [searchQuery, selectedStyles, maxBudget, selectedPace, sortBy]);

  return (
    <div className="py-10 bg-sand-100/30 min-h-screen">
      <Container>
        {/* Header */}
        <PageHeader
          title="Explore Trips"
          description="Find real travel guides covering budgets, timetables, and unfiltered local tips."
        />

        <div className="space-y-6">
          {/* Search bar & controls row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-sand-250 p-4 rounded-2xl shadow-sm">
            <div className="flex-1 w-full">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            
            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <MobileFilterDrawer
                selectedStyles={selectedStyles}
                onToggleStyle={handleToggleStyle}
                maxBudget={maxBudget}
                onChangeMaxBudget={setMaxBudget}
                selectedPace={selectedPace}
                onChangePace={setSelectedPace}
                onReset={handleResetFilters}
              />
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          {/* Main Grid content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Sidebar filter column */}
            <div className="hidden lg:block lg:col-span-1">
              <FilterSidebar
                selectedStyles={selectedStyles}
                onToggleStyle={handleToggleStyle}
                maxBudget={maxBudget}
                onChangeMaxBudget={setMaxBudget}
                selectedPace={selectedPace}
                onChangePace={setSelectedPace}
                onReset={handleResetFilters}
              />
            </div>

            {/* Results Grid column */}
            <div className="lg:col-span-3 space-y-6">
              <div className="text-xs text-deep-navy-500 font-bold text-left">
                Showing {filteredItineraries.length} of {DEMO_ITINERARIES.length} travel guides
              </div>
              <ItineraryGrid itineraries={filteredItineraries} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
