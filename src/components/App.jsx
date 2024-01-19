import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      {contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <p>You don't have any contacts yet</p>
      )}

      <GlobalStyle />
    </Layout>
  );
};
