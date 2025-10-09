"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a service on Homezy?",
      answer: "Simply search for the service you need, browse through verified professionals, select your preferred provider, choose a date and time, and confirm your booking. You'll receive instant confirmation via email.",
    },
    {
      question: "Are the service providers verified?",
      answer: "Yes! All service providers on Homezy go through a thorough verification process. We check their credentials, experience, and customer reviews to ensure you get quality service.",
    },
    {
      question: "What if I need to cancel or reschedule my booking?",
      answer: "You can easily manage your bookings from the 'My Bookings' section. Cancellations and rescheduling are subject to the service provider's policy, which you'll see before confirming your booking.",
    },
    {
      question: "How do I pay for services?",
      answer: "Payment is made directly to the service provider after the work is completed. You can pay via cash, UPI, or other methods accepted by the provider.",
    },
    {
      question: "What areas do you serve?",
      answer: "Homezy currently operates in major cities across India. Enter your location in the search to see available services in your area. We're constantly expanding to new locations!",
    },
    {
      question: "Can I leave a review for a service provider?",
      answer: "Absolutely! After your service is completed, you can rate and review the provider. Your feedback helps other users make informed decisions and helps us maintain quality standards.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-16 md:my-24">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl md:text-4xl mb-3">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto">
          Got questions? We've got answers. Find everything you need to know about Homezy.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-accent/20 transition-colors"
            >
              <h3 className="font-semibold text-sm md:text-base pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
