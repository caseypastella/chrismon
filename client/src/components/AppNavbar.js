import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
  UncontrolledDropdown,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavItem
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import "./AppNavbar.css";
import { Route, Router } from "react-router-dom";
import * as ROUTES from "../actions/routes";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavLink>
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavLink>
        <NavLink>
          <Logout />
        </NavLink>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavLink>
          <RegisterModal />
        </NavLink>
        <NavLink>
          <LoginModal />
        </NavLink>
      </Fragment>
    );

    return (
      <div>
        <Navbar color="dark" dark expand="sm" id="navbar">
          <NavbarBrand className="navbar-brand" href="/">
            <img
              src={process.env.PUBLIC_URL + "logo1.png"}
              width="65px"
              alt="logo"
            />{" "}
            Chrismon Care Landscaping
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="links" href="/lawncare">
                    Lawn care
                  </DropdownItem>

                  <DropdownItem className="links" href="/installs">
                    Mulch and bed installation
                  </DropdownItem>

                  <DropdownItem className="links" href="/hardscapes">
                    Hardscapes
                  </DropdownItem>

                  <DropdownItem className="links" href="/pruning">
                    Pruning and Tree care
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink href="/contact">Contact</NavLink>
            </Nav>
            <Nav className="ml-auto">
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
