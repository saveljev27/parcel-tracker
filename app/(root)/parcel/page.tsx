'use client';

import { BalticMap, InternationalMap } from '@/components';

import { ButtonWithoutLink } from '@/components/UI';
import { useCallback, useState } from 'react';
import { createShipment } from '../actions';
import { totalPrice } from '@/lib/totalPrice';
import {
  ContactDetails,
  PaymentDetails,
  ProccessHeadings,
  ShipmentDetails,
} from '@/components/Parcel';

export default function Parcel() {
  const [formData, setFormData] = useState({
    selectedAddress: '',
    selectedCountry: 'LV',
    selectedShipment: { label: '', price: 0 },
    balticMapActive: false,
    intMapActive: false,
    courier: false,
    location: { lat: 53.422421686025785, lng: 18.82890513134709 },
  });
  const [parcelDetails, setParcelDetails] = useState({
    shipmentDetails: true,
    contactDetails: false,
    paymentDetails: false,
    shipmentDetailsCompleted: false,
    contactDetailsCompleted: false,
    paymentDetailsCompleted: false,
  });

  const {
    shipmentDetails,
    contactDetails,
    paymentDetails,
    shipmentDetailsCompleted,
    contactDetailsCompleted,
    paymentDetailsCompleted,
  } = parcelDetails;

  const handleSend = (FormData: FormData) => {
    createShipment(FormData);
  };
  const handleAddress = (address: string) => {
    setFormData({ ...formData, selectedAddress: address });
  };
  const updateStepStatus = useCallback((step: string, completed: boolean) => {
    setParcelDetails((prevState) => ({
      ...prevState,
      [`${step}Completed`]: completed,
    }));
  }, []);

  const switchStep = useCallback((currentStep: string) => {
    setParcelDetails((prevState) => ({
      ...prevState,
      shipmentDetails: currentStep === 'shipmentDetails',
      contactDetails: currentStep === 'contactDetails',
      paymentDetails: currentStep === 'paymentDetails',
    }));
  }, []);

  const switchMap = useCallback((currentMap: string) => {
    setFormData((prevState) => ({
      ...prevState,
      balticMapActive: currentMap === 'balticMapActive',
      intMapActive: currentMap === 'intMapActive',
    }));
  }, []);

  return (
    <form action={handleSend}>
      <div className="flex gap-5 min-h-[60vh]">
        <div className="max-w-[550px] w-[500px]">
          <h1>Register shipment</h1>

          <ProccessHeadings
            status={{
              active: shipmentDetails,
              completed: shipmentDetailsCompleted,
            }}
            handleClick={() => switchStep('shipmentDetails')}
            heading="Shipment details"
            number="1"
          />
          <div className={shipmentDetails ? '' : 'hidden'}>
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
              balticMapActive={(boolean: boolean) =>
                switchMap(boolean ? 'balticMapActive' : 'intMapActive')
              }
              intMapActive={(boolean: boolean) =>
                switchMap(boolean ? 'intMapActive' : 'balticMapActive')
              }
              location={(loc: { lat: number; lng: number }) =>
                setFormData({ ...formData, location: loc })
              }
              isCourier={(boolean: boolean) =>
                setFormData({ ...formData, courier: boolean })
              }
              isCompleted={(completed: boolean) =>
                updateStepStatus('shipmentDetails', completed)
              }
              isActive={(active: boolean) =>
                switchStep(active ? 'shipmentDetails' : 'contactDetails')
              }
              address={formData.selectedAddress}
              shipment={formData.selectedShipment.label}
            />
          </div>

          <div className="border-b-2 my-2" />
          <ProccessHeadings
            status={{
              active: contactDetails,
              completed: contactDetailsCompleted,
            }}
            heading="Contact details"
            handleClick={() => switchStep('contactDetails')}
            number="2"
          />
          <div className={contactDetails ? '' : 'hidden'}>
            <ContactDetails
              isCompleted={(completed: boolean) =>
                updateStepStatus('contactDetails', completed)
              }
              isActive={(active: boolean) =>
                switchStep(active ? 'contactDetails' : 'paymentDetails')
              }
            />
          </div>

          <div className="border-b-2 my-2" />
          <ProccessHeadings
            status={{
              active: paymentDetails,
              completed: paymentDetailsCompleted,
            }}
            heading="Overview and payment"
            handleClick={() => {}}
            number="3"
          />
          <div className={paymentDetails ? '' : 'hidden'}>
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

        <div className="grow bg-lightyellow rounded-lg py-6 px-2 shadow-md border">
          <div className="flex justify-between">
            <span className="text-3xl mb-4 px-6">
              Price:
              <input
                className="hidden"
                name="totalPrice"
                value={totalPrice(formData)}
                readOnly
              />
              <span className="capitalize ml-1">{totalPrice(formData)}€</span>
            </span>
          </div>
          <div className="border-b-2" />
          {formData.balticMapActive && (
            <BalticMap
              onSelect={handleAddress}
              country={formData.selectedCountry}
            />
          )}
          {formData.intMapActive && (
            <InternationalMap
              location={formData.location}
              onSelect={handleAddress}
            />
          )}
        </div>
      </div>
    </form>
  );
}
