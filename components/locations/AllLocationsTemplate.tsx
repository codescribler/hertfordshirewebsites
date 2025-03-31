import Link from 'next/link';
import Image from 'next/image';
import { Location } from '@/lib/locations';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

// Map location slugs to image paths
const locationImages: Record<string, string> = {
  'watford': '/images/locations/giant-watford-letter-lights.jpg',
  'st-albans': '/images/locations/Visitors_walk_past_stalls_at_St_Albans_Market.jpg',
  'hemel-hempstead': '/images/locations/hemel-hempstead-town-centre.jpg',
  'stevenage': '/images/locations/Park_Place_from_Stevenage_Town_Centre_Gardens.jpg'
};

// Define featured locations that will display at the top with images
const featuredLocationSlugs = ['watford', 'st-albans', 'hemel-hempstead', 'stevenage'];

interface AllLocationsTemplateProps {
  locations: Location[];
  seoTitle: string;
  seoDescription: string;
  children: React.ReactNode;
}

export default function AllLocationsTemplate({
  locations,
  seoTitle,
  seoDescription,
  children
}: AllLocationsTemplateProps) {
  // Filter locations for featured section
  const featuredLocations = locations.filter(location => 
    featuredLocationSlugs.includes(location.slug)
  );
  
  // Get remaining locations for the grid
  const remainingLocations = locations.filter(location => 
    !featuredLocationSlugs.includes(location.slug)
  );
  
  return (
    <>
      <Section spacing="lg" className="bg-gradient-subtle">
        <Container size="apple">
          <div className="max-w-4xl mx-auto text-center">
            {children}
          </div>
        </Container>
      </Section>
      
      {/* Featured Locations with Images */}
      <Section spacing="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-primary-800">Featured Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredLocations.map((location) => (
              <Link 
                key={location.id}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image 
                    src={locationImages[location.slug] || '/images/example-work-place.jpg'}
                    alt={`${location.name}, Hertfordshire`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{location.name}</h2>
                </div>
                <div className="p-6">
                  <p className="text-primary-600 mb-4">{location.description}</p>
                  {location.population && (
                    <p className="text-sm text-primary-500 mb-2">Population: {location.population.toLocaleString()}</p>
                  )}
                  <span className="text-secondary-500 font-medium group-hover:underline">
                    View Web Design Services →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Remaining Locations Grid */}
      <Section spacing="lg" className="bg-primary-50">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-primary-800">All Service Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {remainingLocations.map((location) => (
              <Link 
                key={location.id}
                href={`/locations/${location.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-800">
                  {location.name}
                </h3>
                <p className="text-primary-600 text-sm mb-3 line-clamp-3">
                  {location.description}
                </p>
                <span className="text-secondary-500 text-sm font-medium hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* LocationPage Schema */}
      <div className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": seoTitle,
              "description": seoDescription,
              "hasPart": locations.map(location => ({
                "@type": "WebPage",
                "name": `Web Design Services in ${location.name}`,
                "url": `https://hertfordshirewebsites.co.uk/locations/${location.slug}`
              }))
            })
          }}
        />
      </div>
    </>
  );
}
