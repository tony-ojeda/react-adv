import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard'

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
        <ProductCard product={ product } >
          <ProductImage />
          <ProductTitle title={ 'Cafe' } />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={ product } >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}