import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/interfaces';

import '../styles/custom-styles.css';
import { useShoppingCart } from '../components/hooks/useShoppingCart';
import { products } from '../data/products';



export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();
 
  return (
    <div>
      <div>Shopping Store</div>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map( product => (
            <ProductCard
              key={ product.id }
              product={ product }
              className='bg-dark'
              onChange={ onProductCountChange}
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
           ) )
        }
      </div>

      <div className="shopping-cart" >
        {
          Object.entries(shoppingCart).map( ([key, product]) => (
            <ProductCard
              key={ key }
              product={ product }
              className='bg-dark'
              style={{ width: '100px' }}
              value={ product.count }
              onChange={ onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}