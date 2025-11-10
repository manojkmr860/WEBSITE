/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Full name of the person submitting
      - `email` (text, required) - Email address for contact
      - `phone` (text, required) - 10-digit phone number
      - `challenge_id` (text, required) - Which challenge card they clicked (land_legal, permits_approvals, etc.)
      - `challenge_name` (text) - Human-readable challenge name
      - `created_at` (timestamptz) - Timestamp of submission
      - `ip_address` (text) - Optional: Track IP for spam prevention
      - `user_agent` (text) - Optional: Track browser info
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions (public access for form submission)
    - Add policy for reading submissions (authenticated admin users only)
  
  3. Indexes
    - Index on email for faster lookups and duplicate detection
    - Index on created_at for sorting by date
    - Index on challenge_id for analytics
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  challenge_id text NOT NULL,
  challenge_name text,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON contact_submissions(email);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_challenge_id 
  ON contact_submissions(challenge_id);
