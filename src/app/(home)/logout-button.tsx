'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const { success } = await fetch('/api/auth/sign-out', { method: 'POST' }).then((res) => res.json());

    console.log(`success: `, success);
    if (success) router.push('/auth/login');
  };

  return <button onClick={logout}>Logout</button>;
}
