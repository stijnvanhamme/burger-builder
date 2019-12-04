import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

import { Route } from 'react-router-dom';

//import classes from './Checkout.module.css';

class Checkout extends React.Component {
    state = {
        ingredients: { },
        totalPrice: 0
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const currentIngredients = {};
        let price = 0;

        for(let param of query.entries()) {
            if(param[0] === 'price') {
                price = param[1];
            } else {
                currentIngredients[param[0]] =  +param[1];
            }
            
        }
        this.setState({ingredients: currentIngredients, totalPrice: price});
    }

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
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;