import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import DiscoveryCallForm from "@/components/contact/DiscoveryCallForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Hertfordshire Web Design & SEO Experts",
  description: "Contact Hertfordshire Websites for expert web design and SEO services in Hertfordshire. Ready to grow your business online? Book your free discovery call today!",
  keywords: "contact, web design, Hertfordshire, discovery call, website quote",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-700 mb-8">
                Have a question or ready to start your project? We're here to help. Reach out to us using the form below or book a free discovery call.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/contactus.jpg"
                alt="Contact us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-800/10"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Information */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and support
              </p>
              <a 
                href="mailto:hello@hertfordshirewebsites.co.uk" 
                className="text-primary-800 font-medium hover:text-primary-700"
              >
                hello@hertfordshirewebsites.co.uk
              </a>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Mon-Fri, 9am-5pm
              </p>
              <a 
                href="tel:07786556885" 
                className="text-primary-800 font-medium hover:text-primary-700"
              >
                07786 556885
              </a>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book a Call</h3>
              <p className="text-gray-600 mb-4">
                Schedule a free 15-minute discovery call
              </p>
              <a 
                href="#discovery-call" 
                className="text-primary-800 font-medium hover:text-primary-700"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Discovery Call Section */}
          <div id="discovery-call" className="bg-primary-800 rounded-lg shadow-lg p-8 text-white scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Book Your Free Discovery Call</h2>
                <p className="text-gray-200 mb-6">
                  Schedule a free 15-minute call with our team to discuss your project requirements and how we can help your business grow online.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">Discuss Your Goals</h3>
                      <p className="text-gray-300">
                        Tell us about your business and what you want to achieve with your website.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">Get Expert Advice</h3>
                      <p className="text-gray-300">
                        Receive professional recommendations tailored to your specific needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">No Obligation</h3>
                      <p className="text-gray-300">
                        The call is completely free with no pressure to proceed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg p-6 text-gray-800">
                  <DiscoveryCallForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
