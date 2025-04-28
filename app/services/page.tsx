import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { services } from '@/lib/services';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our range of professional web design and digital marketing services for businesses in Hertfordshire. From simple websites to advanced SEO packages.',
  keywords: 'web design services, website packages, SEO services, content writing, Hertfordshire, digital marketing, business websites',
};

// SVG Icons for services
const WebsiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SeoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);

const ContentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

export default function ServicesPage() {
  // Group services by type
  const websitePackages = services.filter(service => 
    ['herts-essentials', 'herts-professional', 'herts-growth'].includes(service.id)
  );
  
  const additionalServices = services.filter(service => 
    !['herts-essentials', 'herts-professional', 'herts-growth'].includes(service.id)
  );

  // Function to get icon based on service ID
  const getServiceIcon = (serviceId: string) => {
    if (['herts-essentials', 'herts-professional', 'herts-growth', 'additional-website-pages'].includes(serviceId)) {
      return <WebsiteIcon />;
    } else if (['advanced-seo-package', 'local-seo-optimization', 'google-analytics-search-console-setup'].includes(serviceId)) {
      return <SeoIcon />;
    } else {
      return <ContentIcon />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              From simple websites to comprehensive digital marketing solutions, we offer a range of services to help your business succeed online.
            </p>
          </div>
        </Container>
      </Section>

      {/* Website Packages Section */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Website Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websitePackages.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-4">{getServiceIcon(service.id)}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>
                {service.price && (
                  <p className="text-lg font-semibold text-primary-800 mb-6">
                    {service.price}
                  </p>
                )}
                <Link 
                  href={`/services/${service.slug}`}
                  className="btn-primary w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Additional Services Section */}
      <Section className="bg-primary-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-3">{getServiceIcon(service.id)}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{service.shortDescription}</p>
                {service.price && (
                  <p className="text-base font-semibold text-primary-800 mb-4">
                    {service.price}
                  </p>
                )}
                <Link 
                  href={`/services/${service.slug}`}
                  className="text-primary-800 font-medium hover:text-primary-700 text-sm inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Custom Solutions Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/googlesearch.jpg"
                alt="Custom web solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-800/10"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Don't see exactly what you're looking for? We offer custom web design and development solutions tailored to your specific business needs. Contact us to discuss your project requirements.
              </p>
              <Button 
                href="/contact" 
                variant="default" 
                size="lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Book a free 15-minute discovery call today to discuss your project and see how we can help your business grow online.
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
}
