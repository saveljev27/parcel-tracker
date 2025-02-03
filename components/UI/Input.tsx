import { InputProps } from '@/types';

export function Input({
  placeholder,
  name,
  value,
  required,
  handleChange,
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      className={`${value.length ? 'border-primary' : ''}`}
      type="text"
      value={value || ''}
      onChange={(e) => handleChange(e.target.value)}
      required={required}
    />
  );
}
