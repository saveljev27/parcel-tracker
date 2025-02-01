import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState } from 'react';

interface PlaceAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
  selectedPlace: string | 'Invalid address';
  inputname: string;
  placeholder: string;
}

export function PlaceAutoComplete({
  onPlaceSelect,
  selectedPlace,
  inputname,
  placeholder,
}: PlaceAutocompleteProps) {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['formatted_address', 'geometry'],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input
        ref={inputRef}
        placeholder={placeholder}
        className={`${selectedPlace ? 'border-primary' : ''}`}
        name={inputname}
        autoComplete="off"
        required
        defaultValue={selectedPlace}
      />
    </div>
  );
}
