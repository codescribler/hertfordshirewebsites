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
  const service = getServiceBySlug('custom-blog-posts-content-writing');
  const location = getLocationBySlug(params.location);
  
  if (!service || !location) {
    return {
      title: 'Service Location Not Found',
    };
  }
  
  return {
    title: `${service.title} in ${location.name} | Hertfordshire Websites`,
    description: `Professional ${service.title.toLowerCase()} service in ${location.name}. Engage your audience and boost your SEO rankings with high-quality, locally-targeted content for your ${location.name} business.`,
    openGraph: {
      title: `${service.title} in ${location.name} | Hertfordshire Websites`,
      description: `Professional ${service.title.toLowerCase()} service in ${location.name}. Engage your audience and boost your SEO rankings with high-quality, locally-targeted content for your ${location.name} business.`,
    },
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const serviceLocation = getServiceLocationBySlug(`custom-blog-posts-content-writing/${params.location}`);
  
  if (!serviceLocation) {
    notFound();
  }
  
  return <ServiceLocationTemplate serviceLocation={serviceLocation} />;
}
