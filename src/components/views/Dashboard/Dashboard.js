import React from 'react';
import styles from './Dashboard.module.scss';
import Paper from  '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const eventsDemoContent = [
  {event: 'Event 666', table: '5', hour: '12:00'},
  {event: 'Event 656', table: '1', hour: '13:00'},
];

const bookingsDemoContent = [
  {booking: 'Booking 999', table: '2', hour: '12:00'},
  {booking: 'Booking 989', table: '6', hour: '13:00'},
  {booking: 'Booking 979', table: '3', hour: '14:00'},
  {booking: 'Booking 969', table: '4', hour: '14:30'},
  {booking: 'Booking 959', table: '2', hour: '15:00'},
  {booking: 'Booking 949', table: '6', hour: '15:00'},
  {booking: 'Booking 939', table: '3', hour: '15:30'},
];

const Dashboard = () => (
  <Paper className={styles.component}>
    <Table sx={{mb: '30px'}}>
      <TableHead>
        <TableRow>
          <TableCell>Events</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Table</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {eventsDemoContent.map(row => (
          <TableRow key={row.event}>
            <TableCell component="th" scope="row">
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${row.event}`}>{row.event}</Button>
            </TableCell>
            <TableCell>
              {row.hour}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Bookings</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Table</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {bookingsDemoContent.map(row => (
          <TableRow key={row.booking}>
            <TableCell component="th" scope="row">
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.booking}`}>{row.booking}</Button>
            </TableCell>
            <TableCell>
              {row.hour}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;