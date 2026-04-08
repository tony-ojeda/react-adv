import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'

export interface Props {
  className?: string;
  title?: string;
  activeClass?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext( ProductContext );
  const titleToShow: string = title ?? product?.title;

  return (
      <span style={ style } className={ `${ styles.productDescription } ${ className }` } >{ titleToShow }</span>
  )
}