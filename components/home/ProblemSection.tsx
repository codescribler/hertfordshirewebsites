import { Section } from '@/components/ui/Section';
import AnimateIn from '@/components/ui/AnimateIn';

const problems = [
  {
    text: 'Your website looks outdated next to competitors, giving a poor first impression',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    text: "You're invisible in local Google searches, missing customers actively looking for you",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    text: 'Your site gets traffic but fails to convert visitors into paying customers',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
  {
    text: "You're spending on ads and marketing but not seeing a positive return",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: 'Your DIY website feels like a business card, not a 24/7 sales tool',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: 'Potential customers are choosing competitors with a better digital presence',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
];

const ProblemSection = () => {
  return (
    <Section className="bg-white">
      <AnimateIn>
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">The Challenge</p>
          <h2 className="section-title !mb-4">Sound Familiar?</h2>
          <p className="section-subtitle !mb-0 max-w-2xl mx-auto">
            Most Hertfordshire businesses struggle with websites that look decent but don&apos;t deliver results.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-red-50/50 border border-red-100/60 transition-all duration-300 hover:bg-red-50"
              >
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 text-red-500">
                  {problem.icon}
                </div>
                <p className="text-primary-700 !mb-0 text-base leading-relaxed">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
};

export default ProblemSection;
