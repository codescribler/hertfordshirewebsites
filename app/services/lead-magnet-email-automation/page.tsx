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

  const title = 'Email List Building & Automation Services in Hertfordshire';
  const description =
    'Email list building, lead magnets and automated nurture sequences for Hertfordshire businesses. Build your subscriber base and convert leads while you sleep.';

  return {
    title: `${title} | Hertfordshire Websites`,
    description,
    openGraph: {
      title: `${title} | Hertfordshire Websites`,
      description,
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
