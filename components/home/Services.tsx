import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// SVG Icons for services
const WebsiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SeoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);

const ContentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const ProcessIcon = (props: { number: number }) => (
  <div className="w-16 h-16 rounded-full bg-secondary-500 text-white flex items-center justify-center text-2xl font-bold">
    {props.number}
  </div>
);

const ServicesSection = () => {
  const coreServices = [
    {
      title: 'Herts Essentials',
      description: 'A simple, professional single-page website with essential business information, a contact form, and a privacy policy for compliance.',
      benefits: 'Perfect for small businesses and startups looking to establish an online presence quickly and affordably.',
      idealFor: 'Small local businesses, sole traders, and startups',
      icon: <WebsiteIcon />,
      link: '/services/herts-essentials',
      price: '£699',
    },
    {
      title: 'Herts Professional',
      description: 'A multi-page business website with service pages, lead generation features, local SEO elements, and blog functionality.',
      benefits: 'Helps established businesses attract more local customers and convert website visitors into qualified leads.',
      idealFor: 'Established local businesses looking to grow',
      icon: <WebsiteIcon />,
      link: '/services/herts-professional',
      price: '£1,795',
    },
    {
      title: 'Herts Growth',
      description: 'A SEO-optimised, conversion-focused website designed for businesses looking to scale, with advanced marketing tools, CRM integration, and lead nurturing automation.',
      benefits: 'Transforms your website into a powerful marketing and sales tool that generates leads while you sleep.',
      idealFor: 'Growing businesses ready to scale operations',
      icon: <WebsiteIcon />,
      link: '/services/herts-growth',
      price: '£4,499',
    },
  ];

  const additionalServices = [
    {
      title: 'Google Analytics & Search Console Setup',
      description: 'Professional setup of Google Analytics and Search Console to track and understand your website traffic.',
      benefit: 'Understand where your traffic comes from and make data-driven decisions to improve your website.',
      icon: <SeoIcon />,
      link: '/services/google-analytics-search-console-setup',
    },
    {
      title: 'Advanced SEO Package',
      description: 'Comprehensive SEO optimisation to improve your website visibility in search engines.',
      benefit: 'Rank higher in Google searches, bringing more local customers to your website.',
      icon: <SeoIcon />,
      link: '/services/advanced-seo-package',
    },
    {
      title: 'Custom Blog Posts & Content Writing',
      description: 'Professional content creation to engage your audience and boost your SEO rankings.',
      benefit: 'Establish authority in your industry while improving your search engine visibility.',
      icon: <ContentIcon />,
      link: '/services/custom-blog-posts-content-writing',
    },
  ];

  const processSteps = [
    {
      title: 'Discovery',
      description: 'We start with a free consultation to understand your business goals, target audience, and unique selling points.',
    },
    {
      title: 'Strategy & Design',
      description: 'We create a custom website strategy and design mockups tailored to your specific business needs and goals.',
    },
    {
      title: 'Development',
      description: 'Our team builds your website using modern technologies that ensure fast loading times and mobile responsiveness.',
    },
    {
      title: 'Launch & Growth',
      description: 'After thorough testing, we launch your site and provide ongoing support to help your business grow online.',
    },
  ];

  return (
    <Section className="bg-white">
      {/* How It Works Section */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Our proven 4-step process ensures we deliver websites that not only look great but also help your Hertfordshire business achieve its goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <ProcessIcon number={index + 1} />
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-800">{step.title}</h3>
                <p className="text-primary-500">{step.description}</p>
              </div>
              
              {/* Connector line (except for the last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-8 h-0.5 bg-primary-200"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            href="/contact#discovery-call" 
            variant="apple-primary" 
            size="lg"
            className="hover-lift"
          >
            Book Your Free Discovery Call
          </Button>
        </div>
      </div>

      <div className="text-center mb-20">
        <h2 className="section-title">Our Website Packages</h2>
        <p className="section-subtitle">
          Choose from our range of website packages designed to meet the needs of businesses at every stage of growth.
        </p>
      </div>

      {/* Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {coreServices.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-apple p-10 border border-primary-100 hover:shadow-sm transition-all duration-400 ease-apple hover-lift relative"
          >
            {/* Price Tag */}
            <div className="absolute top-4 right-4">
              <div className="bg-secondary-500 text-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-sm font-medium">From</span>
                <span className="text-lg font-bold ml-1">{service.price}</span>
              </div>
            </div>
          
            <div className="mb-6 feature-icon">{service.icon}</div>
            <h3 className="text-2xl font-medium mb-4 text-primary-800">{service.title}</h3>
            <p className="text-primary-500 mb-4">{service.description}</p>
            
            {/* Benefits */}
            <div className="mb-4 bg-primary-50 p-4 rounded-md">
              <p className="text-primary-700 font-medium">Benefits:</p>
              <p className="text-primary-600 text-sm">{service.benefits}</p>
            </div>
            
            {/* Ideal For */}
            <div className="mb-8">
              <p className="text-primary-700 font-medium">Ideal for:</p>
              <p className="text-primary-600 text-sm">{service.idealFor}</p>
            </div>
            
            <Link 
              href={service.link}
              className="text-secondary-500 font-medium hover:text-secondary-600 inline-flex items-center transition-all duration-400 ease-apple"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="bg-primary-50 rounded-apple p-12 mb-16">
        <h3 className="text-3xl font-medium mb-10 text-center text-primary-800">Additional Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-apple p-8 border border-primary-100 hover:shadow-sm transition-all duration-400 ease-apple"
            >
              <div className="mb-5">{service.icon}</div>
              <h4 className="text-xl font-medium mb-3 text-primary-800">{service.title}</h4>
              <p className="text-primary-500 mb-3">{service.description}</p>
              
              {/* Benefit */}
              <div className="mb-6 bg-green-50 p-3 rounded-md">
                <p className="text-green-700 text-sm"><strong>Benefit:</strong> {service.benefit}</p>
              </div>
              
              <Link 
                href={service.link}
                className="text-secondary-500 font-medium hover:text-secondary-600 inline-flex items-center transition-all duration-400 ease-apple"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button 
          href="/services" 
          variant="apple-primary" 
          size="lg"
          className="hover-lift"
        >
          View All Services
        </Button>
      </div>
    </Section>
  );
};

export default ServicesSection;
