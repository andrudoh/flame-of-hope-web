import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutCollage from "@/assets/landing/about/about_collage.png";

export type AboutSectionProps = {
  className?: string;
};

export const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section
      className={`bg-brand-light-bg py-12 md:py-20 lg:py-28 ${className || ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 md:space-y-6 order-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-brand-red">
              About FLAME-OF-HOPE
            </h2>
            <p className="text-brand-ash text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
              Flame-of-Hope was established to address the alarming spread of
              diseases and economic challenges facing marginalized populations
              in Nigeria. We focus on prevention, care, and economic empowerment
              for Female Sex Workers (FSWs), Adolescent Youth, and Orphans and
              Vulnerable Children (OVC).
            </p>
            <Link
              href="/about"
              className="inline-block bg-brand-red text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full transition-fx text-sm md:text-base font-medium hover:bg-white hover:text-brand-red"
            >
              Learn More
            </Link>
          </div>

          {/* Right Side - Image Collage */}
          <div className="relative w-full max-w-[450px] mx-auto lg:ml-auto lg:mr-0 order-2">
            <Image
              src={aboutCollage}
              alt="Flame of Hope - Hands holding a heart and flame representing care and hope"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
