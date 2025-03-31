import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Healthcare Website Guides | Hertfordshire Websites",
  description: "Expert guides and resources for healthcare providers including chiropractors, physiotherapists, and dentists to improve online presence and attract more patients.",
  keywords: "healthcare website guides, medical website resources, chiropractor website, physiotherapist online marketing, dental practice website, Hertfordshire",
};

export default function GuidesPage() {
  const guides = [
    {
      title: "Chiropractor's Guide to Patient-Converting Websites",
      description: "Learn how to design a chiropractic website that educates potential patients about your services and converts visitors into bookings, with actionable steps and a downloadable checklist.",
      image: "/images/industries/A-modern-chiropractor-clinic.jpg.webp",
      link: "/resources/guides/chiropractor-website-guide",
    },
    {
      title: "Physiotherapy Practice Online Marketing Essentials",
      description: "Discover the key elements every physiotherapy website needs to effectively showcase your expertise and attract the right patients, complete with downloadable assessment checklist.",
      image: "/images/industries/modern-physiotherapy-clinic.jpg.webp",
      link: "/resources/guides/physiotherapy-practice-marketing-guide",
    },
    {
      title: "Dental Practice Website Optimisation Guide",
      description: "Transform your dental practice's online presence with our comprehensive guide to creating a patient-friendly website that showcases your services and builds trust.",
      image: "/images/industries/modern-dental-clinic.jpg.webp",
      link: "/resources/guides/dental-practice-website-guide",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Website Guides</h1>
            <p className="text-lg text-gray-700 mb-8">
              Specialised guides and resources created specifically for healthcare providers to improve their online presence, attract more patients, and grow their practice.
            </p>
          </div>
        </Container>
      </Section>

      {/* Guides List */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-800/10"></div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary-800">{guide.title}</h2>
                  <p className="text-gray-700 mb-6">{guide.description}</p>
                  <Link 
                    href={guide.link}
                    className="inline-block bg-primary-800 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors duration-300"
                  >
                    Read Guide
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
            <h2 className="text-3xl font-bold mb-6">Need Custom Help With Your Healthcare Website?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our guides provide valuable industry-specific insights, but nothing beats personalised advice. Book a free discovery call to discuss your specific healthcare practice website needs.
            </p>
            <Link 
              href="/contact#discovery-call"
              className="inline-block bg-secondary-500 text-white py-3 px-8 rounded-md hover:bg-secondary-600 transition-colors duration-300"
            >
              Book a Free Consultation
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
