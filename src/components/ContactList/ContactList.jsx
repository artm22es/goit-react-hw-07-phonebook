import { useDispatch, useSelector } from 'react-redux';
import { ContactListWrapper, ButtonDelete } from './ContactList.styled';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ContactListWrapper>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <ButtonDelete onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </ButtonDelete>
        </li>
      ))}
    </ContactListWrapper>
  );
};
