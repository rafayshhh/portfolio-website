import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ANDROID_APPS } from "@/data/apps";
import { ItemHero } from "@/components/item/ItemHero";
import { ItemGallery } from "@/components/item/ItemGallery";
import { ItemDocSections } from "@/components/item/ItemDocSections";
import { ItemJsonLd } from "@/components/item/ItemJsonLd";
import { buildPageMetadata, normalizePageTitle } from "@/lib/seo";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ANDROID_APPS.map((app) => ({
    id: app.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = ANDROID_APPS.find((a) => a.id === id);

  if (!app) {
    return {
      title: "App Not Found",
      robots: { index: false, follow: false },
    };
  }

  const primaryShowcase =
    app.gallery?.find((g) => g.isPrimary)?.src || app.gallery?.[0]?.src || app.image;

  return buildPageMetadata({
    title: normalizePageTitle(app.seo?.metaTitle || `${app.title} — Android Mobile App`),
    description: app.seo?.metaDescription || app.description,
    path: `/apps/${app.id}`,
    keywords: app.seo?.keywords,
    image: primaryShowcase,
    imageAlt: app.gallery?.[0]?.alt || `${app.title} Preview`,
  });
}

export default async function AppDetailPage({ params }: Props) {
  const { id } = await params;
  const appIndex = ANDROID_APPS.findIndex((a) => a.id === id);
  const app = appIndex >= 0 ? ANDROID_APPS[appIndex] : undefined;

  if (!app) {
    notFound();
  }

  const primaryShowcase = app.gallery?.find((g) => g.isPrimary)?.src || app.image;
  const prevApp = appIndex > 0 ? ANDROID_APPS[appIndex - 1] : null;
  const nextApp = appIndex < ANDROID_APPS.length - 1 ? ANDROID_APPS[appIndex + 1] : null;

  return (
    <div className="pt-8 pb-24 relative transition-colors duration-200">
      <ItemJsonLd
        name={app.title}
        description={app.description}
        url={`/apps/${app.id}`}
        image={primaryShowcase || app.image}
        screenshots={app.gallery?.map((g) => g.src)}
        category={app.category}
        type="mobile"
        softwareVersion={app.version}
        operatingSystem={app.minAndroidVersion}
        codeRepository={app.githubUrl}
        downloadUrl={app.apkDownloadUrl || app.playStoreUrl}
        breadcrumbs={[
          { name: "Overview", url: "/" },
          { name: "Android Apps", url: "/apps" },
          { name: app.title, url: `/apps/${app.id}` },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Section */}
        <ItemHero
          title={app.title}
          tagline={app.tagline}
          description={app.description}
          category={app.category}
          status={app.status}
          versionOrPlatform={app.version}
          image={app.image}
          theme="cyan"
          backHref="/apps"
          backLabel="All Mobile Apps"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Android Apps", href: "/apps" },
            { label: app.title },
          ]}
          playStoreUrl={app.playStoreUrl}
          webAppUrl={app.webAppUrl}
          githubUrl={app.githubUrl}
          apkDownloadUrl={app.apkDownloadUrl}
        />

        {/* Gallery */}
        <ItemGallery gallery={app.gallery} title={app.title} theme="cyan" />

        {/* Detailed Documentation & Specs */}
        <ItemDocSections
          features={app.features}
          specifications={app.specifications}
          documentation={app.documentation}
          prevItem={
            prevApp ? { id: prevApp.id, title: prevApp.title, href: `/apps/${prevApp.id}` } : null
          }
          nextItem={
            nextApp ? { id: nextApp.id, title: nextApp.title, href: `/apps/${nextApp.id}` } : null
          }
          theme="cyan"
        />
      </div>
    </div>
  );
}
