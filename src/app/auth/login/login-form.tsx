'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, FormEventHandler, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const user = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());

    console.log(`Client login response: `, user);

    if (user) {
      router.refresh();
      router.push('/');
      setPending(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit" disabled={pending}>
          {pending ? 'Loading...' : 'Login'}
        </button>
      </form>
      <Link href="/auth/sign-up">Create account</Link>
    </>
  );
}
