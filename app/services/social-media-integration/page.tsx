import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Integration | Hertfordshire Websites',
  description: 'Professional social media integration services for Hertfordshire businesses. Connect your website with social platforms to increase engagement and reach.',
  openGraph: {
    title: 'Social Media Integration | Hertfordshire Websites',
    description: 'Professional social media integration services for Hertfordshire businesses. Connect your website with social platforms to increase engagement and reach.',
  },
};

export default function SocialMediaIntegrationPage() {
  const service = {
    title: 'Social Media Integration',
    slug: 'social-media-integration',
    shortDescription: 'Seamlessly connect your website with social media platforms to expand your online presence and boost engagement.',
    description: 'Our Social Media Integration service creates a powerful connection between your website and social media platforms, maximizing your online visibility and engagement. We implement strategic integrations that display your social content on your website, make your web content easily shareable, and streamline your social media management. From feed displays and share buttons to automated posting and analytics tracking, our solutions create a cohesive online presence that helps you reach more customers and build stronger relationships with your audience across all digital touchpoints.',
    price: 'Starting from £297',
    features: [
      'Social media feed displays on your website',
      'Custom social sharing buttons and widgets',
      'Instagram gallery integration',
      'Facebook Page and Messenger integration',
      'Twitter timeline and tweet embedding',
      'LinkedIn company profile integration',
      'YouTube channel and video embedding',
      'Pinterest board and pin displays',
      'TikTok feed integration',
      'Automatic social sharing of new website content',
      'Social login implementation',
      'Social proof and review displays',
      'Cross-platform metrics tracking'
    ],
    benefits: [
      'Increase website engagement and time on site',
      'Grow your social media following from website visitors',
      'Build social proof by showcasing your social presence',
      'Make your content easily shareable across platforms',
      'Create a consistent brand experience across all channels',
      'Reach more potential customers through expanded visibility',
      'Improve SEO through social signals and increased engagement',
      'Streamline your marketing efforts with connected platforms'
    ],
    faqs: [
      {
        question: 'Which social media platforms can you integrate with my website?',
        answer: 'We can integrate all major social media platforms, including Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest, and TikTok. We can also work with other platforms based on your specific needs and target audience.'
      },
      {
        question: 'Will social media integration slow down my website?',
        answer: 'No, we implement social media integrations using optimized, asynchronous loading methods that ensure your website performance isn\'t compromised. We carefully balance functionality with performance to create a seamless user experience.'
      },
      {
        question: 'Do I need to provide access to my social media accounts?',
        answer: 'For some integrations, we may need read-only API access to your social accounts. We follow strict security protocols and will clearly explain what level of access is needed for each integration. For basic integrations like follow buttons or feed displays, we often don\'t need direct access to your accounts.'
      },
      {
        question: 'Can you set up automatic posting from my website to social media?',
        answer: 'Yes, we can implement functionality that automatically shares new blog posts, products, or other content to your social media accounts. This helps maintain consistent posting and drives traffic back to your website from social platforms.'
      },
      {
        question: 'How will I know if the social media integration is effective?',
        answer: 'We provide setup of tracking and analytics that show engagement metrics for your social integrations, including click-through rates on social sharing buttons, traffic from social platforms, and interaction with embedded social content. This data helps you understand the ROI of your social media integration.'
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
              Ready to Connect Your Website with Social Media?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss how our {service.title} service can help expand your online presence and engage with more customers.
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
