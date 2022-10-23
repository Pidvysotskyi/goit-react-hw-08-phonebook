import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  padding: 10px;
  margin-right: 50px;
`;

export const StyledField = styled(Field)`
  width: 300px;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const StyledLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
