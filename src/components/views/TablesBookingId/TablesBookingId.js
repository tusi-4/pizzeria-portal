import React from 'react';
import styles from './TablesBookingId.module.scss';
import {useParams} from 'react-router-dom';
import Paper from  '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TablesBookingId = () => {
  let {id} = useParams();
  
  return (
    <Paper className={styles.component}>
      <Card sx={{ maxWidth: 325 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>{id}</Typography>
          <Typography>Table: </Typography>
          <Typography>Hour: </Typography>
          <Typography>People: </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Edit</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default TablesBookingId;