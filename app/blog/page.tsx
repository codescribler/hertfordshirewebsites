import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import CategoryBadge from '@/components/blog/CategoryBadge';
import { blogPosts, blogCategories, getFeaturedPosts, getRecentPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Web Design & SEO Articles for Hertfordshire Businesses | Local Insights',
  description: 'Expert guides on website design, local SEO, and digital marketing tips specifically for Hertfordshire business owners. Industry-specific advice and local case studies.',
  keywords: 'hertfordshire web design blog, local seo tips, business website advice, hertfordshire digital marketing, local business website guide',
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6).filter(post => !featuredPosts.some(fp => fp.id === post.id));
  
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hertfordshire Business Website Insights</h1>
            <p className="text-lg text-gray-700 mb-8">
              Expert guides, local case studies, and actionable advice specifically for Hertfordshire business owners.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {blogCategories.map((category) => (
                <Link 
                  key={category.id}
                  href={category.slug}
                  className="inline-block bg-white text-primary-700 border border-primary-200 py-2 px-4 rounded-full hover:bg-primary-100 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold mb-10 text-primary-800">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="featured" />
              ))}
            </div>
          </Container>
        </Section>
      )}
      
      {/* Recent Posts */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-10 text-primary-800">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Show all posts if there are more than what's displayed */}
          {blogPosts.length > (featuredPosts.length + recentPosts.length) && (
            <div className="mt-12 text-center">
              <Link
                href="/blog/all"
                className="inline-block bg-primary-800 text-white py-3 px-8 rounded-md hover:bg-primary-700 transition-colors duration-300"
              >
                View All Articles
              </Link>
            </div>
          )}
        </Container>
      </Section>
      
      {/* Local Business Value Proposition */}
      <Section className="py-16 bg-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want a Website That Generates Leads for Your Hertfordshire Business?</h2>
            <p className="text-lg mb-8 text-primary-100">
              Our articles provide actionable advice, but nothing beats a website specifically designed to convert local Hertfordshire visitors into paying customers.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-secondary-500 text-white py-3 px-8 rounded-md hover:bg-secondary-600 transition-colors duration-300"
            >
              Get a Free Website Audit
            </Link>
          </div>
        </Container>
      </Section>
      
      {/* Blog Schema */}
      <div className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "headline": "Hertfordshire Business Website Insights",
              "description": "Expert guides, local case studies, and actionable advice specifically for Hertfordshire business owners.",
              "url": "https://hertfordshirewebsites.co.uk/blog",
              "author": {
                "@type": "Person",
                "name": "Daniel Smith"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Hertfordshire Websites",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://hertfordshirewebsites.co.uk/images/hertfordshirewebsiteslogo.png"
                }
              },
              "blogPost": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.description,
                "url": `https://hertfordshirewebsites.co.uk/blog/${post.slug}`,
                "datePublished": post.date,
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
                "image": `https://hertfordshirewebsites.co.uk${post.image}`,
                "keywords": post.keywords.join(", ")
              }))
            })
          }}
        />
      </div>
    </>
  );
}
