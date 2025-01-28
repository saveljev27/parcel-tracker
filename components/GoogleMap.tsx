'use client';
import { useCallback, useEffect, useState } from 'react';
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  AdvancedMarkerProps,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';

import { locations } from '@/constants/locations';

const Z_INDEX_SELECTED = locations.length;
const Z_INDEX_HOVER = locations.length + 1;

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export const GoogleMap = ({
  onSelect,
  country,
}: {
  onSelect: (address: string) => void;
  country: string;
}) => {
  const [markers] = useState(locations);

  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedDeffaultCenter, setSelectedDeffaultCenter] = useState({
    lat: 56.958852895069974,
    lng: 24.4137440312884,
  });

  // useEffect(() => {
  //   switch (country) {
  //     case 'LV':
  //       setSelectedDeffaultCenter({
  //         lat: 56.958852895069974,
  //         lng: 24.4137440312884,
  //       });
  //       break;
  //     case 'LT':
  //       setSelectedDeffaultCenter({
  //         lat: 55.48586566672153,
  //         lng: 23.81379945204358,
  //       });
  //       break;
  //     case 'EE':
  //       setSelectedDeffaultCenter({
  //         lat: 58.79110468388559,
  //         lng: 25.627910663161515,
  //       });
  //   }
  // }, [country]);

  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const onMouseEnter = useCallback((id: string | null) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);
  const onMarkerClick = useCallback(
    (id: string | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
      setSelectedId(id);

      if (marker) {
        setSelectedMarker(marker);
      }

      if (id !== selectedId) {
        setInfoWindowShown(true);
      } else {
        setInfoWindowShown((isShown) => !isShown);
      }
    },
    [selectedId]
  );

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfowindowCloseClick = useCallback(
    () => setInfoWindowShown(false),
    []
  );

  return (
    <APIProvider
      apiKey={API_KEY}
      libraries={['marker']}
      onLoad={() => console.log('Map loaded')}
    >
      <Map
        mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
        defaultCenter={selectedDeffaultCenter}
        defaultZoom={7}
        gestureHandling={'greedy'}
        onClick={onMapClick}
        clickableIcons={false}
        style={{
          boxShadow:
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        }}
        disableDefaultUI
      >
        {markers
          .filter((marker) => marker.country === country)
          .map(({ id, zIndex: zIndexDefault, position, address, key }) => {
            let zIndex = zIndexDefault;

            if (hoverId === id) {
              zIndex = Z_INDEX_HOVER;
            }

            if (selectedId === id) {
              zIndex = Z_INDEX_SELECTED;
            }
            return (
              <AdvancedMarkerWithRef
                onMarkerClick={(
                  marker: google.maps.marker.AdvancedMarkerElement
                ) => {
                  onMarkerClick(id, marker);
                  setSelectedAddress(address);
                  setSelectedCity(key);
                  onSelect(address);
                }}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
                key={id}
                zIndex={zIndex}
                className="custom-marker"
                style={{
                  transform: `scale(${
                    [hoverId, selectedId].includes(id) ? 1.3 : 1
                  })`,
                  transformOrigin:
                    AdvancedMarkerAnchorPoint['BOTTOM'].join(' '),
                }}
                position={position}
              >
                <Pin
                  background={selectedId === id ? '#F86300' : '#FFBC01'}
                  borderColor={selectedId === id ? '#FFBC01' : '#F86300'}
                  glyphColor={selectedId === id ? '#0f677a' : null}
                />
              </AdvancedMarkerWithRef>
            );
          })}

        {infoWindowShown && selectedMarker && (
          <InfoWindow
            anchor={selectedMarker}
            pixelOffset={[0, -2]}
            onCloseClick={handleInfowindowCloseClick}
          >
            <p className="font-semibold text-lg">{selectedCity} Post Office</p>
            <h2>Address: {selectedAddress}</h2>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export const AdvancedMarkerWithRef = (
  props: AdvancedMarkerProps & {
    onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
  }
) => {
  const { children, onMarkerClick, ...advancedMarkerProps } = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker);
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}
    >
      {children}
    </AdvancedMarker>
  );
};
