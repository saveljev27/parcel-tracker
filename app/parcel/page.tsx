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
  const [formData, setFormData] = useState({
    selectedAddress: '',
    selectedCountry: 'LV',
    selectedShipment: { label: '', price: 0 },
    mapActive: false,
    courier: false,
  });
  const [parcelDetails, setParcelDetails] = useState({
    shipmentDetails: true,
    contactDetails: false,
    paymentDetails: false,
    shipmentDetailsCompleted: false,
    contactDetailsCompleted: false,
    paymentDetailsCompleted: false,
  });

  const handleAddress = (address: string) => {
    setFormData({ ...formData, selectedAddress: address });
  };
  const handleSend = (FormData: FormData) => {
    createShipment(FormData);
  };
  const updateStepStatus = (step: string, completed: boolean) => {
    setParcelDetails((prevState) => ({
      ...prevState,
      [`${step}Completed`]: completed,
    }));
  };
  const switchStep = (currentStep: string) => {
    setParcelDetails((prevState) => ({
      ...prevState,
      shipmentDetails: currentStep === 'shipmentDetails',
      contactDetails: currentStep === 'contactDetails',
      paymentDetails: currentStep === 'paymentDetails',
    }));
  };

  const totalPrice = formData.courier
    ? formData.selectedShipment.price + 10
    : formData.selectedShipment.price;

  return (
    <form action={handleSend}>
      <div className="flex gap-5 min-h-[60vh]">
        <div className="max-w-[550px] w-[500px]">
          <h1 className="text-4xl font-bold">Register shipment</h1>

          <ProccessHeadings
            status={{
              active: parcelDetails.shipmentDetails,
              completed: parcelDetails.shipmentDetailsCompleted,
            }}
            handleClick={() => switchStep('shipmentDetails')}
            heading="Shipment details"
            number="1"
          />
          <div className={parcelDetails.shipmentDetails ? '' : 'hidden'}>
            <ShipmentDetails
              selectedCountry={(country: string) =>
                setFormData({ ...formData, selectedCountry: country })
              }
              selectedAddress={(address: string) =>
                setFormData({ ...formData, selectedAddress: address })
              }
              selectedShipment={(shipment: { label: string; price: number }) =>
                setFormData({ ...formData, selectedShipment: shipment })
              }
              mapActive={(boolean: boolean) =>
                setFormData({ ...formData, mapActive: boolean })
              }
              isCourier={(boolean: boolean) =>
                setFormData({ ...formData, courier: boolean })
              }
              isCompleted={(completed: boolean) =>
                updateStepStatus('shipmentDetails', completed)
              }
              isActive={(active: boolean) =>
                switchStep(active ? 'contactDetails' : 'shipmentDetails')
              }
              address={formData.selectedAddress}
              shipment={formData.selectedShipment.label}
            />
          </div>

          <div className="border-b-2 my-2" />
          <ProccessHeadings
            status={{
              active: parcelDetails.contactDetails,
              completed: parcelDetails.contactDetailsCompleted,
            }}
            heading="Contact details"
            handleClick={() => switchStep('contactDetails')}
            number="2"
          />
          <div className={parcelDetails.contactDetails ? '' : 'hidden'}>
            <ContactDetails
              isCompleted={(completed: boolean) =>
                updateStepStatus('contactDetails', completed)
              }
              isActive={(active: boolean) =>
                switchStep(active ? 'paymentDetails' : 'contactDetails')
              }
            />
          </div>

          <div className="border-b-2 my-2" />
          <ProccessHeadings
            status={{
              active: parcelDetails.paymentDetails,
              completed: parcelDetails.paymentDetailsCompleted,
            }}
            heading="Overview and payment"
            handleClick={() => {}}
            number="3"
          />
          <div className={parcelDetails.paymentDetails ? '' : 'hidden'}>
            <PaymentDetails
              isActive={(active: boolean) =>
                switchStep(active ? 'paymentDetails' : 'paymentDetails')
              }
            />
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
                  name="price"
                  value={totalPrice}
                  readOnly
                />
                <span className="capitalize ml-1">{totalPrice}€</span>
              </span>
            </div>
          </div>
          {formData.mapActive && (
            <>
              <GoogleMap
                onSelect={handleAddress}
                country={formData.selectedCountry}
              />
            </>
          )}
        </div>
      </div>
    </form>
  );
}
