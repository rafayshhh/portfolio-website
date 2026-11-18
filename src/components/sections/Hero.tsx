"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Gamepad2, 
  Smartphone, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  ExternalLink,
  Code2,
  Terminal,
  Eye
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/socials";
import { getSocialIcon, DiscordIcon } from "@/components/icons/BrandIcons";
import { EmberParticles } from "@/components/effects/EmberParticles";
import { ShhhBrightnessSimulator } from "@/components/interactive/ShhhBrightnessSimulator";
import { sound } from "@/lib/sound";

export function Hero() {
  const scrollToSimulator = () => {
    sound.playClick();
    const el = document.getElementById("simulator-deck");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-6 pb-20 overflow-hidden">
      {/* Ambient floating ember particles */}
      <EmberParticles count={30} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Panoramic Banner Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#3b0f20]/60 shadow-2xl mb-10 group">
          {/* Banner Image */}
          <div className="relative h-48 sm:h-72 lg:h-80 w-full overflow-hidden">
            <Image
              src="/images/banner.jpg"
              alt="RafayShhh Sunset Landscape Banner"
              fill
              priority
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark gradient overlay blending the bottom of the banner into the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080306] via-[#080306]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080306]/80 via-transparent to-[#080306]/80" />
            <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
          </div>

          {/* Profile Header Block Overlapping Banner */}
          <div className="relative px-6 sm:px-10 pb-8 -mt-20 sm:-mt-24 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
              {/* Pixel Art Avatar Frame */}
              <div className="relative group/avatar">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-red-500/80 shadow-glow-red relative bg-[#12040b] p-1">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/avatar.jpg"
                      alt="RafayShhh Pixel Character Portrait"
                      fill
                      priority
                      className="object-cover transform group-hover/avatar:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Live Status indicator */}
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#12040b] border border-emerald-500/60 shadow-md flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Identity & Subtitle */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono">
                  <span>Minecraft Modder • Android Engineer</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono flex items-center gap-3">
                  <span>{PERSONAL_INFO.name}</span>
                  <span className="text-xs font-normal text-zinc-500 font-mono border border-zinc-800 px-2 py-0.5 rounded hidden sm:inline-block">
                    rafayshhh.site
                  </span>
                </h1>
                <p className="text-sm text-zinc-400 font-mono">
                  {PERSONAL_INFO.fullName} • Independent Systems Developer
                </p>
              </div>
            </div>

            {/* Quick Metrics Badge Group */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs">
              <div className="px-3 py-2 rounded-xl bg-[#14060e] border border-[#2b0c1c] text-zinc-300 flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500" />
                <span>10,000+ Downloads</span>
              </div>
              <div className="px-3 py-2 rounded-xl bg-[#14060e] border border-[#2b0c1c] text-zinc-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fabric 1.20 - 1.21.x</span>
              </div>
            </div>
          </div>
        </div>

        {/* Human Manifesto / Intro Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Mods that don&apos;t bloat your FPS. Apps that don&apos;t spy on your data.
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed max-w-2xl font-light">
              I develop client-side Minecraft utility mods that hook directly into render pipelines without annoying potion swirls, and native Android applications built with Kotlin and Jetpack Compose. Handcrafted with zero AI boilerplate, clean architectures, and maximum user control.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/mods"
                onClick={() => sound.playClick()}
                className="px-6 py-3 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white shadow-glow-red hover:shadow-glow-red-lg transition-all flex items-center gap-2 group"
              >
                <Gamepad2 className="w-4 h-4 text-red-200" />
                <span>Browse Minecraft Mods</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={scrollToSimulator}
                className="px-5 py-3 rounded-xl font-mono text-xs font-bold bg-[#14060e] hover:bg-[#200917] text-zinc-200 hover:text-white border border-red-500/40 transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-red-400" />
                <span>Test Brightness Toggle [B]</span>
              </button>

              <a
                href={PERSONAL_INFO.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-5 py-3 rounded-xl font-mono text-xs font-bold bg-[#5865F2]/15 hover:bg-[#5865F2]/25 text-[#9cb0ff] hover:text-white border border-[#5865F2]/30 transition-all flex items-center gap-2"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Discord Community</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Social Links Network Box */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-[#0f050b] border border-[#240a17] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-[#200915] pb-2">
              <span className="uppercase tracking-wider">Creator Network</span>
              <span className="text-red-400">@RafayShhh</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {SOCIAL_LINKS.map((link) => {
                const Icon = getSocialIcon(link.name);
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2 rounded-lg bg-[#15070f] hover:bg-red-950/60 text-zinc-300 hover:text-red-300 border border-[#220b18] hover:border-red-500/40 transition-all flex items-center gap-2 group"
                  >
                    <Icon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-red-400 shrink-0" />
                    <span className="truncate text-[11px]">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Interactive Mod Deck (The "Oh Damn It's Insane" Anchor) */}
        <div id="simulator-deck" className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Live Demo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                Try Shhh Brightness Toggle Live in the Browser
              </h3>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              Drag the slider or tap <kbd className="px-1.5 py-0.5 bg-zinc-800 text-red-400 rounded border border-zinc-700">[B]</kbd> on your keyboard
            </p>
          </div>

          <ShhhBrightnessSimulator />
        </div>
      </div>
    </section>
  );
}
