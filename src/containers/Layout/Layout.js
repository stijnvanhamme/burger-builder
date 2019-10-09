import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';


class Layout extends React.Component {
    
    state = {
        showSideDrawer: true
    };
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render() {
        return (
            <Wrapper>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} 
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}

export default Layout;