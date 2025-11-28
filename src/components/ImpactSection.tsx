import * as React from "react";
import Image from "next/image";
import impactCollage from "@/assets/landing/impact/impact_collage.png";

export type ImpactSectionProps = {
  className?: string;
};

export const ImpactSection = ({ className }: ImpactSectionProps) => {
  return (
    <section
      className={`bg-brand-light-bg py-12 md:py-20 lg:py-28 ${className || ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - Shows first on mobile, second on desktop */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-brand-red">
              Our Impact
            </h2>
            <p className="text-brand-ash text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
              Since our inception, we have provided healthcare services to
              thousands of people, trained hundreds of women and youth in
              vocational skills, and supported Orphans and Vulnerable Children
              with education and nutrition.
            </p>
          </div>

          {/* Photo Collage - Shows second on mobile, first on desktop */}
          <div className="relative w-full max-w-[450px] mx-auto lg:mx-0 order-2 lg:order-1">
            <Image
              src={impactCollage}
              alt="Flame of Hope impact - community healthcare and empowerment activities"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
