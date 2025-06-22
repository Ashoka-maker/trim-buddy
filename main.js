
const supabaseUrl = 'https://yoyyoboyogzywgrgcyvh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1amlhcHJ2ZmJ0d3h6enhhZ3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMjIyMjgsImV4cCI6MjA2NTc5ODIyOH0.HVAUZDHZeLQ9UxrM-IyrWb8jkFsfoeb6or-JpKFWY-E';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

console.log('Supabase connected');
