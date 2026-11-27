import React from "react";
import { MINECRAFT_RESOURCE_PACKS } from "@/data/mods";
import { MinecraftNavTabs } from "@/components/minecraft/MinecraftNavTabs";
import { Palette, Clock, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MinecraftResourcePacksPage() {
  return (
    <div className="pt-10 pb-20 relative transition-colors duration-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <Palette className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Visual Ergonomics &amp; HUD Overhauls</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                Resource Packs
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 max-w-xl leading-relaxed">
                Minimalist 16x16 pixel textures, clean HUD atlases, and high-visibility gameplay visuals.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-[#1a1405] px-3.5 py-2 rounded-xl border border-amber-200 dark:border-amber-500/30 font-semibold shrink-0">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Roadmap</span>
            </div>
          </div>
        </div>

        <MinecraftNavTabs />

        {/* Notice Banner */}
        <div className="p-8 rounded-2xl bg-emerald-50/90 dark:bg-[#0a180e] border border-emerald-200 dark:border-emerald-500/35 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider block">
              Packaging Status: Planned
            </span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Standalone Texture Packs Planned
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 max-w-xl leading-relaxed">
              Pixel-art heart textures and font atlases are currently shipped directly inside our open-source Health Indicators mods.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-colors shrink-0"
          >
            Suggest a Pack &rarr;
          </Link>
        </div>

        {MINECRAFT_RESOURCE_PACKS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MINECRAFT_RESOURCE_PACKS.map((pack) => (
              <div
                key={pack.id}
                className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-semibold">
                      {pack.status}
                    </span>
                    <span className="text-xs text-zinc-600 dark:text-emerald-300 font-mono">16x16 Native</span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{pack.title}</h2>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">{pack.description}</p>
                  <div className="space-y-1.5 pt-2">
                    {pack.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <Link
                    href={`/minecraft/resource-packs/${pack.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white"
                  >
                    <span>View Pack Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/25 text-center space-y-3">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              No Standalone Resource Packs Published Yet
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto">
              In the meantime, explore all 5 open-source client-side Fabric and Forge utility mods.
            </p>
            <div className="pt-2">
              <Link
                href="/minecraft/mods"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-colors"
              >
                <span>Browse 5 Published Mods</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
