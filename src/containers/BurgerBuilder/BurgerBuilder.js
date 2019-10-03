import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Wrapper from '../../hoc/Wrapper';
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
        purchaseable: false
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
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Wrapper>
                <Burger ingredients={this.state.ingredients}/>
                <div className={classes.Price}>Current burger price: €{this.state.totalPrice}</div>
                <BuildControls 
                    ingredientAdded={this.addIngredient} 
                    ingredientRemoved={this.removeIngredient}
                    disabledInfo={disabledInfo} 
                    purchaseable={this.state.purchaseable}/>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;