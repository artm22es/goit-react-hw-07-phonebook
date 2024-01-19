import { useDispatch, useSelector } from 'react-redux';
import { ContactListWrapper, ButtonDelete } from './ContactList.styled';
import { deleteContact, getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactListWrapper>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </ButtonDelete>
        </li>
      ))}
    </ContactListWrapper>
  );
};
