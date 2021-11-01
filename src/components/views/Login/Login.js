import React from 'react';
import styles from './Login.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import {Paper} from '@mui/material';

const Login = () => (
  <Paper className={styles.component}>
    <TextField sx={{mr: '10px'}} required id="outlined-basic" label="Username" variant="outlined" size="small" margin="normal" />
    <TextField sx={{mr: '10px'}} required id="outlined-basic" label="Password" variant="outlined" size="small" margin="normal" />      
    <Button sx={{mb: 0}} variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/`}>Login</Button>
  </Paper>
);

export default Login;