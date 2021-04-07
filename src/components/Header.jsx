import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { Toolbar, IconButton, Typography, makeStyles, Button, Avatar } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  seccionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  seccionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  grow:{
    flexGrow:1
  },
  avatarSize:{
    width:40,
    height:40
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <Toolbar>
      <IconButton color="inherit">
        <i className="material-icons">menu</i>
      </IconButton>
      <Typography variant="h6">Proyecto de SAAS</Typography>
      <div className={classes.grow}></div>
      <div className={classes.seccionDesktop}>
      <Button color="inherit">
        Salir
      </Button>
      <Button color="inherit">
        {"Nombre de Usuario"}
      </Button>
      <Avatar src={logo}>

      </Avatar>
      </div>
      <div className={classes.seccionMobile}>
          <IconButton color="inherit">
            <i className="material-icons">more_vert</i>
          </IconButton>
      </div>
      
    </Toolbar>
  );
}
export default Header;
