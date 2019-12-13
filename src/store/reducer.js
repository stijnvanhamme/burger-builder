import * as actionTypes from './actions';
import { INGREDIENT_PRICES } from '../config/prices';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: INGREDIENT_PRICES['bread']
};

const reducer = (state = initialState, action) => {
    let newState = {
        ...state
    };

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            newState = {
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            break;
        case actionTypes.REMOVE_INGREDIENT:
            newState = {
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
            break;
        default:
            break;
    }

    console.log(action.type, action.ingredientName, newState);
    return newState;
};

export default reducer;