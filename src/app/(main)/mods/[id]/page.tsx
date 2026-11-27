import { redirect } from "next/navigation";
import { MINECRAFT_MODS } from "@/data/mods";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MINECRAFT_MODS.map((mod) => ({
    id: mod.id,
  }));
}

export default async function LegacyModRedirectPage({ params }: Props) {
  const { id } = await params;
  redirect(`/minecraft/mods/${id}`);
}
