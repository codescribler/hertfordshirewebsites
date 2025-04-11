-- Create award_submissions table
CREATE TABLE award_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  location TEXT NOT NULL,
  categories TEXT[] NOT NULL,
  why_deserve TEXT,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for chronological queries
CREATE INDEX award_submissions_created_at_idx ON award_submissions(created_at);

-- Create a view for award submissions
CREATE VIEW award_submissions_view AS
SELECT 
  id, 
  business_name,
  website_url,
  location,
  categories,
  why_deserve,
  contact_name,
  contact_email,
  contact_phone,
  created_at
FROM award_submissions;

-- Add RLS policy
ALTER TABLE award_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users
CREATE POLICY "Allow public inserts to award_submissions" 
  ON award_submissions FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow reads from authenticated users
CREATE POLICY "Allow authenticated reads from award_submissions" 
  ON award_submissions FOR SELECT 
  TO authenticated
  USING (true);
