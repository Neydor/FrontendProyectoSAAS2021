import React from 'react';
import {ThemeProvider as MuithemeProvider } from "@material-ui/core/styles" 
import { BrowserRouter, Route,Switch, Router} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import theme from '../assets/theme/theme';
import {Button, Grid, TextField} from "@material-ui/core";
const App = () => (
    <MuithemeProvider theme={theme}>
    <BrowserRouter>
        <Layout>
        <Grid container>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>
            </Grid>
            </Layout>
    </BrowserRouter>
    </MuithemeProvider>
);

export default App;