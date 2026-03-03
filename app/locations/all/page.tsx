import AllLocationsTemplate from '@/components/locations/AllLocationsTemplate';
import { locations } from '@/lib/locations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Service Areas: Web Design Across Hertfordshire',
  description: 'Browse all Hertfordshire towns and cities where we provide professional web design services. From Watford to St Albans, Hemel Hempstead to Hitchin - find your local web design team.',
  keywords: 'hertfordshire locations, web design locations hertfordshire, hertfordshire service areas, web design near me hertfordshire, local web design hertfordshire',
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
