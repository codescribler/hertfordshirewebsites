import { Section } from '@/components/ui/Section';
import AnimateIn from '@/components/ui/AnimateIn';

const benefits = [
  {
    title: 'Attract Local Customers 24/7',
    description: 'Your website works round the clock to bring in qualified leads, even while you sleep. No more relying solely on word-of-mouth.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Convert Visitors Into Customers',
    description: 'Strategic design with clear calls-to-action that guide visitors through your sales process and turn them into paying customers.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Build Trust and Credibility',
    description: 'Professional design positions you as the trusted authority in your field, making you the obvious choice over competitors.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const BenefitsSection = () => {
  return (
    <Section className="bg-white">
      <AnimateIn>
        <div className="text-center mb-14">
          <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">Benefits</p>
          <h2 className="section-title !mb-4">What a Great Website Does for Your Business</h2>
          <p className="section-subtitle !mb-0 max-w-2xl mx-auto">
            Beyond looking good, our websites deliver specific, measurable business outcomes.
          </p>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <AnimateIn key={index} delay={index * 100}>
            <div className="group bg-primary-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg border border-transparent hover:border-primary-100 transition-all duration-300 h-full cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center text-secondary-500 mb-6 group-hover:bg-secondary-100 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold !mb-3 text-primary-800">{benefit.title}</h3>
              <p className="text-primary-500 !mb-0 leading-relaxed">{benefit.description}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
