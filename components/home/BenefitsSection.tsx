import { Section } from '@/components/ui/Section';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Attract Local Customers 24/7",
      description: "Our SEO-optimised websites act as your tireless salesperson, working round the clock to attract potential customers while you focus on running your business.",
      deeperMeaning: "Stop wasting money on marketing that doesn't work. Our websites bring you qualified leads automatically, even while you sleep.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Convert Visitors Into Customers",
      description: "Strategic website design with clear calls-to-action and persuasive content that guides visitors through your sales process and turns them into paying customers.",
      deeperMeaning: "Stop losing potential customers to poor website experiences. Our conversion-focused design increases your sales without requiring more traffic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Build Trust and Credibility",
      description: "Professional design and strategic content that positions you as the trusted authority in your field, making you the obvious choice over competitors.",
      deeperMeaning: "Stop being overlooked for competitors. Our professional design establishes instant credibility that makes potential customers choose you first.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <Section className="bg-primary-50">
      <div className="text-center mb-16">
        <h2 className="section-title">What Our Websites Do For Your Business</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Beyond just looking good, our websites are designed to deliver specific, measurable business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-apple p-8 shadow-sm text-center hover-lift">
            <div className="flex justify-center mb-6">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">{benefit.title}</h3>
            <p className="text-primary-600 mb-6">{benefit.description}</p>
            <div className="bg-primary-50 p-4 rounded-md text-left">
              <p className="text-primary-700 font-medium mb-1">Why This Matters:</p>
              <p className="text-primary-600">{benefit.deeperMeaning}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
