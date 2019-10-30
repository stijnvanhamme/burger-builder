import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import {INGREDIENT_PRICES} from '../../config/prices';
import classes from './BurgerBuilder.module.css';

class BurgerBuilder extends React.Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: INGREDIENT_PRICES['bread'],
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
        
        this.setState({purchaseable: sum > 0});
    }
    
    addIngredient = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredient = (type) => {
        if(this.state.ingredients[type] > 0) {
            const updatedCount = this.state.ingredients[type] - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updatedCount;

            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

            this.updatePurchaseState(updatedIngredients);
        }
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        
        this.setState({loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Stijn Van Hamme',
                address: {
                    street: 'Teststreet 1',
                    postalCode: '1234',
                    country: 'Belgium'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'FAST'
        };
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false, purchasing: false});
            });
    }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary ingredients={this.state.ingredients} cancelOrder={this.purchaseCancelHandler} continueOrder={this.purchaseContinueHandler} />
        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return(
            <Wrapper>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <div className={classes.Price}>Current burger price: €{this.state.totalPrice}</div>
                <BuildControls 
                    ingredientAdded={this.addIngredient} 
                    ingredientRemoved={this.removeIngredient}
                    disabledInfo={disabledInfo} 
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;