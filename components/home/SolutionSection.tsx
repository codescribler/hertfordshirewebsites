import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

const differentiators = [
  {
    title: 'Results-First Approach',
    description: "We don't just build pretty websites. Every design decision is driven by your business goals — more leads, more customers, more revenue.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Local Market Expertise',
    description: 'We understand Hertfordshire businesses and their customers. Our local knowledge helps us position your business to appeal to your target market.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    description: "We've helped dozens of Hertfordshire businesses generate hundreds of thousands of pounds through their websites. We measure success by your results.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const credentials = [
  'Former Head of Digital Marketing at Redington (London financial firm)',
  '10+ years building revenue-generating websites',
  'Generated hundreds of thousands in revenue for clients',
];

const SolutionSection = () => {
  return (
    <Section className="bg-primary-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - About */}
        <AnimateIn animation="fade-up">
          <div>
            <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-6 text-primary-800">
              Websites built by someone who understands business
            </h2>
            <p className="text-lg text-primary-600 mb-8">
              What makes us different is our unique combination of military precision, financial industry expertise, and over a decade of hands-on experience building revenue-generating websites.
            </p>

            {/* Daniel bio */}
            <div className="flex items-start gap-5 mb-8">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-secondary-100">
                  <Image
                    src="/images/danielwhittaker.jpg"
                    alt="Daniel Whittaker - Founder of Hertfordshire Websites"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold !mb-1 text-primary-800">Daniel Whittaker</h3>
                <p className="text-secondary-500 text-sm font-medium !mb-2">Founder &amp; Lead Developer</p>
                <p className="text-primary-500 text-sm !mb-0 italic">
                  &ldquo;My military background taught me precision and discipline &mdash; skills I apply to help local businesses succeed online.&rdquo;
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-primary-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button href="/contact#discovery-call" variant="apple-primary" size="lg" className="hover-lift">
              Book Your Free Discovery Call
            </Button>
          </div>
        </AnimateIn>

        {/* Right side - Differentiators */}
        <div className="space-y-5">
          {differentiators.map((item, index) => (
            <AnimateIn key={index} delay={index * 100} animation="slide-right">
              <div className="bg-white p-6 rounded-xl border border-primary-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center flex-shrink-0 text-secondary-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold !mb-2 text-primary-800">{item.title}</h4>
                    <p className="text-primary-500 !mb-0 text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
