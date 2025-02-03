interface PaymentDetailsProps {
  isActive: (boolean: boolean) => void;
}

export function PaymentDetails({ isActive }: PaymentDetailsProps) {
  return (
    <section className="px-4">
      <h1 className="text-lg mt-4 mb-3">Stripe</h1>
      <div className="flex flex-col gap-4">
        <label htmlFor="cardNumber">Card number</label>
        <input type="number" name="cardNumber" required />
        <label htmlFor="cardHolder">Name of cardholder</label>
        <input type="text" name="cardHolder" required />
      </div>
    </section>
  );
}
