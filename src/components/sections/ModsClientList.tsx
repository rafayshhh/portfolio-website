"use client";

import React, { useState } from "react";
import { MinecraftMod } from "@/data/mods";
import { 
  Download, 
  ExternalLink, 
  Check, 
  Sliders, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Terminal
} from "lucide-react";
import { 
  GithubIcon, 
  CurseForgeIcon, 
  ModrinthIcon 
} from "@/components/icons/BrandIcons";
import Link from "next/link";
import { sound } from "@/lib/sound";

interface ModsClientListProps {
  mods: MinecraftMod[];
}

const LOADERS = ["All", "Fabric", "Quilt", "Forge", "NeoForge", "Paper/Spigot"];

export function ModsClientList({ mods }: ModsClientListProps) {
  const [selectedLoader, setSelectedLoader] = useState("All");

  const filteredMods = mods.filter((mod) => {
    if (selectedLoader === "All") return true;
    return mod.loaders.some(
      (loader) => loader.toLowerCase() === selectedLoader.toLowerCase()
    );
  });

  return (
    <div className="space-y-8 font-mono">
      {/* Loader Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0c0408] border border-[#230917] w-fit">
        {LOADERS.map((loader) => (
          <button
            key={loader}
            onClick={() => {
              sound.playClick();
              setSelectedLoader(loader);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedLoader === loader
                ? "bg-red-600 text-white shadow-glow-sm font-bold"
                : "text-zinc-400 hover:text-white hover:bg-[#16060e]"
            }`}
          >
            {loader}
          </button>
        ))}
      </div>

      {/* Mods Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMods.map((mod) => (
          <div
            key={mod.id}
            className="rounded-2xl bg-[#0c0408] border border-[#230917] hover:border-red-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all group relative overflow-hidden shadow-xl shadow-black/60"
          >
            <div className="space-y-4">
              {/* Header badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {mod.loaders.map((loader, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800/40 font-bold"
                    >
                      {loader}
                    </span>
                  ))}
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#16060e] text-zinc-400 border border-[#2b0c1c]">
                    {mod.status}
                  </span>
                </div>

                <span className="text-xs text-zinc-400">
                  {mod.downloadCount}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-red-400 font-semibold mt-1">
                  {mod.tagline}
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed font-sans font-light">
                  {mod.description}
                </p>
              </div>

              {/* Minecraft Versions Matrix */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1.5 font-bold">
                  Tested Minecraft Versions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {mod.minecraftVersions.map((v, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#16060e] text-zinc-300 border border-[#2b0c1c]"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features bullets */}
              <div className="pt-3 border-t border-[#1c0713] space-y-1.5">
                {mod.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                    <Check className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Download / Repository Buttons */}
            <div className="pt-6 mt-6 border-t border-[#1c0713] flex flex-wrap items-center gap-3">
              {mod.curseForgeUrl && (
                <a
                  href={mod.curseForgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-sm transition-all flex items-center gap-2"
                >
                  <CurseForgeIcon className="w-3.5 h-3.5" />
                  <span>CurseForge</span>
                </a>
              )}
              {mod.modrinthUrl && (
                <a
                  href={mod.modrinthUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#17241c] hover:bg-[#1f3326] text-emerald-300 border border-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <ModrinthIcon className="w-3.5 h-3.5" />
                  <span>Modrinth</span>
                </a>
              )}
              {mod.githubUrl && (
                <a
                  href={mod.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-[#16060e] transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Commission or Custom Mod Request Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#10050c] to-[#080205] border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
            <Sparkles className="w-5 h-5 text-red-400" />
            <span>Need a custom mod or server plugin?</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg font-sans font-light">
            I accept commissions for custom Fabric/Forge client mods, QoL tweaks, and Paper/Purpur high-performance server plugins.
          </p>
        </div>
        <Link
          href="/#contact"
          onClick={() => sound.playClick()}
          className="px-6 py-3 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-sm shrink-0 transition-all cursor-pointer"
        >
          Commission a Mod
        </Link>
      </div>
    </div>
  );
}
