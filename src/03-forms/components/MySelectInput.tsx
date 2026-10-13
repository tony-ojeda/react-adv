import { ErrorMessage, useField } from 'formik';
import React from 'react'

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MySelectInput = ( { label, ...props }: Props ) => {

  const [ field ] = useField(props);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <select { ...field } { ...props } />
      <ErrorMessage name={ field.name } component="span" />
    </>
  )
}
