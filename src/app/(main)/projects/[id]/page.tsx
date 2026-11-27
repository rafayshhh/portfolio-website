import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOFTWARE_PROJECTS } from "@/data/projects";
import { ItemHero } from "@/components/item/ItemHero";
import { ItemGallery } from "@/components/item/ItemGallery";
import { ItemDocSections } from "@/components/item/ItemDocSections";
import { ItemJsonLd } from "@/components/item/ItemJsonLd";
import { buildPageMetadata, normalizePageTitle } from "@/lib/seo";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SOFTWARE_PROJECTS.map((proj) => ({
    id: proj.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const proj = SOFTWARE_PROJECTS.find((p) => p.id === id);

  if (!proj) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const primaryShowcase =
    proj.gallery?.find((g) => g.isPrimary)?.src || proj.gallery?.[0]?.src || proj.image;

  return buildPageMetadata({
    title: normalizePageTitle(proj.seo?.metaTitle || `${proj.title} — Software Engineering Project`),
    description: proj.seo?.metaDescription || proj.description,
    path: `/projects/${proj.id}`,
    keywords: proj.seo?.keywords,
    image: primaryShowcase,
    imageAlt: proj.gallery?.[0]?.alt || `${proj.title} Preview`,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const projIndex = SOFTWARE_PROJECTS.findIndex((p) => p.id === id);
  const proj = projIndex >= 0 ? SOFTWARE_PROJECTS[projIndex] : undefined;

  if (!proj) {
    notFound();
  }

  const primaryShowcase = proj.gallery?.find((g) => g.isPrimary)?.src || proj.image;
  const prevProj = projIndex > 0 ? SOFTWARE_PROJECTS[projIndex - 1] : null;
  const nextProj =
    projIndex < SOFTWARE_PROJECTS.length - 1 ? SOFTWARE_PROJECTS[projIndex + 1] : null;

  return (
    <div className="pt-8 pb-24 relative transition-colors duration-200">
      <ItemJsonLd
        name={proj.title}
        description={proj.description}
        url={`/projects/${proj.id}`}
        image={primaryShowcase || proj.image}
        screenshots={proj.gallery?.map((g) => g.src)}
        category={proj.category}
        type="software"
        operatingSystem="Cross-Platform"
        codeRepository={proj.githubUrl}
        breadcrumbs={[
          { name: "Overview", url: "/" },
          { name: "Software Projects", url: "/projects" },
          { name: proj.title, url: `/projects/${proj.id}` },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ItemHero
          title={proj.title}
          tagline={proj.tagline}
          description={proj.description}
          category={proj.category}
          status="Production Ready"
          versionOrPlatform={proj.techStack.slice(0, 3).join(" • ")}
          image={proj.image}
          theme="red"
          backHref="/projects"
          backLabel="All Software Projects"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Software Projects", href: "/projects" },
            { label: proj.title },
          ]}
          demoUrl={proj.demoUrl}
          githubUrl={proj.githubUrl}
        />

        <ItemGallery gallery={proj.gallery} title={proj.title} theme="red" />

        <ItemDocSections
          features={proj.highlights}
          specifications={proj.specifications}
          documentation={proj.documentation}
          prevItem={
            prevProj
              ? { id: prevProj.id, title: prevProj.title, href: `/projects/${prevProj.id}` }
              : null
          }
          nextItem={
            nextProj
              ? { id: nextProj.id, title: nextProj.title, href: `/projects/${nextProj.id}` }
              : null
          }
          theme="red"
        />
      </div>
    </div>
  );
}
