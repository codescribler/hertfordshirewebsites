import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resources | Hertfordshire Websites",
  description: "Free tools and resources to help you improve your website and online presence.",
  keywords: "website audit tool, ROI calculator, website resources, website assessment, Hertfordshire",
};

export default function ResourcesPage() {
  const resources = [
    {
      title: "Website Audit Tool",
      description: "Assess your website's effectiveness with our comprehensive audit tool. Get actionable insights on how to improve your site's performance.",
      image: "/images/analytics.jpg",
      link: "/resources/website-audit",
    },
    {
      title: "Local SEO Checklist",
      description: "Download our free checklist to improve your business visibility in Google Maps and local search results.",
      image: "/images/googlesearch.jpg",
      link: "/resources/local-seo-checklist",
    },
    {
      title: "Lead Magnet Checklist",
      description: "Download our free checklist to create effective lead magnets that convert visitors into subscribers and customers.",
      image: "/images/contactus.jpg",
      link: "/resources/lead-magnet-checklist",
    },
    {
      title: "ROI Calculator",
      description: "Calculate the potential return on investment from improving your website and online marketing efforts.",
      image: "/images/seo.jpg",
      link: "/roi-calculator",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Resources</h1>
            <p className="text-lg text-gray-700 mb-8">
              Use our free tools and resources to assess and improve your website's performance and effectiveness.
            </p>
          </div>
        </Container>
      </Section>

      {/* Resources List */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-800/10"></div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary-800">{resource.title}</h2>
                  <p className="text-gray-700 mb-6">{resource.description}</p>
                  <Link 
                    href={resource.link}
                    className="inline-block bg-primary-800 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors duration-300"
                  >
                    Access Tool
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Personalized Help?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our tools provide valuable insights, but nothing beats personalized advice. Book a free discovery call to discuss your specific website needs.
            </p>
            <Link 
              href="/contact#discovery-call"
              className="inline-block bg-secondary-500 text-white py-3 px-8 rounded-md hover:bg-secondary-600 transition-colors duration-300"
            >
              Book a Discovery Call
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
