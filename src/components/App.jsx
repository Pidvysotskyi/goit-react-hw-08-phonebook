import { InputForm } from './InputForm/InputForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container, Heading, Title } from './App.styled';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { addContact } from 'redux/operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = newData => {
    newData.id = nanoid();
    if (checkContactAvailability(newData)) {
      alert(`${newData.name} is already in contacts`);
      return;
    }
    console.log(newData);
    dispatch(addContact(newData));
  };

  const checkContactAvailability = newData => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
    );
  };

  const contactDeleteHandler = contactId => {
    // dispatch(removeContact(contactId));
    console.log(contactId);
  };

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  const visibleContacts = getFilteredContacts();
  console.log(visibleContacts);

  return (
    <Container>
      <Heading>PhoneBook</Heading>
      <InputForm onSubmit={formSubmitHandler} />
      {contacts.length > 0 && <Title>Contacts</Title>}
      {contacts.length > 0 && (
        <Filter filterValue={filter} onValueChange={changeFilter} />
      )}
      <Contacts contacts={visibleContacts} onDelete={contactDeleteHandler} />
    </Container>
  );
};
