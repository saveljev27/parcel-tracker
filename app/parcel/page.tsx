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
    name === 'delivery' && setSelectedDelivery(value);
    name === 'carrier' && setSelectedCarrier(value);
  };

  return (
    <div className="flex min-h-[60vh]">
      <div className="grow">
        <h1 className="text-4xl font-bold">Register shipment</h1>
        <section className="px-4 mt-5">
          <Radio
            options={deliveryOptions}
            selectedOption={selectedDelivery}
            onSelect={handleSelectedValue}
          />
        </section>

        <section className="px-4 mt-6">
          <h1>
            <span className="font-bold bg-secondary rounded-full px-2 mr-2 text-sm text-white">
              1
            </span>
            Shipment details
          </h1>
          <h1 className="font-semobild text-lg mt-3 mb-3">
            How will you send your parcel?
          </h1>
          <Radio
            options={carrierOptions}
            selectedOption={selectedCarrier}
            onSelect={handleSelectedValue}
          />
          <div className="mt-5 max-w-[400px] ">
            {selectedCarrier === 'courier' && (
              <>
                <h1 className="font-semobild text-lg mt-3 mb-3">
                  Where can the courier pick up your shipment?
                </h1>
                <input
                  placeholder="Search destination"
                  className="border rounded-md p-4 w-[400px] shadow-lg"
                  type="text"
                />
              </>
            )}
            <div>
              <h1 className="font-semobild text-lg mt-3 mb-3">
                Where are you sending your parcel?
              </h1>
              <div className="flex gap-2">
                {selectedDelivery === 'baltics' && (
                  <div className="flex flex-col justify-center border max-w-[30%] p-1 rounded-lg shadow-lg transition cursor-pointer ">
                    <label
                      className="text-sm ml-1 text-gray-500"
                      htmlFor="balticscountries"
                    >
                      Country
                    </label>
                    <select id="balticscountries" name="balticscountries">
                      <option value="Latvia" defaultValue={'Latvia'}>
                        Latvia
                      </option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Estonia">Estonia</option>
                    </select>
                  </div>
                )}
                <input
                  placeholder="Search destination"
                  className="border rounded-md p-4 w-[400px] shadow-lg"
                  type="text"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="grow">
        <div className="bg-primary rounded-md flex flex-col p-4">
          {selectedDelivery && (
            <span className="text-xl ">Delivery: {selectedDelivery}</span>
          )}
          {selectedCarrier && (
            <span className="text-xl">Carrier: {selectedCarrier}</span>
          )}
        </div>
      </div>
    </div>
  );
}
