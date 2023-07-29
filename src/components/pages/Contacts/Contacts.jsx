import ContactsForm from 'components/Contactsform/Contactsform';
import { ContactsList } from 'components/Contactslist';
import FilterContacts from 'components/Filter/Filter';
import { fetchContacts } from 'components/redux/operations';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>
        <h1>Phonebook</h1>
        <ContactsForm />
        <div>
          <h1>Contacts</h1>
          <FilterContacts />
          <ContactsList />
        </div>
      </div>
    </>
  );
};
export default Contacts;
