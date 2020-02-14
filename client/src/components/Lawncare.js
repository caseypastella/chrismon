import React from "react";
import AppNavbar from "./AppNavbar";
import { Container, Jumbotron, Button } from "reactstrap";
import "./AppNavbar.css";
const Lawncare = () => {
  return (
    <div>
      <div className="mb-5">
        <AppNavbar />
      </div>
      <Container className="mt-5" fluid={true}>
        <Jumbotron>
          <h1 className="display-3"> Pruning </h1>
          <p className="lead">
            {" "}
            Bring your trees and bushes back to life with pruning from Chrismon
            Care Landscaping{" "}
          </p>
          <p className="lead">
            <Button color="primary" href="/contact">
              {" "}
              Contact Us Today!{" "}
            </Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Lawncare;
