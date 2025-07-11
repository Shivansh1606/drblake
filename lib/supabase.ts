import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lrcxlcssxwqgxrhbqnad.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyY3hsY3NzeHdxZ3hyaGJxbmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MTc4MTYsImV4cCI6MjA2NzM5MzgxNn0.5khR0rJpt3Gm4rZBmMGkI3N7QAAKxjsRw_i0BrIZSqs';

export const supabase = createClient(supabaseUrl, supabaseKey)