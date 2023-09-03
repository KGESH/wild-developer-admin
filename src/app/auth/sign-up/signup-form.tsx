import { signUp } from '@/libs/services/auth/sign-up.service';
import { redirect } from 'next/navigation';
import SignUpButton from '@/app/auth/sign-up/signup-button';

async function onSubmit(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  await signUp({ email, password });

  // Todo: redirect to email verification page
  redirect('/auth/login');
}

export default function SignupForm() {
  return (
    <form action={onSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <SignUpButton />
    </form>
  );
}
