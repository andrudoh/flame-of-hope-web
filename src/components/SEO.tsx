import Head from "next/head";
import { useRouter } from "next/router";

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
};

const defaultTitle = "Flame of Hope | Centre for Poverty and Disease Control";
const defaultDescription =
  "Flame of Hope Centre for Poverty and Disease Control - Building Hope, Empowering Communities, Combating Disease. Since 2005, we've been at the forefront of disease prevention, economic empowerment, and support for vulnerable populations in North Central Nigeria.";
const defaultKeywords =
  "Flame of Hope, disease control, HIV prevention, economic empowerment, community health, Plateau State, Nigeria, NGO, poverty alleviation, gender-based violence, GBV, OVC support, youth programs, health awareness";
const siteUrl = "https://flameofhopeng.org"; // Update with actual domain
const defaultImage = `${siteUrl}/favicon.png`;

export const SEO = ({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Flame of Hope",
  noindex = false,
  nofollow = false,
}: SEOProps) => {
  const router = useRouter();
  const canonicalUrl = `${siteUrl}${router.asPath}`;
  const fullTitle = title ? `${title} | Flame of Hope` : defaultTitle;

  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
  ].join(", ");

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#3ba993" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Flame of Hope" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@flameofhopenig" />
      <meta name="twitter:creator" content="@flameofhopenig" />

      {/* Article specific tags */}
      {type === "article" && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          <meta property="article:author" content={author} />
          <meta property="article:section" content="News" />
        </>
      )}

      {/* Additional SEO */}
      <meta name="geo.region" content="NG-PL" />
      <meta name="geo.placename" content="Jos, Plateau State" />
      <meta name="geo.position" content="9.8964;8.8574" />
      <meta name="ICBM" content="9.8964, 8.8574" />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Flame of Hope" />

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: "Flame of Hope Centre for Poverty and Disease Control",
            alternateName: "FLAME-OF-HOPE",
            url: siteUrl,
            logo: `${siteUrl}/favicon.png`,
            description: description,
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "No. 1A Tafawa Balewa Street (near Township Primary School)",
              addressLocality: "Jos",
              addressRegion: "Plateau State",
              addressCountry: "NG",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-706-282-2822",
              contactType: "Customer Service",
              email: "flameofhopen@gmail.com",
            },
            sameAs: [
              "https://web.facebook.com/flameofhope.ng/",
              "https://twitter.com/flameofhopenig",
            ],
            foundingDate: "2005",
            legalName: "FLAME-OF-HOPE Centre for Poverty and Disease Control",
            registrationNumber: "CAC/IT/NO 22162",
          }),
        }}
      />
    </Head>
  );
};
