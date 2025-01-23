'use client';

import { Radio } from '@/components/UI/Radio';
import { carrierOptions, deliveryOptions } from '@/constants/radio';
import { useState } from 'react';

export default function Parcel() {
  const [selectedDelivery, setSelectedDelivery] = useState<string>();
  const [selectedCarrier, setSelectedCarrier] = useState<string>();

  const handleSelectedValue = ({
    value,
    name,
  }: {
    value: string;
    name: string;
  }) => {
    if (name === 'delivery') setSelectedDelivery(value);
    if (name === 'carrier') setSelectedCarrier(value);
  };

  return (
    <div className="flex">
      <div className="grow">
        <h1 className="text-4xl font-bold">Register shipment</h1>
        <section className="px-4 mt-5">
          <Radio options={deliveryOptions} onSelect={handleSelectedValue} />
        </section>

        <section className="px-4 mt-6">
          <h1>
            <span className="font-bold bg-secondary rounded-full px-2 mr-2 text-sm text-white">
              1
            </span>
            Shipment details
          </h1>
          <h1 className="font-semobild text-lg mt-2 mb-5">
            How will you send your parcel?
          </h1>
          <Radio options={carrierOptions} onSelect={handleSelectedValue} />
        </section>
      </div>
      <div className="grow">
        <div className="bg-primary flex flex-col p-4">
          {selectedDelivery && <span>Delivery: {selectedDelivery}</span>}
          {selectedCarrier && <span>Carrier: {selectedCarrier}</span>}
        </div>
      </div>
    </div>
  );
}
