import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Chiropractor's Guide to Patient-Converting Websites | Hertfordshire Websites",
  description: "Learn how to create a chiropractic website that educates potential patients about your services and converts visitors into bookings with our comprehensive guide.",
  keywords: "chiropractor website guide, chiropractic practice website, patient conversion, healthcare website design, Hertfordshire chiropractor, SEO for chiropractors",
};

export default function ChiropractorGuide() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden rounded-xl">
              <Image
                src="/images/industries/A-modern-chiropractor-clinic.jpg.webp"
                alt="Modern chiropractor clinic"
                fill
                className="object-cover"
              />
            </div>
            <Link href="/resources/guides" className="text-primary-600 hover:text-primary-800 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Guides
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chiropractor's Guide to Patient-Converting Websites</h1>
            <p className="text-xl text-gray-700 mb-8">
              A comprehensive guide to creating a website that educates potential patients and converts visitors into bookings for your chiropractic practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/downloads/chiropractor-website-checklist.pdf" 
                variant="apple-primary"
                external={true}
              >
                Download Checklist
              </Button>
              
              <Button 
                href="/contact#discovery-call" 
                variant="outline"
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2>Why Your Chiropractic Website Matters</h2>
              
              <p>
                In today's digital-first world, your website is often the first impression potential patients have of your chiropractic practice. Studies show that 70% of patients research healthcare providers online before booking an appointment, and 83% visit a provider's website during this research phase.
              </p>
              
              <p>
                A well-designed chiropractic website doesn't just showcase your services—it educates patients, builds trust, highlights your expertise, and ultimately converts visitors into appointments. The following guide provides a framework for creating a website that accomplishes these goals specifically for chiropractic practices in Hertfordshire.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl my-8">
                <h3 className="text-primary-800 mt-0">What You'll Learn in This Guide:</h3>
                <ul>
                  <li>Essential elements every chiropractic website must include</li>
                  <li>How to effectively communicate your approach to patient care</li>
                  <li>Ways to showcase your expertise and specialisations</li>
                  <li>Best practices for optimising for local search</li>
                  <li>How to create a seamless booking process</li>
                  <li>Keys to building patient trust and credibility online</li>
                </ul>
              </div>
              
              <h2>The 7 Essential Elements of a High-Converting Chiropractic Website</h2>
              
              <h3>1. Clear Communication of Your Approach and Expertise</h3>
              
              <p>
                Potential patients need to understand your approach to chiropractic care and why you're the right practitioner for their needs. Your website should clearly answer these key questions:
              </p>
              
              <ul>
                <li>What conditions do you treat?</li>
                <li>What techniques and approaches do you use?</li>
                <li>What specialisations or additional certifications do you have?</li>
                <li>What is your philosophy of care?</li>
                <li>What makes your practice different from others in Hertfordshire?</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create dedicated service pages for each main condition you treat (e.g., back pain, sciatica, sports injuries) that explain your approach to that specific condition.
              </p>
              
              <h3>2. Educational Content That Builds Trust and Authority</h3>
              
              <p>
                Educational content positions you as an authority and helps patients understand how chiropractic care can address their specific concerns. This content should be:
              </p>
              
              <ul>
                <li>Written in accessible, jargon-free language</li>
                <li>Specific to conditions you commonly treat</li>
                <li>Supportive of your expertise without making medical claims</li>
                <li>Optimised for local SEO (e.g., "sciatica treatment in Watford")</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create an FAQ section addressing common questions about chiropractic treatments, what to expect during the first visit, insurance coverage, and more.
              </p>
              
              <h3>3. Social Proof and Credibility Indicators</h3>
              
              <p>
                Patient testimonials and reviews are critical for building trust with potential patients. Your website should include:
              </p>
              
              <ul>
                <li>Patient success stories (with appropriate privacy measures)</li>
                <li>Integration with Google Business reviews</li>
                <li>Before/after case studies (where appropriate)</li>
                <li>Professional credentials, certifications, and memberships</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Include location-specific testimonials from patients in different Hertfordshire areas to help with local relevance.
              </p>
              
              <h3>4. Clear Visibility of Your Location and Service Areas</h3>
              
              <p>
                Make it easy for local patients to understand if you serve their area:
              </p>
              
              <ul>
                <li>Embed Google Maps showing your practice location</li>
                <li>List specific areas/towns you serve in Hertfordshire</li>
                <li>Include parking information and public transport options</li>
                <li>Add specifics like "10 minutes from Watford Junction station"</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create a dedicated location page optimised for "chiropractor near me" searches for each major area you serve.
              </p>
              
              <h3>5. Frictionless Booking Process</h3>
              
              <p>
                The easier you make it to book, the more appointments you'll secure:
              </p>
              
              <ul>
                <li>Prominent "Book Now" buttons throughout your site</li>
                <li>Online booking system showing available times</li>
                <li>Multiple contact options (phone, email, form)</li>
                <li>Clear information about what new patients should expect</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> If possible, enable online booking directly through your website rather than redirecting to a third-party platform.
              </p>
              
              <h3>6. Mobile-First, Fast-Loading Design</h3>
              
              <p>
                With over 60% of healthcare searches performed on mobile devices, your site must be:
              </p>
              
              <ul>
                <li>Fully responsive on all devices</li>
                <li>Fast-loading (under 3 seconds)</li>
                <li>Easy to navigate with one hand</li>
                <li>Designed with large, tap-friendly buttons</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Test your site's mobile speed with Google's PageSpeed Insights and address any issues identified.
              </p>
              
              <h3>7. Local SEO Optimisation</h3>
              
              <p>
                For chiropractic practices, local SEO is crucial for attracting nearby patients:
              </p>
              
              <ul>
                <li>Localised content mentioning specific towns and areas</li>
                <li>Proper schema markup for your practice</li>
                <li>Google Business Profile optimisation</li>
                <li>Local link building with Hertfordshire businesses</li>
                <li>Integration with local directories</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create content that addresses common conditions specific to your local community, e.g., "Back Pain Treatment for Watford Office Workers."
              </p>
              
              <h2>Downloadable Chiropractic Website Checklist</h2>
              
              <p>
                We've created a comprehensive checklist to help you evaluate your current website or plan your new one. This checklist covers all essential elements of an effective chiropractic website, including:
              </p>
              
              <ul>
                <li>Technical website requirements</li>
                <li>Content framework</li>
                <li>Local SEO essentials</li>
                <li>Conversion optimisation</li>
                <li>Patient journey mapping</li>
              </ul>
              
              <div className="bg-secondary-50 p-6 rounded-xl my-8 text-center">
                <h3 className="text-secondary-800 mt-0">Get Your Free Checklist</h3>
                <p>Download our comprehensive 24-point checklist for creating a patient-converting chiropractic website.</p>
                <Button 
                  href="/downloads/chiropractor-website-checklist.pdf"
                  variant="apple-primary"
                  external={true}
                >
                  Download Checklist
                </Button>
              </div>
              
              <h2>Need Help Implementing These Strategies?</h2>
              
              <p>
                While this guide provides a framework for creating an effective chiropractic website, implementation requires expertise in design, development, content creation, and SEO.
              </p>
              
              <p>
                At Hertfordshire Websites, we specialise in creating websites for healthcare practitioners that not only look professional but are strategically designed to attract patients and generate bookings.
              </p>
              
              <p>
                Book a free 30-minute consultation to discuss your chiropractic practice's website needs and discover how we can help you create a website that educates your patients and grows your practice.
              </p>
              
              <div className="text-center mt-8">
                <Button 
                  href="/contact#discovery-call" 
                  variant="apple-primary"
                  size="lg"
                >
                  Book Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Related Guides */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Related Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-primary-800">Physiotherapy Practice Online Marketing Essentials</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Discover the key elements every physiotherapy website needs to effectively showcase your expertise and attract the right patients.
                </p>
                <Link 
                  href="/resources/guides/physiotherapy-practice-marketing-guide"
                  className="text-secondary-500 font-medium inline-flex items-center hover:text-secondary-600"
                >
                  Read Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-primary-800">Dental Practice Website Optimisation Guide</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Transform your dental practice's online presence with our comprehensive guide to creating a patient-friendly website.
                </p>
                <Link 
                  href="/resources/guides/dental-practice-website-guide"
                  className="text-secondary-500 font-medium inline-flex items-center hover:text-secondary-600"
                >
                  Read Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
