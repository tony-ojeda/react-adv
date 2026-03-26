import { useProduct } from '../hooks/useProduct';

import styles from "../styles/styles.module.css"
import noImage from "../assets/no-image.jpg";
import { createContext, ReactElement, useContext } from 'react';

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  count: number;
  increaseBy: ( value: number ) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext( ProductContext );
  let imgToShow: string;

  if ( img ) {
    imgToShow = img;
  } else if ( product.img ) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img className={ styles.productImg } src={ imgToShow } alt="Coffee Mug" />
  )
}

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext( ProductContext );
  const titleToShow: string = title ?? product?.title;

  return (
      <span className={ styles.productDescription } >{ titleToShow }</span>
  )
}

export const ProductButtons = () => {
  const { increaseBy, count } = useContext( ProductContext );

  return (
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
  );
}

export const ProductCard = ({ children, product }: Props) => {
  const { count, increaseBy } = useProduct();

  return (
    <Provider value={{
      count,
      increaseBy,
      product
    }}>
      <div className={ styles.productCard } >

        { children }

        {/* <ProductImage img={ product.img } />
        
        <ProductTitle title={ product.title } />
        
        <ProductButtons count={ count } increaseBy={ increaseBy } /> */}

      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;