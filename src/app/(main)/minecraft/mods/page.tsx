"use client";

import React from "react";
import { MINECRAFT_MODS } from "@/data/mods";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { ShhhBrightnessSimulator } from "@/components/interactive/ShhhBrightnessSimulator";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import { 
  Gamepad2, 
  ExternalLink, 
  Terminal, 
  Check, 
  Flame, 
  Sparkles, 
  Layers 
} from "lucide-react";
import { CurseForgeIcon, ModrinthIcon, GithubIcon } from "@/components/icons/BrandIcons";
import { sound } from "@/lib/sound";

export default function MinecraftModsPage() {
  return (
    <div className="pt-12 pb-24 relative transition-colors duration-200">
      {/* Greenish Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-emerald-500/10 dark:bg-emerald-400/15 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Block */}
        <div className="space-y-4 font-minecraft">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wider">
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Fabric &amp; Quilt Client Utilities</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
                MINECRAFT MODS
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-emerald-200/70 mt-2 max-w-xl font-sans font-light leading-relaxed">
                Lightweight client-side mods designed for pure performance. No annoying potion swirls, zero HUD bloat, and seamless multiplayer compatibility.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-[#091b10] px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-500/30 shrink-0">
              <Flame className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold">3 Active Releases</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <MinecraftNavTabs />

        {/* Live Simulator Anchor */}
        <div className="space-y-3 font-minecraft">
          <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>Live Interactive Cavern: Tap [B] to toggle Shhh Brightness</span>
          </div>
          <ShhhBrightnessSimulator />
        </div>

        {/* Mods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MINECRAFT_MODS.map((mod) => (
            <Card3DTilt key={mod.id} maxTilt={5} glare={true} className="rounded-2xl">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-sm dark:shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex flex-col justify-between group font-minecraft">
                <div className="space-y-4">
                  {/* Meta Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5 font-mono">
                      {mod.loaders?.map((loader, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/40 font-bold"
                        >
                          {loader}
                        </span>
                      ))}
                    </div>
                    {mod.downloadCount && (
                      <span className="text-[10px] text-zinc-500 dark:text-emerald-400/80 font-mono">
                        {mod.downloadCount}
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {mod.title}
                    </h2>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      {mod.tagline}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-3 font-sans font-light leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-emerald-900/40">
                    {mod.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 font-sans font-light">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-emerald-900/40 flex flex-wrap items-center gap-2.5 font-mono">
                  {mod.curseForgeUrl && (
                    <a
                      href={mod.curseForgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#f16436] hover:bg-[#d8552b] text-white shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <CurseForgeIcon className="w-3.5 h-3.5" />
                      <span>CurseForge</span>
                    </a>
                  )}
                  {mod.modrinthUrl && (
                    <a
                      href={mod.modrinthUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#00AF5C] hover:bg-[#00944e] text-white shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <ModrinthIcon className="w-3.5 h-3.5" />
                      <span>Modrinth</span>
                    </a>
                  )}
                  {mod.githubUrl && (
                    <a
                      href={mod.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3 py-2 rounded-xl text-xs font-medium text-zinc-600 dark:text-emerald-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#122e1b] transition-colors flex items-center gap-1 border border-zinc-200 dark:border-emerald-500/20"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </div>
  );
}
