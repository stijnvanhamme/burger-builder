import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

function NavigationItems () {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/builder' active>Burger Builder</NavigationItem>
            <NavigationItem link='/checkout' >Checkout</NavigationItem>
        </ul>
    );
}

export default NavigationItems;