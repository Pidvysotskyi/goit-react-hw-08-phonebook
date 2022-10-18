import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/userOperation';

const Register = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        dispatch(registerUser(values));
        resetForm();
      }}
    >
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default Register;
