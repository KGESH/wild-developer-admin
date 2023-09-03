'use client';

import Link from 'next/link';
import LoginButton from '@/app/auth/login/login-button';
import { useRouter } from 'next/navigation';
import { FormEvent, FormEventHandler } from 'react';

export default function LoginForm() {
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <LoginButton />
      </form>
      <Link href="/auth/sign-up">Create account</Link>
    </>
  );
}
