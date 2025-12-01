import * as React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import galleryOne from "@/assets/gallery-page/image_1.jpg";
import galleryTwo from "@/assets/gallery-page/image_2.jpg";
import galleryThree from "@/assets/gallery-page/image_3.jpg";
import galleryFour from "@/assets/gallery-page/image_4.jpg";
import galleryFive from "@/assets/gallery-page/image_5.jpeg";
import gallerySix from "@/assets/gallery-page/image_6.jpg";
import gallerySeven from "@/assets/gallery-page/image_7.jpg";

type GalleryItem = {
  id: string;
  date: string;
  description: string;
  location: string;
  category: string;
  image: StaticImageData;
};

const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    date: "Jun 17, 2025",
    description:
      "Flame of Hope team launched their HIV prevention mobile app HEALTH9JA at NYSC Camp, Plateau State.",
    location: "Nysc Camp, Jos South, Plateau State",
    category: "Health Education",
    image: galleryOne,
  },
  {
    id: "gallery-2",
    date: "Dec 1, 2024",
    description: "World Aids Day Campus Storming in Plateau State",
    location: "Jos North",
    category: "World Aids Day",
    image: galleryTwo,
  },
  {
    id: "gallery-3",
    date: "Aug 19, 2025",
    description:
      "HIV/AIDS Awareness Campaign in Nyango Gel Community, Jos South",
    location: "Jos South",
    category: "HIV/AIDS Awareness",
    image: galleryThree,
  },
  {
    id: "gallery-4",
    date: "Aug 20, 2025",
    description:
      "Community awareness campaign against Gender-Based Violence (GBV) in Jos North",
    location: "Jos North",
    category: "GBV Awareness",
    image: galleryFour,
  },
  {
    id: "gallery-5",
    date: "May 7, 2025",
    description: "Cervical cancer awareness campaign",
    location: "Jos North",
    category: "Cervical Cancer Awareness",
    image: galleryFive,
  },
  {
    id: "gallery-6",
    date: "Nov 25, 2025",
    description:
      "Capacity-building training for Women in Jos North, Plateau State",
    location: "Jos North",
    category: "Capacity-building Training",
    image: gallerySix,
  },
  {
    id: "gallery-7",
    date: "Nov 26, 2025",
    description:
      "Inception of the Flame of Hope Mentorship Program in Jos, Plateau State",
    location: "Jos North",
    category: "Mentorship",
    image: gallerySeven,
  },
];

// Sort gallery items by date (newest first)
const sortedGalleryItems = [...galleryItems].sort((a, b) => {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateB - dateA; // Descending order (newest first)
});

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(
    null
  );

  const closeModal = () => setSelectedItem(null);

  return (
    <>
      <SEO
        title="Gallery"
        description="View snapshots of hope from Flame of Hope's activities including health campaigns, training workshops, community outreach events, HIV/AIDS awareness programs, GBV sensitization, and capacity-building initiatives across Plateau State."
        keywords="Flame of Hope gallery, community outreach photos, health campaign images, Plateau State NGO activities, HIV awareness photos, GBV sensitization, training workshops, community health events"
      />

      <PageHero
        title="Gallery"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[75%] space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-brand-red text-3xl md:text-4xl font-extrabold">
                Snapshots of Hope
              </p>
            </div>
            <p className="text-brand-ash text-sm font-medium md:text-lg max-w-xl">
              Stay updated with our recent activities, including health
              campaigns, training workshops, and community outreach events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedGalleryItems.map((item, idx) => (
              <motion.article
                key={item.id}
                className="group flex flex-col gap-3 bg-white rounded-[20px] shadow-sm p-3 transition-transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <motion.button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="relative w-full h-48 rounded-[16px] bg-gray-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-main transition-shadow group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src={item.image.src || ""}
                    alt={item.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <span className="absolute bottom-3 right-3 bg-brand-red text-white text-xs font-semibold rounded-full px-4 py-1 shadow">
                    {item.date}
                  </span>
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300"></span>
                </motion.button>
                <p className="text-xs text-brand-ash leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              <div className="relative h-72 sm:h-96">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-brand-black rounded-full p-2 shadow focus:outline-none"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="absolute bottom-4 right-4 bg-brand-red text-white text-xs font-semibold rounded-full px-4 py-1 shadow">
                  {selectedItem.date}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-brand-secondary">
                  <span>{selectedItem.location}</span>
                  <span className="text-brand-red">•</span>
                  <span>{selectedItem.category}</span>
                </div>
                <p className="text-brand-black text-base leading-relaxed">
                  {selectedItem.description}
                </p>
                <p className="text-brand-ash text-sm leading-relaxed">
                  This moment is part of our ongoing commitment to build safer,
                  healthier communities through consistent outreach, training,
                  and psychosocial support.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

GalleryPage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default GalleryPage;
