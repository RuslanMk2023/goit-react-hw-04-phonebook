import PropTypes from 'prop-types';

import styles from './ContactListItems.module.css';

export const ContactListItems = ({contactData: { id, name, number }, deleteContact,}) => (
  <li className={styles.contactWrepper} key={id}>
    <span> {`${name}  ${number}`} </span>
    <button className={styles.deleteButton} onClick={() => deleteContact(id)}>
      Delete
    </button>
  </li>
);

ContactListItems.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contactData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};