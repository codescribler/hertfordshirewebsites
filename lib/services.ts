export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  price?: string;
  icon?: string;
  carePlan?: {
    title: string;
    price: string;
    benefits: string[];
  };
}

export const services: Service[] = [
  {
    id: 'crm-integration',
    title: 'CRM Integration',
    slug: 'crm-integration',
    shortDescription: 'Connect your website with a customer relationship management system to streamline lead management.',
    description: 'Our CRM Integration service connects your website directly to your customer relationship management system, creating a seamless flow of information that helps you manage leads and customer relationships more effectively. We set up automatic data transfers from your website forms to your CRM, eliminating manual data entry and ensuring that no lead falls through the cracks. This integration enables you to track customer interactions, automate follow-ups, and make data-driven decisions to improve your sales process and customer service.',
    features: [
      'Website to CRM data synchronization',
      'Form integration with lead capture',
      'Contact information automatic transfer',
      'Custom field mapping',
      'Lead source tracking',
      'Workflow automation setup',
      'Pipeline management configuration',
      'Email marketing integration',
      'Activity tracking implementation',
      'User training and documentation',
      'Post-integration testing and troubleshooting',
      'Ongoing support and maintenance',
    ],
    benefits: [
      'Eliminate manual data entry and reduce human error',
      'Capture leads instantly as they come through your website',
      'Track the entire customer journey from first contact to conversion',
      'Improve follow-up processes with automation',
      'Generate more accurate reports on marketing effectiveness',
      'Increase sales team productivity and efficiency',
      'Enhance customer experience with personalized communication',
      'Make better business decisions based on comprehensive data',
    ],
    faqs: [
      {
        question: 'Which CRM systems can you integrate with?',
        answer: 'We can integrate with most popular CRM systems including HubSpot, Salesforce, Zoho, Pipedrive, Microsoft Dynamics, ActiveCampaign, and more. If you have a specific CRM that\'s not listed here, please ask us about compatibility.'
      },
      {
        question: 'How long does the CRM integration process take?',
        answer: 'The typical timeline for CRM integration is 1-3 weeks, depending on the complexity of your requirements and the specific CRM being used. Simple form-to-CRM integrations can be completed in just a few days, while more complex setups with custom field mapping and automation may take longer.'
      },
      {
        question: 'Do I need to have a CRM system already?',
        answer: 'No, you don\'t need to have a CRM system already in place. We can recommend and help you set up a CRM that best fits your business needs and budget. We\'ll then integrate it with your website as part of this service.'
      },
      {
        question: 'Will my existing data be transferred to the new system?',
        answer: 'Yes, we can help migrate your existing customer and lead data into your new or existing CRM system. We ensure proper data formatting and field mapping to maintain data integrity during the transfer process.'
      },
      {
        question: 'Do you provide training on how to use the CRM after integration?',
        answer: 'Yes, we provide basic training on how to effectively use your CRM after the integration is complete. This includes how to access and interpret the data from your website, manage leads, and utilize the automation features we\'ve set up. For more comprehensive CRM training, we can recommend additional resources or specialized trainers.'
      },
    ],
    price: '£897',
  },
  {
    id: 'local-seo-optimisation',
    title: 'Local SEO Optimisation',
    slug: 'local-seo-optimisation',
    shortDescription: 'Boost your visibility in local search results and attract more nearby customers.',
    description: 'Our Local SEO Optimization service helps your business stand out in local search results, Google Maps, and other local directories. We implement proven strategies to improve your local rankings, enhance your Google Business Profile, and drive more foot traffic to your physical location. This comprehensive approach ensures that when potential customers in your area search for your products or services, your business appears prominently in their results.',
    features: [
      'Google Business Profile optimization and management',
      'Local keyword research and implementation',
      'Citation building and cleanup across directories',
      'Local link building strategy',
      'Review management and response strategy',
      'Local schema markup implementation',
      'Local content optimization',
      'Mobile optimization for local searches',
      'Location page optimization',
      'Local competitor analysis',
      'NAP (Name, Address, Phone) consistency audit',
      'Monthly performance reporting',
    ],
    benefits: [
      'Increase visibility in Google Maps and local pack results',
      'Drive more foot traffic to your physical location',
      'Build trust with potential customers through reviews',
      'Outrank local competitors in search results',
      'Target customers in specific geographic areas',
      'Improve overall online presence and credibility',
      'Enhance mobile search visibility for on-the-go customers',
    ],
    faqs: [
      {
        question: 'What is local SEO and why is it important?',
        answer: 'Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. It\'s particularly important for businesses with physical locations or those serving specific geographic areas, as it helps you appear in local search results, Google Maps, and other local directories when nearby customers search for your products or services.'
      },
      {
        question: 'How long does it take to see results from local SEO?',
        answer: 'Most businesses begin to see improvements in local visibility within 1-3 months, with more significant results appearing after 3-6 months of consistent optimization. Factors affecting the timeline include your current local presence, competition in your area, and the state of your existing online profiles.'
      },
      {
        question: 'Do I need a physical address for local SEO?',
        answer: 'While having a physical address is beneficial for local SEO, it\'s not always necessary. Service-area businesses without a storefront can still implement local SEO strategies by defining their service areas in Google Business Profile and focusing on geographic-specific content and keywords.'
      },
      {
        question: 'How do online reviews affect my local SEO?',
        answer: 'Online reviews significantly impact your local SEO performance. Positive reviews improve your business\'s visibility in local search results and increase consumer trust. Our service includes a review management strategy to help you generate more positive reviews and professionally respond to all reviews.'
      },
      {
        question: 'What\'s the difference between regular SEO and local SEO?',
        answer: 'Regular SEO focuses on improving your website\'s visibility in national or global search results, while local SEO specifically targets searches with local intent. Local SEO places more emphasis on Google Business Profile optimization, local citations, location-specific pages, and appearing in map pack results.'
      },
    ],
    price: 'Starting from £350 per month',
  },
  {
    id: 'lead-magnet-email-automation',
    title: 'Lead Magnet & Email Automation',
    slug: 'lead-magnet-email-automation',
    shortDescription: 'Generate high-quality leads and nurture them with automated email sequences.',
    description: 'Our Lead Magnet & Email Automation service helps you attract potential customers and convert them into sales through strategic lead magnets and automated email sequences. We create valuable, targeted content that addresses your audience\'s pain points and establishes your expertise, then implement automated email workflows that nurture these leads over time. This powerful combination helps you build relationships with prospects, establish trust, and guide them through the buyer\'s journey without requiring constant manual effort.',
    features: [
      'Strategic lead magnet development (PDF guides, checklists, templates, etc.)',
      'Professional lead magnet design and copywriting',
      'Landing page creation for lead capture',
      'Email capture form integration',
      'Email automation sequence setup (5-7 emails)',
      'Welcome sequence implementation',
      'CRM integration (optional)',
      'A/B testing setup for optimization',
      'Analytics and tracking implementation',
      'GDPR compliance review',
    ],
    benefits: [
      'Generate qualified leads continuously without active effort',
      'Build relationships with prospects through valuable content',
      'Establish your business as an authority in your industry',
      'Nurture leads through automated sequences that convert',
      'Save time with pre-written email sequences that work 24/7',
      'Track and measure your lead generation and conversion rates',
      'Increase ROI on your marketing efforts',
      'Build a valuable customer database for future marketing',
    ],
    faqs: [
      {
        question: 'What is a lead magnet and why do I need one?',
        answer: 'A lead magnet is a valuable piece of content (like a guide, checklist, or template) that you offer for free in exchange for a prospect\'s contact information. It\'s essential because it provides an incentive for visitors to share their email address, allowing you to continue marketing to them. A good lead magnet addresses a specific problem your target audience faces and provides a solution, establishing your expertise and building trust.'
      },
      {
        question: 'How long does it take to create a lead magnet and set up email automation?',
        answer: 'Typically, the process takes 2-3 weeks from start to finish. This includes strategy development, lead magnet creation, landing page setup, and email sequence implementation. The timeline can vary based on the complexity of your lead magnet and the number of automated emails in your sequence.'
      },
      {
        question: 'What type of lead magnet would work best for my business?',
        answer: 'The best lead magnet depends on your industry, target audience, and business goals. Common effective formats include how-to guides, checklists, templates, resource lists, case studies, or mini-courses. During our initial consultation, we\'ll help determine which format would be most valuable to your potential customers and most effective for your specific business.'
      },
      {
        question: 'Do I need to have an email marketing platform already?',
        answer: 'No, we can help you select and set up the right email marketing platform for your needs if you don\'t already have one. We work with various platforms including Mailchimp, ActiveCampaign, ConvertKit, and more. If you do have an existing platform, we can implement your lead magnet and email sequences within that system.'
      },
      {
        question: 'How will I know if my lead magnet and email automation are working?',
        answer: 'We set up comprehensive tracking and analytics for both your lead magnet and email sequences. You\'ll be able to see metrics such as download rates, email open rates, click-through rates, and conversion rates. We\'ll also help you interpret these metrics and make recommendations for optimization.'
      },
    ],
    price: 'Starting from £897',
  },
  {
    id: 'google-analytics-search-console-setup',
    title: 'Google Analytics & Search Console Setup',
    slug: 'google-analytics-search-console-setup',
    shortDescription: 'Professional setup of Google Analytics and Search Console to track and understand your website traffic.',
    description: 'Our Google Analytics & Search Console Setup service provides you with the essential tools to understand your website traffic, user behavior, and search performance. We professionally configure Google Analytics 4 and Google Search Console for your website, ensuring accurate data collection and insightful reporting. This service helps you make data-driven decisions to improve your website performance and marketing strategies.',
    features: [
      'Professional setup of Google Analytics 4',
      'Google Search Console configuration',
      'Custom dashboard creation',
      'Goal and conversion tracking setup',
      'User behavior tracking',
      'Search performance monitoring',
      'Technical implementation and verification',
      'Basic training on how to interpret data',
    ],
    benefits: [
      'Understand where your website traffic comes from',
      'Identify which pages are most popular with visitors',
      'Track user behavior and engagement on your site',
      'Monitor your website\'s search engine performance',
      'Make data-driven decisions to improve your website',
      'Measure the success of your marketing campaigns',
      'Identify opportunities for website optimization',
      'Understand your audience demographics and interests',
    ],
    faqs: [
      {
        question: 'Why do I need Google Analytics and Search Console?',
        answer: 'These tools provide essential insights into your website performance. Google Analytics shows you who visits your site, how they found you, and what they do once they arrive. Search Console helps you understand how your site appears in Google search results and identifies any technical issues that might affect your visibility.'
      },
      {
        question: 'Is this a one-time setup or ongoing service?',
        answer: 'This is a one-time setup service. Once we configure Google Analytics and Search Console for your website, you\'ll have permanent access to these tools. We provide basic training so you can interpret the data yourself, but we also offer ongoing analysis services if you prefer professional interpretation.'
      },
      {
        question: 'Will this slow down my website?',
        answer: 'No, the tracking codes for Google Analytics and Search Console are designed to load asynchronously, meaning they won\'t affect your website\'s loading speed in any noticeable way.'
      },
      {
        question: 'How long does it take to start seeing data?',
        answer: 'You\'ll start seeing basic traffic data in Google Analytics almost immediately after setup. However, more comprehensive data and insights in Search Console may take 1-2 weeks to fully populate as Google indexes and processes information about your site.'
      },
    ],
    price: '£175 one-off setup',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    slug: 'logo-design',
    shortDescription: 'Professional logo design to establish your brand identity.',
    description: 'Our Logo Design service provides you with a unique, professional logo that represents your business and helps you stand out from the competition. Our experienced designers work closely with you to understand your business values, target audience, and preferences to create a logo that captures the essence of your brand. A well-designed logo is essential for building brand recognition and establishing a professional image.',
    features: [
      'Custom logo design tailored to your business',
      'Multiple concept options to choose from',
      'Unlimited revisions until you\'re satisfied',
      'Final files in various formats (PNG, JPG, SVG, PDF)',
      'High-resolution files for print and digital use',
      'Black and white version included',
      'Full copyright ownership',
    ],
    benefits: [
      'Establish a professional brand identity',
      'Build instant recognition with customers',
      'Stand out from competitors',
      'Create a consistent visual presence',
      'Make a memorable first impression',
      'Increase perceived value of your business',
      'Versatile use across all marketing materials',
    ],
    faqs: [
      {
        question: 'How long does the logo design process take?',
        answer: 'Typically, our logo design process takes 1-2 weeks from the initial consultation to the final delivery of files.'
      },
      {
        question: 'What information do you need from me to start?',
        answer: 'We\'ll ask about your business values, target audience, competitors, preferred styles, colors, and any specific ideas you have. The more information you provide, the better we can create a logo that matches your vision.'
      },
      {
        question: 'How many logo concepts will I receive?',
        answer: 'Our standard package includes 3-5 initial concepts to choose from. You can then select your preferred design for refinement.'
      },
      {
        question: 'Do I own the copyright to my logo?',
        answer: 'Yes, once the project is complete and payment is made, you own full copyright to your logo design and can use it however you wish.'
      },
    ],
    price: 'Starting from £397',
  },
  {
    id: 'branding-package',
    title: 'Branding Package',
    slug: 'branding-package',
    shortDescription: 'Comprehensive branding solution including logo, colors, and design guidelines.',
    description: 'Our Branding Package is a complete solution for businesses looking to establish a strong, cohesive brand identity. This comprehensive package includes a custom logo design, color palette development, typography selection, and a detailed brand guidelines document. Having a consistent brand identity across all touchpoints helps build recognition, trust, and loyalty with your customers while setting you apart from competitors.',
    features: [
      'Custom logo design with multiple concepts',
      'Primary and secondary color palette',
      'Typography selection and hierarchy',
      'Brand guidelines document',
      'Business card and letterhead design',
      'Social media profile graphics',
      'Email signature design',
      'All files in various formats for digital and print use',
      'Full copyright ownership',
    ],
    benefits: [
      'Create a cohesive brand identity across all platforms',
      'Build stronger brand recognition and recall',
      'Establish a professional image that attracts customers',
      'Ensure consistency in all marketing materials',
      'Save time and money on future design work',
      'Differentiate your business from competitors',
      'Increase perceived value and credibility',
    ],
    faqs: [
      {
        question: 'What\'s included in the brand guidelines document?',
        answer: 'The brand guidelines document includes logo usage rules, color codes (RGB, CMYK, HEX), typography details, spacing requirements, do\'s and don\'ts, and examples of the brand in use. It serves as a reference for anyone working with your brand assets.'
      },
      {
        question: 'How long does the branding process take?',
        answer: 'A complete branding package typically takes 3-4 weeks from the initial consultation to the delivery of all final files and guidelines.'
      },
      {
        question: 'Can I make changes to the branding elements after they\'re finalized?',
        answer: 'Yes, we offer revision rounds throughout the process. Once the project is complete, minor adjustments can be made within 30 days at no additional cost. Major changes or revisions after this period may incur additional fees.'
      },
      {
        question: 'How will the branding package help my business?',
        answer: 'A professional branding package helps your business stand out, build recognition, and establish credibility. Consistent branding across all touchpoints creates a cohesive experience for your customers, making your business more memorable and trustworthy.'
      },
    ],
    price: 'Starting from £1,977',
  },
  {
    id: 'herts-essentials',
    title: 'Herts Essentials',
    slug: 'herts-essentials',
    shortDescription: 'A simple, professional website with essential business information.',
    description: 'The Herts Essentials package is perfect for small businesses and startups looking to establish their online presence. This streamlined website includes all the essential information about your business, a contact form, and a privacy policy for compliance. It\'s a cost-effective solution that provides a professional online presence optimized for performance and user experience.',
    features: [
      'Professional website design',
      'Mobile-friendly responsive layout',
      'Contact form integration',
      'Google CAPTCHA integration for enhanced spam protection',
      'Business information sections',
      'Privacy policy page',
      'Basic SEO setup',
      'Google Analytics integration',
      'Fast loading performance',
    ],
    benefits: [
      'Establish a professional online presence quickly',
      'Provide essential information to potential customers',
      'Improve local visibility with basic SEO',
      'Ensure legal compliance with privacy policy',
      'Track visitor behavior with analytics',
      'Responsive design works on all devices',
    ],
    faqs: [
      {
        question: 'How long does it take to build a Herts Essentials website?',
        answer: 'Typically, we can complete a Herts Essentials website within 1-2 weeks from the time we receive all your content and information.'
      },
      {
        question: 'Can I update the content myself after the website is built?',
        answer: 'Yes, we can set up a simple content management system that allows you to make basic updates to your website content without technical knowledge.'
      },
      {
        question: 'Is hosting included in the package?',
        answer: 'Yes, hosting is included as part of our comprehensive \'Done-for-You Website Care\' plan, which is £57/month. This plan also includes daily backups, security monitoring, and licensed plugins to ensure your website runs smoothly and securely.'
      },
      {
        question: 'Can I upgrade to a multi-page website later?',
        answer: 'Absolutely! The Herts Essentials package is designed to be expandable. You can easily upgrade to our Herts Professional package later as your business grows.'
      },
    ],
    price: 'Site design and build from £699',
    carePlan: {
      title: 'Done-for-You Website Care',
      price: '£57/month',
      benefits: [
        'Hosting',
        'Daily Backups',
        'Security Monitoring',
        'Licensed Plugins',
      ],
    },
  },
  {
    id: 'herts-professional',
    title: 'Herts Professional',
    slug: 'herts-professional',
    shortDescription: 'A multi-page business website with service pages, lead generation features, and local SEO elements.',
    description: 'The Herts Professional package is designed for established businesses looking to enhance their online presence and generate leads. This comprehensive multi-page website includes dedicated service pages, lead generation features, local SEO elements, and blog functionality. It\'s the perfect solution for businesses that want to showcase their services in detail and attract more customers through search engines.',
    features: [
      'Professional multi-page website design',
      'Custom-designed pages for your services and content',
      'Mobile-friendly responsive layout',
      'Lead generation forms and features',
      'Service pages with detailed information',
      'Blog functionality for content marketing',
      'Local SEO optimization',
      'Google Analytics and Search Console setup',
      'Contact form with lead routing',
      'Social media integration',
      'Fast loading performance',
      'Secure hosting recommendations',
    ],
    benefits: [
      'Showcase your services in detail with dedicated pages',
      'Generate leads through optimized contact forms',
      'Improve local search rankings with SEO optimization',
      'Build credibility with professional design and content',
      'Engage visitors with blog content',
      'Track performance with advanced analytics',
      'Connect with customers through social media integration',
    ],
    faqs: [
      {
        question: 'How long does it take to build a Herts Professional website?',
        answer: 'A Herts Professional website typically takes 3-4 weeks to complete, depending on the complexity and content requirements.'
      },
      {
        question: 'Do you provide content writing services?',
        answer: 'Yes, we offer professional content writing services for an additional fee. We can create engaging, SEO-optimized content for all your pages.'
      },
      {
        question: 'How does the blog functionality work?',
        answer: 'We set up a user-friendly blog system that allows you to publish new articles, categorize them, and optimize them for search engines without technical knowledge.'
      },
      {
        question: 'What kind of lead generation features are included?',
        answer: 'The package includes contact forms, call-to-action buttons, newsletter signup forms, and other conversion-focused elements strategically placed throughout the website.'
      },
    ],
    price: 'Starting from £1,795 + £217/month for hosting',
  },
  {
    id: 'herts-growth',
    title: 'Herts Growth',
    slug: 'herts-growth',
    shortDescription: 'A SEO-optimized, conversion-focused website designed for businesses looking to scale.',
    description: 'The Herts Growth package is our premium offering for businesses serious about online growth. This comprehensive solution includes a conversion-focused website with advanced marketing tools, CRM integration, and lead nurturing automation. It\'s designed for businesses looking to scale their operations and maximize their online potential with a website that not only looks great but also drives measurable business results. Includes ongoing hosting, support, and growth activities to ensure your website continues to perform and evolve with your business.',
    features: [
      'Premium multi-page website design',
      'Up to 10 custom-designed pages',
      'Conversion-optimized user experience',
      'Advanced SEO implementation',
      'CRM integration for lead management',
      'Email marketing automation setup',
      'Lead nurturing workflows',
      'A/B testing capability',
      'Performance tracking dashboard',
      'Comprehensive analytics setup',
      'Content strategy development',
      'Regular performance reports',
      'Technical SEO optimization',
      'Schema markup implementation',
      'Mobile optimization',
      'Page speed optimization',
    ],
    benefits: [
      'Maximize conversion rates with optimized design',
      'Automate lead nurturing to increase sales',
      'Track and measure marketing ROI',
      'Improve search engine rankings with advanced SEO',
      'Streamline operations with CRM integration',
      'Make data-driven decisions with comprehensive analytics',
      'Scale your business with a growth-focused online presence',
    ],
    faqs: [
      {
        question: 'How long does it take to build a Herts Growth website?',
        answer: 'A Herts Growth website typically takes 6-8 weeks to complete due to the advanced features and integrations involved.'
      },
      {
        question: 'Which CRM systems can you integrate with?',
        answer: 'We can integrate with most popular CRM systems including HubSpot, Salesforce, Zoho, Pipedrive, and more. If you have a specific CRM in mind, please ask about compatibility.'
      },
      {
        question: 'Do you provide training on how to use all the features?',
        answer: 'Yes, we provide comprehensive training sessions for you and your team on how to use all the features of your new website, including the CRM integration and marketing automation tools.'
      },
      {
        question: 'Is ongoing support included?',
        answer: 'The Herts Growth package includes 30 days of post-launch support. After that, we offer monthly maintenance and support packages to ensure your website continues to perform optimally.'
      },
    ],
    price: '£4499 + £497/month for hosting, support & growth activities',
  },
  {
    id: 'additional-website-pages',
    title: 'Additional Website Pages',
    slug: 'additional-website-pages',
    shortDescription: 'Expand your website with additional custom-designed pages.',
    description: 'Need to add more pages to your existing website? Our Additional Website Pages service allows you to expand your online presence with professionally designed pages that match your current website\'s look and feel. Whether you need new service pages, landing pages, or any other type of content, we can create custom pages that enhance your website and provide more value to your visitors.',
    features: [
      'Custom page design matching your website style',
      'Professional copywriting (optional)',
      'Mobile-responsive layout',
      'SEO optimization',
      'Call-to-action integration',
      'Image selection and optimization',
      'Integration with your existing navigation',
    ],
    benefits: [
      'Expand your website with professional content',
      'Showcase additional services or products',
      'Improve SEO with more relevant content',
      'Enhance user experience with well-structured information',
      'Increase conversion opportunities',
    ],
    faqs: [
      {
        question: 'How long does it take to create additional pages?',
        answer: 'Typically, we can complete additional pages within 1-2 weeks, depending on the complexity and content requirements.'
      },
      {
        question: 'Do I need to provide the content for the pages?',
        answer: 'You can provide your own content, or we can create professional, SEO-optimized content for you at an additional cost.'
      },
      {
        question: 'How many pages can I add?',
        answer: 'You can add as many pages as you need. We offer discounts for multiple pages ordered at the same time.'
      },
      {
        question: 'Will the new pages match my existing website design?',
        answer: 'Yes, we ensure that all new pages match your existing website\'s design, branding, and user experience for a seamless integration.'
      },
    ],
    price: 'Starting from £199 per page',
  },
  {
    id: 'custom-blog-posts-content-writing',
    title: 'Custom Blog Posts & Content Writing',
    slug: 'custom-blog-posts-content-writing',
    shortDescription: 'Professional content creation to engage your audience and boost your SEO rankings.',
    description: 'Our Custom Blog Posts & Content Writing service provides high-quality, SEO-optimized content that engages your audience and improves your search engine rankings. Our professional writers create compelling blog posts, articles, service descriptions, and other content tailored to your business and target audience. Regular, valuable content is essential for building authority in your industry and attracting more visitors to your website.',
    features: [
      'SEO-optimized content writing',
      'Keyword research and implementation',
      'Industry-specific expertise',
      'Engaging and readable style',
      'Regular posting schedule options',
      'Custom graphics and images (optional)',
      'Content strategy development',
      'Meta descriptions and title tags',
      'Internal linking strategy',
    ],
    benefits: [
      'Improve search engine rankings with regular, quality content',
      'Establish authority in your industry',
      'Engage and educate your audience',
      'Increase website traffic through organic search',
      'Build a library of valuable resources',
      'Save time with professional content creation',
    ],
    faqs: [
      {
        question: 'How long are the blog posts?',
        answer: 'Our standard blog posts range from 800-1,200 words, but we can create shorter or longer content based on your specific needs and the topic requirements.'
      },
      {
        question: 'How do you research topics for my industry?',
        answer: 'We conduct thorough research using industry publications, competitor analysis, keyword research tools, and trending topics to identify valuable content opportunities for your business.'
      },
      {
        question: 'Can I review and request revisions?',
        answer: 'Absolutely! We provide a draft for your review and include up to two rounds of revisions to ensure the content meets your expectations and accurately represents your business.'
      },
      {
        question: 'How often should I publish new content?',
        answer: 'For optimal SEO benefits, we recommend publishing at least 2-4 new blog posts per month, but the ideal frequency depends on your industry, competition, and marketing goals.'
      },
    ],
    price: 'Starting from £149 per post',
  },
  {
    id: 'advanced-seo-package',
    title: 'Advanced SEO Package',
    slug: 'advanced-seo-package',
    shortDescription: 'Comprehensive SEO optimization to improve your website\'s visibility in search engines.',
    description: 'Our Advanced SEO Package provides a comprehensive approach to improving your website\'s visibility in search engines. We conduct thorough keyword research, optimize your website\'s on-page elements, improve technical SEO factors, and develop a content strategy to boost your rankings. This service is ideal for businesses serious about improving their organic search traffic and outranking competitors.',
    features: [
      'Comprehensive website SEO audit',
      'Competitor analysis',
      'Keyword research and strategy',
      'On-page SEO optimization',
      'Technical SEO improvements',
      'Content gap analysis',
      'Internal linking optimization',
      'Schema markup implementation',
      'Local SEO optimization',
      'Mobile optimization',
      'Page speed improvements',
      'Monthly performance reporting',
    ],
    benefits: [
      'Improve rankings for valuable keywords',
      'Increase organic search traffic',
      'Enhance website visibility in local searches',
      'Outrank competitors in your industry',
      'Fix technical issues affecting performance',
      'Improve user experience and engagement',
      'Track progress with detailed reporting',
    ],
    faqs: [
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 3-6 months, depending on your industry, competition, and starting point.'
      },
      {
        question: 'Do you guarantee first-page rankings?',
        answer: 'No reputable SEO company can guarantee specific rankings, as search engines constantly update their algorithms. We focus on sustainable, white-hat SEO practices that provide long-term benefits rather than quick fixes.'
      },
      {
        question: 'What does the monthly reporting include?',
        answer: 'Our monthly reports include keyword ranking progress, organic traffic growth, user behavior metrics, technical SEO status, and recommendations for ongoing improvements.'
      },
      {
        question: 'Do I need to make changes to my website?',
        answer: 'We handle most technical and on-page SEO changes for you. For content additions or major structural changes, we provide recommendations and can implement them with your approval.'
      },
    ],
    price: 'Starting from £100 per month for up to 10 keywords/locations',
  },
  {
    id: 'performance-speed-optimisation',
    title: 'Performance & Speed Optimisation',
    slug: 'performance-speed-optimisation',
    shortDescription: 'Improve your website loading speed and overall performance for better user experience and SEO.',
    description: 'Our Performance & Speed Optimisation service is designed to make your website lightning-fast and responsive. We implement a variety of technical optimisations to reduce loading times, improve user experience, and boost your search engine rankings. A faster website not only keeps visitors engaged but also converts better and ranks higher in search results.',
    features: [
      'Comprehensive website performance audit',
      'Image optimisation and compression',
      'Code minification and cleanup',
      'Browser caching implementation',
      'Content Delivery Network (CDN) setup',
      'Server response time improvement',
      'Mobile loading speed enhancement',
      'Core Web Vitals optimisation',
      'Database optimisation (if applicable)',
      'Page size reduction techniques',
      'Plugin and third-party script audit',
      'Performance testing and reporting',
    ],
    benefits: [
      'Improve user experience with faster page loads',
      'Reduce bounce rates by keeping visitors engaged',
      'Boost conversion rates with responsive pages',
      'Enhance mobile user experience',
      'Improve search engine rankings',
      'Reduce server load and hosting costs',
      'Increase the number of pages viewed per visit',
      'Support more concurrent users during peak times',
    ],
    faqs: [
      {
        question: 'How much can performance optimisation improve my website speed?',
        answer: 'Most websites we optimise see a 40-80% improvement in loading times, depending on their current state. Websites with significant performance issues often see the most dramatic improvements.'
      },
      {
        question: 'Will performance optimisation affect how my website looks?',
        answer: 'No, our optimisation techniques maintain the visual appearance of your website while improving its performance. We focus on technical improvements that work behind the scenes to make your site faster without changing its design or functionality.'
      },
      {
        question: 'How long does the performance optimisation process take?',
        answer: 'A typical performance optimisation project takes 1-2 weeks to complete, depending on the size and complexity of your website. Some improvements can be implemented immediately, while others may require more extensive changes.'
      },
      {
        question: 'Do you optimize for mobile devices too?',
        answer: 'Absolutely! Mobile optimisation is a crucial part of our service. We ensure your website loads quickly and performs well on all devices, with special attention to mobile performance since this affects both user experience and search rankings.'
      },
      {
        question: 'How will I know if the optimisations are working?',
        answer: 'We provide before-and-after performance reports that demonstrate the improvements made. These reports include metrics like page load times, PageSpeed scores, and Core Web Vitals measurements. You\'ll also notice the improvements when browsing your own website.'
      },
    ],
    price: 'Starting from £397',
  },
];

export function getAllServiceSlugs() {
  return services.map(service => service.slug);
}

export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug);
}
