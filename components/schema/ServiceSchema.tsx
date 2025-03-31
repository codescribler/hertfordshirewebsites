"use client";

import Script from "next/script";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  providerUrl?: string;
  image?: string;
  serviceArea?: string[];
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
  };
}

const ServiceSchema = ({
  name,
  description,
  url,
  provider = "Hertfordshire Websites",
  providerUrl = "https://hertfordshirewebsites.co.uk",
  image = "https://hertfordshirewebsites.co.uk/images/hero-image-example-websites.jpg",
  serviceArea = ["Hertfordshire", "Watford", "St. Albans", "Hemel Hempstead", "Stevenage", "Hertford"],
  offers
}: ServiceSchemaProps) => {
  // Construct the Service schema.org structured data
  const serviceSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "ProfessionalService",
      "name": provider,
      "url": providerUrl
    },
    "image": image,
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area
    }))
  };

  // Add offers if provided
  if (offers) {
    serviceSchema.offers = {
      "@type": "Offer",
      ...(offers.price !== undefined && { "price": offers.price }),
      ...(offers.priceCurrency && { "priceCurrency": offers.priceCurrency }),
      ...(offers.availability && { "availability": offers.availability })
    };
  }

  return (
    <Script id="service-schema" type="application/ld+json">
      {JSON.stringify(serviceSchema)}
    </Script>
  );
};

export default ServiceSchema;
