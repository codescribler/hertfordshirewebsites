import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Section className="pt-32 pb-24 bg-primary-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary-800 mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-primary-700 mb-8">Page Not Found</h2>
          
          <p className="text-lg text-primary-600 mb-12">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/" variant="apple-primary">
              Return to Home
            </Button>
            
            <Button href="/services" variant="outline">
              View Our Services
            </Button>
            
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
