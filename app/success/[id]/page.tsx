import { findShipmentById } from '@/app/actions';

export default async function ShipmentSuccessRegistration({ params }: any) {
  const { id } = await params;
  const shipment = await findShipmentById(id);

  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <div className="flex flex-col gap-4">
        Your shipment id: {shipment?.id} was successfully created
        <p>Sender address: {shipment?.pickupAddress}</p>
        <p>Receiver address: {shipment?.sendAddress}</p>
      </div>
    </div>
  );
}
