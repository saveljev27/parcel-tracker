import React, { useState } from 'react';
import { ButtonWithoutLink } from '../UI';
import { validation } from '@/lib/validation';

interface ShipmentDetailsProps {
  isCompleted: (boolean: boolean) => void;
  isActive: (boolean: boolean) => void;
}

export function ContactDetails({
  isCompleted,
  isActive,
}: ShipmentDetailsProps) {
  const [contactDetails, setContactDetails] = useState({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    receiverName: '',
    receiverPhone: '',
  });
  const [errors, setErrors] = useState('');

  const handleData = (value: string) => {
    const validationMessage = validation(value, contactDetails);
    if (validationMessage) {
      setErrors(validationMessage);
    }
    isCompleted(true);
    isActive(true);
  };

  return (
    <section className="px-4">
      <h1 className="text-lg mt-4 mb-3">Sender</h1>
      <div className="flex flex-col gap-4">
        <input
          placeholder="Name and Surname"
          name="senderName"
          className={`${
            contactDetails.senderName.length ? 'border-primary' : ''
          }`}
          type="text"
          value={contactDetails.senderName || ''}
          onChange={(e) =>
            setContactDetails({ ...contactDetails, senderName: e.target.value })
          }
          required
        />
        <input
          placeholder="Email"
          name="senderEmail"
          className={`${
            contactDetails.senderEmail.length ? 'border-primary' : ''
          }`}
          type="text"
          value={contactDetails.senderEmail || ''}
          onChange={(e) =>
            setContactDetails({
              ...contactDetails,
              senderEmail: e.target.value,
            })
          }
          required
        />
        <input
          placeholder="Phone number"
          name="senderPhone"
          className={`${
            contactDetails.senderPhone.length ? 'border-primary' : ''
          }`}
          type="text"
          value={contactDetails.senderPhone || ''}
          onChange={(e) =>
            setContactDetails({
              ...contactDetails,
              senderPhone: e.target.value,
            })
          }
          required
        />
      </div>
      <h1 className="text-lg mt-4 mb-3">Receiver</h1>
      <div className="flex flex-col gap-4">
        <input
          placeholder="Name and Surname"
          name="receiverName"
          className={`${
            contactDetails.receiverName.length ? 'border-primary' : ''
          }`}
          type="text"
          value={contactDetails.receiverName || ''}
          onChange={(e) =>
            setContactDetails({
              ...contactDetails,
              receiverName: e.target.value,
            })
          }
          required
        />
        <input
          placeholder="Phone number"
          name="receiverPhone"
          className={`${
            contactDetails.receiverPhone.length ? 'border-primary' : ''
          }`}
          type="text"
          value={contactDetails.receiverPhone || ''}
          onChange={(e) =>
            setContactDetails({
              ...contactDetails,
              receiverPhone: e.target.value,
            })
          }
          required
        />
      </div>
      {errors && <p className="text-red-600 px-4 mt-2">{errors}</p>}
      <ButtonWithoutLink
        color="primary mt-4"
        onClick={() => handleData('contactDetails')}
      >
        Continue
      </ButtonWithoutLink>
    </section>
  );
}
