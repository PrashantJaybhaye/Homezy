"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground/60 text-base md:text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-foreground/60 mb-4">Quick Links:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/services" className="text-sm text-primary hover:underline">
              Browse Services
            </Link>
            <span className="text-foreground/30">•</span>
            <Link href="/about" className="text-sm text-primary hover:underline">
              About Us
            </Link>
            <span className="text-foreground/30">•</span>
            <Link href="/mybooking" className="text-sm text-primary hover:underline">
              My Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
