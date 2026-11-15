# Content Management Guide

The **RafayShhh** portfolio uses a clean, type-safe data architecture. You never have to touch JSX, HTML, or CSS to add or update your mods, applications, experience, or links.

All content is managed through simple TypeScript files located in `src/data/`.

---

## ⛏️ 1. Adding or Updating Minecraft Mods (`src/data/mods.ts`)

Open [`src/data/mods.ts`](../src/data/mods.ts). To add a new mod, append a new object to the `MINECRAFT_MODS` array:

```typescript
{
  id: "my-new-mod",
  title: "My New Mod Name",
  tagline: "Short 1-sentence punchy summary of what the mod does.",
  description: "Detailed description of how the mod works, benefits, and why players need it.",
  loaders: ["Fabric", "Quilt", "NeoForge"], // Supported loaders: "Fabric" | "Forge" | "NeoForge" | "Quilt" | "Paper/Spigot"
  minecraftVersions: ["1.20.1", "1.21.x"],
  curseForgeUrl: "https://www.curseforge.com/minecraft/mc-mods/my-new-mod",
  modrinthUrl: "https://modrinth.com/mod/my-new-mod",
  githubUrl: "https://github.com/RafayShhh/my-new-mod",
  downloadCount: "5,000+",
  featured: true, // If true, can appear in the homepage Bento grid
  type: "mod", // "mod" | "plugin" | "utility"
  features: [
    "Feature 1: In-game configuration screen",
    "Feature 2: Zero performance drop / 60+ FPS",
    "Feature 3: Multiplayer compatibility",
  ],
  bannerGradient: "from-red-950/80 via-zinc-900 to-black",
  status: "Released", // "Released" | "Beta" | "In Development"
}
```

Once saved, the `/mods` page will automatically display the new card, include it in the loader filters, and format the CurseForge/Modrinth download buttons!

---

## 📱 2. Adding or Updating Android Apps (`src/data/apps.ts`)

Open [`src/data/apps.ts`](../src/data/apps.ts). To add an app, append a new object to `ANDROID_APPS`:

```typescript
{
  id: "my-android-app",
  title: "App Title",
  tagline: "Modern offline-first Android utility built with Compose.",
  description: "Detailed description of the application features, architecture, and use case.",
  version: "v1.0.0",
  minAndroidVersion: "Android 9.0+ (API 28)",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.rafayshhh.app",
  apkDownloadUrl: "https://github.com/RafayShhh/my-app/releases/latest/download/app-release.apk",
  githubUrl: "https://github.com/RafayShhh/my-app",
  techStack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Material 3"],
  features: [
    "Material You dynamic theming",
    "100% offline with zero trackers",
    "Fast gesture navigation",
  ],
  featured: true,
  status: "Released", // "Released" | "Beta" | "Early Access"
  category: "Productivity",
}
```

The app card will render on `/apps` with direct APK download badges, Google Play link (if present), and the full architecture pill matrix.

---

## 💻 3. Adding or Updating Software Projects (`src/data/projects.ts`)

Open [`src/data/projects.ts`](../src/data/projects.ts). Add a new project to `SOFTWARE_PROJECTS`:

```typescript
{
  id: "my-developer-tool",
  title: "Developer CLI Tool",
  tagline: "Automated release publisher for mod developers.",
  description: "Detailed description of the tool.",
  category: "CLI & Tools", // "Full-Stack" | "CLI & Tools" | "Open Source" | "Web App"
  techStack: ["Node.js", "TypeScript", "REST APIs"],
  githubUrl: "https://github.com/RafayShhh/tool",
  demoUrl: "https://demo.domain.com", // Optional
  featured: true,
  highlights: [
    "Single-command publish to CurseForge and Modrinth",
    "Automatic changelog generation",
  ],
}
```

---

## 💼 4. Updating Experience & Timeline (`src/data/experience.ts`)

Open [`src/data/experience.ts`](../src/data/experience.ts). Modify or add career milestones:

```typescript
{
  id: "new-role-id",
  role: "Lead Mod Developer",
  companyOrContext: "Independent / Community",
  period: "2024 — Present",
  current: true,
  description: "Summary of responsibilities and focus.",
  achievements: [
    "Shipped v2.0 with over 50,000 active players",
    "Refactored mixin injection pipeline to support Minecraft 1.21 NeoForge",
  ],
  skills: ["Java", "Fabric", "NeoForge", "Gradle"],
}
```

---

## 🔗 5. Updating Social Links & Profile (`src/data/socials.ts`)

Open [`src/data/socials.ts`](../src/data/socials.ts):
- Update `PERSONAL_INFO.email` to change where the 1-click copy points.
- Update `PERSONAL_INFO.discordInvite` if your Discord invite code ever changes.
- Add or modify URLs in `SOCIAL_LINKS` (YouTube, X, Instagram, Threads, GitHub, CurseForge, Modrinth).
