export interface ExperienceItem {
  id: string;
  role: string;
  companyOrContext: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  current?: boolean;
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "independent-modder-engineer",
    role: "Minecraft Mod Developer & Open-Source Creator",
    companyOrContext: "Independent / RafayShhh",
    period: "2023 — Present",
    current: true,
    description: "Developing client and server utility modifications for Minecraft across Fabric, Quilt, and NeoForge loaders. Designing performant rendering hooks, mixin injections, and configuration interfaces.",
    achievements: [
      "Created and shipped Shhh Brightness Toggle on CurseForge & Modrinth, delivering seamless gamma modification without potion particle artifacts.",
      "Maintained consistent cross-version compatibility spanning Minecraft 1.20 to 1.21.x releases.",
      "Fostered an active Discord community to triage feature requests, beta tests, and player bug reports.",
    ],
    skills: ["Java", "Fabric API", "Mixin Injection", "Gradle", "Modrinth API", "CurseForge Developer API"],
  },
  {
    id: "android-software-developer",
    role: "Android Application Developer",
    companyOrContext: "Mobile Development / Freelance",
    period: "2022 — Present",
    current: true,
    description: "Building responsive, modern Android mobile applications implementing Jetpack Compose, Kotlin Coroutines, and Clean Architecture principles.",
    achievements: [
      "Architected lightweight Android utilities with offline-first local persistence using Room Database.",
      "Implemented Material You dynamic color theming, edge-to-edge rendering, and adaptive screen layouts.",
      "Engineered clean state-management pipelines using StateFlow, ViewModel, and Coroutines.",
    ],
    skills: ["Kotlin", "Android SDK", "Jetpack Compose", "Coroutines & Flow", "Room", "Material 3"],
  },
  {
    id: "fullstack-web-developer",
    role: "Software & Web Developer",
    companyOrContext: "Projects & Freelance",
    period: "2021 — 2023",
    description: "Crafted performant web applications, REST services, and automation tooling for clients and community gaming projects.",
    achievements: [
      "Built full-stack dashboards, API integrations, and developer automation scripts in TypeScript and React.",
      "Optimized web vitals, Lighthouse SEO scores, and fast static delivery via edge platforms like Vercel.",
    ],
    skills: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Git & CI/CD"],
  },
];
