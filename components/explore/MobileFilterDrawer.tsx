"use client";

import React, { useState } from "react";
import { Filter, X, RotateCcw } from "lucide-react";
import Button from "../shared/Button";
import { TRAVEL_STYLES } from "../../lib/constants";

interface MobileFilterDrawerProps {
  selectedStyles: string[];
  onToggleStyle: (style: string) => void;
  maxBudget: number;
  onChangeMaxBudget: (budget: number) => void;
  selectedPace: string;
  onChangePace: (pace: string) => void;
  onReset: () => void;
}

export default function MobileFilterDrawer({
  selectedStyles,
  onToggleStyle,
  maxBudget,
  onChangeMaxBudget,
  selectedPace,
  onChangePace,
  onReset,
}: MobileFilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden shrink-0">
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 text-xs py-2.5 rounded-xl border-sand-300 bg-white"
      >
        <Filter className="w-4 h-4 text-brand-orange-500" />
        Filter
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-deep-navy-950/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-80 max-w-full bg-sand-100 h-full p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200 z-50 shadow-2xl">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-sand-200 pb-4">
                <h3 className="font-extrabold text-base text-deep-navy-900 flex items-center gap-1.5">
                  <Filter className="w-4 h-4 text-brand-orange-500" />
                  Filters
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-deep-navy-600 hover:text-brand-orange-600 focus:outline-none transition-colors"
                >
                  <X className="w-5 h-5" />
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
                        name="pace-mobile"
                        checked={selectedPace === p}
                        onChange={() => onChangePace(p)}
                        className="text-brand-orange-600 focus:ring-brand-orange-500 w-4 h-4 accent-brand-orange-600"
                      />
                      {p.replace("-", " ")}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 border-t border-sand-200 pt-4 mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  onReset();
                  setIsOpen(false);
                }}
                className="flex-1 py-3 text-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)} className="flex-1 py-3 text-xs">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
