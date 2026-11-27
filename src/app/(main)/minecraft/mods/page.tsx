import React from "react";
import { MINECRAFT_MODS } from "@/data/mods";
import { JsonLd } from "@/components/seo/JsonLd";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { ShhhBrightnessDemo } from "@/components/interactive/ShhhBrightnessDemo";
import { ModsDirectoryClient } from "@/components/minecraft/ModsDirectoryClient";
import { Gamepad2, Sliders } from "lucide-react";

export default function MinecraftModsPage() {
  return (
    <div className="pt-10 pb-20 relative transition-colors duration-200 font-sans">
      <JsonLd type="mods" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Open-Source Client Utilities</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                Minecraft Mods
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 max-w-2xl leading-relaxed">
                Dedicated pages featuring edited showcase visuals, default keybindings, client commands, FAQs, and direct GitHub `.jar` releases.
              </p>
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-[#091b10] border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 font-semibold shrink-0">
              {MINECRAFT_MODS.length} Active Releases
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <MinecraftNavTabs />

        {/* Edited Comparison & Interactive Lightmap Controls */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
            <Sliders className="w-4 h-4" />
            <span>Interactive Lightmap Simulator — Press [B] or [↑]/[↓]</span>
          </div>
          <ShhhBrightnessDemo />
        </section>

        {/* Filterable Visual Mod Directory */}
        <ModsDirectoryClient mods={MINECRAFT_MODS} />
      </div>
    </div>
  );
}
