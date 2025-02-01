'use client';

import { GoogleMap } from '@/components';
import { ContactDetails } from '@/components/Parcel/ContactDetails';
import PaymentDetails from '@/components/Parcel/PaymentDetails';
import ProccessHeadings from '@/components/Parcel/ProccessHeadings';
import { ShipmentDetails } from '@/components/Parcel/ShipmentDetails';
import { ButtonWithoutLink } from '@/components/UI';
import { useState } from 'react';
import { createShipment } from '../actions';

export default function Parcel() {
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('LV');
  const [mapActive, setMapActive] = useState<boolean>(false);
  const [isCourier, setIsCourier] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const [shipmentDetails, setShipmentDetails] = useState<boolean>(true);
  const [contactDetails, setContactDetails] = useState<boolean>(false);
  const [paymentDetails, setPaymentDetails] = useState<boolean>(false);

  const handleAddress = (address: string) => {
    setSelectedAddress(address);
  };

  const handleShipmentFormStatus = (value: string) => {
    switch (value) {
      case 'shipmentDetails':
        setShipmentDetails(true);
        setContactDetails(false);
        setPaymentDetails(false);
        break;
      case 'contactDetails':
        setMapActive(false);
        setShipmentDetails(false);
        setContactDetails(true);
        setPaymentDetails(false);
        break;
      case 'paymentDetails':
        setMapActive(false);
        setShipmentDetails(false);
        setContactDetails(false);
        setPaymentDetails(true);
        break;
      default:
        'shipmentDetails';
    }
  };

  const handleSend = (FormData: FormData) => {
    createShipment(FormData);
  };

  const totalPrice = isCourier ? price + 10 : price;

  return (
    <form action={handleSend}>
      <div className="flex gap-5 min-h-[60vh]">
        <div className="max-w-[550px] w-[500px]">
          <h1 className="text-4xl font-bold">Register shipment</h1>

          <ProccessHeadings
            status={shipmentDetails}
            heading="Shipment details"
            handleClick={() => handleShipmentFormStatus('shipmentDetails')}
            number="1"
          />
          <div className={shipmentDetails ? '' : 'hidden'}>
            <ShipmentDetails
              selectedCountry={(country: string) => setSelectedCountry(country)}
              selectedAddress={(address: string) => setSelectedAddress(address)}
              mapActive={(boolean: boolean) => setMapActive(boolean)}
              setPrice={(price: number) => setPrice(price)}
              isCourier={(boolean: boolean) => setIsCourier(boolean)}
              address={selectedAddress}
            />
            <ButtonWithoutLink
              color="primary mt-4 mb-4"
              type="submit"
              onClick={() => {
                handleShipmentFormStatus('contactDetails');
              }}
            >
              Continue
            </ButtonWithoutLink>
          </div>

          <div className="border-b-2 my-2" />
          <ProccessHeadings
            status={contactDetails}
            heading="Contact details"
            handleClick={() => handleShipmentFormStatus('contactDetails')}
            number="2"
          />
          <div className={contactDetails ? '' : 'hidden'}>
            <ContactDetails />
            <ButtonWithoutLink
              color="primary mt-4"
              onClick={() => handleShipmentFormStatus('paymentDetails')}
            >
              Continue
            </ButtonWithoutLink>
          </div>

          <div className="border-b-2 my-2" />
          <ProccessHeadings
            status={paymentDetails}
            heading="Overview and payment"
            handleClick={() => handleShipmentFormStatus('paymentDetails')}
            number="3"
          />
          <div className={paymentDetails ? '' : 'hidden'}>
            <PaymentDetails />
            <ButtonWithoutLink color="primary mt-4" type="submit">
              Pay
            </ButtonWithoutLink>
          </div>
        </div>

        <div className="grow">
          <div className="bg-primary rounded-t-lg p-4">
            <div className="flex justify-between">
              <span className="text-3xl">
                Price:
                <input
                  className="hidden"
                  name="totalPrice"
                  value={totalPrice}
                  readOnly
                />
                <span className="capitalize ml-1">{totalPrice}€</span>
              </span>
            </div>
          </div>
          {mapActive && (
            <>
              <GoogleMap onSelect={handleAddress} country={selectedCountry} />
            </>
          )}
        </div>
      </div>
    </form>
  );
}
