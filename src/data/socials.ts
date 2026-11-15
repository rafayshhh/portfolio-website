export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: string;
  category: "dev" | "modding" | "community" | "social";
  primary?: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/RafayShhh",
    username: "RafayShhh",
    icon: "github",
    category: "dev",
    primary: true,
  },
  {
    name: "CurseForge",
    url: "https://www.curseforge.com/members/rafayshhh/projects",
    username: "rafayshhh",
    icon: "curseforge",
    category: "modding",
    primary: true,
  },
  {
    name: "Modrinth",
    url: "https://modrinth.com/user/RafayShhh",
    username: "RafayShhh",
    icon: "modrinth",
    category: "modding",
    primary: true,
  },
  {
    name: "Discord",
    url: "https://discord.gg/hMNg2mWSYn",
    username: "Community Discord",
    icon: "discord",
    category: "community",
    primary: true,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@RafayShhh",
    username: "@RafayShhh",
    icon: "youtube",
    category: "social",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/RafayShhh",
    username: "@RafayShhh",
    icon: "twitter",
    category: "social",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/RafayShhh",
    username: "@RafayShhh",
    icon: "instagram",
    category: "social",
  },
  {
    name: "Threads",
    url: "https://threads.net/@RafayShhh",
    username: "@RafayShhh",
    icon: "threads",
    category: "social",
  },
];

export const PERSONAL_INFO = {
  name: "RafayShhh",
  fullName: "Muhammad Abdul Rafay",
  handle: "RafayShhh",
  email: "contact@rafayshhh.site",
  bio: "Minecraft Mod Developer, Android Engineer & Full-Stack Builder crafting high-performance mods, clean mobile experiences, and modern software.",
  status: "Available for projects & mod collaborations",
  domains: ["rafayshhh.site", "rafayshhh.website"],
  discordInvite: "https://discord.gg/hMNg2mWSYn",
};
