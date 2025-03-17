"use client";

import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  mainEntity?: string;
}

const FAQSchema = ({ faqs, mainEntity = "https://hertfordshirewebsites.co.uk" }: FAQSchemaProps) => {
  // Skip rendering if no FAQs
  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Construct the FAQ schema.org structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify(faqSchema)}
    </Script>
  );
};

export default FAQSchema;
