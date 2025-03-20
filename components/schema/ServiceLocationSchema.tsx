"use client";

import Script from "next/script";

interface ServiceLocationSchemaProps {
  locationName: string;
  locationRegion?: string;
  locationPostcode?: string;
  locationLatitude?: string;
  locationLongitude?: string;
  serviceOffered?: string;
}

const ServiceLocationSchema = ({
  locationName,
  locationRegion = "Hertfordshire",
  locationPostcode = "",
  locationLatitude = "",
  locationLongitude = "",
  serviceOffered = "Web Design Services",
}: ServiceLocationSchemaProps) => {
  // Normalize location name for consistent lookups
  const normalizeLocationName = (name: string) => 
    name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
    
  // Coordinates mapping for common Hertfordshire locations
  const locationCoordinates: Record<string, { lat: string; lng: string }> = {
    "watford": { lat: "51.6565", lng: "-0.3903" },
    "st-albans": { lat: "51.7526", lng: "-0.3358" },
    "stevenage": { lat: "51.9038", lng: "-0.2028" },
    "hemel-hempstead": { lat: "51.7530", lng: "-0.4686" },
    "hertford": { lat: "51.7979", lng: "-0.0782" },
    "bishops-stortford": { lat: "51.8720", lng: "0.1598" },
    "hitchin": { lat: "51.9491", lng: "-0.2783" },
    "harpenden": { lat: "51.8180", lng: "-0.3563" },
    "welwyn-garden-city": { lat: "51.8019", lng: "-0.2065" },
    "hatfield": { lat: "51.7635", lng: "-0.2281" },
    "borehamwood": { lat: "51.6580", lng: "-0.2743" },
    "letchworth": { lat: "51.9785", lng: "-0.2284" },
    "bushey": { lat: "51.6428", lng: "-0.3568" },
    "rickmansworth": { lat: "51.6405", lng: "-0.4710" },
    "cheshunt": { lat: "51.7025", lng: "-0.0320" },
    "potters-bar": { lat: "51.6937", lng: "-0.1713" },
    "hoddesdon": { lat: "51.7611", lng: "-0.0111" },
  };

  // Normalize the location name for lookup
  const normalizedLocationName = normalizeLocationName(locationName);
  
  // Use provided coordinates or find from map, fallback to Hertfordshire general coordinates
  const latitude = locationLatitude || locationCoordinates[normalizedLocationName]?.lat || "51.7500";
  const longitude = locationLongitude || locationCoordinates[normalizedLocationName]?.lng || "-0.3500";

  // Construct the LocalBusiness schema with location-specific information
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", 
    "@id": `https://hertfordshirewebsites.co.uk/locations/${normalizedLocationName}`,
    "name": `Hertfordshire Websites - ${locationName}`,
    "description": `Professional web design services in ${locationName}, ${locationRegion}. We create high-quality, SEO-optimized websites that help local businesses attract customers and grow.`,
    "url": `https://hertfordshirewebsites.co.uk/locations/${normalizedLocationName}`,
    "telephone": "07786556885",
    "email": "hello@hertfordshirewebsites.co.uk",
    "image": "https://hertfordshirewebsites.co.uk/images/hero-image-example-websites.jpg",
    "logo": "https://hertfordshirewebsites.co.uk/images/hertfordshirewebsiteslogo2.png",
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
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationName,
      "addressRegion": locationRegion,
      "postalCode": locationPostcode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": serviceOffered,
        "description": `Professional ${serviceOffered} in ${locationName}, ${locationRegion}. Websites designed to attract local customers and help your business grow.`
      }
    }
  };

  return (
    <Script id={`service-location-schema-${normalizedLocationName}`} type="application/ld+json">
      {JSON.stringify(locationSchema)}
    </Script>
  );
};

export default ServiceLocationSchema;
