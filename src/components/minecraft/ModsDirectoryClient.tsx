"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MinecraftCreation } from "@/data/mods";
import { Card3DTilt } from "@/components/3d/Card3DTilt";
import {
  Check,
  ArrowRight,
  Download,
  Image as ImageIcon,
} from "lucide-react";
import { CurseForgeIcon, GithubIcon } from "@/components/icons/BrandIcons";
import { sound } from "@/lib/sound";

const FILTERS = [
  { id: "all", label: "All Mods" },
  { id: "26.3", label: "Minecraft 26.3" },
  { id: "multi", label: "1.8.9–26.3 Legacy/Modern" },
  { id: "hud", label: "HUD & Indicators" },
  { id: "building", label: "Schematics & Building" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function ModsDirectoryClient({ mods }: { mods: MinecraftCreation[] }) {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = mods.filter((mod) => {
    if (filter === "all") return true;
    if (filter === "26.3") return mod.minecraftVersions?.some((v) => v.includes("26.3"));
    if (filter === "multi") return (mod.minecraftVersions?.length || 0) > 1;
    if (filter === "hud") return mod.id.includes("health") || mod.id.includes("brightness");
    if (filter === "building") return mod.id.includes("builder") || mod.id.includes("printer");
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Interactive Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-[#08150c] border border-zinc-200 dark:border-emerald-500/25 w-fit font-mono">
        {FILTERS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              sound.playClick();
              setFilter(tab.id);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === tab.id
                ? "bg-emerald-700 text-white shadow-sm"
                : "text-zinc-600 dark:text-emerald-200/70 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-emerald-950/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((mod) => {
          const primary = mod.gallery.find((g) => g.isPrimary) || mod.gallery[0];
          const isSquareCover = primary?.aspect === "square";

          return (
            <Card3DTilt key={mod.id} maxTilt={4} glare={true} className="rounded-2xl">
              <div className="h-full rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-sm dark:shadow-[0_10px_30px_rgba(16,185,129,0.08)] flex flex-col justify-between group overflow-hidden">
                <div>
                  {/* Mod Visual Cover Preview linking straight to dedicated Mod Page */}
                  {primary && (
                    <Link
                      href={`/minecraft/mods/${mod.id}`}
                      onClick={() => sound.playClick()}
                      className={`relative block aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-emerald-500/20 ${
                        isSquareCover ? "bg-zinc-950" : "bg-zinc-900"
                      }`}
                    >
                      <Image
                        src={primary.src}
                        alt={primary.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={
                          isSquareCover
                            ? "object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                            : "object-cover group-hover:scale-105 transition-transform duration-300"
                        }
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-sm border border-white/10 text-[10px] font-mono font-bold text-white flex items-center gap-1.5">
                        <ImageIcon className="w-3 h-3 text-emerald-400" />
                        <span>
                          {mod.gallery.length} {mod.gallery.length === 1 ? "Asset" : "Gallery Shots"}
                        </span>
                      </div>
                    </Link>
                  )}

                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Meta Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                      <div className="flex flex-wrap gap-1.5">
                        {mod.loaders?.map((loader) => (
                          <span
                            key={loader}
                            className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/40 font-bold"
                          >
                            {loader}
                          </span>
                        ))}
                        {mod.minecraftVersions?.slice(-2).map((ver) => (
                          <span
                            key={ver}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                          >
                            {ver}
                          </span>
                        ))}
                      </div>
                      {mod.downloadCount && (
                        <span className="text-[10px] text-zinc-600 dark:text-emerald-300/90 font-semibold">
                          {mod.downloadCount}
                        </span>
                      )}
                    </div>

                    <div>
                      <Link href={`/minecraft/mods/${mod.id}`} onClick={() => sound.playClick()}>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors font-minecraft">
                          {mod.title}
                        </h2>
                      </Link>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                        {mod.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-2.5 font-sans font-light leading-relaxed">
                        {mod.description}
                      </p>
                    </div>

                    {/* Features highlight */}
                    <ul className="space-y-1.5 pt-3 border-t border-zinc-100 dark:border-emerald-900/40">
                      {mod.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-4 border-t border-zinc-100 dark:border-emerald-900/40 flex flex-wrap items-center gap-2 font-mono">
                  <Link
                    href={`/minecraft/mods/${mod.id}`}
                    onClick={() => sound.playClick()}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <span>Gallery, Specs &amp; Docs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {mod.releaseUrl && (
                    <a
                      href={mod.releaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white border border-zinc-700 transition-all flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download .jar</span>
                    </a>
                  )}
                  {mod.curseForgeUrl && (
                    <a
                      href={mod.curseForgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#c2410c] hover:bg-[#9a3412] text-white transition-all flex items-center gap-1.5"
                    >
                      <CurseForgeIcon className="w-3.5 h-3.5" />
                      <span>CurseForge</span>
                    </a>
                  )}
                  {mod.githubUrl && (
                    <a
                      href={mod.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3 py-2 rounded-xl text-xs font-medium text-zinc-700 dark:text-emerald-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#122e1b] transition-colors flex items-center gap-1 border border-zinc-200 dark:border-emerald-500/20"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </Card3DTilt>
          );
        })}
      </div>
    </div>
  );
}
