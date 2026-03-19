import { JSX, lazy, LazyExoticComponent } from "react";

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
    Component: () => <h1>Home</h1>,
    name: 'Home'
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