import * as React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import programImageOne from "@/assets/programs-page/image_1.png";
import programImageTwo from "@/assets/programs-page/image_2.png";
import programImageThree from "@/assets/programs-page/image_3.png";
import programImageFour from "@/assets/programs-page/image_4.png";
import programImageFive from "@/assets/programs-page/image_5.jpeg";

type ProgramHighlight = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  accent: "brand-red" | "brand-secondary";
};

const programHighlights: ProgramHighlight[] = [
  {
    id: "prevention",
    title: "Prevention Awareness",
    description:
      "We reach key populations and general population with behavioral change communication, peer education, HIV/TB/Hepatitis screening, and reproductive health services.",
    image: programImageOne,
    accent: "brand-red",
  },
  {
    id: "gbv",
    title: "Gender Based Violence (GBV)",
    description:
      "We provide support and counseling to survivors of gender-based violence (GBV) and help them rebuild their lives. We also conduct awareness campaigns to prevent GBV and promote gender equality.",
    image: programImageFive,
    accent: "brand-red",
  },
  {
    id: "economic",
    title: "Economic Empowerment",
    description:
      "Our vocational training and business orientation programs improve the financial independence of women and youth. We provide skill acquisition for youths, women and girls to help them achieve dignity through labor and entrepreneurship.",
    image: programImageTwo,
    accent: "brand-red",
  },
  {
    id: "ayp",
    title: "Adolescent & Youth Program (AYP)",
    description:
      "We empower adolescents and youth with sexual reproductive health education, modern contraceptive awareness, and campaigns that promote healthy behaviors and life skills.",
    image: programImageThree,
    accent: "brand-red",
  },
  {
    id: "ovc",
    title: "OVC Care and Support",
    description:
      "We provide educational and nutritional support for Orphans and Vulnerable Children (OVC) in Plateau State. This includes scholarships, school supplies, and nutritional assistance.",
    image: programImageFour,
    accent: "brand-red",
  },
];

const ProgramsPage = () => {
  return (
    <>
      <SEO
        title="Programs"
        description="Discover Flame of Hope's comprehensive programs including Prevention Awareness, Economic Empowerment, Adolescent & Youth Programs (AYP), and OVC Care and Support. We create lasting change through initiatives that strengthen families and empower individuals across North Central Nigeria."
        keywords="Flame of Hope programs, HIV prevention, economic empowerment, youth programs, OVC support, community health programs, Plateau State health initiatives, disease prevention, skill acquisition, vocational training"
      />

      <PageHero
        title="What We Do"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]}
      />

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-brand-black font-medium text-base md:text-lg">
          At Flame of Hope, we are dedicated to creating lasting change through
          programs that address the most pressing needs in our communities. Our
          initiatives strengthen families, empower individuals, and promote
          sustainable development across North Central Nigeria.
        </div>
      </section>

      <section className="bg-brand-light-bg py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[75%] space-y-10 lg:space-y-14">
          {programHighlights.map((program, index) => {
            const reverse = index % 2 === 1;
            const accentClass =
              program.accent === "brand-red"
                ? "text-brand-red"
                : "text-brand-secondary";
            return (
              <motion.div
                key={program.id}
                className={`relative bg-brand-light-bg px-4 py-8 lg:px-10 flex flex-col ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } lg:h-[450px]`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[240px] sm:h-[320px] lg:h-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="relative bg-white shadow-sm p-6 md:p-8 lg:w-1/2 flex flex-col justify-center gap-4">
                  <span
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-white border border-brand-white ${
                      reverse
                        ? "right-0 translate-x-1/2"
                        : "left-0 -translate-x-1/2"
                    }`}
                    style={{
                      clipPath: reverse
                        ? "polygon(0 0, 100% 50%, 0 100%)"
                        : "polygon(100% 0, 0 50%, 100% 100%)",
                    }}
                  ></span>
                  <div>
                    <p className={`text-2xl font-extrabold ${accentClass}`}>
                      {program.title}
                    </p>
                    <div className="mt-3 h-1 w-16 rounded-full bg-brand-main"></div>
                  </div>
                  <p className="text-brand-ash text-sm font-normal md:text-base ">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

ProgramsPage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default ProgramsPage;
