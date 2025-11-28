import * as React from "react";
import Head from "next/head";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CoreFocusAreas } from "@/components/CoreFocusAreas";
import { ImpactSection } from "@/components/ImpactSection";
import { PartnersSection } from "@/components/PartnersSection";
import { GetInvolvedSection } from "@/components/GetInvolvedSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Flame of Hope | Home</title>
        <meta
          name="description"
          content="Flame-of-Hope Centre for Disease Control - Building Hope, Empowering Communities, Combating Disease"
        />
      </Head>
      <HeroSection />
      <AboutSection />
      <CoreFocusAreas />
      <ImpactSection />
      <PartnersSection />
      <GetInvolvedSection />
    </>
  );
};

export default HomePage;
