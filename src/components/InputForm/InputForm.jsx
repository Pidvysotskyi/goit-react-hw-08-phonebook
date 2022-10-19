import { useState } from "react";
import { FormContainer, Lable, Input, Button } from "./InputForm.styled";
import { selectContacts } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsOperations";

export const InputForm = () => {
  const [name, setName] = useState("");
  const [number, setPhone] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onInputName = event => {
    setName(event.target.value);
  };

  const onInputPhone = event => {
    setPhone(event.target.value);
  };

  const checkContactAvailability = newData => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
    );
  };

  const formSubmitHandler = newData => {
    if (checkContactAvailability(newData)) {
      alert(`${newData.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newData));
  };

  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const data = { name, number };

    formSubmitHandler(data);
    formReset();
  };

  const formReset = () => {
    setName("");
    setPhone("");
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <Lable>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onInputName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Lable>

      <Lable>
        Phone:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onInputPhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Lable>

      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};
