'use client';

import { GoogleMap } from '@/components';
import ShipmentSize from '@/components/Parcel/ShipmentSize';
import { ButtonWithoutLink, Radio } from '@/components/UI';
import { carrierOptions, deliveryOptions } from '@/constants/radio';
import { useState } from 'react';

export default function Parcel() {
  const [selectedDelivery, setSelectedDelivery] = useState<string>('baltics');
  const [selectedCarrier, setSelectedCarrier] = useState<string>('postoffice');
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('LV');
  const [selectedShipment, setSelectedShipment] = useState<string>('');
  const [selectedInput, setSelectedInput] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [shipmentDetails, setShipmentDetails] = useState<boolean>(true);

  const handleDeliveryOrCarrier = ({
    value,
    name,
  }: {
    value: string;
    name: string;
  }) => {
    name === 'delivery' && setSelectedDelivery(value);
    name === 'carrier' && setSelectedCarrier(value);
  };

  const handleAddress = (address: string) => {
    setSelectedAddress(address);
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

  const totalPrice = selectedCarrier === 'courier' ? 10 : price;

  return (
    <div className="flex gap-5 min-h-[60vh]">
      <div className="max-w-[550px] w-[500px]">
        <h1 className="text-4xl font-bold">Register shipment</h1>
        <div className="flex mt-4 px-4 justify-between">
          <h1>
            <span
              className={`font-bold rounded-full px-2 mr-2 text-sm text-white ${
                shipmentDetails ? 'bg-secondary' : 'bg-green-900'
              }`}
            >
              1
            </span>
            Shipment details
          </h1>
          {!shipmentDetails && (
            <span
              className="hover:opacity-60 cursor-pointer"
              onClick={() => setShipmentDetails(true)}
            >
              Edit
            </span>
          )}
        </div>
        {shipmentDetails && (
          <>
            <section className="px-4 mt-6 mb-6">
              <div className="mt-5 mb-5">
                <Radio
                  options={deliveryOptions}
                  selectedOption={selectedDelivery}
                  onSelect={handleDeliveryOrCarrier}
                />
              </div>
              <h1 className="text-lg mt-3 mb-3">
                How will you send your parcel?
              </h1>
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
                            setSelectedCountry(e.target.value);
                            setSelectedAddress('');
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
                        selectedAddress ? 'border-primary' : ''
                      }`}
                      type="text"
                      value={selectedAddress || ''}
                      onChange={(e) => handleAddress(e.target.value)}
                      onClick={() => setSelectedInput(true)}
                    />
                  </div>
                </div>
                {selectedAddress && (
                  <div>
                    <h1 className="text-lg mt-4 mb-3">
                      What size is your shipment?
                    </h1>
                    <ShipmentSize
                      onSelect={handleShimpent}
                      selectedShipment={selectedShipment}
                    />
                  </div>
                )}
              </div>
              <ButtonWithoutLink
                color="primary mt-4"
                onClick={() => setShipmentDetails(false)}
              >
                Continue
              </ButtonWithoutLink>
            </section>
          </>
        )}
        <div className="border-b-2 my-2" />
        <h1 className="px-4">
          <span className="font-bold bg-secondary rounded-full px-2 mr-2 text-sm text-white">
            2
          </span>
          Contact details
        </h1>
        <section className="px-4"></section>
        <div className="border-b-2 my-2" />
        <h1 className="px-4">
          <span className="font-bold bg-secondary rounded-full px-2 mr-2 text-sm text-white">
            3
          </span>
          Overview and Payment
        </h1>
        <section className="px-4"></section>
      </div>
      <div className="grow">
        <div className="bg-primary rounded-t-lg p-4">
          <div className="flex justify-between">
            <span className="text-3xl">
              Price:
              <span className="capitalize ml-1">{totalPrice}€</span>
            </span>
          </div>
        </div>
        {selectedDelivery == 'baltics' &&
          selectedCarrier == 'postoffice' &&
          selectedInput && (
            <GoogleMap onSelect={handleAddress} country={selectedCountry} />
          )}
      </div>
    </div>
  );
}
