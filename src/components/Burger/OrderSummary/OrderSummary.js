import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

function  OrderSummary (props) {
    
    const ingredientSummary = Object.keys(props.ingredients).map(el => {
        return <li key={el}><span style={{textTransform: 'capitalize'}}>{el}</span>: {props.ingredients[el]}</li>
    });

    return (
        <Wrapper>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancelOrder} buttonType='Danger'>CANCEL</Button>
            <Button clicked={props.continueOrder} buttonType='Success'>CONTINUE</Button>
        </Wrapper>
    );
       
}

export default OrderSummary;