import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface StepTipsPublishProps {
  formData: any;
}

export default function StepTipsPublish({ formData }: StepTipsPublishProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-extrabold text-deep-navy-900 mb-1">Confirm &amp; Share</h3>
        <p className="text-xs text-deep-navy-500">Review your travel sharing inputs before publishing to Roamly's feed.</p>
      </div>

      <div className="space-y-4">
        <div className="p-5 border border-brand-teal-200 bg-brand-teal-50/20 rounded-2xl flex gap-3">
          <CheckCircle2 className="w-5 h-5 text-brand-teal-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-black text-brand-teal-800">Itinerary is ready to post</h4>
            <p className="text-xs text-brand-teal-700 leading-relaxed">
              Your itinerary includes <strong>{formData.duration} days</strong> of scheduling and <strong>{formData.realityChecks?.length || 0} reality check</strong> warnings.
            </p>
          </div>
        </div>

        <div className="p-5 border border-sand-200 bg-sand-50/40 rounded-2xl space-y-4 text-left">
          <h4 className="text-xs font-black text-deep-navy-950 uppercase tracking-wider">Summary Preview</h4>
          
          <div className="space-y-2.5 text-xs text-deep-navy-600">
            <div>
              <span className="font-bold text-deep-navy-800">Title:</span> {formData.title || "Untitled Itinerary"}
            </div>
            <div>
              <span className="font-bold text-deep-navy-800">Destination:</span> {formData.destination || "Not specified"}
            </div>
            <div>
              <span className="font-bold text-deep-navy-800">Budget:</span> ${formData.budget} USD
            </div>
            <div>
              <span className="font-bold text-deep-navy-800">Travel Style:</span> <span className="capitalize">{formData.travelStyle}</span>
            </div>
          </div>
        </div>

        <div className="p-4 border border-amber-250 bg-amber-50/10 rounded-2xl flex gap-2.5">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-700 leading-relaxed">
            By publishing, you agree that this itinerary represents real, honest advice. Avoid affiliate link packing or generic, AI-generated travel templates.
          </p>
        </div>
      </div>
    </div>
  );
}
