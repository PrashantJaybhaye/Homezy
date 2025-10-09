"use client";
import React from "react";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="py-10 md:py-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-bold text-4xl md:text-5xl mb-4">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-foreground/60">Last updated: January 2024</p>
      </div>

      {/* Content */}
      <div className="prose prose-slate max-w-none">
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
          <p className="text-foreground/70 leading-relaxed">
            At Homezy, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our platform.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-bold text-2xl">Information We Collect</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
              <p className="text-foreground/70 leading-relaxed">
                When you register on Homezy, we collect personal information such as your name, 
                email address, phone number, and location to provide you with our services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Usage Data</h3>
              <p className="text-foreground/70 leading-relaxed">
                We automatically collect information about how you interact with our platform, 
                including your IP address, browser type, pages visited, and time spent on pages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Booking Information</h3>
              <p className="text-foreground/70 leading-relaxed">
                Details about your service bookings, preferences, and communication with service 
                providers are collected to facilitate and improve our services.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-bold text-2xl">How We Use Your Information</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>To provide, maintain, and improve our services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>To process your bookings and facilitate communication with service providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>To send you updates, notifications, and promotional materials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>To analyze usage patterns and improve user experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>To detect, prevent, and address technical issues and fraud</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-bold text-2xl">Data Security</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              However, no method of transmission over the Internet or electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your data, we cannot 
              guarantee its absolute security.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Information Sharing</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Service providers who need access to perform services on our behalf</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Professional service providers you book through our platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Law enforcement or regulatory authorities when required by law</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Your Rights</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Access, update, or delete your personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Opt-out of marketing communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Request a copy of your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lodge a complaint with a supervisory authority</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl border border-border p-6 md:p-8">
          <h2 className="font-bold text-2xl mb-4">Contact Us</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="space-y-2 text-foreground/70">
            <p>Email: <a href="mailto:privacy@homezy.com" className="text-primary hover:underline">privacy@homezy.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-primary hover:underline">+91 123 456 7890</a></p>
            <p>Address: 123 Service Street, Mumbai, Maharashtra 400001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
