"use client";

import React from "react";
import Link from "next/link";
import { 
  Gamepad2, 
  Code2, 
  ArrowUpRight, 
  Sparkles, 
  GitBranch,
  Terminal,
  Trophy
} from "lucide-react";
import { MINECRAFT_MODS } from "@/data/mods";
import { PERSONAL_INFO } from "@/data/socials";
import { 
  CurseForgeIcon, 
  ModrinthIcon, 
  DiscordIcon, 
  GithubIcon,
  ChessComIcon 
} from "@/components/icons/BrandIcons";
import { sound } from "@/lib/sound";

export function FeaturedBento() {
  const primaryMod = MINECRAFT_MODS[0]; // Shhh Brightness Toggle

  return (
    <section className="py-20 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight font-mono">
              ENGINEERED CREATIONS
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl font-light">
              High-performance Minecraft client mods, active community channels, and open-source software built with precision.
            </p>
          </div>
          <Link
            href="/mods"
            onClick={() => sound.playClick()}
            className="text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-1.5 group p-2.5 rounded-xl bg-white dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] shadow-sm w-fit"
          >
            <span>Explore mod catalog</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-red-600 dark:text-red-400" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 (Span 2): Shhh Brightness Toggle Deep-Dive */}
          <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#12050c] dark:via-[#0d0408] dark:to-[#070205] border border-zinc-200 dark:border-red-500/30 p-6 sm:p-8 relative overflow-hidden group hover:border-red-500/60 transition-all shadow-md dark:shadow-xl dark:shadow-black/80">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10 font-mono">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-red-100 dark:bg-red-600/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/30">
                  <Gamepad2 className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/40 font-bold">
                  FLAGSHIP MOD • FABRIC / QUILT
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-[#16060e] px-3 py-1 rounded-full border border-zinc-200 dark:border-[#2c0c1d]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold">{primaryMod.downloadCount} Downloads</span>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-mono group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {primaryMod.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                {primaryMod.tagline} {primaryMod.description}
              </p>

              {/* Bytecode injection highlight */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#080205] border border-zinc-200 dark:border-[#230916] text-xs font-mono space-y-2">
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Renderer Hooking Technique</span>
                  <span className="text-red-600 dark:text-red-400 font-bold">Pure Mixin Bytecode</span>
                </div>
                <div className="text-zinc-700 dark:text-zinc-300">
                  <code>@Inject into LightmapTextureManager.updateLightmap() &rarr; Overrides gamma factor without triggering Night Vision potion loops or ambient particle swirls.</code>
                </div>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {primaryMod.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-zinc-100 dark:bg-[#1a0712] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#330e24] font-mono"
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={primaryMod.curseForgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#f16436] hover:bg-[#d8552b] text-white shadow-md transition-all flex items-center gap-2"
                >
                  <CurseForgeIcon className="w-4 h-4" />
                  <span>CurseForge (10k+)</span>
                </a>
                <a
                  href={primaryMod.modrinthUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#00AF5C] hover:bg-[#00944e] text-white shadow-md transition-all flex items-center gap-2"
                >
                  <ModrinthIcon className="w-4 h-4" />
                  <span>Modrinth</span>
                </a>
                <Link
                  href="/mods"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 border border-zinc-200 dark:border-white/10 hover:border-red-500/40 transition-colors"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Community Discord Citadel */}
          <div className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#12050c] dark:via-[#0d0408] dark:to-[#080205] border border-[#5865F2]/30 dark:border-[#5865F2]/40 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-[#5865F2]/70 transition-all shadow-md dark:shadow-xl font-mono">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#5865F2]/10 dark:bg-[#5865F2]/20 text-[#5865F2] dark:text-[#8ea0ff] border border-[#5865F2]/20 dark:border-[#5865F2]/30">
                  <DiscordIcon className="w-6 h-6" />
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#5865F2]/10 text-[#4752c4] dark:text-[#a0b0ff] border border-[#5865F2]/20 font-bold">
                  COMMUNITY HUB
                </span>
              </div>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white group-hover:text-[#5865F2] dark:group-hover:text-[#a0b0ff] transition-colors">
                RafayShhh Discord
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans font-light">
                Direct access to mod development logs, beta testing builds, suggestions for upcoming features, and community discussions.
              </p>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#090306] border border-zinc-200 dark:border-[#210915] text-[11px] text-zinc-700 dark:text-zinc-300 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                  <span>● Mod Announcements</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                  <span>● Beta Builds Access</span>
                  <span className="text-red-600 dark:text-red-400 font-semibold">Nightly</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                  <span>● Direct Developer Chat</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Open</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={PERSONAL_INFO.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full py-3 rounded-xl text-xs font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Join Discord Server</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: GitHub & Open Source */}
          <div className="rounded-2xl bg-white dark:bg-[#0d0408] border border-zinc-200 dark:border-[#260a1a] p-6 sm:p-8 hover:border-red-500/40 transition-all group flex flex-col justify-between font-mono shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 rounded-xl bg-zinc-100 dark:bg-[#180611] text-zinc-900 dark:text-red-400 border border-zinc-200 dark:border-[#2f0c20]">
                  <GithubIcon className="w-5 h-5" />
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#180611] text-emerald-600 dark:text-emerald-400 border border-zinc-200 dark:border-[#2f0c20] font-bold">
                  Open Source
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors mb-1.5">
                GitHub Repositories
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-sans font-light">
                Public source repositories, Fabric mod source files, Android native experiments with Kotlin and Jetpack Compose, and software utilities.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Java", "Fabric API", "Kotlin", "Compose", "Next.js"].map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#16060e] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#290a1c]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-[#1e0715] flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">@RafayShhh</span>
              <a
                href="https://github.com/RafayShhh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-500 flex items-center gap-1.5"
              >
                <span>View GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4 (Span 2): Chess.com & Software Philosophy */}
          <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-[#0d0408] border border-zinc-200 dark:border-[#260a1a] p-6 sm:p-8 hover:border-red-500/40 transition-all flex flex-col justify-between group font-mono shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-zinc-100 dark:bg-[#180611] text-[#81b64c] border border-zinc-200 dark:border-[#2f0c20]">
                    <ChessComIcon className="w-5 h-5" />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">
                    STRATEGY & CHESS.COM
                  </span>
                </div>
                <a
                  href={PERSONAL_INFO.chessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>@rafayshhh on Chess.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">
                Clean Bytecode. Tactical Precision. Zero Bloat.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-sans font-light">
                Whether hooking into Minecraft render cycles with Mixins, calculating strategic moves on the 64-square chessboard, or building edge-rendered modern web apps, every project is driven by intentional design, precision execution, and zero unnecessary bloat.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 dark:border-[#1e0715]">
              <div className="flex flex-wrap gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c]">Rapid / Blitz</span>
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c]">Minecraft Fabric</span>
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c]">Kotlin Native</span>
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c]">TypeScript 5</span>
              </div>
              <a
                href={PERSONAL_INFO.chessProfile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="text-xs font-bold text-zinc-800 dark:text-zinc-300 hover:text-red-600 dark:hover:text-white flex items-center gap-1.5"
              >
                <span>Play on Chess.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
