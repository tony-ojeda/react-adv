import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/interfaces';

import '../styles/custom-styles.css';
import { useShoppingCart } from '../components/hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
 
  return (
    <div>
      <div>Shopping Store</div>
      <hr />

      <ProductCard
        key={ product.id }
        product={ product }
        className='bg-dark'
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ( { reset, count, isMaxCountReached, maxCount, increaseBy } ) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy(-2) }> -2 </button>
              {
                ( !isMaxCountReached && <button onClick={ () => increaseBy( +2 ) }>+2</button> )
              }
              <span>{ count } - { maxCount }</span>
            </>
          )
        }
      </ProductCard>

    </div>
  )
}