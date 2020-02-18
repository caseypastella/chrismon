import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./Cards.css";

const Cards = props => {
  return (
    <div>
      <Container fluid={true} className="container">
        <Row>
          <Col sm="6">
            <Card className="card1">
              <CardImg
                top
                width="100%"
                src={process.env.PUBLIC_URL + "/jpeg-10.jpg"}
                alt="Card Image cap"
              />
              <CardBody>
                <CardTitle className="cardtitle">Hardscapes</CardTitle>
                <CardText className="cardtext">
                  Make your dream patio or sidewalks come to life with Chrismon
                  Care Landscaping!
                </CardText>
                <Button color="primary" href="/hardscapes">
                  Hardscapes
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="card2">
              <CardImg
                top
                width="100%"
                src={process.env.PUBLIC_URL + "/jpeg-8.jpg"}
                alt="Card Image cap"
              />
              <CardBody>
                <CardTitle className="cardtitle">Lawn Care</CardTitle>
                <CardText className="cardtext">
                  Create the yard of your dreams or maintain an existing
                  beautiful lawn with Chrismon Care Landscaping!
                </CardText>
                <Button color="primary" href="/lawncare">
                  Lawn Care
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="6">
            <Card className="card3">
              <CardImg
                top
                width="100%"
                src={process.env.PUBLIC_URL + "/jpeg-7.jpg"}
                alt="Card Image cap"
              />
              <CardBody>
                <CardTitle className="cardtitle">Pruning</CardTitle>
                <CardText className="cardtext">
                  Turn your bushes into works of art or manicure old trees and
                  shrubs using Chrismon Care Landscaping!
                </CardText>
                <Button color="primary" href="/pruning">
                  Pruning
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="card4">
              <CardImg
                top
                width="100%"
                src={process.env.PUBLIC_URL + "/jpeg-8.jpg"}
                alt="Card Image cap"
              />
              <CardBody>
                <CardTitle className="cardtitle">
                  Mulch and Bed Installation
                </CardTitle>
                <CardText className="cardtext">
                  Mulch existing beds in your landscape or create brand new bed
                  spaces with flowers or shrubs with Chrismon Care Landscaping!
                </CardText>
                <Button color="primary" href="/hardscapes">
                  Hardscapes
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
