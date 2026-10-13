import {  BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';

import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponentsPage, FormikAbstractationPage } from '../03-forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/formik-basic" element={ <FormikBasicPage /> } />
          <Route path="/formik-yup" element={ <FormikYupPage /> } />
          <Route path="/formik-components" element={ <FormikComponentsPage /> } />
          <Route path="/formik-abstractation" element={ <FormikAbstractationPage /> } />
          <Route path="/users" element={ <h1>Users Page</h1> } />
          <Route path="/" element={ <h1>Home Page</h1> } />

          <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
