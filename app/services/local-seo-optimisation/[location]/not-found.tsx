import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section className="pt-32 pb-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Location Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            We don't currently provide Local SEO Optimisation services in this specific location. However, we serve many areas across Hertfordshire.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700 mb-6">
              We provide Local SEO Optimisation services in these locations:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <Link href="/services/local-seo-optimisation/watford" className="text-secondary-500 hover:text-secondary-600 font-medium">
                Watford
              </Link>
              <Link href="/services/local-seo-optimisation/st-albans" className="text-secondary-500 hover:text-secondary-600 font-medium">
                St. Albans
              </Link>
              <Link href="/services/local-seo-optimisation/hemel-hempstead" className="text-secondary-500 hover:text-secondary-600 font-medium">
                Hemel Hempstead
              </Link>
              <Link href="/services/local-seo-optimisation/stevenage" className="text-secondary-500 hover:text-secondary-600 font-medium">
                Stevenage
              </Link>
              <Link href="/services/local-seo-optimisation/bishops-stortford" className="text-secondary-500 hover:text-secondary-600 font-medium">
                Bishop's Stortford
              </Link>
              <Link href="/services/local-seo-optimisation/hitchin" className="text-secondary-500 hover:text-secondary-600 font-medium">
                Hitchin
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services/local-seo-optimisation" variant="apple-primary">
                View All Local SEO Services
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us About Your Location
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
