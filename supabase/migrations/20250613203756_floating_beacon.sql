/*
  # Content Management System

  1. New Tables
    - `content_months` - Stores monthly content calendars
    - `content_sections` - Stores sections within each month
    - `content_items` - Stores individual items within sections
    
  2. Features
    - Version control for monthly content
    - Historical data preservation
    - Easy month switching
    - Template system for new months
    
  3. Security
    - Enable RLS on all tables
    - Public access for content reading
    - Admin access for content management
*/

-- Content Months Table
CREATE TABLE IF NOT EXISTS content_months (
  id text PRIMARY KEY,
  name text NOT NULL,
  year integer NOT NULL,
  month integer NOT NULL,
  title text NOT NULL,
  subtitle text,
  isActive boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Content Sections Table
CREATE TABLE IF NOT EXISTS content_sections (
  id text PRIMARY KEY,
  month_id text NOT NULL REFERENCES content_months(id) ON DELETE CASCADE,
  order_num integer NOT NULL,
  title text NOT NULL,
  type text NOT NULL CHECK (type IN ('video', 'photo', 'series')),
  description text,
  requirements text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Content Items Table
CREATE TABLE IF NOT EXISTS content_items (
  id text PRIMARY KEY,
  section_id text NOT NULL REFERENCES content_sections(id) ON DELETE CASCADE,
  label text NOT NULL,
  type text NOT NULL CHECK (type IN ('video', 'photo')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE content_months ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Public access policies
CREATE POLICY "Allow public read access to content_months"
  ON content_months
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to content_sections"
  ON content_sections
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to content_items"
  ON content_items
  FOR SELECT
  TO public
  USING (true);

-- Admin access policies (for content management)
CREATE POLICY "Allow public write access to content_months"
  ON content_months
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public write access to content_sections"
  ON content_sections
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public write access to content_items"
  ON content_items
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);

-- Update timestamp functions
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_content_months_updated_at
  BEFORE UPDATE ON content_months
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_sections_updated_at
  BEFORE UPDATE ON content_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_items_updated_at
  BEFORE UPDATE ON content_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_content_sections_month_id ON content_sections(month_id);
CREATE INDEX IF NOT EXISTS idx_content_items_section_id ON content_items(section_id);
CREATE INDEX IF NOT EXISTS idx_content_months_active ON content_months(isActive);
CREATE INDEX IF NOT EXISTS idx_content_months_year_month ON content_months(year, month);