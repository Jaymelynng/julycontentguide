import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  storage: {
    // Disable automatic image transformations to preserve quality
    transform: {
      quality: 100,
      format: 'origin'
    }
  }
});

export interface UploadResult {
  success: boolean;
  path?: string;
  error?: string;
}

export async function uploadFile(
  file: File,
  gymId: string,
  contentType: string,
  fileName: string
): Promise<UploadResult> {
  try {
    // Create the file path: gym-id/content-type/filename
    const filePath = `${gymId}/${contentType}/${fileName}`;
    
    // Upload to Supabase Storage with maximum quality preservation
    const { data, error } = await supabase.storage
      .from('content-uploads')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true, // Allow overwriting files with same name
        duplex: 'half' // For better upload performance
      });

    if (error) {
      console.error('Upload error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, path: data.path };
  } catch (error) {
    console.error('Upload error:', error);
    return { success: false, error: 'Upload failed' };
  }
}