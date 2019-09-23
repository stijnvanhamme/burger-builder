import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

function Burger(props) {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom' />
        </div>
        
    );
}

export default Burger;