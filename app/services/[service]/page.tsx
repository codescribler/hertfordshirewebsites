import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.service);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Hertfordshire Websites`,
    description: service.shortDescription,
    keywords: [
      service.title,
      'web design',
      'website design',
      'Hertfordshire',
      'professional websites',
      'business websites',
      'SEO',
      'web development',
    ],
  };
}

export function generateStaticParams() {
  // Get all service slugs dynamically
  const allSlugs = getAllServiceSlugs();

  // Map the slugs to the expected format
  return allSlugs.map((slug: string) => ({
    service: slug
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
