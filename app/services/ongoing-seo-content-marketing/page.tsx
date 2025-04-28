import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ongoing SEO & Content Marketing',
  description: 'Professional ongoing SEO and content marketing services for Hertfordshire businesses to improve search rankings and drive organic traffic.',
  openGraph: {
    title: 'Ongoing SEO & Content Marketing',
    description: 'Professional ongoing SEO and content marketing services for Hertfordshire businesses to improve search rankings and drive organic traffic.',
  },
};

export default function OngoingSeoContentMarketingPage() {
  const service = {
    title: 'Ongoing SEO & Content Marketing',
    slug: 'ongoing-seo-content-marketing',
    shortDescription: 'Continuous search engine optimization and content marketing to improve your website\'s rankings and drive organic traffic.',
    description: 'Our Ongoing SEO & Content Marketing service provides consistent, long-term search engine optimization and content creation to help your website climb higher in search results and attract more qualified visitors. We monitor your performance metrics, identify new keyword opportunities, create regular SEO-optimized content, and make continuous technical improvements to your website. This ongoing approach ensures your business stays competitive in search rankings and builds a valuable library of content that serves both your audience and search engines.',
    price: 'Starting from £350 per month',
    features: [
      'Monthly keyword research and strategy updates',
      'Regular SEO-optimized blog content creation',
      'Ongoing technical SEO optimization',
      'Content performance tracking and analysis',
      'Search ranking monitoring and reporting',
      'Backlink building and outreach',
      'Competitor analysis and benchmarking',
      'Content calendar development and management',
      'Monthly performance reports with actionable insights',
      'Regular content strategy meetings',
      'Social media content distribution',
      'Conversion rate optimization for content'
    ],
    benefits: [
      'Steadily improve your search engine rankings over time',
      'Build authority in your industry with quality content',
      'Drive consistent organic traffic to your website',
      'Stay ahead of competitors in search results',
      'Convert more visitors into leads and customers',
      'Build a valuable content library that works for you 24/7',
      'Adapt to algorithm changes and industry trends',
      'Demonstrate expertise and build trust with your audience'
    ],
    faqs: [
      {
        question: 'How long does it take to see results from ongoing SEO?',
        answer: 'While some improvements may be visible within the first few months, significant results from SEO typically take 4-6 months to materialize, with ongoing growth beyond that. SEO is a long-term strategy that builds momentum over time, making consistent effort crucial for lasting success.'
      },
      {
        question: 'How much content is included in the monthly service?',
        answer: 'Our standard package includes 2-4 optimized blog posts per month, but we can customize this based on your industry, competition level, and goals. Some businesses benefit from fewer, more in-depth pieces, while others need a higher volume of content.'
      },
      {
        question: 'Can I see examples of your content work?',
        answer: 'Yes, we are happy to provide samples of SEO-optimized content we have created for other clients in similar industries. This will give you a clear idea of our writing style, quality, and approach to content optimization.'
      },
      {
        question: 'Do you guarantee first-page rankings?',
        answer: 'We do not guarantee specific rankings because search algorithms are constantly evolving and numerous factors affect rankings. However, we do guarantee that we will follow SEO best practices and implement proven strategies that give your website the best chance to rank well for targeted keywords.'
      },
      {
        question: 'Can I cancel the service if I am not seeing results?',
        answer: 'Yes, our service operates on a month-to-month basis after the initial 3-month commitment. We are confident in our ability to deliver results, but we understand that business needs change, and we do not want to lock you into a long-term contract.'
      }
    ]
  };

  if (!service) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-lg text-gray-700 mb-8">
                {service.shortDescription}
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
                src="/images/seo.jpg"
                alt={`${service.title} web design service`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-800/10"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Description Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Our {service.title} Service</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700">
                {service.description}
              </p>
              {service.price && (
                <p className="text-xl font-semibold text-primary-800 mt-6">
                  {service.price}
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="bg-primary-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/analytics.jpg"
                alt={`Benefits of ${service.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-800/10"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits of Our {service.title} Service</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section className="bg-primary-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary-800">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Locations Section */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-center">{service.title} Services Across Hertfordshire</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            We provide {service.title} services to businesses throughout Hertfordshire. Click on your location to learn more about our services in your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Link 
              href={`/services/${service.slug}/watford`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">Watford</span>
            </Link>
            <Link 
              href={`/services/${service.slug}/st-albans`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">St. Albans</span>
            </Link>
            <Link 
              href={`/services/${service.slug}/hemel-hempstead`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">Hemel Hempstead</span>
            </Link>
            <Link 
              href={`/services/${service.slug}/stevenage`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">Stevenage</span>
            </Link>
            <Link 
              href={`/services/${service.slug}/hertford`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">Hertford</span>
            </Link>
            <Link 
              href={`/services/${service.slug}/bishops-stortford`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">Bishop's Stortford</span>
            </Link>
            <Link 
              href={`/services/${service.slug}/hitchin`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">Hitchin</span>
            </Link>
            <Link 
              href={`/services/${service.slug}/harpenden`}
              className="bg-primary-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">Harpenden</span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/locations" 
              className="text-primary-800 font-medium hover:text-primary-700 inline-flex items-center"
            >
              View All Locations
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started with Our {service.title} Service?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss your project and see how our {service.title} service can help your business grow online.
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
