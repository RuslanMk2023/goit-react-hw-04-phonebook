import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = (evn, type) => this.setState({ [type]: evn.target.value });

  onSubmitHandler = evt => {
    evt.preventDefault();
    const {
      state: { name, number },
      props: { contacts, addNewContact },
    } = this;
    const isExistingContact = contacts.some(contact => contact.name === name);

    if (isExistingContact) {
      alert(`${name} is already in contacts`);
    } else {
      addNewContact({ id: nanoid(), name, number });
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.formWrapper}>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="name-input">
            Name:
            <input
              type="text"
              name="name"
              id="name-input"
              required
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain, only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={evn => this.handleInput(evn, 'name')}
              value={name}
            />
          </label>
          <label htmlFor="tel-input">
            Number:
            <input
              type="tel"
              name="number"
              id="tel-input"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={evn => this.handleInput(evn, 'number')}
              value={number}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
