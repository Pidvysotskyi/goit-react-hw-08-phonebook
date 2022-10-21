import { List, ListItem } from "./ContactList.styled";
import { selectContacts, selectFilter } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsOperations";
import { Filter } from "components/Filter/Filter";
import Box from "components/Box";
import { StyledButton } from "components/Shareble.styled";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
    <Box pt="10px" pr="10px" pb="10px" pl="50px" borderLeft="solid black 1px">
      <Filter />
      <List>
        {visibleContacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <StyledButton onClick={() => onDelete(id)}>Delete</StyledButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
