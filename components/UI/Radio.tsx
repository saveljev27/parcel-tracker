import { useState } from 'react';
import { RadioOption } from '@/constants/radio';
import { on } from 'events';

export function Radio({
  options,
  onSelect,
}: {
  options: RadioOption[];
  onSelect: (params: { value: string; name: string }) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <div className="flex flex-col gap-4">
      {options.map(({ label, value, info, name }) => (
        <div
          className={`p-4 bg-black/5 rounded-lg shadow-lg  max-w-md hover:bg-black/10 transition cursor-pointer border ${
            selectedOption === value ? ' border-primary' : ''
          }`}
          onClick={() => {
            setSelectedOption(value);
            onSelect({
              value,
              name,
            });
          }}
          key={value}
        >
          <div className="flex flex-col">
            <label
              htmlFor={value}
              className="text-sm font-semibold cursor-pointer"
            >
              {label}
            </label>
            <span className="text-sm text-gray-500">{info}</span>
          </div>
          <input
            type="radio"
            id={value}
            name={name}
            value={value}
            checked={selectedOption === value}
            onChange={() => onSelect({ value, name })}
            className="hidden"
          />
        </div>
      ))}
    </div>
  );
}
