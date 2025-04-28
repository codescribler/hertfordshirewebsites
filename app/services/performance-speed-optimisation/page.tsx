import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance & Speed Optimisation',
  description: 'Professional website performance and speed optimisation services for Hertfordshire businesses. Enhance your user experience and SEO with a faster website.',
  openGraph: {
    title: 'Performance & Speed Optimisation',
    description: 'Professional website performance and speed optimisation services for Hertfordshire businesses. Enhance your user experience and SEO with a faster website.',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/hero-image-example-websites.jpg',
        width: 1200,
        height: 630,
        alt: 'Performance & Speed Optimisation Services in Hertfordshire',
      }
    ],
  },
  keywords: 'website speed optimisation, performance optimisation, website speed, page speed improvements, faster loading website, performance enhancement, Core Web Vitals, SEO speed optimisation',
};

export default function PerformanceSpeedOptimisationPage() {
  const service = {
    title: 'Performance & Speed Optimisation',
    slug: 'performance-speed-optimisation',
    shortDescription: 'Improve your website loading times and overall performance to enhance user experience and boost your search engine rankings.',
    description: 'Our Performance & Speed Optimisation service is designed to make your website lightning-fast and responsive across all devices. Website speed is a critical factor in both user experience and search engine rankings. We conduct thorough performance audits, identify bottlenecks, and implement proven optimisation techniques to significantly reduce loading times. From image optimisation and code minification to server-side improvements and caching strategies, our comprehensive approach ensures your website performs at its best, keeping visitors engaged and improving your conversion rates.',
    price: 'Starting from £297',
    features: [
      'Comprehensive website performance audit',
      'Google PageSpeed Insights optimisation',
      'Core Web Vitals improvement',
      'Image optimisation and compression',
      'CSS and JavaScript minification',
      'Lazy loading implementation',
      'Browser caching configuration',
      'Content Delivery Network (CDN) setup',
      'Server response time optimisation',
      'Mobile performance enhancement',
      'WordPress performance tuning (if applicable)',
      'Database optimisation',
      'Before and after performance metrics report'
    ],
    benefits: [
      'Significantly faster page loading times',
      'Improved user experience and reduced bounce rates',
      'Better search engine rankings (speed is a ranking factor)',
      'Increased mobile performance for on-the-go visitors',
      'Higher conversion rates due to smoother user experience',
      'Reduced server load and bandwidth usage',
      'Better performance in areas with slow internet connections',
      'Competitive advantage over slower websites'
    ],
    faqs: [
      {
        question: 'How much can you improve my website speed?',
        answer: 'Most websites we optimise see loading time improvements of 40-70%, though results vary based on your current setup, hosting environment, and the complexity of your website. We provide before and after metrics so you can see the exact improvements made.'
      },
      {
        question: 'Will the optimisation affect how my website looks or functions?',
        answer: 'No, our optimisation process preserves all the visual elements and functionality of your website. We focus on the technical aspects that affect performance without changing your design or features. In fact, a faster website often makes features seem more responsive.'
      },
      {
        question: 'How long does the speed optimisation process take?',
        answer: 'For most websites, we can complete the optimisation process within 3-5 business days. More complex websites or those with significant performance issues may take longer. We will provide you with a specific timeline after our initial audit.'
      },
      {
        question: 'Do I need to change my hosting provider for better performance?',
        answer: 'Not necessarily. While hosting quality does impact performance, our optimisation techniques can significantly improve speed on most hosting platforms. If we determine that your hosting is severely limiting your site performance, we will recommend alternatives, but this is relatively rare.'
      },
      {
        question: 'Will you continue to monitor my website performance after optimisation?',
        answer: 'Our standard service includes a follow-up performance check one month after completion. For ongoing monitoring and optimisation, we offer a maintenance package that ensures your website continues to perform at optimal levels as new content is added and technologies evolve.'
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
                src="/images/example-work-place.jpg"
                alt={`${service.title} service`}
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
              Ready to Speed Up Your Website?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss how our {service.title} service can help improve your website's performance and user experience.
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
