import React from 'react'
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap'

const Header = () => (
  <Row>
    <Col xs="12" sm="12" md="12">
      <Navbar style={{backgroundColor: "#4ABDAC"}}>
        <NavbarBrand style={{color: '#fff'}} href="/">Search Weather in Your Area</NavbarBrand>
      </Navbar>
    </Col>
  </Row>
);

export default Header