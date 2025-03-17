import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const Hero = () => {
  return (
    <Section 
      spacing="xl" 
      className="relative overflow-hidden bg-gradient-subtle"
      containerSize="apple"
    >
      <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-secondary-500 font-medium text-sm">Trusted by Hertfordshire Businesses</span>
          <div className="flex items-center">
            {Array(5).fill(0).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
          Professional Websites <span className="text-gradient">That Grow</span> Your Hertfordshire Business
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-500 max-w-3xl mx-auto mb-10">
          We create high-quality, SEO-optimised websites specifically designed for local Hertfordshire businesses looking to attract more customers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
          <Button 
            href="/contact#discovery-call" 
            variant="apple-primary" 
            size="lg"
            className="hover-lift"
          >
            Book Your Free 15-Minute Discovery Call
          </Button>
          
          <Button 
            href="/services" 
            variant="apple-secondary" 
            size="lg"
            className="hover-lift"
          >
            Explore Our Services
          </Button>
        </div>
      </div>
      
      <div className="relative mx-auto max-w-5xl animate-scale-in">
        <div className="aspect-[16/9] relative rounded-apple overflow-hidden shadow-lg">
          <Image
            src="/images/hero-image-example-websites.jpg"
            alt="Web design portfolio examples for Hertfordshire businesses including cafes, shops, and professional services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-800/5"></div>
        </div>
        
        <div className="mt-8 text-center text-primary-500">
          <p>Serving businesses across Hertfordshire including Watford, St. Albans, Hemel Hempstead and more.</p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
