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
  const service = getServiceBySlug('herts-professional');
  const location = getLocationBySlug(params.location);
  
  if (!service || !location) {
    return {
      title: 'Service Location Not Found',
    };
  }
  
  return {
    title: `${service.title} in ${location.name} | Hertfordshire Websites`,
    description: `Professional ${service.title.toLowerCase()} website package in ${location.name}. A multi-page business website with service pages, lead generation features, and local SEO elements.`,
    openGraph: {
      title: `${service.title} in ${location.name} | Hertfordshire Websites`,
      description: `Professional ${service.title.toLowerCase()} website package in ${location.name}. A multi-page business website with service pages, lead generation features, and local SEO elements.`,
    },
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const serviceLocation = getServiceLocationBySlug(`herts-professional/${params.location}`);
  
  if (!serviceLocation) {
    notFound();
  }
  
  return <ServiceLocationTemplate serviceLocation={serviceLocation} />;
}
