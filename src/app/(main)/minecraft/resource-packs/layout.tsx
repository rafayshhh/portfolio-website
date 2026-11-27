import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Minecraft Resource Packs — Texture & GUI Roadmap",
  description:
    "Resource pack status and pixel sprite overview by RafayShhh. Pixel-art heart textures are bundled directly in Health Indicators mods.",
  path: "/minecraft/resource-packs",
  noIndex: true,
});

export default function MinecraftResourcePacksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
