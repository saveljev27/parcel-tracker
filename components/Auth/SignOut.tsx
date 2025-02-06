import { signOut } from '@/auth';
import { DoorClosed } from 'lucide-react';

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type="submit"
        className="bg-primary py-2 px-4 rounded-xl text-hover text-sm flex gap-2"
      >
        <DoorClosed size={20} />
        <span>Sign Out</span>
      </button>
    </form>
  );
}
