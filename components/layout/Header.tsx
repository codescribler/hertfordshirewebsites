'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const services = [
    { name: 'Herts Essentials', path: '/services/herts-essentials' },
    { name: 'Herts Professional', path: '/services/herts-professional' },
    { name: 'Herts Growth', path: '/services/herts-growth' },
    { name: 'Additional Website Pages', path: '/services/additional-website-pages' },
    { name: 'Custom Blog Posts & Content Writing', path: '/services/custom-blog-posts-content-writing' },
    { name: 'Advanced SEO Package', path: '/services/advanced-seo-package' },
    { name: 'Lead Magnet & Email Automation', path: '/services/lead-magnet-email-automation' },
    { name: 'Ongoing SEO & Content Marketing', path: '/services/ongoing-seo-content-marketing' },
    { name: 'Google Analytics & Search Console Setup', path: '/services/google-analytics-search-console-setup' },
    { name: 'Local SEO Optimization', path: '/services/local-seo-optimization' },
    { name: 'CRM Integration', path: '/services/crm-integration' },
    { name: 'Performance & Speed Optimization', path: '/services/performance-speed-optimization' },
    { name: 'Security & Monitoring Services', path: '/services/security-monitoring-services' },
    { name: 'Social Media Integration', path: '/services/social-media-integration' },
    { name: 'Custom Web Development & API Integrations', path: '/services/custom-web-development-api-integrations' },
    { name: 'Booking & Appointment System', path: '/services/booking-appointment-system' },
    { name: 'Landing Page Design', path: '/services/landing-page-design' },
    { name: 'Chatbot & Live Chat Integration', path: '/services/chatbot-live-chat-integration' },
  ];

  // Determine if we're on the contact page
  const isContactPage = pathname.startsWith('/contact');

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-400 ease-apple ${
        isScrolled || isContactPage ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-apple-section flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image 
            src="/images/hertfordshirewebsiteslogo2.png" 
            alt="Hertfordshire Websites Logo" 
            width={55} 
            height={55} 
            className="h-11 w-auto"
            priority
          />
          <div className="flex flex-col -space-y-0.5">
            <span className="text-primary-800 font-semibold leading-tight text-sm">Hertfordshire</span>
            <span className="text-primary-800 font-semibold leading-tight text-sm">Websites</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link 
            href="/" 
            className={`text-sm font-medium hover:text-secondary-500 transition-all duration-400 ease-apple ${
              isActive('/') ? 'text-secondary-500' : 'text-primary-800'
            }`}
          >
            Home
          </Link>
          
          <div className="relative group">
            <button className={`flex items-center text-sm font-medium group-hover:text-secondary-500 transition-all duration-400 ease-apple ${
              pathname.startsWith('/services') ? 'text-secondary-500' : 'text-primary-800'
            }`}>
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transition-transform duration-400 ease-apple group-hover:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-sm rounded-apple shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 ease-apple z-50 transform -translate-x-1/4 border border-primary-100">
              <div className="py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.path}
                    className={`block px-5 py-2.5 text-sm hover:bg-primary-50 transition-all duration-400 ease-apple ${
                      isActive(service.path) ? 'text-secondary-500 bg-primary-50' : 'text-primary-800'
                    }`}
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link 
            href="/case-studies" 
            className={`text-sm font-medium hover:text-secondary-500 transition-all duration-400 ease-apple ${
              isActive('/case-studies') ? 'text-secondary-500' : 'text-primary-800'
            }`}
          >
            Case Studies
          </Link>
          
          <Link 
            href="/roi-calculator" 
            className={`text-sm font-medium hover:text-secondary-500 transition-all duration-400 ease-apple ${
              isActive('/roi-calculator') ? 'text-secondary-500' : 'text-primary-800'
            }`}
          >
            ROI Calculator
          </Link>
          
          <Link 
            href="/resources" 
            className={`text-sm font-medium hover:text-secondary-500 transition-all duration-400 ease-apple ${
              pathname.startsWith('/resources') ? 'text-secondary-500' : 'text-primary-800'
            }`}
          >
            Resources
          </Link>
          
          <Link 
            href="/contact" 
            className={`text-sm font-medium hover:text-secondary-500 transition-all duration-400 ease-apple ${
              isActive('/contact') ? 'text-secondary-500' : 'text-primary-800'
            }`}
          >
            Contact
          </Link>
          
          <Button 
            href="/contact#discovery-call" 
            variant="apple-primary"
            size="sm"
          >
            Book Discovery Call
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 lg:hidden transition-all duration-400 ease-apple ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="container mx-auto px-6 py-8 h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex flex-col space-y-6">
            <Link 
              href="/" 
              className={`text-lg font-medium py-2 ${
                isActive('/') ? 'text-secondary-500' : 'text-primary-800'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <div className="border-t border-primary-100 pt-6">
              <h3 className="text-lg font-medium text-primary-800 mb-4">Services</h3>
              <div className="ml-4 flex flex-col space-y-3">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.path}
                    className={`text-base ${
                      isActive(service.path) ? 'text-secondary-500' : 'text-primary-500'
                    }`}
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/case-studies" 
              className={`text-lg font-medium py-2 ${
                isActive('/case-studies') ? 'text-secondary-500' : 'text-primary-800'
              }`}
              onClick={closeMenu}
            >
              Case Studies
            </Link>
            
            <Link 
              href="/roi-calculator" 
              className={`text-lg font-medium py-2 ${
                isActive('/roi-calculator') ? 'text-secondary-500' : 'text-primary-800'
              }`}
              onClick={closeMenu}
            >
              ROI Calculator
            </Link>
            
            <Link 
              href="/resources" 
              className={`text-lg font-medium py-2 ${
                pathname.startsWith('/resources') ? 'text-secondary-500' : 'text-primary-800'
              }`}
              onClick={closeMenu}
            >
              Resources
            </Link>
            
            <Link 
              href="/contact" 
              className={`text-lg font-medium py-2 ${
                isActive('/contact') ? 'text-secondary-500' : 'text-primary-800'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            <div className="pt-6 border-t border-primary-100">
              <Button 
                href="/contact#discovery-call" 
                variant="apple-primary"
                fullWidth
                onClick={closeMenu}
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
