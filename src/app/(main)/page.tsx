import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedBento } from "@/components/sections/FeaturedBento";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "RafayShhh — Software Engineer, Minecraft Mod & Flutter Developer",
  absoluteTitle: "RafayShhh — Software Engineer, Minecraft Mod & Flutter Developer",
  description:
    "Portfolio of Muhammad Abdul Rafay (RafayShhh): creator of 5 open-source Minecraft Fabric & Forge mods, offline Flutter apps under KreateKode, and local-first AI tools.",
  path: "/",
  keywords: [
    "RafayShhh",
    "Muhammad Abdul Rafay",
    "rafayshhh.site",
    "Shhh Brightness Toggle",
    "Shhh Builder",
    "Shhh Printer",
    "Minecraft Fabric Mods",
    "Flutter Android Developer",
    "Kreate Typography",
  ],
  image: "/images/banner.jpg",
  imageAlt: "RafayShhh Portfolio Banner",
});

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
