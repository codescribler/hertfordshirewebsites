import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

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

    // Prepare data for insertion
    const data: SupabaseFormData = {
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

    // Remove undefined fields
    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) {
        delete data[key];
      }
    });

    // Insert data into Supabase
    const { data: result, error } = await supabase
      .from('form_submissions')
      .insert([data]);

    if (error) {
      console.error('Error submitting form:', error);
      throw error;
    }

    return result;
  } catch (error) {
    console.error('Error in submitFormData:', error);
    throw error;
  }
}
