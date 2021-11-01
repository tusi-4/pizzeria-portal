import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from  '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Checkbox from '@mui/material/Checkbox';

const demoContent = [
  {id: '123', menu: 'salad with double feta 11$, ice tea with lemon'},
  {id: '234', menu: 'pizza with thin crust, olives, mushrooms, pizza with thick crust, cheese in edges, salami, pepsi'},
  {id: '345', menu: 'pizza with cream and mushrooms'},
  {id: '456', menu: 'salad, pizza, latte, espresso'},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Menu</TableCell>
          <TableCell>Prepared</TableCell>
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
              <Checkbox />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;



/* POPRZEDNI KITCHEN
import React from 'react';
import styles from './Kitchen.module.scss';

const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen view</h2>
  </div>
);

export default Kitchen;
*/