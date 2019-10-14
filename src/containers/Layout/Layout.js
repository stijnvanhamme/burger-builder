import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';


class Layout extends React.Component {
    
    state = {
        showSideDrawer: false
    };
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggledHandler = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer});
    }
    
    render() {
        return (
            <Wrapper>
                <Toolbar toggle={this.sideDrawerToggledHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}
                    toggle={this.sideDrawerToggledHandler} 
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}

export default Layout;