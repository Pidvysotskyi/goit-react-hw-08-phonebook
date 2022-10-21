import { InputForm } from "components/InputForm/InputForm";
import { ContactList } from "components/ContactList/ContactList";
import { selectContacts, selectIsLoading, selectError } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import Box from "components/Box";
import { fetchContacts } from "redux/contactsOperations";
import { useEffect } from "react";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p="20px" fontSize="20px" display="flex">
      <InputForm />
      {contacts.length > 0 && <ContactList />}
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <b>{error}</b>}
    </Box>
  );
};

export default Contacts;
