type MarkerData = {
  id: string;
  key: string;
  address: string;
  position: google.maps.LatLngLiteral;
  type: 'pin';
  zIndex: number;
};

export const locations: MarkerData[] = [
  {
    id: String(1),
    key: 'Daugavpils',
    address: 'Cietokšņa iela 60, Daugavpils, LV-5401',
    position: { lat: 55.87291982479773, lng: 26.518079879009733 },
    type: 'pin',
    zIndex: 1,
  },
  {
    id: String(2),
    key: 'Riga',
    address: 'Dižozolu iela 2, Zemgales priekšpilsēta, Rīga, LV-1058',
    position: { lat: 56.90281224654014, lng: 24.09460362551437 },
    type: 'pin',
    zIndex: 2,
  },
  {
    id: String(3),
    key: 'Riga2',
    position: { lat: 56.94786615949136, lng: 24.120967154723775 },
    address: 'Stacijas laukums 2 Origo Shopping Center II floor, Rīga, LV-1050',
    type: 'pin',
    zIndex: 3,
  },
  {
    id: String(4),
    key: 'Jelgava',
    address: 'Katoļu iela 18, Jelgava, LV-3001',
    position: { lat: 56.6471462090916, lng: 23.726061731168496 },
    type: 'pin',
    zIndex: 4,
  },
  {
    id: String(5),
    key: 'Liepaja',
    address: 'Krūmu iela 48, Liepāja, LV-3405',
    position: { lat: 56.532768116517055, lng: 1.012181295043675 },
    type: 'pin',
    zIndex: 5,
  },
  {
    id: String(6),
    key: 'Ventspils',
    address: 'J. Neikena iela 20, Ventspils, LV-3604',
    position: { lat: 57.40130429418554, lng: 21.599829473054456 },
    type: 'pin',
    zIndex: 6,
  },
  {
    id: String(7),
    key: 'Valmiera',
    address: 'Nākotnes iela 2, Valmiera, LV-4201',
    position: { lat: 57.53011051465315, lng: 25.427731605174507 },
    type: 'pin',
    zIndex: 7,
  },
];
