import React from "react";
import { Hero } from "@/components/sections/Hero";
import { FeaturedBento } from "@/components/sections/FeaturedBento";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <FeaturedBento />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
