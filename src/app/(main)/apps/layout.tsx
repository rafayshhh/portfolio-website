import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Android Applications & Mobile Utilities | KreateKode",
  description:
    "Explore offline-first Flutter & Dart Android apps engineered by RafayShhh under KreateKode: Kreate Typography 2.1 and Calculator with 150 Math Tools.",
  path: "/apps",
  keywords: [
    "Android Apps",
    "KreateKode",
    "Kreate Typography",
    "Calculator 150 Math Tools",
    "RafayShhh Android",
    "Offline Android apps",
    "APK download",
    "Flutter Dart developer",
  ],
  image: "/images/apps/calculator/hero_showcase.png",
  imageAlt: "KreateKode Flutter & Android Applications Showcase",
});

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
