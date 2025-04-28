import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Renovation Planner Case Study',
  description: 'Learn how Hertfordshire Websites helped Renovation Planner achieve a 78% growth in organic traffic through strategic SEO and content marketing.',
  keywords: 'case study, SEO, content marketing, renovation planner, organic traffic growth, Hertfordshire, website results',
};

export default function RenovationPlannerCaseStudy() {
  const caseStudy = {
    id: 'renovation-planner',
    title: 'Renovation Planner',
    goal: 'To attract visitors looking to renovate their homes by dominating Google search',
    problem: 'We couldn\'t even rank for our own business name... Picking a business name is hard. As a brand new business with ambitions to help homeowners throughout the UK with renovations, the name Renovation Planner is a good, but with one big problem. It is also a competitive keyword in google. So for the first couple of years of operation Renovation Planner didn\'t even rank for its own name in google.',
    solution: 'Content is king... We embarked on a process to create high quality content on their blog to both educate visitors but also to get noticed by other site and of course google. Renovation Planner commissioned dreamfree to write a series of blog posts designed to compete in google. We also built a renovation cost estimator so visitors would stay and interact with the site.',
    result: 'SEO is a slow process but... SEO is a slow process. But over time we began see that google sent more and more people to the site. This has had the impact of ensuring google now features renovation planner on page 1 for a growing list of keywords, including it\'s own name if searching close to it\'s base in the UK.',
    url: 'https://renovationplanner.co.uk',
    testimonials: [
      {
        quote: 'Without dreamfree, my company wouldn\'t be where it is today. Daniel\'s broad knowledge of business setup, web design and marketing helped focus my business on what\'s important. He\'s been a pleasure to work with and I\'d highly recommend dreamfree for anyone wishing to give their business the extra boost it needs to be noticed!',
        author: 'Brent M.',
        company: 'Renovation Planner',
      },
    ],
    image: '/images/renovationplanner_website.png',
    metrics: [
      {
        value: '78%',
        label: 'Increase in organic traffic'
      },
      {
        value: '15+',
        label: 'First page keywords'
      },
      {
        value: '42%',
        label: 'Increase in lead generation'
      }
    ],
    problemExpanded: "Establishing an online presence for a brand new business is challenging, but it becomes even more difficult when your business name is also a competitive keyword. This was precisely the situation Renovation Planner found themselves in.\n\nAs a newly launched business focusing on helping UK homeowners with renovation projects, they chose a name that perfectly described their services: Renovation Planner. While descriptive and memorable, this name presented a significant SEO challenge. The term \"renovation planner\" was already highly competitive in search results, dominated by established renovation websites, planning tools, and articles.\n\nThe specific challenges they faced were:\n\n- **SEO invisibility**: The business couldn't rank for its own name in search results\n- **Limited brand recognition**: As a new business, they lacked the authority that comes with time and reputation\n- **Competitive keyword landscape**: Home renovation is a crowded market with many established players\n- **Limited marketing budget**: As a startup, they needed cost-effective solutions with measurable ROI\n\nThis lack of search visibility meant that even when potential customers heard about Renovation Planner through other channels and searched for them specifically, they couldn't find the business. This was severely limiting their growth potential and online lead generation.",
    solutionExpanded: "After a thorough analysis of the situation, we developed a comprehensive content-driven SEO strategy tailored to Renovation Planner's specific challenges. Rather than attempting to compete head-on with established players for highly competitive terms immediately, we created a strategic plan to build authority systematically:\n\n1. **Long-form, high-quality content**: We developed an extensive content calendar focusing on long-tail keywords related to specific renovation topics that had lower competition but relevant search volume.\n\n2. **Interactive tools**: We created a renovation cost estimator tool that provided genuine value to visitors while encouraging longer dwell times, reducing bounce rates, and increasing engagement metrics—all signals that help improve SEO rankings.\n\n3. **Local SEO optimization**: We implemented a strong local SEO strategy to help Renovation Planner first dominate in their immediate geographical area, creating a foundation to expand from.\n\n4. **Strategic internal linking**: We established a robust internal linking structure that helped distribute page authority throughout the site and created clear topic clusters.\n\n5. **Authority building**: We initiated guest posting and industry partnerships to build valuable backlinks from relevant, authoritative websites.\n\n6. **Technical SEO improvements**: We ensured the website was technically optimized with fast loading times, mobile responsiveness, and proper structured data implementation.\n\nBy focusing on creating genuinely helpful content that addressed specific questions potential customers had about renovation planning, we were able to gradually build authority in the niche rather than trying to compete for highly competitive terms immediately.",
    resultsExpanded: "SEO is indeed a gradual process, but the consistent application of our content strategy yielded impressive results for Renovation Planner:\n\n- **78% increase in organic traffic** over a 12-month period compared to the previous year\n\n- **Page 1 rankings achieved** for over 15 targeted keywords, including their own business name when searched from their local area\n\n- **Expanded geographical reach** with increasingly better rankings for searches from beyond their immediate locale\n\n- **42% increase in qualified leads** generated through the website\n\n- **Improved user engagement metrics** with average time on site increasing by 2:15 minutes and bounce rate decreasing by 18%\n\n- **Higher conversion rates** for the interactive renovation cost estimator tool, which became a significant driver of email signups\n\n- **Growth in return visitors**, indicating increasing brand recognition and loyalty\n\nPerhaps most importantly, the content created has continued to perform well over time, providing ongoing value and continuing to attract new visitors months after publication. This compounding effect of quality content is now providing Renovation Planner with a sustainable competitive advantage and a solid foundation for continued growth.\n\nWith their improved search visibility, Renovation Planner is now able to compete effectively in their market and has a clear pathway to continued expansion of their online presence."
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Link href="/case-studies" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-primary-600 mb-8">
              {caseStudy.goal}
            </p>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section className="bg-white py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="bg-primary-50 rounded-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-800 mb-2">{metric.value}</div>
                <div className="text-lg text-gray-700">{metric.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Website Image */}
      <Section className="bg-primary-50 py-16">
        <Container>
          <div className="bg-white rounded-lg shadow-xl p-4 overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-[16/10] relative">
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.title} website`}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Button 
                href={caseStudy.url} 
                variant="default" 
                external
                size="sm"
              >
                Visit Live Website
              </Button>
              <p className="text-sm text-gray-500 italic">
                Project by Hertfordshire Websites
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Detailed Case Study */}
      <Section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary-800 flex items-center">
                  <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-lg mr-4">1</span>
                  The Problem
                </h2>
                <div className="pl-14">
                  <div className="bg-primary-50 p-6 rounded-lg mb-6">
                    <p className="text-lg italic text-primary-800 font-medium">
                      "We couldn't even rank for our own business name..."
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>{caseStudy.problemExpanded}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary-800 flex items-center">
                  <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-lg mr-4">2</span>
                  Our Solution
                </h2>
                <div className="pl-14">
                  <div className="bg-primary-50 p-6 rounded-lg mb-6">
                    <p className="text-lg italic text-primary-800 font-medium">
                      "Content is king..."
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>{caseStudy.solutionExpanded}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary-800 flex items-center">
                  <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-lg mr-4">3</span>
                  The Results
                </h2>
                <div className="pl-14">
                  <div className="bg-primary-50 p-6 rounded-lg mb-6">
                    <p className="text-lg italic text-primary-800 font-medium">
                      "SEO is a slow process but..."
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>{caseStudy.resultsExpanded}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-primary-50 py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Client Testimonial</h2>
            <div className="space-y-8">
              {caseStudy.testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-8 relative border-l-4 border-secondary-500">
                  {/* Quote mark */}
                  <div className="absolute top-6 right-6 text-6xl text-primary-100 opacity-50 pointer-events-none">
                    "
                  </div>
                  
                  <div className="relative">
                    <p className="text-gray-700 mb-6 italic relative z-10 text-lg">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-800 font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-primary-800">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Our proven SEO strategies can help your business gain visibility and attract more qualified leads through search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact#discovery-call" 
                variant="accent" 
                size="lg"
              >
                Book a Discovery Call
              </Button>
              <Button 
                href="/case-studies" 
                variant="outline" 
                className="border-white text-white hover:bg-primary-700"
                size="lg"
              >
                View More Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
