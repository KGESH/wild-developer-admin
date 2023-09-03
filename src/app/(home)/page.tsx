import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/libs/supabase/supabase.types';
import { redirect } from 'next/navigation';
import LogoutButton from '@/app/(home)/logout-button';
import GeoLocationForm from '@/app/(home)/geo-location-form';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Todo: extract
  const supabase = createServerComponentClient<Database>({ cookies });
  const session = await supabase.auth.getUser();
  const user = session.data.user;

  if (!user) redirect('/auth/login');

  return (
    <main className="flex flex-col justify-items-center text-center">
      <h1>Admin page</h1>
      <p>{`Change wild developer's location`}</p>
      <GeoLocationForm />
      <LogoutButton />
    </main>
  );
}
