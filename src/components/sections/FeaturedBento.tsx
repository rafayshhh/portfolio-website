import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Gamepad2,
  Smartphone,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Download,
  Check,
} from "lucide-react";
import { MINECRAFT_MODS } from "@/data/mods";
import { ANDROID_APPS } from "@/data/apps";
import { SOFTWARE_PROJECTS } from "@/data/projects";
import { CurseForgeIcon, GithubIcon } from "@/components/icons/BrandIcons";

export function FeaturedBento() {
  const primaryMod = MINECRAFT_MODS[0];
  const primaryShowcase = primaryMod.gallery[0];

  return (
    <section className="py-14 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold mb-1.5">
              Featured Releases
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              Built &amp; Open-Source
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-2xl">
              Explore client-side Minecraft utility mods, offline Android applications, and open-source software tools.
            </p>
          </div>

          <Link
            href="/minecraft/mods"
            className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#14060e] border border-zinc-200 dark:border-[#2b0c1c] shadow-sm w-fit"
          >
            <span>View all 5 Minecraft mods</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          </Link>
        </div>

        {/* Flagship Spotlight: Shhh Brightness Toggle */}
        <div className="rounded-2xl bg-white dark:bg-[#0d0408] border border-zinc-200 dark:border-red-500/25 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/40 font-semibold">
                    <Gamepad2 className="w-3.5 h-3.5" />
                    <span>Flagship Mod • Fabric &amp; Forge (1.8.9–26.3)</span>
                  </span>
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    {primaryMod.downloadCount} Downloads
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                  {primaryMod.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {primaryMod.tagline} {primaryMod.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {primaryMod.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-[#1e0715] flex flex-wrap items-center gap-2.5">
                <Link
                  href={`/minecraft/mods/${primaryMod.id}`}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>View Mod &amp; Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {primaryMod.releaseUrl && (
                  <a
                    href={primaryMod.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white border border-zinc-700 transition-colors flex items-center gap-1.5"
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
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#c2410c] hover:bg-[#9a3412] text-white transition-colors flex items-center gap-1.5"
                  >
                    <CurseForgeIcon className="w-4 h-4" />
                    <span>CurseForge</span>
                  </a>
                )}
                {primaryMod.githubUrl && (
                  <a
                    href={primaryMod.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-[#16060e] border border-zinc-200 dark:border-[#290a1c] transition-colors flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Edited Visual Preview Column */}
            {primaryShowcase && (
              <Link
                href={`/minecraft/mods/${primaryMod.id}`}
                className="lg:col-span-5 relative min-h-[240px] lg:min-h-full bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-[#230916] overflow-hidden group"
              >
                <Image
                  src={primaryShowcase.src}
                  alt={primaryShowcase.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                  <span className="text-xs font-semibold text-white block">
                    {primaryShowcase.caption}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* 3 Clean Directory Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Minecraft Mods */}
          <div className="rounded-2xl bg-white dark:bg-[#0b150e] border border-zinc-200 dark:border-emerald-500/25 p-6 flex flex-col justify-between space-y-5 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  <Gamepad2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {MINECRAFT_MODS.length} Open-Source Mods
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Minecraft Utility Suite
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Dedicated pages with edited visual galleries, keybindings, and direct `.jar` releases for every published mod.
              </p>
              <ul className="space-y-1.5 pt-1 text-xs">
                {MINECRAFT_MODS.map((mod) => (
                  <li key={mod.id}>
                    <Link
                      href={`/minecraft/mods/${mod.id}`}
                      className="text-zinc-700 dark:text-emerald-200/90 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium flex items-center justify-between py-1 border-b border-zinc-100 dark:border-emerald-900/30"
                    >
                      <span className="truncate">{mod.title}</span>
                      <ArrowRight className="w-3 h-3 shrink-0 ml-2 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/minecraft/mods"
              className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 pt-2"
            >
              <span>Open Mods Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pillar 2: Mobile Apps (KreateKode) */}
          <div className="rounded-2xl bg-white dark:bg-[#06111c] border border-zinc-200 dark:border-cyan-500/25 p-6 flex flex-col justify-between space-y-5 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
                  <Smartphone className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                  {ANDROID_APPS.length} Released Apps
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                KreateKode Mobile Apps
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Offline-first Flutter applications built with Clean Architecture, Riverpod, and zero telemetry SDKs.
              </p>

              {/* Edited Showcase Strip */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 dark:border-cyan-900/40 bg-zinc-950">
                <Image
                  src="/images/apps/kreate-typography/promo-showcase-wide.jpg"
                  alt="Kreate Typography Studio promotional preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <ul className="space-y-1.5 text-xs">
                {ANDROID_APPS.map((app) => (
                  <li key={app.id}>
                    <Link
                      href={`/apps/${app.id}`}
                      className="text-zinc-700 dark:text-cyan-200/90 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium flex items-center justify-between py-1 border-b border-zinc-100 dark:border-cyan-900/30"
                    >
                      <span className="truncate">{app.title}</span>
                      <ArrowRight className="w-3 h-3 shrink-0 ml-2 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/apps"
              className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1 pt-2"
            >
              <span>View Mobile Apps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pillar 3: Software & AI Projects */}
          <div className="rounded-2xl bg-white dark:bg-[#0d0408] border border-zinc-200 dark:border-[#260a1a] p-6 flex flex-col justify-between space-y-5 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-red-50 dark:bg-[#180611] text-red-700 dark:text-red-400 border border-red-200 dark:border-[#2f0c20]">
                  <Code2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-red-700 dark:text-red-400">
                  {SOFTWARE_PROJECTS.length} Open-Source Repos
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                AI, Desktop &amp; Web Software
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Local-first Gemini AI publishing tools, multimodal desktop agents, and static-first Next.js architecture.
              </p>

              <ul className="space-y-2 pt-1 text-xs">
                {SOFTWARE_PROJECTS.map((proj) => (
                  <li key={proj.id}>
                    <Link
                      href={`/projects/${proj.id}`}
                      className="block p-3 rounded-xl bg-zinc-50 dark:bg-[#14060e] hover:bg-zinc-100 dark:hover:bg-[#1c0813] border border-zinc-200 dark:border-[#2b0c1c] transition-colors"
                    >
                      <div className="flex items-center justify-between font-bold text-zinc-900 dark:text-white">
                        <span>{proj.title}</span>
                        <ArrowRight className="w-3 h-3 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-[11px] text-zinc-600 dark:text-zinc-400 line-clamp-1 mt-0.5 block">
                        {proj.tagline}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/projects"
              className="text-xs font-bold text-red-700 dark:text-red-400 hover:underline flex items-center gap-1 pt-2"
            >
              <span>Explore Software Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
