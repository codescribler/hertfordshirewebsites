-- Create the form_submissions table to store all form data
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  form_type TEXT NOT NULL,
  name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  message TEXT,
  service TEXT,
  website TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  goals TEXT,
  consent BOOLEAN,
  form_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on form_type for faster queries
CREATE INDEX form_submissions_form_type_idx ON form_submissions(form_type);

-- Create an index on email for faster lookups
CREATE INDEX form_submissions_email_idx ON form_submissions(email);

-- Create an index on created_at for chronological queries
CREATE INDEX form_submissions_created_at_idx ON form_submissions(created_at);
-- Create an index on created_at for chronological queries
CREATE INDEX form_submissions_created_at_idx ON form_submissions(created_at);

-- Create awards submissions table
CREATE TABLE award_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  location TEXT NOT NULL,
  categories TEXT[] NOT NULL,
  why_deserve TEXT,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT, -- Made phone optional as per interface, not in original request snippet
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for award_submissions
CREATE INDEX award_submissions_email_idx ON award_submissions(contact_email);
CREATE INDEX award_submissions_created_at_idx ON award_submissions(created_at);

-- Enable RLS for award_submissions (assuming similar policies as form_submissions)
ALTER TABLE award_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert award submissions
CREATE POLICY "Allow anonymous users to insert award submissions"
  ON award_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to insert award submissions
CREATE POLICY "Allow authenticated users to insert award submissions"
  ON award_submissions FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to view award submissions (adjust if needed)
CREATE POLICY "Allow authenticated users to view award submissions"
  ON award_submissions FOR SELECT
  TO authenticated
  USING (true);


-- Create a view for contact form submissions
-- Create a view for contact form submissions
CREATE VIEW contact_form_submissions AS
SELECT id, name, email, phone, company, message, service, consent, created_at
FROM form_submissions
WHERE form_type = 'contact';

-- Create a view for discovery call form submissions
CREATE VIEW discovery_call_submissions AS
SELECT id, name, email, phone, company, website, preferred_date, preferred_time, goals, consent, created_at
FROM form_submissions
WHERE form_type = 'discovery_call';

-- Create a view for website audit tool submissions
CREATE VIEW website_audit_submissions AS
SELECT 
  id, 
  name, 
  email, 
  website, 
  consent, 
  form_data->>'ratings' as ratings,
  form_data->>'score' as score,
  form_data->>'score_category' as score_category,
  created_at
FROM form_submissions
WHERE form_type = 'website_audit';

-- Create a view for ROI calculator lead submissions
CREATE VIEW roi_calculator_lead_submissions AS
SELECT 
  id, 
  name, 
  email, 
  phone, 
  consent, 
  form_data->>'metrics' as metrics,
  form_data->>'current_metrics' as current_metrics,
  form_data->>'is_custom_mode' as is_custom_mode,
  created_at
FROM form_submissions
WHERE form_type = 'roi_calculator_lead';

-- Create a view for ROI calculator course submissions
CREATE VIEW roi_calculator_course_submissions AS
SELECT 
  id, 
  name, 
  email, 
  form_data->>'course_type' as course_type,
  created_at
FROM form_submissions
WHERE form_type = 'roi_calculator_course';

-- Enable Row Level Security (RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows only authenticated users to view submissions
CREATE POLICY "Allow authenticated users to view submissions" 
  ON form_submissions FOR SELECT 
  TO authenticated 
  USING (true);

-- Create a policy that allows the anon role to insert submissions
CREATE POLICY "Allow anonymous users to insert submissions" 
  ON form_submissions FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create a policy that allows authenticated users to insert submissions
CREATE POLICY "Allow authenticated users to insert submissions" 
  ON form_submissions FOR INSERT 
  TO authenticated 
  WITH CHECK (true);
