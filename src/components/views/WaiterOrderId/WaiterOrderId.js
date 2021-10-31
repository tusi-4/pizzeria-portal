import React from 'react';
import styles from './WaiterOrderId.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderId = id => (
  <div className={styles.component}>
    <h2>WaiterOrderId view</h2>
    {/* wyświetl identyfikator widoku - test */}
    {id}
  </div>
);

WaiterOrderId.propTypes = {
  id: PropTypes.string,
};

export default WaiterOrderId;