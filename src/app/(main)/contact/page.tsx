import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Collaborations — RafayShhh",
  description: "Send a transmission, commission a custom Minecraft mod, or connect with RafayShhh (Muhammad Abdul Rafay).",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-10 pb-20 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </div>
    </div>
  );
}
