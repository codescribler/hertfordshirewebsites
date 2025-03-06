import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const Testimonials = () => {
  // Trust badges section
  const trustBadges = [
    { name: "Google Partner", image: "/images/googlesearch.jpg" },
    { name: "Analytics Certified", image: "/images/analytics.jpg" },
    { name: "SEO Certified", image: "/images/seo.jpg" },
  ];

  const testimonials = [
    {
      quote: "Without Hertfordshire Websites, my company wouldn't be where it is today. Their broad knowledge of business setup, web design and marketing helped focus my business on what's important. Our organic traffic increased by 78% in just 3 months!",
      author: "Brent M.",
      company: "Renovation Planner",
      metric: "78% increase in organic traffic"
    },
    {
      quote: "It has been such fun working with Hertfordshire Websites and we have loved the results. More importantly we have loved the response from our customers! We now have 45% more people joining our loyalty scheme and a website that reflects our personality.",
      author: "Mary-Ann Coertze",
      company: "The Meat Hook",
      metric: "45% increase in loyalty sign-ups"
    },
    {
      quote: "We've seen a 60% increase in qualified leads since launching our new website. We now have a better understanding of our customers and the website has become our most effective marketing channel.",
      author: "Emma Morton",
      company: "The Meat Hook",
      metric: "60% increase in qualified leads"
    },
  ];

  return (
    <Section className="bg-primary-50">
      {/* Trust Badges */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-primary-800">Trusted Expertise</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 relative mb-2">
                <Image 
                  src={badge.image}
                  alt={badge.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-primary-700">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We take pride in delivering exceptional results for our clients. Here's what they have to say about working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-8 relative"
          >
            {/* Metric highlight */}
            <div className="absolute -top-4 -right-4 bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
              {testimonial.metric}
            </div>
            
            {/* Quote mark */}
            <div className="absolute top-6 left-6 text-6xl text-primary-100 opacity-50 pointer-events-none">
              "
            </div>
            
            <div className="relative">
              <p className="text-gray-700 mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-800 font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-primary-800 mb-0.5">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 -mt-0.5">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Studies Section Header */}
      <div className="text-center mt-20 mb-8">
        <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          See how we've helped local Hertfordshire businesses achieve remarkable results.
        </p>
      </div>

      {/* Case Studies Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Case Study 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative aspect-[16/10] bg-white p-2">
            <Image
              src="/images/meathook_website.png"
              alt="The Meat Hook website case study"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3">The Meat Hook: 45% Increase in Loyalty Sign-ups</h3>
            <p className="text-gray-700 mb-4">
              The Meat Hook needed a website that would increase loyalty members. Their initial attempt at a website wasn't up to scratch, so they turned to us for help.
            </p>
            <a 
              href="/case-studies/the-meat-hook" 
              className="text-primary-800 font-medium hover:text-primary-700 inline-flex items-center"
            >
              Read the full case study
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative aspect-[16/10] bg-white p-2">
            <Image
              src="/images/renovationplanner_website.png"
              alt="Renovation Planner website case study"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3">Renovation Planner: 78% Growth in Organic Traffic</h3>
            <p className="text-gray-700 mb-4">
              Renovation Planner needed to improve their online visibility and attract more local customers. We implemented a comprehensive SEO strategy alongside their new website.
            </p>
            <a 
              href="/case-studies/renovation-planner" 
              className="text-primary-800 font-medium hover:text-primary-700 inline-flex items-center"
            >
              Read the full case study
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* View All Case Studies Button */}
      <div className="text-center mt-10">
        <Button 
          href="/case-studies" 
          variant="apple-primary"
          className="hover-lift"
        >
          View All Case Studies
        </Button>
      </div>
    </Section>
  );
};

export default Testimonials;
