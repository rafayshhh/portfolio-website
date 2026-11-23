export interface MinecraftCreation {
  id: string;
  title: string;
  tagline: string;
  description: string;
  loaders?: ("Fabric" | "Forge" | "NeoForge" | "Quilt" | "Paper/Spigot")[];
  minecraftVersions?: string[];
  curseForgeUrl?: string;
  modrinthUrl?: string;
  githubUrl?: string;
  downloadCount?: string;
  featured?: boolean;
  type: "mod" | "plugin" | "resource-pack";
  features: string[];
  status: "Released" | "Beta" | "In Development" | "Coming Soon";
}

// Legacy alias for compatibility with existing components
export type MinecraftMod = MinecraftCreation;

export const MINECRAFT_MODS: MinecraftCreation[] = [
  {
    id: "shhh-brightness-toggle",
    title: "Shhh Brightness Toggle",
    tagline: "Instant client-side brightness modifier without potion effects or particle swirls.",
    description: "Effortless brightness control that hooks cleanly into lightmap rendering. No night vision potion effects, zero HUD icons, and zero server-side requirements.",
    loaders: ["Fabric", "Quilt"],
    minecraftVersions: ["1.20.1", "1.20.4", "1.20.6", "1.21.x"],
    curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/shhh-brightness-toggle",
    modrinthUrl: "https://modrinth.com/mod/shhh-brightness-toggle",
    githubUrl: "https://github.com/RafayShhh",
    downloadCount: "10,000+",
    featured: true,
    type: "mod",
    features: [
      "1-key instant hotkey toggle for full cavern visibility",
      "No Night Vision potion HUD clutter or particle swirls",
      "Smooth client-side lightmap gamma override",
      "Zero server dependency — fully client-side and multiplayer-safe",
    ],
    status: "Released",
  },
  {
    id: "shhh-builder",
    title: "Shhh Builder",
    tagline: "Lightweight client-side structure builder and block placement assistant.",
    description: "Designed for builders who value precision without bloated keybinds. Offers clean outline guides, symmetrical block placement helpers, and fast block-palette cycles with zero lag.",
    loaders: ["Fabric", "Quilt"],
    minecraftVersions: ["1.20.x", "1.21.x"],
    githubUrl: "https://github.com/RafayShhh",
    curseForgeUrl: "https://www.curseforge.com/members/rafayshhh/projects",
    modrinthUrl: "https://modrinth.com/user/RafayShhh",
    downloadCount: "Featured",
    featured: true,
    type: "mod",
    features: [
      "Lightweight holographic placement guides",
      "Fast block palette cycling and symmetrical placement",
      "Zero server-side intervention or anti-cheat triggers",
      "Minimalist in-game HUD indicators",
    ],
    status: "Released",
  },
  {
    id: "shhh-printer",
    title: "Shhh Printer",
    tagline: "Zero-FPS-drop schematic printer utility for survival and creative builds.",
    description: "Automate meticulous block placements from client-side schematics with pure bytecode efficiency. Engineered to prevent chunk stalling and maintain steady 60+ FPS.",
    loaders: ["Fabric", "Quilt"],
    minecraftVersions: ["1.20.x", "1.21.x"],
    githubUrl: "https://github.com/RafayShhh",
    curseForgeUrl: "https://www.curseforge.com/members/rafayshhh/projects",
    modrinthUrl: "https://modrinth.com/user/RafayShhh",
    downloadCount: "Featured",
    featured: true,
    type: "mod",
    features: [
      "Smooth schematic layer-by-layer printing",
      "Packet rate limiting to prevent multiplayer kicks",
      "Sodium and Iris render pipeline compatibility",
      "Negligible memory consumption",
    ],
    status: "Released",
  },
];

export const MINECRAFT_PLUGINS: MinecraftCreation[] = [
  {
    id: "shhh-core-spigot",
    title: "ShhhCore Spigot / Paper Plugin",
    tagline: "Ultra-lean server performance monitor, anti-spam, and async staff moderation.",
    description: "Engineered for high-traffic Paper and Purpur server networks. Provides asynchronous command execution, TPS monitoring, and clean YAML configuration.",
    loaders: ["Paper/Spigot"],
    minecraftVersions: ["1.20.x - 1.21.x"],
    githubUrl: "https://github.com/RafayShhh",
    type: "plugin",
    features: [
      "Non-blocking asynchronous task execution",
      "Detailed TPS & tick-lag diagnostic monitor",
      "Configurable chat cooldowns & automated regex filters",
      "Zero-database setup using human-readable YAML configs",
    ],
    status: "Coming Soon",
  },
  {
    id: "shhh-network-bridge",
    title: "Shhh Network Bridge",
    tagline: "BungeeCord and Velocity lightweight proxy sync utility.",
    description: "Lightweight cross-server messaging and player count synchronizer built for multi-instance server clusters.",
    loaders: ["Paper/Spigot"],
    minecraftVersions: ["1.20.x - 1.21.x"],
    githubUrl: "https://github.com/RafayShhh",
    type: "plugin",
    features: [
      "Ultra-low latency packet sync",
      "Cross-server announcement broadcasting",
      "Staff chat network tunneling",
    ],
    status: "Coming Soon",
  },
];

export const MINECRAFT_RESOURCE_PACKS: MinecraftCreation[] = [
  {
    id: "shhh-minimal-hud",
    title: "Shhh Minimal HUD & Crosshairs",
    tagline: "Clean, distraction-free GUI overhaul with low-fire and transparent panels.",
    description: "A refined vanilla aesthetic focused on competitive visibility. Transparent container backgrounds, low fire, reduced shield obstruction, and razor-sharp crosshairs.",
    minecraftVersions: ["1.20 - 1.21.x"],
    type: "resource-pack",
    features: [
      "Low-profile fire overlay for crystal-clear PvP vision",
      "Transparent inventory and chest interface",
      "Ultra-clean pixel crosshairs with dynamic hit markers",
      "Lightweight vanilla resolution (16x16) for maximum FPS",
    ],
    status: "Coming Soon",
  },
  {
    id: "shhh-clear-dark-gui",
    title: "Shhh Dark Mode UI Texture Pack",
    tagline: "Sleek obsidian-dark theme for all Minecraft menus and container screens.",
    description: "Replaces blinding default gray menus with a deep obsidian noir and ruby accent theme matching the RafayShhh aesthetic.",
    minecraftVersions: ["1.20 - 1.21.x"],
    type: "resource-pack",
    features: [
      "Deep dark container palettes that prevent eye strain",
      "Crisp pixel iconography for tooltips and recipe books",
      "OptiFine and Fabric GUI compatible",
    ],
    status: "Coming Soon",
  },
];
