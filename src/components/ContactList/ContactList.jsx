import PropTypes from 'prop-types';

import { ContactListItems } from './ContactListItems';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map((contact, idex) => (
        <ContactListItems
          contactData={contact}
          deleteContact={deleteContact}
          key={idex}
        />
      ))}
  </ul>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
