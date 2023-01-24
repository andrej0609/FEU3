import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';


const FormValidationFormik = () => {

  const [values] = useState({
    email: '',
    password: '',
    passwordRepeat: ''
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Neteisingas el. paštas')
      .required('Privalomas laukas'),
    password: Yup.string()
      .min(8, 'Slaptažodis per trumpas')
      .required('Privalomas laukas'),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Slaptažodžiai nesutampa')
      .required('Privalomas laukas')
  });


  return (
    <>
      <h1>Formik</h1>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, setValues }) => (
          <Form>
            <div>
              <label htmlFor="email">El. paštas</label>
              <Field
                name="email"
                type="email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })} />
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="password">Slaptažodis</label>
              <Field
                name="password"
                type="password"
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })} />
              {errors.password && touched.password ? (
                <span>{errors.password}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="passwordRepeat">Pakartokite slaptažodį</label>
              <Field
                name="passwordRepeat"
                type="password"
                value={values.passwordRepeat}
                onChange={(e) => setValues({ ...values, passwordRepeat: e.target.value })} />
              {errors.passwordRepeat && touched.passwordRepeat ? (
                <span>{errors.passwordRepeat}</span>
              ) : null}
            </div>
            <input type="submit" value="Submit" />
          </Form>
        )}
      </Formik>

    </>
  );
}

export default FormValidationFormik;