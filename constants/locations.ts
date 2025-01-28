type MarkerData = {
  id: string;
  key: string;
  country: string;
  address: string;
  position: google.maps.LatLngLiteral;
  type: 'pin';
  zIndex: number;
};

export const locations: MarkerData[] = [
  {
    id: String(1),
    key: 'Daugavpils',
    country: 'LV',
    address: 'Cietokšņa iela 60, Daugavpils, LV-5401',
    position: { lat: 55.87291982479773, lng: 26.518079879009733 },
    type: 'pin',
    zIndex: 1,
  },
  {
    id: String(2),
    key: 'Riga',
    country: 'LV',
    address: 'Dižozolu iela 2, Zemgales priekšpilsēta, Rīga, LV-1058',
    position: { lat: 56.90281224654014, lng: 24.09460362551437 },
    type: 'pin',
    zIndex: 2,
  },
  {
    id: String(3),
    key: 'Riga2',
    country: 'LV',
    position: { lat: 56.94786615949136, lng: 24.120967154723775 },
    address: 'Stacijas laukums 2 Origo Shopping Center II floor, Rīga, LV-1050',
    type: 'pin',
    zIndex: 3,
  },
  {
    id: String(4),
    key: 'Jelgava',
    country: 'LV',
    address: 'Katoļu iela 18, Jelgava, LV-3001',
    position: { lat: 56.6471462090916, lng: 23.726061731168496 },
    type: 'pin',
    zIndex: 4,
  },
  {
    id: String(5),
    key: 'Liepaja',
    country: 'LV',
    address: 'Krūmu iela 48, Liepāja, LV-3405',
    position: { lat: 56.532768116517055, lng: 21.012181295043675 },
    type: 'pin',
    zIndex: 5,
  },
  {
    id: String(6),
    key: 'Ventspils',
    country: 'LV',
    address: 'J. Neikena iela 20, Ventspils, LV-3604',
    position: { lat: 57.40130429418554, lng: 21.599829473054456 },
    type: 'pin',
    zIndex: 6,
  },
  {
    id: String(7),
    key: 'Valmiera',
    country: 'LV',
    address: 'Nākotnes iela 2, Valmiera, LV-4201',
    position: { lat: 57.53011051465315, lng: 25.427731605174507 },
    type: 'pin',
    zIndex: 7,
  },
  {
    id: String(8),
    key: 'Kaunas',
    country: 'LT',
    address: 'J. Basanavičiaus al. 15, Kaunas, 50277 Kauno m. sav.',
    position: { lat: 54.905132176631504, lng: 23.94029432225242 },
    type: 'pin',
    zIndex: 8,
  },
];
