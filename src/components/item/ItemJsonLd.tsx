import React from "react";
import { PERSONAL_INFO } from "@/data/socials";
import { FaqItem } from "@/data/types";

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
  faqs?: FaqItem[];
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
  faqs,
  offers = { price: "0", priceCurrency: "USD" },
}: ItemJsonLdProps) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site").replace(/\/+$/, "");
  const schemaType = type === "mobile" ? "MobileApplication" : "SoftwareApplication";
  const validScreenshots = screenshots?.filter((s) => Boolean(s && s.trim())) ?? [];

  const appSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    url: `${baseUrl}${url}`,
    image: image ? `${baseUrl}${image}` : `${baseUrl}/images/banner.jpg`,
    ...(validScreenshots.length > 0
      ? { screenshot: validScreenshots.map((s) => `${baseUrl}${s}`) }
      : {}),
    applicationCategory: category,
    operatingSystem,
    ...(softwareVersion ? { softwareVersion } : {}),
    ...(codeRepository ? { codeRepository, sameAs: codeRepository } : {}),
    ...(downloadUrl ? { downloadUrl } : {}),
    author: {
      "@id": `${baseUrl}/#person`,
      "@type": "Person",
      name: PERSONAL_INFO.name,
      url: baseUrl,
    },
    isPartOf: {
      "@id": `${baseUrl}/#website`,
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

  if (faqs && faqs.length > 0) {
    payload.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
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
