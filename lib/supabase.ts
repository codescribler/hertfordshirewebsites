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
    // Cannot directly call webhook from client-side due to CORS restrictions
    // Instead, create a simplified object without unnecessary fields 
    // to reduce payload size
    const webhookData = {
      form_type: standardizedData.form_type,
      name: standardizedData.name,
      email: standardizedData.email,
      phone: standardizedData.phone,
      company: standardizedData.company,
      message: standardizedData.message,
      service: standardizedData.service,
      website: standardizedData.website,
      preferred_date: standardizedData.preferred_date,
      preferred_time: standardizedData.preferred_time,
      goals: standardizedData.goals,
      timestamp: standardizedData.timestamp,
      source_url: standardizedData.source_url
    };
    
    // Log the attempt
    console.log('Attempting to post data to webhook');
    
    // Make a same-origin request to our backend API route
    // which will forward the request to Zapier
    const response = await fetch('/api/webhook-forwarder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: webhookUrl,
        data: webhookData
      }),
    });
    
    // Handle any errors from our API route
    if (!response.ok) {
      const responseText = await response.text();
      console.error(`API error: ${response.status} ${response.statusText}`);
      console.error('Response body:', responseText);
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const responseData = await response.json().catch(() => ({}));
    console.log('Webhook forwarded successfully:', responseData);
    return responseData;
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

    // Post to webhook - do this before returning
    // We now await the webhook call and log more details about any failures
    console.log('Attempting to post to webhook...');
    
    try {
      const webhookResponse = await postToWebhook(standardizedData);
      console.log('Successfully posted to webhook with response:', webhookResponse);
    } catch (webhookError) {
      console.error('Error posting to webhook, but Supabase submission was successful:');
      console.error(webhookError);
      
      // We don't throw the error here to avoid failing the whole submission
      // if only the webhook part fails, but we log extensively to help debugging
    }

    return result;
  } catch (error) {
    console.error('Error in submitFormData:', error);
    throw error;
  }
}
