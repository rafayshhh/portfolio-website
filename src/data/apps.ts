import { GalleryImage, SpecificationItem, DocumentationSection, FaqItem, ItemSeo } from "./types";

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
  gallery: GalleryImage[];
  specifications: SpecificationItem[];
  documentation: DocumentationSection[];
  faqs?: FaqItem[];
  seo: ItemSeo;
}

export const ANDROID_APPS: AndroidApp[] = [
  {
    id: "kreate-typography",
    title: "Kreate Typography 2.1",
    tagline: "Premium Unicode typography, text transformations, and creative sticker card studio.",
    description:
      "Flagship KreateKode application. Pure Dart Unicode mathematical mapping covering 105 distinct styles across 5 categories, 2,060 categorized emojis, 2,093 special symbols, 22 dedicated toolkits, and 100% watermark-free HD sticker card exports. Zero analytics, zero background trackers, and sub-0.05ms O(1) hash map typing.",
    version: "v2.1.0 (SDK 36)",
    minAndroidVersion: "Android 7.0+ (API 24)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kreatekode.kreate_typography",
    webAppUrl: "https://kreatekode.website/kreatetypography",
    githubUrl: "https://github.com/rafayshhh/kreate-typography-showcase",
    image: "/images/apps/kreate-typography/icon.png",
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
    gallery: [
      {
        src: "/images/apps/kreate-typography/promo-showcase-wide.jpg",
        alt: "Kreate Typography 3-phone showcase displaying Typography Studio, Editor styles, and Symbol Browser",
        caption: "Kreate Typography Studio Showcase: Unicode font studio, instant transforms, and symbol directory.",
        isPrimary: true,
        aspect: "video",
      },
      {
        src: "/images/apps/kreate-typography/promo-your-text.png",
        alt: "Kreate Typography promotional poster — Your Text, Your Style",
        caption: "Your Text. Your Style. Quick Unicode transforms, creative toolkits, and clean navigation.",
        aspect: "portrait",
      },
      {
        src: "/images/apps/kreate-typography/promo-themes.png",
        alt: "Kreate Typography promotional showcase highlighting Midnight Ember, Kreate Violet, Ocean, Rose & Emerald themes",
        caption: "Personalized Dynamic Color Themes designed for clean contrast and readability.",
        aspect: "portrait",
      },
      {
        src: "/images/apps/kreate-typography/promo-history.png",
        alt: "Kreate Typography History & Favorites search showcase",
        caption: "Offline History & Favorites manager keeping transformed text accessible anytime.",
        aspect: "portrait",
      },
    ],
    specifications: [
      { label: "Target Platform", value: "Android (Google Play) & Web PWA" },
      { label: "App Version", value: "2.1.0 (SDK 36)" },
      { label: "Minimum SDK", value: "Android 7.0 Nougat (API 24)" },
      { label: "Framework", value: "Flutter 3.x / Dart 3.x" },
      { label: "State Architecture", value: "Riverpod 2.x StateNotifier & AsyncNotifier" },
      { label: "Local Persistence", value: "Hive CE (Encrypted binary format)" },
      { label: "Latency Benchmark", value: "< 0.05ms per keystroke (O(1) hash maps)" },
      { label: "Telemetry & Privacy", value: "Zero analytics SDKs, zero background network pings" },
    ],
    documentation: [
      {
        title: "Architecture & Clean Engineering",
        slug: "architecture",
        content: `Kreate Typography is architected using strict Clean Architecture principles separated into Presentation, Domain, and Data layers. The codebase avoids unnecessary bloat, third-party wrapper dependencies, and cloud calls.

### Core Architectural Layers
- **Presentation Layer**: Built on declarative Flutter widget trees with custom render objects for instant character painting. State transitions are governed by **Riverpod 2.x**, ensuring deterministic UI updates without jank.
- **Domain Layer**: Houses pure Dart business logic, Unicode transform interfaces, and toolkit abstractions with zero dependencies on Flutter UI primitives.
- **Data Layer**: Powered by **Hive Community Edition (Hive CE)**, storing user favorites, custom presets, and recents in compact binary boxes directly on device flash storage.`,
      },
      {
        title: "Precomputed O(1) Unicode Mapping Engine",
        slug: "engine",
        content: `Traditional text transformation apps rely on regular expressions or dynamic character code shifting at runtime, resulting in frame drops and garbage collection pauses when typing large paragraphs.

Kreate Typography solves this through a **precomputed hash map engine**:
- Every one of the 105 mathematical styles is compiled into a static, contiguous immutable lookup table during initialization.
- As the user types, each character code unit is looked up in O(1) constant time.
- Benchmarks consistently verify sub-0.05ms transform latency on standard mid-range mobile hardware.`,
        codeLanguage: "dart",
        codeSnippet: `// Example O(1) Precomputed Mapping Table
class UnicodeStyleEngine {
  static final Map<int, String> boldSerifMap = {
    0x0041: '𝐀', 0x0042: '𝐁', 0x0043: '𝐂', // ...
    0x0061: '𝐚', 0x0062: '𝐛', 0x0063: '𝐜',
  };

  static String transform(String input, Map<int, String> map) {
    final buffer = StringBuffer();
    for (final charCode in input.runes) {
      buffer.write(map[charCode] ?? String.fromCharCode(charCode));
    }
    return buffer.toString();
  }
}`,
      },
      {
        title: "Universal Share & Watermark-Free HD Cards",
        slug: "cards",
        content: `A core design pillar of Kreate Typography is absolute user freedom:
- **No Watermarks**: Unlike competing mobile typography tools, exported cards contain zero forced logos, watermarks, or intrusive brand stamps.
- **Multi-Palette Swatches**: Generate high-density PNG sticker cards in Obsidian, Transparent, White, Indigo, Pink, Amber, and Emerald themes.
- **Native Android Share Sheet**: Integrates directly with Android's system share sheet for 1-tap dispatch to Instagram Stories, Discord channels, WhatsApp chats, and Telegram.`,
      },
      {
        title: "Privacy & Offline Commitment",
        slug: "privacy",
        content: `Kreate Typography requires zero user accounts, collects zero telemetry, and includes zero tracking SDKs (no Firebase Analytics, no Facebook SDK, no advertising trackers). Your text transformations and clipboard operations never leave your physical device.`,
      },
    ],
    faqs: [
      {
        question: "Does Kreate Typography add watermarks when exporting images?",
        answer: "No. Every PNG card exported from the Share As Image studio is 100% watermark-free at full resolution.",
      },
      {
        question: "Does Kreate Typography collect analytics or require an account?",
        answer: "No. It operates completely offline with zero Firebase Analytics, ad SDKs, or user logins.",
      },
    ],
    seo: {
      metaTitle: "Kreate Typography 2.1 — Unicode Font Studio & HD Cards",
      metaDescription: "Download Kreate Typography for Android or try the web app: 105 Unicode font styles, 2,060 emojis, 2,093 symbols, and watermark-free HD card exports.",
      keywords: ["Kreate Typography", "Unicode font generator", "Discord font converter", "Android font app", "Flutter typography studio", "watermark free sticker card", "RafayShhh apps"],
    },
  },
  {
    id: "calculator-150-tools",
    title: "Calculator with 150 Math Tools",
    tagline: "Pure offline mathematical suite with scientific AST parser, 2D function grapher & 150 specialized tools.",
    description:
      "Open-source Flutter mathematical suite spanning Calculus, Linear Algebra, 2D/3D Geometry, Discrete Math, Statistics, Physics, Engineering, Chemistry, Quantitative Finance, Date/Time, and Developer tools. Features a pure-Dart recursive-descent AST evaluator, 2D pan-and-zoom plotting canvas, and 100% offline Hive storage.",
    version: "v1.0.0 (Flutter 3.x)",
    minAndroidVersion: "Android 8.0+ (API 26)",
    apkDownloadUrl: "https://github.com/rafayshhh/calculator/releases/download/v1.0.0/Calculator-v1.0.0.apk",
    githubUrl: "https://github.com/rafayshhh/calculator",
    image: "/images/apps/calculator/icon.jpg",
    techStack: ["Flutter 3.x", "Dart", "Riverpod", "Hive CE", "Recursive-Descent AST", "CustomPainter"],
    features: [
      "150+ specialized calculators across Finance, Math, Physics, Engineering, Chemistry & Dev CS",
      "Custom pure-Dart lexer & recursive-descent AST evaluator supporting DEG, RAD & GRAD modes",
      "4 core calculation workspaces: Arithmetic, Scientific Keypad, Equation Solver & 2D Grapher",
      "Dynamic color palettes (Electric Cyan Dark, Emerald Mint, Clean Light Mode) & zero network permissions",
    ],
    featured: true,
    status: "Released",
    category: "Mathematics & Scientific Suite",
    gallery: [
      {
        src: "/images/apps/calculator/hero_showcase.png",
        alt: "Calculator with 150 Math Tools hero showcase displaying Standard Calculator, 2D Function Grapher, and Toolbox Hub",
        caption: "Core Workspace Suite: Standard Calculator, Interactive 2D Function Grapher, and 150+ Specialized Math Tools.",
        isPrimary: true,
        aspect: "video",
      },
    ],
    specifications: [
      { label: "Target Platform", value: "Android, Desktop & Web (Flutter 3.x)" },
      { label: "Latest Release", value: "v1.0.0 (Signed Android APK Available)" },
      { label: "Minimum SDK", value: "Android 8.0 Oreo (API 26)" },
      { label: "Core Math Engine", value: "Pure Dart Recursive-Descent AST Expression Parser" },
      { label: "Specialized Tools", value: "150+ domain-specific calculators across 10+ fields" },
      { label: "Graphing Engine", value: "CustomPainter Cartesian 2D Plotter with Pan & Zoom" },
      { label: "Network Access", value: "100% Offline (Zero analytics & zero cloud API calls)" },
    ],
    documentation: [
      {
        title: "Recursive-Descent AST Expression Parser",
        slug: "parser",
        content: `Instead of shipping heavy C++ WebAssembly or JNI math wrappers, the core evaluator is built from scratch in pure Dart using a strict **recursive-descent lexer and parser**:

### Parsing Pipeline
1. **Lexical Tokenizer**: Scans raw strings into typed tokens (Numbers, Operators, Functions, Parentheses, Constants like π and e, and implicit multiplication).
2. **Grammar Hierarchy**: Enforces standard PEMDAS / BODMAS operator precedence alongside right-associative exponentiation.
3. **Angle Unit Normalization**: Switches seamlessly across DEG, RAD, and GRAD modes inside trigonometric evaluations.`,
        codeLanguage: "dart",
        codeSnippet: `// Recursive-Descent Expression Evaluator Snippet
class ExpressionParser {
  double parseExpression(TokenScanner scanner) {
    double value = parseTerm(scanner);
    while (scanner.peek() == '+' || scanner.peek() == '-') {
      final op = scanner.next();
      final nextTerm = parseTerm(scanner);
      value = (op == '+') ? value + nextTerm : value - nextTerm;
    }
    return value;
  }
}`,
      },
      {
        title: "150+ Specialized Tools Across Scientific & Financial Domains",
        slug: "disciplines",
        content: `Every utility operates locally with instant validation and formula breakdowns:
1. **Calculus & Linear Algebra**: Numerical derivatives, Simpson integration, limits, N × N matrix determinants, inverses, and eigenvalues.
2. **2D / 3D Geometry & Discrete Math**: Conic sections, triangle solvers, prime factorization, CRT, and Fibonacci/modular inverses.
3. **Physics, Electrical & Mechanical**: Kinematics, F = ma, orbital mechanics, Ohm's law, RC time constants, torque, and Young's modulus.
4. **Chemistry & Quantitative Finance**: Stoichiometry, ideal gas law (PV = nRT), pH equilibrium, compound interest, mortgage amortization, ROI, and CAGR.
5. **Unit Converter (15 Categories) & Developer Tools**: Length, mass, data storage, binary/octal/hex conversion, bitwise ops, and Unix timestamps.`,
      },
      {
        title: "Glassmorphic Design & Air-Gapped Privacy",
        slug: "ui-privacy",
        content: `Engineered with zero telemetry or cloud dependencies:
- **Adaptive Responsive Breakpoints**: Tailored navigation rails for Mobile (< 600dp), Tablet (600–899dp), and Desktop (>= 900dp).
- **Dynamic Accent Palettes**: Electric Cyan (Dark OLED), Emerald Mint, and Clean Light Mode stored locally via Hive binary boxes.`,
      },
    ],
    faqs: [
      {
        question: "Does Calculator with 150 Math Tools require internet access?",
        answer: "No. All 150+ calculators, the recursive-descent AST evaluator, and the 2D Cartesian function plotter run 100% offline with zero network permissions.",
      },
      {
        question: "Where can I download the Android APK or inspect the source code?",
        answer: "A signed v1.0.0 APK release is available directly from the GitHub Releases link alongside full Flutter & Dart source code.",
      },
    ],
    seo: {
      metaTitle: "Calculator with 150 Math Tools — Offline Flutter App",
      metaDescription: "Open-source offline Android math suite featuring a scientific AST calculator, 2D function grapher, and 150+ calculators across physics, chemistry & finance.",
      keywords: ["Android math suite", "150 math tools", "offline scientific calculator", "Flutter calculator app", "2D graphing calculator android", "RafayShhh apps"],
    },
  },
];
