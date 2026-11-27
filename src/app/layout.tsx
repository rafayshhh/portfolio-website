import type { Metadata, Viewport } from "next";
import { Inter, Silkscreen } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { JsonLd } from "@/components/seo/JsonLd";
import { PERSONAL_INFO } from "@/data/socials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-minecraft",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site";

export const viewport: Viewport = {
  themeColor: "#ef4444",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RafayShhh — Minecraft Mod Developer, Android Engineer & Systems Portfolio",
    template: "%s | RafayShhh",
  },
  description:
    "Official portfolio and software hub of RafayShhh (Muhammad Abdul Rafay). Creator of Shhh Brightness Toggle, Shhh Builder, Fabric Minecraft mods (1.8.9–26.3), Flutter apps, and KreateKode systems.",
  keywords: [
    "RafayShhh",
    "Muhammad Abdul Rafay",
    "rafayshhh.site",
    "Shhh Brightness Toggle",
    "Shhh Builder",
    "Shhh Printer",
    "Shhh Mob Health Indicators",
    "Shhh Player Health Indicators",
    "Minecraft Fabric Mods",
    "Minecraft Utility Mods",
    "CurseForge rafayshhh",
    "Calculator 150+ Tools",
    "KreateKode",
    "Flutter Dart Developer",
    "Full-Stack Next.js Engineer",
  ],
  authors: [{ name: "RafayShhh", url: siteUrl }],
  creator: "RafayShhh",
  publisher: "RafayShhh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "RafayShhh — Minecraft Mod Developer & Systems Engineer",
    description:
      "Explore client-side Minecraft mods (Shhh Brightness Toggle, Shhh Builder, Health Indicators), Flutter Android apps, and open-source web software by RafayShhh.",
    siteName: "RafayShhh Portfolio",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "RafayShhh Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RafayShhh — Minecraft Mod Developer & Android Engineer",
    description:
      "Explore Minecraft mods (Shhh Brightness Toggle), Android apps, and software projects by RafayShhh.",
    creator: "@RafayShhh",
    images: ["/images/banner.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "hi90QEQQqI46M52CioJaT2DxmnST80qikaK87kS4dJQ",
    other: {
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : {}),
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${silkscreen.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd type="person" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-zinc-50 dark:bg-[#080306] text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col selection:bg-red-600 selection:text-white antialiased overflow-x-hidden transition-colors duration-200">
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
