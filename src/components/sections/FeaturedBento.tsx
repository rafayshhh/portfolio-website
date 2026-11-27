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
  Trophy,
  ShieldCheck,
  Zap,
  ArrowRight,
  Download
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
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import { sound } from "@/lib/sound";

export function FeaturedBento() {
  const primaryMod = MINECRAFT_MODS[0]; // Shhh Brightness Toggle

  return (
    <section className="py-16 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-red-600 dark:text-red-400 font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              ENGINEERED CREATIONS
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl font-light">
              High-performance Minecraft client mods, active community channels, and open-source software built with precision.
            </p>
          </div>
          <Link
            href="/minecraft/mods"
            onClick={() => sound.playClick()}
            className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-1.5 group p-2.5 rounded-xl bg-white dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] shadow-sm w-fit"
          >
            <span>Explore all mods &amp; tools</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-red-600 dark:text-red-400" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 (Span 2): Shhh Brightness Toggle Deep-Dive */}
          <Card3DTilt className="lg:col-span-2 rounded-2xl">
            <div className="h-full rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#12050c] dark:via-[#0d0408] dark:to-[#070205] border border-zinc-200 dark:border-red-500/30 p-6 sm:p-8 relative overflow-hidden group hover:border-red-500/60 transition-all shadow-md flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
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
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors tracking-tight">
                    {primaryMod.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                    {primaryMod.tagline} {primaryMod.description}
                  </p>

                  {/* Bytecode injection highlight */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#080205] border border-zinc-200 dark:border-[#230916] text-xs space-y-2">
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center justify-between font-bold">
                      <span>Renderer Hooking Technique</span>
                      <span className="text-red-600 dark:text-red-400 font-bold">Pure Mixin Bytecode</span>
                    </div>
                    <div className="text-zinc-700 dark:text-zinc-300 font-mono text-[11px]">
                      <code>@Inject into LightmapTextureManager &rarr; Overrides gamma factor without potion swirl particles or HUD clutter.</code>
                    </div>
                  </div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {primaryMod.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-lg bg-zinc-100 dark:bg-[#180611] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2b0c1c]"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#1d0714] flex flex-wrap items-center gap-3 relative z-10">
                <Link
                  href={`/minecraft/mods/${primaryMod.id}`}
                  onClick={() => sound.playClick()}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-md transition-all flex items-center gap-2"
                >
                  <span>Mod Landing Page &amp; Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {primaryMod.releaseUrl && (
                  <a
                    href={primaryMod.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 dark:bg-emerald-950/90 dark:hover:bg-emerald-900 text-white dark:text-emerald-200 border border-zinc-800 dark:border-emerald-500/40 shadow-md transition-all flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .jar</span>
                  </a>
                )}
                {primaryMod.curseForgeUrl && (
                  <a
                    href={primaryMod.curseForgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#c2410c] hover:bg-[#9a3412] text-white shadow-md transition-all flex items-center gap-2"
                  >
                    <CurseForgeIcon className="w-4 h-4" />
                    <span>CurseForge</span>
                  </a>
                )}
                {primaryMod.modrinthUrl && (
                  <a
                    href={primaryMod.modrinthUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#00AF5C] hover:bg-[#00944e] text-white shadow-md transition-all flex items-center gap-2"
                  >
                    <ModrinthIcon className="w-4 h-4" />
                    <span>Modrinth</span>
                  </a>
                )}
              </div>
            </div>
          </Card3DTilt>

          {/* Card 2: Community Discord Citadel */}
          <Card3DTilt className="rounded-2xl">
            <div className="h-full rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#12050c] dark:via-[#0d0408] dark:to-[#080205] border border-[#5865F2]/30 dark:border-[#5865F2]/40 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-[#5865F2]/70 transition-all shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-[#5865F2]/10 dark:bg-[#5865F2]/20 text-[#5865F2] dark:text-[#8ea0ff] border border-[#5865F2]/20 dark:border-[#5865F2]/30">
                    <DiscordIcon className="w-6 h-6" />
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#5865F2]/10 text-[#4752c4] dark:text-[#a0b0ff] border border-[#5865F2]/20 font-bold">
                    COMMUNITY HUB
                  </span>
                </div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white group-hover:text-[#5865F2] dark:group-hover:text-[#a0b0ff] transition-colors tracking-tight">
                  RafayShhh Discord
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
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
          </Card3DTilt>

          {/* Card 3: GitHub & Open Source */}
          <Card3DTilt className="rounded-2xl">
            <div className="h-full rounded-2xl bg-white dark:bg-[#0d0408] border border-zinc-200 dark:border-[#260a1a] p-6 sm:p-8 hover:border-red-500/40 transition-all group flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 rounded-xl bg-zinc-100 dark:bg-[#180611] text-zinc-900 dark:text-red-400 border border-zinc-200 dark:border-[#2f0c20]">
                    <GithubIcon className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#180611] text-emerald-600 dark:text-emerald-400 border border-zinc-200 dark:border-[#2f0c20] font-bold">
                    Open Source
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors mb-1.5 tracking-tight">
                  GitHub Repositories
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-light">
                  Public source repositories, Fabric mod source files, Android native experiments with Flutter and Clean Architecture, and software utilities.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Java", "Fabric API", "Dart", "Flutter", "Next.js", "Python"].map((t, idx) => (
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
                <span className="text-[11px] text-zinc-600 dark:text-zinc-400">@RafayShhh</span>
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
          </Card3DTilt>

          {/* Card 4 (Span 2): Strategy & Software Philosophy */}
          <Card3DTilt className="lg:col-span-2 rounded-2xl">
            <div className="h-full rounded-2xl bg-white dark:bg-[#0d0408] border border-zinc-200 dark:border-[#260a1a] p-6 sm:p-8 hover:border-red-500/40 transition-all flex flex-col justify-between group shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-xl bg-zinc-100 dark:bg-[#180611] text-[#81b64c] border border-zinc-200 dark:border-[#2f0c20]">
                        <ChessComIcon className="w-5 h-5" />
                      </span>
                      <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">
                        STRATEGY &amp; CHESS.COM
                      </span>
                    </div>
                    <a
                      href={PERSONAL_INFO.chessProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 md:hidden"
                    >
                      <span>@rafayshhh</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors tracking-tight">
                    Clean Bytecode. Tactical Precision. Zero Bloat.
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
                    Whether hooking into Minecraft render cycles with Spongeian Mixins, calculating strategic moves on the 64-square chessboard, or building edge-rendered modern web apps, every creation is driven by intentional design, precision execution, and zero unnecessary bloat.
                  </p>
                </div>

                {/* Clean Strategic Stats Badge */}
                <div className="shrink-0 flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-50 dark:bg-[#14060f] border border-zinc-200 dark:border-[#2b0c1c] text-center min-w-[140px] space-y-1">
                  <Trophy className="w-6 h-6 text-[#81b64c]" />
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">Active Player</span>
                  <span className="text-[10px] text-zinc-600 dark:text-zinc-400">Rapid / Blitz / Puzzles</span>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 dark:border-[#1e0715]">
                <div className="flex flex-wrap gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c]">Rapid &amp; Blitz</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c]">Minecraft Fabric</span>
                  <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c]">Flutter Native</span>
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
          </Card3DTilt>
        </div>
      </div>
    </section>
  );
}
