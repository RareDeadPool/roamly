"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, CheckCircle2, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import Button from "../shared/Button";
import { Card, CardContent } from "../shared/Card";

// Mock sub-components inline / simple definitions to keep it modular but easy
import StepBasicInfo from "./StepBasicInfo";
import StepDayPlan from "./StepDayPlan";
import StepPlaces from "./StepPlaces";
import StepExpenses from "./StepExpenses";
import StepRealityCheck from "./StepRealityCheck";
import StepTipsPublish from "./StepTipsPublish";

const STEPS = [
  { number: 1, title: "Basic Info", desc: "Title & destination" },
  { number: 2, title: "Day Schedule", desc: "Day-wise summaries" },
  { number: 3, title: "Places Visited", desc: "Sightseeing & food spots" },
  { number: 4, title: "Expenses", desc: "Trip cost categories" },
  { number: 5, title: "Reality Check", desc: "Unfiltered warnings" },
  { number: 6, title: "Publish", desc: "Confirm & share" }
];

export default function CreateItineraryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    duration: 3,
    budget: 800,
    travelStyle: "backpacking",
    pace: "moderate",
    description: "",
    days: [
      { dayNumber: 1, title: "Arriving & City Walking", places: [] },
      { dayNumber: 2, title: "Exploring Museums & Dining", places: [] },
      { dayNumber: 3, title: "Hidden Spots & Departures", places: [] }
    ],
    realityChecks: [],
    regrets: []
  });

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (fields: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.title.trim().length >= 5 && formData.destination.trim().length >= 2;
    }
    return true; // Simple mock validations for later steps
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Progress Steps */}
      <div className="lg:col-span-1 space-y-3">
        {STEPS.map((step) => {
          const isCompleted = currentStep > step.number;
          const isActive = currentStep === step.number;
          return (
            <div
              key={step.number}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                isActive
                  ? "bg-brand-orange-50 border-brand-orange-200 text-brand-orange-700 shadow-sm"
                  : isCompleted
                  ? "bg-brand-teal-50/50 border-brand-teal-200 text-brand-teal-800"
                  : "bg-white border-sand-200 text-deep-navy-500"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-brand-teal-600 shrink-0" />
              ) : (
                <span
                  className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                    isActive ? "bg-brand-orange-500 text-white" : "bg-sand-200 text-deep-navy-600"
                  }`}
                >
                  {step.number}
                </span>
              )}
              <div className="text-left">
                <div className="text-xs font-black">{step.title}</div>
                <div className="text-[10px] opacity-75">{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Wizard Form Body */}
      <div className="lg:col-span-3">
        <Card className="shadow-sm border border-sand-200 rounded-2xl overflow-hidden bg-white">
          <div className="p-6 sm:p-8 space-y-8">
            {/* Steps Container */}
            {currentStep === 1 && (
              <StepBasicInfo formData={formData} onChange={updateFormData} />
            )}
            {currentStep === 2 && (
              <StepDayPlan formData={formData} onChange={updateFormData} />
            )}
            {currentStep === 3 && (
              <StepPlaces formData={formData} onChange={updateFormData} />
            )}
            {currentStep === 4 && (
              <StepExpenses formData={formData} onChange={updateFormData} />
            )}
            {currentStep === 5 && (
              <StepRealityCheck formData={formData} onChange={updateFormData} />
            )}
            {currentStep === 6 && (
              <StepTipsPublish formData={formData} />
            )}

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between border-t border-sand-200 pt-6 mt-10">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center gap-1 text-deep-navy-600"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep < STEPS.length ? (
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex items-center gap-1"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Link href="/dashboard?publish=success">
                  <Button variant="teal" className="flex items-center gap-1.5 shadow-none">
                    Publish Itinerary
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
