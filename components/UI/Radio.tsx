import { RadioOption } from '@/constants/radio';

export function Radio({
  options,
  selectedOption,
  onSelect,
}: {
  options: RadioOption[];
  selectedOption: string | undefined;
  onSelect: (params: { value: string; name: string }) => void;
}) {
  return (
    <div className="flex flex-col gap-4 max-w-[450px]">
      {options.map(({ label, value, info, name }) => (
        <div
          className={`p-4 bg-black/5 rounded-lg shadow-lg w-[450px] hover:bg-black/10 transition cursor-pointer border ${
            selectedOption === value ? ' border-primary' : ''
          }`}
          onClick={() => {
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
            required
          />
        </div>
      ))}
    </div>
  );
}
