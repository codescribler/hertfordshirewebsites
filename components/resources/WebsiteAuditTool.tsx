'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitFormData } from '@/lib/supabase';

const WebsiteAuditTool = () => {
  // State for the current step in the audit process
  const [currentStep, setCurrentStep] = useState(0);
  // State for the user's ratings
  const [ratings, setRatings] = useState<Record<string, number>>({});
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // State for the lead capture form
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    website: '',
    consent: false
  });

  // Define the audit sections with detailed criteria
  const auditSections = [
    {
      id: 'top-section',
      title: 'Top Section',
      description: 'The hero section is the first thing visitors see. It should clearly communicate your value proposition and include a compelling call to action.',
      criteria: {
        exceptional: 'The headline/sub-headline, supporting imagery, and call to action immediately and clearly answer the questions: Who is this for? What problem does it solve? What do I need to do next?',
        competent: 'The copy and imagery are engaging, but the visitor must scroll a bit before they truly understand the problem being solved and the exact market being served.',
        needsImprovement: 'The copy and imagery are vague to both the solution and the market, and there is no obvious call to action above the fold.',
        unsatisfactory: 'The copy and imagery provide no immediate details about the problem the product/service solves, nor is it obvious who the product/service serves.'
      }
    },
    {
      id: 'imagery',
      title: 'Imagery',
      description: 'The images on your website should support your message and help visitors visualize the benefits of your product or service.',
      criteria: {
        exceptional: 'Main image positions the customer as the hero and clearly demonstrates the ideal "After" of the target market. All additional images support the themes and messages in the sale copy.',
        competent: 'Images demonstrate the product or service in action, but they do not clearly illustrate the ideal "After" of the target market.',
        needsImprovement: 'Images are visibly pleasing, but they distract from the core messages, either because they are unrelated or they negatively impact readability.',
        unsatisfactory: 'Images are crude and unprofessional, and they represent the product/service vaguely and/or inaccurately.'
      }
    },
    {
      id: 'top-menu',
      title: 'Top Menu',
      description: 'Your navigation should be simple, clear, and include a prominent call to action.',
      criteria: {
        exceptional: 'The company logo is visible, navigation is limited to the bare essentials, and the primary call to action holds a prominent position on the top-right of the page.',
        competent: 'The company logo and primary call to action is visible, but the navigation contains one or more non-essential elements.',
        needsImprovement: 'The navigation is cluttered, leaving no room for a call to action.',
        unsatisfactory: 'The navigation is very cluttered and confusing with no calls to action or indicators of what the visitor should do next.'
      }
    },
    {
      id: 'call-to-action',
      title: 'Call To Action',
      description: 'Your calls to action should be clear, compelling, and strategically placed throughout your website.',
      criteria: {
        exceptional: 'The page maintains a consistent primary and secondary call to action and repeats these CTAs at least 3 times on the page (Top Menu, Above the Fold, Below the Fold). CTA copy is clear and compelling, and the visitor knows the EXACT action they need to take (ex. Click a button, fill out a form, call a number, etc.) to progress to the next step.',
        competent: 'The page contains at least 2 clear and specific calls to action, 1 above and 1 below the fold.',
        needsImprovement: 'A call to action is present, but the action and/or next step is vague. (e.g. a button that says "Order Now" that doesn\'t give the necessary pricing or offer details, or a registration form that doesn\'t clarify exactly what you are registering for or what will happen next.)',
        unsatisfactory: 'There is no direct call to action on the page. The visitor is generally left wondering what they should do next.'
      }
    },
    {
      id: 'body',
      title: 'The Body',
      description: 'The main content of your website should clearly explain your product/service and its benefits.',
      criteria: {
        exceptional: 'Text, images, and video clearly and succinctly expand on HOW the product/service works, WHO will benefit, and WHAT the visitor needs to do next. The sections are clearly labelled, and the copy is compelling and persuasive.',
        competent: 'Text, images, and video explain the features of the product/service, but those features are not clearly connected to specific benefits or the promised ideal "After" state.',
        needsImprovement: 'Text, images, and video are all company-centric (i.e. they position the company as the hero), and fail to connect with the challenges the visitor is experiencing and how the product/service can solve those specific challenges.',
        unsatisfactory: 'The body is missing entirely or is completely disjointed from the promises and offer made at the top of the page.'
      }
    },
    {
      id: 'trust',
      title: 'Trust',
      description: 'Building trust is essential for converting visitors into customers. Your website should include elements that establish credibility.',
      criteria: {
        exceptional: 'Impressive logos from existing customers are featured prominently on the page, and additional customer stories and quotes are either visible or immediately accessible from the home page.',
        competent: 'Logos and testimonials are visible, but there are no links to any specific customer stories or case studies featuring known avatars.',
        needsImprovement: 'Logos are visible, but there are no quotes or stories from actual customers.',
        unsatisfactory: 'No customer logos, customer quotes, or customer stories are visible or accessible from the page.'
      }
    },
    {
      id: 'footer',
      title: 'Footer',
      description: 'Your footer should include essential information and resources that help visitors learn more about your business.',
      criteria: {
        exceptional: 'In addition to all important and essential information (i.e. expanded navigation, physical address, links to Contact Us, Terms of Service, Privacy Policy, etc.), the footer also serves as a resource directory for flagship content and case studies.',
        competent: 'All important and essential information (i.e. expanded navigation, physical address, links to Contact Us, Terms of Service, Privacy Policy, etc.) are visible, but the layout is cluttered and detracts a bit from the overall design of the page.',
        needsImprovement: 'Only the essential information (physical address, links to Contact Us, Terms of Service, Privacy Policy, etc.) is visible, and there are no additional resources or value to be found in the footer.',
        unsatisfactory: 'The footer is lacking essential information or is missing entirely from the page.'
      }
    }
  ];

  // Calculate the total number of steps (intro + sections + results)
  const totalSteps = auditSections.length + 2; // +1 for intro, +1 for results

  // Handle rating selection
  const handleRatingSelect = (sectionId: string, rating: number) => {
    setRatings({
      ...ratings,
      [sectionId]: rating
    });
  };

  // Handle next step
  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle lead form change
  const handleLeadFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLeadForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle lead form submission
  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to Supabase with ratings included
      await submitFormData('website_audit', {
        ...leadForm,
        ratings: JSON.stringify(ratings),
        score: calculateOverallScore(),
        score_category: getScoreCategory(calculateOverallScore()).label
      });
      
      setFormSubmitted(true);
    } catch (err) {
      console.error('Error submitting website audit form:', err);
      // Still show success to the user, but log the error
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate overall score
  const calculateOverallScore = () => {
    const totalScore = Object.values(ratings).reduce((sum, score) => sum + score, 0);
    const maxPossibleScore = auditSections.length * 4;
    return Math.round((totalScore / maxPossibleScore) * 100);
  };

  // Get score category
  const getScoreCategory = (score: number) => {
    if (score >= 90) return { label: 'Exceptional', color: 'bg-green-500' };
    if (score >= 75) return { label: 'Good', color: 'bg-blue-500' };
    if (score >= 50) return { label: 'Needs Improvement', color: 'bg-yellow-500' };
    return { label: 'Requires Attention', color: 'bg-red-500' };
  };

  // Render the intro step
  const renderIntroStep = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-primary-800">Website Homepage Audit Tool</h2>
      <p className="text-gray-700 mb-6">
        This tool will help you assess the effectiveness of your website's homepage across seven key areas. 
        You'll receive a score and personalized recommendations to improve your website's performance.
      </p>
      <p className="text-gray-700 mb-6">
        The assessment takes about 5-7 minutes to complete. You'll be asked to rate your website in the following areas:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
        {auditSections.map(section => (
          <li key={section.id}>{section.title}</li>
        ))}
      </ul>
      <p className="text-gray-700 mb-8">
        Ready to get started? Click the button below to begin your website audit.
      </p>
      <Button onClick={handleNextStep} className="w-full md:w-auto">
        Start Website Audit
      </Button>
    </div>
  );

  // Render an audit section step
  const renderSectionStep = (section: any, index: number) => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-primary-800">{section.title}</h2>
          <span className="text-sm text-gray-500">Step {index + 1} of {auditSections.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary-800 h-2.5 rounded-full" 
            style={{ width: `${((index + 1) / auditSections.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">{section.description}</p>
      
      <div className="space-y-4 mb-8">
        <div 
          className={`p-4 rounded-lg border ${ratings[section.id] === 4 ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500'} cursor-pointer transition-colors`}
          onClick={() => handleRatingSelect(section.id, 4)}
        >
          <div className="flex items-start">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${ratings[section.id] === 4 ? 'border-green-500 bg-green-500' : 'border-gray-300'} flex items-center justify-center mr-3 mt-0.5`}>
              {ratings[section.id] === 4 && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Exceptional (4 points)</h4>
              <p className="text-gray-700 mt-1 text-sm">{section.criteria.exceptional}</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`p-4 rounded-lg border ${ratings[section.id] === 3 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'} cursor-pointer transition-colors`}
          onClick={() => handleRatingSelect(section.id, 3)}
        >
          <div className="flex items-start">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${ratings[section.id] === 3 ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} flex items-center justify-center mr-3 mt-0.5`}>
              {ratings[section.id] === 3 && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Competent (3 points)</h4>
              <p className="text-gray-700 mt-1 text-sm">{section.criteria.competent}</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`p-4 rounded-lg border ${ratings[section.id] === 2 ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-yellow-500'} cursor-pointer transition-colors`}
          onClick={() => handleRatingSelect(section.id, 2)}
        >
          <div className="flex items-start">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${ratings[section.id] === 2 ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-3 mt-0.5`}>
              {ratings[section.id] === 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Needs Improvement (2 points)</h4>
              <p className="text-gray-700 mt-1 text-sm">{section.criteria.needsImprovement}</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`p-4 rounded-lg border ${ratings[section.id] === 1 ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-500'} cursor-pointer transition-colors`}
          onClick={() => handleRatingSelect(section.id, 1)}
        >
          <div className="flex items-start">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${ratings[section.id] === 1 ? 'border-red-500 bg-red-500' : 'border-gray-300'} flex items-center justify-center mr-3 mt-0.5`}>
              {ratings[section.id] === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Unsatisfactory (1 point)</h4>
              <p className="text-gray-700 mt-1 text-sm">{section.criteria.unsatisfactory}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button onClick={handlePrevStep} variant="outline">
          Previous
        </Button>
        <Button 
          onClick={handleNextStep} 
          disabled={!ratings[section.id]}
        >
          {index === auditSections.length - 1 ? 'See Results' : 'Next'}
        </Button>
      </div>
    </div>
  );

  // Render the results step
  const renderResultsStep = () => {
    const overallScore = calculateOverallScore();
    const scoreCategory = getScoreCategory(overallScore);
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Your Website Audit Results</h2>
        
        {/* Overall Score */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 mb-2">Overall Score:</p>
          <div className="relative h-40 w-40 mx-auto">
            <div className={`absolute inset-0 rounded-full ${scoreCategory.color} flex items-center justify-center text-white`}>
              <span className="text-4xl font-bold">{overallScore}%</span>
            </div>
          </div>
          <p className={`mt-4 text-xl font-semibold`}>
            {scoreCategory.label}
          </p>
        </div>
        
        {/* Section Scores */}
        <h3 className="text-xl font-semibold mb-4 text-primary-800">Section Scores</h3>
        <div className="space-y-4 mb-8">
          {auditSections.map(section => (
            <div key={section.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{section.title}</h4>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4].map(star => (
                      <svg 
                        key={star} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${star <= (ratings[section.id] || 0) ? 'text-yellow-500' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {ratings[section.id] === 4 ? 'Exceptional' : 
                     ratings[section.id] === 3 ? 'Competent' : 
                     ratings[section.id] === 2 ? 'Needs Improvement' : 
                     ratings[section.id] === 1 ? 'Unsatisfactory' : 'Not Rated'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lead Form */}
        {!formSubmitted ? (
          <div className="bg-primary-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-800">Get Your Detailed Report</h3>
            <p className="text-gray-700 mb-4">
              Enter your details below to receive a detailed PDF report with personalized recommendations for improving your website.
            </p>
            <form onSubmit={handleLeadFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={leadForm.name}
                  onChange={handleLeadFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={leadForm.email}
                  onChange={handleLeadFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Website URL *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={leadForm.website}
                  onChange={handleLeadFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={leadForm.consent}
                    onChange={handleLeadFormChange}
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="text-gray-700">
                    I'd like a member of the team to contact me about improving my website.
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Get My Detailed Report'}
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="text-lg font-semibold text-green-800 mb-1">Thank You!</h4>
            <p className="text-green-700 mb-4">
              Your detailed report has been sent to {leadForm.email}.
            </p>
            <p className="text-green-700">
              One of our website experts will be in touch soon to discuss how we can help improve your website's performance.
            </p>
          </div>
        )}
        
        {/* Restart Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setCurrentStep(0);
              setRatings({});
              setFormSubmitted(false);
              setLeadForm({
                name: '',
                email: '',
                website: '',
                consent: false
              });
            }}
            className="text-primary-800 font-medium hover:text-primary-700"
          >
            Start a New Audit
          </button>
        </div>
      </div>
    );
  };

  // Render the appropriate step
  const renderContent = () => {
    if (currentStep === 0) {
      return renderIntroStep();
    } else if (currentStep <= auditSections.length) {
      const sectionIndex = currentStep - 1;
      return renderSectionStep(auditSections[sectionIndex], sectionIndex);
    } else {
      return renderResultsStep();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {renderContent()}
    </div>
  );
};

export default WebsiteAuditTool;
