import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/services';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { notFound } from 'next/navigation';

export function generateMetadata(): Metadata {
  const service = getServiceBySlug('advanced-seo-package');

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

export default function AdvancedSeoPackagePage() {
  const service = getServiceBySlug('advanced-seo-package');

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
