import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    // classNames property can also define custom CSS classes to use with the following syntax"
    // classNames={{
    //     enter: '',
    //     enterActive: 'ModalOpen',
    //     exit: '',
    //     exitActive: 'ModalClose',
    //     appear: '',
    //     appearActive: ''
    // }}
    return (
        <CSSTransition 
            in={props.show} 
            // timeout can take object with keys that MUST be 'enter', 'exit'
            timeout={animationTiming} 
            mountOnEnter 
            unmountOnExit
            classNames="fade-slide">
            {/* CSSTransition takes trunk for property classNames, in our case 'fade-slide' and adds classes depending on state: fade-slide-enter, fade-slide-enter-active, fade-slide-exit, fade-slide-exit-active */}
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    )
};

export default modal;