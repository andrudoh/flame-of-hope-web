import * as React from "react";
import Image from "next/image";
import downloadLogo from "@/assets/landing/sponsors/download.png";
import nwtfLogo from "@/assets/landing/sponsors/NWTF Logo.jpg";
import pepfarLogo from "@/assets/landing/sponsors/PEPFAR Logo.jpg";
import sfhLogo from "@/assets/landing/sponsors/SFH.jpeg";
import ivac from "@/assets/landing/sponsors/IVAC.jpg";
import wava from "@/assets/landing/sponsors/WAVA.jpg";
import whaLogo from "@/assets/landing/sponsors/WHA_logo.png";

const partners = [
  {
    name: "World Hepatitis Alliance",
    image: whaLogo,
    href: "https://www.worldhepatitisalliance.org/",
  },
  {
    name: "The Challenge Initiative (TCI)",
    image: downloadLogo,
    href: "https://tciurbanhealth.org/",
  },
  {
    name: "Nigerian Women Trust Fund (NWTF)",
    image: nwtfLogo,
    href: "https://womenfund.org/",
  },
  {
    name: "US Embassy in Nigeria (PEPFAR)",
    image: pepfarLogo,
    href: "https://ng.usembassy.gov/pepfar/",
  },
  {
    name: "Society for Family Health (SFH)",
    image: sfhLogo,
    href: "https://sfhnigeria.org/",
  },
  {
    name: "International Vaccine Access Center (IVAC)",
    image: ivac,
    href: "https://publichealth.jhu.edu/ivac",
  },
  {
    name: "Women Advocates for Vaccine Access (WAVA)",
    image: wava,
    href: "https://wavang.org/",
  },
];

export const PartnersSection = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto p-2 lg:gap-6 lg:overflow-visible lg:p-0 xl:gap-8">
          {partners.map(({ name, image, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} (opens in a new tab)`}
              className="group relative flex w-28 shrink-0 flex-col items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-black sm:w-32 lg:w-auto lg:min-w-0 lg:flex-1"
            >
              {/* Logo Container */}
              <div className="relative flex h-12 w-full justify-center grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 group-focus:opacity-100 md:h-16">
                <Image
                  src={image}
                  alt={`${name} logo`}
                  height={64}
                  width={120}
                  className="h-full w-full max-w-[150px] object-contain"
                />
                {/* Desktop Tooltip */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-brand-black text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:-translate-y-1 group-focus-visible:-translate-y-1 transition-all duration-300 pointer-events-none z-10 shadow-lg w-max max-w-44 text-center"
                >
                  {name}
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5">
                    <div className="w-3 h-3 bg-brand-black rotate-45 shadow-sm"></div>
                  </div>
                </div>
              </div>
              {/* Mobile/Tablet Name (visible below logo) */}
              <p className="lg:hidden mt-3 text-xs sm:text-sm text-brand-ash group-focus:text-brand-black text-center font-medium max-w-[140px] leading-tight transition-colors duration-200">
                {name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
