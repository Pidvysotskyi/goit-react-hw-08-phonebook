import { Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "redux/userOperation";
import {
  StyledForm,
  StyledField,
  StyledLable,
  StyledButton,
} from "components/Shareble.styled";
import * as yup from "yup";
import { selectUserError } from "redux/selectors";

const schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(8).required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectUserError);

  const submitHandle = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={submitHandle}
        validationSchema={schema}
      >
        <StyledForm>
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
          <StyledButton type="submit">log In</StyledButton>
        </StyledForm>
      </Formik>

      {error && (
        <p>
          {error} <b>Wrong password or not registered user</b>
        </p>
      )}
    </>
  );
};

export default LoginForm;
