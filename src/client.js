import { createClient } from "@supabase/supabase-js";
const URL = "https://upqxlwlingfpwbayydqp.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcXhsd2xpbmdmcHdiYXl5ZHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzU5OTksImV4cCI6MjAwODY1MTk5OX0.gu_gUkNWorzW__R_RkUhZYYH3bib3cUqXE4HBRB_ci0";

export const supabase = createClient(URL, API_KEY);
