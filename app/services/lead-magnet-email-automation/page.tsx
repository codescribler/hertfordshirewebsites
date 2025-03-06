import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug('lead-magnet-email-automation');
  
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
    },
  };
}

export default function LeadMagnetEmailAutomationPage() {
  const service = getServiceBySlug('lead-magnet-email-automation');
  
  if (!service) {
    notFound();
  }
  
  return <ServicePageTemplate service={service} />;
}
