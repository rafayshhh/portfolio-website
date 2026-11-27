import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Socials, Profiles & Developer Channels",
  description:
    "Verified developer profiles, channels, and social links for RafayShhh (Muhammad Abdul Rafay). Connect on GitHub, Discord, CurseForge, Modrinth, Chess.com, and X.",
  path: "/socials",
  keywords: [
    "RafayShhh socials",
    "RafayShhh Discord",
    "CurseForge RafayShhh",
    "Modrinth RafayShhh",
    "GitHub RafayShhh",
    "Muhammad Abdul Rafay socials",
  ],
  image: "/images/avatar.jpg",
  imageAlt: "RafayShhh Developer Avatar & Socials Hub",
  type: "profile",
});

export default function SocialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="profile" />
      {children}
    </>
  );
}
