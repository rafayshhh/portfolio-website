import { MetadataRoute } from "next";
import { ANDROID_APPS } from "@/data/apps";
import { MINECRAFT_MODS, MINECRAFT_PLUGINS, MINECRAFT_RESOURCE_PACKS } from "@/data/mods";
import { SOFTWARE_PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rafayshhh.site").replace(/\/+$/, "");
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/minecraft`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/minecraft/mods`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/apps`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/socials`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  // Include Plugins / Resource Packs hubs only when real entries exist
  if (MINECRAFT_PLUGINS.length > 0) {
    staticRoutes.push({
      url: `${baseUrl}/minecraft/plugins`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  if (MINECRAFT_RESOURCE_PACKS.length > 0) {
    staticRoutes.push({
      url: `${baseUrl}/minecraft/resource-packs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  const modRoutes: MetadataRoute.Sitemap = MINECRAFT_MODS.map((mod) => ({
    url: `${baseUrl}/minecraft/mods/${mod.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const pluginRoutes: MetadataRoute.Sitemap = MINECRAFT_PLUGINS.map((plugin) => ({
    url: `${baseUrl}/minecraft/plugins/${plugin.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const packRoutes: MetadataRoute.Sitemap = MINECRAFT_RESOURCE_PACKS.map((pack) => ({
    url: `${baseUrl}/minecraft/resource-packs/${pack.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const appRoutes: MetadataRoute.Sitemap = ANDROID_APPS.map((app) => ({
    url: `${baseUrl}/apps/${app.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  const projectRoutes: MetadataRoute.Sitemap = SOFTWARE_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...modRoutes,
    ...pluginRoutes,
    ...packRoutes,
    ...appRoutes,
    ...projectRoutes,
  ];
}
