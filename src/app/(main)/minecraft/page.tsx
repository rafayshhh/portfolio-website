import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { ShhhBrightnessSimulator } from "@/components/interactive/ShhhBrightnessSimulator";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import { 
  Gamepad2, 
  Server, 
  Palette, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Flame, 
  ShieldCheck 
} from "lucide-react";
import { MINECRAFT_MODS } from "@/data/mods";

export const metadata: Metadata = {
  title: "Minecraft Ecosystem — Mods, Plugins & Resource Packs | RafayShhh",
  description: "High-performance Minecraft client mods, Paper/Purpur server plugins, and lightweight resource packs engineered by RafayShhh.",
  alternates: {
    canonical: "/minecraft",
  },
};

export default function MinecraftHubPage() {
  return (
    <div className="pt-12 pb-24 relative transition-colors duration-200">
      {/* Greenish Minecraft Ambient Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-emerald-500/10 dark:bg-emerald-400/15 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Block */}
        <div className="space-y-4 font-minecraft">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wider">
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Minecraft Ecosystem</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
                MINECRAFT CREATIONS
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-emerald-200/70 mt-2 max-w-xl font-sans font-light leading-relaxed">
                Client utility mods hooking directly into bytecode render cycles, high-tick-rate Paper server plugins, and clean competitive visual packs.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-[#091b10] px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30 shrink-0">
              <Flame className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold">10,000+ Downloads</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <MinecraftNavTabs />

        {/* 3 Core Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Mods */}
          <Card3DTilt maxTilt={5} glare={true} className="rounded-2xl">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-sm dark:shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex flex-col justify-between group font-minecraft">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                    <Gamepad2 className="w-6 h-6" />
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/40">
                    4 Mods Available
                  </span>
                </div>

                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Minecraft Mods
                </h2>
                <p className="text-xs text-zinc-600 dark:text-emerald-200/70 font-sans font-light leading-relaxed">
                  Pure client-side utilities built for Fabric &amp; Quilt. Features Shhh Brightness Toggle, Shhh Builder, Shhh Printer, and Health Indicators.
                </p>

                <div className="space-y-1.5 pt-2 text-xs font-mono text-zinc-700 dark:text-emerald-300/80">
                  <div>✓ Shhh Brightness Toggle (10k+)</div>
                  <div>✓ Shhh Builder</div>
                  <div>✓ Shhh Printer</div>
                  <div>✓ Shhh Health Indicators</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-emerald-900/40">
                <Link
                  href="/minecraft/mods"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Explore Mods</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Card3DTilt>

          {/* Card 2: Server Plugins */}
          <Card3DTilt maxTilt={5} glare={true} className="rounded-2xl">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-sm dark:shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex flex-col justify-between group font-minecraft">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                    <Server className="w-6 h-6" />
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/40">
                    Coming Soon
                  </span>
                </div>

                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Server Plugins
                </h2>
                <p className="text-xs text-zinc-600 dark:text-emerald-200/70 font-sans font-light leading-relaxed">
                  High-efficiency Paper and Purpur server utilities designed for low TPS impact, automated moderation, and async tasks.
                </p>

                <div className="space-y-1.5 pt-2 text-xs font-mono text-zinc-700 dark:text-emerald-300/80">
                  <div>⏳ ShhhCore Spigot/Paper</div>
                  <div>⏳ Shhh Network Bridge</div>
                  <div>⏳ TPS Lag Diagnostics</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-emerald-900/40">
                <Link
                  href="/minecraft/plugins"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-[#112417] hover:bg-zinc-200 dark:hover:bg-[#1a3824] text-zinc-800 dark:text-emerald-200 transition-all flex items-center justify-center gap-2 border border-zinc-200 dark:border-emerald-500/30"
                >
                  <span>View Plugins &rarr;</span>
                </Link>
              </div>
            </div>
          </Card3DTilt>

          {/* Card 3: Resource Packs */}
          <Card3DTilt maxTilt={5} glare={true} className="rounded-2xl">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-sm dark:shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex flex-col justify-between group font-minecraft">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                    <Palette className="w-6 h-6" />
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/40">
                    Coming Soon
                  </span>
                </div>

                <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Resource Packs
                </h2>
                <p className="text-xs text-zinc-600 dark:text-emerald-200/70 font-sans font-light leading-relaxed">
                  Clean GUI overhauls, transparent menus, low-fire overlays, and obsidian dark themes engineered for optimal FPS.
                </p>

                <div className="space-y-1.5 pt-2 text-xs font-mono text-zinc-700 dark:text-emerald-300/80">
                  <div>⏳ Shhh Minimal HUD</div>
                  <div>⏳ Dark Mode UI Theme</div>
                  <div>⏳ Low Fire &amp; PvP Tweaks</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-emerald-900/40">
                <Link
                  href="/minecraft/resource-packs"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-[#112417] hover:bg-zinc-200 dark:hover:bg-[#1a3824] text-zinc-800 dark:text-emerald-200 transition-all flex items-center justify-center gap-2 border border-zinc-200 dark:border-emerald-500/30"
                >
                  <span>View Packs &rarr;</span>
                </Link>
              </div>
            </div>
          </Card3DTilt>
        </div>

        {/* 3D Voxel Cavern Demonstration */}
        <div className="space-y-3 font-minecraft">
          <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>Interactive 3D Voxel Cavern • Hit [B] for Shhh Brightness</span>
          </div>
          <ShhhBrightnessSimulator />
        </div>
      </div>
    </div>
  );
}
