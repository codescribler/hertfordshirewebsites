import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & Monitoring Services',
  description: 'Professional website security, maintenance, and monitoring services for Hertfordshire businesses. Keep your website secure, updated, and running smoothly.',
  openGraph: {
    title: 'Security & Monitoring Services',
    description: 'Professional website security, maintenance, and monitoring services for Hertfordshire businesses. Keep your website secure, updated, and running smoothly.',
  },
};

export default function SecurityMonitoringServicesPage() {
  const service = {
    title: 'Security & Monitoring Services',
    slug: 'security-monitoring-services',
    shortDescription: 'Protect your website from threats and ensure it runs smoothly with our comprehensive security and monitoring services.',
    description: 'Our Security & Monitoring Services provide comprehensive protection and proactive maintenance for your website. We implement robust security measures to protect against hackers, malware, and data breaches, while our ongoing monitoring ensures your website remains fast, functional, and up-to-date. From regular backups and software updates to security scans and performance monitoring, our service gives you peace of mind that your online presence is secure and continuously operating at its best. We handle the technical aspects of website maintenance so you can focus on running your business.',
    price: 'Starting from £97 per month',
    features: [
      'Regular website backups with secure storage',
      'Malware scanning and removal',
      'Security firewall implementation',
      'WordPress core, theme, and plugin updates',
      'SSL certificate management and renewal',
      'Uptime monitoring (24/7)',
      'Performance and speed monitoring',
      'Monthly security reports',
      'Security breach recovery and support',
      'Database optimization',
      'Content and image optimization',
      'Broken link monitoring and fixing',
      'Emergency support for critical issues'
    ],
    benefits: [
      'Protect your website from hackers and malware',
      'Maintain compliance with security standards',
      'Prevent costly downtime and data loss',
      'Ensure optimal website performance',
      'Focus on your business instead of website maintenance',
      'Reduce risk of customer data breaches',
      'Extend the lifespan of your website',
      'Gain peace of mind with professional monitoring'
    ],
    faqs: [
      {
        question: 'What happens if my website gets hacked?',
        answer: 'If a security breach occurs, we take immediate action to contain the threat, remove malicious code, restore your website from a clean backup, and implement additional security measures to prevent further breaches. We also conduct a thorough investigation to understand how the breach occurred and provide recommendations to strengthen your security.'
      },
      {
        question: 'How often do you back up my website?',
        answer: 'Our standard service includes daily backups of your website files and database, securely stored in multiple locations. For e-commerce or high-traffic websites, we can increase the backup frequency to multiple times per day based on your needs.'
      },
      {
        question: 'Will updates affect how my website looks or functions?',
        answer: 'We take precautions to ensure updates do not negatively impact your website. Before applying updates to your live site, we test them in a staging environment to identify any potential issues. If an update might cause compatibility problems, we will notify you and discuss the best course of action.'
      },
      {
        question: 'What kind of monitoring do you provide?',
        answer: 'We monitor several critical aspects of your website: uptime (ensuring your site is accessible 24/7), performance (tracking load times and user experience), security (scanning for vulnerabilities and suspicious activity), and functionality (checking that forms, checkout processes, and other features work correctly).'
      },
      {
        question: 'Do I need security services if my website is small?',
        answer: 'Yes, websites of all sizes are targeted by automated attacks. In fact, small business websites are often specifically targeted because they tend to have fewer security measures in place. Our security services provide essential protection regardless of your website size or traffic volume.'
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
            <h2 className="text-3xl font-bold mb-6 text-center">About Our {service.title}</h2>
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
              <h2 className="text-3xl font-bold mb-6">Benefits of Our {service.title}</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">{service.title} Across Hertfordshire</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            We provide {service.title} to businesses throughout Hertfordshire. Click on your location to learn more about our services in your area.
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
              Ready to Keep Your Website Secure & Running Smoothly?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss how our {service.title} can help protect your online presence and give you peace of mind.
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
