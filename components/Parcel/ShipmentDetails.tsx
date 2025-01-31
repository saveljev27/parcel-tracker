'use client';

import { useState } from 'react';
import { carrierOptions, deliveryOptions } from '@/constants/radio';
import { Radio } from '../UI';
import ShipmentSize from './ShipmentSize';

interface ShipmentDetailsProps {
  selectedCountry: (country: string) => void;
  selectedAddress?: (address: string) => void;
  mapActive: (boolean: boolean) => void;
  address: string;
}

export function ShipmentDetails({
  selectedCountry,
  selectedAddress,
  mapActive,
  address,
}: ShipmentDetailsProps) {
  const [selectedDelivery, setSelectedDelivery] = useState<string>('baltics');
  const [selectedCarrier, setSelectedCarrier] = useState<string>('postoffice');
  const [selectedShipment, setSelectedShipment] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const handleDeliveryOrCarrier = ({
    value,
    name,
  }: {
    value: string;
    name: string;
  }) => {
    mapActive(false);
    name === 'delivery' && setSelectedDelivery(value);
    name === 'carrier' && setSelectedCarrier(value);
  };

  const handleShimpent = ({
    label,
    price,
  }: {
    label: string;
    price: number;
  }) => {
    setSelectedShipment(label);
    setPrice(price);
  };

  const handleMapOpen = () => {
    if (selectedDelivery === 'baltics' && selectedCarrier === 'postoffice')
      mapActive(true);
  };

  return (
    <section className="px-4 mt-6">
      <div className="mt-5 mb-5">
        <Radio
          options={deliveryOptions}
          selectedOption={selectedDelivery}
          onSelect={handleDeliveryOrCarrier}
        />
      </div>
      <h1 className="text-lg mt-3 mb-3">How will you send your parcel?</h1>
      <Radio
        options={carrierOptions}
        selectedOption={selectedCarrier}
        onSelect={handleDeliveryOrCarrier}
      />
      <div className="mt-5 max-w-[450px] ">
        {selectedCarrier === 'courier' && (
          <>
            <h1 className="text-lg mt-3 mb-3">
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
          <h1 className="text-lg mt-3 mb-3">
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
                <select
                  id="balticscountries"
                  name="balticscountries"
                  onChange={(e) => {
                    selectedCountry(e.target.value);
                  }}
                >
                  <option value="LV" defaultValue={'LV'}>
                    Latvia
                  </option>
                  <option value="LT">Lithuania</option>
                  <option value="EE">Estonia</option>
                </select>
              </div>
            )}
            <input
              placeholder="Select Post Office On Map"
              className={`border rounded-md p-4 w-[450px] shadow-lg ${
                address ? 'border-primary' : ''
              }`}
              type="text"
              value={address || ''}
              onClick={handleMapOpen}
              onChange={(e) =>
                selectedAddress && selectedAddress(e.target.value)
              }
            />
          </div>
        </div>
        {address && (
          <div>
            <h1 className="text-lg mt-4 mb-3">What size is your shipment?</h1>
            <ShipmentSize
              onSelect={handleShimpent}
              selectedShipment={selectedShipment}
            />
          </div>
        )}
      </div>
    </section>
  );
}
