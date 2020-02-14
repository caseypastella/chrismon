import React from "react";
import AppNavbar from "./AppNavbar";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col
} from "reactstrap";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/send", this.state)
      .then(response => {
        if (response.data.status === "success") {
          alert("Message Sent");
          this.resetForm();
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  resetForm() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: ""
    });
  }

  onFirstNameChange = e => {
    this.setState({ [e.target.firstName]: e.target.value });
  };
  onAddressChanged = e => {
    this.setState({ [e.target.address]: e.target.value });
  };
  onEmailChange = e => {
    this.setState({ [e.target.email]: e.target.value });
  };
  onLastNameChange = e => {
    this.setState({ [e.target.lastName]: e.target.value });
  };
  onCityChanged = e => {
    this.setState({ [e.target.city]: e.target.value });
  };
  onZipCodeChanged = e => {
    this.setState({ [e.target.zipCode]: e.target.value });
  };
  onDescriptionChanged = e => {
    this.setState({ [e.target.description]: e.target.value });
  };
  onPhoneNumberChanged = e => {
    this.setState({ [e.target.phoneNumber]: e.target.value });
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <Form className="form" onSubmit={this.onSubmit}>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="formEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="formEmail"
                  onChange={this.onEmailChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="formName">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="formFirstName"
                  onChange={this.onFirstNameChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="formlastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="formLastName"
                  onChange={this.onLastNameChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="formAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="formAddress"
              onChange={this.onAddressChanged}
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="formCity">City</Label>
                <Input
                  type="text"
                  name="city"
                  id="formCity"
                  onChange={this.state.onCityChanged}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="formState">State</Label>
                <Input
                  type="text"
                  name="state"
                  id="formState"
                  onChange={this.state.onStateChanged}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="formZip">Zip Code</Label>
                <Input
                  type="text"
                  name="zipcode"
                  id="formZip"
                  onChange={this.state.onZipCodeChanged}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="formPhoneNumber">Phone Number</Label>
                <Input
                  type="number"
                  name="phonenumber"
                  id="phonenumber"
                  onChange={this.state.onPhoneNumberChanged}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="formDescription">
                  Brief Description of Desired Services
                </Label>
                <Input
                  type="textarea"
                  name="description"
                  id="formDescription"
                  onChange={this.state.onDescriptionChanged}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="primary"> Submit! </Button>
        </Form>
      </div>
    );
  }
}
export default Contact;
