import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

export const ContactForm = ({ contacts, addNewContact }) => {
  const [inputData, setInputData] = useState({ name: '', number: '',});
  const { name, number } = inputData;

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputData(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const isExistingContact = contacts.some(contact => contact.name === name);

    if (isExistingContact) {
      alert(`${name} is already in contacts`);
    } else {
      addNewContact({ id: nanoid(), name, number });
      setInputData({name: '',  number: ''})
    }
  };


  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name-input">
          Name:
          <input
            type="text"
            name="name"
            id="name-input"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain, only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={evn => handleInputChange(evn)}
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
            onChange={evn => handleInputChange(evn)}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

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
