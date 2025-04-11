'use client';

import { useState } from 'react';
import { submitFormData } from '@/lib/supabase'; // Corrected import path
import { AwardSubmission } from '@/lib/types'; // Import the type

// Define initial state matching the AwardSubmission interface (excluding calculated/server-side fields)
const initialFormData: Omit<AwardSubmission, 'id' | 'created_at'> = {
  business_name: '',
  website_url: '',
  location: '',
  categories: [],
  why_deserve: '',
  contact_name: '',
  contact_email: '',
  contact_phone: '',
};

export default function AwardEntryForm() {
  const [formData, setFormData] = useState<Omit<AwardSubmission, 'id' | 'created_at'>>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentCategories = prev.categories || [];
      if (checked) {
        return { ...prev, categories: [...currentCategories, value] };
      } else {
        return { ...prev, categories: currentCategories.filter(cat => cat !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Convert formData to FormData object for submission if needed by submitFormData
      // Or directly pass the formData object if submitFormData handles it
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'categories' && Array.isArray(value)) {
          // Supabase might expect array fields differently, adjust if needed
          // For now, sending as comma-separated string or JSON string might work
          submissionData.append(key, JSON.stringify(value));
        } else if (value !== null && value !== undefined) {
          submissionData.append(key, String(value));
        }
      });

      // TODO: Implement multi-step logic here
      // TODO: Implement validation here

      // Assuming submitFormData handles the AwardSubmission type correctly
      // The second argument 'award_submission' tells supabase.ts which type of form it is
      await submitFormData('award_submission', submissionData);

      setSuccess(true);
      setFormData(initialFormData); // Reset form on success
    } catch (err) {
      console.error('Submission error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Build the multi-step form UI here
  // For now, a simple placeholder form
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {error && <p className="text-red-500 bg-red-100 p-3 rounded">Error: {error}</p>}
      {success && <p className="text-green-600 bg-green-100 p-3 rounded">Submission successful!</p>}

      <div>
        <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          name="business_name"
          id="business_name"
          required
          value={formData.business_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        />
      </div>

      {/* Add other form fields similarly */}
      {/* Example for categories (needs proper styling) */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Categories</label>
        {/* Map over awardCategories from types.ts */}
        {/* Example: */}
        {/* <label><input type="checkbox" value="best-design" onChange={handleCategoryChange} /> Best Design</label> */}
      </div>


      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isLoading ? 'Submitting...' : 'Submit Entry'}
      </button>
    </form>
  );
}