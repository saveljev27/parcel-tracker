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

  const shipments = await prisma.shipment.findMany({
    where: { userId: user?.id },
  });

  console.log(shipments);

  return (
    <div className="min-h-[60vh] flex px-8">
      <div className="flex flex-col">
        <div className="flex">
          <h2>Welcome, {user?.name}</h2>
        </div>
        <h3>Your shipments:</h3>
        {shipments?.map((shipment) => (
          <div key={shipment.id} className="border p-4 flex flex-col gap-3">
            <h3>{shipment.sendAddress}</h3>
            <p>{shipment.senderName}</p>
            <p>{shipment.senderPhone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
