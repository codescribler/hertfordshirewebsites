import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { locations } from '@/lib/locations';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Locations',
  description: 'We provide professional web design services across Hertfordshire. Find your location to learn more about our services in your area.',
  keywords: 'Hertfordshire web design, local web designer, website services Hertfordshire, web design Watford, web design St Albans, web design Hemel Hempstead',
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Service Locations</h1>
            <p className="text-lg text-gray-700 mb-8">
              We provide professional web design and digital marketing services to businesses across Hertfordshire. Find your location to learn more about our services in your area.
            </p>
          </div>
        </Container>
      </Section>

      {/* Locations Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src="/images/hero-image-example-websites.jpg"
                    alt={`Web design services in ${location.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-800/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">{location.name}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {location.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {location.keyIndustries && location.keyIndustries.slice(0, 3).map((industry, index) => (
                      <span 
                        key={index} 
                        className="inline-block bg-primary-50 text-primary-800 text-xs px-2 py-1 rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/locations/${location.slug}`}
                      className="text-primary-800 font-medium hover:text-primary-700 inline-flex items-center"
                    >
                      View Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-sm text-gray-500">
                      {location.population}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Serving All of Hertfordshire</h2>
            <p className="text-lg text-gray-700">
              As a Hertfordshire-based web design agency, we understand the unique needs of local businesses. Our local expertise allows us to create websites that resonate with your target audience and help you stand out in your community.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary-800">Local SEO Expertise</h3>
                <p className="text-gray-700">
                  We optimize your website for local search, helping you attract customers in your specific area of Hertfordshire.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary-800">Community Understanding</h3>
                <p className="text-gray-700">
                  Our deep knowledge of Hertfordshire communities helps us create websites that connect with local audiences.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary-800">Face-to-Face Meetings</h3>
                <p className="text-gray-700">
                  Being local means we can meet in person to discuss your project and provide ongoing support when needed.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Grow Your Local Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss how we can help your business stand out in your local community with a professional, high-performing website.
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
