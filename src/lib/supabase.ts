import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a dummy client if env vars are missing (for development/testing)
// This prevents the app from crashing, but Supabase features won't work
let supabase: SupabaseClient;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not configured. Database features will be disabled.');
  // Create a dummy client with placeholder values
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image_url: string;
  published: boolean;
  created_at: string;
};
