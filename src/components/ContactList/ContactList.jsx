import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;

    return (
      <div className={styles.contactWrepper}>
        <ul>
          {contacts.length > 0 &&
            contacts.map(({ id, name, number }) => {

              const isFoundByFilter = name
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase());

              const isShowContact = filter.length === 0 || isFoundByFilter;

              return (
                isShowContact && (
                  <li key={id}>
                    {`${name}  ${number}`}
                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteContact(id)}
                    >
                      Delete
                    </button>
                  </li>
                )
              );
            })}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};