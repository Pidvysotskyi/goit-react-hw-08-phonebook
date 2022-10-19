import { InputForm } from 'components/InputForm/InputForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Heading, Title } from './Contacts.styled';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectIsLoggedIn,
} from 'redux/selectors';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLogedIn = useSelector(selectIsLoggedIn);

  if (!isLogedIn) {
    return <p>Please log in or Register to use Contact book</p>;
  }

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

export default Contacts;
