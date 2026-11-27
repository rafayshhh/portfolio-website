import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MINECRAFT_RESOURCE_PACKS } from "@/data/mods";
import { ItemHero } from "@/components/item/ItemHero";
import { ItemGallery } from "@/components/item/ItemGallery";
import { ItemDocSections } from "@/components/item/ItemDocSections";
import { ItemJsonLd } from "@/components/item/ItemJsonLd";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MINECRAFT_RESOURCE_PACKS.map((pack) => ({
    id: pack.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pack = MINECRAFT_RESOURCE_PACKS.find((p) => p.id === id);

  if (!pack) return { title: "Resource Pack Not Found | RafayShhh" };

  return {
    title: `${pack.title} — Minecraft GUI & Texture Pack | RafayShhh`,
    description: pack.seo?.metaDescription || pack.description,
    keywords: pack.seo?.keywords,
    alternates: {
      canonical: `/minecraft/resource-packs/${pack.id}`,
    },
    openGraph: {
      title: pack.seo?.metaTitle || pack.title,
      description: pack.seo?.metaDescription || pack.description,
      url: `/minecraft/resource-packs/${pack.id}`,
    },
  };
}

export default async function MinecraftResourcePackDetailPage({ params }: Props) {
  const { id } = await params;
  const pack = MINECRAFT_RESOURCE_PACKS.find((p) => p.id === id);

  if (!pack) {
    notFound();
  }

  return (
    <div className="pt-8 pb-24 relative transition-colors duration-200">
      <ItemJsonLd
        name={pack.title}
        description={pack.description}
        url={`/minecraft/resource-packs/${pack.id}`}
        category="Game Texture Pack"
        type="game"
        operatingSystem="Minecraft Java Edition (16x16 Native)"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ItemHero
          title={pack.title}
          tagline={pack.tagline}
          category="Minecraft Resource & Texture Pack"
          status={pack.status}
          versionOrPlatform={pack.minecraftVersions?.join(", ")}
          theme="emerald"
          backHref="/minecraft/resource-packs"
          backLabel="All Resource Packs"
          githubUrl={pack.githubUrl}
        />

        <ItemGallery gallery={pack.gallery} title={pack.title} theme="emerald" />

        <ItemDocSections
          features={pack.features}
          specifications={pack.specifications}
          documentation={pack.documentation}
          theme="emerald"
        />
      </div>
    </div>
  );
}
