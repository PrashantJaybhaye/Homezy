"use client";
import React from "react";
import { 
  Shield, 
  Users, 
  Clock, 
  Award, 
  Target, 
  Heart,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Award, value: "500+", label: "Service Providers" },
    { icon: CheckCircle2, value: "50,000+", label: "Services Completed" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All service providers are thoroughly verified and background-checked to ensure your safety and peace of mind.",
    },
    {
      icon: Clock,
      title: "Quick & Reliable",
      description: "Get instant bookings and timely service delivery. We value your time as much as you do.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're committed to providing exceptional service experiences.",
    },
    {
      icon: Target,
      title: "Quality Assured",
      description: "We maintain high standards by continuously monitoring service quality and customer feedback.",
    },
  ];

  return (
    <div className="py-10 md:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
          About <span className="text-primary">Homezy</span>
        </h1>
        <p className="text-foreground/60 text-base md:text-lg max-w-3xl mx-auto">
          Your trusted partner in finding and booking professional home services
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-bold text-3xl md:text-4xl mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Homezy was born from a simple idea: making home services accessible, 
                reliable, and hassle-free for everyone. We understand the challenges of 
                finding trustworthy professionals for your home needs.
              </p>
              <p>
                Founded in 2024, we've grown from a small startup to a platform 
                connecting thousands of customers with verified service providers across 
                India. Our mission is to transform how people access home services.
              </p>
              <p>
                We believe that everyone deserves access to quality home services without 
                the stress of searching, vetting, and coordinating. That's why we've built 
                a platform that does the heavy lifting for you.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 border border-border shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-2">Built with Care</h3>
                  <p className="text-foreground/60">For Your Home & Family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-20 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-border p-8 md:p-12">
        <h2 className="font-bold text-3xl md:text-4xl mb-10 text-center">
          Our <span className="text-primary">Impact</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-bold text-3xl md:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="font-bold text-3xl md:text-4xl mb-10 text-center">
          Our <span className="text-primary">Values</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl border border-border p-8 md:p-12 text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-6">
          Our <span className="text-primary">Mission</span>
        </h2>
        <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
          To revolutionize the home services industry by creating a seamless, 
          trustworthy platform that connects homeowners with skilled professionals, 
          making quality home services accessible to everyone, everywhere.
        </p>
      </div>
    </div>
  );
}
