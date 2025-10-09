"use client";
import React from "react";
import { FileText, CheckCircle2, AlertTriangle, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="py-10 md:py-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-bold text-4xl md:text-5xl mb-4">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <p className="text-foreground/60">Last updated: January 2024</p>
      </div>

      {/* Content */}
      <div className="prose prose-slate max-w-none">
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
          <p className="text-foreground/70 leading-relaxed">
            Welcome to Homezy. By accessing or using our platform, you agree to be bound by these 
            Terms of Service. Please read them carefully before using our services.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-bold text-2xl">Acceptance of Terms</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed mb-4">
              By creating an account or using Homezy's services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              If you do not agree to these terms, please do not use our platform.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-4">User Accounts</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>You must be at least 18 years old to create an account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>You are responsible for maintaining the confidentiality of your account credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>You must provide accurate and complete information during registration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>You are responsible for all activities that occur under your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Notify us immediately of any unauthorized use of your account</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Service Bookings</h2>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Platform Role</h3>
              <p className="text-foreground/70 leading-relaxed">
                Homezy acts as a platform connecting customers with independent service providers. 
                We do not directly provide home services and are not responsible for the quality 
                or outcome of services performed by third-party providers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Booking Process</h3>
              <p className="text-foreground/70 leading-relaxed">
                When you book a service, you enter into a direct agreement with the service provider. 
                Homezy facilitates the connection but is not a party to this agreement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Cancellations</h3>
              <p className="text-foreground/70 leading-relaxed">
                Cancellation policies vary by service provider. Please review the specific 
                cancellation terms before confirming your booking.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Payment Terms</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Payment for services is made directly to the service provider</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Service providers set their own pricing and payment terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>All prices are displayed in Indian Rupees (INR) unless otherwise stated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Any disputes regarding payment should be resolved directly with the service provider</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-bold text-2xl">Prohibited Activities</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Use the platform for any illegal or unauthorized purpose</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Violate any laws or regulations in your jurisdiction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Harass, abuse, or harm other users or service providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Post false, misleading, or fraudulent content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Use automated systems to access the platform without permission</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-bold text-2xl">Limitation of Liability</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed mb-4">
              Homezy provides the platform "as is" without warranties of any kind. We are not liable for:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>The quality, safety, or legality of services provided by third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Any damages or losses resulting from your use of the platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Disputes between users and service providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Service interruptions or technical issues</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Modifications to Terms</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify 
              users of any material changes via email or through the platform. Your continued use 
              of Homezy after such modifications constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>

        {/* Section 8 */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Termination</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground/70 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Violation of these Terms of Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Fraudulent or illegal activity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Abuse of the platform or other users</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl border border-border p-6 md:p-8">
          <h2 className="font-bold text-2xl mb-4">Contact Us</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="space-y-2 text-foreground/70">
            <p>Email: <a href="mailto:legal@homezy.com" className="text-primary hover:underline">legal@homezy.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-primary hover:underline">+91 123 456 7890</a></p>
            <p>Address: 123 Service Street, Mumbai, Maharashtra 400001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
