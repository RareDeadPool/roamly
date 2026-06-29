import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[250px] w-full items-center justify-center">
      <div className="relative flex h-12 w-12 items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute h-full w-full rounded-full border-4 border-sand-200 border-t-brand-orange-500 animate-spin" />
        {/* Inner Ring */}
        <div className="absolute h-8 w-8 rounded-full border-4 border-transparent border-t-brand-teal-500 animate-spin duration-700" />
      </div>
    </div>
  );
}
