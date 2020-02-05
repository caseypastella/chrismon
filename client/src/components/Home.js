import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Example from './Carousel';
import Cards from './Cards';


class ShoppingList extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  
 


  render() {
    return <div>
    <Example />
    <Cards />

    </div>
      };
    }
    
  

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { }
)(ShoppingList);
