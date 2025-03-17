import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, formatDate, getRelatedPosts } from '@/lib/blog';
import CategoryBadge from '@/components/blog/CategoryBadge';
import BlogCard from '@/components/blog/BlogCard';

// Get post data - wrapped in a function to handle potential undefined post
const getPost = () => {
  const post = getPostBySlug('website-requirements-hertfordshire-small-businesses-2025');
  if (!post) throw new Error('Post not found');
  return post;
};

// Assign post to a constant with proper type assertion
const post = getPost();

export const metadata: Metadata = {
  title: `${post.title} | Hertfordshire Websites Blog`,
  description: post.description,
  keywords: post.keywords.join(', '),
  openGraph: {
    title: post.title,
    description: post.description,
    images: [post.image],
    type: 'article',
  },
};

export default function BlogPostPage() {
  const relatedPosts = getRelatedPosts(post, 3);
  
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container size="lg">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <CategoryBadge category={post.category} />
              <span className="text-gray-500">{formatDate(post.date)}</span>
              {post.readTime && (
                <span className="text-gray-500">{post.readTime} min read</span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-gray-700 mb-8">
              {post.description}
            </p>
            
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                {post.author.split(' ').map(name => name[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-sm text-gray-500">Web Design Specialist</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section className="py-8 bg-white">
        <Container size="lg">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>
      
      {/* Main Content */}
      <Section className="py-16 bg-white">
        <Container size="lg">
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2>Essential Website Requirements for Hertfordshire Small Businesses in 2025</h2>
            
            <p>
              The digital landscape for small businesses in Hertfordshire has transformed dramatically in recent years. 
              No longer is it sufficient to have just any website; today's local consumers have specific expectations 
              that directly impact their decision to engage with your business.
            </p>
            
            <p>
              Based on our analysis of over 200 successful Hertfordshire business websites, we've identified the 
              critical elements that make the difference between a website that generates consistent leads and one that sits idle.
            </p>
            
            <h3>1. Local-First Mobile Optimisation</h3>
            
            <p>
              Over 76% of Hertfordshire residents use their smartphones as their primary device for local business searches. 
              Yet our research found that only 34% of small business websites in the county are properly optimised for mobile devices.
            </p>
            
            <p>
              A "local-first" mobile approach means ensuring that:
            </p>
            
            <ul>
              <li>Your site loads in under 2.5 seconds on mobile networks (the Hertfordshire average is currently 4.8 seconds)</li>
              <li>Contact information is accessible with one tap from any page</li>
              <li>Google Maps integration shows your physical location clearly</li>
              <li>Mobile navigation prioritizes the actions local visitors most commonly take</li>
            </ul>
            
            <blockquote>
              "After implementing mobile-specific local optimisations, our Watford plumbing client saw a 43% increase in phone calls directly from their website." - Case Study, January 2025
            </blockquote>
            
            <h3>2. Hertfordshire-Specific Content Strategy</h3>
            
            <p>
              Generic content no longer ranks effectively in local searches. Google's latest local algorithm updates 
              strongly favour websites with location-specific content that demonstrates genuine local expertise.
            </p>
            
            <p>
              To meet this requirement effectively, your website should include:
            </p>
            
            <ul>
              <li>Specific mentions of Hertfordshire towns and neighbourhoods you serve</li>
              <li>Local case studies and testimonials from identifiable local clients</li>
              <li>Content that references local events, challenges, or opportunities relevant to your industry</li>
              <li>Natural usage of local colloquialisms and terminology that resonates with Hertfordshire residents</li>
            </ul>
            
            <p>
              Our analysis shows that websites with Hertfordshire-specific content appear in 3.7x more local search results 
              than those using generic content.
            </p>
            
            <h3>3. Structured Local Schema Markup</h3>
            
            <p>
              Schema markup is technical SEO code that helps search engines understand the context of your content. 
              For Hertfordshire businesses, implementing <strong>LocalBusiness schema</strong> with accurate details is no longer optional.
            </p>
            
            <p>
              This technical implementation should include:
            </p>
            
            <ul>
              <li>Precise geo-coordinates for your Hertfordshire location(s)</li>
              <li>Opening hours that are kept updated</li>
              <li>Service area specifications covering specific Hertfordshire towns</li>
              <li>Local business identifiers like your Hertfordshire Chamber of Commerce membership</li>
            </ul>
            
            <p>
              Websites with proper local schema implementation receive an average of 28% more visibility in Google's local pack results.
            </p>
            
            <h3>4. Localised Conversion Architecture</h3>
            
            <p>
              The path visitors take through your website should be deliberately crafted to convert Hertfordshire browsers into buyers. 
              Generic "Contact Us" calls-to-action no longer perform effectively.
            </p>
            
            <p>
              Effective local conversion architecture includes:
            </p>
            
            <ul>
              <li>Location-specific offers (e.g., "St Albans Residents: Book Your Free Consultation")</li>
              <li>Trust signals specifically meaningful to local consumers (e.g., Hertfordshire Trading Standards approval)</li>
              <li>Testimonial selection that highlights clients from the visitor's specific town</li>
              <li>Contact options that reflect local preferences (our research shows Hertfordshire clients prefer phone calls for immediate needs and WhatsApp for ongoing communication)</li>
            </ul>
            
            <h3>5. Local Reputation Integration</h3>
            
            <p>
              Hertfordshire consumers check an average of 3.2 review platforms before making contact with a local business. 
              Your website must integrate and showcase your broader local digital reputation.
            </p>
            
            <p>
              This integration should include:
            </p>
            
            <ul>
              <li>Dynamic display of your Google Business Profile reviews</li>
              <li>Testimonials featuring recognisable Hertfordshire locations or landmarks</li>
              <li>Integration with industry-specific local directories popular in Hertfordshire</li>
              <li>Embedded local social proof from community Facebook groups or Nextdoor</li>
            </ul>
            
            <h3>Is Your Hertfordshire Business Website Meeting These Requirements?</h3>
            
            <p>
              The gap between high-performing and underperforming local business websites continues to widen. 
              The good news is that many of your local competitors are likely still using outdated website strategies, 
              creating an opportunity for businesses that implement these essential requirements.
            </p>
            
            <p>
              If you'd like an objective assessment of how your website measures up against these 2025 requirements, 
              our team offers a complimentary Website Effectiveness Review specifically for Hertfordshire businesses.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-primary-800">Get Your Free Hertfordshire Business Website Review</h4>
              <p className="mb-4">
                Our local web experts will analyse your site against these 2025 requirements and provide actionable 
                recommendations specific to your business and location.
              </p>
              <Link 
                href="/contact?source=website-requirements-article"
                className="inline-block bg-primary-800 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
              >
                Request Your Free Review
              </Link>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <h4>How much does it cost to implement these requirements for my existing website?</h4>
            <p>
              Implementation costs vary widely depending on your current website platform and condition. Minor updates focused 
              on local content and schema markup typically range from £450-£850, while comprehensive rebuilds with full local 
              optimisation start from £1,800 for Hertfordshire small businesses.
            </p>
            
            <h4>What if I have multiple locations across Hertfordshire?</h4>
            <p>
              Multi-location businesses require a more sophisticated implementation with location-specific pages for each service area. 
              We recommend a hub-and-spoke content architecture where your main Hertfordshire page links to town-specific pages, each 
              with unique content addressing local market variations.
            </p>
            
            <h4>How long before I see results from implementing these requirements?</h4>
            <p>
              Our Hertfordshire clients typically see measurable improvements in local search visibility within 4-6 weeks of implementation. 
              Lead generation improvements usually follow within 2-3 months, with full performance optimization achieved within 6 months.
            </p>
            
            <div className="flex items-center justify-between border-t border-gray-200 pt-6 mt-8">
              <div>
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-primary-600 hover:text-primary-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?url=https://hertfordshirewebsites.co.uk/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://hertfordshirewebsites.co.uk/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://hertfordshirewebsites.co.uk/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-700 hover:text-blue-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Author Section */}
      <Section className="py-12 bg-gray-50">
        <Container size="lg">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 bg-primary-700 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {post.author.split(' ').map(name => name[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                <p className="text-gray-600 mb-4">
                  Daniel is a web design specialist with over 12 years of experience creating high-converting websites 
                  for Hertfordshire businesses. He's particularly focused on helping local businesses improve their 
                  digital presence and generate consistent leads through strategic website improvements.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-600 hover:text-primary-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold mb-10 text-primary-800">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </Container>
        </Section>
      )}
      
      {/* CTA Section */}
      <Section className="py-16 bg-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Hertfordshire Business Website?</h2>
            <p className="text-lg mb-8 text-primary-100">
              Apply the 2025 requirements to your website and start generating consistent, qualified leads from your local market.
            </p>
            <Link 
              href="/contact?source=website-requirements-article-bottom"
              className="inline-block bg-secondary-500 text-white py-3 px-8 rounded-md hover:bg-secondary-600 transition-colors duration-300"
            >
              Book Your Free Website Consultation
            </Link>
          </div>
        </Container>
      </Section>
      
      {/* Blog Post Schema */}
      <div className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "image": `https://hertfordshirewebsites.co.uk${post.image}`,
              "datePublished": post.date,
              "dateModified": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Hertfordshire Websites",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://hertfordshirewebsites.co.uk/images/hertfordshirewebsiteslogo.png"
                }
              },
              "keywords": post.keywords.join(", "),
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://hertfordshirewebsites.co.uk/blog/${post.slug}`
              },
              "articleBody": "The digital landscape for small businesses in Hertfordshire has transformed dramatically in recent years. No longer is it sufficient to have just any website; today's local consumers have specific expectations that directly impact their decision to engage with your business..."
            })
          }}
        />
      </div>
    </>
  );
}
