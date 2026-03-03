interface AggregateRatingSchemaProps {
  itemReviewed: {
    type: string;
    name: string;
    url?: string;
  };
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
}

const AggregateRatingSchema = ({
  itemReviewed,
  ratingValue = 4.9,
  reviewCount = 47,
  bestRating = 5,
}: AggregateRatingSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": itemReviewed.type,
      "name": itemReviewed.name,
      ...(itemReviewed.url && { "url": itemReviewed.url }),
    },
    "ratingValue": ratingValue,
    "reviewCount": reviewCount,
    "bestRating": bestRating,
  };

  return (
    <script
      id="aggregate-rating-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AggregateRatingSchema;
