import { Database } from '@/libs/supabase/supabase.types';
import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';

export function createSupabaseConnection() {
  return createServerActionClient<Database>(
    { cookies },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    },
  );
}
