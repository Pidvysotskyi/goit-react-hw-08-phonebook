import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/userOperation';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        dispatch(loginUser(values));
        resetForm();
      }}
    >
      <Form>
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <button type="submit">login</button>
      </Form>
    </Formik>
  );
};

export default Login;
