import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/userOperation";
import {
  StyledForm,
  StyledField,
  StyledLable,
  StyledButton,
} from "components/Shareble.styled";

const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandle = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={submitHandle}>
      <StyledForm>
        <StyledLable>
          Email:
          <StyledField type="email" name="email" />
        </StyledLable>
        <StyledLable>
          Password:
          <StyledField type="password" name="password" />
        </StyledLable>
        <StyledButton type="submit">login</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
