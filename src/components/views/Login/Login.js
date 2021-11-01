import React from 'react';
import styles from './Login.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import {Paper} from '@mui/material';

const Login = () => (
  <Paper className={styles.component}>
    {/* zmienić szerokość (flexnięte w scss) */}
    <TextField className={styles.field} required id="outlined-basic" label="Username" variant="outlined" margin="normal" />
    <TextField className={styles.field} required id="outlined-basic" label="Password" variant="outlined" margin="normal" />
    <Button className={styles.field} variant="contained" component={Link} exact to={`${process.env.PUBLIC_URL}/`}>Login</Button>
  </Paper>
);

export default Login;