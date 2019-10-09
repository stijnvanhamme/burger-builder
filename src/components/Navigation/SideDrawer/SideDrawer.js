import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper';

import classes from './SideDrawer.module.css';

function SideDrawer (props) {
    
    const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close]

    return (
        <Wrapper>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}><Logo /></div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper>
    );
}

export default SideDrawer;