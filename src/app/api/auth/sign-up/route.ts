import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Database } from '@/libs/supabase/supabase.types';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function POST(request: NextRequest) {
  console.log(`Call signUp()`);
  const body = await request.json();
  const email = body.email as string;
  const password = body.password as string;

  const supabase = createRouteHandlerClient<Database>(
    { cookies },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    },
  );

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    // Todo: handler error
    return NextResponse.error();
  }

  return NextResponse.json(data);
}
