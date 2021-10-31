import React from 'react';
import styles from './WaiterOrderId.module.scss';

const WaiterOrderId = id => (
  <div className={styles.component}>
    <h2>WaiterOrderId view</h2>
    {/* wyświetl identyfikator widoku */}
    {id} {/* ??? zgłupiałam */}
  </div>
);

export default WaiterOrderId;