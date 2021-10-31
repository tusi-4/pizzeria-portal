import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = id => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/booking/${id}`}>Booking Id</Link>
    <Link to={`${process.env.PUBLIC_URL}/booking/new`}>Booking New</Link>
    <Link to={`${process.env.PUBLIC_URL}/events/${id}`}>Events Id</Link>
    <Link to={`${process.env.PUBLIC_URL}/events/new`}>Events New</Link>
  </div>
);

export default Tables;