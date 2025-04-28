import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import ROICalculator from "@/components/calculator/ROICalculator";

export const metadata: Metadata = {
  title: "Website ROI Calculator for Hertfordshire Businesses",
  description: "Estimate your website ROI! Use our free calculator designed for Hertfordshire businesses to see how professional web design & SEO can boost revenue. Try it now.",
  keywords: "ROI calculator, website ROI, conversion rate, lead generation, business growth, website performance, digital marketing ROI",
};

export default function ROICalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Website ROI Calculator</h1>
            <p className="text-lg text-gray-700 mb-8">
              See how improving your website's performance can dramatically impact your business growth and revenue.
            </p>
          </div>
        </Container>
      </Section>

      {/* Calculator Section */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ROICalculator />
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Website Performance Matters</h2>
            <p className="text-lg text-gray-700">
              Small improvements in your website's performance can lead to significant increases in your business revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Increased Visibility</h3>
              <p className="text-gray-700">
                More website traffic means more potential customers seeing your products or services, expanding your reach and brand awareness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Better Conversion Rates</h3>
              <p className="text-gray-700">
                A well-designed website with clear calls-to-action and optimized user experience converts more visitors into leads and customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Higher ROI</h3>
              <p className="text-gray-700">
                Improved lead nurturing and closing rates mean you get more customers from the same marketing budget, increasing your return on investment.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Improve Your Website's Performance?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Book a free 15-minute discovery call to discuss how we can help your business grow with a high-performing website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact#discovery-call" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-block"
              >
                Book a Discovery Call
              </a>
              <a 
                href="/services" 
                className="bg-transparent hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg border border-white transition-colors duration-300 inline-block"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
