import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LogIn = () => {

  const [failedLogIn, setFailedLogIn] = useState(false);
  const [userIsBanned, setUserIsBanned] = useState(false);

  const navigation = useNavigate();

  const { users, setLoggedInUser } = useContext(UserContext);

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const loggedInUser = users.find(user => user.userName === values.userName && user.password === values.password);

    if (!loggedInUser) {
      setFailedLogIn(true);
    } else if (loggedInUser.isBanned) {
      setUserIsBanned(true);
    } else {
      setLoggedInUser(loggedInUser);
      navigation('/');
    }

    setSubmitting(false);

  }

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required')
  });

  return (
    <>
    <h1>Prisijungimas</h1>
      <div className="Login">
        <Formik
          initialValues={{
            userName: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="userName"
                placeholder="Username"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
              />
              <button type="submit" disabled={isSubmitting}>
                Log In
              </button>
              {
                failedLogIn && <span>Wrong log in info</span>
              }
              {
                userIsBanned && <span>Your user has been banned</span>
              }
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LogIn;