import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug('local-seo-optimisation');
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return {
    title: `${service.title} | Hertfordshire Websites`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Hertfordshire Websites`,
      description: service.shortDescription,
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: '/images/seo.jpg',
          width: 1200,
          height: 630,
          alt: 'Local SEO Optimisation Services in Hertfordshire',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Hertfordshire Websites`,
      description: service.shortDescription,
    },
    keywords: 'local SEO, Hertfordshire SEO, local business SEO, Google Maps SEO, local search optimisation, local SEO services, business directories',
  };
}

export default function LocalSEOOptimisationPage() {
  const service = getServiceBySlug('local-seo-optimisation');
  
  if (!service) {
    notFound();
  }
  
  return <ServicePageTemplate service={service} />;
}
