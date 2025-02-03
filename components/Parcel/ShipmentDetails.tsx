'use client';

import { useEffect, useState } from 'react';
import { carrierOptions, deliveryOptions } from '@/constants/radio';
import { ButtonWithoutLink, Radio } from '../UI';
import { ShipmentSize } from './ShipmentSize';
import { AddressInput } from './AddressInput';
import { validation } from '@/lib/validation';
import { ShipmentDetailsProps } from '@/types';

export function ShipmentDetails({
  selectedCountry,
  selectedAddress,
  selectedShipment,
  mapActive,
  isCourier,
  isCompleted,
  isActive,
  address,
  shipment,
}: ShipmentDetailsProps) {
  const [deliveryDetails, setDeliveryDetails] = useState({
    delivery: 'baltics',
    carrier: 'postoffice',
    pickupAddress: '',
    balticCountry: 'LV',
    sendAddress: '',
    shipment: '',
  });
  const { delivery, carrier, pickupAddress, balticCountry, sendAddress } =
    deliveryDetails;
  const [error, setError] = useState('');

  useEffect(() => {
    setDeliveryDetails({ ...deliveryDetails, sendAddress: address });
  }, [address]);

  const handleDeliveryOrCarrier = ({
    value,
    name,
  }: {
    value: string;
    name: string;
  }) => {
    mapActive(false);
    name === 'delivery' &&
      setDeliveryDetails({ ...deliveryDetails, delivery: value });
    name === 'carrier' &&
      setDeliveryDetails({ ...deliveryDetails, carrier: value });
    value === 'courier' && isCourier(true);
  };

  const handleData = (value: string) => {
    const validationMessage = validation(value, deliveryDetails);

    if (validationMessage) {
      setError(validationMessage);
      return;
    }
    isCompleted(true);
    isActive(true);
  };

  const handleShimpent = ({
    label,
    price,
  }: {
    label: string;
    price: number;
  }) => {
    selectedShipment({ label, price });
    setDeliveryDetails({ ...deliveryDetails, shipment: label });
  };

  const handleMapOpen = () => {
    if (
      delivery === 'baltics' &&
      (carrier === 'postoffice' || carrier === 'courier')
    )
      mapActive(true);
  };

  return (
    <div className="px-4 mt-6">
      <div className="mt-5 mb-5">
        <Radio
          options={deliveryOptions}
          selectedOption={delivery}
          onSelect={handleDeliveryOrCarrier}
        />
      </div>
      <h1 className="text-lg mt-3 mb-3">How will you send your parcel?</h1>
      <Radio
        options={carrierOptions}
        selectedOption={carrier}
        onSelect={handleDeliveryOrCarrier}
      />
      <div className="mt-5 max-w-[450px] ">
        {carrier === 'courier' && (
          <>
            <h1 className="text-lg mt-3 mb-3">
              Where can the courier pick up your shipment?
            </h1>
            <AddressInput
              inputname="pickupAddress"
              placeholder="Enter your pickup address"
              setPlace={(place) =>
                setDeliveryDetails({ ...deliveryDetails, pickupAddress: place })
              }
            />
          </>
        )}
        <div>
          <h1 className="text-lg mt-3 mb-3">
            Where are you sending your parcel?
          </h1>
          <div>
            {delivery === 'international' && (
              <AddressInput
                inputname="sendAddress"
                placeholder="Enter your shipment address"
                setPlace={(place) =>
                  setDeliveryDetails({ ...deliveryDetails, sendAddress: place })
                }
              />
            )}
            {delivery === 'baltics' && (
              <div className="flex gap-2">
                <div className="flex flex-col justify-center border max-w-[30%] p-1 rounded-lg shadow-lg transition cursor-pointer ">
                  <label
                    className="text-sm ml-1 text-gray-500"
                    htmlFor="balticCountry"
                  >
                    Country
                  </label>
                  <select
                    id="balticCountry"
                    name="balticCountry"
                    onChange={(e) => {
                      selectedCountry(e.target.value);
                      setDeliveryDetails({
                        ...deliveryDetails,
                        balticCountry: e.target.value,
                      });
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
        {sendAddress && (
          <div>
            <h1 className="text-lg mt-4 mb-3">What size is your shipment?</h1>
            <ShipmentSize
              onSelect={handleShimpent}
              selectedShipment={shipment}
            />
          </div>
        )}
      </div>
      {error && <p className="text-red-600 px-4 mt-2">{error}</p>}
      <ButtonWithoutLink
        color="primary mt-4 mb-4"
        onClick={() => handleData('shipmentDetails')}
      >
        Continue
      </ButtonWithoutLink>
    </div>
  );
}
