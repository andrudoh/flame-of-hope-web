import * as React from "react";
import Image from "next/image";
import downloadLogo from "@/assets/landing/sponsors/download.png";
import gaviLogo from "@/assets/landing/sponsors/GAVI_Logo_englisch.webp";
import nwtfLogo from "@/assets/landing/sponsors/NWTF Logo.jpg";
import pepfarLogo from "@/assets/landing/sponsors/PEPFAR Logo.jpg";
import sfhLogo from "@/assets/landing/sponsors/SFH.jpeg";

const partners = [
  { name: "TCI", image: downloadLogo },
  { name: "GAVI", image: gaviLogo },
  { name: "NWTF", image: nwtfLogo },
  { name: "PEPFAR", image: pepfarLogo },
  { name: "SFH", image: sfhLogo },
];

export const PartnersSection = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {partners.map(({ name, image }, index) => (
            <div
              key={`${name}-${index}`}
              className="relative h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={image}
                alt={`${name} logo`}
                height={64}
                width={120}
                className="object-contain h-full w-auto"
                style={{ maxWidth: "150px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
