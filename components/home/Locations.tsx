import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import AnimateIn from '@/components/ui/AnimateIn';

const locations = [
  { name: 'Watford', path: '/locations/watford' },
  { name: 'Hemel Hempstead', path: '/locations/hemel-hempstead' },
  { name: 'Stevenage', path: '/locations/stevenage' },
  { name: 'St. Albans', path: '/locations/st-albans' },
  { name: "Bishop's Stortford", path: '/locations/bishops-stortford' },
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

const localBenefits = [
  {
    title: 'Local Expertise',
    description: 'We understand Hertfordshire businesses and optimise your site for local search visibility.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Community Understanding',
    description: 'Deep knowledge of Hertfordshire communities helps us create websites that connect with local audiences.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Face-to-Face Meetings',
    description: 'Being local means we can meet in person to discuss your project and provide hands-on support.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const Locations = () => {
  return (
    <Section className="bg-white">
      <AnimateIn>
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm uppercase tracking-wider mb-3">Service Areas</p>
          <h2 className="section-title !mb-4">Serving Businesses Across Hertfordshire</h2>
          <p className="section-subtitle !mb-0 max-w-2xl mx-auto">
            Professional web design for businesses throughout Hertfordshire and surrounding areas.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <div className="max-w-4xl mx-auto mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {locations.map((location, index) => (
              <Link
                key={index}
                href={location.path}
                className="bg-primary-50 rounded-xl px-4 py-3 text-center font-medium text-sm text-primary-700 hover:bg-secondary-50 hover:text-secondary-600 transition-all duration-200 cursor-pointer border border-transparent hover:border-secondary-100"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {localBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-5 cursor-default">
              <div className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center text-secondary-500 flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold !mb-1 text-primary-800">{benefit.title}</h4>
                <p className="text-sm text-primary-500 !mb-0">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>
    </Section>
  );
};

export default Locations;
