import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import classes from './Checkout.module.css';

class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
            </div>
        );
    }
}

export default Checkout;