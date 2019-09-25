import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

function Burger(props) {
    
    let ingredientList = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])].map((_, i) => {
                return <BurgerIngredient key={ing+i} type={ing} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

      if (ingredientList.length === 0) {
          ingredientList = <p>Please start adding ingredients!</p>
      }

    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredientList}
            <BurgerIngredient type='bread-bottom' />
        </div>
        
    );
}

export default Burger;