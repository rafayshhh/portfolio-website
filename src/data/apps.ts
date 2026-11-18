export interface AndroidApp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  version: string;
  minAndroidVersion: string;
  playStoreUrl?: string;
  apkDownloadUrl?: string;
  githubUrl?: string;
  techStack: string[];
  features: string[];
  featured: boolean;
  status: "In Development" | "Beta" | "Released";
  category: string;
}

export const ANDROID_APPS: AndroidApp[] = [
  {
    id: "android-compose-lab",
    title: "Android Native Utilities",
    tagline: "High-performance mobile tooling engineered with Jetpack Compose & Kotlin.",
    description: "Modern Android architecture exploring offline-first local persistence, Material You dynamic color adaptation, and background task deferral. Source and releases shared via GitHub as development progresses.",
    version: "Active Build",
    minAndroidVersion: "Android 9.0+ (API 28)",
    githubUrl: "https://github.com/RafayShhh",
    apkDownloadUrl: "https://github.com/RafayShhh",
    techStack: ["Kotlin", "Jetpack Compose", "Material You", "Coroutines & Flow", "Room DB"],
    features: [
      "Dynamic color theming adapting to Android wallpaper palette",
      "100% offline functionality with zero analytics or tracking",
      "Smooth declarative UI built with Jetpack Compose",
      "Single-Source-of-Truth local Room persistence",
    ],
    featured: true,
    status: "In Development",
    category: "Mobile Utilities",
  },
];
