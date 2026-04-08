import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <div>Shopping Store</div>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard
          product={ product }
          >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={ product }
          className='bg-dark'
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" title={ 'Cafe' } />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={ product }
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }}className="text-white text-bold" title={ 'Cafe' } />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} className="custom-buttons" />
        </ProductCard>

      </div>
    </div>
  )
}