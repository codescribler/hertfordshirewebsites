import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { trackDownload } from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Physiotherapy Practice Online Marketing Essentials | Hertfordshire Websites",
  description: "Discover the key elements every physiotherapy website needs to effectively showcase your expertise and attract the right patients in Hertfordshire.",
  keywords: "physiotherapy website, physio marketing guide, physiotherapist website design, healthcare marketing, Hertfordshire physiotherapy, online marketing for physiotherapists",
};

export default function PhysiotherapyGuide() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden rounded-xl">
              <Image
                src="/images/industries/modern-physiotherapy-clinic.jpg.webp"
                alt="Modern physiotherapy clinic"
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Physiotherapy Practice Online Marketing Essentials</h1>
            <p className="text-xl text-gray-700 mb-8">
              A comprehensive guide to creating a website and digital marketing strategy that effectively showcases your expertise and attracts the right patients to your physiotherapy practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/downloads/physiotherapy-website-checklist.pdf" 
                variant="apple-primary"
                external={true}
                onClick={() => trackDownload(
                  '/downloads/physiotherapy-website-checklist.pdf',
                  'pdf',
                  'Physiotherapy Website Checklist'
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
              <h2>Why Digital Marketing Matters for Physiotherapy Practices</h2>
              
              <p>
                In today's healthcare landscape, patients actively research treatment options before making appointments. Recent studies show that 84% of patients use online information to select physiotherapists, with most visiting multiple physiotherapy websites before deciding.
              </p>
              
              <p>
                An effective online presence doesn't just showcase your services—it demonstrates your expertise, builds trust with potential patients, and clearly communicates your approach to treatment. This guide provides a framework for developing a digital marketing strategy specifically tailored for physiotherapy practices in Hertfordshire.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl my-8">
                <h3 className="text-primary-800 mt-0">What You'll Learn in This Guide:</h3>
                <ul>
                  <li>Website elements that effectively communicate your physiotherapy approach</li>
                  <li>Content strategies to demonstrate your expertise</li>
                  <li>Local SEO techniques to attract patients in your service area</li>
                  <li>Patient journey mapping for your digital presence</li>
                  <li>Conversion strategies to turn website visitors into booked appointments</li>
                  <li>Patient retention marketing techniques</li>
                </ul>
              </div>
              
              <h2>The 6 Essential Elements of Effective Physiotherapy Marketing</h2>
              
              <h3>1. Condition-Specific Content Strategy</h3>
              
              <p>
                Patients seeking physiotherapy typically search for their specific condition rather than general "physiotherapy" services. Your content strategy should reflect this search behavior:
              </p>
              
              <ul>
                <li>Create detailed pages for each major condition you treat (e.g., sports injuries, back pain, post-surgical rehabilitation)</li>
                <li>Include your specific treatment approach for each condition</li>
                <li>Incorporate appropriate medical terminology while maintaining readability</li>
                <li>Include relevant case studies showing treatment progression</li>
                <li>Optimise for local search with location-specific condition pages</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Structure your condition pages using a consistent format: condition overview, symptoms, your physiotherapy approach, expected outcomes, and a clear call to action.
              </p>
              
              <h3>2. Visual Patient Journey and Treatment Process</h3>
              
              <p>
                Many potential patients have anxiety about physiotherapy due to uncertainty about the process. Address this by creating transparency around your treatment approach:
              </p>
              
              <ul>
                <li>Create a visual walkthrough of the first appointment</li>
                <li>Explain your assessment methodology</li>
                <li>Showcase your treatment environment with professional photos</li>
                <li>Provide video demonstrations of common treatment techniques</li>
                <li>Include a typical treatment timeline for common conditions</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Consider creating short welcome videos where you personally introduce your practice and philosophy. This helps build connection before the first appointment.
              </p>
              
              <h3>3. Credibility Through Specialisation Showcasing</h3>
              
              <p>
                Physiotherapy is a broad field with many specialisations. Highlighting your specific expertise areas helps you stand out:
              </p>
              
              <ul>
                <li>Clearly feature your qualifications and specialised training</li>
                <li>Highlight memberships in professional bodies</li>
                <li>Showcase continuing education and advanced certifications</li>
                <li>Create content around your specialist areas</li>
                <li>Include specific methodologies you've been trained in</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create a dedicated "Our Approach" page that explains your physiotherapy philosophy and methodology, connecting it to your training and specialisations.
              </p>
              
              <h3>4. Patient-Centred Booking System</h3>
              
              <p>
                The easier you make it for patients to book appointments, the more likely they are to choose your practice:
              </p>
              
              <ul>
                <li>Implement an online booking system showing real-time availability</li>
                <li>Create a simple first-appointment form gathering relevant medical information</li>
                <li>Send automatic appointment reminders via SMS or email</li>
                <li>Include clear information about accepted insurance providers</li>
                <li>Offer virtual consultation options where appropriate</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Ensure your booking process works seamlessly on mobile devices, as many patients will be booking while experiencing discomfort or pain.
              </p>
              
              <h3>5. Strategic Local SEO Implementation</h3>
              
              <p>
                Physiotherapy is primarily a local service, making local SEO critical for attracting patients in your area:
              </p>
              
              <ul>
                <li>Create location-specific landing pages for areas you serve in Hertfordshire</li>
                <li>Implement proper LocalBusiness schema markup with your physiotherapy specialty</li>
                <li>Maintain consistent NAP (Name, Address, Phone) information across all platforms</li>
                <li>Encourage and manage patient reviews on Google Business Profile</li>
                <li>Build relationships with local healthcare providers for referrals and links</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Create content that addresses localised physiotherapy needs, such as "Recovery Support for Hertfordshire Marathon Runners" or "Workplace Ergonomics for St Albans Office Workers."
              </p>
              
              <h3>6. Educational Content Marketing Program</h3>
              
              <p>
                Establishing yourself as a physiotherapy authority through educational content builds trust and attracts patients:
              </p>
              
              <ul>
                <li>Create practical home exercise guides for common conditions</li>
                <li>Develop an email sequence with preventative health tips</li>
                <li>Produce short, informative videos demonstrating proper techniques</li>
                <li>Write condition-specific downloadable resources</li>
                <li>Host webinars or in-person workshops on injury prevention</li>
              </ul>
              
              <p>
                <strong>Implementation tip:</strong> Focus your content on answering the top questions patients ask during consultations, addressing their concerns before they even book an appointment.
              </p>
              
              <h2>Downloadable Physiotherapy Website Assessment Checklist</h2>
              
              <p>
                We've created a comprehensive checklist to help you evaluate your current digital marketing strategy or plan improvements. This checklist covers all essential elements of effective physiotherapy marketing, including:
              </p>
              
              <ul>
                <li>Website structure and content organization</li>
                <li>Patient education resources</li>
                <li>Local SEO implementation</li>
                <li>Credential and specialisation presentation</li>
                <li>Booking system effectiveness</li>
                <li>Patient retention marketing elements</li>
              </ul>
              
              <div className="bg-secondary-50 p-6 rounded-xl my-8 text-center">
                <h3 className="text-secondary-800 mt-0">Get Your Free Assessment Checklist</h3>
                <p>Download our comprehensive 22-point checklist for creating an effective physiotherapy digital marketing strategy.</p>
                <Button 
                  href="/downloads/physiotherapy-website-checklist.pdf"
                  variant="apple-primary"
                  external={true}
                  onClick={() => trackDownload(
                    '/downloads/physiotherapy-website-checklist.pdf',
                    'pdf',
                    'Physiotherapy Website Checklist'
                  )}
                >
                  Download Checklist
                </Button>
              </div>
              
              <h2>Need Specialised Help With Your Physiotherapy Practice Website?</h2>
              
              <p>
                While this guide provides a framework for effective physiotherapy marketing, implementation requires expertise in healthcare-specific web design, content creation, and local SEO.
              </p>
              
              <p>
                At Hertfordshire Websites, we specialise in creating digital marketing strategies for healthcare professionals that effectively communicate your expertise and convert website visitors into patients.
              </p>
              
              <p>
                Book a free 30-minute consultation to discuss your physiotherapy practice's specific needs and discover how we can help you attract more of your ideal patients.
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
