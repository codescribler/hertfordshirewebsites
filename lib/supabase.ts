import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Zapier webhook URL
const webhookUrl = 'https://hooks.zapier.com/hooks/catch/629009/2qw8e3q/';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Define the form data interface
interface FormData {
  [key: string]: any;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  service?: string;
  website?: string;
  preferredDate?: string;
  preferred_date?: string;
  preferredTime?: string;
  preferred_time?: string;
  goals?: string;
  consent?: boolean;
}

// Define the data structure for Supabase
interface SupabaseFormData {
  [key: string]: any;
  form_type: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  service?: string;
  website?: string;
  preferred_date?: string;
  preferred_time?: string;
  goals?: string;
  consent?: boolean;
  form_data?: string | null;
}

// Helper function to post data to webhook
async function postToWebhook(standardizedData: any) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(standardizedData),
    });
    
    if (!response.ok) {
      throw new Error(`Webhook response: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error posting to webhook:', error);
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

    // Prepare data for insertion to Supabase
    const supabaseData: SupabaseFormData = {
      form_type: formType,
      name,
      email,
      phone,
      company,
      message,
      service,
      website,
      preferred_date: preferredDate || preferred_date,
      preferred_time: preferredTime || preferred_time,
      goals,
      consent,
      form_data: Object.keys(otherData).length > 0 ? JSON.stringify(otherData) : null,
    };

    // Remove undefined fields for Supabase
    Object.keys(supabaseData).forEach((key) => {
      if (supabaseData[key] === undefined) {
        delete supabaseData[key];
      }
    });

    // Create standardized data structure for webhook with all possible fields
    const standardizedData = {
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
      source_url: typeof window !== 'undefined' ? window.location.href : ''
    };

    // Insert data into Supabase
    const { data: result, error } = await supabase
      .from('form_submissions')
      .insert([supabaseData]);

    if (error) {
      console.error('Error submitting form to Supabase:', error);
      throw error;
    }

    // Post to webhook
    try {
      await postToWebhook(standardizedData);
    } catch (webhookError) {
      console.error('Error posting to webhook, but Supabase submission was successful:', webhookError);
      // We don't throw the error here to avoid failing the whole submission
      // if only the webhook part fails
    }

    return result;
  } catch (error) {
    console.error('Error in submitFormData:', error);
    throw error;
  }
}
