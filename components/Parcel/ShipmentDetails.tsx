'use client';

import { useState } from 'react';
import { carrierOptions, deliveryOptions } from '@/constants/radio';
import { Radio } from '../UI';
import { ShipmentSize } from './ShipmentSize';
import { AddressInput } from './AddressInput';

interface ShipmentDetailsProps {
  selectedCountry: (country: string) => void;
  selectedAddress?: (address: string) => void;
  mapActive: (boolean: boolean) => void;
  setPrice: (price: number) => void;
  isCourier: (boolean: boolean) => void;
  address: string;
}

export function ShipmentDetails({
  selectedCountry,
  selectedAddress,
  mapActive,
  setPrice,
  isCourier,
  address,
}: ShipmentDetailsProps) {
  const [selectedDelivery, setSelectedDelivery] = useState<string>('baltics');
  const [selectedCarrier, setSelectedCarrier] = useState<string>('postoffice');
  const [selectedShipment, setSelectedShipment] = useState<string>('');

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
    value === 'courier' && isCourier(true);
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
    if (
      selectedDelivery === 'baltics' &&
      (selectedCarrier === 'postoffice' || selectedCarrier === 'courier')
    )
      mapActive(true);
  };

  return (
    <div className="px-4 mt-6">
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
            <AddressInput
              inputname="pickupAddress"
              placeholder="Enter your pickup address"
            />
          </>
        )}
        <div>
          <h1 className="text-lg mt-3 mb-3">
            Where are you sending your parcel?
          </h1>
          <div>
            {selectedDelivery === 'international' && (
              <AddressInput
                inputname="sendAddress"
                placeholder="Enter your shipment address"
              />
            )}
            {selectedDelivery === 'baltics' && (
              <div className="flex gap-2">
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
                <input
                  placeholder="Select Destination Postoffice On Map"
                  className={`${address ? 'border-primary' : ''}`}
                  type="text"
                  name="sendAddress"
                  value={address || ''}
                  onClick={handleMapOpen}
                  autoComplete="off"
                  onChange={(e) =>
                    selectedAddress && selectedAddress(e.target.value)
                  }
                  required
                  readOnly
                />
              </div>
            )}
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
    </div>
  );
}
