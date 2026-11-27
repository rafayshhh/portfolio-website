import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Gamepad2,
  ArrowRight,
  Smartphone,
  Code2,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Download,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/socials";
import { getSocialIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  return (
    <section className="relative pt-6 pb-14 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Panoramic Profile Card */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-[#320d1d] shadow-md dark:shadow-2xl mb-10 bg-white dark:bg-[#0c0408]">
          {/* Banner Visual */}
          <div className="relative h-36 sm:h-52 lg:h-60 w-full overflow-hidden">
            <Image
              src="/images/banner.jpg"
              alt="RafayShhh Sunset Landscape Banner"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/35 dark:from-[#0c0408] dark:via-[#0c0408]/45 to-transparent" />
          </div>

          {/* Profile Identity Row */}
          <div className="relative px-6 sm:px-10 pb-7 -mt-14 sm:-mt-16 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-red-500 shadow-lg relative bg-white dark:bg-[#12040b] p-1 shrink-0">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Muhammad Abdul Rafay portrait"
                    fill
                    priority
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 dark:bg-red-950/70 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/40">
                  Software Engineer • Minecraft &amp; Flutter Developer
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {PERSONAL_INFO.fullName} — Founder at{" "}
                  <Link href="/apps" className="text-cyan-700 dark:text-cyan-400 font-semibold hover:underline">
                    KreateKode
                  </Link>
                </p>
              </div>
            </div>

            {/* Verifiable Highlights */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <div className="px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] text-zinc-800 dark:text-zinc-200 flex items-center gap-2 font-semibold">
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>5 Open-Source Mods</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] text-zinc-800 dark:text-zinc-200 flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Offline &amp; Privacy-First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Copy & Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-snug">
              Fast utilities for players, creators, and teams—without tracking or clutter.
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I engineer client-side Minecraft mods across Fabric and Forge (1.8.9–26.3), offline Flutter Android utilities under KreateKode, and local-first desktop AI tools built for everyday speed and clean maintainability.
            </p>

            {/* Primary Navigation CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/minecraft/mods"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-colors flex items-center gap-2 group"
              >
                <Gamepad2 className="w-4 h-4 text-emerald-100" />
                <span>Browse Minecraft Mods</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/apps"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-700 hover:bg-cyan-600 text-white dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-black shadow-sm transition-colors flex items-center gap-2 group"
              >
                <Smartphone className="w-4 h-4" />
                <span>Explore Mobile Apps</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-red-700 hover:bg-red-600 text-white shadow-sm transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>Software Projects</span>
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-[#14060e] dark:hover:bg-[#200917] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Summary Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0f040a] border border-zinc-200 dark:border-[#2a0b1c] shadow-sm space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-zinc-100 dark:border-[#1e0715]">
                <span className="font-bold text-red-700 dark:text-red-400 text-xs uppercase tracking-wider">
                  Core Engineering Focus
                </span>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                  Active
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Minecraft Fabric &amp; Forge:</strong> SpongePowered Mixins, lightmap tools, schematics &amp; HUD indicators
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Flutter &amp; Android:</strong> Clean Architecture, Riverpod 2.x, offline Hive persistence
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Web &amp; Local AI:</strong> Next.js 15, TypeScript, Python PySide6 &amp; Google Gemini API
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0f040a] border border-zinc-200 dark:border-[#2a0b1c] space-y-3 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider text-red-700 dark:text-red-400 font-bold">
                  Developer Links
                </span>
                <Link href="/socials" className="text-zinc-600 dark:text-zinc-400 hover:underline flex items-center gap-1">
                  <span>All Profiles</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {SOCIAL_LINKS.slice(0, 6).map((s) => {
                  const Icon = getSocialIcon(s.icon);
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 dark:bg-[#180611] hover:bg-zinc-100 dark:hover:bg-[#25091a] text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors border border-zinc-200 dark:border-[#2f0c21]"
                    >
                      <Icon className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 shrink-0" />
                      <span className="truncate font-medium">{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
