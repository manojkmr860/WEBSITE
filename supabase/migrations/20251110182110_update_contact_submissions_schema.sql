/*
  # Update contact_submissions table schema
  
  1. Changes
    - Add `sub_problem` (text, required) - Dropdown selection of specific issue
    - Add `note` (text, optional) - Short additional note from user
    - Add `consent_interview` (boolean, optional) - Whether user consents to follow-up interview
    - Make `name` and `phone` optional (only email is required now)
    - Keep existing fields for backward compatibility
  
  2. Security
    - Maintain existing RLS policies
    - No changes to security model
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'sub_problem'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN sub_problem text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'note'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN note text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'consent_interview'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN consent_interview boolean DEFAULT false;
  END IF;
END $$;

ALTER TABLE contact_submissions ALTER COLUMN name DROP NOT NULL;
ALTER TABLE contact_submissions ALTER COLUMN phone DROP NOT NULL;