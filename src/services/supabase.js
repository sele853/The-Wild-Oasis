
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ijmjrjabmmxxaoxnitbj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbWpyamFibW14eGFveG5pdGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyOTg0NDMsImV4cCI6MjA1NTg3NDQ0M30.nb_8GptuFusBm-9D_VFapTRSm4PpmaOsdzT33pYIOSY'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;