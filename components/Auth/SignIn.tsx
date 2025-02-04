import { signIn } from '@/auth';
import { DoorOpen } from 'lucide-react';

export default function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <button
        type="submit"
        className="bg-primary py-2 px-4 rounded-xl text-hover text-sm flex gap-2"
      >
        <DoorOpen size={20} />
        <span>Sign In</span>
      </button>
    </form>
  );
}
