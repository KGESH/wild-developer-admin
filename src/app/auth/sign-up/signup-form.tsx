'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export const dynamic = 'force-dynamic';

export default function SignupForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log(`Signup form data: `, { email, password });

    const response = await fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());

    console.log(`Signup client response: `, response);

    if (response) {
      setPending(false);
      router.push('/auth/login');
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit" disabled={pending}>
        {pending ? 'Loading...' : 'Sign up'}
      </button>
    </form>
  );
}
