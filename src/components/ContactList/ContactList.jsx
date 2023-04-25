import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return (
    <List>
      {contacts.map(contact => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          )
        );
      })}
    </List>
  );
}
