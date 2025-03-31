import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import { getLocationBySlug } from '@/lib/locations';
import { getServiceLocationBySlug } from '@/lib/service-locations';
import { notFound } from 'next/navigation';
import ServiceLocationTemplate from '@/components/services/ServiceLocationTemplate';

interface ServiceLocationPageProps {
  params: {
    location: string;
  };
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const service = getServiceBySlug('local-seo-optimisation');
  const location = getLocationBySlug(params.location);
  
  if (!service || !location) {
    return {
      title: 'Service Location Not Found',
    };
  }
  
  return {
    title: `${service.title} in ${location.name} | Hertfordshire Websites`,
    description: `Professional ${service.title.toLowerCase()} services in ${location.name}. We help local businesses improve their visibility in Google Maps and local search results.`,
    openGraph: {
      title: `${service.title} in ${location.name} | Hertfordshire Websites`,
      description: `Professional ${service.title.toLowerCase()} services in ${location.name}. We help local businesses improve their visibility in Google Maps and local search results.`,
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: '/images/seo.jpg',
          width: 1200,
          height: 630,
          alt: `Local SEO Optimisation Services in ${location.name}`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} in ${location.name} | Hertfordshire Websites`,
      description: `Professional ${service.title.toLowerCase()} services in ${location.name}. We help local businesses improve their visibility in Google Maps and local search results.`,
    },
    keywords: `local SEO ${location.name}, ${location.name} SEO, local business SEO ${location.name}, Google Maps SEO ${location.name}, local search optimisation ${location.name}`,
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const serviceLocation = getServiceLocationBySlug(`local-seo-optimisation/${params.location}`);
  
  if (!serviceLocation) {
    notFound();
  }
  
  return <ServiceLocationTemplate serviceLocation={serviceLocation} />;
}
