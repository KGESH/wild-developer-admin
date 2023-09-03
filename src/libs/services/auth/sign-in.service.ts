import { User } from '@/libs/services/auth/auth.types';
import { createSupabaseConnection } from '@/libs/supabase/supabase';

type SignInProps = User;

export async function signIn({ email, password }: SignInProps) {
  const supabase = createSupabaseConnection();
  return await supabase.auth.signInWithPassword({ email, password });
}
