import { Service, services, getAllServiceSlugs, getServiceBySlug } from './services';
import { Location, locations, getAllLocationSlugs, getLocationBySlug } from './locations';

export interface ServiceLocation {
  service: Service;
  location: Location;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export function generateServiceLocationSlugs(): string[] {
  const serviceSlugs = getAllServiceSlugs();
  const locationSlugs = getAllLocationSlugs();
  
  const serviceLocationSlugs: string[] = [];
  
  for (const serviceSlug of serviceSlugs) {
    for (const locationSlug of locationSlugs) {
      serviceLocationSlugs.push(`${serviceSlug}/${locationSlug}`);
    }
  }
  
  return serviceLocationSlugs;
}

export function getServiceLocationBySlug(slug: string): ServiceLocation | null {
  const parts = slug.split('/');
  if (parts.length !== 2) return null;
  
  const serviceSlug = parts[0];
  const locationSlug = parts[1];
  
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(locationSlug);
  
  if (!service || !location) return null;
  
  return {
    service,
    location,
    slug,
    title: `${service.title} in ${location.name} | Professional Web Design Services`,
    description: `Professional ${service.title} web design services in ${location.name}, Hertfordshire. Custom websites designed to attract customers and help your business grow.`,
    keywords: [
      `${service.title} ${location.name}`,
      `web design ${location.name}`,
      `website design in ${location.name}`,
      `${location.name} web designer`,
      `business website ${location.name}`,
      `professional website design ${location.name}`,
      `SEO website ${location.name}`,
      `affordable website design ${location.name}`,
      `local web design services ${location.name}`,
      `${location.name} website company`,
    ],
  };
}

export function generateServiceLocationContent(serviceLocation: ServiceLocation): {
  intro: string;
  locationSpecific: string;
  serviceSpecific: string;
  benefits: string[];
  cta: string;
} {
  const { service, location } = serviceLocation;
  
  // Generate intro paragraph
  const intro = `Looking for professional ${service.title} services in ${location.name}? Hertfordshire Websites provides custom, high-quality ${service.shortDescription.toLowerCase()} Our team of experienced web designers understands the unique needs of businesses in ${location.name} and can help you create a website that attracts local customers and helps your business grow.`;
  
  // Generate location-specific content
  const locationSpecific = `${location.description} Our ${service.title} service is perfect for businesses in ${location.name} looking to establish a strong online presence and connect with local customers.${location.businessFocus ? ` ${location.businessFocus}` : ''}`;
  
  // Generate service-specific content for this location
  const serviceSpecific = `Our ${service.title} service provides ${location.name} businesses with ${service.description.toLowerCase()} We understand the competitive landscape in ${location.name} and design websites that help you stand out from the competition.`;
  
  // Generate location-specific benefits
  const benefits = [
    `Attract more customers in ${location.name} and surrounding areas`,
    `Showcase your business to the ${location.population ? location.population : 'local'} residents`,
    `Stand out from other ${location.name} businesses with a professional website`,
    `Improve your local SEO rankings in ${location.name} search results`,
    `Build credibility and trust with ${location.name} customers`,
    `Connect with the local ${location.name} community through your online presence`,
  ];
  
  // Generate call-to-action
  const cta = `Ready to take your ${location.name} business to the next level with our ${service.title} service? Contact us today to schedule a free discovery call and learn how we can help your business grow online.`;
  
  return {
    intro,
    locationSpecific,
    serviceSpecific,
    benefits,
    cta,
  };
}
