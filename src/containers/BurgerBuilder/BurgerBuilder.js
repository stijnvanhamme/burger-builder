import React from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

//import axios from '../../axios-orders';


import Wrapper from '../../hoc/Wrapper/Wrapper';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './BurgerBuilder.module.css';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends React.Component {
    
    state = {
        purchaseable: false,
        purchasing: false,
        loading: false
    };


    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(el => {
            return ingredients[el];
        }).reduce((newSum, el) => {
            return newSum + el;
        }, 0);
        
        return sum > 0;
    }
    

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
        
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }
    
    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary ingredients={this.props.ings} cancelOrder={this.purchaseCancelHandler} continueOrder={this.purchaseContinueHandler} />
        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return(
            <Wrapper>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ings}/>
                <div className={classes.Price}>Current burger price: €{this.props.price}</div>
                <BuildControls 
                    ingredientAdded={this.props.onIngredientAdded} 
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabledInfo={disabledInfo} 
                    purchaseable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}/>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: 'ADD_INGREDIENT', ingredientName:ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName:ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);