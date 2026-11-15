import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RafayShhh — Developer & Modder Portfolio",
    short_name: "RafayShhh",
    description: "Official portfolio of RafayShhh. Minecraft mods, Android native applications, and software engineering projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#ef4444",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
