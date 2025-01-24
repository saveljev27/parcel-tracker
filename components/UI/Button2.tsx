import { useState } from 'react';

export default function Button2({
  onChange,
}: {
  onChange: (value: number) => void;
}) {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    onChange(count);
    setCount(count + 1);
  };

  console.log(count);

  return (
    <div className="flex flex-col gap-5">
      <button onClick={handleClick} className="bg-primary py-2 px-4 rounded-xl">
        Click on me
      </button>
    </div>
  );
}
