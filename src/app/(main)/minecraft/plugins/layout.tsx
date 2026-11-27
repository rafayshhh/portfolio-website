import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Minecraft Server Plugins — Paper & Purpur Pipeline",
  description:
    "Server plugin development status and architectural roadmap by RafayShhh. Currently focused on client-side Fabric and Forge utility mods.",
  path: "/minecraft/plugins",
  noIndex: true,
});

export default function MinecraftPluginsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
