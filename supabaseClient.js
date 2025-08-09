const { createClient } = supabase;
const supabaseUrl = "https://bluumfpcmpqxvjfkxsoa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdXVtZnBjbXBxeHZqZmt4c29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NDg2NzcsImV4cCI6MjA3MDMyNDY3N30.gFDDpkZgV8H40909xGebbR6DLCrBA8er0i4n2hf68qk";

window.supabaseClient = createClient(supabaseUrl, supabaseKey)
