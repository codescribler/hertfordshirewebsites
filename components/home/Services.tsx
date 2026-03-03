import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import AnimateIn from '@/components/ui/AnimateIn';

const coreServices = [
  {
    title: 'Herts Essentials',
    description: 'A professional single-page website with essential business information, contact form, and privacy policy.',
    idealFor: 'Small businesses & startups',
    link: '/services/herts-essentials',
    price: '£699',
    features: ['Single-page design', 'Contact form', 'Mobile responsive', 'Basic SEO setup'],
  },
  {
    title: 'Herts Professional',
    description: 'A multi-page business website with service pages, lead generation features, local SEO, and blog functionality.',
    idealFor: 'Established local businesses',
    link: '/services/herts-professional',
    price: '£1,795',
    popular: true,
    features: ['Multi-page website', 'Service pages', 'Lead generation', 'Blog & local SEO'],
  },
  {
    title: 'Herts Growth',
    description: 'A conversion-focused website with advanced SEO, marketing tools, CRM integration, and lead nurturing automation.',
    idealFor: 'Businesses ready to scale',
    link: '/services/herts-growth',
    price: '£4,499',
    features: ['Advanced SEO', 'CRM integration', 'Marketing automation', 'Analytics dashboard'],
  },
];

const additionalServices = [
  {
    title: 'Google Analytics & Search Console',
    description: 'Professional setup to track and understand your website traffic with data-driven insights.',
    link: '/services/google-analytics-search-console-setup',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Advanced SEO Package',
    description: 'Comprehensive SEO optimisation to improve your visibility in local search results.',
    link: '/services/advanced-seo-package',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Blog Posts & Content Writing',
    description: 'Professional content creation to engage your audience and boost your search engine rankings.',
    link: '/services/custom-blog-posts-content-writing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <Section className="bg-white">
      <AnimateIn>
        <div className="text-center mb-16">
          <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">Packages</p>
          <h2 className="section-title !mb-4">Website Packages for Every Stage</h2>
          <p className="section-subtitle !mb-0 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Choose the package that fits your business.
          </p>
        </div>
      </AnimateIn>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
        {coreServices.map((service, index) => (
          <AnimateIn key={index} delay={index * 100}>
            <div className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
              service.popular
                ? 'bg-primary-800 text-white ring-2 ring-primary-800 shadow-xl scale-[1.02]'
                : 'bg-white border border-primary-100 hover:border-primary-200 hover:shadow-lg'
            }`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold !mb-2 ${service.popular ? 'text-white' : 'text-primary-800'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm !mb-0 ${service.popular ? 'text-white/70' : 'text-primary-400'}`}>
                  {service.idealFor}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-sm font-medium opacity-60">From</span>
                <div className={`text-4xl font-bold ${service.popular ? 'text-white' : 'text-primary-800'}`}>
                  {service.price}
                </div>
              </div>

              <p className={`text-sm mb-6 !mb-6 ${service.popular ? 'text-white/80' : 'text-primary-500'}`}>
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className={`w-4 h-4 flex-shrink-0 ${service.popular ? 'text-secondary-300' : 'text-secondary-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${service.popular ? 'text-white/90' : 'text-primary-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                  service.popular
                    ? 'bg-white text-primary-800 hover:bg-primary-50'
                    : 'bg-primary-800 text-white hover:bg-primary-700'
                }`}
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Additional services */}
      <AnimateIn>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center !mb-8 text-primary-800">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-primary-50 rounded-xl p-6 hover:bg-white hover:shadow-md border border-transparent hover:border-primary-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-50 flex items-center justify-center text-secondary-500 mb-4 group-hover:bg-secondary-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-base font-semibold !mb-2 text-primary-800">{service.title}</h4>
                <p className="text-sm text-primary-500 !mb-0">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </AnimateIn>

      <div className="text-center mt-12">
        <Button href="/services" variant="apple-secondary" size="lg" className="hover-lift">
          View All Services
        </Button>
      </div>
    </Section>
  );
};

export default ServicesSection;
