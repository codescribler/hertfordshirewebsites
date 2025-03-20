"use client";

import { Section } from '@/components/ui/Section';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "How much does a website cost?",
      answer: "Our website packages start from £699 for our Herts Essentials package, £1,795 for our Herts Professional package, and £4,499 for our Herts Growth package. The exact investment depends on your specific business needs and goals. We offer transparent pricing with no hidden costs, and we'll provide you with a clear quote after understanding your requirements during our free 15-minute discovery call."
    },
    {
      question: "How long will it take to build my website?",
      answer: "Most projects are completed within 2-4 weeks from the time we receive your content and approval on designs. Complex websites with advanced functionality may take longer. We'll provide you with a specific timeline during our initial consultation based on your requirements and current workload."
    },
    {
      question: "Why can't I just use a cheaper website builder?",
      answer: "While DIY website builders appear cheaper initially, they typically cost more in the long run through missed business opportunities. Our websites are strategically designed to generate leads and convert visitors into customers - something template sites rarely achieve. Our clients typically see a positive ROI within months through increased business, better qualified leads, and improved customer conversion rates."
    },
    {
      question: "Will my website rank in Google searches?",
      answer: "Yes, all of our websites are built using SEO best practices to help you rank better in search engines. We include on-page SEO optimisation, local SEO elements, proper technical setup, and content structured to target specific keywords important to your business. For businesses wanting to dominate competitive search results, we also offer advanced SEO packages."
    },
    {
      question: "Do you offer ongoing support after the website is launched?",
      answer: "Absolutely. We offer ongoing maintenance and support packages to keep your website secure, up-to-date, and performing at its best. Our support includes regular updates, security monitoring, content updates, and technical support. We're also available for strategy calls to help you continue maximizing results from your website."
    },
    {
      question: "What makes you different from other web designers?",
      answer: "Unlike many web designers who focus primarily on aesthetics, we build websites that actually generate business results. Our approach combines military precision (from my Royal Marine background) with extensive marketing expertise (from my time as head of digital marketing at a City financial firm). We measure success by the leads and sales your website generates, not just how it looks."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Get answers to common questions about our website services for Hertfordshire businesses.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border border-primary-100 rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-6 focus:outline-none bg-white hover:bg-primary-50 transition-colors duration-300 flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-xl font-medium text-primary-800">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-primary-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 bg-white text-primary-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;
