import { createSupabaseConnection } from '@/libs/supabase/supabase';

export async function signOut() {
  const supabase = createSupabaseConnection();
  return await supabase.auth.signOut();
}
