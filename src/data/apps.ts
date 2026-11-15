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
  status: "Released" | "Beta" | "Early Access";
  category: string;
}

export const ANDROID_APPS: AndroidApp[] = [
  {
    id: "quick-utility-toolbox",
    title: "Apex Utilities for Android",
    tagline: "High-speed modern productivity suite built with Jetpack Compose & Material You.",
    description: "An intuitive Android utility crafted for power users. Delivers fast on-device conversions, offline text transformations, quick clipboard management, and battery sensor diagnostics, following Modern Android Architecture and declarative UI principles.",
    version: "v2.1.0",
    minAndroidVersion: "Android 9.0+ (API 28)",
    githubUrl: "https://github.com/RafayShhh",
    apkDownloadUrl: "https://github.com/RafayShhh",
    techStack: ["Kotlin", "Jetpack Compose", "Material You", "Coroutines & Flow", "Room DB", "Hilt"],
    features: [
      "Dynamic theming adapting to Android 12+ wallpaper colors",
      "100% offline functionality with zero analytics tracking",
      "Instant quick-settings tiles for Android notification shade",
      "Smooth hardware-accelerated animations using Compose",
      "Clean architecture with Single-Source-of-Truth Room database",
    ],
    featured: true,
    status: "Released",
    category: "Productivity & Utilities",
  },
  {
    id: "minimalist-task-ledger",
    title: "FocusFlow: Habit & Task Ledger",
    tagline: "Distraction-free task planner focused on rapid capture and cognitive clarity.",
    description: "Built to eliminate cognitive overload. Offers lightning-quick input gestures, custom recurring reminders, local encryption, and seamless backup exports.",
    version: "v1.4.0",
    minAndroidVersion: "Android 8.0+ (API 26)",
    githubUrl: "https://github.com/RafayShhh",
    apkDownloadUrl: "https://github.com/RafayShhh",
    techStack: ["Kotlin", "Jetpack Compose", "DataStore", "WorkManager", "Clean Architecture"],
    features: [
      "Gesture-first navigation and rapid multi-item entry",
      "Local AES-256 encrypted database storage",
      "Smart recurring scheduling via Android WorkManager",
      "Dark mode AMOLED true-black theme option",
    ],
    featured: true,
    status: "Beta",
    category: "Productivity",
  },
];
