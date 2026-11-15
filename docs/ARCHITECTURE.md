# Architecture & Codebase Design

This document details the architectural structure, design patterns, and conventions used in the **RafayShhh** personal portfolio platform.

---

## 🏛️ System Overview

The application is built on **Next.js 15 (App Router)** with **TypeScript**, **Tailwind CSS**, and **React 19**. It is designed with a **static-first, edge-ready** philosophy:
- All showcase pages (`/`, `/mods`, `/apps`, `/projects`) are statically pre-rendered at build time for instant Time-To-First-Byte (TTFB) and zero server latency on Vercel's global CDN.
- The contact form is powered by a serverless Next.js Route Handler (`/api/contact`) that integrates with the **Resend API** and includes spam prevention honeypots.

```
┌─────────────────────────────────────────────────────────────┐
│                       Browser / Client                       │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
       Static Page Requests            Form Submission POST
               │                               │
               ▼                               ▼
┌──────────────────────────────┐ ┌────────────────────────────┐
│      Vercel Edge CDN         │ │      Next.js Route         │
│  - / (Home Hub)              │ │      /api/contact          │
│  - /mods (Minecraft Mods)    │ └─────────────┬──────────────┘
│  - /apps (Android Apps)      │               │
│  - /projects (Web Projects)  │               ▼
│  - /sitemap.xml              │ ┌────────────────────────────┐
│  - /robots.txt               │ │    Resend Email Service    │
└──────────────────────────────┘ └────────────────────────────┘
```

---

## 📁 Directory Structure

```
Portfolio Website/
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules for Next.js, node_modules, build
├── README.md                   # Primary repository readme
├── next.config.mjs             # Next.js configuration & image domains
├── package.json                # Project dependencies & npm scripts
├── postcss.config.mjs          # PostCSS configuration with Tailwind
├── tailwind.config.ts          # Obsidian & crimson theme configuration
├── tsconfig.json               # TypeScript strict configuration & paths
├── docs/                       # Comprehensive documentation
│   ├── ARCHITECTURE.md         # System design & directory guide (this file)
│   ├── DEPLOYMENT.md           # Step-by-step Vercel & custom domain setup
│   ├── SEO.md                  # Google & Bing Webmaster optimization guide
│   └── CONTENT_GUIDE.md        # Guide to adding new mods, apps & projects
└── src/
    ├── app/                    # Next.js App Router
    │   ├── api/contact/        # Resend email API route handler
    │   │   └── route.ts
    │   ├── apps/               # Android apps landing page
    │   │   └── page.tsx
    │   ├── mods/               # Minecraft mods landing page
    │   │   └── page.tsx
    │   ├── projects/           # Software & web projects landing page
    │   │   └── page.tsx
    │   ├── globals.css         # Global Tailwind styles & crimson glow utilities
    │   ├── icon.svg            # Dynamic SVG favicon & app icon
    │   ├── layout.tsx          # Root layout with Navbar, Footer, Meta, Schema.org
    │   ├── manifest.ts         # Web app manifest for PWA & mobile bookmarks
    │   ├── not-found.tsx       # Custom 404 page matching the crimson theme
    │   ├── page.tsx            # Main Landing Page
    │   ├── robots.ts           # Dynamic robots.txt for Googlebot & Bingbot
    │   └── sitemap.ts          # Dynamic prioritized sitemap.xml
    ├── components/
    │   ├── icons/              # Authentic brand SVG icons
    │   │   └── BrandIcons.tsx  # GitHub, CurseForge, Modrinth, Discord, YouTube, X, Instagram, etc.
    │   ├── layout/             # Persistent site chrome
    │   │   ├── Navbar.tsx      # Responsive blur navigation bar
    │   │   └── Footer.tsx      # Multi-column footer with social directory
    │   ├── sections/           # Interactive page sections
    │   │   ├── Hero.tsx        # Hero banner with brand and quick socials
    │   │   ├── FeaturedBento.tsx # Bento grid highlighting top mod & app
    │   │   ├── ExperienceSection.tsx # Career & milestones timeline
    │   │   ├── SkillsSection.tsx # Technical capabilities radar
    │   │   ├── ContactSection.tsx # Resend form & 1-click email copy
    │   │   ├── ModsClientList.tsx # Filterable Minecraft mods grid
    │   │   └── ProjectsClientList.tsx # Filterable software projects grid
    │   └── seo/
    │       └── JsonLd.tsx      # Schema.org JSON-LD generator
    ├── data/                   # Typed data models & content
    │   ├── apps.ts             # Android applications registry
    │   ├── experience.ts       # Work experience & career history
    │   ├── mods.ts             # Minecraft mods & plugins registry
    │   ├── projects.ts         # Software & web projects registry
    │   └── socials.ts          # Social profiles & personal bio
    └── lib/
        └── utils.ts            # Tailwind class merger (cn helper)
```

---

## 🎨 Theme & Design System

The application adheres to a strict visual design system:
- **Base Canvas**: Deep obsidian black `#08080a`.
- **Card Backgrounds**: `#0f0f15` with subtle glassmorphic backdrop-filter (`backdrop-blur-md`).
- **Borders**: `#1f1f28` in resting state; glowing crimson `#ef4444` / `rgba(239, 68, 68, 0.4)` on hover.
- **Crimson / Ruby Accents**:
  - Highlights: `#ef4444`
  - Deep Red: `#dc2626`
  - Dark Ruby / Crimson: `#991b1b` / `#4c0519`
- **Typography**: Fluid responsive system with crisp monospace (`font-mono`) accents for versioning, metrics, and tags.
- **Micro-Interactions**: Ambient gradient meshes, custom red scrollbars, smooth hover transforms, and loading spinners.

---

## 🔒 Security & Performance Highlights

1. **Anti-Spam Honeypot**: The contact form features a hidden `honeypot` field that is invisible to human users but traps automated scrapers, discarding spam silently.
2. **Server-Side API**: Email credentials (`RESEND_API_KEY`) reside strictly in serverless runtime memory and are never exposed to client-side bundles.
3. **HTML Sanitization**: All incoming contact form text is escaped before being formatted into the HTML email template.
4. **Optimized SVG Icons**: Authentic vector SVGs eliminate external web font or bulky icon-font dependencies.
5. **Zero Hydration Mismatch**: Strict separation between static server components and `"use client"` interactive widgets.
