import React from "react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/socials";
import { MINECRAFT_MODS } from "@/data/mods";
import { ANDROID_APPS } from "@/data/apps";
import { SOFTWARE_PROJECTS } from "@/data/projects";

interface JsonLdProps {
  type?: "person" | "mods" | "apps" | "projects" | "contact" | "profile";
}

export function JsonLd({ type = "person" }: JsonLdProps) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site").replace(/\/+$/, "");
  const sameAsLinks = SOCIAL_LINKS.map((s) => s.url);

  const authorRef = {
    "@id": `${baseUrl}/#person`,
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: PERSONAL_INFO.name,
    alternateName: [PERSONAL_INFO.fullName, "rafayshhh", "Muhammad Abdul Rafay"],
    url: baseUrl,
    image: `${baseUrl}/images/avatar.jpg`,
    description: PERSONAL_INFO.bio,
    jobTitle: "Minecraft Mod Developer, Flutter Mobile & Systems Engineer",
    sameAs: sameAsLinks,
    knowsAbout: [
      "Minecraft Modding",
      "Fabric Mod Loader",
      "Minecraft Forge",
      "Mixin Bytecode Injection",
      "Java",
      "Flutter",
      "Dart",
      "Android Development",
      "Python",
      "PySide6",
      "TypeScript",
      "Next.js",
      "Google Gemini API",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "RafayShhh — Portfolio & Software Studio",
    alternateName: "RafayShhh",
    url: baseUrl,
    author: authorRef,
    description: PERSONAL_INFO.bio,
  };

  const modsCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Minecraft Mods by RafayShhh",
    url: `${baseUrl}/minecraft/mods`,
    description: "Open-source client-side Minecraft Fabric & Forge utility mods by RafayShhh.",
    author: authorRef,
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: MINECRAFT_MODS.length,
      itemListElement: MINECRAFT_MODS.map((mod, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "SoftwareApplication",
          name: mod.title,
          url: `${baseUrl}/minecraft/mods/${mod.id}`,
          image: mod.icon ? `${baseUrl}${mod.icon}` : `${baseUrl}/images/banner.jpg`,
          applicationCategory: "GameApplication",
          operatingSystem: `Minecraft Java Edition (${mod.loaders?.join(", ") || "Fabric"})`,
          author: authorRef,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      })),
    },
  };

  const appsCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Android Applications by KreateKode & RafayShhh",
    url: `${baseUrl}/apps`,
    description: "Offline-first Flutter & Dart utility applications engineered by RafayShhh under KreateKode.",
    author: authorRef,
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: ANDROID_APPS.length,
      itemListElement: ANDROID_APPS.map((app, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "MobileApplication",
          name: app.title,
          url: `${baseUrl}/apps/${app.id}`,
          image: app.image ? `${baseUrl}${app.image}` : `${baseUrl}/images/banner.jpg`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: app.minAndroidVersion,
          author: authorRef,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      })),
    },
  };

  const projectsCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Software & AI Engineering Projects by RafayShhh",
    url: `${baseUrl}/projects`,
    description: "Open-source desktop AI publishing tools, multimodal desktop agents, and Next.js platforms by RafayShhh.",
    author: authorRef,
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: SOFTWARE_PROJECTS.length,
      itemListElement: SOFTWARE_PROJECTS.map((proj, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "SoftwareApplication",
          name: proj.title,
          url: `${baseUrl}/projects/${proj.id}`,
          image: proj.image ? `${baseUrl}${proj.image}` : `${baseUrl}/images/banner.jpg`,
          applicationCategory: proj.category,
          operatingSystem: "Cross-Platform",
          author: authorRef,
        },
      })),
    },
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact & Collaborations",
    url: `${baseUrl}/contact`,
    description: "Send direct engineering inquiries or mod commission requests to RafayShhh.",
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: {
      "@id": `${baseUrl}/#person`,
      "@type": "Person",
      name: PERSONAL_INFO.name,
      email: PERSONAL_INFO.email,
    },
  };

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "RafayShhh Developer Profile & Socials",
    url: `${baseUrl}/socials`,
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: authorRef,
  };

  const schemaToRender: Record<string, unknown>[] = [];

  if (type === "person") {
    schemaToRender.push(personSchema, websiteSchema);
  } else if (type === "mods") {
    schemaToRender.push(modsCollectionSchema);
  } else if (type === "apps") {
    schemaToRender.push(appsCollectionSchema);
  } else if (type === "projects") {
    schemaToRender.push(projectsCollectionSchema);
  } else if (type === "contact") {
    schemaToRender.push(contactSchema);
  } else if (type === "profile") {
    schemaToRender.push(profileSchema);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
}
