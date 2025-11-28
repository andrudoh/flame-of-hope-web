import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export type LayoutProps = {
  children: React.ReactNode;
  withTopPadding?: boolean;
};

export const Layout = ({ children, withTopPadding = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-brand-black flex flex-col">
      <Navbar />
      <main className={`flex-1 ${withTopPadding ? "pt-[72.75px]" : ""}`.trim()}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
