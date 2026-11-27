import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Minecraft Mods — 5 Open-Source Fabric & Forge Utilities",
  description:
    "Explore and download client-side Minecraft mods engineered by RafayShhh: Shhh Brightness Toggle, Shhh Builder, Shhh Printer, Player Health Indicators & Mobs Health Indicators.",
  path: "/minecraft/mods",
  keywords: [
    "Minecraft mods",
    "Shhh Brightness Toggle",
    "Shhh Builder",
    "Shhh Printer",
    "Customizable Player Health Indicator",
    "Customizable Mobs Health Indicator",
    "Fabric 26.3 mods",
    "RafayShhh mods",
  ],
  image: "/images/minecraft/mods/shhh-brightness-toggle/1.jpg",
  imageAlt: "Minecraft Fabric Utility Mods by RafayShhh",
});

export default function MinecraftModsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="mods" />
      {children}
    </>
  );
}
