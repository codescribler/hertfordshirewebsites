import { Section } from '@/components/ui/Section';

const ProblemSection = () => {
  return (
    <Section className="bg-primary-50">
      <div className="text-center mb-10">
        <h2 className="section-title">The Website Challenge</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Most Hertfordshire businesses struggle with websites that look good but don't actually deliver results.
        </p>
      </div>
      
      <div className="bg-white rounded-apple p-8 shadow-sm">
        <h3 className="text-xl font-medium mb-6 text-center">Does This Sound Familiar?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem points with icon indicators */}
          <div className="flex items-start gap-4">
            <div className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-primary-700">Your website looks outdated next to your competitors, giving potential customers a poor first impression</p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-primary-700">You're invisible in local Google searches, missing out on customers actively looking for your services</p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-primary-700">Your current website gets traffic but fails to convert visitors into quality leads and paying customers</p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-primary-700">You're spending money on SEO, social media, or Google Ads but not seeing a positive return on investment</p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-primary-700">Your DIY website feels like a digital business card rather than a 24/7 sales tool that works while you sleep</p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-primary-700">You're feeling frustrated that potential customers are choosing competitors with better digital presence</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSection;
