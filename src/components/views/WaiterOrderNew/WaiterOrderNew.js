import React from 'react';
import styles from './WaiterOrderNew.module.scss';
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

const WaiterOrderNew = () => (
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

export default WaiterOrderNew;