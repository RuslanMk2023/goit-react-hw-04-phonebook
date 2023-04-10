import { Component } from 'react';

import { ContactForm, Filter, ContactList } from 'components';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    contacts && this.setState({ contacts: JSON.parse(contacts) });
  }

  setFilter = evn => {
    this.setState({ filter: evn.target.value });
  };

  addNewContact = newContactObj => {
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContactObj],
      }),
      this.updContactsLocalStorage
    );
  };

  deleteContact = id => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }),
      this.updContactsLocalStorage
    );
  };

  updContactsLocalStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={styles.mainWrapper}>
        <h1> Phonebook: </h1>
        <ContactForm addNewContact={this.addNewContact} contacts={contacts} />

        <h2> Contacts </h2>
        <div className={styles.contentWrepper}>
          <Filter filter={filter} setFilter={this.setFilter} />
          <ContactList
            deleteContact={this.deleteContact}
            filter={filter}
            contacts={contacts}
          />
        </div>
      </div>
    );
  }
}
