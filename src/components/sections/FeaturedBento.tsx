"use client";

import React from "react";
import Link from "next/link";
import { 
  Gamepad2, 
  Smartphone, 
  Code2, 
  ArrowUpRight, 
  Download, 
  Sliders, 
  Sparkles, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { MINECRAFT_MODS } from "@/data/mods";
import { ANDROID_APPS } from "@/data/apps";
import { PERSONAL_INFO } from "@/data/socials";
import { 
  CurseForgeIcon, 
  ModrinthIcon, 
  DiscordIcon, 
  AndroidIcon 
} from "@/components/icons/BrandIcons";

export function FeaturedBento() {
  const primaryMod = MINECRAFT_MODS[0]; // Shhh Brightness Toggle
  const primaryApp = ANDROID_APPS[0]; // Apex Utilities

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Creations & Ecosystem
            </h2>
          </div>
          <Link
            href="/mods"
            className="text-sm font-semibold text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1 group"
          >
            <span>Browse all mods & apps</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 (Span 2): Shhh Brightness Toggle flagship mod */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#141217] via-[#0f0e13] to-[#0a0a0f] border border-red-500/25 p-6 sm:p-8 relative overflow-hidden group hover:border-red-500/50 transition-all shadow-glow-sm">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
                  <Gamepad2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-950/80 text-red-300 border border-red-800/40">
                  Minecraft Mod • Fabric
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
                10k+ Downloads
              </span>
            </div>

            <div className="relative z-10 space-y-4 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-red-300 transition-colors">
                {primaryMod.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {primaryMod.description}
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {primaryMod.features.slice(0, 4).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-zinc-300 bg-[#171720]/80 p-2.5 rounded-lg border border-[#232332]"
                  >
                    <Sliders className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {primaryMod.curseForgeUrl && (
                  <a
                    href={primaryMod.curseForgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white shadow-glow-sm transition-all flex items-center gap-2"
                  >
                    <CurseForgeIcon className="w-3.5 h-3.5" />
                    <span>Download on CurseForge</span>
                  </a>
                )}
                {primaryMod.modrinthUrl && (
                  <a
                    href={primaryMod.modrinthUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1b1c24] hover:bg-[#252632] text-emerald-400 border border-emerald-500/30 transition-all flex items-center gap-2"
                  >
                    <ModrinthIcon className="w-3.5 h-3.5" />
                    <span>View on Modrinth</span>
                  </a>
                )}
                <Link
                  href="/mods"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Community Discord Server */}
          <div className="rounded-2xl bg-gradient-to-br from-[#121320] via-[#0d0e17] to-[#0a0a0f] border border-[#5865F2]/30 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-[#5865F2]/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-[#5865F2]/20 text-[#8ea0ff] border border-[#5865F2]/30">
                  <DiscordIcon className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#5865F2]/10 text-[#a0b0ff] border border-[#5865F2]/20">
                  Community
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#a0b0ff] transition-colors">
                RafayShhh Community
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Join the official Discord server to get beta updates, report bugs, suggest mod features, and chat directly with Rafay.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={PERSONAL_INFO.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-xs font-semibold bg-[#5865F2] hover:bg-[#4752c4] text-white shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Join Discord Server</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Android App Flagship */}
          <div className="rounded-2xl bg-[#0f0f15] border border-[#1f1f2d] p-6 sm:p-8 hover:border-red-500/40 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-zinc-800 text-zinc-200">
                <AndroidIcon className="w-5 h-5 text-red-400" />
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                Android Native
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors mb-2">
              {primaryApp.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              {primaryApp.tagline}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {primaryApp.techStack.slice(0, 3).map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href="/apps"
              className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1.5"
            >
              <span>Explore Android apps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4 (Span 2): Full-Stack Architecture & Open Source */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0f0f15] border border-[#1f1f2d] p-6 sm:p-8 hover:border-red-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-zinc-800 text-zinc-200">
                  <Code2 className="w-5 h-5 text-red-400" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Engineering & Open Source
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-300 transition-colors">
                Clean Architecture, High Performance
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Whether hooking into Minecraft client render pipelines with Fabric Mixins, engineering reactive Android state in Jetpack Compose, or building Next.js edge applications, every project is built with clean maintainability and zero bloat.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#1a1a26]">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-[#161622] border border-[#232332]">Java 21</span>
                <span className="px-2.5 py-1 rounded bg-[#161622] border border-[#232332]">Kotlin</span>
                <span className="px-2.5 py-1 rounded bg-[#161622] border border-[#232332]">TypeScript</span>
                <span className="px-2.5 py-1 rounded bg-[#161622] border border-[#232332]">Next.js</span>
              </div>
              <Link
                href="/projects"
                className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5"
              >
                <span>View all software projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
