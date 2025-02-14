'use server';

import Image from 'next/image';
import Link from 'next/link';
import { UserRound } from 'lucide-react';
import { auth } from '@/auth';
import { SignInButton, SignOut } from './Auth';

export async function Header() {
  const session = await auth();

  return (
    <header className="mb-8">
      <div className="flex justify-between border-b-2 p-2 items-center justify-items-center">
        <div>English</div>

        {!session ? (
          <SignInButton />
        ) : (
          <div className="flex gap-3">
            <Link href="/profile">
              <button className="bg-primary py-2 px-4 rounded-xl text-hover text-sm flex gap-2">
                <UserRound size={20} />
                <span>My Profile</span>
              </button>
            </Link>
            <SignOut />
          </div>
        )}
      </div>
      <nav className="flex justify-between p-2 items-center">
        <Link href="/">
          <Image src="/img/logo.png" alt="logo" width={80} height={80} />
        </Link>
        <div>
          <ul className="flex gap-3">
            <li className="text-hover">Home</li>
            <li className="text-hover">About</li>
            <li className="text-hover">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
