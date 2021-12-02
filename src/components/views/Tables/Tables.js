import React from 'react';
import styles from './Tables.module.scss';
import Paper from  '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';

const demoContent = [
  {hour: '12:00', tab1: null, tab2: 'booked', tab3: null, tab4: null, tab5: 'event', tab6: null},
  {hour: '12:30', tab1: null, tab2: null, tab3: null, tab4: null, tab5: 'event', tab6: null},
  {hour: '13:00', tab1: 'event', tab2: null, tab3: null, tab4: null, tab5: null, tab6: 'booked'},
  {hour: '13:30', tab1: 'event', tab2: null, tab3: null, tab4: null, tab5: null, tab6: null},
  {hour: '14:00', tab1: 'event', tab2: null, tab3: 'booked', tab4: null, tab5: null, tab6: null},
  {hour: '14:30', tab1: null, tab2: null, tab3: null, tab4: 'booked', tab5: null, tab6: null},
  {hour: '15:00', tab1: null, tab2: 'booked', tab3: null, tab4: null, tab5: null, tab6: 'booked'},
  {hour: '15:30', tab1: null, tab2: null, tab3: null, tab4: null, tab5: 'booked', tab6: null},
];

const Tables = () => (
  <Paper className={styles.component}>
    <p>Wybór daty i godziny - pickery?</p>
    <Button to={`${process.env.PUBLIC_URL}/booking/new`}>New booking</Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
          <TableCell>Table 5</TableCell>
          <TableCell>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.hour}>
            <TableCell component="th" scope="row">
              {row.hour}
            </TableCell>
            <TableCell>
              <Button>{row.tab1}</Button>
            </TableCell>
            <TableCell>
              <Button>{row.tab2}</Button>
            </TableCell>
            <TableCell>
              <Button>{row.tab3}</Button>
            </TableCell>
            <TableCell>
              <Button>{row.tab4}</Button>
            </TableCell>
            <TableCell>
              <Button>{row.tab5}</Button>
            </TableCell>
            <TableCell>
              <Button>{row.tab6}</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
  

);

export default Tables;



/* POPRZEDNI TABLES
import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = id => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/due222`}>Booking Id</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Booking New</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/rike333`}>Events Id</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Events New</Link>
  </div>
);

export default Tables;
*/