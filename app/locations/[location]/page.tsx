import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';
import LocationPageTemplate from '@/components/locations/LocationPageTemplate';

interface LocationPageProps {
  params: {
    location: string;
  };
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  // Priority locations that need enhanced web design emphasis
  const priorityLocations = ['hertford', 'hitchin', 'st-albans', 'hemel-hempstead', 'watford', 'stevenage'];
  const isPriority = priorityLocations.includes(params.location);

  // Enhanced title and description for priority locations
  const title = isPriority
    ? `Web Design in ${location.name} | Professional Hertfordshire Websites`
    : `Web Design in ${location.name} | Hertfordshire Websites`;

  const description = isPriority
    ? `Professional web design for ${location.name} businesses. We build stunning, high-performance websites that attract customers and help your business grow. Local Hertfordshire web designers delivering real results. Free consultation!`
    : `Professional web design services for businesses in ${location.name}, Hertfordshire. Custom websites designed to attract customers and help your business grow.`;

  return {
    title,
    description,
    keywords: [
      ...(isPriority ? [
        `web design ${location.name.toLowerCase()}`,
        `${location.name.toLowerCase()} web design`,
        `website design ${location.name.toLowerCase()}`,
        `web designer ${location.name.toLowerCase()}`,
      ] : []),
      `web design ${location.name}`,
      `website design in ${location.name}`,
      `${location.name} web designer`,
      `business website ${location.name}`,
      `professional website design ${location.name}`,
      `SEO website ${location.name}`,
      `affordable website design ${location.name}`,
      `local web design services ${location.name}`,
      `${location.name} website company`,
      `web development ${location.name}`,
    ],
  };
}

export function generateStaticParams() {
  return getAllLocationSlugs().map(slug => ({
    location: slug,
  }));
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.location);
  
  if (!location) {
    notFound();
  }
  
  return <LocationPageTemplate location={location} />;
}
