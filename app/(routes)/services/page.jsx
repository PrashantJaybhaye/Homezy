"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import CategoryList from "@/app/_components/CategoryList";
import BusinessList from "@/app/_components/BusinessList";
import { Sparkles, TrendingUp } from "lucide-react";

export default function ServicesPage() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then((resp) => {
      setBusinessList(resp.businessLists);
    });
  };

  return (
    <div className="py-10 md:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">All Services</span>
        </div>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
          Explore Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-foreground/60 text-base md:text-lg max-w-3xl mx-auto">
          From cleaning to repairs, we've got all your home service needs covered. 
          Browse through our categories and find the perfect professional for your needs.
        </p>
      </div>

      {/* Categories Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-12 bg-primary rounded-full" />
          <h2 className="font-bold text-2xl md:text-3xl">
            Service <span className="text-primary">Categories</span>
          </h2>
        </div>
        <CategoryList categoryList={categoryList} />
      </div>

      {/* All Services Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-12 bg-primary rounded-full" />
          <h2 className="font-bold text-2xl md:text-3xl">
            All <span className="text-primary">Service Providers</span>
          </h2>
        </div>
        <BusinessList businessList={businessList} title={""} />
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-border p-8 md:p-12">
        <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center">
          Why Choose <span className="text-primary">Homezy Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Verified Professionals</h3>
            <p className="text-sm text-foreground/60">
              All service providers are thoroughly vetted and verified for your safety
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-foreground/60">
              We ensure high-quality service delivery with customer satisfaction guarantee
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Quick Booking</h3>
            <p className="text-sm text-foreground/60">
              Book services instantly and get confirmed appointments in minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
