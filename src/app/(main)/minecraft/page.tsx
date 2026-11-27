import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { ShhhBrightnessDemo } from "@/components/interactive/ShhhBrightnessDemo";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import {
  Gamepad2,
  Server,
  Palette,
  ArrowRight,
  Terminal,
  Flame,
} from "lucide-react";
import { MINECRAFT_MODS, MINECRAFT_PLUGINS, MINECRAFT_RESOURCE_PACKS } from "@/data/mods";

export const metadata: Metadata = buildPageMetadata({
  title: "Minecraft Ecosystem — 5 Client Fabric & Forge Mods",
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
    <div className="pt-12 pb-24 relative transition-colors duration-200">
      <JsonLd type="mods" />
      {/* Greenish Minecraft Ambient Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-emerald-500/10 dark:bg-emerald-400/15 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wider font-minecraft">
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Minecraft Ecosystem</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase font-minecraft">
                MINECRAFT CREATIONS
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-emerald-200/80 mt-2 max-w-2xl font-sans font-light leading-relaxed">
                Open-source client-side Minecraft mods featuring lightmap fullbright hooks, holographic schematic previews, Point &amp; Place schematic printing, and pixel-art entity health HUDs.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-[#091b10] px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30 shrink-0">
              <Flame className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold">{MINECRAFT_MODS.length} Public Mod Repos</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <MinecraftNavTabs />

        {/* All 5 Real Public Mods Quick Showcase */}
        <section aria-labelledby="active-mods-heading" className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <h2 id="active-mods-heading" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-minecraft">
              Published Fabric &amp; Forge Mods ({MINECRAFT_MODS.length})
            </h2>
            <Link
              href="/minecraft/mods"
              className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Browse Full Mod Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MINECRAFT_MODS.map((mod) => {
              const primary = mod.gallery.find((g) => g.isPrimary) || mod.gallery[0];
              const isSquare = primary?.aspect === "square";
              return (
                <Card3DTilt key={mod.id} maxTilt={4} glare={true} className="rounded-2xl">
                  <Link
                    href={`/minecraft/mods/${mod.id}`}
                    className="h-full rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-sm flex flex-col justify-between group overflow-hidden"
                  >
                    <div>
                      {primary && (
                        <div className={`relative aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-emerald-500/20 ${isSquare ? "bg-zinc-950" : "bg-zinc-900"}`}>
                          <Image
                            src={primary.src}
                            alt={primary.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={isSquare ? "object-contain p-4 group-hover:scale-105 transition-transform" : "object-cover group-hover:scale-105 transition-transform"}
                          />
                        </div>
                      )}
                      <div className="p-5 space-y-2">
                        <div className="flex items-center justify-between gap-2 font-mono text-[10px]">
                          <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/40 font-bold">
                            {mod.loaders?.join(" / ")}
                          </span>
                          <span className="text-zinc-500 dark:text-emerald-400/80">
                            {mod.gallery.length} Gallery Items
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors font-minecraft">
                          {mod.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 font-sans font-light">
                          {mod.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-4 pt-2 flex items-center justify-between text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      <span>Open Dedicated Mod Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Card3DTilt>
              );
            })}
          </div>
        </section>

        {/* Future Branches Summary (No Phantom Fake Mods/Plugins Listed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/25 flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  <Server className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                  {MINECRAFT_PLUGINS.length} Public Releases
                </span>
              </div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-minecraft">
                Server Plugins (Paper &amp; Purpur)
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                No standalone server plugin repositories are currently published on GitHub. All released Minecraft software focuses on 100% client-side Fabric &amp; Forge utility mods.
              </p>
            </div>
            <Link
              href="/contact"
              className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 w-fit"
            >
              <span>Inquire about a custom server plugin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/25 flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  <Palette className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                  {MINECRAFT_RESOURCE_PACKS.length} Public Releases
                </span>
              </div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white font-minecraft">
                Resource Packs
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                Vanilla pixel-art heart textures and font packs are currently bundled natively inside Player &amp; Mobs Health Indicators rather than standalone resource pack downloads.
              </p>
            </div>
            <Link
              href="/minecraft/mods/shhh-player-health-indicators"
              className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 w-fit"
            >
              <span>Explore Pixel Heart Sprite Mods</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Lightweight Visual Lightmap Demonstration */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold font-minecraft">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>Interactive Lightmap Test • Press [B] or [↑]/[↓] for Shhh Brightness</span>
          </div>
          <ShhhBrightnessDemo />
        </div>
      </div>
    </div>
  );
}
