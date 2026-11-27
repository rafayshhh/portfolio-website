"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MinecraftCreation } from "@/data/mods";
import { ArrowRight, Check, Download, Image as ImageIcon, Sparkles } from "lucide-react";
import { CurseForgeIcon, GithubIcon } from "@/components/icons/BrandIcons";

interface ModsDirectoryClientProps {
  mods: MinecraftCreation[];
}

const FILTERS = [
  { id: "all", label: "All Mods (5)" },
  { id: "26.3", label: "Minecraft 26.3" },
  { id: "forge", label: "Forge & Legacy" },
  { id: "hud", label: "Health & HUD" },
  { id: "building", label: "Schematics & Building" },
];

export function ModsDirectoryClient({ mods }: ModsDirectoryClientProps) {
  const [filter, setFilter] = useState("all");

  const filtered = mods.filter((mod) => {
    if (filter === "all") return true;
    if (filter === "26.3") return mod.minecraftVersions?.some((v) => v.includes("26.3"));
    if (filter === "forge") return mod.loaders?.includes("Forge");
    if (filter === "hud") return mod.id.includes("health") || mod.id.includes("brightness");
    if (filter === "building") return mod.id.includes("builder") || mod.id.includes("printer");
    return true;
  });

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 dark:bg-[#08150c] border border-zinc-200 dark:border-emerald-500/25 w-fit">
        {FILTERS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              filter === tab.id
                ? "bg-emerald-700 text-white shadow-sm"
                : "text-zinc-700 dark:text-emerald-200/80 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-emerald-950/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((mod) => {
          const editedPrimary = mod.gallery.find((g) => g.isPrimary) || mod.gallery[0];
          const coverSrc = editedPrimary?.src || mod.icon;
          const isIconOnly = !editedPrimary && Boolean(mod.icon);

          return (
            <div
              key={mod.id}
              className="h-full rounded-2xl bg-white dark:bg-[#0a180e] border border-zinc-200 dark:border-emerald-500/25 hover:border-emerald-500/60 transition-colors shadow-sm flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {coverSrc && (
                  <Link
                    href={`/minecraft/mods/${mod.id}`}
                    className={`relative block aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-emerald-500/20 ${
                      isIconOnly ? "bg-zinc-950" : "bg-zinc-900"
                    }`}
                  >
                    <Image
                      src={coverSrc}
                      alt={editedPrimary?.alt || `${mod.title} icon`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={
                        isIconOnly
                          ? "object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                          : "object-cover group-hover:scale-105 transition-transform duration-300"
                      }
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-sm border border-white/10 text-[11px] font-medium text-white flex items-center gap-1.5">
                      {mod.gallery.length > 0 ? (
                        <>
                          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{mod.gallery.length} Edited Slides</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Interactive Preview</span>
                        </>
                      )}
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
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/40 font-bold"
                        >
                          {loader}
                        </span>
                      ))}
                      {mod.minecraftVersions?.slice(-2).map((ver) => (
                        <span
                          key={ver}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                        >
                          {ver}
                        </span>
                      ))}
                    </div>
                    {mod.downloadCount && (
                      <span className="text-[11px] text-zinc-700 dark:text-emerald-300/90 font-semibold font-sans">
                        {mod.downloadCount}
                      </span>
                    )}
                  </div>

                  <div>
                    <Link href={`/minecraft/mods/${mod.id}`}>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                        {mod.title}
                      </h2>
                    </Link>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                      {mod.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-2.5 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-zinc-100 dark:border-emerald-900/40">
                    {mod.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-4 border-t border-zinc-100 dark:border-emerald-900/40 flex flex-wrap items-center gap-2">
                <Link
                  href={`/minecraft/mods/${mod.id}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>View Mod &amp; Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {mod.releaseUrl && (
                  <a
                    href={mod.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white border border-zinc-700 transition-colors flex items-center gap-1.5"
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
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#c2410c] hover:bg-[#9a3412] text-white transition-colors flex items-center gap-1.5"
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
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-emerald-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#122e1b] transition-colors flex items-center gap-1 border border-zinc-200 dark:border-emerald-500/20"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
