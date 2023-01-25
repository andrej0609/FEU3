import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

const FormValidationNamu = () => {

  const [values] = useState({
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    age: 0
  });

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Vardas per trumpas')
      .required('Privalomas laukas'),
    email: Yup.string()
      .email('Neteisingas el. paštas')
      .required('Privalomas laukas'),
    password: Yup.string()
      .min(8, 'Slaptažodis per trumpas')
      .required('Privalomas laukas'),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Slaptažodžiai nesutampa')
      .required('Privalomas laukas'),
    age: Yup.number()
      .min(18, 'Jūs negalite būti registruotas, jus per jaunas')
      .required('Privalomas laukas')
  });

  return (
    <>
      <h1>Registracijos Forma</h1>
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
              <label>Vardas</label>
              <Field
                name="username"
                type="text"
                value={values.username}
                onChange={(e) => setValues({ ...values, username: e.target.value })} />
              {errors.username && touched.username ? (
                <span>{errors.username}</span>
              ) : null}
            </div>
            <div>
              <label>El. paštas</label>
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
              <label>Slaptažodis</label>
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
              <label>Pakartokite slaptažodį</label>
              <Field
                name="passwordRepeat"
                type="password"
                value={values.passwordRepeat}
                onChange={(e) => setValues({ ...values, passwordRepeat: e.target.value })} />
              {errors.passwordRepeat && touched.passwordRepeat ? (
                <span>{errors.passwordRepeat}</span>
              ) : null}
            </div>
            <div>
              <label>Amžius</label>
              <Field
                name="age"
                type="number"
                value={values.age}
                onChange={(e) => setValues({ ...values, age: e.target.value })} />
              {errors.age && touched.age ? (
                <span>{errors.age}</span>
              ) : null}
            </div>
            <input type="submit" value="Registruotis" />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormValidationNamu;