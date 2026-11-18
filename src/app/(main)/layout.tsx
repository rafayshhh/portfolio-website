import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SystemHUD } from "@/components/layout/SystemHUD";

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SystemHUD />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
