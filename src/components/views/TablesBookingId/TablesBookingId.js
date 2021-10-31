import React from 'react';
import styles from './TablesBookingId.module.scss';
import {useParams} from 'react-router-dom';

const TablesBookingId = () => {
  let id = useParams();
  
  return (
    <div className={styles.component}>
      <h2>TablesBookingId view</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default TablesBookingId;