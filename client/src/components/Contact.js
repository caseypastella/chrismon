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
import "./Contact.css";
import Footer from "./Footer";

class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    address: "",
    city: "",
    stateName: "",
    zipCode: "",
    phoneNumber: ""
  };

  onSubmit = e => {
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      description: this.state.description,
      address: this.state.address,
      city: this.state.city,
      stateName: this.state.stateName,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber
    };
    e.preventDefault();
    axios
      .post("http://localhost:3000/send", data)
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
      phoneNumber: null
    });
  }

  render() {
    return (
      <div className="contactpage">
        <AppNavbar />
        <div>
          <Container fluid={true}>
            <Form className="form" onSubmit={this.onSubmit}>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="formEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="formEmail"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={this.state.firstName}
                      onChange={e =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={this.state.lastName}
                      onChange={e =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  value={this.state.address}
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      value={this.state.city}
                      onChange={e => this.setState({ city: e.target.value })}
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
                      value={this.state.stateName}
                      onChange={e =>
                        this.setState({ stateName: e.target.value })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="zipCode">Zip Code</Label>
                    <Input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      value={this.state.zipCode}
                      onChange={e => this.setState({ zipCode: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={e =>
                        this.setState({ phoneNumber: e.target.value })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="description">
                      Brief Description of Desired Services
                    </Label>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      value={this.state.description}
                      onChange={e =>
                        this.setState({ description: e.target.value })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" type="submit">
                {" "}
                Submit!{" "}
              </Button>
            </Form>
          </Container>
        </div>
        <div>
          {" "}
          <Footer />
        </div>
      </div>
    );
  }
}
export default Contact;
