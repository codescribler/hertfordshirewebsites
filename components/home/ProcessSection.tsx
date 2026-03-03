import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: "A free 15-minute consultation to understand your business goals, target audience, and website needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Build It',
    description: 'Your custom website is designed, developed, and tested following our proven process.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'You Grow',
    description: 'Your website launches and starts attracting customers. We provide ongoing support to keep improving.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const ProcessSection = () => {
  return (
    <Section className="bg-primary-50">
      <AnimateIn>
        <div className="text-center mb-14">
          <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="section-title !mb-4">Three Simple Steps</h2>
          <p className="section-subtitle !mb-0 max-w-2xl mx-auto">
            We&apos;ve streamlined the process so you can focus on running your business.
          </p>
        </div>
      </AnimateIn>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <AnimateIn key={index} delay={index * 150}>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 h-full cursor-default">
                {/* Step number */}
                <div className="text-5xl font-bold text-primary-100 mb-4">{step.number}</div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center text-secondary-500 mx-auto mb-5">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold !mb-3 text-primary-800">{step.title}</h3>
                <p className="text-primary-500 !mb-0 text-base">{step.description}</p>

                {/* Connector arrow on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-primary-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <AnimateIn delay={300}>
        <div className="text-center mt-12">
          <Button href="/contact#discovery-call" variant="apple-primary" size="lg" className="hover-lift">
            Start With a Free Discovery Call
          </Button>
        </div>
      </AnimateIn>
    </Section>
  );
};

export default ProcessSection;
