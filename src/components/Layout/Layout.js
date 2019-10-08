import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';


function Layout(props) {
    return (
        <Wrapper>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Wrapper>
    );
}

export default Layout;