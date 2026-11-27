import { redirect } from "next/navigation";

export default function LegacyModsRedirectPage() {
  redirect("/minecraft/mods");
}
