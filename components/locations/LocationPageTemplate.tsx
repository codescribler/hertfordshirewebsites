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

      {/* Business landscape — research-driven section. Only renders when populated. */}
      {location.businessLandscape && (
        <Section className="bg-primary-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-3 text-center">
                The {location.businessLandscape.localAuthority} business landscape
              </h2>
              <p className="text-center text-gray-600 mb-10 text-sm">
                Sector and size figures from{' '}
                <a
                  href={location.businessLandscape.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-700"
                >
                  ONS UK Business Counts {location.businessLandscape.year}
                </a>
                {location.businessLandscape.postcodeActiveCompanies !== undefined && (
                  <>
                    ; {location.postcodeArea} company counts from{' '}
                    <a
                      href="https://find-and-update.company-information.service.gov.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary-700"
                    >
                      Companies House
                    </a>
                    {location.businessLandscape.companiesHouseAsOf && (
                      <> (as of {location.businessLandscape.companiesHouseAsOf})</>
                    )}
                  </>
                )}
                .
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-800 mb-2">
                    {location.businessLandscape.totalBusinesses.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    business units in {location.businessLandscape.localAuthority}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-800 mb-2">
                    {location.businessLandscape.microBusinessPct}%
                  </div>
                  <div className="text-sm text-gray-600">
                    are micro-businesses (fewer than 10 employees) — exactly who we build websites for
                  </div>
                </div>
                {location.businessLandscape.postcodeActiveCompanies !== undefined ? (
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-primary-800 mb-2">
                      {location.businessLandscape.postcodeActiveCompanies.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      active companies registered to{' '}
                      <span className="font-medium">{location.postcodeArea}</span>
                      {location.businessLandscape.postcodeNewLast12Months !== undefined && (
                        <>
                          {' '}—{' '}
                          <span className="font-medium">
                            {location.businessLandscape.postcodeNewLast12Months.toLocaleString()}
                          </span>{' '}
                          new in the last 12 months
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  location.postcodeArea && (
                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                      <div className="text-4xl font-bold text-primary-800 mb-2">
                        {location.postcodeArea}
                      </div>
                      <div className="text-sm text-gray-600">
                        postcode area covered, plus surrounding {location.businessLandscape.localAuthority}
                      </div>
                    </div>
                  )
                )}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Top sectors in {location.businessLandscape.localAuthority}
              </h3>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <ul className="space-y-3">
                  {location.businessLandscape.topSectors.map((sector, idx) => {
                    const max = location.businessLandscape!.topSectors[0].count;
                    const pct = Math.round((sector.count / max) * 100);
                    return (
                      <li key={idx} className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-800">{sector.label}</span>
                            <span className="text-gray-600">{sector.count.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Commercial areas — town-specific named clusters. */}
      {location.commercialAreas && location.commercialAreas.length > 0 && (
        <Section className="bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-3 text-center">
                Where {location.name} businesses cluster
              </h2>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                We work across all of {location.name}, but most of our clients trade from one of these commercial areas. Knowing the local geography lets us tune sites for the customers each area attracts.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {location.commercialAreas.map((area, idx) => (
                  <div key={idx} className="bg-primary-50 rounded-lg p-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-primary-800">{area.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{area.type}</p>
                    <p className="text-gray-700">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

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

      {/* Web Design Section - Only for priority locations */}
      {location.webDesignFocus && location.webDesignBenefits && (
        <Section className="bg-gradient-subtle">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Web Design in {location.name}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                {location.webDesignFocus}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {location.webDesignBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  href={`/contact`}
                  variant="accent"
                  size="lg"
                >
                  Get a Free Web Design Quote for {location.name}
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Town-specific FAQs */}
      {location.townFAQs && location.townFAQs.length > 0 && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: location.townFAQs.map(faq => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
          <Section className="bg-white">
            <Container>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  FAQs from {location.name} businesses
                </h2>
                <div className="space-y-4">
                  {location.townFAQs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-primary-50 rounded-lg p-6 cursor-pointer"
                    >
                      <summary className="font-semibold text-lg text-primary-800 list-none flex justify-between items-center">
                        <span>{faq.question}</span>
                        <svg
                          className="w-5 h-5 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        </>
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
