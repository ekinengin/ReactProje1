import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CartSummary from "./CartSummary";
import { Link, NavLink } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="8">
              <h2>
                <i> Northwind App </i>
              </h2>
            </Col>
            <Col xs="2">
              <br></br>
                <Link to="form"> Forma Git </Link>
                <br></br>
                <Link to="form2"> Form2 ye Git </Link>
            </Col>
            <CartSummary removefromcart= { this.props.removefromcart } cart= { this.props.cart }></CartSummary>
          </Row>
        </Container>
        <hr></hr>
      </div>
    );
  }
}
