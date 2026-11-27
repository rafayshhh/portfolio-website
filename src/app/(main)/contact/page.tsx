import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Mail } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & Collaborations",
  description:
    "Direct engineering transmissions, inquiries, Minecraft Fabric mod commissions, Flutter app builds, and collaboration requests with RafayShhh (Muhammad Abdul Rafay).",
  path: "/contact",
  keywords: [
    "Contact RafayShhh",
    "Hire Minecraft Mod Developer",
    "Commission Fabric Mod",
    "Muhammad Abdul Rafay contact",
    "RafayShhh email",
    "RafayShhh Discord",
  ],
  imageAlt: "Contact & Collaborations — RafayShhh",
});

export default function ContactPage() {
  return (
    <div className="pt-10 pb-20 relative transition-colors duration-200">
      <JsonLd type="contact" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection headingTag="h1" />
      </div>
    </div>
  );
}
