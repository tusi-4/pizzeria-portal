import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = id => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>Booking Id</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Booking New</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/${id}`}>Events Id</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Events New</Link>
  </div>
);

export default Tables;