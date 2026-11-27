import {
  GalleryImage,
  SpecificationItem,
  DocumentationSection,
  ControlBinding,
  CommandEntry,
  DependencyLink,
  ItemSeo,
} from "./types";

export interface MinecraftCreation {
  id: string;
  /** Official repository/slug name on GitHub when different from URL route id */
  repoSlug?: string;
  title: string;
  tagline: string;
  description: string;
  loaders?: ("Fabric" | "Forge" | "NeoForge" | "Quilt" | "Paper/Spigot")[];
  minecraftVersions?: string[];
  curseForgeUrl?: string;
  modrinthUrl?: string;
  githubUrl?: string;
  releaseUrl?: string;
  downloadCount?: string;
  featured?: boolean;
  type: "mod" | "plugin" | "resource-pack";
  icon?: string;
  features: string[];
  status: "Released" | "Beta" | "In Development" | "Coming Soon";
  gallery: GalleryImage[];
  specifications: SpecificationItem[];
  controls?: ControlBinding[];
  commands?: CommandEntry[];
  dependencies?: DependencyLink[];
  documentation: DocumentationSection[];
  seo: ItemSeo;
}

export type MinecraftMod = MinecraftCreation;

export const MINECRAFT_MODS: MinecraftCreation[] = [
  {
    id: "shhh-brightness-toggle",
    repoSlug: "shhh-brightness-toggle",
    title: "Shhh Brightness Toggle",
    tagline: "Client-side fullbright and 10%–100% brightness controller without Night Vision particles or HUD clutter.",
    description:
      "Lightweight client-side brightness mod spanning Minecraft 1.8.9 through 26.3 across Fabric and Forge. Press [B] for instant cavern clarity or step brightness between 10% and 100% cleanly via Mixin/memory gamma overrides without fake Night Vision potion swirls or options.txt tampering.",
    loaders: ["Fabric", "Forge"],
    minecraftVersions: ["1.8.9", "1.12.2", "1.16.5", "1.18.2–1.20.4", "1.21–1.21.1", "26.1–26.3"],
    curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/shhh-brightness-toggle",
    githubUrl: "https://github.com/rafayshhh/shhh-brightness-toggle",
    releaseUrl: "https://github.com/rafayshhh/shhh-brightness-toggle/releases",
    downloadCount: "10,000+",
    featured: true,
    type: "mod",
    icon: "/images/minecraft/mods/shhh-brightness-toggle/icon.png",
    features: [
      "1-key instant fullbright toggle ([B]) for caves, ravines, and underwater exploration",
      "10%–100% granular brightness stepping via hotkeys or Mod Menu / /shhh settings GUI",
      "Zero Night Vision potion particles, zero screen flashing, and zero HUD status icon clutter",
      "Color-coded actionbar feedback (crimson low, amber mid, emerald 100% — toggleable)",
      "Zero options.txt tampering — automatically restores vanilla gamma on exit or disconnect",
      "Multi-era port coverage from legacy 1.8.9 / 1.12.2 Forge through modern 26.3 Fabric",
    ],
    status: "Released",
    gallery: [
      {
        src: "/images/minecraft/mods/shhh-brightness-toggle/1.jpg",
        alt: "Side-by-side mineshaft comparison without mod vs with Shhh Brightness enabled",
        caption: "Side-by-side comparison in a deep mineshaft: vanilla cave darkness vs Shhh Brightness 100%.",
        isPrimary: true,
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-brightness-toggle/3.jpg",
        alt: "Shhh Brightness Configuration screen accessible via Mod Menu and /shhh",
        caption: "In-game configuration menu with Fullbright toggle, 10%–100% level slider, and Colored Messages switch.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-brightness-toggle/2.jpg",
        alt: "Customizable Keybinds inside Minecraft Controls menu for Shhh Brightness Toggle",
        caption: "Dedicated Controls section to customize Toggle, Increase, and Decrease brightness hotkeys.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-brightness-toggle/demo-bright.png",
        alt: "In-game mineshaft screenshot with Shhh Brightness set to ON 100%",
        caption: "Live 26.3 Fabric capture inside an abandoned mineshaft with Brightness: ON (100%).",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-brightness-toggle/demo-dark.png",
        alt: "In-game mineshaft screenshot with Shhh Brightness turned OFF",
        caption: "Baseline capture at identical coordinates with Brightness: OFF.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-brightness-toggle/icon.png",
        alt: "Shhh Brightness Toggle Official Mod Icon",
        caption: "Official split cave brightness emblem.",
        aspect: "square",
      },
    ],
    specifications: [
      { label: "Mod Loaders", value: "Fabric Loader & Minecraft Forge" },
      { label: "Supported Versions", value: "1.8.9, 1.12.2, 1.16.5, 1.18.2–1.21.1, 26.1–26.3" },
      { label: "Java Compatibility", value: "Java 8 (Legacy), Java 17 (1.18–1.20), Java 21 (1.21), Java 25 (26.x)" },
      { label: "Environment", value: "100% Client-Side Only (Server Unsupported / Optional)" },
      { label: "Config Persistence", value: ".minecraft/config/shhh-brightness-toggle.json" },
      { label: "Render Compatibility", value: "Sodium, Iris Shaders & OptiFine 1.8.9 Compatible" },
    ],
    controls: [
      { action: "Toggle Brightness", key: "B", category: "Shhh Brightness Toggle", description: "Turns fullbright visibility ON or OFF immediately" },
      { action: "Increase Brightness", key: "Up Arrow", category: "Shhh Brightness Toggle", description: "Steps brightness up by 10% (up to 100%)" },
      { action: "Decrease Brightness", key: "Down Arrow", category: "Shhh Brightness Toggle", description: "Steps brightness down by 10% (down to 10%)" },
    ],
    commands: [
      { command: "/shhh", description: "Opens the in-game Shhh Brightness Configuration GUI screen" },
      { command: "/shhh toggle", description: "Toggles fullbright state directly from chat" },
    ],
    dependencies: [
      { name: "Fabric API", href: "https://modrinth.com/mod/fabric-api", required: true, notes: "Required on Fabric versions (1.16.5 through 26.3); 1.8.9 & 1.12.2 Forge builds run standalone" },
      { name: "Mod Menu", href: "https://modrinth.com/mod/modmenu", required: false, notes: "Optional on Fabric for GUI button access; /shhh always works without Mod Menu" },
    ],
    documentation: [
      {
        title: "Lightmap Pipeline & Zero Potion Clutter",
        slug: "lightmap-architecture",
        content: `Traditional fullbright mods rely on applying a client-side Night Vision potion effect or mutating your persistent \`options.txt\` gamma value. Fake potion effects fill the screen with swirling particles, flash ominously before expiring, and clutter the active status bar.

Shhh Brightness Toggle injects cleanly into the game's lightmap extraction cycle instead:
- **Zero Fake Potion Effects**: Keeps the HUD clean with zero particle trails or status icons.
- **Zero \`options.txt\` Tampering**: Operates purely in memory so your vanilla brightness slider automatically restores whenever you disable the mod, leave a world, disconnect from a server, or exit Minecraft.
- **Sodium & Iris Friendly**: Hooks at the tail of \`LightmapRenderStateExtractor\` rather than replacing the renderer wholesale.`,
        codeLanguage: "java",
        codeSnippet: `@Mixin(LightmapRenderStateExtractor.class)
public class LightmapExtractorMixin {
    @Inject(method = "extract", at = @At("RETURN"))
    private void shhh$applyCustomBrightness(CallbackInfo ci) {
        if (BrightnessConfig.isEnabled()) {
            // Applies configurable 10%-100% lightmap boost in memory
            BrightnessController.applyLightmapBoost();
        }
    }
}`,
      },
      {
        title: "Multi-Era Branch Architecture (1.8.9 to 26.3)",
        slug: "version-matrix",
        content: `Maintaining clean parity across over a decade of Minecraft engine changes requires dedicated per-era subprojects:
- **Legacy Forge (1.8.9 & 1.12.2, Java 8)**: Pure in-memory gamma scaling with zero Forge dependencies and OptiFine compatibility.
- **Classic & Modern Fabric (1.16.5 through 1.21.1, Java 8–21)**: Standalone versioned branches plus a 1.20.1 Forge port.
- **Latest Engine (26.1.1 – 26.3, Java 25)**: Native 26.3 lightmap state integration, Mod Menu configuration screen, and \`/shhh\` client commands.`,
      },
    ],
    seo: {
      metaTitle: "Shhh Brightness Toggle — Fullbright Mod for Fabric & Forge (1.8.9–26.3)",
      metaDescription: "Download Shhh Brightness Toggle: Client-side fullbright mod with 10%–100% stepping, Mod Menu GUI, and zero Night Vision particles across Minecraft 1.8.9–26.3.",
      keywords: ["Minecraft fullbright mod", "Shhh Brightness Toggle", "Fabric fullbright 26.3", "Forge 1.8.9 fullbright", "Minecraft brightness slider mod"],
    },
  },
  {
    id: "shhh-builder",
    repoSlug: "shhh-builder",
    title: "Shhh Builder",
    tagline: "Zero-mixin holographic schematic viewer, materials checklist, and building assistant for Fabric 26.3.",
    description:
      "Beginner-friendly schematic viewer and construction assistant engineered with zero mixins and zero custom server packets. Load .litematic and .schem files, inspect translucent 3D holographic ghost blocks with 6-neighbor face culling, track live inventory & shulker materials, slice layers, and rotate/nudge placements in-world.",
    loaders: ["Fabric"],
    minecraftVersions: ["26.3"],
    githubUrl: "https://github.com/rafayshhh/shhh-builder",
    releaseUrl: "https://github.com/rafayshhh/shhh-builder/releases",
    downloadCount: "v1.0.0 Released",
    featured: true,
    type: "mod",
    icon: "/images/minecraft/mods/shhh-builder/icon.png",
    features: [
      "Translucent textured 3D ghost block holograms (.litematic & .schem) with 6-neighbor face culling",
      "Main Schematic Browser ([V]) featuring instant search filtering & format badges",
      "Interactive Materials Checklist ([K]) with live inventory scanning, Shulker Box counting & auto-deductions",
      "Layer Slicing ([M], [, ]) supporting All Layers, Single Layer, and Up To height progression",
      "Ghost Pick-Block: middle-click any unplaced hologram block to equip it from hotbar/inventory",
      "Zero Mixins & 100% Fair-Play Compliant — pure client render events compatible with Sodium & Iris",
    ],
    status: "Released",
    gallery: [
      {
        src: "/images/minecraft/mods/shhh-builder/banner.jpg",
        alt: "Shhh Builder Official Showcase Banner featuring glowing sample house schematic",
        caption: "Official Shhh Builder showcase banner highlighting the holographic sample house preview.",
        isPrimary: true,
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-builder/3.jpg",
        alt: "In-world translucent 3D ghost blocks enclosed inside glowing cyan bounding box",
        caption: "In-World Hologram Previews: Translucent textured blocks with automatic internal face culling.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-builder/1.jpg",
        alt: "Shhh Builder split-pane schematic picker interface with search and Litematic/Schem badges",
        caption: "Main Schematic Browser ([V]): Filter builds, inspect dimensions, and place schematics in one click.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-builder/2.jpg",
        alt: "Interactive Materials Checklist tracking Oak Planks, Oak Stairs, Cobblestone and progress bar",
        caption: "Interactive Materials Checklist ([K]): Real-time inventory & shulker tracking with dynamic deductions.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-builder/4.jpg",
        alt: "Three-tab Shhh Builder Configuration screens: Schematic Preview, Performance Presets, and HUD Settings",
        caption: "Grouped Configuration Menu: Preview opacity, Low/Balanced/High presets, and HUD customization.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-builder/5.jpg",
        alt: "Shhh Builder KeyBinds screen under Minecraft Options -> Controls",
        caption: "Customizable Keybindings for rotating, mirroring, nudging, and layer slicing.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-builder/6.jpg",
        alt: "In-game chat output showing full /shhhbuilder client commands",
        caption: "Client Command Suite (/shhhbuilder): Complete world-placement control directly from chat.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-builder/icon.png",
        alt: "Shhh Builder Official Mod Icon",
        caption: "Official cyan wireframe hologram house icon.",
        aspect: "square",
      },
    ],
    specifications: [
      { label: "Mod Loader", value: "Fabric Loader 0.20.1+ (Minecraft 26.3)" },
      { label: "Supported Formats", value: "Litematica (.litematic) & Sponge Schematic (.schem)" },
      { label: "Architecture", value: "Zero Mixins / Pure Fabric Client Events" },
      { label: "Performance Engine", value: "6-Neighbor Internal Face Culling + Distance LOD" },
      { label: "Server Compliance", value: "100% Client-Side Safe (No printer / no custom packets)" },
      { label: "Built-In Onboarding", value: "Auto-deployed sample house + 7-step /shhhbuilder tutorial" },
    ],
    controls: [
      { action: "Open Main Screen", key: "V", category: "Shhh Builder", description: "Browse .litematic/.schem files, search, and place builds" },
      { action: "Materials Checklist", key: "K", category: "Shhh Builder", description: "Open interactive materials manager & inventory scanner" },
      { action: "Toggle Material HUD", key: "H", category: "Shhh Builder", description: "Show or hide compact on-screen materials HUD" },
      { action: "Toggle Bounding Box", key: "B", category: "Shhh Builder", description: "Show or hide cyan 3D placement bounds" },
      { action: "Toggle Ghost Blocks", key: "G", category: "Shhh Builder", description: "Toggle hologram preview visibility" },
      { action: "Rotate 90° / Flip", key: "R / Z", category: "Shhh Builder", description: "Rotate placement clockwise or mirror horizontally" },
      { action: "Cycle Layer Mode / Slice", key: "M / [ / ] / \\", category: "Shhh Builder", description: "Switch All/Single/Up-To layers and step height slices" },
      { action: "Nudge Position", key: "Arrows / PgUp / PgDn", category: "Shhh Builder", description: "Shift placement N/S/E/W or Up/Down by 1 block" },
    ],
    commands: [
      { command: "/shhhbuilder tutorial", description: "Launch interactive 7-step visual onboarding guide" },
      { command: "/shhhbuilder materials", description: "Open live Materials Checklist screen" },
      { command: "/shhhbuilder select <file>", description: "Select a schematic from .minecraft/schematics/ via tab-complete" },
      { command: "/shhhbuilder place [x y z]", description: "Place active schematic at feet or explicit coordinates" },
      { command: "/shhhbuilder move <dx dy dz>", description: "Shift active placement by relative offsets" },
      { command: "/shhhbuilder layer <all|number>", description: "Switch between full build or isolated horizontal slice" },
    ],
    dependencies: [
      { name: "Fabric API (26.3)", href: "https://modrinth.com/mod/fabric-api", required: true, notes: "Required Fabric runtime & client event hooks" },
      { name: "Mod Menu", href: "https://modrinth.com/mod/modmenu", required: false, notes: "Optional settings integration in the mod list" },
    ],
    documentation: [
      {
        title: "Hologram Rendering & 6-Neighbor Face Culling",
        slug: "hologram-engine",
        content: `Massive schematics often drop framerates when mods naively draw all 6 quad faces of millions of internal buried blocks. Shhh Builder pre-computes internal neighbor occlusion:
- **6-Neighbor Face Culling**: Any solid block face completely surrounded by neighboring solid blocks is culled from vertex generation, preserving smooth FPS on huge builds.
- **Zero-Mixin Architecture**: Built solely on standard Fabric client rendering events with zero bytecode Mixin hooks, ensuring effortless coexistence with **Sodium**, **Iris Shaders**, and **Lithium**.
- **Fail-Safe Wireframe Circuit Breaker**: Automatically falls back to crisp vector outlines if an exotic shader pack conflicts with translucent ghost textures.`,
      },
      {
        title: "Smart Materials Checklist & Shulker Inventory Scanner",
        slug: "materials-checklist",
        content: `Press **[K]** at any time to audit exact material requirements before harvesting resources:
- **Live Inventory & Shulker Math**: Counts items directly across your main inventory and inside Shulker Boxes, breaking totals down into individual blocks, full stacks, and full Shulker boxes.
- **Automatic World Deductions**: As you place correct blocks matching the ghost schematic, missing material counts update dynamically.
- **One-Click Clipboard Export**: Copy formatted resource checklists cleanly to share with build teammates.`,
      },
    ],
    seo: {
      metaTitle: "Shhh Builder — Fabric Schematic Viewer & Hologram Mod (MC 26.3)",
      metaDescription: "Download Shhh Builder for Minecraft 26.3 Fabric: Zero-mixin .litematic and .schem holographic viewer, live materials checklist, shulker counter, and layer slicer.",
      keywords: ["Minecraft schematic viewer", "Shhh Builder", "Litematica alternative Fabric 26.3", "zero mixin schematic mod", "Minecraft hologram builder"],
    },
  },
  {
    id: "shhh-printer",
    repoSlug: "shhh-printer",
    title: "Shhh Printer",
    tagline: "Point & Place crosshair-targeted automated schematic placement companion for Shhh Builder.",
    description:
      "Companion Fabric 26.3 mod for Shhh Builder featuring intuitive Point & Place crosshair aiming: automated block placement occurs strictly where you look, pausing the instant you look away. Includes Survival (10 blk/s), Public Server (5 blk/s), and Creative presets, smart inventory swapping, directional orientation, and collision guards.",
    loaders: ["Fabric"],
    minecraftVersions: ["26.3"],
    githubUrl: "https://github.com/rafayshhh/shhh-printer",
    releaseUrl: "https://github.com/rafayshhh/shhh-printer/releases",
    downloadCount: "v1.0.0 Released",
    featured: true,
    type: "mod",
    icon: "/images/minecraft/mods/shhh-printer/icon.png",
    features: [
      "Point & Place Crosshair Targeting (default): places only the ghost block you aim at — zero blatant 360° aura",
      "3 Built-In Speed & Safety Presets: Survival (~10 blk/s), Public Server (~5 blk/s safe cadence), and Creative (3 blk/tick + Air Place)",
      "Auto-Hotbar Switching & Inventory Swapping with proper server carry synchronization",
      "Directional Block Orientation: computes hit vectors & pitch for stairs, slabs, logs, and directional blocks",
      "Player Collision & State Safety: blocks inside player bounds are rejected; pauses when mining, sleeping, dead, or in spectator",
      "3-Column Graphical Configuration Screen ([O]) & Multi-Corner Status HUD",
    ],
    status: "Released",
    gallery: [
      {
        src: "/images/minecraft/mods/shhh-printer/banner.jpg",
        alt: "Shhh Printer official showcase banner depicting glowing cyan 3D voxel schematic printer",
        caption: "Shhh Printer Official Banner — Schematic input to physical structure companion pipeline.",
        isPrimary: true,
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-printer/showcase-config.jpg",
        alt: "Shhh Printer 3-column graphical settings screen showing Behavior & Targets, Speed & Orientation, and HUD controls",
        caption: "3-Column In-Game Settings ([O]): Behavior & Targets, Speed Presets, and Multi-Corner HUD.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-printer/icon.png",
        alt: "Shhh Printer isometric glowing 3D printer logo icon",
        caption: "Official isometric hologram printer emblem.",
        aspect: "square",
      },
    ],
    specifications: [
      { label: "Mod Loader", value: "Fabric Loader 0.20.1+ (Minecraft 26.3)" },
      { label: "Required Companion", value: "Shhh Builder (>= 1.0.0) & Fabric API" },
      { label: "Default Targeting", value: "Point & Place Crosshair Ray (Optional Area 360 Mode)" },
      { label: "Built-In Presets", value: "Survival (10 blk/s), Public (5 blk/s), Creative (Fast)" },
      { label: "Smart Placement", value: "Auto-Orient Slabs/Stairs/Logs + Auto-Hotbar & Inv Swap" },
      { label: "Safety Guards", value: "Bounding-Box Collision Guard + Adjacent Support Verification" },
    ],
    controls: [
      { action: "Toggle Auto-Printer", key: "P", category: "Shhh Printer", description: "Activates or pauses automated block placement" },
      { action: "Open Configuration", key: "O", category: "Shhh Printer", description: "Opens the 3-column Shhh Printer Configuration menu" },
    ],
    commands: [
      { command: "/shhhprinter toggle | on | off", description: "Toggle or explicitly control printer activation state" },
      { command: "/shhhprinter target <crosshair|all>", description: "Switch between Point & Place crosshair aim vs 360° Area mode" },
      { command: "/shhhprinter preset <survival|public|creative>", description: "Apply pre-tuned speed, air-place, and inventory safety profile" },
      { command: "/shhhprinter speed <1-5> / delay <0-10>", description: "Fine-tune blocks placed per tick and tick intervals" },
      { command: "/shhhprinter config | stats", description: "Open settings GUI or inspect live placed block counters" },
    ],
    dependencies: [
      { name: "Shhh Builder (>= 1.0.0)", href: "/minecraft/mods/shhh-builder", required: true, notes: "Provides schematic parsing, hologram ghost blocks, and placement origins" },
      { name: "Fabric API (26.3)", href: "https://modrinth.com/mod/fabric-api", required: true, notes: "Required Fabric Loader runtime & client tick events" },
    ],
    documentation: [
      {
        title: "Point & Place Crosshair Targeting vs Blatant Aura",
        slug: "point-and-place",
        content: `Conventional schematic printers spray blocks in a 360-degree aura behind walls and out of line-of-sight — triggering anti-cheat flags and ruining the tactile satisfaction of building.

Shhh Printer defaults to **Point & Place Targeting**:
- **Crosshair Driven**: Evaluates the exact ghost block your crosshair aims at within valid reach. Look along your blueprint and blocks snap cleanly into place; look away and placement halts instantly.
- **Fair-Play Adjacency**: Air placement is disabled by default so every block requires a physical adjacent supporting face matching vanilla placement rules.`,
      },
      {
        title: "Operational Presets & Smart Inventory Handling",
        slug: "presets-inventory",
        content: `### Pre-Tuned Profiles
1. **Survival (Default)**: 1 block/tick with a 2-tick delay (~10 blk/s), adjacent support enforced, hotbar auto-switching enabled.
2. **Public Server (Safe)**: 1 block/tick with a 4-tick delay (~5 blk/s), inventory swaps disabled to prevent rapid packet bursts on strict SMPs.
3. **Creative (Fast)**: 3 blocks/tick, zero delay, mid-air placement unlocked for large structural testing.

Combined with **Directional Orientation** for stairs, slabs, and logs plus **Collision Protection**, placements match schematic state cleanly without suffocating the player.`,
      },
    ],
    seo: {
      metaTitle: "Shhh Printer — Crosshair Schematic Printer for Shhh Builder (MC 26.3)",
      metaDescription: "Download Shhh Printer for Fabric 26.3: Fair-play Point & Place schematic printer companion for Shhh Builder with Survival/Public/Creative presets and smart hotbar sync.",
      keywords: ["Shhh Printer", "Minecraft Fabric schematic printer", "Point and Place printer mod", "Shhh Builder companion", "safe schematic printer"],
    },
  },
  {
    id: "shhh-player-health-indicators",
    repoSlug: "customizable-player-health-indicator",
    title: "Shhh Player Health Indicators",
    tagline: "Client-side overhead player health & Lifesteal SMP tracker with 9x9 pixel-art hearts and 5 presets.",
    description:
      "Published on GitHub as Customizable Player Health Indicator for Minecraft 26.3 Fabric (Java 25). Renders authentic 9x9 vanilla pixel-art hearts, Golden Apple & Enchanted GApple absorption shields, stacked 10-heart multi-rows, adaptive max-health Lifesteal SMP tracking, 5 visual presets, and full /cphi client commands.",
    loaders: ["Fabric"],
    minecraftVersions: ["26.3"],
    githubUrl: "https://github.com/rafayshhh/customizable-player-health-indicator",
    releaseUrl: "https://github.com/rafayshhh/customizable-player-health-indicator/releases",
    downloadCount: "v1.0.0 Released",
    featured: true,
    type: "mod",
    icon: "/images/minecraft/mods/shhh-player-health-indicators/icon.png",
    features: [
      "Authentic 9x9 vanilla HUD pixel-art heart sprites integrated into Minecraft's font pipeline",
      "Stacked Multi-Row Hearts (10 per row) with left-aligned partial absorption rows overhead",
      "Full Lifesteal SMP support: unclamped high-HP pools (40–120+ HP), adaptive memory cache & scoreboard fallback",
      "Golden Apple (+4.0 HP / 2 golden hearts) & Enchanted GApple (+16.0 HP / 8 golden hearts) tracking",
      "5 Visual Presets: Classic Hearts, Compact, Health Bar, Minimal Numeric & Lifesteal dual display",
      "2-Column Responsive Settings Screen ([0]), Quick Toggle ([F12]) & full /cphi command suite",
    ],
    status: "Released",
    gallery: [
      {
        src: "/images/minecraft/mods/shhh-player-health-indicators/showcase-presets.jpg",
        alt: "Side-by-side preview of all 5 presets: Classic Hearts, Compact, Health Bar, Minimal Numeric, and Lifesteal",
        caption: "All 5 Built-In Presets: Classic Hearts, Compact, Health Bar, Minimal Numeric, and Lifesteal.",
        isPrimary: true,
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-player-health-indicators/lifesteal-smp-support.jpg",
        alt: "Split showcase demonstrating 60/60 Hearts and 120/120 HP stacked overhead for Lifesteal SMP players",
        caption: "Lifesteal SMP Support: Unclamped high-HP pools (120+ HP) and stacked 10-heart rows.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-player-health-indicators/settings-menu.jpg",
        alt: "2-column Customizable Player Health Indicator Settings Menu inside Minecraft",
        caption: "Balanced 2-Column Settings Screen ([0]): Presets, Positioning, Textures, Distance & Server Fallback.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-player-health-indicators/keybindings-controls.jpg",
        alt: "Minecraft Controls screen highlighting Toggle Health Indicators [F12] and Open Settings Screen [0]",
        caption: "Controls & Keybindings: Instant [F12] toggle and [0] settings menu with built-in typing guards.",
        aspect: "video",
      },
      {
        src: "/images/minecraft/mods/shhh-player-health-indicators/icon.png",
        alt: "Customizable Player Health Indicator Pixel Heart Emblem",
        caption: "Official pixel heart and golden absorption plus icon.",
        aspect: "square",
      },
    ],
    specifications: [
      { label: "GitHub Repository", value: "customizable-player-health-indicator" },
      { label: "Mod Loader & Runtime", value: "Fabric Loader 0.18.4+ • Minecraft 26.3 • Java 25" },
      { label: "Visual Presets", value: "Classic Hearts, Compact, Health Bar, Minimal Numeric, Lifesteal" },
      { label: "Heart Texture Styles", value: "Vanilla (Textured 9x9), Hardcore (Textured), Unicode" },
      { label: "SMP & Server Support", value: "Lifesteal Unclamped HP + Throttled Scoreboard Fallback" },
      { label: "Config File", value: ".minecraft/config/customizable-player-health-indicator.json" },
    ],
    controls: [
      { action: "Toggle Health Indicators", key: "F12", category: "Player Health Indicators", description: "Instantly switches player health overlays ON or OFF" },
      { action: "Open Settings Screen", key: "0", category: "Player Health Indicators", description: "Opens responsive 2-column config GUI (guarded during typing)" },
    ],
    commands: [
      { command: "/cphi | /cphi config", description: "Open Settings screen (aliases: /healthindicators, /phi, /customhealth)" },
      { command: "/cphi preset <hearts|compact|bar|numeric|lifesteal>", description: "Switch overhead visual preset live without pausing" },
      { command: "/cphi texture <vanilla|hardcore|unicode>", description: "Cycle between pixel-art textures and Unicode glyphs" },
      { command: "/cphi position <above|below>", description: "Place health overlay above or below player nametag" },
      { command: "/cphi distance <8-64> | maxrows <1-5>", description: "Tune render range and max stacked heart rows" },
      { command: "/cphi absorption | sneaking | scoreboard [on|off]", description: "Configure golden hearts, stealth sneak hiding & SMP scoreboards" },
    ],
    dependencies: [
      { name: "Fabric API (26.3)", href: "https://modrinth.com/mod/fabric-api", required: true, notes: "Required Fabric runtime on Minecraft 26.3" },
      { name: "Mod Menu", href: "https://modrinth.com/mod/modmenu", required: false, notes: "Optional integration; accessible anytime via [0] or /cphi" },
      { name: "Customizable Mobs Health Indicator", href: "/minecraft/mods/shhh-mob-health-indicators", required: false, notes: "Designed for 100% conflict-free side-by-side coexistence" },
    ],
    documentation: [
      {
        title: "Stacked Multi-Row Hearts & Lifesteal SMP Engine",
        slug: "lifesteal-engine",
        content: `Standard client indicator mods clamp player health to 20 HP or break on competitive Lifesteal SMPs where servers keep player health synced via tab-list objectives or custom max-health attributes.

Customizable Player Health Indicator handles high-capacity combat accurately:
- **Unclamped Max Health**: Supports 40, 60, 100, and 120+ HP pools with an adaptive memory cache so damaged opponents retain their true percentage scale instead of shrinking \`24/40\` into \`24/24\`.
- **Aligned 10-Heart Multi-Rows**: Dynamically wraps full red/golden absorption rows into clean left-aligned 10-heart columns directly overhead.`,
      },
      {
        title: "Stealth Protection, Absorption & Positioning",
        slug: "stealth-and-textures",
        content: `Built specifically for competitive PvP and survival multiplayer:
- **Golden Apple & Enchanted GApple Absorption**: Reads \`LivingEntity.getAbsorptionAmount()\` directly to show +4.0 HP (2 golden hearts) or +16.0 HP (8 golden hearts).
- **Stealth Friendly**: Automatically hides overhead indicators when opponents are sneaking so crouch-ambushes remain intact.
- **Shader Native Sprite Sheet**: 9x9 bitmap heart fonts participate cleanly in Minecraft's billboard nametag pass with Sodium & Iris support.`,
      },
    ],
    seo: {
      metaTitle: "Shhh Player Health Indicators (Customizable Player Health) — Fabric 26.3",
      metaDescription: "Download Customizable Player Health Indicator (Shhh Player Health Indicators) for Fabric 26.3: 9x9 pixel hearts, Lifesteal SMP support, Golden Apple absorption & 5 presets.",
      keywords: ["Customizable Player Health Indicator", "Shhh Player Health Indicators", "Lifesteal SMP health mod", "Fabric 26.3 player hearts", "Minecraft PvP health indicator"],
    },
  },
  {
    id: "shhh-mob-health-indicators",
    repoSlug: "customizable-mobs-health-indicator",
    title: "Shhh Mob Health Indicators",
    tagline: "Mob-exclusive overhead health tracker with authentic 9x9 pixel hearts, RPG tiered bosses & filters.",
    description:
      "Published on GitHub as Customizable Mobs Health Indicator for Minecraft 26.3 Fabric (Java 25). Tracks monsters, passive animals, and bosses cleanly with 9x9 vanilla heart sprites, RPG tiered hearts (x5 Red/Gold/Lime/Cyan/Magenta) for Iron Golems/Withers/Wardens, 6 category filters, 5 presets, and zero player interference.",
    loaders: ["Fabric"],
    minecraftVersions: ["26.3"],
    githubUrl: "https://github.com/rafayshhh/customizable-mobs-health-indicator",
    releaseUrl: "https://github.com/rafayshhh/customizable-mobs-health-indicator/releases",
    downloadCount: "v1.0.0 Released",
    featured: true,
    type: "mod",
    icon: "/images/minecraft/mods/shhh-mob-health-indicators/icon.png",
    features: [
      "Authentic 9x9 pixel-art heart sprites integrated cleanly into Minecraft's font pipeline (PUA \\uE000–\\uE00B)",
      "RPG Tiered Hearts for > 24 HP mobs/bosses (Iron Golems, Withers, Wardens) cycling across 5 radiant tiers",
      "Zero Player Interference: strictly excludes Player, Avatar, and non-mob entities like Armor Stands",
      "6 Category Filters: Hostile, Passive, Bosses, Named Only, Hide at 100% HP & Hide Invisible mobs",
      "5 Visual Presets (Classic Hearts, Compact, Health Bar, Minimal Numeric, RPG / Hearts) & 3 Heart Textures",
      "Pre-built Component caching during extractRenderState with 0 allocations inside render submission",
    ],
    status: "Released",
    gallery: [
      {
        src: "/images/minecraft/mods/shhh-mob-health-indicators/icon.png",
        alt: "Customizable Mobs Health Indicator Creeper & Pixel Hearts Emblem",
        caption: "Official Creeper & 9x9 Pixel-Art Heart emblem for Minecraft 26.3 Fabric.",
        isPrimary: true,
        aspect: "square",
      },
    ],
    specifications: [
      { label: "GitHub Repository", value: "customizable-mobs-health-indicator" },
      { label: "Mod Loader & Runtime", value: "Fabric Loader • Minecraft 26.3 • Java 25+" },
      { label: "Heart Sprites", value: "Authentic 9x9 bitmap textures (Vanilla, Hardcore, Unicode)" },
      { label: "Boss Scaling", value: "RPG Tiered Hearts (> 12 containers) across 5 color tiers" },
      { label: "Category Filtering", value: "Hostile, Passive, Boss, Named Only, Hide 100% HP, Invisible" },
      { label: "Config File", value: ".minecraft/config/customizable-mobs-health-indicator.json" },
    ],
    controls: [
      { action: "Toggle Mob Indicators", key: "F12", category: "Mobs Health Indicator", description: "Turns overhead mob health bars ON or OFF instantly" },
      { action: "Open Mob Settings GUI", key: "0", category: "Mobs Health Indicator", description: "Opens 2-column vanilla config menu (safe typing guard active)" },
    ],
    commands: [
      { command: "/mobhealth | /mobhealth gui", description: "Opens settings GUI (aliases: /cmhi, /custommobhealth, /mobhealthindicators)" },
      { command: "/mobhealth preset <hearts|compact|bar|numeric|lifesteal>", description: "Switch live visual style preset across all tracked mobs" },
      { command: "/mobhealth hostile | passive | bosses [on|off]", description: "Independently filter monsters, animals, and boss mobs" },
      { command: "/mobhealth hidefullhealth | namedonly [on|off]", description: "Hide unharmed 100% HP farm mobs or restrict to named entities" },
      { command: "/mobhealth texture <vanilla|hardcore|unicode>", description: "Select bitmap heart texture style" },
      { command: "/mobhealth distance <8-64> | maxrows <1-5>", description: "Adjust max view distance and stacked heart row caps" },
    ],
    dependencies: [
      { name: "Fabric API (26.3)", href: "https://modrinth.com/mod/fabric-api", required: true, notes: "Required Fabric Loader runtime dependencies" },
      { name: "Mod Menu", href: "https://modrinth.com/mod/modmenu", required: false, notes: "Optional settings menu entry point" },
      { name: "Customizable Player Health Indicator", href: "/minecraft/mods/shhh-player-health-indicators", required: false, notes: "Paired companion mod — strictly isolated so player and mob indicators never collide" },
    ],
    documentation: [
      {
        title: "Mob-Dedicated Resolution & Smart Filtering",
        slug: "resolution",
        content: `Shhh Mob Health Indicators targets strictly living mob entities (\`LivingEntity\`) while excluding players (\`Player\` / \`Avatar\`) and non-living utility props such as \`ArmorStand\`. You can run it right alongside Customizable Player Health Indicator without overlapping bars.

### Built-In Clutter & Category Filters
- **Hostile / Passive / Boss Toggles**: Focus exclusively on monsters during combat, or track boss phases.
- **Hide at 100% Full Health**: Eliminates messy visual noise around large animal pens and XP farms until a mob takes damage.
- **Named Only & Hide Invisible**: Restrict overlays strictly to custom nametagged companions and respect invisibility potion effects.`,
      },
      {
        title: "Minecraft 26.3 Split RenderState Pipeline",
        slug: "pipeline",
        content: `Engineered around Minecraft 26.3's two-phase entity render architecture for maximum FPS throughput:

1. **Extraction (\`LivingEntityRenderer.extractRenderState\`)**: Evaluates distance culling, checks category filters, formats the indicator \`Component\`, and stores it directly on \`LivingEntityRenderState\`.
2. **Submission (\`LivingEntityRenderer.submit\`)**: Consumes the pre-built component via \`SubmitNodeCollector.submitNameTag\` with **zero heap allocations and zero string concatenation** inside the hot render frame loop.`,
        codeLanguage: "java",
        codeSnippet: `// Extraction Phase Mixin — zero allocations in submission phase
@Inject(method = "extractRenderState", at = @At("TAIL"))
private void onExtractRenderState(T entity, S state, float tickDelta, CallbackInfo ci) {
    if (entity instanceof Player || entity instanceof Avatar || entity instanceof ArmorStand) return;
    MobHealthSnapshot snapshot = MobHealthTracker.resolve(entity);
    if (snapshot != null && state instanceof MobHealthRenderStateAccessor accessor) {
        accessor.shhh$setMobHealthComponent(MobHealthComponentBuilder.build(snapshot));
    }
}`,
      },
      {
        title: "RPG Tiered Hearts for High-Capacity Bosses",
        slug: "tiered-hearts",
        content: `Entities like **Iron Golems (100 HP)**, **Ravagers (100 HP)**, **Withers (300 HP)**, and **Wardens (500 HP)** normally flood the screen with dozens of stacked heart rows. Whenever a mob exceeds 12 containers (> 24 HP), Classic mode automatically condenses it into **RPG Tiered Hearts**:
- **Tier Prefix + Standardized 10-Heart Bar**: Displays \`x5\` alongside 10 clean hearts and numeric readout (\`100/100\`).
- **5 Dynamic Color Tiers**: Progresses smoothly from Crimson Red (Tier 1) &rarr; Radiant Gold (Tier 2) &rarr; Emerald Lime (Tier 3) &rarr; Diamond Cyan (Tier 4) &rarr; Ender Magenta (Tier 5+).`,
      },
    ],
    seo: {
      metaTitle: "Shhh Mob Health Indicators (Customizable Mobs Health) — Fabric 26.3",
      metaDescription: "Download Customizable Mobs Health Indicator for Minecraft 26.3 Fabric: 9x9 pixel heart textures, RPG tiered boss hearts, hostile/passive/boss filters, and zero player overlap.",
      keywords: ["Customizable Mobs Health Indicator", "Shhh Mob Health Indicators", "Fabric 26.3 mob health mod", "RPG tiered hearts minecraft", "minecraft overhead mob hearts"],
    },
  },
];

export const MINECRAFT_PLUGINS: MinecraftCreation[] = [];

export const MINECRAFT_RESOURCE_PACKS: MinecraftCreation[] = [];
