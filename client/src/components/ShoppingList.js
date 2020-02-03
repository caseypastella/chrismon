import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
  }

  render() {
    return 
    
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { }
)(ShoppingList);
