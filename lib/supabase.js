import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tuefcqsaijbypgrtdsgv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1ZWZjcXNhaWpieXBncnRkc2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5Mjk0NTQsImV4cCI6MjA3MjUwNTQ1NH0.vIKDKFLyPCpxy4SmvUBTig7A_CMJuQx9JOX02TJaobs"; // copy from Supabase project settings

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
