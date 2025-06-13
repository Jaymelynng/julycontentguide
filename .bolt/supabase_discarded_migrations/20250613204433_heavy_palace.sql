/*
  # Create content management tables

  1. New Tables
    - `content_months`
      - `id` (text, primary key)
      - `name` (text, not null)
      - `year` (integer, not null)
      - `month` (integer, not null)
      - `title` (text, not null)
      - `subtitle` (text, nullable)
      - `isactive` (boolean, default false)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

    - `content_sections`
      - `id` (text, primary key)
      - `month_id` (text, foreign key to content_months)
      - `order_num` (integer, not null)
      - `title` (text, not null)
      - `type` (text, not null, check constraint for valid types)
      - `description` (text, nullable)
      - `requirements` (text array, nullable)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

    - `content_items`
      - `id` (text, primary key)
      - `section_id` (text, foreign key to content_sections)
      - `label` (text, not null)
      - `type` (text, not null, check constraint for valid types)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on all tables
    - Add policies for public access (read and write)

  3. Indexes
    - Add performance indexes for common queries
    - Add unique constraints where needed

  4. Triggers
    - Add updated_at triggers for automatic timestamp updates
*/

-- Create update_updated_at_column function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create content_months table
CREATE TABLE IF NOT EXISTS content_months (
    id text PRIMARY KEY,
    name text NOT NULL,
    year integer NOT NULL,
    month integer NOT NULL,
    title text NOT NULL,
    subtitle text,
    isactive boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Create content_sections table
CREATE TABLE IF NOT EXISTS content_sections (
    id text PRIMARY KEY,
    month_id text NOT NULL,
    order_num integer NOT NULL,
    title text NOT NULL,
    type text NOT NULL,
    description text,
    requirements text[],
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    CONSTRAINT content_sections_type_check CHECK (type = ANY (ARRAY['video'::text, 'photo'::text, 'series'::text]))
);

-- Create content_items table
CREATE TABLE IF NOT EXISTS content_items (
    id text PRIMARY KEY,
    section_id text NOT NULL,
    label text NOT NULL,
    type text NOT NULL,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    CONSTRAINT content_items_type_check CHECK (type = ANY (ARRAY['video'::text, 'photo'::text]))
);

-- Add foreign key constraints
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'content_sections_month_id_fkey'
    ) THEN
        ALTER TABLE content_sections 
        ADD CONSTRAINT content_sections_month_id_fkey 
        FOREIGN KEY (month_id) REFERENCES content_months(id) ON DELETE CASCADE;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'content_items_section_id_fkey'
    ) THEN
        ALTER TABLE content_items 
        ADD CONSTRAINT content_items_section_id_fkey 
        FOREIGN KEY (section_id) REFERENCES content_sections(id) ON DELETE CASCADE;
    END IF;
END $$;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_content_months_active ON content_months(isactive);
CREATE INDEX IF NOT EXISTS idx_content_months_year_month ON content_months(year, month);
CREATE INDEX IF NOT EXISTS idx_content_sections_month_id ON content_sections(month_id);
CREATE INDEX IF NOT EXISTS idx_content_items_section_id ON content_items(section_id);

-- Enable Row Level Security
ALTER TABLE content_months ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for content_months
CREATE POLICY IF NOT EXISTS "Allow public read access to content_months"
    ON content_months FOR SELECT
    TO public
    USING (true);

CREATE POLICY IF NOT EXISTS "Allow public write access to content_months"
    ON content_months FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- Create RLS policies for content_sections
CREATE POLICY IF NOT EXISTS "Allow public read access to content_sections"
    ON content_sections FOR SELECT
    TO public
    USING (true);

CREATE POLICY IF NOT EXISTS "Allow public write access to content_sections"
    ON content_sections FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- Create RLS policies for content_items
CREATE POLICY IF NOT EXISTS "Allow public read access to content_items"
    ON content_items FOR SELECT
    TO public
    USING (true);

CREATE POLICY IF NOT EXISTS "Allow public write access to content_items"
    ON content_items FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- Create triggers for updated_at columns
CREATE TRIGGER IF NOT EXISTS update_content_months_updated_at
    BEFORE UPDATE ON content_months
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER IF NOT EXISTS update_content_sections_updated_at
    BEFORE UPDATE ON content_sections
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER IF NOT EXISTS update_content_items_updated_at
    BEFORE UPDATE ON content_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();