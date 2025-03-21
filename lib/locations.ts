export interface Location {
  id: string;
  name: string;
  slug: string;
  county: string;
  description: string;
  businessFocus?: string;
  nearbyAreas?: string[];
  population?: string;
  keyIndustries?: string[];
}

export const locations: Location[] = [
  {
    id: 'watford',
    name: 'Watford',
    slug: 'watford',
    county: 'Hertfordshire',
    description: 'Watford is a vibrant town in Hertfordshire, known for its excellent transport links to London, thriving business community, and diverse economy. With a mix of retail, service, and technology businesses, Watford offers a dynamic environment for companies looking to establish or expand their online presence.',
    businessFocus: 'Watford has a diverse business landscape with a strong retail sector, professional services, and growing technology companies. The town center hosts numerous small to medium-sized businesses that benefit from both local customers and visitors from surrounding areas.',
    nearbyAreas: ['Bushey', 'Rickmansworth', 'Borehamwood', 'St. Albans'],
    population: 'Approximately 96,800',
    keyIndustries: ['Retail', 'Professional Services', 'Technology', 'Healthcare', 'Entertainment'],
  },
  {
    id: 'hemel-hempstead',
    name: 'Hemel Hempstead',
    slug: 'hemel-hempstead',
    county: 'Hertfordshire',
    description: 'Hemel Hempstead is a thriving new town in Hertfordshire with a strong business presence, particularly in the industrial and commercial sectors. Its strategic location near the M1 and M25 motorways makes it an ideal location for businesses serving both local and national markets.',
    businessFocus: 'Hemel Hempstead features several business parks and industrial areas, including Maylands Business Park, which is home to numerous companies across various sectors. The town has a mix of large corporations and small to medium enterprises.',
    nearbyAreas: ['St. Albans', 'Berkhamsted', 'Kings Langley', 'Tring'],
    population: 'Approximately 97,500',
    keyIndustries: ['Manufacturing', 'Logistics', 'Technology', 'Retail', 'Construction'],
  },
  {
    id: 'stevenage',
    name: 'Stevenage',
    slug: 'stevenage',
    county: 'Hertfordshire',
    description: 'Stevenage is a significant town in Hertfordshire with a strong heritage in technology and engineering. As the first new town designated under the New Towns Act 1946, it has developed into an important commercial center with excellent transport links and a diverse business community.',
    businessFocus: 'Stevenage is known for its technology and engineering sectors, with several major companies having headquarters or significant operations in the area. The Stevenage Bioscience Catalyst and Gunnels Wood industrial area are key business hubs.',
    nearbyAreas: ['Hitchin', 'Letchworth Garden City', 'Welwyn Garden City', 'Knebworth'],
    population: 'Approximately 87,800',
    keyIndustries: ['Aerospace', 'Pharmaceuticals', 'Biotechnology', 'Engineering', 'Technology'],
  },
  {
    id: 'st-albans',
    name: 'St. Albans',
    slug: 'st-albans',
    county: 'Hertfordshire',
    description: 'St. Albans is a historic cathedral city in Hertfordshire with a thriving business community and strong connections to London. Known for its rich Roman history, beautiful architecture, and vibrant city center, St. Albans attracts both tourists and businesses looking for a prestigious location with excellent amenities.',
    businessFocus: 'St. Albans has a diverse business ecosystem with a strong presence in professional services, retail, and hospitality. The city center features numerous independent businesses alongside national chains, creating a dynamic commercial environment.',
    nearbyAreas: ['Harpenden', 'Hatfield', 'Hemel Hempstead', 'Radlett'],
    population: 'Approximately 147,000',
    keyIndustries: ['Professional Services', 'Finance', 'Retail', 'Hospitality', 'Education'],
  },
  {
    id: 'bishops-stortford',
    name: 'Bishop\'s Stortford',
    slug: 'bishops-stortford',
    county: 'Hertfordshire',
    description: 'Bishop\'s Stortford is a historic market town in Hertfordshire, located near Stansted Airport. Its strategic location and excellent transport links make it an attractive location for businesses, particularly those in the service and logistics sectors.',
    businessFocus: 'Bishop\'s Stortford benefits from its proximity to Stansted Airport, which has fostered growth in travel-related businesses, logistics, and hospitality. The town center hosts numerous independent retailers and service providers.',
    nearbyAreas: ['Sawbridgeworth', 'Stansted Mountfitchet', 'Great Dunmow', 'Harlow'],
    population: 'Approximately 40,000',
    keyIndustries: ['Aviation Services', 'Logistics', 'Retail', 'Hospitality', 'Professional Services'],
  },
  {
    id: 'cheshunt',
    name: 'Cheshunt',
    slug: 'cheshunt',
    county: 'Hertfordshire',
    description: 'Cheshunt is a growing town in the Borough of Broxbourne, Hertfordshire, with good connections to London. Its location in the Lea Valley has historically supported a range of industries, and today it continues to be an important commercial center in the region.',
    businessFocus: 'Cheshunt has a mix of retail, service, and light industrial businesses. The Brookfield Centre is a major retail destination, while Delamare Road hosts various commercial enterprises.',
    nearbyAreas: ['Waltham Cross', 'Hoddesdon', 'Enfield', 'Waltham Abbey'],
    population: 'Approximately 52,000',
    keyIndustries: ['Retail', 'Horticulture', 'Light Manufacturing', 'Logistics', 'Services'],
  },
  {
    id: 'letchworth-garden-city',
    name: 'Letchworth Garden City',
    slug: 'letchworth-garden-city',
    county: 'Hertfordshire',
    description: 'Letchworth Garden City is the world\'s first garden city, combining urban amenities with green spaces. This unique heritage has created a distinctive business environment that attracts companies looking for a high quality of life for their employees alongside good business facilities.',
    businessFocus: 'Letchworth has several business areas including the Spirella Building and Works Road industrial area. The town has a tradition of manufacturing and engineering, alongside newer technology and service businesses.',
    nearbyAreas: ['Hitchin', 'Baldock', 'Stevenage', 'Biggleswade'],
    population: 'Approximately 33,600',
    keyIndustries: ['Manufacturing', 'Engineering', 'Technology', 'Creative Industries', 'Retail'],
  },
  {
    id: 'hatfield',
    name: 'Hatfield',
    slug: 'hatfield',
    county: 'Hertfordshire',
    description: 'Hatfield is a town in Hertfordshire with a strong aerospace heritage and home to the University of Hertfordshire. This educational presence, combined with good transport links and business parks, makes Hatfield an important center for knowledge-based industries and technology companies.',
    businessFocus: 'Hatfield Business Park, built on the former site of Hatfield Aerodrome, is a major commercial center. The presence of the University of Hertfordshire has fostered growth in research, technology, and education-related businesses.',
    nearbyAreas: ['Welwyn Garden City', 'St. Albans', 'Potters Bar', 'Welham Green'],
    population: 'Approximately 39,000',
    keyIndustries: ['Aerospace', 'Technology', 'Education', 'Research', 'Retail'],
  },
  {
    id: 'hertford',
    name: 'Hertford',
    slug: 'hertford',
    county: 'Hertfordshire',
    description: 'Hertford is the historic county town of Hertfordshire, combining heritage with a vibrant modern business community. Its picturesque setting, good schools, and quality of life make it attractive to businesses and professionals looking for a balance between work and lifestyle.',
    businessFocus: 'Hertford has a diverse business community with a strong presence in professional services, retail, and hospitality. The town center features many independent businesses, while Hertford Business Park hosts larger companies.',
    nearbyAreas: ['Ware', 'Welwyn Garden City', 'Hoddesdon', 'Harlow'],
    population: 'Approximately 26,800',
    keyIndustries: ['Professional Services', 'Retail', 'Hospitality', 'Creative Industries', 'Education'],
  },
  {
    id: 'hitchin',
    name: 'Hitchin',
    slug: 'hitchin',
    county: 'Hertfordshire',
    description: 'Hitchin is a historic market town in Hertfordshire with a thriving business community. Its charming town center, regular markets, and strong sense of community make it an attractive location for independent businesses and service providers.',
    businessFocus: 'Hitchin has a vibrant town center with numerous independent retailers, cafes, and service providers. The Wilbury Way industrial area hosts manufacturing and distribution businesses, while professional services are well-represented throughout the town.',
    nearbyAreas: ['Letchworth Garden City', 'Stevenage', 'Baldock', 'Luton'],
    population: 'Approximately 33,350',
    keyIndustries: ['Retail', 'Professional Services', 'Hospitality', 'Manufacturing', 'Creative Industries'],
  },
  {
    id: 'potters-bar',
    name: 'Potters Bar',
    slug: 'potters-bar',
    county: 'Hertfordshire',
    description: 'Potters Bar is a town in Hertfordshire with excellent transport links to London, making it a popular location for commuters and businesses serving the capital. Its suburban character and good amenities create an attractive environment for service-based businesses and professionals.',
    businessFocus: 'Potters Bar has a mix of retail and service businesses in its town center, alongside some light industrial areas. Its proximity to London has made it popular with businesses that serve clients in both Hertfordshire and the capital.',
    nearbyAreas: ['Barnet', 'Hatfield', 'Enfield', 'Brookmans Park'],
    population: 'Approximately 22,000',
    keyIndustries: ['Professional Services', 'Retail', 'Healthcare', 'Education', 'Technology'],
  },
  {
    id: 'bushey',
    name: 'Bushey',
    slug: 'bushey',
    county: 'Hertfordshire',
    description: 'Bushey is a town in Hertfordshire adjacent to Watford, offering a more residential character while benefiting from proximity to larger commercial centers. Its leafy suburbs and good schools make it attractive to professionals and service-based businesses.',
    businessFocus: 'Bushey has a range of small to medium-sized businesses, particularly in the service sector. The high street features independent retailers and service providers, while some larger businesses are located in dedicated commercial areas.',
    nearbyAreas: ['Watford', 'Stanmore', 'Borehamwood', 'Harrow'],
    population: 'Approximately 24,000',
    keyIndustries: ['Professional Services', 'Retail', 'Healthcare', 'Education', 'Creative Industries'],
  },
  {
    id: 'berkhamsted',
    name: 'Berkhamsted',
    slug: 'berkhamsted',
    county: 'Hertfordshire',
    description: 'Berkhamsted is a historic market town in Hertfordshire, known for its castle, canal, and vibrant high street. Its affluent character and strong sense of community make it particularly attractive to upscale retailers, service providers, and creative businesses.',
    businessFocus: 'Berkhamsted has a thriving high street with many independent businesses alongside some national chains. Professional services, creative industries, and hospitality are well-represented, catering to the town\'s affluent population.',
    nearbyAreas: ['Tring', 'Hemel Hempstead', 'Chesham', 'Amersham'],
    population: 'Approximately 18,500',
    keyIndustries: ['Retail', 'Professional Services', 'Creative Industries', 'Hospitality', 'Education'],
  },
  {
    id: 'harpenden',
    name: 'Harpenden',
    slug: 'harpenden',
    county: 'Hertfordshire',
    description: 'Harpenden is an affluent town in Hertfordshire with excellent transport links to London. Its combination of wealth, good schools, and attractive environment makes it a premium location for businesses serving high-end clients and professional services.',
    businessFocus: 'Harpenden\'s business community is dominated by retail, hospitality, and professional services. The town center features upscale shops, restaurants, and service providers catering to the town\'s affluent population.',
    nearbyAreas: ['St. Albans', 'Luton', 'Wheathampstead', 'Redbourn'],
    population: 'Approximately 30,240',
    keyIndustries: ['Professional Services', 'Finance', 'Retail', 'Hospitality', 'Education'],
  },
  {
    id: 'waltham-cross',
    name: 'Waltham Cross',
    slug: 'waltham-cross',
    county: 'Hertfordshire',
    description: 'Waltham Cross is a town in the Borough of Broxbourne, Hertfordshire, located at the edge of Greater London. Its strategic location near the M25 and proximity to London make it an important commercial center, particularly for logistics and distribution businesses.',
    businessFocus: 'Waltham Cross has a mix of retail, service, and industrial businesses. The Park Plaza and Lea Road industrial areas host numerous companies in manufacturing, distribution, and services.',
    nearbyAreas: ['Cheshunt', 'Enfield', 'Waltham Abbey', 'Hoddesdon'],
    population: 'Approximately 7,600',
    keyIndustries: ['Logistics', 'Retail', 'Manufacturing', 'Services', 'Construction'],
  },
  {
    id: 'radlett',
    name: 'Radlett',
    slug: 'radlett',
    county: 'Hertfordshire',
    description: 'Radlett is an affluent village in Hertfordshire, known for its upscale character and proximity to London. Its wealthy demographic and pleasant environment make it particularly suitable for premium service providers and businesses catering to high-net-worth individuals.',
    businessFocus: 'Radlett has a small but vibrant high street with independent retailers, restaurants, and service providers. Professional services such as financial advisors, legal firms, and property specialists are well-represented.',
    nearbyAreas: ['Borehamwood', 'St. Albans', 'Watford', 'Elstree'],
    population: 'Approximately 8,000',
    keyIndustries: ['Professional Services', 'Finance', 'Retail', 'Hospitality', 'Property'],
  },
];

export function getAllLocationSlugs() {
  return locations.map(location => location.slug);
}

export function getLocationBySlug(slug: string) {
  return locations.find(location => location.slug === slug);
}
