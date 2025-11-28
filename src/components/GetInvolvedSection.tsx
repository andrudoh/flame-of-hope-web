import * as React from "react";
import Image from "next/image";
import volunteerImage from "@/assets/landing/get-involved/volunteer.png";
import sponsorImage from "@/assets/landing/get-involved/sponsor.png";

const initiatives = [
  {
    id: "volunteer",
    title: "Volunteer with Us",
    description:
      "Volunteers are the heartbeat of our organization. Whether you're a professional, student, or simply someone with a passion for helping others, your time and skills can make a world of difference. From organizing community outreach programs to assisting in our clinics and education centers, there's a role for everyone at FLAME-OF-HOPE.",
    cta: "Volunteer",
    image: volunteerImage,
    accentColor: "bg-[#b1e7d4]",
  },
  {
    id: "sponsor",
    title: "Become a Sponsor",
    description:
      "By becoming a sponsor, you directly contribute to our programs that provide essential resources, education, and healthcare to those who need it most. Your sponsorship can help fund medical outreach, support economic empowerment initiatives, and provide care for orphans, widows, and the elderly.",
    cta: "Sponsor",
    image: sponsorImage,
    accentColor: "bg-[#c9f4d9]",
  },
];

export const GetInvolvedSection = () => {
  return (
    <section className="bg-brand-light-bg py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[65%] space-y-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold italic text-brand-red">
          Get Involved / Donate
        </h2>

        <div className="space-y-6">
          {initiatives.map(
            ({ id, title, description, cta, image, accentColor }) => (
              <article
                key={id}
                className="flex flex-col md:flex-row items-center gap-6 rounded-[999px] bg-white px-4 py-6 md:px-8 md:py-6 shadow-sm"
              >
                <div className="w-full md:w-64 lg:w-72 overflow-hidden rounded-[999px]">
                  <div className="relative w-full h-40 md:h-48">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold text-brand-black">
                    {title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-ash leading-relaxed">
                    {description}
                  </p>
                </div>

                <div
                  className={`w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full text-brand-black text-sm font-semibold ${accentColor}`}
                >
                  {cta}
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};
