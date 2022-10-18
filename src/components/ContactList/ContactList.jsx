import { List, ListItem } from './Contacts.styled';
import { Button } from 'components/InputForm/InputForm.styled';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <List>
      {visibleContacts.map(({ name, id, phone }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{phone}</span>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </ListItem>
        );
      })}
    </List>
  );
};
