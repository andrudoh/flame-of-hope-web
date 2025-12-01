import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
// import topImage from "@/assets/sponsor-page/image_1.png";
import topImage from "@/assets/sponsor-page/image_1.jpg";
import batonImage from "@/assets/sponsor-page/image_2.png";
import formImage from "@/assets/sponsor-page/form-bg.png";

const SponsorPage = () => {
  const [formValues, setFormValues] = React.useState({
    organization: "",
    email: "",
    phone: "",
    level: "",
    message: "",
  });
  const [feedback, setFeedback] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  const handleChange =
    (field: keyof typeof formValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `Sponsor Form: ${formValues.organization || formValues.email}`,
          fields: [
            { label: "Organization / Name", value: formValues.organization },
            { label: "Email", value: formValues.email },
            { label: "Phone", value: formValues.phone },
            { label: "Sponsorship Level", value: formValues.level },
            { label: "Message", value: formValues.message },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFeedback({
        type: "success",
        message: "Thank you! Our partnerships team will reach out shortly.",
      });
      setFormValues({
        organization: "",
        email: "",
        phone: "",
        level: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message: "Unable to submit your request. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <SEO
        title="Sponsor"
        description="Partner with Flame of Hope and magnify your impact. Your sponsorship allows us to reach more people, expand our programs, and enable sustainable change in communities that need it most. Align your resources with our mission and amplify hope together."
        keywords="sponsor Flame of Hope, NGO sponsorship Nigeria, corporate sponsorship, community health sponsorship, Plateau State NGO partners, donate to NGO, sponsor health programs"
      />

      <PageHero
        title="Sponsor"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sponsor" }]}
      />

      <section className="bg-white py-16 md:py-20 lg:py-28 space-y-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
            <div className="space-y-4">
              <p className="text-brand-red font-semibold uppercase text-sm tracking-[0.35em]">
                Become a Sponsor
              </p>
              <h2 className="text-3xl font-bold text-brand-black">
                Partner with Flame of Hope and magnify your impact.
              </h2>
              <p className="text-brand-ash text-base leading-relaxed">
                Your sponsorship allows us to reach more people, expand our
                programs, and enable sustainable change in communities that need
                it most. When you align your resources with our mission, we
                amplify hope together.
              </p>
            </div>
            <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow">
              <Image
                src={topImage}
                alt="Sponsorship collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow order-2 lg:order-1 mt-6 lg:mt-0">
              <Image
                src={batonImage}
                alt="Passing the baton"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>

            <div className="space-y-4 order-1 lg:order-2">
              <p className="text-brand-red font-semibold text-lg">
                Why Sponsor Us?
              </p>
              <ul className="space-y-3 text-brand-ash text-sm leading-relaxed">
                <li>
                  <span className="font-semibold text-brand-black">
                    Amplify your impact:&nbsp;
                  </span>
                  Sponsorship directly funds critical initiatives, allowing us
                  to reach more individuals in need.
                </li>
                <li>
                  <span className="font-semibold text-brand-black">
                    Enhance your brand:&nbsp;
                  </span>
                  Align with a meaningful cause, showcasing your commitment to
                  sustainability and community resilience.
                </li>
                <li>
                  <span className="font-semibold text-brand-black">
                    Build strong communities:&nbsp;
                  </span>
                  Support helps us create programs that empower people to build
                  better futures and foster long-term development.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] bg-white rounded-[28px] shadow overflow-hidden border border-white/50"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-brand-black text-white p-8 sm:p-10">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src={formImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-black/80" />
              </div>
              <div className="relative space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Become a Sponsor
                </p>
                <h3 className="text-3xl font-bold">
                  Make a meaningful impact.
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  Partner with us to drive positive change and benefit from a
                  meaningful collaboration. Contact us to learn more about our
                  sponsorship opportunities and how you can get involved.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 space-y-4 bg-[#f8f8f8]">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Organization / Name*
                  <input
                    type="text"
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                    placeholder="Your organization or full name"
                    value={formValues.organization}
                    onChange={handleChange("organization")}
                    required
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Email Address*
                  <input
                    type="email"
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange("email")}
                    required
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Phone Number*
                  <input
                    type="tel"
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                    placeholder="Phone"
                    value={formValues.phone}
                    onChange={handleChange("phone")}
                    required
                  />
                </label>

                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Sponsorship Level
                  <select
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                    value={formValues.level}
                    onChange={handleChange("level")}
                  >
                    <option value="">Select level</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="bronze">Bronze</option>
                  </select>
                </label>

                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Message
                  <textarea
                    rows={4}
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main resize-none bg-white"
                    placeholder="Tell us how you'd like to partner with us"
                    value={formValues.message}
                    onChange={handleChange("message")}
                    required
                  ></textarea>
                </label>

                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center bg-brand-main text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-main"
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Submit Now"}
                </motion.button>
                {feedback ? (
                  <p
                    className={`text-sm ${
                      feedback.type === "success"
                        ? "text-emerald-600"
                        : "text-brand-red"
                    }`}
                  >
                    {feedback.message}
                  </p>
                ) : null}
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

SponsorPage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default SponsorPage;
