export interface AndroidApp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  version: string;
  minAndroidVersion: string;
  playStoreUrl?: string;
  webAppUrl?: string;
  apkDownloadUrl?: string;
  githubUrl?: string;
  image?: string;
  techStack: string[];
  features: string[];
  featured: boolean;
  status: "Released" | "Beta" | "In Development";
  category: string;
}

export const ANDROID_APPS: AndroidApp[] = [
  {
    id: "kreate-typography",
    title: "Kreate Typography 2.1",
    tagline: "Premium Unicode typography, text transformations, and creative sticker card studio.",
    description: "Flagship KreateKode application. Pure Dart Unicode mathematical mapping covering 105 distinct styles across 5 categories, 2,060 categorized emojis, 2,093 special symbols, 22 dedicated toolkits, and 100% watermark-free HD sticker card exports. Zero analytics, zero background trackers, and sub-0.05ms O(1) hash map typing.",
    version: "v2.1.0 (SDK 36)",
    minAndroidVersion: "Android 7.0+ (API 24)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kreatekode.kreate_typography",
    webAppUrl: "https://kreatekode.website/kreatetypography",
    image: "/images/apps/kreate-typography-logo.png",
    techStack: ["Flutter 3.x", "Dart 3.x", "Riverpod 2.x", "Hive CE", "Clean Architecture", "PWA"],
    features: [
      "105 Mathematical Unicode styles (Clean, Fancy, Decorative, Aesthetic, Glitch)",
      "2,060 Unicode 15/16 emojis & 2,093 curated symbols across 14 categories",
      "22 dedicated toolkits: Discord channel names, Zalgo, ASCII banners, Kaomoji",
      "Universal Share: Watermark-free HD sticker cards in Obsidian, Amber, Emerald",
      "Precomputed O(1) Map lookup engine with sub-0.05ms real-time typing",
    ],
    featured: true,
    status: "Released",
    category: "Typography & Creative Suite",
  },
  {
    id: "calculator-150-tools",
    title: "Calculator with 150 Math Tools",
    tagline: "Pure offline mathematical suite with scientific engine and 150 specialized calculators.",
    description: "Expansive cross-platform mathematical suite spanning Calculus, Linear Algebra, 2D/3D Geometry, Discrete Mathematics, Statistics & Probability, Physics, Engineering, Chemistry, Quantitative Finance, and Developer Utilities. Features a pure-Dart recursive-descent expression parser and 100% offline Hive storage.",
    version: "v1.0.0 (Flutter 3.x)",
    minAndroidVersion: "Android 8.0+ (API 26)",
    githubUrl: "https://github.com/RafayShhh",
    image: "/images/apps/calculator-pixel8.png",
    techStack: ["Flutter 3.x", "Dart", "Riverpod", "Hive CE", "Recursive-Descent Parser"],
    features: [
      "150 specialized tools: Calculus, Linear Algebra, Geometry, Stats, Physics, Finance",
      "Pure-Dart recursive-descent parser with operator precedence and angle semantics",
      "6 glassmorphic brand palettes with dedicated Light and Dark themes",
      "100% offline: zero telemetry, zero analytics, zero network requests",
    ],
    featured: true,
    status: "Beta",
    category: "Mathematics & Scientific Suite",
  },
];
