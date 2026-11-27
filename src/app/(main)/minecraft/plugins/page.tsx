"use client";

import React from "react";
import { MINECRAFT_PLUGINS } from "@/data/mods";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import { 
  Server, 
  Sparkles, 
  Clock, 
  Check, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";
import Link from "next/link";
import { sound } from "@/lib/sound";

export default function MinecraftPluginsPage() {
  return (
    <div className="pt-12 pb-24 relative transition-colors duration-200">
      {/* Greenish Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-emerald-500/10 dark:bg-emerald-400/15 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Block */}
        <div className="space-y-4 font-minecraft">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wider">
            <Server className="w-3.5 h-3.5 text-emerald-500" />
            <span>Paper &amp; Purpur Server Architecture</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
                MINECRAFT PLUGINS
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-emerald-200/70 mt-2 max-w-xl font-sans font-light leading-relaxed">
                High-performance server utilities engineered for steady 20.0 TPS. Non-blocking asynchronous task execution, automated moderation, and zero server bloat.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-[#1a1405] px-3.5 py-2 rounded-xl border border-amber-200 dark:border-amber-500/30 shrink-0">
              <Clock className="w-4 h-4 text-amber-500 animate-spin" />
              <span className="font-semibold uppercase tracking-wider">Under Active Development</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <MinecraftNavTabs />

        {/* Coming Soon Notice Banner */}
        <div className="p-8 rounded-2xl bg-emerald-50/90 dark:bg-gradient-to-r dark:from-emerald-950/30 dark:via-[#0a180e] dark:to-[#040e07] border border-emerald-200 dark:border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-[0_10px_35px_rgba(16,185,129,0.15)] font-minecraft">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>Release Pipeline Status: Coming Soon</span>
            </div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Public Plugin Releases Dropping Soon
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-emerald-200/80 font-sans font-light max-w-xl">
              Paper and Purpur server utilities are currently undergoing stress testing on multi-instance server clusters.
            </p>
          </div>

          <Link
            href="/contact"
            onClick={() => sound.playClick()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-all shrink-0"
          >
            Commission a Plugin &rarr;
          </Link>
        </div>

        {/* Plugins In Pipeline */}
        {MINECRAFT_PLUGINS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MINECRAFT_PLUGINS.map((plugin) => (
              <Card3DTilt key={plugin.id} maxTilt={5} glare={true} className="rounded-2xl">
                <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-sm dark:shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex flex-col justify-between group font-minecraft">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/40 font-bold">
                        {plugin.status}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-emerald-400/80 font-mono">
                        Paper / Purpur
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {plugin.title}
                      </h2>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                        {plugin.tagline}
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-3 font-sans font-light leading-relaxed">
                        {plugin.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-emerald-900/40">
                      {plugin.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 font-sans font-light">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-emerald-900/40 flex flex-wrap items-center justify-between gap-3 font-mono">
                    <Link
                      href={`/minecraft/plugins/${plugin.id}`}
                      onClick={() => sound.playClick()}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <span>Plugin Specs &amp; Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs text-zinc-500 dark:text-emerald-400/70">
                      Source and SpigotMC listings pending beta
                    </span>
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 text-center font-minecraft space-y-3">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              No Standalone Server Plugins Published on GitHub Yet
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-emerald-200/70 font-sans font-light max-w-xl mx-auto">
              All currently released Minecraft tools are built as client-side Fabric mods (Shhh Brightness Toggle, Shhh Mob Health Indicators, Shhh Player Health Indicators, Shhh Builder, and Shhh Printer).
            </p>
            <div className="pt-2">
              <Link
                href="/minecraft/mods"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-all"
              >
                <span>Browse 5 Active Fabric Mods</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
