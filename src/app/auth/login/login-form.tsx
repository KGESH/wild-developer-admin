import Link from 'next/link';
import LoginButton from '@/app/auth/login/login-button';
import { signIn } from '@/libs/services/auth/sign-in.service';
import { redirect } from 'next/navigation';

async function handleLogin(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const response = await signIn({ email, password });

  // Todo: user feedback
  if (response.error) {
    console.log(`Login fail: `, response.error?.status, response.error?.message);
    return;
  }

  if (response.data.user) redirect('/');
}

export default function LoginForm() {
  return (
    <>
      <form action={handleLogin}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <LoginButton />
      </form>
      <Link href="/auth/sign-up">Create account</Link>
    </>
  );
}
