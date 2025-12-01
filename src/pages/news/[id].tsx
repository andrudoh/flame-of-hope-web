import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { getNewsArticleById } from "@/constants/news";

const NewsArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<
    number | null
  >(null);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const article = React.useMemo(() => {
    if (typeof id === "string") {
      return getNewsArticleById(id);
    }
    return undefined;
  }, [id]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || selectedImageIndex === null || !article)
      return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && selectedImageIndex < article.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
    if (isRightSwipe && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToPrevious = React.useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);

  const goToNext = React.useCallback(() => {
    if (
      selectedImageIndex !== null &&
      article &&
      selectedImageIndex < article.images.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }, [selectedImageIndex, article]);

  const closeModal = React.useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  React.useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, goToPrevious, goToNext, closeModal]);

  if (!article) {
    return (
      <>
        <SEO
          title="Article Not Found"
          description="The article you're looking for doesn't exist."
          noindex
        />
        <PageHero
          title="Article Not Found"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: "Not Found" },
          ]}
        />
        <section className="bg-white py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <p className="text-brand-ash text-lg mb-6">
              The article you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/news"
              className="text-brand-main font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              ← Back to News
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.summary}
        type="article"
        publishedTime={new Date(article.date).toISOString()}
        keywords={`Flame of Hope, ${article.title}, Plateau State, community health, NGO news`}
      />

      <PageHero
        title={article.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
      />

      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              {article.date}
            </p>
            {article.facebookUrl && (
              <a
                href={article.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-main font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
              >
                View on Facebook
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-brand-ash text-base md:text-lg leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {article.images.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-brand-black">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-main focus:ring-offset-2 transition-transform hover:scale-[1.02]"
                  >
                    <Image
                      src={image}
                      alt={`${article.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <AnimatePresence>
            {selectedImageIndex !== null && article && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8"
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <motion.div
                  className="relative max-w-6xl w-full h-full flex items-center justify-center"
                  onClick={(event) => event.stopPropagation()}
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-brand-black rounded-full p-2 shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-brand-main"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {selectedImageIndex > 0 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevious();
                      }}
                      className="absolute left-4 bg-white/90 hover:bg-white text-brand-black rounded-full p-3 shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-brand-main transition-transform hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}

                  {selectedImageIndex < article.images.length - 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                      }}
                      className="absolute right-4 bg-white/90 hover:bg-white text-brand-black rounded-full p-3 shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-brand-main transition-transform hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}

                  <div className="relative w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImageIndex}
                        className="relative w-full h-full max-h-[90vh]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={article.images[selectedImageIndex]}
                          alt={`${article.title} - Image ${selectedImageIndex + 1}`}
                          fill
                          className="object-contain"
                          sizes="100vw"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedImageIndex + 1} / {article.images.length}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="text-brand-main font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              ← Back to News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

NewsArticlePage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default NewsArticlePage;
