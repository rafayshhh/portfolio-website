import React from "react";
import type { Metadata } from "next";
import { MINECRAFT_MODS } from "@/data/mods";
import { JsonLd } from "@/components/seo/JsonLd";
import { ModsClientList } from "@/components/sections/ModsClientList";
import { Gamepad2, Sparkles, ExternalLink, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/socials";

export const metadata: Metadata = {
  title: "Minecraft Mods & Plugins — Shhh Brightness Toggle & Utilities",
  description:
    "Explore high-performance Minecraft client mods and server plugins developed by RafayShhh. Download Shhh Brightness Toggle on CurseForge and Modrinth.",
  keywords: [
    "Minecraft mods",
    "Shhh Brightness Toggle",
    "Fabric brightness mod",
    "Minecraft fullbright toggle",
    "Minecraft QoL mods",
    "Curseforge rafayshhh",
    "Modrinth RafayShhh",
    "Minecraft 1.21 mods",
    "Minecraft 1.20 mods",
    "Paper Spigot plugins",
  ],
  alternates: {
    canonical: "/mods",
  },
  openGraph: {
    title: "Minecraft Mods & Plugins — RafayShhh",
    description:
      "Explore high-performance Minecraft client mods and server plugins developed by RafayShhh. Download Shhh Brightness Toggle on CurseForge and Modrinth.",
    url: "/mods",
  },
};

export default function ModsPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <JsonLd type="mods" />

      {/* Background glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Minecraft Modding & Server Plugins</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Lightweight, High-Impact Minecraft Modifications.
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed">
            Engineered for performance, zero HUD clutter, and seamless multiplayer compatibility. Discover released mods and upcoming utilities built for Fabric, Quilt, and server ecosystems.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-6 text-xs">
            <a
              href="https://www.curseforge.com/members/rafayshhh/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#15151e] hover:bg-red-600/20 text-zinc-200 hover:text-red-400 border border-[#232332] hover:border-red-500/40 transition-all flex items-center gap-1.5"
            >
              <span>CurseForge Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://modrinth.com/user/RafayShhh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#15151e] hover:bg-emerald-950/40 text-zinc-200 hover:text-emerald-400 border border-[#232332] hover:border-emerald-500/40 transition-all flex items-center gap-1.5"
            >
              <span>Modrinth Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={PERSONAL_INFO.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#5865F2]/15 text-[#9cb0ff] hover:bg-[#5865F2]/25 border border-[#5865F2]/30 transition-all flex items-center gap-1.5"
            >
              <span>Report Issues / Suggestions on Discord</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Client-side filterable mod list */}
        <ModsClientList mods={MINECRAFT_MODS} />
      </div>
    </div>
  );
}
