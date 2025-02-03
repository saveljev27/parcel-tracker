'use server';

import { findAllShipments } from '../actions';

export default async function Tracker() {
  const shipments = await findAllShipments();

  return (
    <div className="grow w-full h-full min-h-[60vh]">
      {shipments?.map((shipment) => (
        <div key={shipment.id}>Shipment id: {shipment.id}</div>
      ))}
    </div>
  );
}
