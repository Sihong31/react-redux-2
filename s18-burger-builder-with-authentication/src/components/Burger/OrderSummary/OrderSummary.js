import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
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
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </>
    );
  }
}

export default OrderSummary;