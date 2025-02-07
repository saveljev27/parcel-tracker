'use server';

import { LoginForm } from '@/components/Auth/LoginForm';
import { GoogleSignIn } from '@/components/Auth';
import Link from 'next/link';

export default async function LoginPage() {
  return (
    <div className="min-h-[60vh]">
      <div className="flex flex-col justify-center items-center">
        <h1>Log In To Your Profile</h1>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center mt-10 ">
            <GoogleSignIn />
          </div>
          <div className="mt-2 flex flex-col items-center gap-3">
            <span className="text-center text-sm text-gray-500">
              Or with email and password
            </span>
            <LoginForm />
          </div>
        </div>
        <p className="mt-10">
          Don't have an account?
          <Link href={'/register'}>
            <span className="text-secondary ml-1">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
