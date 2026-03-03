import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

const clientLogos = [
  { name: "First Point Physio", image: "/images/client-logos/firstpointphysio-logo.jpg" },
  { name: "Laurel Cottage Dental Practice", image: "/images/client-logos/laurelcottagedentalpractice-logo.png" },
  { name: "Renovation Planner", image: "/images/client-logos/renovationplanner-logo.png" },
];

const testimonials = [
  {
    quote: "Without Hertfordshire Websites, my company wouldn't be where it is today. Their broad knowledge of business setup, web design and marketing helped focus my business on what's important.",
    author: "Brent M.",
    company: "Renovation Planner",
    metric: "+78%",
    metricLabel: "organic traffic",
  },
  {
    quote: "It has been such fun working with Hertfordshire Websites and we have loved the results. More importantly we have loved the response from our customers!",
    author: "Mary-Ann Coertze",
    company: "The Meat Hook",
    metric: "+45%",
    metricLabel: "loyalty sign-ups",
  },
  {
    quote: "We've seen a 60% increase in qualified leads since launching our new website. The website has become our most effective marketing channel.",
    author: "Emma Morton",
    company: "The Meat Hook",
    metric: "+60%",
    metricLabel: "qualified leads",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array(5).fill(0).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <Section className="bg-primary-50">
      {/* Client logos bar */}
      <AnimateIn>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-20">
          <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">Trusted by</span>
          {clientLogos.map((client, index) => (
            <div key={index} className="group relative h-10 w-24 cursor-default">
              <div className="transition-all duration-300 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 h-full w-full">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Section header */}
      <AnimateIn>
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="section-title !mb-4">Real Results From Real Businesses</h2>
          <p className="section-subtitle !mb-0 max-w-2xl mx-auto">
            See how we&apos;ve helped Hertfordshire businesses achieve measurable growth.
          </p>
        </div>
      </AnimateIn>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {testimonials.map((t, index) => (
          <AnimateIn key={index} delay={index * 100}>
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              {/* Metric badge */}
              <div className="flex items-center justify-between mb-5">
                <Stars />
                <div className="text-right">
                  <span className="text-2xl font-bold text-secondary-500">{t.metric}</span>
                  <p className="text-xs text-primary-400 !mb-0">{t.metricLabel}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-grow mb-6">
                <p className="text-primary-600 text-base leading-relaxed !mb-0">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-primary-50">
                <div className="w-10 h-10 bg-secondary-50 rounded-full flex items-center justify-center text-secondary-500 font-semibold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-primary-800 !mb-0">{t.author}</p>
                  <p className="text-xs text-primary-400 !mb-0">{t.company}</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Case Studies */}
      <AnimateIn>
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold !mb-2 text-primary-800">Client Success Stories</h3>
          <p className="text-primary-500 !mb-0">See the full picture of how we helped these businesses grow.</p>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            image: '/images/meathook_website.png',
            alt: 'The Meat Hook website case study',
            title: 'The Meat Hook: 45% Increase in Loyalty Sign-ups',
            description: "The Meat Hook needed a website that reflected their personality and grew their loyalty programme. We delivered both.",
            link: '/case-studies/the-meat-hook',
          },
          {
            image: '/images/renovationplanner_website.png',
            alt: 'Renovation Planner website case study',
            title: 'Renovation Planner: 78% Growth in Organic Traffic',
            description: 'Renovation Planner needed better visibility online. We built a site with SEO at its core and the results speak for themselves.',
            link: '/case-studies/renovation-planner',
          },
        ].map((cs, index) => (
          <AnimateIn key={index} delay={index * 100}>
            <a href={cs.link} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 block cursor-pointer">
              <div className="relative aspect-[16/10] bg-primary-50 p-4">
                <Image src={cs.image} alt={cs.alt} fill className="object-contain" />
              </div>
              <div className="p-7">
                <h4 className="text-lg font-semibold !mb-2 text-primary-800 group-hover:text-secondary-500 transition-colors duration-300">{cs.title}</h4>
                <p className="text-sm text-primary-500 !mb-3">{cs.description}</p>
                <span className="text-secondary-500 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Read case study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </AnimateIn>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button href="/case-studies" variant="apple-secondary" className="hover-lift">
          View All Case Studies
        </Button>
      </div>
    </Section>
  );
};

export default Testimonials;
