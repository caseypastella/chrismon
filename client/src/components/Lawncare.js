import React from "react";
import AppNavbar from "./AppNavbar";
import { Container, Jumbotron, Button, Media } from "reactstrap";
import "./AppNavbar.css";
import Footer from "./Footer";
import "./Lawncare.css";
const Lawncare = () => {
  return (
    <div className="lawncare">
      <div className="mb-5">
        <AppNavbar />
      </div>
      <Container className="mt-5" fluid={true}>
        <Jumbotron className="jumbotron">
          <h1 className="display-3"> Lawn Care </h1>
          <p className="lead">
            {" "}
            Professional Lawn care provided by Chrismon Care Landscaping
            including lawn mowing, weed eating, edging, grass seed, aerating,
            and weed maintenance!{" "}
          </p>
          <p className="lead">
            <Button color="primary" href="/contact">
              {" "}
              Contact Us Today!{" "}
            </Button>
          </p>
        </Jumbotron>
      </Container>
      <Container className=" container mt-5" fluid={true}>
        <Media>
          <Media left href="#">
            <Media
              object
              src={process.env.PUBLIC_URL + "/jpeg-11.jpg"}
              alt="hardscapes"
              className="mediaImg"
            />
          </Media>
          <Media body className="mediaBody">
            <Media heading className="mediaHeading">
              Lawn Mowing, Weed Eating, and Edging
            </Media>
            Our typical lawn care maintenance schedule for our customers always
            includes mowing the lawn, weed eating, and edging as well.
          </Media>
        </Media>
        <Media className="mt-5">
          <Media left href="#">
            <Media
              object
              src={process.env.PUBLIC_URL + "/jpeg-5.jpg"}
              alt="hardscapes"
              className="mediaImg"
            />
          </Media>
          <Media body className="mediaBody">
            <Media heading className="mediaHeading">
              Grass seed and Aeration
            </Media>
            Bring your lawn back to life or maintain your existing beautiful
            yard with or seasonal aerating services and grass seeding as well.
          </Media>
        </Media>
        <Media className="mt-5">
          <Media left href="#">
            <Media
              object
              src={process.env.PUBLIC_URL + "/jpeg-7.jpg"}
              alt="hardscapes"
              className="mediaImg"
            />
          </Media>
          <Media body className="mediaBody">
            <Media heading className="mediaHeading">
              Weed Maintenance
            </Media>
            Is your lawn filled with unwanted weeds? Chrismon Care Landscaping
            is trained and certified by the state of Virginia to maintain and
            rid your lawn of unwanted weed that will ruin your beautiful lawn.
          </Media>
        </Media>
      </Container>
      <Footer />
    </div>
  );
};

export default Lawncare;
