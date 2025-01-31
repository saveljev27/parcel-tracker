import { shipmentsSizes } from '@/constants/shipmentsizes';

export default function ShipmentSize({
  selectedShipment,
  onSelect,
}: {
  selectedShipment: string;
  onSelect: (params: { label: string; price: number }) => void;
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
      {shipmentsSizes.map(({ size, price, label }) => (
        <div
          onClick={() => onSelect({ label, price })}
          key={label}
          className={`flex flex-col p-2 bg-black/5 rounded-lg shadow-lg hover:bg-black/10 transition cursor-pointer border ${
            selectedShipment === label ? 'border-primary' : ''
          }`}
        >
          <div className="flex justify-between">
            <p>{label}</p>
            <p className="text-sm">{price}€</p>
          </div>
          <span className="text-sm">{size}</span>
        </div>
      ))}
    </div>
  );
}
