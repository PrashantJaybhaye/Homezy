"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto mb-6 bg-red-500/10 rounded-full flex items-center justify-center">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>

        {/* Content */}
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Something Went Wrong
        </h2>
        <p className="text-foreground/60 text-base md:text-lg mb-8 max-w-md mx-auto">
          We're sorry, but something unexpected happened. Please try again or return to the homepage.
        </p>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && error && (
          <div className="mb-8 p-4 bg-muted rounded-lg text-left max-w-lg mx-auto">
            <p className="text-xs font-mono text-foreground/70 break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
            onClick={reset}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full w-full sm:w-auto"
            >
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
