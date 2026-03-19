import React, { useState } from 'react'
import styles from "../styles/styles.module.css"

export const ProductCard = () => {
  const [ count, setCount ] = useState<number>( 0 );

  const increaseBy = ( value: number ) => {
    setCount( prev => Math.max(prev + value, 0));
  }

  return (
    <div className={ styles.productCard } >
      <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffee Mug" />
      
      <span className={ styles.productDescription } >Coffe Mug</span>

      <div className={ styles.buttonsContainer } >
        <button
          className={ styles.buttonMinus }
          onClick={ () => increaseBy( -1 ) }
          > - </button>
        <div className={ styles.countLabel } >{ count }</div>
        <button
          className={ styles.buttonAdd }
          onClick={ () => increaseBy( +1 ) }
        > + </button>
      </div>
    </div>
  )
}
