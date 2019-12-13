import React from 'react';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

import { Route } from 'react-router-dom';

//import classes from './Checkout.module.css';

class Checkout extends React.Component {
    

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} {...props} />)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);