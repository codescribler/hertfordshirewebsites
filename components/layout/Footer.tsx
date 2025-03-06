import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'ROI Calculator', href: '/roi-calculator' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const serviceLinks = [
    { name: 'Herts Essentials', href: '/services/herts-essentials' },
    { name: 'Herts Professional', href: '/services/herts-professional' },
    { name: 'Herts Growth', href: '/services/herts-growth' },
    { name: 'Advanced SEO Package', href: '/services/advanced-seo-package' },
    { name: 'Content Writing', href: '/services/custom-blog-posts-content-writing' },
  ];
  
  const locationLinks = [
    { name: 'Watford', href: '/locations/watford' },
    { name: 'St. Albans', href: '/locations/st-albans' },
    { name: 'Hemel Hempstead', href: '/locations/hemel-hempstead' },
    { name: 'Stevenage', href: '/locations/stevenage' },
    { name: 'Hertford', href: '/locations/hertford' },
  ];
  
  return (
    <footer className="bg-primary-50 border-t border-primary-100">
      <Container size="apple" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
            <Image 
              src="/images/hertfordshirewebsiteslogo2.png" 
              alt="Hertfordshire Websites Logo" 
              width={44} 
              height={44} 
              className="h-11 w-auto"
            />
            <div className="flex flex-col -space-y-0.5">
              <span className="text-primary-800 font-semibold leading-tight text-sm">Hertfordshire</span>
              <span className="text-primary-800 font-semibold leading-tight text-sm">Websites</span>
            </div>
            </Link>
            
            <p className="text-primary-500 mb-6 max-w-xs">
              Professional web design services for businesses in Hertfordshire. We create websites that attract customers and help your business grow.
            </p>
            
            <div className="space-y-2">
              <p className="text-primary-500">
                <span className="font-medium text-primary-800">Email:</span>{' '}
                <a href="mailto:hello@hertfordshirewebsites.co.uk" className="hover:text-secondary-500 transition-colors">
                  hello@hertfordshirewebsites.co.uk
                </a>
              </p>
              <p className="text-primary-500">
                <span className="font-medium text-primary-800">Phone:</span>{' '}
                <a href="tel:07786556885" className="hover:text-secondary-500 transition-colors">
                  07786 556885
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-primary-800 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-primary-500 hover:text-secondary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-primary-800 mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-primary-500 hover:text-secondary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="text-lg font-medium text-primary-800 mb-5">Locations</h3>
            <ul className="space-y-3">
              {locationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-primary-500 hover:text-secondary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Hertfordshire Websites. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link 
              href="/privacy-policy"
              className="text-primary-500 hover:text-secondary-500 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service"
              className="text-primary-500 hover:text-secondary-500 transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
