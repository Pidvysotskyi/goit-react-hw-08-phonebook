import { selectContacts } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsOperations";
import { Formik } from "formik";
import {
  StyledForm,
  StyledField,
  StyledLable,
  StyledButton,
} from "components/Shareble.styled";

export const InputForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkContactAvailability = newData => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
    );
  };

  const submitHandle = (values, { resetForm }) => {
    if (checkContactAvailability(values)) {
      alert(`${values.name} is already in contacts`);
      resetForm();
      return;
    }
    dispatch(addContact(values));
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={submitHandle}>
      <StyledForm>
        <StyledLable>
          Name:
          <StyledField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLable>

        <StyledLable>
          Phone:
          <StyledField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLable>

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
