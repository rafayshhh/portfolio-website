import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site").replace(/\/+$/, "");

export const viewport: Viewport = {
  themeColor: "#ef4444",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RafayShhh — Software Engineer, Minecraft Mod & Flutter Developer",
    template: "%s | RafayShhh",
  },
  description:
    "Portfolio of Muhammad Abdul Rafay (RafayShhh): creator of 5 open-source Minecraft Fabric & Forge mods, offline Flutter apps under KreateKode, and local-first AI tools.",
  keywords: [
    "RafayShhh",
    "Muhammad Abdul Rafay",
    "rafayshhh.site",
    "Shhh Brightness Toggle",
    "Shhh Builder",
    "Shhh Printer",
    "Shhh Player Health Indicators",
    "Shhh Mob Health Indicators",
    "Minecraft Fabric Mods",
    "KreateKode",
    "Kreate Typography",
    "Calculator 150 Math Tools",
    "Flutter Developer",
    "Next.js Engineer",
  ],
  authors: [{ name: "Muhammad Abdul Rafay (RafayShhh)", url: siteUrl }],
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
    title: "RafayShhh — Software Engineer, Minecraft Mod & Flutter Developer",
    description:
      "Explore client-side Minecraft mods (Shhh Brightness Toggle, Shhh Builder), offline Flutter utilities at KreateKode, and open-source AI desktop tools.",
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
    title: "RafayShhh — Software Engineer, Minecraft Mod & Flutter Developer",
    description:
      "Explore client-side Minecraft Fabric/Forge mods, offline Flutter mobile apps, and local-first software projects by RafayShhh.",
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
      className={`dark scroll-smooth ${inter.variable} font-sans`}
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
