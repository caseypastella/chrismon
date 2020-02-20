import React from "react";
import AppNavbar from "./AppNavbar";
import { Container, Jumbotron, Button, Media } from "reactstrap";
import "./AppNavbar.css";
import "./Hardscapes.css";
import Footer from "./Footer";
const Hardscapes = () => {
  return (
    <div className="hardscapes">
      <div className="mb-5">
        <AppNavbar />
      </div>
      <Container className="mt-5" fluid={true}>
        <Jumbotron className="jumbotron">
          <h1 id="jumbotronTitle"> Rock and Gravel </h1>
          <p className="lead" id="jumbotronParagraph">
            {" "}
            From driveway extensions to full rock beds with shurbbery, Chrismon
            Care Landscaping can fulfill all your needs regarding services
            including rock and stone installation and gravel installation!{" "}
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
              id="img"
            />
          </Media>
          <Media body className="mediaBody" id="mediaBody">
            <Media heading className="mediaHeading" id="mediaHeading">
              Gravel
            </Media>
            Extend your existing driveway or add a gravel sidewalk to your home
            with Chrismon Care Landscaping.
          </Media>
        </Media>
        <Media className="mt-5">
          <Media left href="#">
            <Media
              object
              src={process.env.PUBLIC_URL + "/jpeg-15.jpg"}
              alt="hardscapes"
              className="mediaImg"
              id="img"
            />
          </Media>
          <Media body className="mediaBody" id="mediaBody">
            <Media heading className="mediaHeading" id="mediaHeading">
              Rock and Stone
            </Media>
            Rockwalls, retaining walls, and firepits. Chrismon Care Landscaping
            can create the perfect design to complement any existing hardscapes
            or landscapes in your yard.
          </Media>
        </Media>
        <Media className="mt-5">
          <Media left href="#">
            <Media
              object
              src={process.env.PUBLIC_URL + "/jpeg-7.jpg"}
              alt="hardscapes"
              className="mediaImg"
              id="img"
            />
          </Media>
          <Media body className="mediaBody" id="mediaBody">
            <Media heading className="mediaHeading" id="mediaHeading">
              Small stone
            </Media>
            Whether it be a walkway or a bed space, Chrismon Care Landscaping
            can install small rock beds that include shurbbery or flowers.
          </Media>
        </Media>
      </Container>
      <Footer />
    </div>
  );
};

export default Hardscapes;
