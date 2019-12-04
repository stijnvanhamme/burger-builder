import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.module.css';


const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Enjoy your burger!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button buttonType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;