import React from "react";
import { MINECRAFT_MODS } from "@/data/mods";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { ShhhBrightnessDemo } from "@/components/interactive/ShhhBrightnessDemo";
import { ModsDirectoryClient } from "@/components/minecraft/ModsDirectoryClient";
import { Gamepad2, Terminal, Flame } from "lucide-react";

export default function MinecraftModsPage() {
  return (
    <div className="pt-12 pb-24 relative transition-colors duration-200">
      {/* Greenish Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-emerald-500/10 dark:bg-emerald-400/15 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wider font-minecraft">
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Open-Source Client Utilities</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase font-minecraft">
                MINECRAFT MODS
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-emerald-200/80 mt-2 max-w-2xl font-sans font-light leading-relaxed">
                Dedicated pages with full visual galleries, keybindings, client commands, and direct JAR releases for every public Fabric &amp; Forge utility mod.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-[#091b10] px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30 shrink-0">
              <Flame className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold">{MINECRAFT_MODS.length} Active Releases</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <MinecraftNavTabs />

        {/* Live Lightmap Demo */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold font-minecraft">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>Interactive Visual Cavern: Tap [B] or [↑]/[↓] for Shhh Brightness</span>
          </div>
          <ShhhBrightnessDemo />
        </div>

        {/* Filterable Visual Mod Directory */}
        <ModsDirectoryClient mods={MINECRAFT_MODS} />
      </div>
    </div>
  );
}
