import React, { Component } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  // check if content of modal should be updated when order now button is clicked
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('modal willupdate')
  }

  render() {
    return(
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div 
          className={classes.Modal} 
          style={{
            transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
            {this.props.children}
        </div>
      </>
    );
  }
};

export default Modal;