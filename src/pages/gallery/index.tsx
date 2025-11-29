import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import programsImageOne from "@/assets/programs-page/image_1.png";
import programsImageTwo from "@/assets/programs-page/image_2.png";
import programsImageThree from "@/assets/programs-page/image_3.png";
import programsImageFour from "@/assets/programs-page/image_4.png";

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
    date: "May 02",
    description:
      "Community health volunteers prepare HIV self-test kits before a night outreach in Jos South.",
    location: "Jos South",
    category: "Health Outreach",
    image: programsImageOne,
  },
  {
    id: "gallery-2",
    date: "May 04",
    description:
      "Vocational training session where young women learn machine maintenance for tailoring businesses.",
    location: "Jos North",
    category: "Economic Empowerment",
    image: programsImageTwo,
  },
  {
    id: "gallery-3",
    date: "May 07",
    description:
      "AYP ambassadors leading a campus conversation on positive lifestyle choices and safe spaces.",
    location: "University of Jos",
    category: "AYP Forum",
    image: programsImageThree,
  },
  {
    id: "gallery-4",
    date: "May 09",
    description:
      "Support group meeting that connected OVC caregivers with nutrition packs and psychosocial care.",
    location: "Barkin Ladi",
    category: "OVC Support",
    image: programsImageFour,
  },
  {
    id: "gallery-5",
    date: "May 11",
    description:
      "Peer educators displaying sanitary kits ahead of a reproductive health dialogue with FSWs.",
    location: "Langtang",
    category: "Peer Education",
    image: programsImageOne,
  },
  {
    id: "gallery-6",
    date: "May 13",
    description:
      "Participants practicing basic bookkeeping during the Economic Empowerment bootcamp.",
    location: "Jos Central",
    category: "Workshop",
    image: programsImageTwo,
  },
  {
    id: "gallery-7",
    date: "May 14",
    description:
      "Teen mentors celebrating after a mural project that highlights hope for adolescents in Jos North.",
    location: "Jos North",
    category: "Creative Project",
    image: programsImageThree,
  },
  {
    id: "gallery-8",
    date: "May 16",
    description:
      "Nurses briefing community health champions before a mobile vaccination sortie.",
    location: "Mangu",
    category: "Vaccination Drive",
    image: programsImageFour,
  },
  {
    id: "gallery-9",
    date: "May 18",
    description:
      "Nutrition corner showcasing fresh produce that complements the OVC weekend meal packs.",
    location: "Gyero",
    category: "Nutrition",
    image: programsImageOne,
  },
  {
    id: "gallery-10",
    date: "May 20",
    description:
      "Women-led cooperative reviewing savings goals after completing a microgrant milestone.",
    location: "Jos South",
    category: "Cooperative",
    image: programsImageTwo,
  },
  {
    id: "gallery-11",
    date: "May 22",
    description:
      "AYP facilitators rehearsing a skit on stigma reduction ahead of a community theatre tour.",
    location: "Pankshin",
    category: "Theatre Outreach",
    image: programsImageThree,
  },
  {
    id: "gallery-12",
    date: "May 24",
    description:
      "Children from an after-school club displaying artwork inspired by the Flame of Hope vision.",
    location: "Jos East",
    category: "After-school Club",
    image: programsImageFour,
  },
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(
    null
  );

  const closeModal = () => setSelectedItem(null);

  return (
    <>
      <Head>
        <title>Gallery | Flame of Hope</title>
      </Head>

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
            {galleryItems.map((item, idx) => (
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
                    src={item.image}
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
