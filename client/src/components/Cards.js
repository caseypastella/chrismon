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
      <Container className="container">
        <Row>
          <Col sm="4">
            <Card className="card1">
              <CardImg
                top
                width="100%"
                src={process.env.PUBLIC_URL + "/jpeg-10.jpg"}
                alt="Card Image cap"
              />
              <CardBody>
                <CardTitle>Hardscapes</CardTitle>
                <CardText>
                  Make your dream patio or sidewalks come to life with Chrismon
                  Care Landscaping!
                </CardText>
                <Button color="primary" href="/hardscapes">
                  Contact Us!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card className="card2">
              <CardImg
                top
                width="100%"
                src={process.env.PUBLIC_URL + "/jpeg-8.jpg"}
                alt="Card Image cap"
              />
              <CardBody>
                <CardTitle>Lawn Care</CardTitle>
                <CardText>
                  Create the yard of your dreams or maintain an existing
                  beautiful lawn with Chrismon Care Landscaping!
                </CardText>
                <Button color="primary" href="/lawncare">
                  Contact Us!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="card3">
              <CardImg
                top
                width="100%"
                src={process.env.PUBLIC_URL + "/jpeg-7.jpg"}
                alt="Card Image cap"
              />
              <CardBody>
                <CardTitle>Pruning</CardTitle>
                <CardText>
                  Turn your bushes into works of art or manicure old trees and
                  shrubs using Chrismon Care Landscaping!
                </CardText>
                <Button color="primary" href="/pruning">
                  Contact Us!
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
