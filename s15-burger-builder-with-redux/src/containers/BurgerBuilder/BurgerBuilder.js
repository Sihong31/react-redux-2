import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: null
  }

  componentDidMount() {
    // axios.get('https://react-my-burger-aaf4a.firebaseio.com/ingredients.json')
    //   .then(response => {
    //     this.setState({ingredients: response.data});
    //   })
    //   .catch(error => {
    //     this.setState({error: true});
    //   })
  }

  updatePurchaseState(ingredients) {
    // check purchaseable state depending on how many ingredients have been selected for burger
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  }

  render() {
    const disabledInfo = {
      ...this.props.ingredients
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
    if (this.props.ingredients) {
      burger = (
        <>
          <Burger ingredients={ this.props.ingredients } />
          <BuildControls 
            ingredientAdded={this.props.onIngredientAdded} 
            ingredientRemoved={this.props.onIngredientRemoved} 
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(this.props.ingredients)}
            price={this.props.totalPrice}
            ordered={this.purchaseHandler} />
        </>
      );
      orderSummary = (
        <OrderSummary 
          ingredients={this.props.ingredients}
          price = {this.props.totalPrice} 
          purchaseCancelled={this.purchaseCancelHandler} 
          purchaseContinued={this.purchaseContinueHandler} />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    };

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));