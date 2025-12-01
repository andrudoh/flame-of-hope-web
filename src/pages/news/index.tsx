import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { newsArticles } from "@/constants/news";

const NewsPage = () => {
  return (
    <>
      <SEO
        title="News & Updates"
        description="Stay updated with Flame of Hope's latest news, milestones, and program highlights. Read stories about our GBV prevention initiatives, health campaigns, community outreach, capacity-building trainings, and partnerships across Plateau State."
        keywords="Flame of Hope news, NGO updates Nigeria, Plateau State health news, GBV prevention updates, community health news, Flame of Hope activities, health awareness campaigns"
      />

      <PageHero
        title="News & Updates"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-10">
          <p className="text-brand-ash text-base md:text-lg leading-relaxed">
            Stories, milestones, and program highlights from across our network.
            Check back regularly for fresh updates or subscribe to our
            newsletter to receive highlights in your inbox.
          </p>

          <div className="space-y-6">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-brand-light-bg rounded-2xl p-6 sm:p-8 shadow-sm overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {article.images.length > 0 && (
                    <div className="relative w-full md:w-64 h-48 md:h-48 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={article.images[0]}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary mb-2">
                      {article.date}
                    </p>
                    <h2 className="text-2xl font-bold text-brand-black mb-3">
                      {article.title}
                    </h2>
                    <p className="text-brand-ash text-base leading-relaxed mb-4">
                      {article.summary}
                    </p>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-brand-main font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read Update
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

NewsPage.getLayout = (page: React.ReactElement) => (
  <Layout withTopPadding>{page}</Layout>
);

export default NewsPage;
