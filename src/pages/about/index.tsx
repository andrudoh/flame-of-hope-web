import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import maryUdohImage from "@/assets/about-page/mary_udoh.jpeg";
import andrewHenryImage from "@/assets/about-page/andrew_henry.jpeg";
import pancinRetImage from "@/assets/about-page/pancin_ret.jpeg";
import naomiYohannaImage from "@/assets/about-page/naomi_yohanna.png";
import sundayYakubuImage from "@/assets/about-page/sunday_yakubu.jpeg";
import populationImage from "@/assets/about-page/first.png";
import aboutFlameImage from "@/assets/landing/about/about_2.png";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ImpactSection } from "@/components/ImpactSection";

const PopulationSegmentsCopy = `The United Nation Organization (UNO) through its agency for Population Activities (UNFPA) categorized population into different groups: The Upper, Middle and The Lower groups. Research has shown that the lower group is made up of mainly youths, unemployed, women, widows and the aged; who sometimes could not afford the basic means of livelihood and thereby live in poverty and lack and are susceptible to various diseases, and are also exposed to various criminal tendencies which in-turn affects the entire society.`;

const AboutNarrativeCopy = `Flame-of-Hope was established in 2005 as an indigenous, non-governmental and non-profit organization out of concern for the plight of the people in the lower-class ravaged by poverty and the alarming scourge and spread of HIV/AIDS pandemic in Nigeria in general. To rekindle hope by generating innovative strategies, through tactical approaches and programs that will reverse the prevailing trends, and make life more meaningful (for both the infected and the uninfected) to be able to make informed and rational decision about their lives on issues bothering on their health and economic condition now and in the future.`;

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Flame of Hope</title>
      </Head>
      <>
        <PageHero
          title="About Us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />

        {/* Population Segment Section */}
        <section className="bg-brand-light-bg py-10 md:py-14 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="w-full h-[260px] lg:min-h-[413px]">
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white">
                  <Image
                    src={populationImage}
                    alt="Population segments served by Flame of Hope"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-brand-red">
                  Population Segments and Impact
                </h2>
                <p className="text-sm md:text-base font-normal text-brand-ash">
                  {PopulationSegmentsCopy}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative */}
        <section className="bg-white py-10 md:py-14 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
            <div className="text-center">
              <span className="text-sm md:text-base lg:text-lg font-medium text-brand-black leading-9 max-w-5xl mx-auto">
                {AboutNarrativeCopy}
              </span>
            </div>
          </div>
        </section>

        {/* About FLAME-OF-HOPE Section */}
        <section className="bg-brand-light-bg py-12 md:py-16 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
              {/* Left Side - Text */}
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-xl md:text-2xl font-extrabold text-brand-red">
                  About FLAME-OF-HOPE
                </h2>
                <p className="text-sm md:text-base text-brand-ash font-normal">
                  FLAME-OF-HOPE Centre for Poverty and Disease Control is a
                  charity, non-governmental, non-religious Organization
                  registered in Nigeria in 2006 under the Companies and Allied
                  Matters Acts 1990 (Registration No. CAC/IT/NO 22162).
                </p>
              </div>

              {/* Right Side - Image Placeholder */}
              <div className="w-full flex justify-end">
                <div className="w-full max-w-[513px] aspect-square overflow-hidden">
                  <Image
                    src={aboutFlameImage}
                    alt="Flame of Hope symbolic flame"
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="bg-brand-light-bg py-10 md:py-14 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Our Mission Card */}
              <div className="bg-brand-main text-white rounded-3xl p-8 lg:p-10 space-y-8">
                <h3 className="text-2xl lg:text-3xl font-bold">Our Mission</h3>
                <p className="w-full text-sm font-normal md:text-base lg:w-[80%]">
                  To provide innovative approaches to Diseases
                  prevention/control and Economic Enhancement activities,
                  through Awareness, Advocacy, Mobilization, Education,
                  Training, Skill Acquisition and Research.
                </p>
              </div>

              {/* Our Vision Card */}
              <div className="bg-brand-secondary text-white rounded-3xl p-8 lg:p-10 space-y-8">
                <h3 className="text-2xl lg:text-3xl font-bold">Our Vision</h3>
                <p className="w-full text-sm font-normal md:text-base lg:w-[80%]">
                  FLAME-OF-HOPE envisages a society where maximum attention is
                  given to combating various factors which prevent the Youth,
                  Women and Children from attaining their full potentials and
                  self actualization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ImpactSection />

        {/* Core Focus vs General Program Areas */}
        <section className="bg-brand-light-bg py-10 md:py-14 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[28px] overflow-hidden shadow-md">
              <div className="bg-[#0d8a6d] text-white p-8 lg:p-10 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                    Core Focus
                  </p>
                  <h3 className="text-2xl font-semibold">Core Focus</h3>
                </div>
                <ul className="space-y-3 text-sm md:text-base">
                  {[
                    "Key Population Intervention (KPIs)",
                    "HIV Testing Services (HTS)",
                    "Adolescent & Youth Program (AYP)",
                    "Vaccination & Immunization Campaign",
                    "Sexual Reproductive Health Awareness",
                    "Economic Empowerment",
                    "OVC support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-black text-white p-8 lg:p-10 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    General Program Areas
                  </p>
                  <h3 className="text-2xl font-semibold">
                    General Program Areas
                  </h3>
                </div>
                <ul className="space-y-3 text-sm md:text-base">
                  {[
                    "HIV/AIDS & TB Prevention/Control Activities",
                    "Viral Hepatitis and Cancer Screening",
                    "Reproductive Health Awareness",
                    "Attitude Modification Campaign",
                    "Advocacy & Sensitization Campaign",
                    "Youth Development Programs",
                    "Capacity Building & Support",
                    "Women & Widows Empowerment",
                    "Peace building & Conflict Resolution",
                    "OVC rehabilitation & Reintegration",
                    "Networking & Research",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section className="bg-brand-light-bg py-10 md:py-14 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%] space-y-10">
            <h2 className="text-center text-xl md:text-2xl font-bold text-brand-red">
              Our Board Of Trustees
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {[
                { name: "Mary Udoh", image: maryUdohImage },
                { name: "Andrew Henry", image: andrewHenryImage },
                { name: "Pancin Ret", image: pancinRetImage },
                { name: "Naomi Yohanna", image: naomiYohannaImage },
                { name: "Sunday Yakubu", image: sundayYakubuImage },
              ].map((trustee, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="relative mx-auto w-[150px] h-[230px]">
                    <div
                      className="pointer-events-none absolute inset-0 border-[12px] border-brand-main rounded-t-[16px] rounded-b-[999px]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
                      }}
                    ></div>
                    <div
                      className="pointer-events-none absolute inset-0 border-[12px] border-brand-red rounded-t-[16px] rounded-b-[999px]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)",
                      }}
                    ></div>
                    <div className="relative w-full h-full rounded-t-[16px] rounded-b-[999px] overflow-hidden bg-gray-200">
                      <Image
                        src={trustee.image}
                        alt={trustee.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black">
                      {trustee.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </>
  );
};

AboutPage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default AboutPage;
