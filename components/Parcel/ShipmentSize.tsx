import { shipmentsSizes } from '@/constants/shipmentsizes';
import { ShipmentSizeProps } from '@/types';

export function ShipmentSize({
  selectedShipment,
  onSelect,
}: ShipmentSizeProps) {
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
            <label htmlFor={label}>{label}</label>
            <p className="text-sm">{price}€</p>
          </div>
          <span className="text-sm">{size}</span>
          <input
            type="radio"
            name="shipmentSize"
            id={label}
            value={label}
            checked={selectedShipment === label}
            onChange={() => onSelect({ label, price })}
            className="hidden"
            required
          />
        </div>
      ))}
    </div>
  );
}
