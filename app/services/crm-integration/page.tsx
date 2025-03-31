import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { notFound } from 'next/navigation';

// Force static rendering
export const dynamic = 'force-static';
export const revalidate = false;

export function generateMetadata(): Metadata {
  const service = getServiceBySlug('crm-integration');

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

export default function CRMIntegrationPage() {
  const service = getServiceBySlug('crm-integration');

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
