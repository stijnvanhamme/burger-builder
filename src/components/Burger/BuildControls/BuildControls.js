import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

function BuildControls(props) {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
    ];

    return(
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return (<BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)} 
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabledInfo[ctrl.type]}/>
                );
            })}
            <button 
            className={classes.OrderButton} 
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;