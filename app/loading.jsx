import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          {/* Spinner */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
        <h2 className="font-semibold text-lg text-foreground/80 mb-2">Loading...</h2>
        <p className="text-sm text-foreground/60">Please wait while we fetch your data</p>
      </div>
    </div>
  );
}
