import { JSX, lazy, LazyExoticComponent } from "react";
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path : string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    path: '',
    to: '/',
    Component: () => <ShoppingPage />,
    name: 'Shopping'
  },
  {
    to: '/about',
    path: 'about',
    Component: () => <h1>About</h1>,
    name: 'About'
  },
  {
    to: '/users',
    path: 'users',
    Component: () => <h1>Users</h1>,
    name: 'Users'
  },
];