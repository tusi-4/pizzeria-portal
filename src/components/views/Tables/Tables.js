import React from 'react';
import styles from './Tables.module.scss';
import Paper from  '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const demoContent = [
  {hour: '12:00', tab1: null, tab2: 'Booking 999', tab3: null, tab4: null, tab5: 'Event 666', tab6: null},
  {hour: '12:30', tab1: null, tab2: null, tab3: null, tab4: null, tab5: 'Event 666', tab6: null},
  {hour: '13:00', tab1: 'Event 656', tab2: null, tab3: null, tab4: null, tab5: null, tab6: 'Booking 989'},
  {hour: '13:30', tab1: 'Event 656', tab2: null, tab3: null, tab4: null, tab5: null, tab6: null},
  {hour: '14:00', tab1: 'Event 656', tab2: null, tab3: 'Booking 979', tab4: null, tab5: null, tab6: null},
  {hour: '14:30', tab1: null, tab2: null, tab3: null, tab4: 'Booking 969', tab5: null, tab6: null},
  {hour: '15:00', tab1: null, tab2: 'Booking 959', tab3: null, tab4: null, tab5: null, tab6: 'Booking 949'},
  {hour: '15:30', tab1: null, tab2: null, tab3: 'Booking 939', tab4: null, tab5: null, tab6: null},
];

const Tables = () => (
  <Paper className={styles.component}>
    <Button sx={{mr: '10px'}}  variant="contained" to={process.env.PUBLIC_URL + '/tables/booking/new'} component={Link}>New booking</Button>
    <Button sx={{mr: '10px'}}  variant="contained" to={process.env.PUBLIC_URL + '/tables/events/new'} component={Link}>New event</Button>
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
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${row.tab1}`}>{row.tab1}</Button>
            </TableCell>
            <TableCell>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.tab2}`}>{row.tab2}</Button>
            </TableCell>
            <TableCell>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.tab3}`}>{row.tab3}</Button>
            </TableCell>
            <TableCell>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.tab4}`}>{row.tab4}</Button>
            </TableCell>
            <TableCell>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${row.tab5}`}>{row.tab5}</Button>
            </TableCell>
            <TableCell>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.tab6}`}>{row.tab6}</Button>
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