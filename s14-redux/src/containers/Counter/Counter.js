import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, payload: 5}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, payload: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, payload: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);