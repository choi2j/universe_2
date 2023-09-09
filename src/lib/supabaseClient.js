import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://iyqbmtvvnpkepzonnoqh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cWJtdHZ2bnBrZXB6b25ub3FoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTgwOTY5NiwiZXhwIjoyMDA1Mzg1Njk2fQ.7tqgCTyEsPUIePitSFHVplMjeL_RPjow0WqNSf-Sg_8');