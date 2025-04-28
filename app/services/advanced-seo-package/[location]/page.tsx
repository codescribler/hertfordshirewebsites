import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';
import { getServiceLocationBySlug } from '@/lib/service-locations';
import { notFound } from 'next/navigation';
import ServiceLocationTemplate from '@/components/services/ServiceLocationTemplate';

interface ServiceLocationPageProps {
  params: {
    location: string;
  };
}

export function generateStaticParams() {
  return getAllLocationSlugs().map(location => ({
    location,
  }));
}

export function generateMetadata({ params }: ServiceLocationPageProps): Metadata {
  const service = getServiceBySlug('advanced-seo-package');
  const location = getLocationBySlug(params.location);

  if (!service || !location) {
    return {
      title: 'Service Location Not Found',
    };
  }

  return {
    title: `${service.title} in ${location.name} | Hertfordshire Websites`,
    description: `Professional ${service.title.toLowerCase()} in ${location.name}. Comprehensive SEO optimization to improve your ${location.name} business website's visibility in search engines.`,
    openGraph: {
      title: `${service.title} in ${location.name} | Hertfordshire Websites`,
      description: `Professional ${service.title.toLowerCase()} in ${location.name}. Comprehensive SEO optimization to improve your ${location.name} business website's visibility in search engines.`,
    },
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const serviceLocation = getServiceLocationBySlug(`advanced-seo-package/${params.location}`);

  if (!serviceLocation) {
    notFound();
  }

  return <ServiceLocationTemplate serviceLocation={serviceLocation} />;
}
