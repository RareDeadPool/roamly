"use client";

import React, { useState, useMemo } from "react";
import Container from "../../components/layout/Container";
import SearchBar from "../../components/explore/SearchBar";
import FilterSidebar from "../../components/explore/FilterSidebar";
import MobileFilterDrawer from "../../components/explore/MobileFilterDrawer";
import SortDropdown from "../../components/explore/SortDropdown";
import ItineraryGrid from "../../components/itinerary/ItineraryGrid";
import { DEMO_ITINERARIES } from "../../data/demoItineraries";
import { smartMatchItineraries } from "../../lib/smartMatch";
import { Compass } from "lucide-react";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [maxBudget, setMaxBudget] = useState(5000);
  const [selectedPace, setSelectedPace] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

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

  const filteredItineraries = useMemo(() => {
    let results = smartMatchItineraries(DEMO_ITINERARIES, searchQuery);
    results = results.filter((it) => it.budget <= maxBudget);
    if (selectedStyles.length > 0) {
      results = results.filter((it) =>
        selectedStyles.some((style) => it.travelStyle.toLowerCase().includes(style.toLowerCase()))
      );
    }
    if (selectedPace !== "all") {
      results = results.filter((it) => it.pace === selectedPace);
    }
    return results.sort((a, b) => {
      switch (sortBy) {
        case "popular":       return b.likesCount - a.likesCount;
        case "budget-asc":    return a.budget - b.budget;
        case "budget-desc":   return b.budget - a.budget;
        case "duration-asc":  return a.duration - b.duration;
        case "duration-desc": return b.duration - a.duration;
        case "recent":        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:              return 0;
      }
    });
  }, [searchQuery, selectedStyles, maxBudget, selectedPace, sortBy]);

  return (
    <div className="min-h-screen py-24 px-0">
      <Container>
        {/* Page Header */}
        <div className="mb-8">
          <div className="tag-pill mb-3">
            <Compass className="w-3.5 h-3.5" />
            Discover
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Explore <span className="gradient-text">Trips</span>
          </h1>
          <p className="text-white/45 text-sm mt-2">
            Real travel guides covering budgets, timetables, and unfiltered local tips.
          </p>
        </div>

        <div className="space-y-5">
          {/* Search + controls – glass panel */}
          <div className="glass rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="flex items-center w-full sm:w-auto gap-3">
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

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="glass rounded-2xl p-5">
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
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-5">
              <div className="text-xs text-white/40 font-bold">
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
