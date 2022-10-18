import { InputForm } from 'components/InputForm/InputForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Heading, Title } from './Contacts.styled';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <Heading>Contacts</Heading>
      <InputForm />
      {contacts.length > 0 && <Title>Contacts</Title>}
      {contacts.length > 0 && <Filter />}
      <ContactList />
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <b>{error}</b>}
    </Container>
  );
};
