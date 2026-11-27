import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedBento } from "@/components/sections/FeaturedBento";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "RafayShhh — Minecraft Mod Developer, Flutter & Systems Portfolio",
  absoluteTitle: "RafayShhh — Minecraft Mod Developer, Flutter & Systems Portfolio",
  description:
    "Official engineering portfolio of RafayShhh (Muhammad Abdul Rafay). Creator of 5 client-side Minecraft Fabric/Forge mods, Flutter Android apps, and local-first AI software.",
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
  imageAlt: "RafayShhh Sunset Pixel Art Banner — Engineering Portfolio",
});

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <FeaturedBento />
      <ContactSection />
    </div>
  );
}
