import React from "react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/socials";

interface JsonLdProps {
  type?: "person" | "mods" | "apps" | "projects";
}

export function JsonLd({ type = "person" }: JsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site";

  const sameAsLinks = SOCIAL_LINKS.map((s) => s.url);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    alternateName: [PERSONAL_INFO.fullName, "rafayshhh", "Muhammad Abdul Rafay"],
    url: baseUrl,
    image: `${baseUrl}/avatar.png`,
    description: PERSONAL_INFO.bio,
    jobTitle: "Minecraft Mod Developer & Android Software Engineer",
    sameAs: sameAsLinks,
    knowsAbout: [
      "Minecraft Modding",
      "Fabric Mod Loader",
      "Minecraft Plugins",
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "Java",
      "TypeScript",
      "Next.js",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RafayShhh — Portfolio & Projects",
    alternateName: "RafayShhh Website",
    url: baseUrl,
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
    },
    description: PERSONAL_INFO.bio,
  };

  const modsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Shhh Brightness Toggle",
    operatingSystem: "Minecraft Java Edition (Cross-platform)",
    applicationCategory: "GameApplication",
    description: "Instant client-side brightness modifier for Minecraft Fabric without potion effects or swirl particles.",
    url: "https://www.curseforge.com/minecraft/mc-mods/shhh-brightness-toggle",
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const appsSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Apex Utilities for Android",
    operatingSystem: "Android",
    applicationCategory: "UtilitiesApplication",
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const schemaToRender: Record<string, unknown>[] = [personSchema, websiteSchema];
  if (type === "mods") {
    schemaToRender.push(modsSchema);
  } else if (type === "apps") {
    schemaToRender.push(appsSchema);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
}
