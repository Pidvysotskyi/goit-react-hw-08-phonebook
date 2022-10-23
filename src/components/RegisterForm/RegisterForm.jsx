import { Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/userOperation";
import {
  StyledForm,
  StyledField,
  StyledLable,
  StyledButton,
} from "components/Shareble.styled";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(8).required(),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <StyledLable>
          Name:
          <StyledField type="text" name="name" />
          <ErrorMessage name="name" />
        </StyledLable>
        <StyledLable>
          Email:
          <StyledField type="email" name="email" />
          <ErrorMessage name="email" />
        </StyledLable>
        <StyledLable>
          Password:
          <StyledField type="password" name="password" />
          <ErrorMessage name="password" />
        </StyledLable>
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
