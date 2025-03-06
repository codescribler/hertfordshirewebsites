import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServiceLocation, generateServiceLocationContent } from '@/lib/service-locations';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceLocationTemplateProps {
  serviceLocation: ServiceLocation;
}

const ServiceLocationTemplate = ({ serviceLocation }: ServiceLocationTemplateProps) => {
  const { service, location } = serviceLocation;
  const content = generateServiceLocationContent(serviceLocation);

  // Generate a unique set of blocks for each service+location page
  const blocks = [
    {
      id: 'intro',
      title: `${service.title} in ${location.name}`,
      content: content.intro,
      background: 'bg-white',
      layout: 'text-only',
    },
    {
      id: 'location-specific',
      title: `Web Design for ${location.name} Businesses`,
      content: content.locationSpecific,
      background: 'bg-primary-50',
      layout: 'image-right',
    },
    {
      id: 'service-specific',
      title: `Our ${service.title} Service in ${location.name}`,
      content: content.serviceSpecific,
      background: 'bg-white',
      layout: 'image-left',
    },
    {
      id: 'benefits',
      title: `Benefits for ${location.name} Businesses`,
      content: content.benefits,
      background: 'bg-primary-50',
      layout: 'list',
    },
    {
      id: 'features',
      title: `What's Included in Our ${service.title} Service`,
      content: service.features,
      background: 'bg-white',
      layout: 'grid',
    },
    {
      id: 'industries',
      title: `${service.title} for ${location.name} Industries`,
      content: location.keyIndustries ? location.keyIndustries : [],
      background: 'bg-primary-50',
      layout: 'cards',
    },
    {
      id: 'nearby',
      title: `We Also Serve Nearby Areas`,
      content: location.nearbyAreas ? location.nearbyAreas : [],
      background: 'bg-white',
      layout: 'links',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title} in {location.name}</h1>
              <p className="text-lg text-gray-700 mb-8">
                Professional {service.shortDescription.toLowerCase()} for businesses in {location.name}, Hertfordshire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/contact#discovery-call" 
                  variant="accent" 
                  size="lg"
                >
                  Book a Discovery Call
                </Button>
                <Button 
                  href="/contact" 
                  variant="outline" 
                  size="lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero-image-example-websites.jpg"
                alt={`${service.title} in ${location.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-800/10"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Dynamic Blocks */}
      {blocks.map((block, index) => {
        if (block.layout === 'text-only') {
          return (
            <Section key={block.id} className={block.background}>
              <Container>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">{block.title}</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700">
                      {block.content}
                    </p>
                  </div>
                </div>
              </Container>
            </Section>
          );
        }

        if (block.layout === 'image-right') {
          return (
            <Section key={block.id} className={block.background}>
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">{block.title}</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-lg text-gray-700">
                        {block.content}
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/example-work-place.jpg"
                      alt={block.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-800/10"></div>
                  </div>
                </div>
              </Container>
            </Section>
          );
        }

        if (block.layout === 'image-left') {
          return (
            <Section key={block.id} className={block.background}>
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                    <Image
                      src="/images/hero-image-example-websites.jpg"
                      alt={block.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-800/10"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold mb-6">{block.title}</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-lg text-gray-700">
                        {block.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Container>
            </Section>
          );
        }

        if (block.layout === 'list' && Array.isArray(block.content)) {
          return (
            <Section key={block.id} className={block.background}>
              <Container>
                <h2 className="text-3xl font-bold mb-8 text-center">{block.title}</h2>
                <div className="max-w-3xl mx-auto">
                  <ul className="space-y-4">
                    {block.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Container>
            </Section>
          );
        }

        if (block.layout === 'grid' && Array.isArray(block.content)) {
          return (
            <Section key={block.id} className={block.background}>
              <Container>
                <h2 className="text-3xl font-bold mb-12 text-center">{block.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {block.content.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </Container>
            </Section>
          );
        }

        if (block.layout === 'cards' && Array.isArray(block.content) && block.content.length > 0) {
          return (
            <Section key={block.id} className={block.background}>
              <Container>
                <h2 className="text-3xl font-bold mb-12 text-center">{block.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {block.content.map((industry, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <h3 className="text-xl font-semibold mb-3 text-primary-800">{industry}</h3>
                      <p className="text-gray-700">
                        Our {service.title} service is perfect for {industry.toLowerCase()} businesses in {location.name}, helping you attract more customers and grow your business.
                      </p>
                    </div>
                  ))}
                </div>
              </Container>
            </Section>
          );
        }

        if (block.layout === 'links' && Array.isArray(block.content) && block.content.length > 0) {
          return (
            <Section key={block.id} className={block.background}>
              <Container>
                <h2 className="text-3xl font-bold mb-6 text-center">{block.title}</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
                  We also provide {service.title} services to businesses in these nearby areas:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {block.content.map((area, i) => {
                    // Convert area name to slug format
                    const areaSlug = area.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                    return (
                      <Link 
                        key={i}
                        href={`/services/${service.slug}/${areaSlug}`}
                        className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
                      >
                        <span className="font-medium text-primary-800">{area}</span>
                      </Link>
                    );
                  })}
                </div>
              </Container>
            </Section>
          );
        }

        // Default fallback
        return null;
      })}

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Grow Your {location.name} Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              {content.cta}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact#discovery-call" 
                variant="accent" 
                size="lg"
              >
                Book a Discovery Call
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                className="border-white text-white hover:bg-primary-700"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServiceLocationTemplate;
