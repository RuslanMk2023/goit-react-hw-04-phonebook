import PropTypes from 'prop-types';

import styles from './Filter.module.css';

export const Filter = ({ filterValue, setFilterValue }) => (
    <label htmlFor="find-input" className={styles.filterWrapper}>
      Find contacts by name:
      <input
        type="text"
        name="find"
        id="find-input"
        onChange={evn => setFilterValue(evn)}
        value={filterValue}
      />
    </label>
);

Filter.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};