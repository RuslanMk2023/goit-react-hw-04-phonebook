import PropTypes from 'prop-types';

import styles from './Filter.module.css';

export const Filter = ({filter, setFilter }) => (
    <label htmlFor="find-input" className={styles.filterWrapper}>
      Find contacts by name:
      <input
        type="text"
        name="find"
        id="find-input"
        onChange={evn => setFilter(evn.target.value)}
        value={filter}
      />
    </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};