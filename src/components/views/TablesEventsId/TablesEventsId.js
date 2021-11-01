import React from 'react';
import styles from './TablesEventsId.module.scss';
import {useParams} from 'react-router-dom';

const TablesEventsId = () => {
  let {id} = useParams();
  
  return (
    <div className={styles.component}>
      <h2>TablesEventsId view</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default TablesEventsId;