import { useState } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { PlaceAutoComplete } from './PlaceAutoComplete';
import { AddressInputProps } from '@/types';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export function AddressInput({
  inputname,
  placeholder,
  setPlace,
}: AddressInputProps) {
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  const handleSelectedPlace = (
    place: google.maps.places.PlaceResult | null
  ) => {
    if (!place) return;
    setSelectedPlace(place);
    setPlace(place.formatted_address || '');
  };

  return (
    <APIProvider apiKey={API_KEY}>
      <PlaceAutoComplete
        onPlaceSelect={handleSelectedPlace}
        selectedPlace={selectedPlace?.formatted_address || ''}
        inputname={inputname}
        placeholder={placeholder}
      />
    </APIProvider>
  );
}
