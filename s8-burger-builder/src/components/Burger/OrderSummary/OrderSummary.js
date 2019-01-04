import React from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
        </li>
      )
    })

  return (
    <>
      <h3>Your Order</h3>
      <p>Delicious Burger with the following ingredients:</p>
      <ul>
        { ingredientSummary }
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </>
  );
}

export default OrderSummary