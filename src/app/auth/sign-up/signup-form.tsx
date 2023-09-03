'use client';

import { useRouter } from 'next/navigation';
import SignUpButton from '@/app/auth/sign-up/signup-button';
import { FormEvent } from 'react';

export const dynamic = 'force-dynamic';

export default function SignupForm() {
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
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

    if (response) router.push('/auth/login');
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <SignUpButton />
    </form>
  );
}
