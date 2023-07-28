import { useDispatch } from 'react-redux';
import ContactsForm from './contactsform/contactsform';
import Contacts from './contactslist/contactslist';
import FilterContacts from './filter/filter';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <div>
        <h2>Contacts</h2>
        <FilterContacts />
        <Contacts />
      </div>
    </div>
  );
};
export default App;
