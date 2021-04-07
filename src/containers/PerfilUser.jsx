import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import style from '../assets/styles/components/tools/style'
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const PerfilUser = () => {
  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Typography component="h1" variant="h5">
          Perfil de usuario
        </Typography>
      </div>
        <form style={style.form}>
          <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                  <TextField name="nombre" variant="outlined" fullWidth label="Nombre de usuario"/>
              </Grid>
          </Grid>
        </form>
    </Container>
  )
};

export default PerfilUser;