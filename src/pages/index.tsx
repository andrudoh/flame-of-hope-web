import * as React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CoreFocusAreas } from "@/components/CoreFocusAreas";
import { ImpactSection } from "@/components/ImpactSection";
import { PartnersSection } from "@/components/PartnersSection";
import { GetInvolvedSection } from "@/components/GetInvolvedSection";
import { SEO } from "@/components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Flame of Hope Centre for Poverty and Disease Control - Building Hope, Empowering Communities, Combating Disease. Since 2005, we've been at the forefront of disease prevention, economic empowerment, and support for vulnerable populations in North Central Nigeria."
        keywords="Flame of Hope, disease control, HIV prevention, economic empowerment, community health, Plateau State, Nigeria, NGO, poverty alleviation, gender-based violence, GBV, OVC support, youth programs, health awareness, health education, community outreach"
      />
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
