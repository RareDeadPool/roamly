"use client";

import React from "react";
import { Filter, RotateCcw } from "lucide-react";
import { TRAVEL_STYLES } from "../../lib/constants";
import Button from "../shared/Button";
import { Card, CardContent } from "../shared/Card";

interface FilterSidebarProps {
  selectedStyles: string[];
  onToggleStyle: (style: string) => void;
  maxBudget: number;
  onChangeMaxBudget: (budget: number) => void;
  selectedPace: string;
  onChangePace: (pace: string) => void;
  onReset: () => void;
}

export default function FilterSidebar({
  selectedStyles,
  onToggleStyle,
  maxBudget,
  onChangeMaxBudget,
  selectedPace,
  onChangePace,
  onReset,
}: FilterSidebarProps) {
  return (
    <Card className="w-full shadow-none border border-sand-200 rounded-2xl sticky top-24">
      <CardContent className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand-200 pb-4">
          <h3 className="font-extrabold text-sm text-deep-navy-900 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-brand-orange-500" />
            Filters
          </h3>
          <button
            onClick={onReset}
            className="text-[10px] font-bold text-deep-navy-450 hover:text-brand-orange-600 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        </div>

        {/* Budget Limit Slider */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-deep-navy-800 block">Max Budget (USD)</label>
          <div className="flex items-center justify-between text-xs text-deep-navy-500 font-semibold mb-1">
            <span>$0</span>
            <span className="font-extrabold text-brand-orange-600">${maxBudget}</span>
          </div>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={maxBudget}
            onChange={(e) => onChangeMaxBudget(Number(e.target.value))}
            className="w-full accent-brand-orange-600 h-1.5 bg-sand-200 rounded-lg cursor-pointer"
          />
        </div>

        {/* Travel Styles Checkboxes */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-deep-navy-800 block">Travel Style</label>
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
            {TRAVEL_STYLES.map((style) => (
              <label key={style.id} className="flex items-center gap-2 text-xs text-deep-navy-600 font-semibold cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={selectedStyles.includes(style.id)}
                  onChange={() => onToggleStyle(style.id)}
                  className="rounded border-sand-300 text-brand-orange-600 focus:ring-brand-orange-500 w-4 h-4 accent-brand-orange-600"
                />
                {style.label}
              </label>
            ))}
          </div>
        </div>

        {/* Pace Radio Buttons */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-deep-navy-800 block">Pace</label>
          <div className="flex flex-col gap-2">
            {["all", "relaxed", "moderate", "fast-paced"].map((p) => (
              <label key={p} className="flex items-center gap-2 text-xs text-deep-navy-600 font-semibold cursor-pointer select-none capitalize">
                <input
                  type="radio"
                  name="pace"
                  checked={selectedPace === p}
                  onChange={() => onChangePace(p)}
                  className="text-brand-orange-600 focus:ring-brand-orange-500 w-4 h-4 accent-brand-orange-600"
                />
                {p.replace("-", " ")}
              </label>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
