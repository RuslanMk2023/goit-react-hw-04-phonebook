import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;

    return (
      <div className={styles.filterWrapper}>
        <label htmlFor="find-input">Find contacts by name:</label>
        <input
          type="text"
          name="find"
          id="find-input"
          onChange={evn => setFilter(evn)}
          value={filter}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};