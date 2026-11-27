import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site").replace(/\/+$/, "");
export const SITE_NAME = "RafayShhh Portfolio";
export const DEFAULT_OG_IMAGE = "/images/banner.jpg";

export interface PageSeoOptions {
  /** Clean title WITHOUT trailing "| RafayShhh" (root layout template appends it automatically unless absolute is set) */
  title: string;
  /** Optional override when exact title string should bypass root template */
  absoluteTitle?: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "profile" | "article";
  noIndex?: boolean;
}

/** Strips any duplicate "| RafayShhh" or "— RafayShhh" suffix before passing title into Next.js template */
export function normalizePageTitle(rawTitle: string): string {
  return rawTitle
    .replace(/\s*[|—–-]\s*RafayShhh(\s*\|\s*RafayShhh)*\s*$/i, "")
    .trim();
}

export function buildPageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = "website",
  noIndex = false,
}: PageSeoOptions): Metadata {
  const cleanTitle = normalizePageTitle(title);
  const fullOgTitle = absoluteTitle || `${cleanTitle} | RafayShhh`;
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : cleanTitle,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullOgTitle,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [
        {
          url: image,
          alt: imageAlt || fullOgTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullOgTitle,
      description,
      creator: "@RafayShhh",
      images: [image],
    },
  };
}
