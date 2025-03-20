import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const SolutionSection = () => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Daniel's bio and photo */}
        <div>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-secondary-50 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">The Hertfordshire Websites Solution</h2>
            </div>
            <p className="text-lg text-primary-700 mb-6">
              What makes us different is our unique combination of military precision, financial industry expertise, and over a decade of hands-on experience building revenue-generating websites.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="rounded-full bg-primary-100 p-4 flex-shrink-0 self-center md:self-start">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
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
              <h3 className="text-xl font-semibold mb-2">Meet Daniel</h3>
              <p className="text-primary-700 mb-4">Former Royal Marine turned digital strategist and founder of Hertfordshire Websites.</p>
              <p className="text-primary-600 text-sm">
                "My military background taught me the importance of precision, discipline, and strategic planning—skills I've applied to help local businesses succeed online for over 10 years."
              </p>
            </div>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Industry Experience</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Former Head of Digital Marketing at Redington (Financial firm in London)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>10+ years serving clients through Dreamfree (now Hertfordshire Websites)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Generated hundreds of thousands of pounds in revenue for clients</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Right side - Why our approach works */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">How We're Different</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-primary-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-50 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Results-First Approach</h4>
                  <p className="text-primary-600">
                    We don't just build pretty websites. We create strategic digital assets designed to generate leads and revenue. Our military precision means we measure success by your business results, not just aesthetics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-primary-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-50 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Local Market Expertise</h4>
                  <p className="text-primary-600">
                    We understand Hertfordshire businesses and their customers. Our local knowledge means we can position your business to appeal specifically to your target market, unlike generic website templates or overseas agencies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-primary-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-50 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Proven Track Record</h4>
                  <p className="text-primary-600">
                    We've helped dozens of Hertfordshire businesses generate hundreds of thousands of pounds through their websites. Our financial industry background means we understand ROI and how to maximize it for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              href="/contact#discovery-call" 
              variant="apple-primary" 
              size="lg"
              className="hover-lift"
            >
              Book Your Free 15-Minute Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
