import React from "react";
import AppNavbar from "./AppNavbar";
import { Container, Jumbotron, Button, Media } from "reactstrap";
import "./AppNavbar.css";
import Footer from "./Footer";
import "./Pruning.css";
const Pruning = () => {
  return (
    <div className="pruning">
      <div className="mb-5">
        <AppNavbar />
      </div>
      <Container className="mt-5" fluid={true}>
        <Jumbotron>
          <h1 className="display-3"> Pruning and Tree Care </h1>
          <p className="lead">
            {" "}
            Pruning done by a trained professional with years of experience in
            pruning various types of shrubbery and trees in many different types
            of landscapes. Keep your shrubs and trees manicured and healthy with
            Chrismon Care Landscaping!{" "}
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
              Shrubbery
            </Media>
            From large shrubs to small bushes, Chrismon care landscaping can
            give them a desired look not only to manicure them but also to make
            them healthier plants!
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
              Trees
            </Media>
            Are Tree branches hanging over your house? Are you worried they may
            fall onto your house or loved ones? Chrismon Care Landscaping can
            take old dead branches out and lift the trees in your yard up to let
            light through and create a safer landscape.
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
              Cutbacks
            </Media>
            Old and unmaintained plants such as roses and laraiope need to be
            cutback during certain times of the year. Chrismon Care Landscaping
            will cutback the dead parts of your plants and get them ready to
            grow back into beatiful healthy plants for the next season.
          </Media>
        </Media>
      </Container>
      <Footer />
    </div>
  );
};

export default Pruning;
