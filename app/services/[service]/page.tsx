import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
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
  return [
    { service: 'herts-essentials' },
    { service: 'herts-professional' },
    { service: 'herts-growth' },
    { service: 'additional-website-pages' },
    { service: 'custom-blog-posts-content-writing' },
    { service: 'advanced-seo-package' },
    { service: 'google-analytics-search-console-setup' },
    { service: 'logo-design' },
    { service: 'branding-package' },
  ];
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service);
  
  if (!service) {
    notFound();
  }
  
  return <ServicePageTemplate service={service} />;
}
