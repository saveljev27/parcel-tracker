import React, { useState } from 'react';

export function ContactDetails() {
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [senderPhone, setSenderPhone] = useState<string>('');
  const [receiverName, setReceiverName] = useState<string>('');
  const [receiverPhone, setReceiverPhone] = useState<string>('');

  return (
    <section className="px-4">
      <h1 className="text-lg mt-4 mb-3">Sender</h1>
      <div className="flex flex-col gap-4">
        <input
          placeholder="Name and Surname"
          className={`border rounded-md p-4 w-[450px] shadow-lg ${
            senderName.length ? 'border-primary' : ''
          }`}
          type="text"
          value={senderName || ''}
          onChange={(e) => setSenderName(e.target.value)}
        />
        <input
          placeholder="Email"
          className={`border rounded-md p-4 w-[450px] shadow-lg ${
            senderEmail.length ? 'border-primary' : ''
          }`}
          type="text"
          value={senderEmail || ''}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <input
          placeholder="Phone number"
          className={`border rounded-md p-4 w-[450px] shadow-lg ${
            senderPhone.length ? 'border-primary' : ''
          }`}
          type="text"
          value={senderPhone || ''}
          onChange={(e) => setSenderPhone(e.target.value)}
        />
      </div>
      <h1 className="text-lg mt-4 mb-3">Receiver</h1>
      <div className="flex flex-col gap-4">
        <input
          placeholder="Name and Surname"
          className={`border rounded-md p-4 w-[450px] shadow-lg ${
            receiverName.length ? 'border-primary' : ''
          }`}
          type="text"
          value={receiverName || ''}
          onChange={(e) => setReceiverName(e.target.value)}
        />
        <input
          placeholder="Phone number"
          className={`border rounded-md p-4 w-[450px] shadow-lg ${
            receiverPhone.length ? 'border-primary' : ''
          }`}
          type="text"
          value={receiverPhone || ''}
          onChange={(e) => setReceiverPhone(e.target.value)}
        />
      </div>
    </section>
  );
}
