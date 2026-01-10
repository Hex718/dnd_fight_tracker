import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export function isConfigured(){
  return !!(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.startsWith("http"));
}

export function getSupabase(){
  if(!isConfigured()) return null;
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
