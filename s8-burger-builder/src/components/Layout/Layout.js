import React, { Component } from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { 
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render() {
    return (
      <>
        <Toolbar toggle={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} toggle={this.sideDrawerToggleHandler} />
        <main className= {classes.Content}>
          { this.props.children }
        </main>
      </>
    );
  }
}

export default Layout;