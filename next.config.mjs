/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  redirects: async () => {
    // All locations that need redirects (27 new + 16 existing = 43 total)
    const locations = [
      'watford', 'hemel-hempstead', 'stevenage', 'st-albans', 'bishops-stortford',
      'cheshunt', 'letchworth-garden-city', 'hatfield', 'hertford', 'hitchin',
      'potters-bar', 'bushey', 'berkhamsted', 'harpenden', 'waltham-cross', 'radlett',
      // New locations
      'rickmansworth', 'borehamwood', 'kings-langley', 'tring', 'knebworth',
      'welwyn-garden-city', 'sawbridgeworth', 'stansted-mountfitchet', 'great-dunmow',
      'harlow', 'waltham-abbey', 'biggleswade', 'baldock', 'welham-green', 'ware',
      'luton', 'barnet', 'brookmans-park', 'stanmore', 'harrow', 'chesham',
      'amersham', 'wheathampstead', 'redbourn', 'elstree', 'enfield', 'hoddesdon'
    ];

    const redirects = [
      // Main service page redirects (American to British spelling)
      {
        source: '/services/local-seo-optimization',
        destination: '/services/local-seo-optimisation',
        permanent: true,
      },
      {
        source: '/services/performance-speed-optimization',
        destination: '/services/performance-speed-optimisation',
        permanent: true,
      },
    ];

    // Add redirects for all location pages
    locations.forEach(location => {
      redirects.push(
        // Local SEO Optimization -> Optimisation
        {
          source: `/services/local-seo-optimization/${location}`,
          destination: `/services/local-seo-optimisation/${location}`,
          permanent: true,
        },
        // Performance Speed Optimization -> Optimisation
        {
          source: `/services/performance-speed-optimization/${location}`,
          destination: `/services/performance-speed-optimisation/${location}`,
          permanent: true,
        }
      );
    });

    return redirects;
  }
};

export default nextConfig;
