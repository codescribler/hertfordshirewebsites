import { AwardSubmission, FormData } from './types';

// Helper function to send form data via email
async function sendFormEmail(data: Record<string, unknown>) {
  try {
    console.log('Sending form submission via email...');

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Email API error:', response.status, errorData);
      throw new Error(`Email API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Helper function to submit award submission data
export async function submitAwardSubmission(submissionData: AwardSubmission) {
  try {
    // Create data structure for email
    const emailData = {
      form_type: 'award_submission',
      business_name: submissionData.business_name,
      website_url: submissionData.website_url,
      location: submissionData.location,
      categories: submissionData.categories,
      why_deserve: submissionData.why_deserve,
      contact_name: submissionData.contact_name,
      contact_email: submissionData.contact_email,
      contact_phone: submissionData.contact_phone,
      timestamp: new Date().toISOString(),
      source_url: typeof window !== 'undefined' ? window.location.href : ''
    };

    // Send via email
    const result = await sendFormEmail(emailData);
    console.log('Award submission sent via email:', result);

    return result;
  } catch (error) {
    console.error('Error in submitAwardSubmission:', error);
    throw error;
  }
}

// Helper function to submit form data
export async function submitFormData(formType: string, formData: FormData) {
  try {
    // Extract common fields
    const {
      name,
      email,
      phone,
      company,
      message,
      service,
      website,
      preferredDate,
      preferred_date,
      preferredTime,
      preferred_time,
      goals,
      consent,
      ...otherData
    } = formData;

    // Create standardized data structure for email
    const emailData = {
      form_type: formType,
      name: name || '',
      email: email || '',
      phone: phone || '',
      company: company || '',
      message: message || '',
      service: service || '',
      website: website || '',
      preferred_date: (preferredDate || preferred_date || ''),
      preferred_time: (preferredTime || preferred_time || ''),
      goals: goals || '',
      consent: consent || false,
      timestamp: new Date().toISOString(),
      source_url: typeof window !== 'undefined' ? window.location.href : '',
      // Include any additional data
      ...otherData
    };

    // Remove empty string values for cleaner email
    const cleanedData = Object.fromEntries(
      Object.entries(emailData).filter(([, value]) => value !== '' && value !== null && value !== undefined)
    );

    // Ensure form_type and timestamp are always present
    cleanedData.form_type = formType;
    cleanedData.timestamp = emailData.timestamp;

    // Send via email
    console.log('Submitting form via email...');
    const result = await sendFormEmail(cleanedData);
    console.log('Form submission sent via email:', result);

    return result;
  } catch (error) {
    console.error('Error in submitFormData:', error);
    throw error;
  }
}
