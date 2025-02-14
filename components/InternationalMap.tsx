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

export const InternationalMap = ({
  onSelect,
  location,
}: {
  onSelect: (address: string) => void;
  location: { lat: number; lng: number };
}) => {
  const [selectedDeffaultCenter, setSelectedDeffaultCenter] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    setSelectedDeffaultCenter(location);
  }, [location]);

  return (
    <APIProvider
      apiKey={API_KEY}
      libraries={['marker']}
      onLoad={() => console.log('Map loaded')}
    >
      <Map
        mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
        center={selectedDeffaultCenter}
        defaultZoom={12}
        gestureHandling={'greedy'}
        clickableIcons={false}
        style={{
          boxShadow:
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          maxHeight: '50vh',
        }}
        disableDefaultUI
      >
        <AdvancedMarkerWithRef
          onMarkerClick={(
            marker: google.maps.marker.AdvancedMarkerElement
          ) => {}}
          className="custom-marker"
          style={{
            transformOrigin: AdvancedMarkerAnchorPoint['BOTTOM'].join(' '),
          }}
          position={selectedDeffaultCenter}
        >
          <Pin
            background={'#F86300'}
            borderColor={'#FFBC01'}
            glyphColor={'#0f677a'}
          />
        </AdvancedMarkerWithRef>
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
