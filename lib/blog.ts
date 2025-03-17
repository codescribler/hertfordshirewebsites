export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  category: 'industry-guides' | 'local-business' | 'website-tips' | 'success-stories';
  image: string;
  featured?: boolean;
  readTime?: number;
  keywords: string[];
}

// Categories for the blog
export const blogCategories = [
  { 
    id: 'industry-guides', 
    name: 'Industry Guides', 
    description: 'In-depth guides tailored for specific industries in Hertfordshire.',
    slug: '/blog/industry-guides'
  },
  { 
    id: 'local-business', 
    name: 'Local Business', 
    description: 'Tips and advice specifically for Hertfordshire local businesses.',
    slug: '/blog/local-business'
  },
  { 
    id: 'website-tips', 
    name: 'Website Tips', 
    description: 'Best practices and latest trends for effective website management.',
    slug: '/blog/website-tips'
  },
  { 
    id: 'success-stories', 
    name: 'Success Stories', 
    description: 'Real results and case studies from Hertfordshire businesses.',
    slug: '/blog/success-stories'
  }
];

// Sample blog posts focused on local SEO
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The 2025 Website Requirements for Hertfordshire Small Businesses',
    description: 'Discover the essential components every Hertfordshire small business website needs in 2025 to attract local customers and outperform competitors.',
    slug: 'website-requirements-hertfordshire-small-businesses-2025',
    date: '2025-03-15',
    author: 'Daniel Smith',
    category: 'local-business',
    image: '/images/blog/hertfordshire-small-business-websites.jpg',
    featured: true,
    readTime: 11,
    keywords: ['hertfordshire business website', 'small business website requirements', 'local website design', 'hertfordshire web presence', 'business website checklist']
  },
  {
    id: '2',
    title: 'Why St Albans Restaurants Need Mobile-Optimised Websites (With Real Examples)',
    description: 'Learn how St Albans restaurants are increasing bookings by 38% with mobile-optimised websites. See before and after examples with conversion metrics.',
    slug: 'st-albans-restaurants-mobile-optimised-websites',
    date: '2025-03-10',
    author: 'Daniel Smith',
    category: 'industry-guides',
    image: '/images/blog/st-albans-restaurant-websites.jpg',
    readTime: 8,
    keywords: ['st albans restaurant websites', 'mobile optimised restaurant site', 'restaurant website design hertfordshire', 'st albans business websites', 'restaurant mobile website']
  },
  {
    id: '3',
    title: 'How Much Should Web Design Really Cost in Watford? 2025 Price Guide',
    description: 'A transparent breakdown of web design costs in Watford for 2025, from budget-friendly options to premium solutions with ROI calculations.',
    slug: 'web-design-cost-watford-2025-price-guide',
    date: '2025-03-05',
    author: 'Daniel Smith',
    category: 'local-business',
    image: '/images/blog/watford-web-design-costs.jpg',
    readTime: 9,
    keywords: ['web design cost watford', 'hertfordshire website pricing', 'affordable web design watford', 'watford web developer costs', 'website budget guide']
  },
  {
    id: '4',
    title: '12 Common Website Mistakes Hertfordshire Plumbers Make (And How to Fix Them)',
    description: 'Avoid the critical website errors that are costing Hertfordshire plumbers thousands in lost leads each month.',
    slug: 'website-mistakes-hertfordshire-plumbers',
    date: '2025-02-28',
    author: 'Daniel Smith',
    category: 'industry-guides',
    image: '/images/blog/plumber-website-mistakes.jpg',
    readTime: 10,
    keywords: ['plumber website mistakes', 'hertfordshire plumber website', 'plumbing business online presence', 'plumber marketing hertfordshire', 'local service website tips']
  },
  {
    id: '5',
    title: 'Case Study: How a Hemel Hempstead Salon Tripled Bookings With a Website Redesign',
    description: 'Discover how we helped a struggling Hemel Hempstead salon transform their online presence and achieve dramatic growth in just 90 days.',
    slug: 'hemel-hempstead-salon-website-redesign-case-study',
    date: '2025-02-20',
    author: 'Daniel Smith',
    category: 'success-stories',
    image: '/images/blog/hemel-salon-case-study.jpg',
    featured: true,
    readTime: 7,
    keywords: ['salon website redesign', 'hemel hempstead business success', 'beauty salon website', 'local business website case study', 'hertfordshire salon marketing']
  },
  {
    id: '6',
    title: 'The Ultimate Local SEO Checklist for Hertfordshire Businesses in 2025',
    description: 'Step-by-step local SEO strategies specifically for Hertfordshire businesses to dominate Google Maps and local search results.',
    slug: 'local-seo-checklist-hertfordshire-businesses',
    date: '2025-02-15',
    author: 'Daniel Smith',
    category: 'website-tips',
    image: '/images/blog/hertfordshire-local-seo.jpg',
    readTime: 12,
    keywords: ['hertfordshire local SEO', 'google maps ranking', 'local search optimisation', 'hertfordshire business SEO', 'local business visibility']
  },
  {
    id: '7',
    title: 'Why Your Stevenage Business Website Isn\'t Getting Enquiries (And How to Fix It)',
    description: 'Troubleshoot your Stevenage business website with our conversion-focused audit framework and start generating quality leads.',
    slug: 'stevenage-business-website-not-generating-enquiries',
    date: '2025-02-08',
    author: 'Daniel Smith',
    category: 'website-tips',
    image: '/images/blog/stevenage-business-enquiries.jpg',
    readTime: 9,
    keywords: ['website not generating leads', 'stevenage business website', 'website enquiry optimisation', 'business website conversion', 'fix website lead generation']
  },
  {
    id: '8',
    title: 'From Zero to Hero: How a Watford Electrician Built a Website That Generates £8,400/Month',
    description: 'The practical step-by-step journey of how we helped a Watford electrician create a website that consistently delivers high-value leads.',
    slug: 'watford-electrician-website-lead-generation-success',
    date: '2025-02-01',
    author: 'Daniel Smith',
    category: 'success-stories',
    image: '/images/blog/watford-electrician-success.jpg',
    readTime: 8,
    keywords: ['electrician website success', 'watford tradesperson website', 'lead generation website', 'trade business online success', 'local electrician marketing']
  }
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, count: number = 3): BlogPost[] {
  // Find posts in the same category, excluding the current post
  const sameCategory = blogPosts.filter(
    post => post.category === currentPost.category && post.id !== currentPost.id
  );
  
  // If we have enough posts in the same category, return them
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count);
  }
  
  // Otherwise, add some posts based on keyword matching
  const keywordMatches = blogPosts.filter(post => {
    if (post.id === currentPost.id || sameCategory.some(p => p.id === post.id)) {
      return false; // Exclude current post and already included same-category posts
    }
    
    // Count matching keywords
    const matchingKeywords = post.keywords.filter(keyword => 
      currentPost.keywords.includes(keyword)
    ).length;
    
    return matchingKeywords > 0;
  }).sort((a, b) => {
    // Sort by number of matching keywords
    const aMatches = a.keywords.filter(k => currentPost.keywords.includes(k)).length;
    const bMatches = b.keywords.filter(k => currentPost.keywords.includes(k)).length;
    return bMatches - aMatches;
  });
  
  // Combine same category posts with keyword matching posts
  const combined = [...sameCategory, ...keywordMatches];
  return combined.slice(0, count);
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-GB', options);
}
