import { NextRequest, NextResponse } from 'next/server';
import { signOut } from '@/libs/services/auth/sign-out.service';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/libs/supabase/supabase.types';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

// Todo: extract to client component
export async function POST(request: NextRequest) {
  console.log(`Call signOut()`);
  const supabase = createRouteHandlerClient<Database>(
    { cookies },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    },
  );

  await supabase.auth.signOut();

  return NextResponse.json({ success: true });
}
