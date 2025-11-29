import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import volunteerImage from "@/assets/programs-page/image_3.png";

const VolunteerPage = () => {
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    availability: "",
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
          subject: `Volunteer Form: ${formValues.name}`,
          fields: [
            { label: "Name", value: formValues.name },
            { label: "Email", value: formValues.email },
            { label: "Phone", value: formValues.phone },
            { label: "Gender", value: formValues.gender },
            { label: "Availability", value: formValues.availability },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFeedback({
        type: "success",
        message: "Thank you for volunteering! Our team will contact you soon.",
      });
      setFormValues({
        name: "",
        email: "",
        phone: "",
        gender: "",
        availability: "",
      });
    } catch (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message: "Unable to submit your details. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Volunteer | Flame of Hope</title>
      </Head>

      <PageHero
        title="Volunteer"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Volunteer" }]}
      />

      <section className="bg-gradient-to-b from-white via-white to-brand-light-bg py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-[28px] shadow-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-white/60"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-72 sm:h-96 lg:h-full">
              <Image
                src={volunteerImage}
                alt="Volunteer with Flame of Hope"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/45"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                    Become a Volunteer
                  </p>
                  <h2 className="mt-4 text-3xl font-bold">
                    Join Flame of Hope and help us make a real difference.
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-white/90">
                  Whether you have a few hours to give or can commit long-term,
                  your support is invaluable. Stand with us as we empower
                  vulnerable communities across Plateau State.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <p className="text-xl font-bold text-brand-black">
                Be part of a community: connect with like-minded people and work
                towards a common goal.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Name*
                  <input
                    type="text"
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                    placeholder="Full name"
                    value={formValues.name}
                    onChange={handleChange("name")}
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
                  Gender
                  <select
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                    value={formValues.gender}
                    onChange={handleChange("gender")}
                  >
                    <option value="">Select gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="prefer-not-say">Prefer not to say</option>
                  </select>
                </label>

                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Availability
                  <textarea
                    rows={4}
                    className="rounded-[16px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main resize-none bg-white"
                    placeholder="Tell us how you’d like to serve"
                    value={formValues.availability}
                    onChange={handleChange("availability")}
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

          <div className="mt-4 text-xs text-brand-ash">
            Already volunteering with us?{" "}
            <Link href="/contact" className="text-brand-main underline">
              Get in touch.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

VolunteerPage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default VolunteerPage;
