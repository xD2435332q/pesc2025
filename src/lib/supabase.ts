import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://twsmedlgrrxdmknwzwjt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3c21lZGxncnJ4ZG1rbnd6d2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NDc2MTksImV4cCI6MjA1NjAyMzYxOX0.LyiWv-oAWFT-_VM2gofWliD0FZnFQmAkzgU5DgYs4pg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
