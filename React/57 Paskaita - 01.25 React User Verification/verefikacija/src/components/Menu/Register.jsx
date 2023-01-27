import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
  const navigation = useNavigate();

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    passwordRepeat: Yup.string().required('Please repeat your password').oneOf([Yup.ref('password'), null], 'Passwords do not match'),
    avatar: Yup.string().url('Please enter a valid URL')
  });

  const handleSubmit = (values) => {
    if (users.find(user => user.userName === values.userName)) {
      alert("User with such name already exists.");
    } else {
      let newUser = {
        ...values,
        id: Date.now(),
        level: 'user',
        isBanned: false
      };
      addNewUser(newUser);
      setLoggedInUser(newUser);
      navigation('/');
    }
  }

  return (
    <>
      <div className="FormRegister">
        <Formik
          initialValues={{ userName: '', password: '', passwordRepeat: '', avatar: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <label>
                User name:
                <Field name="userName" type="text" />
                {errors.userName && touched.userName ? <div>{errors.userName}</div> : null}
              </label>
              <label>
                Password:
                <Field name="password" type="password" />
                {errors.password && touched.password ? <div>{errors.password}</div> : null}
              </label>
              <label>
                Repeat Password:
                <Field name="passwordRepeat" type="password" />
                {errors.passwordRepeat && touched.passwordRepeat ? <div>{errors.passwordRepeat}</div> : null}
              </label>
              <label>
                User picture:
                <Field name="avatar" type="url" />
                {errors.avatar && touched.avatar ? <div>{errors.avatar}</div  > : null}
              </label>
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Register;