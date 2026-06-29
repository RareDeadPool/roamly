"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";

interface SortDropdownProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-deep-navy-500 flex items-center gap-1">
        <ArrowUpDown className="w-3.5 h-3.5" />
        Sort By:
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-xs font-bold text-deep-navy-700 bg-white border border-sand-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-orange-500 cursor-pointer shadow-sm"
      >
        <option value="popular">Popularity (Likes)</option>
        <option value="budget-asc">Budget: Low to High</option>
        <option value="budget-desc">Budget: High to Low</option>
        <option value="duration-asc">Duration: Shortest</option>
        <option value="duration-desc">Duration: Longest</option>
        <option value="recent">Recently Added</option>
      </select>
    </div>
  );
}
