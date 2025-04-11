// Form data interfaces
export interface FormData {
  [key: string]: any;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  service?: string;
  website?: string;
  preferredDate?: string;
  preferred_date?: string;
  preferredTime?: string;
  preferred_time?: string;
  goals?: string;
  consent?: boolean;
}

// Award submission interface
export interface AwardSubmission {
  business_name: string;
  website_url: string;
  location: string;
  categories: string[];
  why_deserve: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
}

// Award categories
export const awardCategories = [
  { id: 'best-design', name: 'Best Website Design' },
  { id: 'best-ecommerce', name: 'Best E-commerce Website' },
  { id: 'best-small-business', name: 'Best Small Business Website' },
  { id: 'best-user-experience', name: 'Best User Experience' },
  { id: 'best-mobile-experience', name: 'Best Mobile Experience' },
  { id: 'most-innovative', name: 'Most Innovative Website' },
  { id: 'best-local-business', name: 'Best Local Business Website' },
  { id: 'best-service-business', name: 'Best Service Business Website' },
];
