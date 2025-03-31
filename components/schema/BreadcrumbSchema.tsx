"use client";

import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  // Skip rendering if no breadcrumb items
  if (!items || items.length === 0) {
    return null;
  }

  // Construct the BreadcrumbList schema.org structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <Script id="breadcrumb-schema" type="application/ld+json">
      {JSON.stringify(breadcrumbSchema)}
    </Script>
  );
};

export default BreadcrumbSchema;
