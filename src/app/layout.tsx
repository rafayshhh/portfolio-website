import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SystemHUD } from "@/components/layout/SystemHUD";
import { JsonLd } from "@/components/seo/JsonLd";
import { PERSONAL_INFO } from "@/data/socials";

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
    "Official portfolio and creations by RafayShhh (Muhammad Abdul Rafay). Creator of Shhh Brightness Toggle, client-side Minecraft Fabric mods, and native Android apps.",
  keywords: [
    "RafayShhh",
    "rafayshhh",
    "rafayshhh.site",
    "rafayshhh.website",
    "Shhh Brightness Toggle",
    "Minecraft Mods",
    "Fabric Mod",
    "Minecraft Utility Mod",
    "CurseForge rafayshhh",
    "Modrinth RafayShhh",
    "Android Developer",
    "Kotlin Jetpack Compose",
    "Full-Stack Software Engineer",
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
    title: "RafayShhh — Minecraft Mod Developer & Android Engineer",
    description:
      "Explore Minecraft mods (Shhh Brightness Toggle), Android apps, and software projects by RafayShhh.",
    siteName: "RafayShhh Portfolio",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "RafayShhh Banner",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "YOUR_BING_WEBMASTER_VERIFICATION_CODE",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd type="person" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#080306] text-zinc-100 min-h-screen flex flex-col selection:bg-red-600 selection:text-white antialiased overflow-x-hidden">
        <SystemHUD />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
