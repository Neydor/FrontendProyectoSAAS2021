import React from 'react';
import { AppBar } from "@material-ui/core"
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => (
    <AppBar position="static">
        <Header />
        {children}
        <Footer />
    </AppBar>
)
export default Layout;