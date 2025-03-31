'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitFormData } from '@/lib/supabase';

const ROICalculator = () => {
  // Lead form state
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false
  });
  
  // Course popup state
  const [showCoursePopup, setShowCoursePopup] = useState(false);
  const [courseType, setCourseType] = useState<string>('');
  const [courseForm, setCourseForm] = useState({
    name: '',
    email: ''
  });
  const [courseSubmitted, setCourseSubmitted] = useState(false);
  
  // Calculator state
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [hasSeenDefaultResults, setHasSeenDefaultResults] = useState(false);
  const [metrics, setMetrics] = useState({
    visitors: 10000,
    conversionRate: 1,
    closeRate: 10,
    averageSaleValue: 400
  });
  const [customInputs, setCustomInputs] = useState({
    visitors: '',
    conversionRate: '',
    closeRate: '',
    averageSaleValue: ''
  });
  const [improvements, setImprovements] = useState({
    traffic: false,
    conversion: false,
    closeRate: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Calculate current metrics
  const currentMetrics = {
    leads: Math.round(metrics.visitors * (metrics.conversionRate / 100)),
    customers: Math.round(metrics.visitors * (metrics.conversionRate / 100) * (metrics.closeRate / 100)),
    revenue: Math.round(metrics.visitors * (metrics.conversionRate / 100) * (metrics.closeRate / 100) * metrics.averageSaleValue)
  };
  
  // Calculate improved metrics
  const improvedMetrics = {
    leads: Math.round(
      (improvements.traffic ? metrics.visitors * 1.2 : metrics.visitors) * 
      (improvements.conversion ? metrics.conversionRate * 2 : metrics.conversionRate) / 100
    ),
    customers: Math.round(
      (improvements.traffic ? metrics.visitors * 1.2 : metrics.visitors) * 
      (improvements.conversion ? metrics.conversionRate * 2 : metrics.conversionRate) / 100 *
      (improvements.closeRate ? metrics.closeRate * 1.5 : metrics.closeRate) / 100
    ),
    revenue: Math.round(
      (improvements.traffic ? metrics.visitors * 1.2 : metrics.visitors) * 
      (improvements.conversion ? metrics.conversionRate * 2 : metrics.conversionRate) / 100 *
      (improvements.closeRate ? metrics.closeRate * 1.5 : metrics.closeRate) / 100 *
      metrics.averageSaleValue
    )
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Format number
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-GB').format(value);
  };
  
  // Calculate percentage increase
  const calculateIncrease = (current: number, improved: number) => {
    return Math.round(((improved - current) / current) * 100);
  };
  
  // Handle custom input change
  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomInputs(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle lead form change
  const handleLeadFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLeadForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // Handle course form change
  const handleCourseFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourseForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Submit lead form
  const submitLeadForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to Supabase with metrics included
      await submitFormData('roi_calculator_lead', {
        ...leadForm,
        metrics: JSON.stringify(metrics),
        current_metrics: JSON.stringify(currentMetrics),
        is_custom_mode: isCustomMode
      });
      
      setShowResults(true);
      setShowLeadForm(false);
    } catch (err) {
      console.error('Error submitting ROI calculator lead form:', err);
      // Still show results to the user, but log the error
      setShowResults(true);
      setShowLeadForm(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Submit course form
  const submitCourseForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to Supabase
      await submitFormData('roi_calculator_course', {
        ...courseForm,
        course_type: courseType
      });
      
      setCourseSubmitted(true);
    } catch (err) {
      console.error('Error submitting ROI calculator course form:', err);
      // Still show success to the user, but log the error
      setCourseSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Toggle improvement
  const toggleImprovement = (type: 'traffic' | 'conversion' | 'closeRate') => {
    if (!showResults) {
      // Show results directly for both default and custom modes
      setShowResults(true);
      
      // If this is the default scenario, mark that the user has seen default results
      if (!isCustomMode) {
        setHasSeenDefaultResults(true);
      }
      
      return;
    }
    
    setImprovements(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  
  // Calculate custom metrics
  const calculateCustomMetrics = () => {
    const newMetrics = {
      visitors: customInputs.visitors ? parseInt(customInputs.visitors) : metrics.visitors,
      conversionRate: customInputs.conversionRate ? parseFloat(customInputs.conversionRate) : metrics.conversionRate,
      closeRate: customInputs.closeRate ? parseFloat(customInputs.closeRate) : metrics.closeRate,
      averageSaleValue: customInputs.averageSaleValue ? parseInt(customInputs.averageSaleValue) : metrics.averageSaleValue,
    };
    
    setMetrics(newMetrics);
    setShowLeadForm(true); // Show lead form for custom mode
  };
  
  // Open course popup
  const openCoursePopup = (type: string) => {
    setCourseType(type);
    setShowCoursePopup(true);
    setCourseSubmitted(false);
  };
  
  // Get course title
  const getCourseTitle = () => {
    switch (courseType) {
      case 'traffic': return 'Increase Your Website Traffic';
      case 'conversion': return 'Double Your Conversion Rate';
      case 'closeRate': return 'Improve Your Close Rate';
      default: return '';
    }
  };
  
  // Get course description
  const getCourseDescription = () => {
    switch (courseType) {
      case 'traffic': return 'Learn proven strategies to boost your website traffic by 20% or more in our free 5-day email course.';
      case 'conversion': return 'Discover how to double your website conversion rate with our free 5-day email course on conversion optimization.';
      case 'closeRate': return 'Master the art of lead nurturing and improve your close rate by 50% or more with our free 5-day email course.';
      default: return '';
    }
  };
  
  // Check if any improvements are active
  const hasActiveImprovements = Object.values(improvements).some(Boolean);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative">
      {/* Course Popup */}
      {showCoursePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowCoursePopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-primary-800 mb-2">
              {getCourseTitle()}
            </h3>
            
            <p className="text-gray-700 mb-4">
              {getCourseDescription()}
            </p>

            {courseSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-semibold text-green-800 mb-1">You're All Set!</h4>
                <p className="text-green-700">
                  Check your inbox for your first lesson. We've sent it to {courseForm.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submitCourseForm} className="space-y-4">
                <div>
                  <label htmlFor="course-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="course-name"
                    name="name"
                    value={courseForm.name}
                    onChange={handleCourseFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="course-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="course-email"
                    name="email"
                    value={courseForm.email}
                    onChange={handleCourseFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="accent"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing Up...' : 'Get Free 5-Day Course'}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  You'll receive one email per day for 5 days. You can unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
      
      <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6 text-center">
        Website ROI Calculator
      </h2>
      
      {/* Mode Selection - Only show if results are not yet shown */}
      <div className="mb-8">
        {!showResults && (
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setIsCustomMode(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !isCustomMode
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Default Scenario
            </button>
            {/* Only show Model Your Business if user hasn't seen default results */}
            {!hasSeenDefaultResults && (
              <button
                onClick={() => setIsCustomMode(true)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isCustomMode
                    ? 'bg-primary-800 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Model Your Business
              </button>
            )}
          </div>
        )}

        {/* Default Scenario */}
        {!isCustomMode && !showLeadForm && !showResults && (
          <div className="bg-primary-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary-800">
              Default Business Scenario
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <span className="text-sm text-gray-600">Monthly Visitors:</span>
                <p className="text-lg font-semibold">{formatNumber(metrics.visitors)}</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <span className="text-sm text-gray-600">Conversion Rate:</span>
                <p className="text-lg font-semibold">{metrics.conversionRate}%</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <span className="text-sm text-gray-600">Close Rate:</span>
                <p className="text-lg font-semibold">{metrics.closeRate}%</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <span className="text-sm text-gray-600">Average Sale Value:</span>
                <p className="text-lg font-semibold">{formatCurrency(metrics.averageSaleValue)}</p>
              </div>
            </div>
            <div className="mt-4">
              <Button 
                onClick={() => {
                  setShowResults(true);
                  setHasSeenDefaultResults(true);
                }} 
                className="w-full"
              >
                See Your Potential Growth
              </Button>
            </div>
          </div>
        )}

        {/* Custom Inputs */}
        {isCustomMode && !showLeadForm && !showResults && (
          <div className="bg-primary-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary-800">
              Enter Your Business Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Website Visitors
                </label>
                <input
                  type="number"
                  name="visitors"
                  value={customInputs.visitors}
                  onChange={handleCustomInputChange}
                  placeholder="e.g., 10000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website-to-Lead Conversion Rate (%)
                </label>
                <input
                  type="number"
                  name="conversionRate"
                  value={customInputs.conversionRate}
                  onChange={handleCustomInputChange}
                  placeholder="e.g., 1"
                  step="0.1"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lead-to-Customer Close Rate (%)
                </label>
                <input
                  type="number"
                  name="closeRate"
                  value={customInputs.closeRate}
                  onChange={handleCustomInputChange}
                  placeholder="e.g., 10"
                  step="0.1"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Average Sale Value (£)
                </label>
                <input
                  type="number"
                  name="averageSaleValue"
                  value={customInputs.averageSaleValue}
                  onChange={handleCustomInputChange}
                  placeholder="e.g., 400"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <Button onClick={calculateCustomMetrics} className="w-full">
              Calculate Potential
            </Button>
          </div>
        )}

        {/* Lead Capture Form */}
        {showLeadForm && !showResults && (
          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary-800 text-center">
              See Your Personalized Results
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Enter your details below to see how much your business could grow with our proven strategies.
            </p>
            
            <form onSubmit={submitLeadForm} className="space-y-4">
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={leadForm.phone}
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
                    I'd like a member of the team to contact me about improving my website performance.
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
                  {isSubmitting ? 'Processing...' : 'Show My Results'}
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Results Section */}
      {showResults && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Current Performance
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-600">Monthly Visitors:</span>
                  <p className="text-2xl font-bold">{formatNumber(metrics.visitors)}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Monthly Leads:</span>
                  <p className="text-2xl font-bold">{formatNumber(currentMetrics.leads)}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Monthly Customers:</span>
                  <p className="text-2xl font-bold">{formatNumber(currentMetrics.customers)}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Monthly Revenue:</span>
                  <p className="text-2xl font-bold text-gray-800">
                    {formatCurrency(currentMetrics.revenue)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-800 p-4 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Improved Performance
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm opacity-80">Monthly Visitors:</span>
                  <p className="text-2xl font-bold flex items-center">
                    {formatNumber(improvements.traffic ? Math.round(metrics.visitors * 1.2) : metrics.visitors)}
                    {improvements.traffic && (
                      <span className="ml-2 text-sm bg-green-500 text-white px-2 py-0.5 rounded-full">
                        +20%
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <span className="text-sm opacity-80">Monthly Leads:</span>
                  <p className="text-2xl font-bold flex items-center">
                    {formatNumber(improvedMetrics.leads)}
                    {hasActiveImprovements && (
                      <span className="ml-2 text-sm bg-green-500 text-white px-2 py-0.5 rounded-full">
                        +{calculateIncrease(currentMetrics.leads, improvedMetrics.leads)}%
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <span className="text-sm opacity-80">Monthly Customers:</span>
                  <p className="text-2xl font-bold flex items-center">
                    {formatNumber(improvedMetrics.customers)}
                    {hasActiveImprovements && (
                      <span className="ml-2 text-sm bg-green-500 text-white px-2 py-0.5 rounded-full">
                        +{calculateIncrease(currentMetrics.customers, improvedMetrics.customers)}%
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <span className="text-sm opacity-80">Monthly Revenue:</span>
                  <p className="text-2xl font-bold flex items-center">
                    {formatCurrency(improvedMetrics.revenue)}
                    {hasActiveImprovements && (
                      <span className="ml-2 text-sm bg-green-500 text-white px-2 py-0.5 rounded-full">
                        +{calculateIncrease(currentMetrics.revenue, improvedMetrics.revenue)}%
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA for Model Your Business */}
          {!isCustomMode && (
            <div className="bg-primary-50 p-4 rounded-lg mb-8 text-center">
              <h3 className="text-xl font-semibold mb-2 text-primary-800">
                Want to see results for your specific business?
              </h3>
              <p className="text-gray-700 mb-4">
                Enter your own metrics to get a personalized ROI calculation tailored to your business.
              </p>
              <Button 
                onClick={() => {
                  setIsCustomMode(true);
                  setShowResults(false);
                }}
                variant="accent"
                className="px-6"
              >
                Model Your Business
              </Button>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-800">
              Toggle Improvements to See Impact
            </h3>
            
            <div className="space-y-4">
              {/* Traffic Improvement */}
              <div className="flex flex-col md:flex-row md:items-center">
                <Button 
                  onClick={() => toggleImprovement('traffic')} 
                  variant={improvements.traffic ? "default" : "outline"}
                  fullWidth
                  className={`justify-start p-4 h-auto md:flex-1 ${improvements.traffic ? 'border-2 border-green-500' : ''}`}
                >
                  <div className="flex items-start w-full">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      improvements.traffic ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        {improvements.traffic ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        )}
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${improvements.traffic ? 'text-white' : ''}`}>Increase Website Traffic by 20%</h4>
                      <p className={`text-sm mt-1 ${improvements.traffic ? 'text-gray-200' : 'opacity-80'}`}>
                        More visitors means more potential leads and customers.
                      </p>
                    </div>
                  </div>
                </Button>
                <Button
                  onClick={() => openCoursePopup('traffic')}
                  variant="secondary"
                  className="mt-2 md:mt-0 md:ml-2 md:w-auto"
                >
                  Learn How
                </Button>
              </div>
              
              {/* Conversion Improvement */}
              <div className="flex flex-col md:flex-row md:items-center">
                <Button 
                  onClick={() => toggleImprovement('conversion')} 
                  variant={improvements.conversion ? "default" : "outline"}
                  fullWidth
                  className={`justify-start p-4 h-auto md:flex-1 ${improvements.conversion ? 'border-2 border-green-500' : ''}`}
                >
                  <div className="flex items-start w-full">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      improvements.conversion ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        {improvements.conversion ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        )}
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${improvements.conversion ? 'text-white' : ''}`}>Double Your Conversion Rate</h4>
                      <p className={`text-sm mt-1 ${improvements.conversion ? 'text-gray-200' : 'opacity-80'}`}>
                        A better website converts more visitors into leads.
                      </p>
                    </div>
                  </div>
                </Button>
                <Button
                  onClick={() => openCoursePopup('conversion')}
                  variant="secondary"
                  className="mt-2 md:mt-0 md:ml-2 md:w-auto"
                >
                  Learn How
                </Button>
              </div>
              
              {/* Close Rate Improvement */}
              <div className="flex flex-col md:flex-row md:items-center">
                <Button 
                  onClick={() => toggleImprovement('closeRate')} 
                  variant={improvements.closeRate ? "default" : "outline"}
                  fullWidth
                  className={`justify-start p-4 h-auto md:flex-1 ${improvements.closeRate ? 'border-2 border-green-500' : ''}`}
                >
                  <div className="flex items-start w-full">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      improvements.closeRate ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        {improvements.closeRate ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        )}
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${improvements.closeRate ? 'text-white' : ''}`}>Improve Your Close Rate by 50%</h4>
                      <p className={`text-sm mt-1 ${improvements.closeRate ? 'text-gray-200' : 'opacity-80'}`}>
                        Better lead nurturing means more customers from the same leads.
                      </p>
                    </div>
                  </div>
                </Button>
                <Button
                  onClick={() => openCoursePopup('closeRate')}
                  variant="secondary"
                  className="mt-2 md:mt-0 md:ml-2 md:w-auto"
                >
                  Learn How
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ROICalculator;
