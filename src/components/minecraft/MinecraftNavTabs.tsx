"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Server, Palette, Layers } from "lucide-react";
import { MINECRAFT_MODS, MINECRAFT_PLUGINS, MINECRAFT_RESOURCE_PACKS } from "@/data/mods";

const MC_TABS = [
  { name: "Overview", href: "/minecraft", icon: Layers },
  {
    name: "Mods",
    href: "/minecraft/mods",
    icon: Gamepad2,
    badge: `${MINECRAFT_MODS.length}`,
  },
  {
    name: "Plugins",
    href: "/minecraft/plugins",
    icon: Server,
    badge: MINECRAFT_PLUGINS.length > 0 ? `${MINECRAFT_PLUGINS.length}` : "Roadmap",
  },
  {
    name: "Resource Packs",
    href: "/minecraft/resource-packs",
    icon: Palette,
    badge: MINECRAFT_RESOURCE_PACKS.length > 0 ? `${MINECRAFT_RESOURCE_PACKS.length}` : "Roadmap",
  },
];

export function MinecraftNavTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Minecraft categories"
      className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 dark:bg-[#07130a] border border-zinc-200 dark:border-emerald-500/25 w-fit font-sans text-xs"
    >
      {MC_TABS.map((tab) => {
        const isActive = pathname === tab.href || (tab.href === "/minecraft/mods" && pathname === "/mods");
        const Icon = tab.icon;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-3.5 py-2 rounded-xl transition-colors flex items-center gap-2 ${
              isActive
                ? "bg-emerald-700 text-white shadow-sm font-semibold"
                : "text-zinc-700 dark:text-emerald-200/80 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-emerald-950/60 font-medium"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{tab.name}</span>
            {tab.badge && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-zinc-200/80 dark:bg-emerald-950/80 text-zinc-700 dark:text-emerald-300"
                }`}
              >
                {tab.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
