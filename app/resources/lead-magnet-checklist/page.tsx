import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lead Magnet Checklist',
  description: 'Download our free Lead Magnet Effectiveness Checklist. Learn how to create lead magnets that convert visitors into subscribers and customers.',
  keywords: 'lead magnet, checklist, lead generation, conversion optimization, free download, marketing resources, content marketing',
};

export default function LeadMagnetChecklistPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lead Magnet Effectiveness Checklist</h1>
              <p className="text-xl text-gray-700 mb-8">
                The ultimate checklist for creating lead magnets that convert visitors into subscribers and customers.
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
                  href="/services/lead-magnet-email-automation" 
                  variant="outline" 
                  size="lg"
                  className="hover-lift"
                >
                  Our Lead Magnet Services
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
                <div className="max-w-[250px] bg-white p-5 shadow-lg rounded-lg transform rotate-3">
                  <div className="text-center mb-2">
                    <h3 className="text-xl font-bold text-primary-800">Lead Magnet</h3>
                    <h4 className="text-lg font-semibold text-secondary-500">Effectiveness Checklist</h4>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Value-Driven Content</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Clear Benefit Statement</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Professional Design</span>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why This Checklist Will Transform Your Lead Generation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Increase Conversion Rates</h3>
              <p className="text-gray-700">
                Learn how to create lead magnets that convert at 2-3x the industry average by following our proven checklist.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Higher Quality Leads</h3>
              <p className="text-gray-700">
                Discover strategies to attract qualified prospects who are genuinely interested in your products or services.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Maximize ROI</h3>
              <p className="text-gray-700">
                Get the most value from your lead generation efforts by creating resources that deliver results without wasting time or money.
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
                    <strong>21-Point Format Checklist</strong>: Ensure your lead magnet has the right structure and components for maximum effectiveness.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Content Value Assessment</strong>: How to evaluate and improve the actual value your lead magnet provides to potential subscribers.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Conversion Optimization Tips</strong>: Specific strategies to increase opt-in rates for your lead magnet.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Design Best Practices</strong>: How to create visually appealing lead magnets even if you're not a designer.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-800 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Follow-up Email Templates</strong>: What to send after someone downloads your lead magnet to nurture the relationship.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
                <div className="space-y-4 w-full max-w-md">
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h3 className="text-lg font-semibold">Lead Magnet Effectiveness Checklist</h3>
                    <p className="text-sm text-gray-500">A comprehensive guide to creating high-converting lead magnets</p>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="checkbox" className="h-4 w-4 text-secondary-500" checked readOnly />
                      <span className="text-sm font-medium">Does it solve a specific problem?</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">Your lead magnet should address a specific pain point that your target audience experiences.</p>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="checkbox" className="h-4 w-4 text-secondary-500" checked readOnly />
                      <span className="text-sm font-medium">Is it quick to consume?</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">People are busy. The best lead magnets deliver value quickly and efficiently.</p>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="checkbox" className="h-4 w-4 text-secondary-500" />
                      <span className="text-sm font-medium">Does it showcase your expertise?</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">Your lead magnet should position you as an authority in your field.</p>
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
              Fill out the form below to get instant access to our Lead Magnet Effectiveness Checklist.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Need Help With Your Lead Generation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Lead Magnet & Email Automation</h3>
              <p className="text-gray-700 mb-6">
                We create strategic lead magnets and set up automated email sequences that nurture leads and convert them into customers. Let us handle the entire process for you.
              </p>
              <Button 
                href="/services/lead-magnet-email-automation" 
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Custom Blog Posts & Content Writing</h3>
              <p className="text-gray-700 mb-6">
                Our professional content writers can create engaging blog posts and content that attracts visitors and converts them into leads through strategic content marketing.
              </p>
              <Button 
                href="/services/custom-blog-posts-content-writing" 
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
              Ready to Grow Your Business with Effective Lead Generation?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Book a free discovery call to discuss how we can help you create lead magnets and email sequences that drive results.
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
                href="/services/lead-magnet-email-automation" 
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
