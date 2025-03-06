import { Section } from '@/components/ui/Section';
import Link from 'next/link';

const Locations = () => {
  const locations = [
    { name: 'Watford', path: '/locations/watford' },
    { name: 'Hemel Hempstead', path: '/locations/hemel-hempstead' },
    { name: 'Stevenage', path: '/locations/stevenage' },
    { name: 'St. Albans', path: '/locations/st-albans' },
    { name: 'Bishop\'s Stortford', path: '/locations/bishops-stortford' },
    { name: 'Cheshunt', path: '/locations/cheshunt' },
    { name: 'Letchworth Garden City', path: '/locations/letchworth-garden-city' },
    { name: 'Hatfield', path: '/locations/hatfield' },
    { name: 'Hertford', path: '/locations/hertford' },
    { name: 'Hitchin', path: '/locations/hitchin' },
    { name: 'Potters Bar', path: '/locations/potters-bar' },
    { name: 'Bushey', path: '/locations/bushey' },
    { name: 'Berkhamsted', path: '/locations/berkhamsted' },
    { name: 'Harpenden', path: '/locations/harpenden' },
    { name: 'Waltham Cross', path: '/locations/waltham-cross' },
    { name: 'Radlett', path: '/locations/radlett' },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Businesses Across Hertfordshire</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We provide professional web design services to businesses throughout Hertfordshire. Click on your location to see our services in your area.
        </p>
      </div>

      <div className="bg-primary-50 rounded-xl p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <Link 
              key={index} 
              href={location.path}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-primary-100"
            >
              <span className="font-medium text-primary-800">{location.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Local Web Design Services</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          As a Hertfordshire-based web design agency, we understand the unique needs of local businesses. Our local expertise allows us to create websites that resonate with your target audience and help you stand out in your community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-primary-800">Local SEO Expertise</h4>
            <p className="text-gray-700">
              We optimize your website for local search, helping you attract customers in your specific area of Hertfordshire.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-primary-800">Community Understanding</h4>
            <p className="text-gray-700">
              Our deep knowledge of Hertfordshire communities helps us create websites that connect with local audiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-primary-800">Face-to-Face Meetings</h4>
            <p className="text-gray-700">
              Being local means we can meet in person to discuss your project and provide ongoing support when needed.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Locations;
