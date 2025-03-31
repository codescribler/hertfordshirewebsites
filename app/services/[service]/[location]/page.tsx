import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceLocationBySlug, generateServiceLocationSlugs } from '@/lib/service-locations';
import ServiceLocationTemplate from '@/components/services/ServiceLocationTemplate';

interface ServiceLocationPageProps {
  params: {
    service: string;
    location: string;
  };
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const slug = `${params.service}/${params.location}`;
  const serviceLocation = getServiceLocationBySlug(slug);
  
  if (!serviceLocation) {
    return {
      title: 'Service Location Not Found',
    };
  }
  
  return {
    title: serviceLocation.title,
    description: serviceLocation.description,
    keywords: serviceLocation.keywords,
  };
}

export function generateStaticParams() {
  const slugs = generateServiceLocationSlugs();
  
  return slugs.map(slug => {
    const [service, location] = slug.split('/');
    return {
      service,
      location,
    };
  });
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const slug = `${params.service}/${params.location}`;
  const serviceLocation = getServiceLocationBySlug(slug);
  
  if (!serviceLocation) {
    notFound();
  }
  
  return <ServiceLocationTemplate serviceLocation={serviceLocation} />;
}
