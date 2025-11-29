import * as React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  TestTube,
  GraduationCap,
  Syringe,
  Heart,
  TrendingUp,
  Baby,
  HandHeart,
} from "lucide-react";

export type CoreFocusAreasProps = {
  className?: string;
};

type FocusArea = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const focusAreas: FocusArea[] = [
  {
    id: "gbv",
    label: "Gender-Based Violence (GBV)",
    icon: Shield,
  },
  {
    id: "hts",
    label: "HIV Testing Services (HTS)",
    icon: TestTube,
  },
  {
    id: "ayp",
    label: "Adolescent & Youth Program (AYP)",
    icon: GraduationCap,
  },
  {
    id: "vaccination",
    label: "Vaccination & Immunization Campaign",
    icon: Syringe,
  },
  {
    id: "srh",
    label: "Sexual Reproductive Health Awareness",
    icon: Heart,
  },
  {
    id: "economic",
    label: "Economic Empowerment",
    icon: TrendingUp,
  },
  {
    id: "ovc",
    label: "OVC Support",
    icon: Baby,
  },
  {
    id: "community",
    label: "Community Outreach",
    icon: HandHeart,
  },
];

export const CoreFocusAreas = ({ className }: CoreFocusAreasProps) => {
  return (
    <section
      className={`bg-brand-light-bg py-12 md:py-20 lg:py-28 ${className || ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-brand-red text-center mb-8 md:mb-12 lg:mb-16">
          Core Focus Areas
        </h2>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {focusAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.id}
                  className="bg-white rounded-xl shadow-sm p-3 sm:p-4 md:p-6 flex flex-col items-center text-center"
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {/* Icon Circle */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-brand-black" />
                  </div>

                  {/* Label */}
                  <p className="text-brand-black text-[10px] sm:text-xs md:text-sm font-medium leading-tight">
                    {area.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
