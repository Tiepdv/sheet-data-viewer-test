// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gtuxyhrfsoqezhjxakwn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dXh5aHJmc29xZXpoanhha3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzOTQ1MDQsImV4cCI6MjA2MDk3MDUwNH0.ux6qztY5pYl6X8fYNM4s2yd4Cp9hZHnnfNsx9BBqRRk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);