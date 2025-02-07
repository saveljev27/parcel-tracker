import { ShipmentsProps } from '@/types';

export function Shipments({ shipments }: ShipmentsProps) {
  return (
    <div className="border p-2 flex flex-col gap-1 mt-3">
      <p className="font-semibold">Shipment id: {shipments.id}</p>
      <p>
        Carrier: <span className="capitalize">{shipments.carrier}</span>
      </p>
      <p>Receiver address: {shipments.sendAddress}</p>
      <p>Send data: {shipments.createdAt.toLocaleString()}</p>
    </div>
  );
}
