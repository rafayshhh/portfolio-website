export interface MinecraftMod {
  id: string;
  title: string;
  tagline: string;
  description: string;
  loaders: ("Fabric" | "Forge" | "NeoForge" | "Quilt" | "Paper/Spigot")[];
  minecraftVersions: string[];
  curseForgeUrl?: string;
  modrinthUrl?: string;
  githubUrl?: string;
  downloadCount: string;
  featured: boolean;
  type: "mod" | "plugin" | "utility";
  features: string[];
  bannerGradient: string;
  status: "Released" | "Beta" | "In Development";
}

export const MINECRAFT_MODS: MinecraftMod[] = [
  {
    id: "shhh-brightness-toggle",
    title: "Shhh Brightness Toggle",
    tagline: "Clean, instantaneous client-side brightness modifier without potion effects or swirl particles.",
    description: "A lightweight Fabric utility mod designed to give players effortless brightness control. Instead of relying on artificial Night Vision effects that clutter the screen with potion icons and particle swirl, Shhh Brightness Toggle hooks into lightmap rendering to provide crystal-clear visibility toggled with a single hotkey.",
    loaders: ["Fabric", "Quilt"],
    minecraftVersions: ["1.20.1", "1.20.4", "1.20.6", "1.21.x"],
    curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/shhh-brightness-toggle",
    modrinthUrl: "https://modrinth.com/mod/shhh-brightness-toggle",
    githubUrl: "https://github.com/RafayShhh",
    downloadCount: "10,000+",
    featured: true,
    type: "mod",
    features: [
      "Instant 1-key hotkey toggle for maximum visibility",
      "No Night Vision potion HUD clutter or annoying particles",
      "Seamless client-side lightmap gamma slider (10% to 100%)",
      "Zero server-side dependency — works anywhere in multiplayer",
      "Lightweight footprint with negligible memory impact",
    ],
    bannerGradient: "from-red-950/80 via-zinc-900 to-black",
    status: "Released",
  },
  {
    id: "shhh-qol-essentials",
    title: "Shhh QoL Suite",
    tagline: "High-performance suite of client-side quality-of-life tweaks for competitive & survival gameplay.",
    description: "A modern collection of minimalist quality-of-life adjustments focusing on low latency, HUD customization, cleaner inventory interactions, and streamlined chat shortcuts.",
    loaders: ["Fabric", "NeoForge"],
    minecraftVersions: ["1.20.x", "1.21.x"],
    curseForgeUrl: "https://www.curseforge.com/members/rafayshhh/projects",
    modrinthUrl: "https://modrinth.com/user/RafayShhh",
    githubUrl: "https://github.com/RafayShhh",
    downloadCount: "Featured",
    featured: true,
    type: "mod",
    features: [
      "Customizable crosshair and HUD element toggles",
      "Fast container inventory sorting and hotkey transfers",
      "Optimized rendering hooks with Iris and Sodium compatibility",
      "Minimalist in-game configuration menu",
    ],
    bannerGradient: "from-rose-950/70 via-zinc-900 to-black",
    status: "Beta",
  },
  {
    id: "shhh-core-spigot",
    title: "ShhhCore Spigot Plugin",
    tagline: "Ultra-lean server utility plugin for performance monitoring, anti-spam, and staff moderation.",
    description: "Built for Paper and Purpur server environments. Provides asynchronous command execution, staff activity audit logging, and lightweight permission management.",
    loaders: ["Paper/Spigot"],
    minecraftVersions: ["1.20 - 1.21.x"],
    githubUrl: "https://github.com/RafayShhh",
    downloadCount: "Community",
    featured: false,
    type: "plugin",
    features: [
      "Non-blocking asynchronous task execution",
      "Detailed TPS & tick-lag diagnostic monitor",
      "Configurable chat cooldowns and automated regex filters",
      "Zero-database setup using human-readable YAML configs",
    ],
    bannerGradient: "from-red-900/50 via-zinc-900 to-black",
    status: "In Development",
  },
];
