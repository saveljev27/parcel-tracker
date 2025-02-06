import Link from 'next/link';
import Image from 'next/image';
import { signIn } from '@/auth';
import { DoorOpen } from 'lucide-react';

export async function GoogleSignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <button
        type="submit"
        className="hover:opacity-60 transition border rounded-lg p-2 justify-center"
      >
        <div className="flex gap-2 items-center ">
          <Image src="/img/google.svg" alt="Google" width={48} height={48} />
          <span>with Google</span>
        </div>
      </button>
    </form>
  );
}

export function SignInButton() {
  return (
    <Link href="/login">
      <button
        type="submit"
        className="bg-primary py-2 px-4 rounded-xl text-hover text-sm flex gap-2"
      >
        <DoorOpen size={20} />
        <span>Sign In</span>
      </button>
    </Link>
  );
}
