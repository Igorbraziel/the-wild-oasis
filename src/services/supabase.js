import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://itmirtvfihjrabvqrhmt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0bWlydHZmaWhqcmFidnFyaG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NDEwNDcsImV4cCI6MjA2NDExNzA0N30.vYJ_xI1Ezgv4Rv4C8g9SBVndDypO5Y9eBzc7bsIyAwA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
