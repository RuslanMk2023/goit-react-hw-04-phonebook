import { useEffect, useState} from 'react';

import { ContactForm, Filter, ContactList } from 'components';

import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  const [filter, setFilter] = useState('')

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const addNewContact = newContactObj =>
    setContacts([...contacts, newContactObj]);

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const getContactsForShow = () => {
    const filterValue = filter.trim().toLowerCase();
    return filterValue === ''
      ? contacts
      : contacts.filter(({ name }) => name.toLowerCase().includes(filterValue));
  };

  return (
    <div className={styles.mainWrapper}>
      <h1> Phonebook: </h1>
      <ContactForm addNewContact={addNewContact} contacts={contacts} />

      <h2> Contacts </h2>
      <div className={styles.contentWrepper}>
        <Filter filter={filter} setFilter={setFilter} />
        <ContactList
          deleteContact={deleteContact}
          contacts={getContactsForShow()}
        />
      </div>
    </div>
  );
};