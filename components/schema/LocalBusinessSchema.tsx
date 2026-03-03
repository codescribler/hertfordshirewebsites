const LocalBusinessSchema = () => {
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
        "name": "Hertford"
      },
      {
        "@type": "City",
        "name": "Hitchin"
      },
      {
        "@type": "City",
        "name": "Stevenage"
      },
      {
        "@type": "State",
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
      "name": "Web Design & Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Web Design",
            "description": "Custom website design and development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Services",
            "description": "Local search optimization to improve rankings in Hertfordshire"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Comprehensive SEO services to increase organic traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Marketing",
            "description": "Content writing and marketing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Maintenance",
            "description": "Ongoing website care and maintenance services"
          }
        }
      ]
    }
  };

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
};

export default LocalBusinessSchema;
