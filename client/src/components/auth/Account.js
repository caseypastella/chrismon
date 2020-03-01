import React from "react";
import { connect } from "react-redux";
import { attemptSendResetPasswordLink } from "../../thunks/auth";
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
  Container
} from "reactstrap";
import PropTypes from "prop-types";

class Account extends React.Component {
  state = {
    email: "",
    errors: {},
    submitted: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
  };

  onSubmit = () => {
    const email = this.email;
    this.props.attemptSendResetPasswordLink(email);
    this.setState({ submitted: true });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        {!this.state.submitted && (
          <div>
            <Container>
              <p> Need to reset your password? </p>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mb-3"
                    onChange={this.onChange}
                  />
                  <Button color="primary">Send Reset Password Link</Button>
                </FormGroup>
              </Form>
            </Container>
          </div>
        )}
        {this.state.submitted && (
          <div>
            <Container>
              <p>A Reset Password Link has been sent to {this.email}</p>
            </Container>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attemptSendResetPasswordLink: email =>
      dispatch(attemptSendResetPasswordLink(email))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
