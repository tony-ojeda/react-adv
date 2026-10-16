import { ChangeEvent, SubmitEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Formik, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ name: '', email: '', password1: '', password2: '' }}
          validationSchema={ Yup.object({
            name: Yup.string()
              .min(2, 'Debe tener como minimo 2 caracteres')
              .max(15, 'Debe tener como maximo 15 caracteres')
              .required('Requerido'),
            email: Yup.string()
              .email('El email debe ser valido')
              .required('Requerido'),
            password1: Yup.string()
              .min(6, 'Debe tener como minimo 6 caracteres')
              .required('Requerido'),
            password2: Yup.string()
              .oneOf([Yup.ref('password1'), 'Contraseña no coincide'])
              .required('Requerido'),
          })
        }
        onSubmit={ (values) => {
          console.log(values)
        } }
      >
        {({ handleSubmit, handleReset }) => (
          <Form noValidate onSubmit={ handleSubmit } onReset={ handleReset } >
            <MyTextInput
              label='Name'
              name='name'
              placeholder='Name'
            />

            <MyTextInput
             label='Email'
             name='email'
             type='email'
             placeholder='Email'
            />

            <MyTextInput
             label='Password'
             name='password1'
             type='password'
             placeholder='****'
            />

            <MyTextInput
             label='Confirm Password'
             name='password2'
             type='password'
             placeholder='****'
            />

            <button type='submit'>Create</button>
            <button type='reset' >Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
