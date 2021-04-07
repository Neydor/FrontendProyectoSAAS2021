import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import style from '../assets/styles/components/tools/style'
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { loginUsuario } from '../actions/UsuarioAction';

const Login = () => {
  const[usuario,setUsuario] = useState({
    correo_electronico:"",
    password:"",
  });

  const ingresarValoresMemoria = e=> {
    const {name,value} = e.target;
    setUsuario(anterior =>({
      ...anterior,
      [name]:value
    }));
  };

  const loginUsuarioBtn = e =>{
    e.preventDefault();
    loginUsuario(usuario).then(response =>{
      console.log('login Exitoso',response);
      window.localStorage.setItem("token_seguridad",response.data.token);
    });
  }

  return (
    <Container maxWidth="xs">
      <div style={style.paper}>
        <Avatar style={style.avatar}>
          <LockOpenIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Login de Usuario
        </Typography>
        <form style={style.form}>
          <TextField name="correo_electronico" value={usuario.correo_electronico} onChange={ingresarValoresMemoria} margin="normal" variant="outlined" label="Ingrese el Email"fullWidth/>
          <TextField name="password" value={usuario.password} onChange={ingresarValoresMemoria} margin="normal" variant="outlined" type="password" label="Contraseña"fullWidth/>
          <Button type="submit" onClick={loginUsuarioBtn} fullWidth variant="contained" color="primary" style={style.submit}>
              Ingresar
          </Button>

        </form>
      </div>
    </Container>
  )
};

export default Login;