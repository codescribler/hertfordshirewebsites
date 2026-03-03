import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.service);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  // Enhanced metadata for core web design services
  const coreWebDesignServices = ['professional-web-design', 'custom-website-design', 'small-business-websites'];
  const isCoreService = coreWebDesignServices.includes(params.service);

  if (isCoreService) {
    return {
      title: `${service.title} in Hertfordshire | Professional Website Design`,
      description: `${service.title} for Hertfordshire businesses. We build professional websites that attract customers and grow your business. Serving Watford, St Albans, Hemel Hempstead, Hertford and more. ${service.shortDescription} Get started today!`,
      keywords: [
        service.title,
        `${service.title} hertfordshire`,
        'web design hertfordshire',
        'website design hertfordshire',
        'web designer hertfordshire',
        'hertfordshire web design',
        'professional web design',
        'business website hertfordshire',
        'web design watford',
        'web design st albans',
        'web design hemel hempstead',
        'website design',
        'Hertfordshire',
        'professional websites',
        'business websites',
        'web development',
      ],
    };
  }

  // Default pattern for other services
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
