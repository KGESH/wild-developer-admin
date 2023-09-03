import SignupForm from '@/app/auth/sign-up/signup-form';

export const dynamic = 'force-dynamic';
export default async function SignUpPage() {
  return (
    <section>
      <h1>sign up page</h1>
      <SignupForm />
    </section>
  );
}
