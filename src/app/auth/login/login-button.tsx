'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Loading...' : 'Login'}
    </button>
  );
}
