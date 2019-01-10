import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

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
        <Toolbar 
          toggle={this.sideDrawerToggleHandler}
          isAuthenticated={this.props.isAuthenticated} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          toggle={this.sideDrawerToggleHandler} 
          isAuthenticated={this.props.isAuthenticated} />
        <main className= {classes.Content}>
          { this.props.children }
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);