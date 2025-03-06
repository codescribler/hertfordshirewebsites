import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import WebsiteAuditTool from "@/components/resources/WebsiteAuditTool";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Audit Tool | Hertfordshire Websites",
  description: "Assess your website's effectiveness with our free website audit tool. Get actionable insights to improve your site's performance.",
  keywords: "website audit, website assessment, homepage audit, website performance, website improvement, Hertfordshire",
};

export default function WebsiteAuditPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Homepage Audit Tool</h1>
            <p className="text-lg text-gray-700 mb-8">
              Assess your website's effectiveness and get actionable recommendations to improve your online presence.
            </p>
          </div>
        </Container>
      </Section>

      {/* Audit Tool Section */}
      <Section className="py-16 bg-white">
        <Container>
          <WebsiteAuditTool />
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-primary-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-800">What is a website homepage audit?</h3>
              <p className="text-gray-700">
                A website homepage audit is an assessment of your website's main page to determine its effectiveness in engaging visitors, communicating your value proposition, and converting visitors into customers. It evaluates key elements like your hero section, imagery, navigation, calls to action, content, trust elements, and footer.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-800">How accurate is this audit tool?</h3>
              <p className="text-gray-700">
                This tool provides a structured framework for evaluating your website based on industry best practices. While it offers valuable insights, it's a self-assessment tool and results may vary. For a comprehensive professional audit, we recommend booking a discovery call with our team.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-800">What should I do with my audit results?</h3>
              <p className="text-gray-700">
                Your audit results will highlight areas of strength and opportunities for improvement. Use the recommendations to prioritize website updates. If you need help implementing these improvements, our team can assist with professional web design and development services tailored to your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-800">How often should I audit my website?</h3>
              <p className="text-gray-700">
                We recommend auditing your website at least every 6-12 months, or whenever you make significant changes to your business offerings or branding. Regular audits help ensure your website remains effective and up-to-date with current web standards and user expectations.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Expert Help With Your Website?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Our team of web design experts can help you implement the improvements identified in your audit. Book a free discovery call to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact#discovery-call"
                className="inline-block bg-secondary-500 text-white py-3 px-8 rounded-md hover:bg-secondary-600 transition-colors duration-300"
              >
                Book a Discovery Call
              </Link>
              <Link 
                href="/resources"
                className="inline-block bg-transparent border border-white text-white py-3 px-8 rounded-md hover:bg-primary-700 transition-colors duration-300"
              >
                Explore More Resources
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
