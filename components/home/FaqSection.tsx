"use client";

import { Section } from '@/components/ui/Section';
import { useState } from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer: "Our website packages start from £699 for Herts Essentials, £1,795 for Herts Professional, and £4,499 for Herts Growth. We offer transparent pricing with no hidden costs, and we'll provide a clear quote after understanding your requirements during our free discovery call."
  },
  {
    question: "How long will it take to build my website?",
    answer: "Most projects are completed within 2-4 weeks from when we receive your content and design approval. Complex websites may take longer. We'll provide a specific timeline during our initial consultation."
  },
  {
    question: "Why not use a cheaper website builder?",
    answer: "While DIY builders appear cheaper initially, they typically cost more long-term through missed business opportunities. Our websites are strategically designed to generate leads and convert visitors — something template sites rarely achieve. Our clients typically see positive ROI within months."
  },
  {
    question: "Will my website rank in Google?",
    answer: "Yes. All websites are built with SEO best practices including on-page optimisation, local SEO elements, proper technical setup, and content structured for your target keywords. For competitive results, we also offer advanced SEO packages."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We offer maintenance and support packages to keep your website secure, up-to-date, and performing at its best. This includes regular updates, security monitoring, content updates, and strategy calls."
  },
  {
    question: "What makes you different from other web designers?",
    answer: "We build websites that generate business results, not just look pretty. Our approach combines military precision with extensive marketing expertise and over a decade of experience. We measure success by the leads and sales your website generates."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-primary-50">
      <AnimateIn>
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="section-title !mb-4">Common Questions</h2>
          <p className="section-subtitle !mb-0 max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>
      </AnimateIn>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AnimateIn key={index} delay={index * 50}>
            <div className="mb-3">
              <button
                className="w-full text-left p-5 bg-white rounded-xl border border-primary-100 hover:border-primary-200 transition-all duration-300 flex justify-between items-center gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-primary-800">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-secondary-50 rotate-180' : 'bg-primary-50'
                }`}>
                  <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-5 py-4 text-primary-500 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;
