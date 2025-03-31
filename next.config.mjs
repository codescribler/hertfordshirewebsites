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
    return [
      // Redirect American spelling to British spelling
      {
        source: '/services/local-seo-optimization',
        destination: '/services/local-seo-optimisation',
        permanent: true,
      },
      {
        source: '/services/local-seo-optimization/:location',
        destination: '/services/local-seo-optimisation/:location',
        permanent: true,
      },
      {
        source: '/services/performance-speed-optimization',
        destination: '/services/performance-speed-optimisation',
        permanent: true,
      },
      {
        source: '/services/performance-speed-optimization/:location',
        destination: '/services/performance-speed-optimisation/:location',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
