import React from 'react';
import styles from './WaiterOrderId.module.scss';
import {useParams} from 'react-router-dom';

const WaiterOrderId = () => {
  let {id} = useParams();

  return (
    <div className={styles.component}>
      <h2>WaiterOrderId view</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default WaiterOrderId;