import * as React from "react";

const partners = [
  { label: "Logoipsum", color: "text-[#0f8f5c]" },
  { label: "Logoipsum", color: "text-gray-400" },
  { label: "Logoipsum", color: "text-gray-400" },
  { label: "Logoipsum", color: "text-gray-400" },
  { label: "Logoipsum", color: "text-gray-200" },
];

export const PartnersSection = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map(({ label, color }, index) => (
            <span
              key={`${label}-${index}`}
              className={`text-xl md:text-2xl font-semibold uppercase tracking-widest ${color}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
