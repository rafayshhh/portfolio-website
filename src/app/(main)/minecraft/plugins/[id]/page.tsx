import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MINECRAFT_PLUGINS } from "@/data/mods";
import { ItemHero } from "@/components/item/ItemHero";
import { ItemGallery } from "@/components/item/ItemGallery";
import { ItemDocSections } from "@/components/item/ItemDocSections";
import { ItemJsonLd } from "@/components/item/ItemJsonLd";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MINECRAFT_PLUGINS.map((plugin) => ({
    id: plugin.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const plugin = MINECRAFT_PLUGINS.find((p) => p.id === id);

  if (!plugin) return { title: "Plugin Not Found | RafayShhh" };

  return {
    title: `${plugin.title} — Paper & Purpur Minecraft Plugin | RafayShhh`,
    description: plugin.seo?.metaDescription || plugin.description,
    keywords: plugin.seo?.keywords,
    alternates: {
      canonical: `/minecraft/plugins/${plugin.id}`,
    },
    openGraph: {
      title: plugin.seo?.metaTitle || plugin.title,
      description: plugin.seo?.metaDescription || plugin.description,
      url: `/minecraft/plugins/${plugin.id}`,
    },
  };
}

export default async function MinecraftPluginDetailPage({ params }: Props) {
  const { id } = await params;
  const plugin = MINECRAFT_PLUGINS.find((p) => p.id === id);

  if (!plugin) {
    notFound();
  }

  return (
    <div className="pt-8 pb-24 relative transition-colors duration-200">
      <ItemJsonLd
        name={plugin.title}
        description={plugin.description}
        url={`/minecraft/plugins/${plugin.id}`}
        category="Server Plugin"
        type="software"
        operatingSystem="Paper / Purpur / Spigot"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ItemHero
          title={plugin.title}
          tagline={plugin.tagline}
          category="Minecraft Server Plugin (Paper / Purpur)"
          status={plugin.status}
          versionOrPlatform={plugin.minecraftVersions?.join(", ")}
          theme="emerald"
          backHref="/minecraft/plugins"
          backLabel="All Server Plugins"
          githubUrl={plugin.githubUrl}
        />

        <ItemGallery gallery={plugin.gallery} title={plugin.title} theme="emerald" />

        <ItemDocSections
          features={plugin.features}
          specifications={plugin.specifications}
          documentation={plugin.documentation}
          theme="emerald"
        />
      </div>
    </div>
  );
}
