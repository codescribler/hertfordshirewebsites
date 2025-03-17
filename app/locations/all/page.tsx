import AllLocationsTemplate from '@/components/locations/AllLocationsTemplate';
import { locations } from '@/lib/locations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Locations in Hertfordshire | Comprehensive Service Areas',
  description: 'Explore all Hertfordshire locations we serve with specialised web design, SEO, and digital marketing services tailored to local business needs.',
};

export default function AllLocationsPage() {
  return (
    <AllLocationsTemplate 
      locations={locations}
      seoTitle="Hertfordshire Website Services Locations"
      seoDescription="Full list of towns and cities across Hertfordshire where we provide expert web development and digital marketing services."
    >
      <h1 className="text-4xl font-bold mb-6">All Service Locations in Hertfordshire</h1>
      <p className="text-lg mb-8">
        We provide tailored web solutions for businesses across Hertfordshire. Explore our service areas below:
      </p>
    </AllLocationsTemplate>
  );
}
