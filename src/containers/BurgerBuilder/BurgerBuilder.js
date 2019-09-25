import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';
import {INGREDIENT_PRICES} from '../../config/prices';

class BurgerBuilder extends React.Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: INGREDIENT_PRICES['bread']
    };

    addIngredient = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    };

    removeIngredient = (type) => {
        if(this.state.ingredients[type] > 0) {
            const updatedCount = this.state.ingredients[type] - 1;
        
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updatedCount;

            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        }
    };
    
    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Current burger price: €{this.state.totalPrice}</div>
                <BuildControls ingredientAdded={this.addIngredient} ingredientRemoved={this.removeIngredient}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;