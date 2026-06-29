"use client";

import React from "react";
import { Search } from "lucide-react";
import Button from "../shared/Button";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search destinations, activities, or styles..." }: SearchBarProps) {
  return (
    <div className="relative w-full flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-navy-450" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3 text-sm bg-white border border-sand-300 rounded-2xl focus:outline-none focus:border-brand-orange-500 shadow-sm transition-all"
        />
      </div>
      <Button variant="primary" className="py-3 shadow-none shrink-0 rounded-2xl">
        Search
      </Button>
    </div>
  );
}
