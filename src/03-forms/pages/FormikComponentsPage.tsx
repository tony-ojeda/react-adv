import { ErrorMessage, Field, Form, Formik, FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikComponentsPage = () => {

  return (
    <div>
      <h1>Formik Componets</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={ ( values ) => {
          console.log( values )
        } }
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
          lastName: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido'),
          email: Yup.string()
                        .email('El email debe ser correcto')
                        .required('Requerido'),
          terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es pemitida.')
                        .required('Requerido'),
          })
        }
      >
        { (formik) => (
            <Form>
              <label htmlFor='firstName'>First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor='lastName'>Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component="span"/>

              <label htmlFor='email'>Email Address</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="span" />

              <label htmlFor='jobType'>Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </Field>
              
              <label htmlFor='terms'>
                <Field name="terms" type="checkbox" />
                Terms and coditions
              </label>
              <ErrorMessage name="terms" component="span" />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>

    </div>
  )
}
