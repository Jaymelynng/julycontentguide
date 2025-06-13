/*
  # Progress Tracking System

  1. New Tables
    - `progress_tracking`
      - `id` (uuid, primary key)
      - `gym_id` (text, gym identifier)
      - `gym_name` (text, gym display name)
      - `section` (text, content section)
      - `item_id` (text, checklist item identifier)
      - `completed` (boolean, completion status)
      - `completed_at` (timestamp, when completed)
      - `user_session` (text, browser session identifier)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `progress_tracking` table
    - Add policy for public read/write access (since this is internal tracking)
*/

CREATE TABLE IF NOT EXISTS progress_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gym_id text NOT NULL,
  gym_name text NOT NULL,
  section text NOT NULL,
  item_id text NOT NULL,
  completed boolean DEFAULT false,
  completed_at timestamptz,
  user_session text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create unique constraint to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS progress_tracking_unique_idx 
ON progress_tracking (gym_id, section, item_id, user_session);

-- Enable RLS
ALTER TABLE progress_tracking ENABLE ROW LEVEL SECURITY;

-- Allow public access for progress tracking (since this is internal)
CREATE POLICY "Allow public access to progress tracking"
  ON progress_tracking
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_progress_tracking_updated_at
  BEFORE UPDATE ON progress_tracking
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();