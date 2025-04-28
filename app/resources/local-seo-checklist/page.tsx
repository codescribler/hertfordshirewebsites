import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local SEO Checklist',
  description: 'Download our free Local SEO Checklist. Learn how to improve your business visibility in Google Maps and local search results.',
  keywords: 'local SEO, checklist, Google Maps, business listings, citations, Google Business Profile, local search, free download',
};

export default function LocalSEOChecklistPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Local SEO Checklist</h1>
              <p className="text-xl text-gray-700 mb-8">
                The ultimate checklist to improve your business visibility in Google Maps and local search results.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  href="#download-form" 
                  variant="accent" 
                  size="lg"
                  className="hover-lift"
                >
                  Download Free Checklist
                </Button>
                <Button 
                  href="/services/local-seo-optimization" 
                  variant="outline" 
                  size="lg"
                  className="hover-lift"
                >
                  Our Local SEO Services
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
                <div className="max-w-[250px] bg-white p-5 shadow-lg rounded-lg transform rotate-3">
                  <div className="text-center mb-2">
                    <h3 className="text-xl font-bold text-primary-800">Local SEO</h3>
                    <h4 className="text-lg font-semibold text-secondary-500">Optimization Checklist</h4>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Google Business Profile</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Local Citations</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Review Management</span>
                    </div>
                  </div>
                  <div className="text-xs text-center text-gray-500">
                    Free Download
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Why Local SEO is Crucial for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Increase Local Visibility</h3>
              <p className="text-gray-700">
                Get found by customers searching for businesses like yours in your local area, especially in Google Maps and local search results.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Drive More Foot Traffic</h3>
              <p className="text-gray-700">
                Convert online searches into real-world visitors to your physical location by appearing in "near me" searches.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Local Reputation</h3>
              <p className="text-gray-700">
                Establish credibility and trust in your community through positive reviews and consistent business information.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Inside Section */}
      <Section className="bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What's Inside The Checklist</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Google Business Profile Optimization</strong>: Step-by-step guide to creating and optimizing the most important local SEO asset.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>NAP Consistency Audit</strong>: How to ensure your business Name, Address, and Phone number are consistent across the web.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Review Generation Tactics</strong>: Proven methods to encourage satisfied customers to leave positive reviews.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Local Citation Building</strong>: Top directories and platforms where your business should be listed.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Local Schema Markup Guide</strong>: Technical implementation advice to help search engines understand your local business.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
                <div className="space-y-4 w-full max-w-md">
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h3 className="text-lg font-semibold">Local SEO Checklist</h3>
                    <p className="text-sm text-gray-500">A comprehensive guide to improving your local search visibility</p>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="checkbox" className="h-4 w-4 text-secondary-500" checked readOnly />
                      <span className="text-sm font-medium">Is your Google Business Profile complete?</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">Ensure your business name, address, phone number, website URL, business hours, and categories are complete.</p>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="checkbox" className="h-4 w-4 text-secondary-500" checked readOnly />
                      <span className="text-sm font-medium">Do you have recent reviews?</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">Regularly obtaining new reviews signals to Google that your business is active and trusted.</p>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="checkbox" className="h-4 w-4 text-secondary-500" />
                      <span className="text-sm font-medium">Is your NAP consistent across the web?</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">Your Name, Address, and Phone number must be identical on all online directories and listings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Download Form Section */}
      <Section className="bg-white" id="download-form">
        <Container>
          <div className="max-w-3xl mx-auto bg-primary-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Download Your Free Checklist</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Fill out the form below to get instant access to our Local SEO Checklist.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary-500 focus:border-secondary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary-500 focus:border-secondary-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary-500 focus:border-secondary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary-500 focus:border-secondary-500"
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-600">
                    I agree to receive marketing communications from Hertfordshire Websites. View our{' '}
                    <Link href="/privacy-policy" className="text-secondary-500 hover:text-secondary-700 underline">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
              </div>
              
              <div>
                <Button type="submit" variant="accent" fullWidth size="lg">
                  Download Checklist
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </Container>
      </Section>

      {/* Related Services Section */}
      <Section className="bg-primary-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Need Help With Your Local SEO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Local SEO Optimization</h3>
              <p className="text-gray-700 mb-6">
                Our Local SEO service helps your business stand out in local search results, Google Maps, and other local directories. Let us handle the optimization process for you.
              </p>
              <Button 
                href="/services/local-seo-optimization" 
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Google Analytics & Search Console Setup</h3>
              <p className="text-gray-700 mb-6">
                Monitor the success of your Local SEO efforts with proper analytics tracking. Our setup service ensures you have the insights you need.
              </p>
              <Button 
                href="/services/google-analytics-search-console-setup" 
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Boost Your Local Business Visibility?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Book a free discovery call to discuss how we can help you improve your local search rankings and attract more nearby customers.
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
                href="/services/local-seo-optimization" 
                variant="outline" 
                className="border-white text-white hover:bg-primary-700"
                size="lg"
              >
                Learn More About Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
