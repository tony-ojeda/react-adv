import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

  const [count, setCount] = useState<number>(value);

  const isControlled = useRef( !!onChange );

  const increaseBy = (value: number) => {

    if( isControlled.current ) {
      return onChange!({ count: value, product });
     }
    
    const newValue = Math.max( count + value, 0 );

    setCount( newValue );

    onChange?.({ count: newValue, product });
  };

  useEffect(() => {
    setCount( value );
  }, [ value ])

  return {
    count,
    increaseBy
  };
};