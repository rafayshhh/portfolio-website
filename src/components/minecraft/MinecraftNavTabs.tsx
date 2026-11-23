"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Server, Palette, Layers } from "lucide-react";
import { sound } from "@/lib/sound";

const MC_TABS = [
  { name: "Overview", href: "/minecraft", icon: Layers },
  { name: "Mods", href: "/minecraft/mods", icon: Gamepad2, badge: "3 Released" },
  { name: "Plugins", href: "/minecraft/plugins", icon: Server, badge: "Coming Soon" },
  { name: "Resource Packs", href: "/minecraft/resource-packs", icon: Palette, badge: "Coming Soon" },
];

export function MinecraftNavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-emerald-950/20 dark:bg-[#07130a] border border-emerald-500/30 w-fit font-minecraft text-xs">
      {MC_TABS.map((tab) => {
        const isActive = pathname === tab.href || (tab.href === "/minecraft/mods" && pathname === "/mods");
        const Icon = tab.icon;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            onClick={() => sound.playClick()}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
              isActive
                ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] font-bold"
                : "text-zinc-600 dark:text-emerald-300/70 hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-emerald-500/10"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{tab.name}</span>
            {tab.badge && (
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                  isActive
                    ? "bg-emerald-950/80 text-emerald-200 border border-emerald-400/40"
                    : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                }`}
              >
                {tab.badge}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
