'use client';
import Button from '@/components/UI/Button';
import Button2 from '@/components/UI/Button2';
import { useState } from 'react';

export default function Tracker() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const handleChange = (value: number) => {
    setCount2(value);
  };

  return (
    <div>
      <Button onClick={() => setCount(count + 1)} />
      <p>{count}</p>
      <Button2 onChange={handleChange} />
      <p>{count2}</p>
    </div>
  );
}
