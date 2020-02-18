import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Example from "./Carousel";
import Cards from "./Cards";
import AppNavbar from "./AppNavbar";
import "./Home.css";
import { Container } from "reactstrap";
import Footer from "./Footer";

class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    return (
      <div className="home">
        <AppNavbar />
        <Example />

        <Cards />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Home);
