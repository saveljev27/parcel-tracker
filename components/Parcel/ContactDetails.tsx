import React, { useState } from 'react';
import { ButtonWithoutLink } from '../UI';
import { validation } from '@/lib/validation';
import { ContactDetailsProps } from '@/types';
import { Input } from '../UI/Input';

export function ContactDetails({ isCompleted, isActive }: ContactDetailsProps) {
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

  const { senderName, senderEmail, senderPhone, receiverName, receiverPhone } =
    contactDetails;

  return (
    <section className="px-4">
      <h1 className="text-lg mt-4 mb-3">Sender</h1>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Name and Surname"
          name="senderName"
          value={senderName || ''}
          handleChange={(value: string) =>
            setContactDetails({ ...contactDetails, senderName: value })
          }
          required
        />
        <Input
          placeholder="Email"
          name="senderEmail"
          value={senderEmail || ''}
          handleChange={(value) =>
            setContactDetails({ ...contactDetails, senderEmail: value })
          }
          required
        />
        <Input
          placeholder="Phone number"
          name="senderPhone"
          value={senderPhone || ''}
          handleChange={(value) =>
            setContactDetails({ ...contactDetails, senderPhone: value })
          }
          required
        />
      </div>
      <h1 className="text-lg mt-4 mb-3">Receiver</h1>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Name and Surname"
          name="receiverName"
          value={receiverName || ''}
          handleChange={(value) =>
            setContactDetails({ ...contactDetails, receiverName: value })
          }
          required
        />
        <Input
          placeholder="Phone number"
          name="receiverPhone"
          value={receiverPhone || ''}
          handleChange={(value) =>
            setContactDetails({ ...contactDetails, receiverPhone: value })
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
