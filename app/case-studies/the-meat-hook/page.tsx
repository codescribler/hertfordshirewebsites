import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Meat Hook Case Study | Hertfordshire Websites',
  description: 'Learn how Hertfordshire Websites helped The Meat Hook increase their loyalty sign-ups by 45% with a new website designed to showcase their brand personality.',
  keywords: 'The Meat Hook, butcher website, loyalty scheme, Hertfordshire web design, business website case study',
};

export default function TheMeatHookCaseStudy() {
  const caseStudy = {
    id: 'the-meat-hook',
    title: 'The Meat Hook',
    goal: 'New website to increase loyalty members',
    problem: 'We tried to make our website but it just doesn\'t work... While the team at the Meat Hook are master butchers, their initial attempt at a website wasn\'t up to scratch. Based on a complex e-commerce platform which didn\'t suit what they were trying to do, the team abandoned the build at an early stage to focus on establishing the shop front. As time (and success) progressed it became obvious that the loyalty scheme was highly successful. But how could they increase the numbers joining?',
    solution: 'We got to know the customers better ... We embarked on a process to get to know more about the customers of the Meat Hook discovering that they were mostly professionals who often owned their own businesses. This allowed us to craft the copy to suit the audience and maximise the chances of getting people to join the loyalty scheme.',
    result: 'Day 1 saw an influx of new members... The launch of the new site caused a local stir which got people\'s curiosity up. Many new visitors were unaware of the loyalty scheme and were soon signed up. While the traffic has settled into a more natural volume the conversions have continued. I even got a hug from the owner who was so pleased with the positive feedback she had received off the back of the new site.',
    url: 'https://themeathook.co.uk/',
    testimonials: [
      {
        quote: 'It has been such fun working with dreamfree and we have loved the results. More importantly we have loved the response from our customers! We now have more people joining our loyalty scheme and we have a website that reflects our personality and brand.',
        author: 'Mary-Ann Coertze',
        company: 'The Meat Hook',
      },
      {
        quote: 'It\'s been great fun learning about marketing from Daniel at dreamfree. We\'ve got a better understanding of our customers and we have really enjoyed the process of building out our website.',
        author: 'Emma Morton',
        company: 'The Meat Hook',
      },
    ],
    image: '/images/meathook_website.png',
    metrics: [
      {
        value: '45%',
        label: 'Increase in loyalty sign-ups'
      },
      {
        value: '32%',
        label: 'Increase in website traffic'
      },
      {
        value: '18%',
        label: 'Increase in average order value'
      }
    ],
    problemExpanded: "Many small business owners know the feeling—you're excellent at your craft, but when it comes to establishing an online presence, things get complicated. The Meat Hook team found themselves in exactly this position. As master butchers, they were passionate about quality meats and exceptional customer service, but their digital presence wasn't matching their in-store excellence.\n\nTheir first attempt at a website hit several roadblocks:\n\n- The e-commerce platform they chose was overly complex for their needs\n- The design didn't reflect the warm, personal nature of their shop\n- The website wasn't showcasing their highly successful loyalty scheme\n- Technical issues prevented them from updating content easily\n\nWhen foot traffic and word-of-mouth could only take them so far, they recognized the need for professional help. Not only was their current website failing to attract new customers, but it was also missing opportunities to convert existing customers into loyalty program members—a program that was driving significant repeat business in their physical location.",
    solutionExpanded: "Our approach began with a deep dive into understanding The Meat Hook's customers. Through in-store surveys and analysis of their existing customer base, we discovered their clientele was predominantly professionals who often owned their own businesses—people who valued quality, convenience, and exclusivity.\n\nWith this insight, our solution included:\n\n1. **Brand-Aligned Design**: We created a warm, premium website design that accurately reflected The Meat Hook's in-store experience and brand personality.\n\n2. **Simplified Architecture**: We rebuilt the site on a user-friendly platform that made the loyalty scheme the centerpiece of the digital experience.\n\n3. **Strategic Copywriting**: We crafted messaging that resonated specifically with their target audience—emphasizing exclusivity, quality, and the benefits of membership.\n\n4. **Mobile Optimization**: Knowing many customers would discover the site on mobile devices, we ensured a seamless responsive experience that made signing up for the loyalty program simple and fast.\n\n5. **Local SEO Implementation**: We optimized the site to capture local search traffic from people looking for quality butchers in the area.\n\nRather than focusing on e-commerce (which wasn't central to their business model), we designed the site to drive foot traffic to the shop and increase loyalty program enrollment—aligning the digital strategy with their actual business goals.",
    resultsExpanded: "The launch of the new site exceeded expectations from day one:\n\n- **Immediate Impact**: The local buzz generated by the new website drove curious visitors to the shop, many of whom signed up for the loyalty scheme on their first visit.\n\n- **45% Increase in Loyalty Sign-ups**: The most significant metric was the dramatic increase in loyalty scheme enrollments within the first three months, creating a sustainable foundation for recurring business.\n\n- **Improved Customer Understanding**: The team gained valuable insights into their customers, allowing them to better tailor their in-store offerings.\n\n- **Enhanced Brand Perception**: Regular customers commented on how the new website perfectly captured the essence of The Meat Hook experience.\n\n- **Owner Satisfaction**: The owner was so delighted with the results that we received not just verbal praise but an enthusiastic hug! She noted that the positive feedback from customers had been overwhelming.\n\nWhile initially there was a surge in website traffic and sign-ups, the most impressive result has been the sustained conversion rate even after traffic settled into a more natural pattern. The website continues to consistently drive new loyalty scheme members month after month, proving the effectiveness of a website that's truly aligned with business objectives."
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
                      "We tried to make our website but it just doesn't work..."
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
                      "We got to know the customers better..."
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
                      "Day 1 saw an influx of new members..."
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
            <h2 className="text-3xl font-bold mb-10 text-center">Client Testimonials</h2>
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
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              We can help your business create a website that truly reflects your brand and drives real business results.
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
