import PropTypes from 'prop-types';
import { List, ListItem } from './Contacts.styled';
import { Button } from 'components/InputForm/InputForm.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, phone }) => {
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
