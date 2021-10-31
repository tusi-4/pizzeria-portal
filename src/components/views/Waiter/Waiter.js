import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = id => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/order/new`}>Order New</Link>
    <Link to={`${process.env.PUBLIC_URL}/order/${id}`}>Order Id</Link>
  </div>
);

export default Waiter;