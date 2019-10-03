import React from 'react';

import Wrapper from '../../../hoc/Wrapper';

function OrderSummary(props) {
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
        </Wrapper>
    )
}

export default OrderSummary;