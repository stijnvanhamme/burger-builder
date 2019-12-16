import React from 'react';

import { useAuth0 } from "../../../react-auth0-spa";
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

function NavigationItems () {
    const { logout } = useAuth0();

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/builder' active>Burger Builder</NavigationItem>
            <NavigationItem link='/checkout' >Checkout</NavigationItem>
            <button className={classes.LogoutButton}onClick={() => logout()}>Log out</button>
        </ul>
    );
}

export default NavigationItems;