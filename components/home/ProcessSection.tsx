import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Book Your Free Discovery Call",
      description: "We'll discuss your business goals, target audience, and website needs in a no-obligation 15-minute consultation to determine if we're a good fit to work together.",
      icon: (
        <div className="w-20 h-20 rounded-full bg-secondary-500 text-white flex items-center justify-center text-2xl font-bold">
          1
        </div>
      )
    },
    {
      number: 2,
      title: "We Build Your Custom Website",
      description: "Our team creates your strategic website following our proven development process – from design concept to development, content creation, and thorough testing.",
      icon: (
        <div className="w-20 h-20 rounded-full bg-secondary-500 text-white flex items-center justify-center text-2xl font-bold">
          2
        </div>
      )
    },
    {
      number: 3,
      title: "Watch Your Business Grow",
      description: "Your new website launches and starts attracting and converting customers automatically. We provide ongoing support to ensure continued success and improvement.",
      icon: (
        <div className="w-20 h-20 rounded-full bg-secondary-500 text-white flex items-center justify-center text-2xl font-bold">
          3
        </div>
      )
    }
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title">Our Simple 3-Step Process</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          We've streamlined website development into a simple, straightforward process that makes it easy for busy business owners.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 relative">
            {/* Step content */}
            <div className="bg-white p-8 rounded-lg border border-primary-100 shadow-sm text-center h-full hover-lift">
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">{step.title}</h3>
              <p className="text-primary-600">{step.description}</p>
            </div>
            
            {/* Connector (not on the last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary-500">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-primary-700 mb-6 max-w-3xl mx-auto">
          Ready to get started? Book your free 15-minute discovery call today, and let's discuss how we can help your business grow online.
        </p>
        <Button 
          href="/contact#discovery-call" 
          variant="apple-primary" 
          size="lg"
          className="hover-lift"
        >
          Book Your Free Discovery Call
        </Button>
      </div>
    </Section>
  );
};

export default ProcessSection;
