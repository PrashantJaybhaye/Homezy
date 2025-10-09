"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homeowner",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      rating: 5,
      text: "Excellent service! I found a reliable electrician within minutes. The booking process was smooth and the professional arrived on time. Highly recommended!",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Property Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      rating: 5,
      text: "Homezy has made managing multiple properties so much easier. I can quickly book various services and track all my appointments in one place.",
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Apartment Owner",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
      rating: 5,
      text: "The quality of service providers on Homezy is outstanding. I've used them for cleaning, plumbing, and painting - all excellent experiences!",
    },
  ];

  return (
    <div className="my-16 md:my-24">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl md:text-4xl mb-3">
          What Our <span className="text-primary">Customers Say</span>
        </h2>
        <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Quote Icon */}
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-foreground/70 text-sm md:text-base mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted ring-2 ring-primary/20">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-xs text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
