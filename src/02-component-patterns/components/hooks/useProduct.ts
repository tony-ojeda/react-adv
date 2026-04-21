import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../../interfaces/interfaces';

const loggedInitialCounts = new Set<string>();

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

  const [count, setCount] = useState<number>( initialValues?.count ?? value );
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {

    let newValue = Math.max( count + value, 0 );
    if ( initialValues?.maxCount ) {
      newValue = Math.min( newValue, initialValues.maxCount )
    }

    setCount( newValue );
    onChange?.({ count: newValue, product });
  };

  const reset = () => {
    setCount( initialValues?.count || value )
  }

  useEffect(() => {
    if ( !isMounted.current ) return;
    setCount( value );
  }, [ value ])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    count,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset
  };
};
