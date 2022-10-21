import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/userOperation";
import {
  StyledForm,
  StyledField,
  StyledLable,
  StyledButton,
} from "components/Shareble.styled";

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
    >
      <StyledForm>
        <StyledLable>
          Name:
          <StyledField type="text" name="name" />
        </StyledLable>
        <StyledLable>
          Email:
          <StyledField type="email" name="email" />
        </StyledLable>
        <StyledLable>
          Password:
          <StyledField type="password" name="password" />
        </StyledLable>
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
