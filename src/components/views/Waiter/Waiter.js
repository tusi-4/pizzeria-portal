import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Waiter = id => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>Order New</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/${id}`}>Order Id</Link>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.array,
};

export default Waiter;