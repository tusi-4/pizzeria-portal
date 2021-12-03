import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Paper from  '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WaiterOrderNew = () => (
  <Paper className={styles.component}>
    <Card sx={{ maxWidth: 325 }}>
      <CardContent>
        <Typography>Menu: </Typography>
        <Typography>Options: </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Send order</Button>
      </CardActions>
    </Card>
  </Paper>
);

export default WaiterOrderNew;