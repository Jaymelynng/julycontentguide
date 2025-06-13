/*
  # Fix column name mismatches between database and application

  This migration fixes the column name inconsistencies:
  1. Rename isactive to isActive in content_months table
  2. Rename order_num to order in content_sections table
  
  This ensures the database schema matches exactly what the application expects.
*/

-- Fix content_months table - rename isactive to isActive
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'content_months' AND column_name = 'isactive'
    ) THEN
        ALTER TABLE content_months RENAME COLUMN isactive TO "isActive";
    END IF;
END $$;

-- Fix content_sections table - rename order_num to order
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'content_sections' AND column_name = 'order_num'
    ) THEN
        ALTER TABLE content_sections RENAME COLUMN order_num TO "order";
    END IF;
END $$;

-- Update the index to use the new column name
DROP INDEX IF EXISTS idx_content_months_active;
CREATE INDEX IF NOT EXISTS idx_content_months_active ON content_months("isActive");