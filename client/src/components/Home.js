import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Example from "./Carousel";
import Cards from "./Cards";
import AppNavbar from "./AppNavbar";
import "./Home.css";
import { Container } from "reactstrap";

class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    return (
      <div>
        <div className="header">
          <AppNavbar />
          <Example />
        </div>
        <Cards />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Home);
