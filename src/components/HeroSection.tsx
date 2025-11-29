import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroImg from "@/assets/landing/hero-image.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={heroImg}
            alt="Flame of Hope - Community healthcare and empowerment"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Headline - Italic style like design */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold italic text-brand-main leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Building Hope, Empowering
            <br />
            Communities, Combating Disease
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-white text-base sm:text-lg md:text-[16px] max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Since 2005, Flame-of-Hope Centre for Disease Control has been at the
            forefront of disease prevention, economic empowerment, and support
            for vulnerable populations in North Central Nigeria.
          </motion.p>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/programs"
              className="inline-block bg-brand-red text-white px-8 py-3 lg:px-10 lg:py-4 rounded-md transition-fx text-base lg:text-lg font-medium hover:bg-white hover:text-brand-red"
            >
              Discover Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
