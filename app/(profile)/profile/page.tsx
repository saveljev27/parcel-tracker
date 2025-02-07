import { auth } from '@/auth';
import { Shipments } from '@/components/Profile';
import { Button } from '@/components/UI';
import { PrismaClient } from '@prisma/client';
import { Send } from 'lucide-react';
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

  const shipments = await prisma.shipment.findMany({
    where: { userId: user?.id },
  });

  console.log(shipments);

  return (
    <div className="min-h-[60vh] gap-10 px-8">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2>Welcome, {user?.name}</h2>
          <Button color="primary" link="/parcel">
            <span className="flex items-center">
              <Send size={16} className="mr-2" /> Start sending
            </span>
          </Button>
        </div>
        <div className="mt-10">
          <h4>Your shipments</h4>
          {!shipments ? (
            <p>No shipments found</p>
          ) : (
            shipments.map((shipment) => (
              <Shipments key={shipment.id} shipments={shipment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
