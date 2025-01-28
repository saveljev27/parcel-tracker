export interface RadioOption {
  label: string;
  value: string;
  info: string;
  name: string;
}

export const deliveryOptions = [
  {
    label: 'Baltic Countries',
    value: 'baltics',
    info: 'Delivery time: 1 - 3 days',
    name: 'delivery',
  },
  {
    label: 'International',
    value: 'international',
    info: 'Delivery time: 3 - 5 days',
    name: 'delivery',
  },
];

export const carrierOptions = [
  {
    label: 'Our Postoffice',
    value: 'postoffice',
    info: 'Free',
    name: 'carrier',
  },
  {
    label: 'Courier',
    value: 'courier',
    info: '10€',
    name: 'carrier',
  },
];
