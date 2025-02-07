import { RadioOption } from '@/constants/radio';

export interface ProccessHeadingsProps {
  status: { active: boolean; completed: boolean };
  heading: string;
  number: string;
  handleClick: () => void;
}

export interface ShipmentDetailsProps {
  selectedCountry: (country: string) => void;
  selectedAddress?: (address: string) => void;
  selectedShipment: (shipment: { label: string; price: number }) => void;
  location: (loc: { lat: number; lng: number }) => void;
  balticMapActive: (boolean: boolean) => void;
  intMapActive: (boolean: boolean) => void;
  isCourier: (boolean: boolean) => void;
  isCompleted: (boolean: boolean) => void;
  isActive: (boolean: boolean) => void;
  address: string;
  shipment: string;
}

export interface ContactDetailsProps {
  isCompleted: (boolean: boolean) => void;
  isActive: (boolean: boolean) => void;
}

export interface RadioProps {
  options: RadioOption[];
  selectedOption: string | undefined;
  onSelect: (params: { value: string; name: string }) => void;
}

export interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  required: boolean;
  handleChange: (value: string) => void;
}

export interface AddressInputProps {
  inputname: string;
  placeholder: string;
  setPlace: (address: {
    address: string;
    loc: { lat: number; lng: number };
  }) => void;
}

export interface ShipmentSizeProps {
  selectedShipment: string;
  onSelect: (params: { label: string; price: number }) => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  color: string;
  link?: string;
  classList?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export interface PlaceAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
  selectedPlace: string | 'Invalid address';
  inputname: string;
  placeholder: string;
}

export interface ShipmentsProps {
  shipments: {
    id: string;
    carrier: string;
    sendAddress: string;
    createdAt: Date;
  };
}
