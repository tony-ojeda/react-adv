import { useState } from 'react';

export const useProduct = () => {

  const [count, setCount] = useState<number>(0);

  const increaseBy = (value: number) => {
    setCount((prev) => Math.max(prev + value, 0));
  };

  return {
    count,
    increaseBy
  };
};