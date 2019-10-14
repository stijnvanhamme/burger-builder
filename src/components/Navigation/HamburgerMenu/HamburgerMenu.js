import React from 'react';

import classes from './HamburgerMenu.module.css';

import burgerMenu from '../../../assets/images/burger-menu.png';

function HamburgerMenu(props) {
    return (
        <div className={classes.Hamburger} onClick={props.toggle}>
                <img src={burgerMenu} alt='hamburger menu icon' />
        </div>
    );
}


export default HamburgerMenu;