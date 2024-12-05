import { createClient } from '@supabase/supabase-js'
const URL = 'https://kfsenajqcrkeakkoetmg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmc2VuYWpxY3JrZWFra29ldG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNDgxOTAsImV4cCI6MjA0NTgyNDE5MH0.CSncX9mvsWbOSoRPKiakowceXESEuIYpRBRXpZ70O7Y';
export const supabase = createClient(URL, API_KEY);
