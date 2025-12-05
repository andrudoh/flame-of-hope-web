import * as React from "react";
import Image from "next/image";
import downloadLogo from "@/assets/landing/sponsors/download.png";
import gaviLogo from "@/assets/landing/sponsors/GAVI_Logo_englisch.webp";
import nwtfLogo from "@/assets/landing/sponsors/NWTF Logo.jpg";
import pepfarLogo from "@/assets/landing/sponsors/PEPFAR Logo.jpg";
import sfhLogo from "@/assets/landing/sponsors/SFH.jpeg";
import ivac from "@/assets/landing/sponsors/IVAC.jpg";
import wava from "@/assets/landing/sponsors/WAVA.jpg";

const partners = [
  { name: "The Challenge Initiative (TCI)", image: downloadLogo },
  // {
  //   name: "Global Alliance for Vaccines and Immunization (GAVI)",
  //   image: gaviLogo,
  // },
  { name: "Nigerian Women Trust Fund (NWTF)", image: nwtfLogo },
  {
    name: "US Embassy in Nigeria (PEPFAR)",
    image: pepfarLogo,
  },
  { name: "Society for Family Health (SFH)", image: sfhLogo },
  { name: "International Vaccine Access Center (IVAC)", image: ivac },
  { name: "Women Advocates for Vaccine Access (WAVA)", image: wava },
];

export const PartnersSection = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {partners.map(({ name, image }, index) => (
            <div
              key={`${name}-${index}`}
              className="group relative flex flex-col items-center focus-within:outline-none"
              tabIndex={0}
            >
              {/* Logo Container */}
              <div className="relative h-12 md:h-16 w-auto grayscale hover:grayscale-0 group-focus:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 group-focus:opacity-100">
                <Image
                  src={image}
                  alt={`${name} logo`}
                  height={64}
                  width={120}
                  className="object-contain h-full w-auto"
                  style={{ maxWidth: "150px" }}
                />
                {/* Desktop Tooltip */}
                <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-brand-black text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none z-10 shadow-lg max-w-sm whitespace-normal text-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
