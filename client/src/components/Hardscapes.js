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
          <h1 className="display-3"> Hardscapes </h1>
          <p className="lead">
            {" "}
            From driveway extensions to full rock beds with shurbbery, Chrismon
            Care Landscaping can fulfill all your needs regarding services
            including brick paving, rock and stone installation, and gravel
            installation!{" "}
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
              Brick Paving
            </Media>
            Paving services including sidewalks, patios, small driveways, or any
            part of your landscape you wish to install brick pavers.
          </Media>
        </Media>
        <Media className="mt-5">
          <Media left href="#">
            <Media
              object
              src={process.env.PUBLIC_URL + "/jpeg-15.jpg"}
              alt="hardscapes"
              className="mediaImg"
            />
          </Media>
          <Media body className="mediaBody">
            <Media heading className="mediaHeading">
              Rock and Stone
            </Media>
            Rockwalls, stone edging around beds and walkways, and firepits.
            Chrismon Care Landscaping can create the perfect design to
            complement any existing hardscapes or landscapes in your yard.
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
              Gravel and Small stone
            </Media>
            Whether it be a walkway or a bed space, Chrismon Care Landscaping
            can install gravel and small stone walkways or small rock beds that
            include shurbbery.
          </Media>
        </Media>
      </Container>
      <Footer />
    </div>
  );
};

export default Hardscapes;
