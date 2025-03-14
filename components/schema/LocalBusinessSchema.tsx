"use client";

import Script from "next/script";

const LocalBusinessSchema = () => {
  // Construct the LocalBusiness schema.org structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hertfordshirewebsites.co.uk",
    "name": "Hertfordshire Websites",
    "description": "Professional web design agency providing high-quality websites for businesses of all sizes in Hertfordshire. SEO-optimized, mobile-friendly websites that generate leads.",
    "url": "https://hertfordshirewebsites.co.uk",
    "telephone": "07786556885",
    "email": "hello@hertfordshirewebsites.co.uk",
    "logo": "https://hertfordshirewebsites.co.uk/images/hertfordshirewebsiteslogo2.png",
    "image": "https://hertfordshirewebsites.co.uk/images/hero-image-example-websites.jpg",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:30"
      }
    ],
    "sameAs": [
      "https://twitter.com/hertswebsites",
      "https://www.facebook.com/hertfordshirewebsites",
      "https://www.linkedin.com/company/hertfordshire-websites"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hertfordshire",
      "addressLocality": "Watford",
      "addressRegion": "Hertfordshire",
      "postalCode": "WD17",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.6565",
      "longitude": "-0.3903"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Watford"
      },
      {
        "@type": "City",
        "name": "St. Albans"
      },
      {
        "@type": "City",
        "name": "Hemel Hempstead"
      },
      {
        "@type": "City",
        "name": "Stevenage"
      },
      {
        "@type": "City",
        "name": "Hertford"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hertfordshire"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Herts Essentials",
          "description": "A simple, professional website with essential business information.",
          "price": "699",
          "priceCurrency": "GBP",
          "url": "https://hertfordshirewebsites.co.uk/services/herts-essentials"
        },
        {
          "@type": "Offer",
          "name": "Herts Professional",
          "description": "A multi-page business website with service pages, lead generation features, and local SEO elements.",
          "price": "1795",
          "priceCurrency": "GBP",
          "url": "https://hertfordshirewebsites.co.uk/services/herts-professional"
        },
        {
          "@type": "Offer",
          "name": "Herts Growth",
          "description": "A SEO-optimized, conversion-focused website designed for businesses looking to scale.",
          "price": "4499",
          "priceCurrency": "GBP",
          "url": "https://hertfordshirewebsites.co.uk/services/herts-growth"
        }
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Website Design",
          "description": "Professional web design services for businesses of all sizes.",
          "url": "https://hertfordshirewebsites.co.uk/services"
        },
        {
          "@type": "Service",
          "name": "Local SEO Optimisation",
          "description": "Boost your visibility in local search results and attract more nearby customers.",
          "url": "https://hertfordshirewebsites.co.uk/services/local-seo-optimisation"
        },
        {
          "@type": "Service",
          "name": "Content Writing",
          "description": "Professional content creation to engage your audience and boost your SEO rankings.",
          "url": "https://hertfordshirewebsites.co.uk/services/custom-blog-posts-content-writing"
        },
        {
          "@type": "Service",
          "name": "Performance & Speed Optimisation",
          "description": "Improve your website loading times and overall performance to enhance user experience and boost your search engine rankings.",
          "url": "https://hertfordshirewebsites.co.uk/services/performance-speed-optimisation"
        }
      ]
    }
  };

  return (
    <Script id="local-business-schema" type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </Script>
  );
};

export default LocalBusinessSchema;
