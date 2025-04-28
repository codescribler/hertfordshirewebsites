import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hertfordshire Web Design & SEO Case Studies | Proven Results | Hertfordshire Websites',
  description: 'See real results! Explore Hertfordshire Websites case studies showcasing successful web design & SEO projects for local Hertfordshire businesses like yours. See how we drive growth.',
  keywords: 'case studies, web design portfolio, website success stories, Hertfordshire web design, business website examples',
};

const caseStudies = [
  {
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
  },
  {
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
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore how we've helped businesses in Hertfordshire improve their online presence and achieve their goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <div key={study.id}>
          {/* Hero Section with Key Metrics */}
          <Section 
            className={index % 2 === 0 ? 'bg-white' : 'bg-primary-50'}
            spacing="lg"
          >
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3">{study.title}</h2>
                <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                  {study.goal}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Website Image */}
                <div className="bg-white rounded-lg shadow-xl p-4 overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={study.image}
                      alt={`${study.title} website`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <Button 
                      href={study.url} 
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
                
                {/* Key Metrics/Summary Box */}
                <div className="bg-primary-800 text-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Key Achievements</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1 text-white">The Challenge</h4>
                        <p className="text-gray-200">
                          {study.problem.split('...')[0]}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1 text-white">Our Approach</h4>
                        <p className="text-gray-200">
                          {study.solution.split('...')[0]}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1 text-white">The Results</h4>
                        <p className="text-gray-200">
                          {study.result.split('...')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
          
          {/* Detailed Case Study */}
          <Section 
            className={index % 2 === 0 ? 'bg-primary-50' : 'bg-white'}
            spacing="lg"
          >
            <Container>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-8 text-primary-800 border-b border-primary-100 pb-4">
                    Full Case Study
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-primary-800 flex items-center">
                        <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-sm mr-3">1</span>
                        The Challenge
                      </h4>
                      <div className="pl-11">
                        <p className="text-gray-700 mb-4">{study.problem}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-primary-800 flex items-center">
                        <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-sm mr-3">2</span>
                        Our Solution
                      </h4>
                      <div className="pl-11">
                        <p className="text-gray-700 mb-4">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-primary-800 flex items-center">
                        <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-sm mr-3">3</span>
                        The Results
                      </h4>
                      <div className="pl-11">
                        <p className="text-gray-700">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonials */}
                {study.testimonials && study.testimonials.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">Client Testimonials</h3>
                    <div className="space-y-6">
                      {study.testimonials.map((testimonial, i) => (
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
                )}
              </div>
            </Container>
          </Section>
        </div>
      ))}

      {/* CTA Section */}
      <Section className="bg-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss your project and see how we can help your business grow online.
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
                href="/contact" 
                variant="outline" 
                className="border-white text-white hover:bg-primary-700"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
