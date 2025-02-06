import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const session = await auth();
  const prisma = new PrismaClient();
  if (!session) {
    redirect('/login');
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email || '' },
  });

  return (
    <div className="min-h-[60vh] flex justify-center">
      <h2>{user?.name} Profile</h2>
    </div>
  );
}
