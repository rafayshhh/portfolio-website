import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { ShhhBrightnessDemo } from "@/components/interactive/ShhhBrightnessDemo";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import {
  Gamepad2,
  Server,
  Palette,
  ArrowRight,
  Sliders,
} from "lucide-react";
import { MINECRAFT_MODS, MINECRAFT_PLUGINS, MINECRAFT_RESOURCE_PACKS } from "@/data/mods";

export const metadata: Metadata = buildPageMetadata({
  title: "Minecraft Mods & Utilities — Fabric & Forge",
  description:
    "Explore open-source Minecraft Fabric & Forge client mods by RafayShhh: Shhh Brightness Toggle, Shhh Builder, Shhh Printer, Player Health Indicators & Mobs Health Indicators.",
  path: "/minecraft",
  keywords: [
    "Minecraft Mods",
    "Shhh Brightness Toggle",
    "Shhh Builder",
    "Shhh Printer",
    "Customizable Player Health Indicator",
    "Customizable Mobs Health Indicator",
    "Fabric 26.3 Mods",
    "RafayShhh Minecraft",
  ],
  image: "/images/minecraft/mods/shhh-builder/banner.jpg",
  imageAlt: "RafayShhh Minecraft Fabric Mods Showcase",
});

export default function MinecraftHubPage() {
  return (
    <div className="pt-10 pb-20 relative transition-colors duration-200 font-sans">
      <JsonLd type="mods" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Minecraft Ecosystem</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                Minecraft Creations
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 max-w-2xl leading-relaxed">
                Open-source client mods for Fabric and Forge featuring memory lightmap fullbright hooks, holographic schematic viewers, crosshair schematic printing, and pixel-art health indicators.
              </p>
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-[#091b10] border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 font-semibold shrink-0">
              {MINECRAFT_MODS.length} Open-Source Releases
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <MinecraftNavTabs />

        {/* All 5 Real Public Mods Quick Showcase */}
        <section aria-labelledby="active-mods-heading" className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 id="active-mods-heading" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Published Fabric &amp; Forge Mods ({MINECRAFT_MODS.length})
            </h2>
            <Link
              href="/minecraft/mods"
              className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Browse Filterable Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MINECRAFT_MODS.map((mod) => {
              const editedCover = mod.gallery.find((g) => g.isPrimary) || mod.gallery[0];
              const previewSrc = editedCover?.src || mod.icon;
              const isIconOnly = !editedCover && Boolean(mod.icon);

              return (
                <Link
                  key={mod.id}
                  href={`/minecraft/mods/${mod.id}`}
                  className="h-full rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/25 hover:border-emerald-500/60 transition-colors shadow-sm flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {previewSrc && (
                      <div className={`relative aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-emerald-500/20 ${isIconOnly ? "bg-zinc-950" : "bg-zinc-900"}`}>
                        <Image
                          src={previewSrc}
                          alt={editedCover?.alt || `${mod.title} icon`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className={isIconOnly ? "object-contain p-5 group-hover:scale-105 transition-transform duration-300" : "object-cover group-hover:scale-105 transition-transform duration-300"}
                        />
                      </div>
                    )}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/40 font-bold">
                          {mod.loaders?.join(" / ")}
                        </span>
                        <span className="text-zinc-600 dark:text-emerald-300/80">
                          {mod.gallery.length > 0 ? `${mod.gallery.length} Edited Slides` : "Interactive Demo"}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
                        {mod.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 pt-2 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <span>View Specs &amp; Download</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Future Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/25 flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  <Server className="w-5 h-5" />
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                  {MINECRAFT_PLUGINS.length} Public Releases
                </span>
              </div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                Server Plugins (Paper &amp; Purpur)
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                All current Minecraft releases focus on 100% client-side Fabric and Forge utility mods. Reach out for custom Paper/Purpur server plugin engineering.
              </p>
            </div>
            <Link
              href="/contact"
              className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 w-fit"
            >
              <span>Inquire about a custom server plugin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/25 flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  <Palette className="w-5 h-5" />
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                  {MINECRAFT_RESOURCE_PACKS.length} Public Releases
                </span>
              </div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                Resource Packs
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Custom 9x9 pixel-art heart textures and font atlases are bundled natively inside the Health Indicators mods rather than standalone pack downloads.
              </p>
            </div>
            <Link
              href="/minecraft/mods/shhh-player-health-indicators"
              className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 w-fit"
            >
              <span>Explore Pixel Heart Sprite Mods</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Brightness Preview */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
            <Sliders className="w-4 h-4" />
            <span>Interactive Lightmap Simulator — Shhh Brightness Toggle</span>
          </div>
          <ShhhBrightnessDemo />
        </section>
      </div>
    </div>
  );
}
