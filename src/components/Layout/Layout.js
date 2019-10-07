import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';


function Layout(props) {
    return (
        <Wrapper>
            <Toolbar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Wrapper>
    );
}

export default Layout;