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
  Zap,
  Terminal,
  Cpu,
  Layers
} from "lucide-react";
import { MINECRAFT_MODS } from "@/data/mods";
import { ANDROID_APPS } from "@/data/apps";
import { PERSONAL_INFO } from "@/data/socials";
import { 
  CurseForgeIcon, 
  ModrinthIcon, 
  DiscordIcon, 
  AndroidIcon,
  GithubIcon 
} from "@/components/icons/BrandIcons";
import { sound } from "@/lib/sound";

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
              <span>Architectural Craft</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
              ENGINEERED CREATIONS
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl font-light">
              High-performance client mods, native mobile applications, and developer utilities designed from first principles.
            </p>
          </div>
          <Link
            href="/mods"
            onClick={() => sound.playClick()}
            className="text-xs font-mono font-semibold text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group p-2 rounded-lg bg-[#14060e] border border-[#2b0c1c] w-fit"
          >
            <span>Explore full catalog</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-red-400" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 (Span 2): Shhh Brightness Toggle Deep-Dive */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#12050c] via-[#0d0408] to-[#070205] border border-red-500/30 p-6 sm:p-8 relative overflow-hidden group hover:border-red-500/60 transition-all shadow-xl shadow-black/80">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10 font-mono">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
                  <Gamepad2 className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-950/80 text-red-300 border border-red-800/40 font-bold">
                  FLAGSHIP MOD • FABRIC / QUILT
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400 bg-[#16060e] px-3 py-1 rounded-full border border-[#2c0c1d]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>10,000+ Downloads</span>
              </div>
            </div>

            <div className="relative z-10 space-y-4 max-w-2xl">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-300 transition-colors font-mono">
                  {primaryMod.title}
                </h3>
                <p className="text-xs text-red-400 font-mono font-medium">
                  {primaryMod.tagline}
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {primaryMod.description}
              </p>

              {/* Interactive Code / Architecture Peek */}
              <div className="p-3.5 rounded-xl bg-[#090306] border border-[#230917] font-mono text-[11px] text-zinc-400 space-y-1">
                <div className="flex items-center justify-between text-[10px] text-zinc-500 border-b border-[#1c0712] pb-1.5 mb-1.5">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Terminal className="w-3 h-3 text-red-400" />
                    <span>GameRendererMixin.java (Clean Injection)</span>
                  </span>
                  <span className="text-emerald-400 font-bold">ZERO PARTICLES</span>
                </div>
                <p className="text-zinc-300">
                  <span className="text-red-400">@Inject</span>(method = &quot;getNightVisionStrength&quot;, cancellable = true)
                </p>
                <p className="text-zinc-500 pl-3">
                  // Bypasses MobEffectInstance to avoid swirling particles & HUD clutter
                </p>
                <p className="text-zinc-400 pl-3">
                  if (ShhhConfig.isActive()) cir.setReturnValue(ShhhConfig.getGammaMultiplier());
                </p>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono">
                {primaryMod.features.slice(0, 4).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-zinc-300 bg-[#16060e] p-2.5 rounded-lg border border-[#2b0c1c]"
                  >
                    <Sliders className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 font-mono">
                {primaryMod.curseForgeUrl && (
                  <a
                    href={primaryMod.curseForgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-sm transition-all flex items-center gap-2"
                  >
                    <CurseForgeIcon className="w-3.5 h-3.5" />
                    <span>CurseForge (10k+)</span>
                  </a>
                )}
                {primaryMod.modrinthUrl && (
                  <a
                    href={primaryMod.modrinthUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#17241c] hover:bg-[#1f3326] text-emerald-300 border border-emerald-500/30 transition-all flex items-center gap-2"
                  >
                    <ModrinthIcon className="w-3.5 h-3.5" />
                    <span>Modrinth Mod</span>
                  </a>
                )}
                <Link
                  href="/mods"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Community Discord Citadel */}
          <div className="rounded-2xl bg-gradient-to-br from-[#12050c] via-[#0d0408] to-[#080205] border border-[#5865F2]/40 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-[#5865F2]/70 transition-all shadow-xl font-mono">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#5865F2]/20 text-[#8ea0ff] border border-[#5865F2]/30">
                  <DiscordIcon className="w-6 h-6" />
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#5865F2]/10 text-[#a0b0ff] border border-[#5865F2]/20 font-bold">
                  COMMUNITY HUB
                </span>
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-[#a0b0ff] transition-colors">
                RafayShhh Discord
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                Direct access to mod development logs, beta testing builds, suggestions for upcoming features, and community discussions.
              </p>

              <div className="p-3 rounded-xl bg-[#090306] border border-[#210915] text-[11px] text-zinc-300 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>● Mod Announcements</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>● Beta Builds Access</span>
                  <span className="text-red-400">Nightly</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>● Direct Developer Chat</span>
                  <span className="text-zinc-300">Open</span>
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

          {/* Card 3: Android App Flagship */}
          <div className="rounded-2xl bg-[#0d0408] border border-[#260a1a] p-6 sm:p-8 hover:border-red-500/40 transition-all group flex flex-col justify-between font-mono">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 rounded-xl bg-[#180611] text-red-400 border border-[#2f0c20]">
                  <AndroidIcon className="w-5 h-5" />
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#180611] text-emerald-400 border border-[#2f0c20]">
                  {primaryApp.version} • Offline Native
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors mb-1.5">
                {primaryApp.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4 font-sans font-light">
                {primaryApp.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {primaryApp.techStack.slice(0, 4).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-[#16060e] text-zinc-300 border border-[#290a1c]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e0715] flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">Zero Analytics Telemetry</span>
              <Link
                href="/apps"
                onClick={() => sound.playClick()}
                className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4 (Span 2): Full-Stack Architecture & Systems */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0d0408] border border-[#260a1a] p-6 sm:p-8 hover:border-red-500/40 transition-all flex flex-col justify-between group font-mono">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#180611] text-red-400 border border-[#2f0c20]">
                  <Code2 className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                  SOFTWARE PHILOSOPHY
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-300 transition-colors">
                Clean Bytecode. Zero Bloat. Total Control.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed font-sans font-light">
                Whether injecting into Minecraft OpenGL shader passes with Fabric Mixins, engineering reactive state with Kotlin Coroutines on Android, or building edge-rendered Next.js web applications, every project is built with human craft and meticulous attention to performance.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#1e0715]">
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                <span className="px-2.5 py-1 rounded bg-[#16060e] border border-[#290a1c]">Java 21</span>
                <span className="px-2.5 py-1 rounded bg-[#16060e] border border-[#290a1c]">Kotlin Native</span>
                <span className="px-2.5 py-1 rounded bg-[#16060e] border border-[#290a1c]">Jetpack Compose</span>
                <span className="px-2.5 py-1 rounded bg-[#16060e] border border-[#290a1c]">TypeScript 5</span>
              </div>
              <Link
                href="/projects"
                onClick={() => sound.playClick()}
                className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1.5"
              >
                <span>View software projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-red-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
