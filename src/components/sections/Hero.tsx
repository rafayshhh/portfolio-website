"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Gamepad2, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  ExternalLink,
  Code2,
  Smartphone,
  CheckCircle2,
  Zap,
  Sparkles
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/socials";
import { getSocialIcon, DiscordIcon } from "@/components/icons/BrandIcons";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import { sound } from "@/lib/sound";

export function Hero() {
  return (
    <section className="relative pt-6 pb-16 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Panoramic Banner Card */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-[#3b0f20]/60 shadow-lg dark:shadow-2xl mb-10 group bg-white dark:bg-[#080306]">
          {/* Banner Image */}
          <div className="relative h-48 sm:h-72 lg:h-80 w-full overflow-hidden">
            <Image
              src="/images/banner.jpg"
              alt="RafayShhh Sunset Landscape Banner"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 dark:from-[#080306] dark:via-[#080306]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 dark:from-[#080306]/80 via-transparent to-white/60 dark:to-[#080306]/80" />
            <div className="absolute inset-0 bg-scanlines opacity-10 dark:opacity-20 pointer-events-none" />
          </div>

          {/* Profile Header Block Overlapping Banner */}
          <div className="relative px-6 sm:px-10 pb-8 -mt-20 sm:-mt-24 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
              {/* Avatar Frame */}
              <Card3DTilt className="rounded-2xl shrink-0">
                <div className="relative group/avatar">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-red-500 shadow-lg relative bg-white dark:bg-[#12040b] p-1">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/images/avatar.jpg"
                        alt="RafayShhh Character Portrait"
                        fill
                        priority
                        sizes="144px"
                        className="object-cover transform group-hover/avatar:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  {/* Live Status indicator */}
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#12040b] border border-emerald-500/60 shadow-md flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>AVAILABLE</span>
                  </div>
                </div>
              </Card3DTilt>

              {/* Identity & Subtitle */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-400 text-xs font-bold">
                  <span>Minecraft Mod Developer • Flutter &amp; Systems Engineer</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-3">
                  <span>{PERSONAL_INFO.name}</span>
                  <span className="text-xs font-normal text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded hidden sm:inline-block">
                    rafayshhh.site
                  </span>
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {PERSONAL_INFO.fullName} • Independent Systems &amp; Application Developer
                </p>
              </div>
            </div>

            {/* Quick Metrics Badge Group */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              <div className="px-3 py-2 rounded-xl bg-zinc-100 dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] text-zinc-800 dark:text-zinc-300 flex items-center gap-2 shadow-sm font-semibold">
                <Flame className="w-4 h-4 text-red-500" />
                <span>10,000+ Mod Downloads</span>
              </div>
              <div className="px-3 py-2 rounded-xl bg-zinc-100 dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] text-zinc-800 dark:text-zinc-300 flex items-center gap-2 shadow-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Offline &amp; Zero Bloat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Human Manifesto / Intro Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Mods that don&apos;t drop your FPS. Apps that don&apos;t spy on your data.
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
              I develop client-side Minecraft utility mods that hook directly into bytecode render cycles without annoying potion effects, and native software engineered with precision. Handcrafted with clean architecture, sub-millisecond algorithms, and zero telemetry trackers.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/minecraft"
                onClick={() => sound.playClick()}
                className="px-6 py-3 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-md shadow-emerald-700/20 transition-all flex items-center gap-2 group"
              >
                <Gamepad2 className="w-4 h-4 text-emerald-100" />
                <span>Minecraft Ecosystem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/apps"
                onClick={() => sound.playClick()}
                className="px-5 py-3 rounded-xl text-xs font-bold bg-cyan-700 hover:bg-cyan-600 text-white dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-black shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2 group"
              >
                <Smartphone className="w-4 h-4" />
                <span>Android Apps</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                onClick={() => sound.playClick()}
                className="px-5 py-3 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-500/20 transition-all flex items-center gap-2 group"
              >
                <Code2 className="w-4 h-4" />
                <span>Software Projects</span>
              </Link>

              <Link
                href="/experience"
                onClick={() => sound.playClick()}
                className="px-5 py-3 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-[#14060e] dark:hover:bg-[#200917] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-all flex items-center gap-2"
              >
                <span>Experience</span>
              </Link>

              <a
                href={PERSONAL_INFO.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-4 py-3 rounded-xl text-xs font-bold bg-[#5865F2]/10 dark:bg-[#5865F2]/15 hover:bg-[#5865F2]/20 text-[#4752c4] dark:text-[#9cb0ff] hover:text-[#5865F2] dark:hover:text-white border border-[#5865F2]/20 dark:border-[#5865F2]/30 transition-all flex items-center gap-2"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Discord</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Clean Engineering Overview + Social Quick-Grid */}
          <div className="lg:col-span-5 space-y-5">
            {/* Verified Capabilities Card */}
            <Card3DTilt className="rounded-2xl">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f040a] border border-zinc-200 dark:border-[#2a0b1c] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-[#1e0715]">
                  <span className="font-bold text-red-600 dark:text-red-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Engineering Stack &amp; Focus
                  </span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
                </div>

                <div className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Minecraft Fabric / Quilt:</strong> Bytecode Spongeian mixins, 0% FPS variance</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span><strong>Android &amp; Flutter:</strong> Clean Architecture, Riverpod 2.x, sub-0.05ms typing</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Systems &amp; AI:</strong> Google Gemini API, PySide6, Playwright, SQLite WAL</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Social Coordinates */}
            <Card3DTilt className="rounded-2xl">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0f040a] border border-zinc-200 dark:border-[#2a0b1c] space-y-3 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-red-600 dark:text-red-400 font-bold flex items-center justify-between">
                  <span>Community &amp; Code Links</span>
                  <span className="text-[10px] text-zinc-600 dark:text-zinc-400">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {SOCIAL_LINKS.slice(0, 6).map((s) => {
                    const Icon = getSocialIcon(s.icon);
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 dark:bg-[#180611] hover:bg-zinc-100 dark:hover:bg-[#25091a] text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-white transition-colors border border-zinc-200 dark:border-[#2f0c21]"
                      >
                        <Icon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                        <span className="truncate">{s.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
