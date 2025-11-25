import { MetadataRoute } from 'next';
import { getAllLocationSlugs } from '@/lib/locations';
import { getAllServiceSlugs } from '@/lib/services';

const BASE_URL = 'https://hertfordshirewebsites.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static main pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/roi-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog/website-requirements-hertfordshire-small-businesses-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Case studies
  const caseStudies: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/case-studies/the-meat-hook`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/renovation-planner`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/resources/guides`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/guides/chiropractor-website-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/resources/guides/dental-practice-website-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/resources/guides/physiotherapy-practice-marketing-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/resources/lead-magnet-checklist`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/resources/local-seo-checklist`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/resources/website-audit`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Get all service slugs and filter out US spelling variants
  const serviceSlugs = getAllServiceSlugs().filter(
    (slug) => !slug.includes('optimization') // Exclude US spelling, keep British 'optimisation'
  );

  // Service pages (main service pages)
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Additional static service pages not in services.ts
  const additionalServicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/services/ongoing-seo-content-marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/booking-appointment-system`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/landing-page-design`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/security-monitoring-services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/social-media-integration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/custom-web-development-api-integrations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Get all location slugs
  const locationSlugs = getAllLocationSlugs();

  // Location pages
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // All service slugs for service-location combinations
  // Include both services from services.ts and additional ones
  const allServiceSlugsForLocations = [
    ...serviceSlugs,
    'ongoing-seo-content-marketing',
    'booking-appointment-system',
    'landing-page-design',
    'security-monitoring-services',
    'social-media-integration',
    'custom-web-development-api-integrations',
  ];

  // Remove duplicates and filter out US spelling variants
  const uniqueServiceSlugs = [...new Set(allServiceSlugsForLocations)].filter(
    (slug) => !slug.includes('optimization') // Exclude US spelling
  );

  // Service + Location combination pages
  const serviceLocationPages: MetadataRoute.Sitemap = [];

  for (const serviceSlug of uniqueServiceSlugs) {
    for (const locationSlug of locationSlugs) {
      serviceLocationPages.push({
        url: `${BASE_URL}/services/${serviceSlug}/${locationSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }

  // Combine all pages
  return [
    ...staticPages,
    ...blogPosts,
    ...caseStudies,
    ...resourcePages,
    ...servicePages,
    ...additionalServicePages,
    ...locationPages,
    ...serviceLocationPages,
  ];
}
