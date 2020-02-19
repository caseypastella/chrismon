import React from "react";
import AppNavbar from "./AppNavbar";
import { Container, Jumbotron, Button, Media } from "reactstrap";
import "./AppNavbar.css";
import Footer from "./Footer";
import "./Installs.css";
const Installs = () => {
  return (
    <div className="Installs">
      <div className="mb-5">
        <AppNavbar />
      </div>
      <Container className="mt-5" fluid={true}>
        <Jumbotron className="jumbotron">
          <h1 className="display-3"> Mulch and Sod Installation </h1>
          <p className="lead">
            {" "}
            Give your flower beds a new coat of mulch or install a new bed
            anywhere on your landscape with Chrismon Care Landscaping!{" "}
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
              Mulch Installation
            </Media>
            Chrismon Care Landscaping can install high quality mulch in any of
            your existing bed spaces.
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
              New Bed Space Installation
            </Media>
            New bed space areas can be installed on your landscape by cutting
            out exisiting sod or enlarging existing bed spaces. Any desired
            flowers or shrubbery can be installed as well inside your new bed
            space.
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
              Sod Installation
            </Media>
            If you have existing grass you would like to get rid of or add a new
            breed of grass into your landscape, Chrismon Care Landscaping can
            remove and install new Rye, Bermuda, or Fescue grass anywhere in
            your landscape.
          </Media>
        </Media>
      </Container>
      <Footer />
    </div>
  );
};

export default Installs;
