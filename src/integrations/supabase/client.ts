// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tuabfpjgyfmdhuplrghu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1YWJmcGpneWZtZGh1cGxyZ2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNDYzMDgsImV4cCI6MjA1MTkyMjMwOH0.Oj5LAOCvCNkZmA5IpqGlMeKKw3o9IMhny65_q7EMzTk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);