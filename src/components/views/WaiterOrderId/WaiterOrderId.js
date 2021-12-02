import React from 'react';
import styles from './WaiterOrderId.module.scss';
import Paper from  '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const demoContent = [
  {
    id: '123',
    menu: 'salad, ice tea',
    options: 'double feta, lemon',
    order: 'salad with double feta 11$, ice tea with lemon 3$',
    price: '14$',
  },
];

const WaiterOrderId = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Menu</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.menu}
            </TableCell>
            <TableCell>
              {row.options}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrderId;



/* WERSJA 2 WAITER ID
import React from 'react';
import styles from './WaiterOrderId.module.scss';
import Paper from  '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const demoContent = [
  {
    id: '1',
    menu: null,
    options: null,
    order: null,
    price: null,
  },
  {
    id: '2',
    menu: null,
    options: null,
    order: null,
    price: null,
  },
  {
    id: '3',
    menu: 'salad, ice tea',
    options: 'double feta, lemon',
    order: 'salad with double feta 11$, ice tea with lemon 3$',
    price: '14$',
  },
  {
    id: '4',
    menu: 'pizza x 2, pepsi x 2',
    options: 'thin crust, olives, mushrooms, thick crust, cheese in edges, salami',
    order: 'pizza with thin crust, olives, mushrooms 26$, pizza with thick crust, cheese in edges, salami 30$, pepsi 5$',
    price: '66$',
  },
  {
    id: '5',
    menu: 'pizza',
    options: 'cream, mushrooms',
    order: 'pizza with cream and mushrooms 24$',
    price: '24$',
  },
  {
    id: '6',
    menu: 'salad, pizza, latte, espresso',
    options: 'red pepper, green pepper, basil',
    order: 'salad 9$, pizza 22$, latte 4$, espresso 3$',
    price: '38$',
  },
];

const WaiterOrderId = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Menu</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.menu}
            </TableCell>
            <TableCell>
              {row.options}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>
              {row.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrderId;
*/



/* WERSJA 1 WAITER ID
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
*/