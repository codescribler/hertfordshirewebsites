import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Location } from '@/lib/locations';
import { services } from '@/lib/services';
import Link from 'next/link';
import Image from 'next/image';
import ServiceLocationSchema from '@/components/schema/ServiceLocationSchema';

interface LocationPageTemplateProps {
  location: Location;
}

const LocationPageTemplate = ({ location }: LocationPageTemplateProps) => {
  // Group services by type
  const websitePackages = services.filter(service => 
    ['herts-essentials', 'herts-professional', 'herts-growth'].includes(service.id)
  );
  
  const additionalServices = services.filter(service => 
    !['herts-essentials', 'herts-professional', 'herts-growth'].includes(service.id)
  );

  return (
    <>
      <ServiceLocationSchema 
        locationName={location.name}
        serviceOffered="Web Design Services"
      />
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design in {location.name}</h1>
              <p className="text-lg text-gray-700 mb-8">
                Professional web design services for businesses in {location.name}, Hertfordshire. We create custom, high-quality websites that attract customers and help your business grow.
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
                alt={`Web design services in ${location.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-800/10"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Location Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Web Design for {location.name} Businesses</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700">
                {location.description}
              </p>
              {location.businessFocus && (
                <p className="text-lg text-gray-700 mt-4">
                  {location.businessFocus}
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Website Packages Section */}
      <Section className="bg-primary-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Website Packages for {location.name} Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websitePackages.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>
                {service.price && (
                  <p className="text-lg font-semibold text-primary-800 mb-6">
                    {service.price}
                  </p>
                )}
                <Link 
                  href={`/services/${service.slug}/${location.slug}`}
                  className="btn-primary w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key Industries Section */}
      {location.keyIndustries && location.keyIndustries.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-center">Web Design for {location.name} Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {location.keyIndustries.map((industry, index) => (
                <div key={index} className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-primary-800">{industry}</h3>
                  <p className="text-gray-700">
                    Our web design services are perfect for {industry.toLowerCase()} businesses in {location.name}, helping you attract more customers and grow your business.
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Additional Services Section */}
      <Section className={location.keyIndustries && location.keyIndustries.length > 0 ? "bg-primary-50" : "bg-white"}>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Services for {location.name} Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{service.shortDescription}</p>
                <Link 
                  href={`/services/${service.slug}/${location.slug}`}
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

      {/* Nearby Areas Section */}
      {location.nearbyAreas && location.nearbyAreas.length > 0 && (
        <Section className={location.keyIndustries && location.keyIndustries.length > 0 ? "bg-white" : "bg-primary-50"}>
          <Container>
            <h2 className="text-3xl font-bold mb-6 text-center">We Also Serve Nearby Areas</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
              We also provide web design services to businesses in these nearby areas:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {location.nearbyAreas.map((area, index) => {
                // Convert area name to slug format
                const areaSlug = area.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index}
                    href={`/locations/${areaSlug}`}
                    className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
                  >
                    <span className="font-medium text-primary-800">{area}</span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Grow Your {location.name} Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss how we can help your business stand out in {location.name} with a professional, high-performing website.
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

export default LocationPageTemplate;
