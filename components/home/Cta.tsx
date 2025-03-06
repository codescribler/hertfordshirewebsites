import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const Cta = () => {
  return (
    <Section className="bg-gradient-blue text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-8 text-white">
          Ready to Transform Your Hertfordshire Business Online?
        </h2>
        
        <div className="bg-white/10 rounded-lg p-6 mb-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-semibold text-white">What to Expect on Your Discovery Call</h3>
          </div>
          <ul className="text-left space-y-3 mb-6">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/90">A 15-minute no-obligation consultation with a website expert</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/90">Discussion of your business goals and how a website can help achieve them</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/90">Personalised recommendations for your specific business needs</span>
            </li>
          </ul>
          <p className="text-white/80 text-sm italic">No technical knowledge required - we speak in plain English!</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button 
            href="/contact#discovery-call" 
            variant="accent" 
            size="xl"
            className="hover-lift"
          >
            Book Your Free 15-Minute Discovery Call
          </Button>
          
          <Button 
            href="/contact" 
            variant="outline" 
            size="xl"
            className="border-white text-white hover:bg-white/10 hover-lift"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Cta;
