import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { trackDownload } from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Dental Practice Website Optimisation Guide",
  description: "Transform your dental practice's online presence with our comprehensive guide to creating a patient-friendly website that builds trust and attracts new patients.",
  keywords: "dental website guide, dental practice marketing, patient attraction, website optimisation, dental SEO, healthcare website",
};

export default function DentalPracticeGuide() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden rounded-xl">
              <Image
                src="/images/industries/modern-dental-clinic.jpg.webp"
                alt="Modern dental clinic"
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dental Practice Website Optimisation Guide</h1>
            <p className="text-xl text-gray-700 mb-8">
              A comprehensive guide to creating a patient-friendly dental website that builds trust, showcases your expertise, and consistently attracts new patients to your practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/downloads/dental-practice-website-checklist.pdf" 
                variant="apple-primary"
                external={true}
                onClick={() => trackDownload(
                  '/downloads/dental-practice-website-checklist.pdf',
                  'pdf',
                  'Dental Practice Website Checklist'
                )}
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
              <h2>Why Your Dental Practice Website Is Critical to Practice Growth</h2>
              
              <p>
                In today's digital environment, over 80% of potential patients research dental practices online before booking an appointment. Your website isn't just a digital brochure—it's often the first impression potential patients have of your practice and plays a critical role in their decision-making process.
              </p>
              
              <p>
                An effective dental practice website needs to address patient concerns, showcase your expertise, alleviate dental anxiety, and make the booking process seamless. This guide provides a comprehensive framework for optimising your dental practice website to attract and convert more patients in Hertfordshire.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl my-8">
                <h3 className="text-primary-800 mt-0">What You'll Learn in This Guide:</h3>
                <ul>
                  <li>Essential elements of a patient-converting dental website</li>
                  <li>Strategies to address dental anxiety through your website</li>
                  <li>How to effectively showcase your dental services and expertise</li>
                  <li>Local SEO techniques specifically for dental practices</li>
                  <li>Patient education content strategies</li>
                  <li>Website features that simplify the new patient process</li>
                </ul>
              </div>
              
              <h2>The 7 Key Elements of High-Performing Dental Websites</h2>
              
              <h3>1. Trust-Building Visual Design</h3>
              
              <p>
                Dental websites require a unique design approach that balances professionalism with warmth, as many patients experience dental anxiety:
              </p>
              
              <ul>
                <li>Use a calming colour palette (blues and greens perform particularly well)</li>
                <li>Feature genuine photos of your practice, team, and treatment rooms</li>
                <li>Ensure a clean, uncluttered layout that reflects your practice's cleanliness</li>
                <li>Implement professional photography of your practice and team</li>
                <li>Use authentic, non-stock imagery whenever possible</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Include virtual tours of your practice to demystify the environment and reduce anxiety for new patients.
              </p>
              
              <h3>2. Dental Anxiety Addressing Content</h3>
              
              <p>
                Dental anxiety affects up to 60% of people and is a major barrier to booking appointments. Your website should proactively address these concerns:
              </p>
              
              <ul>
                <li>Create dedicated pages explaining your comfort approaches</li>
                <li>Include testimonials specifically from previously anxious patients</li>
                <li>Describe sedation options and comfort technologies available</li>
                <li>Use reassuring language throughout the site</li>
                <li>Show before/during/after treatment experiences through patient stories</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create video introductions where dentists and staff speak directly to anxious patients, explaining how the practice accommodates their concerns.
              </p>
              
              <h3>3. Service Presentation with Visual Education</h3>
              
              <p>
                Dental services can be difficult for patients to understand. Visual education helps patients appreciate the value of different treatments:
              </p>
              
              <ul>
                <li>Develop clear service pages for each major treatment category</li>
                <li>Include before/after galleries for cosmetic procedures</li>
                <li>Use interactive elements to explain complex procedures</li>
                <li>Incorporate informative videos demonstrating treatments</li>
                <li>Include pricing information or ranges where possible</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Consider creating "comparison sliders" for before/after images, allowing patients to interact with results.
              </p>
              
              <h3>4. Practice Technology & Expertise Showcase</h3>
              
              <p>
                Modern patients are increasingly interested in dental technology and techniques. Highlighting your advanced approaches differentiates your practice:
              </p>
              
              <ul>
                <li>Feature the advanced technologies used in your practice</li>
                <li>Explain how these technologies benefit the patient experience</li>
                <li>Showcase dentist credentials, continuing education, and specialisations</li>
                <li>Highlight professional memberships and certifications</li>
                <li>Explain your sterilisation and safety protocols</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create "Technology Spotlight" sections that explain complex equipment in patient-benefit terms rather than technical specifications.
              </p>
              
              <h3>5. Streamlined New Patient Process</h3>
              
              <p>
                The easier you make it to become a new patient, the more appointments you'll secure:
              </p>
              
              <ul>
                <li>Create clear "New Patient" sections with step-by-step information</li>
                <li>Provide downloadable new patient forms</li>
                <li>Implement online booking with real-time availability</li>
                <li>Include insurance and payment information</li>
                <li>Make emergency appointment booking prominent and simple</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Implement a "What to Expect" timeline for new patients, from booking through first appointment completion.
              </p>
              
              <h3>6. Local Dental SEO Implementation</h3>
              
              <p>
                Dental practices rely heavily on local patients, making local SEO critical for practice growth:
              </p>
              
              <ul>
                <li>Optimise for "dentist in [location]" keywords for all Hertfordshire areas you serve</li>
                <li>Implement dental-specific schema markup with your treatment specialities</li>
                <li>Create location-specific pages for multi-location practices</li>
                <li>Include embedded Google Maps and clear directions</li>
                <li>Maintain consistent practice information across all online platforms</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create content addressing specific local dental concerns, such as "Water Fluoridation Levels in Hertfordshire and Your Dental Health."
              </p>
              
              <h3>7. Patient Education Content Strategy</h3>
              
              <p>
                Educational content establishes your expertise while answering common patient questions:
              </p>
              
              <ul>
                <li>Develop a dental blog addressing common patient questions</li>
                <li>Create condition-specific content (e.g., gum disease, TMJ)</li>
                <li>Include preventative care guides and tips</li>
                <li>Develop age-specific dental information (children, teens, adults, seniors)</li>
                <li>Address common misconceptions about dental treatments</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create downloadable resources like "Post-Treatment Care Guides" that patients can reference at home.
              </p>
              
              <h2>Downloadable Dental Website Checklist</h2>
              
              <p>
                We've created a comprehensive checklist to help you evaluate your current dental website or plan improvements. This checklist covers all essential elements of an effective dental practice website, including:
              </p>
              
              <ul>
                <li>Patient-focused design elements</li>
                <li>Conversion optimisation features</li>
                <li>Required content sections</li>
                <li>Technical SEO elements</li>
                <li>Online booking and patient communication features</li>
                <li>Trust-building elements</li>
              </ul>
              
              <div className="bg-secondary-50 p-6 rounded-xl my-8 text-center">
                <h3 className="text-secondary-800 mt-0">Get Your Free Dental Website Checklist</h3>
                <p>Download our comprehensive 25-point checklist for creating a patient-attracting dental practice website.</p>
                <Button 
                  href="/downloads/dental-practice-website-checklist.pdf"
                  variant="apple-primary"
                  external={true}
                  onClick={() => trackDownload(
                    '/downloads/dental-practice-website-checklist.pdf',
                    'pdf',
                    'Dental Practice Website Checklist'
                  )}
                >
                  Download Checklist
                </Button>
              </div>
              
              <h2>Need Expert Help With Your Dental Practice Website?</h2>
              
              <p>
                While this guide provides a framework for optimising your dental practice website, implementation requires expertise in dental-specific web design, content creation, and local SEO.
              </p>
              
              <p>
                At Hertfordshire Websites, we specialise in creating dental practice websites that not only look professional but strategically address the unique challenges of dental marketing.
              </p>
              
              <p>
                Book a free 30-minute consultation to discuss your dental practice's specific needs and discover how we can help you create a website that attracts your ideal patients and grows your practice.
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
                <h3 className="text-xl font-bold mb-3 text-primary-800">Chiropractor's Guide to Patient-Converting Websites</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Learn how to design a chiropractic website that educates potential patients about your services and converts visitors into bookings.
                </p>
                <Link 
                  href="/resources/guides/chiropractor-website-guide"
                  className="text-secondary-500 font-medium inline-flex items-center hover:text-secondary-600"
                >
                  Read Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
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
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
