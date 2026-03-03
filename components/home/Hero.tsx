import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

const Hero = () => {
  return (
    <Section
      spacing="xl"
      className="relative overflow-hidden bg-gradient-subtle"
      containerSize="apple"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column - Content */}
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-full px-4 py-2">
            <div className="flex items-center">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-primary-600 font-medium text-sm">Trusted by Hertfordshire Businesses</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
            Professional{' '}
            <span className="text-gradient">Web Design</span>{' '}
            in Hertfordshire
          </h1>

          <p className="text-xl text-primary-500 max-w-xl mb-8 leading-relaxed">
            We build stunning, high-performance websites that attract customers, showcase your brand, and help your business grow online.
          </p>

          {/* Key outcomes */}
          <div className="flex flex-col gap-3 mb-10">
            {['Websites that convert visitors into customers', 'Built for speed, SEO, and mobile', 'Local team who understands your market'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-primary-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/contact#discovery-call"
              variant="apple-primary"
              size="lg"
              className="hover-lift"
            >
              Book Your Free Discovery Call
            </Button>

            <Button
              href="/services"
              variant="apple-secondary"
              size="lg"
              className="hover-lift"
            >
              View Our Packages
            </Button>
          </div>
        </div>

        {/* Right column - Hero image */}
        <div className="relative animate-scale-in">
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary-900/5">
            <Image
              src="/images/hero-image-example-websites.jpg"
              alt="Web design portfolio examples for Hertfordshire businesses including cafes, shops, and professional services"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating stats card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-primary-100 p-4 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-800 !mb-0">10+ Years</p>
                <p className="text-xs text-primary-500 !mb-0">Building websites</p>
              </div>
            </div>
          </div>

          {/* Floating location badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-primary-100 p-4 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-800 !mb-0">Hertfordshire</p>
                <p className="text-xs text-primary-500 !mb-0">Based & serving locally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
