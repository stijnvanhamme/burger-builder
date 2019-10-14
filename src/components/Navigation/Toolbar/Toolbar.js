import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import classes from './Toolbar.module.css';


function Toolbar (props) {
    return (
        <header className={classes.Toolbar}>
            <HamburgerMenu toggle={props.toggle} />
            <div className={classes.Logo}><Logo /></div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;