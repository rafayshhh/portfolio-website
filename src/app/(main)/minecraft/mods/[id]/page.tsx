import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MINECRAFT_MODS } from "@/data/mods";
import { ItemHero } from "@/components/item/ItemHero";
import { ItemGallery } from "@/components/item/ItemGallery";
import { ItemDocSections } from "@/components/item/ItemDocSections";
import { ItemJsonLd } from "@/components/item/ItemJsonLd";
import { ShhhBrightnessDemo } from "@/components/interactive/ShhhBrightnessDemo";
import { HealthIndicatorPreview } from "@/components/minecraft/HealthIndicatorPreview";
import { buildPageMetadata, normalizePageTitle } from "@/lib/seo";
import { Sliders } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MINECRAFT_MODS.map((mod) => ({
    id: mod.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const mod = MINECRAFT_MODS.find((m) => m.id === id);

  if (!mod) {
    return {
      title: "Mod Not Found",
      robots: { index: false, follow: false },
    };
  }

  const primaryShowcase =
    mod.gallery?.find((g) => g.isPrimary)?.src || mod.gallery?.[0]?.src || mod.icon;

  return buildPageMetadata({
    title: normalizePageTitle(mod.seo?.metaTitle || `${mod.title} — Minecraft Fabric Mod`),
    description: mod.seo?.metaDescription || mod.description,
    path: `/minecraft/mods/${mod.id}`,
    keywords: mod.seo?.keywords,
    image: primaryShowcase,
    imageAlt: mod.gallery?.[0]?.alt || `${mod.title} Showcase`,
  });
}

export default async function MinecraftModDetailPage({ params }: Props) {
  const { id } = await params;
  const modIndex = MINECRAFT_MODS.findIndex((m) => m.id === id);
  const mod = modIndex >= 0 ? MINECRAFT_MODS[modIndex] : undefined;

  if (!mod) {
    notFound();
  }

  const primaryImage = mod.gallery?.find((g) => g.isPrimary)?.src || mod.gallery?.[0]?.src;
  const prevMod = modIndex > 0 ? MINECRAFT_MODS[modIndex - 1] : null;
  const nextMod = modIndex < MINECRAFT_MODS.length - 1 ? MINECRAFT_MODS[modIndex + 1] : null;

  return (
    <div className="pt-8 pb-24 relative transition-colors duration-200">
      <ItemJsonLd
        name={mod.title}
        alternateName={mod.repoSlug && mod.repoSlug !== mod.id ? mod.repoSlug : undefined}
        description={mod.description}
        url={`/minecraft/mods/${mod.id}`}
        image={primaryImage || mod.icon}
        screenshots={mod.gallery?.map((g) => g.src)}
        category="GameApplication"
        type="game"
        softwareVersion="1.0.0"
        operatingSystem={`Minecraft Java Edition (${mod.loaders?.join(" / ") || "Fabric"})`}
        codeRepository={mod.githubUrl}
        downloadUrl={mod.releaseUrl}
        faqs={mod.faqs}
        breadcrumbs={[
          { name: "Overview", url: "/" },
          { name: "Minecraft", url: "/minecraft" },
          { name: "Mods", url: "/minecraft/mods" },
          { name: mod.title, url: `/minecraft/mods/${mod.id}` },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Section */}
        <ItemHero
          title={mod.title}
          tagline={mod.tagline}
          description={mod.description}
          category={`Minecraft Mod (${mod.loaders?.join(", ") || "Fabric"})`}
          status={mod.status}
          versionOrPlatform={mod.minecraftVersions?.join(" • ")}
          image={mod.icon || primaryImage}
          theme="emerald"
          backHref="/minecraft/mods"
          backLabel="All Minecraft Mods"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Minecraft", href: "/minecraft" },
            { label: "Mods", href: "/minecraft/mods" },
            { label: mod.title },
          ]}
          releaseUrl={mod.releaseUrl}
          curseForgeUrl={mod.curseForgeUrl}
          modrinthUrl={mod.modrinthUrl}
          githubUrl={mod.githubUrl}
        />

        {/* Interactive Feature Previews */}
        {mod.id === "shhh-brightness-toggle" && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              <Sliders className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Interactive Lightmap Simulator — Press B to toggle or use controls</span>
            </div>
            <ShhhBrightnessDemo />
          </section>
        )}

        {(mod.id === "shhh-mob-health-indicators" || mod.id === "shhh-player-health-indicators") && (
          <section className="space-y-3">
            <HealthIndicatorPreview mode={mod.id === "shhh-mob-health-indicators" ? "mob" : "player"} />
          </section>
        )}

        {/* Mod Gallery */}
        <ItemGallery gallery={mod.gallery} title={mod.title} theme="emerald" />

        {/* Features, Specifications, Dependencies, Keybindings, Commands, Deep Guides, FAQs */}
        <ItemDocSections
          features={mod.features}
          specifications={mod.specifications}
          documentation={mod.documentation}
          controls={mod.controls}
          commands={mod.commands}
          dependencies={mod.dependencies}
          faqs={mod.faqs}
          prevItem={
            prevMod
              ? { id: prevMod.id, title: prevMod.title, href: `/minecraft/mods/${prevMod.id}` }
              : null
          }
          nextItem={
            nextMod
              ? { id: nextMod.id, title: nextMod.title, href: `/minecraft/mods/${nextMod.id}` }
              : null
          }
          theme="emerald"
        />
      </div>
    </div>
  );
}
