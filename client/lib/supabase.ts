// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nivrmhkdgtmmbtswyvey.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MTA1MjEsImV4cCI6MjA2MjA4NjUyMX0.Y0lx7FA97zV3GkKAmu_5aV8Bz98AYyqvHdHEau6Tvfc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

