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
    title: `Website Performance & Speed Optimization in ${locationName} | Hertfordshire Websites`,
    description: `Professional website speed optimization services for ${locationName} businesses. Improve your website's loading speed and user experience.`,
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const serviceLocation = getServiceLocationBySlug(`performance-speed-optimisation/${params.location}`);

  if (!serviceLocation) {
    notFound();
  }

  return <ServiceLocationTemplate serviceLocation={serviceLocation} />;
}
