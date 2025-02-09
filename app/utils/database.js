import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  "https://mlcsiqrelmcdmomytait.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sY3NpcXJlbG1jZG1vbXl0YWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5ODE5MTUsImV4cCI6MjA1NDU1NzkxNX0.uz_heNDoqbF3TS7FScbsOrxscFwybrgGNPTQ7O0BmxQ"
)

export default supabase
