import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
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
  timestamp?: string;
  source_url?: string;
  // Award submission fields
  business_name?: string;
  website_url?: string;
  location?: string;
  categories?: string[];
  why_deserve?: string;
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
  // Additional data
  [key: string]: unknown;
}

function formatFormType(formType: string): string {
  const typeMap: Record<string, string> = {
    'contact': 'Contact Form',
    'discovery_call': 'Discovery Call Request',
    'award_submission': 'Award Submission',
    'website_audit': 'Website Audit',
    'roi_calculator_lead': 'ROI Calculator Lead',
    'roi_calculator_course': 'Course Enrollment',
  };
  return typeMap[formType] || formType;
}

function generateEmailHtml(data: EmailData): string {
  const formType = formatFormType(data.form_type);

  let html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        New ${formType} Submission
      </h2>
      <p style="color: #666; font-size: 14px;">
        Received: ${data.timestamp ? new Date(data.timestamp).toLocaleString('en-GB') : new Date().toLocaleString('en-GB')}
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
  `;

  // Define fields to display based on form type
  const fields: Array<{ key: keyof EmailData; label: string }> = [];

  if (data.form_type === 'award_submission') {
    fields.push(
      { key: 'business_name', label: 'Business Name' },
      { key: 'website_url', label: 'Website URL' },
      { key: 'location', label: 'Location' },
      { key: 'contact_name', label: 'Contact Name' },
      { key: 'contact_email', label: 'Contact Email' },
      { key: 'contact_phone', label: 'Contact Phone' },
      { key: 'why_deserve', label: 'Why They Deserve to Win' },
    );
  } else {
    fields.push(
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { key: 'company', label: 'Company' },
      { key: 'website', label: 'Website' },
      { key: 'service', label: 'Service Interested In' },
      { key: 'preferred_date', label: 'Preferred Date' },
      { key: 'preferred_time', label: 'Preferred Time' },
      { key: 'goals', label: 'Goals' },
      { key: 'message', label: 'Message' },
    );
  }

  // Add rows for each field that has a value
  for (const field of fields) {
    const value = data[field.key];
    if (value !== undefined && value !== null && value !== '') {
      html += `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%; vertical-align: top;">
            ${field.label}
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            ${String(value).replace(/\n/g, '<br>')}
          </td>
        </tr>
      `;
    }
  }

  // Handle categories for award submissions
  if (data.categories && Array.isArray(data.categories) && data.categories.length > 0) {
    html += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%; vertical-align: top;">
          Categories
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          ${data.categories.join(', ')}
        </td>
      </tr>
    `;
  }

  // Add source URL if available
  if (data.source_url) {
    html += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">
          Submitted From
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <a href="${data.source_url}" style="color: #2563eb;">${data.source_url}</a>
        </td>
      </tr>
    `;
  }

  html += `
      </table>
      <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
        This email was automatically sent from hertfordshirewebsites.co.uk
      </p>
    </div>
  `;

  return html;
}

function generateEmailText(data: EmailData): string {
  const formType = formatFormType(data.form_type);
  let text = `New ${formType} Submission\n`;
  text += `Received: ${data.timestamp ? new Date(data.timestamp).toLocaleString('en-GB') : new Date().toLocaleString('en-GB')}\n\n`;

  const excludeKeys = ['form_type', 'timestamp', 'consent'];

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null && value !== '' && !excludeKeys.includes(key)) {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      if (Array.isArray(value)) {
        text += `${label}: ${value.join(', ')}\n`;
      } else {
        text += `${label}: ${value}\n`;
      }
    }
  }

  return text;
}

export async function POST(request: NextRequest) {
  try {
    const data: EmailData = await request.json();

    if (!data.form_type) {
      return NextResponse.json(
        { error: 'form_type is required' },
        { status: 400 }
      );
    }

    const formType = formatFormType(data.form_type);
    const contactEmail = data.email || data.contact_email || 'Unknown';
    const contactName = data.name || data.contact_name || 'Unknown';

    const { data: emailResult, error } = await resend.emails.send({
      from: 'Hertfordshire Websites <notifications@hertfordshirewebsites.co.uk>',
      to: ['daniel@dreamfree.co.uk'],
      subject: `New ${formType}: ${contactName} (${contactEmail})`,
      html: generateEmailHtml(data),
      text: generateEmailText(data),
      replyTo: contactEmail !== 'Unknown' ? contactEmail : undefined,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', emailResult);
    return NextResponse.json({ success: true, id: emailResult?.id });
  } catch (error) {
    console.error('Error in send-email route:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
