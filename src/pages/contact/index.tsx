import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const socialLinks = [
  { id: "fb", icon: Facebook, href: "https://facebook.com" },
  { id: "linkedin", icon: Linkedin, href: "https://linkedin.com" },
  { id: "twitter", icon: Twitter, href: "https://twitter.com" },
  { id: "insta", icon: Instagram, href: "https://instagram.com" },
  { id: "youtube", icon: Youtube, href: "https://youtube.com" },
];

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Flame of Hope</title>
      </Head>

      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-gradient-to-b from-white via-white to-brand-light-bg py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-[28px] shadow-lg grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0 overflow-hidden border border-white/60"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Form */}
            <div className="bg-[#f7f8fb] p-6 sm:p-8 lg:p-10 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary mb-3">
                  Have Questions? We&apos;re Listening
                </p>
                <h2 className="text-3xl font-extrabold text-brand-black">
                  Send us a message
                </h2>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                    Name*
                    <input
                      type="text"
                      className="rounded-[18px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                      placeholder="Full name"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                    Email Address*
                    <input
                      type="email"
                      className="rounded-[18px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                      placeholder="Email"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                    Phone Number*
                    <input
                      type="tel"
                      className="rounded-[18px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                      placeholder="Phone"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                    Your Subject*
                    <input
                      type="text"
                      className="rounded-[18px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main bg-white"
                      placeholder="Subject"
                    />
                  </label>
                </div>

                <label className="flex flex-col text-sm font-semibold text-brand-black space-y-2">
                  Comments*
                  <textarea
                    rows={5}
                    className="rounded-[18px] border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-main resize-none bg-gray-50"
                    placeholder="What would you like to discuss?"
                  ></textarea>
                </label>

                <motion.button
                  type="button"
                  className="inline-flex items-center justify-center bg-brand-main text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-main"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Now
                </motion.button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-100 bg-white p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="space-y-2">
                <p className="text-base font-semibold uppercase text-brand-secondary">
                  Office Address
                </p>
                <p className="text-sm font-medium text-brand-black">
                  No. 1A Tafawa Balewa Street (near Township Primary School),
                  Jos – Plateau State.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-base font-semibold uppercase text-brand-secondary">
                  Phone Number
                </p>
                <div className="text-sm text-brand-black space-y-1">
                  <p>07062822822</p>
                  <p>08034044418</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-base font-semibold uppercase text-brand-secondary">
                  Email Address
                </p>
                <Link
                  href="mailto:flameofhopenigeria@yahoo.com"
                  className="text-sm text-brand-main underline"
                >
                  flameofhopenigeria@yahoo.com
                </Link>
              </div>

              <div className="space-y-3">
                <p className="text-base font-semibold uppercase text-brand-secondary">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ id, icon: Icon, href }) => (
                    <motion.a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-brand-red text-white flex items-center justify-center shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-0">
        <div className="w-full">
          <iframe
            title="Flame of Hope Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.802576689313!2d8.87740637502074!3d9.896400792916598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104b9e6d9a5225ff%3A0x3d3f0a9ed1d90e62!2sTafawa%20Balewa%20St%2C%20Jos!5e0!3m2!1sen!2sng!4v1735600000000!5m2!1sen!2sng"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

ContactPage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default ContactPage;
