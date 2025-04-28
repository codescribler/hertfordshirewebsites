import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import { getLocationBySlug } from '@/lib/locations';
import { getServiceLocationBySlug } from '@/lib/service-locations';
import { notFound } from 'next/navigation';
import ServiceLocationTemplate from '@/components/services/ServiceLocationTemplate';
import { getAllLocationSlugs } from '@/lib/locations';

// Force static rendering
export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

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
  const location = params.location.replace(/-/g, ' ');
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  return {
    title: `Professional Web Design in ${locationName} | Hertfordshire Websites`,
    description: `Professional web design services for ${locationName} businesses. Get a custom, high-performance website that drives growth and success.`,
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const serviceLocation = getServiceLocationBySlug(`herts-professional/${params.location}`);

  if (!serviceLocation) {
    notFound();
  }

  return <ServiceLocationTemplate serviceLocation={serviceLocation} />;
}
