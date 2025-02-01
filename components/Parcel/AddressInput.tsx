import { useState } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { PlaceAutoComplete } from './PlaceAutoComplete';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export function AddressInput({
  inputname,
  placeholder,
}: {
  inputname: string;
  placeholder: string;
}) {
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  return (
    <APIProvider apiKey={API_KEY}>
      <PlaceAutoComplete
        onPlaceSelect={setSelectedPlace}
        selectedPlace={selectedPlace?.formatted_address || ''}
        inputname={inputname}
        placeholder={placeholder}
      />
    </APIProvider>
  );
}
