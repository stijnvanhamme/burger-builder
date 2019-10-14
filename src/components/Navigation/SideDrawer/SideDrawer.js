import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

import classes from './SideDrawer.module.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function SideDrawer (props) {
    
    const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close]

    return (
        <Wrapper>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <HamburgerMenu toggle={props.toggle} />
                <nav>
                    <NavigationItems />
                </nav>
                <div className={classes.Logo}><Logo /></div>
            </div>
        </Wrapper>
    );
}

export default SideDrawer;