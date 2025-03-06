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
        <div className="mb-6">
          <p className="text-secondary-500 font-medium mb-1">Trusted by 50+ Hertfordshire Businesses</p>
          <div className="flex justify-center items-center gap-6 mt-2">
            <div className="h-8 w-20 bg-primary-100 rounded-md flex items-center justify-center text-xs text-primary-500 font-medium">Client Logo</div>
            <div className="h-8 w-20 bg-primary-100 rounded-md flex items-center justify-center text-xs text-primary-500 font-medium">Client Logo</div>
            <div className="h-8 w-20 bg-primary-100 rounded-md flex items-center justify-center text-xs text-primary-500 font-medium">Client Logo</div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
          Professional Websites <span className="text-gradient">That Grow</span> Your Hertfordshire Business
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-500 max-w-3xl mx-auto mb-10">
          We create high-quality, SEO-optimized websites specifically designed for local Hertfordshire businesses looking to attract more customers.
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
            alt="Professional website design examples"
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
