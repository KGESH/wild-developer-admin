import { User } from '@/libs/services/auth/auth.types';
import { createSupabaseConnection } from '@/libs/supabase/supabase';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/libs/supabase/supabase.types';
import { cookies } from 'next/headers';

type SignUpProps = User;
export async function signUp({ email, password }: SignUpProps) {
  const supabase = createSupabaseConnection();

  return await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `/auth/callback`, // Todo: add base url
    },
  });
}
