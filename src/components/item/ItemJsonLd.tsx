import React from "react";
import { PERSONAL_INFO } from "@/data/socials";

export interface ItemBreadcrumb {
  name: string;
  url: string;
}

export interface ItemJsonLdProps {
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  image?: string;
  screenshots?: string[];
  category: string;
  type: "mobile" | "software" | "game";
  operatingSystem?: string;
  softwareVersion?: string;
  codeRepository?: string;
  downloadUrl?: string;
  breadcrumbs?: ItemBreadcrumb[];
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export function ItemJsonLd({
  name,
  alternateName,
  description,
  url,
  image,
  screenshots,
  category,
  type,
  operatingSystem = "Cross-Platform",
  softwareVersion,
  codeRepository,
  downloadUrl,
  breadcrumbs,
  offers = { price: "0", priceCurrency: "USD" },
}: ItemJsonLdProps) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site").replace(/\/+$/, "");
  const schemaType = type === "mobile" ? "MobileApplication" : "SoftwareApplication";

  const appSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    url: `${baseUrl}${url}`,
    image: image ? `${baseUrl}${image}` : `${baseUrl}/images/avatar.jpg`,
    ...(screenshots && screenshots.length > 0
      ? { screenshot: screenshots.map((s) => `${baseUrl}${s}`) }
      : {}),
    applicationCategory: category,
    operatingSystem,
    ...(softwareVersion ? { softwareVersion } : {}),
    ...(codeRepository ? { codeRepository, sameAs: codeRepository } : {}),
    ...(downloadUrl ? { downloadUrl } : {}),
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
      url: baseUrl,
    },
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
    },
  };

  const payload: Record<string, unknown>[] = [appSchema];

  if (breadcrumbs && breadcrumbs.length > 0) {
    payload.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${baseUrl}${crumb.url === "/" ? "" : crumb.url}`,
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
