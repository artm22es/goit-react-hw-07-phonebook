import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      {isLoading && !error && <b>Request in progress...</b>}
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
