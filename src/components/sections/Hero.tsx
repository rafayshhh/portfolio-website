"use client";

import React from "react";
import Link from "next/link";
import { 
  Gamepad2, 
  Smartphone, 
  ArrowRight, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  ExternalLink 
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/socials";
import { getSocialIcon, DiscordIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Red Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[300px] h-[300px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Availability / Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161620] border border-red-500/20 text-zinc-300 text-xs sm:text-sm font-medium mb-6 shadow-glow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-zinc-200">
            Developer Portfolio & Modding Hub
          </span>
          <span className="hidden sm:inline-block text-zinc-500">•</span>
          <span className="hidden sm:inline-block text-red-400 font-mono text-xs">
            rafayshhh.site
          </span>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 drop-shadow-sm">
              {PERSONAL_INFO.name}
            </span>
            .
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed">
            Crafting lightweight <span className="text-red-400 font-medium">Minecraft mods</span>, native{" "}
            <span className="text-white font-medium">Android applications</span>, and robust modern software.
          </p>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Creator of <strong className="text-zinc-200 font-semibold">Shhh Brightness Toggle</strong> on CurseForge & Modrinth. Dedicated to clean architecture, zero bloat, and delightful user ergonomics.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6">
          <Link
            href="/mods"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white shadow-glow-red hover:shadow-glow-red-lg transition-all flex items-center gap-2 group"
          >
            <Gamepad2 className="w-4 h-4 text-red-200" />
            <span>Minecraft Mods & Plugins</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/apps"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#14141c] hover:bg-[#1a1a24] text-zinc-200 hover:text-white border border-[#272736] hover:border-red-500/40 transition-all flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-red-400" />
            <span>Android Apps</span>
          </Link>

          <a
            href={PERSONAL_INFO.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#5865F2]/15 hover:bg-[#5865F2]/25 text-[#9cb0ff] hover:text-white border border-[#5865F2]/30 transition-all flex items-center gap-2"
          >
            <DiscordIcon className="w-4 h-4" />
            <span>Discord Server</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Quick Socials Carousel / Bar */}
        <div className="pt-10 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
          <span className="text-zinc-400 font-mono uppercase tracking-wider text-[11px] mr-1">
            Connect:
          </span>
          {SOCIAL_LINKS.map((link) => {
            const Icon = getSocialIcon(link.name);
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#111116] hover:bg-red-950/40 text-zinc-300 hover:text-red-400 border border-[#20202c] hover:border-red-500/40 transition-all flex items-center gap-2 font-medium"
                title={`${link.name}: ${link.username}`}
              >
                <Icon className="w-3.5 h-3.5 opacity-80" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Highlights Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-[#181824]">
          <div className="p-4 rounded-xl bg-[#0f0f15]/80 border border-[#1e1e2b]">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono flex items-center gap-1">
              <span>10,000+</span>
              <Flame className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Mod Downloads</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0f0f15]/80 border border-[#1e1e2b]">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono flex items-center gap-1">
              <span>Fabric & Quilt</span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Minecraft 1.20 - 1.21.x</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0f0f15]/80 border border-[#1e1e2b]">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
              Compose & Kotlin
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Modern Android Native</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0f0f15]/80 border border-[#1e1e2b]">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono text-red-400">
              100% Free
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Open Source & QoL Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
