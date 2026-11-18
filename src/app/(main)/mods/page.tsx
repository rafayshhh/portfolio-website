"use client";

import React from "react";
import { MINECRAFT_MODS } from "@/data/mods";
import { PERSONAL_INFO } from "@/data/socials";
import { JsonLd } from "@/components/seo/JsonLd";
import { Gamepad2, ExternalLink, Terminal } from "lucide-react";
import { CurseForgeIcon, ModrinthIcon, DiscordIcon } from "@/components/icons/BrandIcons";
import { ShhhBrightnessSimulator } from "@/components/interactive/ShhhBrightnessSimulator";
import { ModsClientList } from "@/components/sections/ModsClientList";
import { sound } from "@/lib/sound";

export default function ModsPage() {
  return (
    <div className="pt-12 pb-20 relative transition-colors duration-200">
      <JsonLd type="mods" />

      {/* Background glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 dark:bg-red-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-600/15 border border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-400 text-xs font-mono mb-4 font-bold">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Minecraft Modding & Utilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight font-mono">
            MINECRAFT MODIFICATIONS
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed font-light">
            Engineered for pure performance, zero HUD clutter, and seamless multiplayer compatibility. Discover released mods and upcoming utilities built for Fabric, Quilt, and Paper ecosystems.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-6 text-xs font-mono">
            <a
              href="https://www.curseforge.com/members/rafayshhh/projects"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded-xl bg-white dark:bg-[#15060f] hover:bg-zinc-50 dark:hover:bg-red-600/20 text-zinc-800 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-400 border border-zinc-200 dark:border-[#2b0c1c] shadow-sm transition-all flex items-center gap-2"
            >
              <CurseForgeIcon className="w-3.5 h-3.5 text-[#f16436]" />
              <span>CurseForge Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
            </a>
            <a
              href="https://modrinth.com/user/RafayShhh"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded-xl bg-white dark:bg-[#15060f] hover:bg-zinc-50 dark:hover:bg-emerald-950/40 text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 border border-zinc-200 dark:border-[#2b0c1c] shadow-sm transition-all flex items-center gap-2"
            >
              <ModrinthIcon className="w-3.5 h-3.5 text-[#00AF5C]" />
              <span>Modrinth Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
            </a>
            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-4 py-2 rounded-xl bg-[#5865F2]/10 dark:bg-[#5865F2]/15 text-[#4752c4] dark:text-[#9cb0ff] hover:bg-[#5865F2]/20 border border-[#5865F2]/25 dark:border-[#5865F2]/30 shadow-sm transition-all flex items-center gap-2"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              <span>Community Discord</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
            </a>
          </div>
        </div>

        {/* Live Interactive Simulator Banner */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 font-bold">
            <Terminal className="w-3.5 h-3.5 text-red-500" />
            <span>Live Mod Demonstration: Drag slider or tap [B]</span>
          </div>
          <ShhhBrightnessSimulator />
        </div>

        {/* Client-side filterable mod list */}
        <ModsClientList mods={MINECRAFT_MODS} />
      </div>
    </div>
  );
}
